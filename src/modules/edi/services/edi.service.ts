import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { FileStorageService } from 'src/common/services/file-storage.service';
import { PcfilialEntity } from 'src/modules/entities/pcfilial.entity';
import { PcpedcEntity } from 'src/modules/entities/pcpedc.entity';
import { PcpediEntity } from 'src/modules/entities/pcpedi.entity';
import { DataSource, Repository } from 'typeorm';
import { EdiProcessResultDto } from '../dto/edi-import-result.dto';
import { EDI850Parser } from '../parsers/edi850.parser';
import { FTPService } from './ftp.service';

@Injectable()
export class EDIService {
  private readonly logger = new Logger(EDIService.name);
  private readonly fileStorage = new FileStorageService();

  constructor(
    @InjectRepository(PcpedcEntity, 'winthor_conn')
    private pedidoRepository: Repository<PcpedcEntity>,
    @InjectRepository(PcpediEntity, 'winthor_conn')
    private itemRepository: Repository<PcpediEntity>,
    @InjectRepository(PcfilialEntity, 'winthor_conn')
    private pcfilialRepository: Repository<PcfilialEntity>,
    @InjectDataSource('winthor_conn')
    private dataSource: DataSource,
    private parser: EDI850Parser,
    private ftpService: FTPService,
    private configService: ConfigService,
  ) { }

  async findCompanyByCnpj(cnpj: string): Promise<string | null> {
    const allowedCodes = process.env.FINANCIAL_BRANCH
      ? process.env.FINANCIAL_BRANCH.split(',')
      : [];

    try {
      this.logger.debug(`  → Buscando filial por CNPJ: ${cnpj}`);

      const company = await this.pcfilialRepository
        .createQueryBuilder('filial')
        .where("REGEXP_REPLACE(filial.CGC, '[^0-9]', '') = :cnpj", { cnpj })
        .getOne();

      if (company?.codeBranch) {
        this.logger.debug(`  ✓ Filial encontrada: Código ${company.codeBranch}`);

        const companyCodeString = String(company.codeBranch);

        if (!allowedCodes.includes(companyCodeString)) {
          this.logger.debug(
            `  ✗ Filial NÃO permitida, as filiais permitidas são as de código: ${allowedCodes.join(', ')}`,
          );
          return null;
        }

        return company.codeBranch;
      }

      this.logger.warn(`  ✗ Filial NÃO encontrada para CNPJ: ${cnpj}`);
      return null;
    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);

      this.logger.error(` ❌ Erro ao buscar filial por CNPJ ${cnpj}`, stack);
      return null;
    }
  }

  /**
   * Verifica se o pedido EDI já foi processado anteriormente
   * Busca por: Nome do Arquivo OU PO Number
   */
  // async isEDIAlreadyProcessed(
  //   poNumber: string,
  //   fileName: string
  // ): Promise<boolean> {
  //   try {
  //     // Busca 1: Por nome do arquivo
  //     const byFile = await this.pedidoRepository
  //       .createQueryBuilder('ped')
  //       .where('ped.ARQUIVO = :fileName', { fileName })
  //       .getOne();

  //     if (byFile) {
  //       this.logger.warn(`  ⚠ EDI já processado (Arquivo: ${fileName}) - NUMPED: ${byFile.numped}`);
  //       return true;
  //     }

  //     // Busca 2: Por número do pedido do fornecedor (PO Number)
  //     const byPO = await this.pedidoRepository
  //       .createQueryBuilder('ped')
  //       .where('ped.NUMPEDFORNEC = :poNumber', { poNumber })
  //       .getOne();

  //     if (byPO) {
  //       this.logger.warn(`  ⚠ EDI já processado (PO Number: ${poNumber}) - NUMPED: ${byPO.numped}`);
  //       return true;
  //     }

  //     // EDI não encontrado - pode processar
  //     this.logger.debug(`  ✓ EDI novo, pode processar (PO: ${poNumber}, File: ${fileName})`);
  //     return false;

  //   } catch (error: unknown) {
  //     const stack = error instanceof Error ? error.stack : String(error);
  //     this.logger.error(` ❌ Erro ao verificar duplicidade do EDI`, stack);
  //     return false;
  //   }
  // }

  async validateEDIContent(ediContent: string, fileName: string): Promise<{
    isValid: boolean;
    parsed?: any;
    reason?: string;
  }> {
    try {
      // 1. Validar se o conteúdo não está vazio
      if (!ediContent || ediContent.trim().length === 0) {
        return { isValid: false, reason: 'Arquivo vazio' };
      }

      // 2. Validar se é um arquivo EDI válido
      if (!ediContent.includes('ISA') || !ediContent.includes('BEG')) {
        return { isValid: false, reason: 'Formato EDI inválido (faltam segmentos ISA/BEG)' };
      }

      // 3. Fazer o parse do EDI
      this.logger.debug(`  → Fazendo parse do arquivo: ${fileName}`);
      const parsed = this.parser.parse(ediContent);

      // 4. Validar dados obrigatórios
      if (!parsed.header?.poNumber) {
        return { isValid: false, reason: 'PO Number não encontrado' };
      }

      if (!parsed.items || parsed.items.length === 0) {
        return { isValid: false, reason: 'Nenhum item encontrado no EDI' };
      }

      // 5. Verificar se já foi processado (por arquivo OU PO Number)
      // const alreadyProcessed = await this.isEDIAlreadyProcessed(
      //   parsed.header.poNumber,
      //   fileName
      // );

      // if (alreadyProcessed) {
      //   return {
      //     isValid: false,
      //     parsed,
      //     reason: 'EDI já processado anteriormente'
      //   };
      // }

      // this.logger.log('parser=======================', parsed);

      // 6. Tudo OK - pode processar
      this.logger.debug(`  ✓ EDI validado com sucesso`);
      return { isValid: true, parsed };

    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);
      this.logger.error(` ❌ Erro ao validar EDI ${fileName}`, stack);
      return {
        isValid: false,
        reason: `Erro no parse: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  // async importEDI(ediContent: string, fileName: string, ftpPath?: string): Promise<EdiImportResultDto> {
  //   const parsed = this.parser.parse(ediContent);

  //   return await this.dataSource.transaction(async (manager) => {
  //     // Criar cabeçalho do pedido
  //     const pedido = new PcpedcEntity();
  //     pedido.numpedfornec = parsed.header.poNumber;
  //     pedido.data = this.parser.parseDate(parsed.header.poDate);
  //     pedido.numcontroledi = parsed.header.controlNumber;
  //     pedido.projeto = parsed.header.projectNumber;
  //     pedido.numserie = parsed.header.serialNumber;

  //     // TODO: Buscar códigos de cliente/fornecedor nas tabelas do Winthor
  //     // Por ora, usando valores fixos - você deve adaptar
  //     pedido.codcli = 1; // Buscar na PCCLIENT onde CLIENTE = parsed.parties.buyerName
  //     pedido.codfornec = 1; // Buscar na PCFORNEC onde FORNECEDOR = parsed.header.vendorName
  //     pedido.codfilial = parsed.parties.shipToLocation;

  //     // Calcular totais
  //     pedido.qtitens = parsed.totals.totalLineItems;
  //     pedido.qtpecas = parsed.totals.totalQuantity;
  //     pedido.vltotal = parsed.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

  //     pedido.arquivo = fileName;
  //     pedido.pathftp = ftpPath;

  //     const savedPedido = await manager.save(PcpedcEntity, pedido);

  //     // Criar itens do pedido
  //     const itens = parsed.items.map(itemData => {
  //       const item = new PcpediEntity();
  //       item.numped = savedPedido.numped;
  //       item.numseqorig = itemData.lineNumber;

  //       // TODO: Buscar CODPROD na PCPRODUT usando o código do fornecedor ou EAN
  //       item.codprod = 1; // Buscar onde CODAUXILIAR = itemData.vendorPartNumber ou CODEAN = itemData.upc

  //       item.codprodcli = itemData.buyerPartNumber;
  //       item.codprodfor = itemData.vendorPartNumber;
  //       item.descricao = itemData.description;
  //       item.qt = itemData.quantity;
  //       item.pvenda = itemData.unitPrice;
  //       item.unit = itemData.unitPrice;
  //       item.vltotal = itemData.quantity * itemData.unitPrice;
  //       item.codean = itemData.upc;
  //       item.pesobruto = itemData.grossWeight;
  //       item.pesoliq = itemData.netWeight;
  //       item.dtentrega = itemData.deliveryDate
  //         ? this.parser.parseDate(itemData.deliveryDate)
  //         : null;
  //       item.codfilial = itemData.plantCode;

  //       return item;
  //     });

  //     await manager.save(PcpediEntity, itens);

  //     return {
  //       numped: savedPedido.numped,
  //       numpedfornec: savedPedido.numpedfornec,
  //       qtitens: savedPedido.qtitens,
  //       qtpecas: savedPedido.qtpecas,
  //       arquivo: savedPedido.arquivo,
  //       dtimportacao: savedPedido.dtimportacao,
  //     };
  //   });
  // }

  // async processFromFTP(): Promise<EdiProcessResultDto> {
  async processFromFTP(): Promise<any> {
    const remotePath = this.configService.get<string>('FTP_REMOTE_PATH', '/edi');

    const result: EdiProcessResultDto = {
      totalProcessados: 0,
      sucessos: 0,
      erros: 0,
      pedidos: [],
      arquivosComErro: [],
    };

    try {
      await this.ftpService.connect();

      const files = await this.ftpService.listFiles(remotePath);
      result.totalProcessados = files.length;

      this.logger.log(`Encontrados ${files.length} arquivos EDI no FTP`);

      for (const file of files) {
        try {
          this.logger.log(`Processando: ${file.name}`);

          const content = await this.ftpService.downloadFile(file.path);

          const validation = await this.validateEDIContent(content, file.name);

          // if (!validation.isValid) {
          //   this.logger.warn(`  ⚠ Arquivo ignorado: ${validation.reason}`);

          //   // Se já foi processado, move para "processed"
          //   if (validation.reason && validation.reason.includes('já processado')) {
          //     this.logger.warn(`  ⚠ Arquivo já processado: ${file.name}`);
          //   }
          //   // Se tem erro de formato, move para "errors"
          //   else {
          //     result.erros++;
          //     result.arquivosComErro.push(`${file.name} - ${validation.reason}`);
          //   }

          //   continue; // ⭐ Pula para o próximo arquivo
          // }

          // const pedido = await this.importEDI(content, file.name, file.path);

          this.logger.log('validado=============================', validation);


          await this.fileStorage.saveData('order', content, false, '.edi');

          this.logger.log(`  ✅ Arquivo processado com sucesso`);

          result.sucessos++;
          // result.pedidos.push(pedido);

          // this.logger.log(`✓ PO ${pedido.numpedfornec} importada (NUMPED: ${pedido.numped})`);
        } catch (error) {
          result.erros++;
          result.arquivosComErro.push(file.name);

          this.logger.error(`✗ Erro ao processar ${file.name}:`, error.stack);
        }
      }

      this.logger.log(`Processamento concluído: ${result.sucessos} sucessos, ${result.erros} erros`);

    } catch (error) {
      this.logger.error('Erro ao processar FTP:', error.stack);
      throw error;
    } finally {
      this.ftpService.disconnect();
    }

    return result;
  }
}