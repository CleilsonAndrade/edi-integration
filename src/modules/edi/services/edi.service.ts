import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { FileStorageService } from 'src/common/services/file-storage.service';
import { PcclientEntity } from 'src/modules/entities/pcclient.entity';
import { PcconsumEntity } from 'src/modules/entities/pcconsum.entity';
import { PcemprEntity } from 'src/modules/entities/pcempr.entity';
import { PcfilialEntity } from 'src/modules/entities/pcfilial.entity';
import { PcfornecEntity } from 'src/modules/entities/pcfornec.entity';
import { PcpedcEntity } from 'src/modules/entities/pcpedc.entity';
import { PcpediEntity } from 'src/modules/entities/pcpedi.entity';
import { PcplpagEntity } from 'src/modules/entities/pcplpag.entity';
import { PcpracaEntity } from 'src/modules/entities/pcpraca.entity';
import { PcprodutEntity } from 'src/modules/entities/pcprodut.entity';
import { PcusuariEntity } from 'src/modules/entities/pcusuari.entity';
import { DataSource, Like, Repository } from 'typeorm';
import { EdiProcessResultDto } from '../dto/edi-import-result.dto';
import { EDI850Parser } from '../parsers/edi850.parser';
import { FTPService } from './ftp.service';

@Injectable()
export class EDIService {
  private readonly logger = new Logger(EDIService.name);
  private readonly fileStorage = new FileStorageService();

  constructor(
    @InjectRepository(PcpedcEntity, 'winthor_conn')
    private pcpedcRepository: Repository<PcpedcEntity>,
    @InjectRepository(PcpediEntity, 'winthor_conn')
    private pcpediRepository: Repository<PcpediEntity>,
    @InjectRepository(PcfilialEntity, 'winthor_conn')
    private pcfilialRepository: Repository<PcfilialEntity>,
    @InjectRepository(PcprodutEntity, 'winthor_conn')
    private pcproductRepository: Repository<PcprodutEntity>,
    @InjectRepository(PcclientEntity, 'winthor_conn')
    private pcclientRepository: Repository<PcclientEntity>,
    @InjectRepository(PcusuariEntity, 'winthor_conn')
    private pcusuariRepository: Repository<PcusuariEntity>,
    @InjectRepository(PcpracaEntity, 'winthor_conn')
    private pcpracaRepository: Repository<PcpracaEntity>,
    @InjectRepository(PcplpagEntity, 'winthor_conn')
    private pcplpagRepository: Repository<PcplpagEntity>,
    @InjectRepository(PcconsumEntity, 'winthor_conn')
    private pcconsumRepository: Repository<PcconsumEntity>,
    @InjectRepository(PcemprEntity, 'winthor_conn')
    private pcemprRepository: Repository<PcemprEntity>,
    @InjectRepository(PcfornecEntity, 'winthor_conn')
    private pcfornecRepository: Repository<PcfornecEntity>,

    @InjectDataSource('winthor_conn')
    private dataSource: DataSource,
    private parser: EDI850Parser,
    private ftpService: FTPService,
    private configService: ConfigService,
  ) { }

  async findClientCompanyByName(name: string): Promise<PcclientEntity | null> {
    try {
      this.logger.debug(`  → Buscando cliente por nome: ${name}`);

      const client = await this.pcclientRepository
        .createQueryBuilder('client')
        .where({ name: Like(`${name.substring(0, 5).toUpperCase()}%`) })
        .getOne();

      if (client?.customerId) {
        this.logger.debug(`  ✓ Cliente encontrado: Código ${client.customerId} - ${client.name}`);
        return client;
      }

      this.logger.warn(`  ✗ Cliente NÃO encontrado para nome: ${name}`);
      return null;
    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);

      this.logger.error(` ❌ Erro ao buscar cliente por nome ${name}`, stack);
      return null;
    }
  }

  async findCompanyByCnpj(cnpj: string): Promise<string | null> {
    try {
      this.logger.debug(`  → Buscando filial por CNPJ: ${cnpj}`);

      const company = await this.pcfilialRepository
        .createQueryBuilder('filial')
        .where("REGEXP_REPLACE(filial.CGC, '[^0-9]', '') = :cnpj", { cnpj })
        .getOne();

      if (company?.codeBranch) {
        this.logger.debug(`  ✓ Filial encontrada: Código ${company.codeBranch}`);

        const companyCodeString = String(company.codeBranch);
        return companyCodeString;
      }

      this.logger.warn(`  ✗ Filial NÃO encontrada para CNPJ: ${cnpj}`);
      return null;
    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);

      this.logger.error(` ❌ Erro ao buscar filial por CNPJ ${cnpj}`, stack);
      return null;
    }
  }

  async allowedCompanyByCodBranch(companyCodeString: string): Promise<boolean> {
    const allowedCodes = process.env.FINANCIAL_BRANCH
      ? process.env.FINANCIAL_BRANCH.split(',').map(code => code.trim())
      : [];

    const inputCodes = companyCodeString.split(',').map(c => c.trim());

    const isAllowed = inputCodes.every(code => allowedCodes.includes(code));

    if (isAllowed) {
      this.logger.debug(` ✓ Filial(is) ${companyCodeString} permitida(s)`);
      return true;
    } else {
      this.logger.warn(` ✗ Filial(is) ${companyCodeString} NÃO permitida(s).`);
    }

    return false;
  }

  async findProductByFactoryCod(factoryCode: string): Promise<PcprodutEntity | null> {
    try {
      this.logger.debug(`  → Buscando produto por código de fábrica: ${factoryCode}`);

      const product = await this.pcproductRepository.findOne({
        where: {
          manufacturerCode: Number(factoryCode),
        },
      });

      if (product) {
        this.logger.debug(`  ✓ Produto encontrado: CODPROD ${product.productCode}`);
        return product;
      }

      this.logger.warn(`  ✗ Produto NÃO encontrado para código de fábrica: ${factoryCode}`);
      return null;
    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);

      this.logger.error(` ❌ Erro ao buscar produto por código de fábrica ${factoryCode}`, stack);
      return null;
    }
  }

  async getNextSequenceOrderNumber(): Promise<number> {
    this.logger.debug(`→ Obtendo número de pedido...`);

    const lockNextSequenceOrderNumber = `
        SELECT NVL(PROXNUMPED, 1) AS PROXNUMPED 
        FROM PCCONSUM 
        FOR UPDATE WAIT 5
      `;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    const findNextSequenceOrderNumber = await queryRunner.manager.query(lockNextSequenceOrderNumber);

    const startNumPed = findNextSequenceOrderNumber[0].PROXNUMPED;
    const newValueSequenceOrderNumber = startNumPed + 1;

    await queryRunner.manager
      .createQueryBuilder()
      .update(PcconsumEntity)
      .set({ nextOrderNumber: newValueSequenceOrderNumber })
      .execute();

    if (!findNextSequenceOrderNumber || findNextSequenceOrderNumber.length === 0) {
      throw new Error('PCCONSUM vazia ou erro na leitura da sequência.');
    }

    this.logger.debug(`  ✓ Número de pedido obtido: ${newValueSequenceOrderNumber}`);
    await queryRunner.release();

    return newValueSequenceOrderNumber;
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
  //     const byFile = await this.pcpedcRepository
  //       .createQueryBuilder('ped')
  //       .where('ped.ARQUIVO = :fileName', { fileName })
  //       .getOne();

  //     if (byFile) {
  //       this.logger.warn(`  ⚠ EDI já processado (Arquivo: ${fileName}) - NUMPED: ${byFile.numped}`);
  //       return true;
  //     }

  //     // Busca 2: Por número do pedido do fornecedor (PO Number)
  //     const byPO = await this.pcpedcRepository
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

  async importEDI(ediContent: string, fileName: string, ftpPath?: string): Promise<any> {
    const parsed = this.parser.parse(ediContent);

    const branchCode = process.env.FINANCIAL_BRANCH || '';

    const codCompany = await this.findClientCompanyByName(parsed.parties.buyerName);

    if (!codCompany) {
      return null;
    }

    const allowedBranch = await this.allowedCompanyByCodBranch(branchCode)

    if (!allowedBranch) {
      return null;
    }

    const allowedIssuer = Number(process.env.ISSUER_REGISTRATION) || 0;

    const findIssuer = await this.pcemprRepository.findOne({
      where: {
        registration: allowedIssuer,
      },
    });

    if (!findIssuer) {
      this.logger.warn(`  ✗ Emitente NÃO encontrado para matricula: ${allowedIssuer}`);
      return null;
    }
    this.logger.debug(`  ✓ Emitente encontrado: ${findIssuer.registration}`);


    const allowedCodRCA = Number(process.env.RCA_ID) || 0;

    const findRCA = await this.pcusuariRepository.findOne({
      where: {
        userCode: allowedCodRCA
      },
      select: ['name', 'userCode', 'supervisorCode']
    })

    if (!findRCA) {
      this.logger.warn(`  ✗ RCA NÃO encontrado para ID: ${allowedCodRCA}`);
      return null;
    }
    this.logger.debug(`  ✓ RCA encontrado: ${findRCA.userCode} - ${findRCA.name}`);


    const allowedCodSquare = Number(process.env.COD_SQUARE) || 0;

    const findSquare = await this.pcpracaRepository.findOne({
      where: {
        codSquare: allowedCodSquare
      },
      select: ['codSquare', 'square', 'regionNumber',]
    })

    if (!findSquare) {
      this.logger.warn(`  ✗ Praça NÃO encontrada para código: ${allowedCodSquare}`);
      return null;
    }
    this.logger.debug(`  ✓ Praça encontrada: ${findSquare.codSquare} - ${findSquare.square}`);


    const allowedCodPaymentPlan = Number(process.env.COD_PAYMENT_PLAN) || 0;

    const findPaymentPlan = await this.pcplpagRepository.findOne({
      where: {
        codPaymentPlan: allowedCodPaymentPlan,
        status: 'A',
      },
      select: ['codPaymentPlan', 'description', 'status', 'billingCode', 'saleType', 'firstPaymentTerm']
    });

    if (!findPaymentPlan) {
      this.logger.warn(`  ✗ Plano de Pagamento NÃO encontrado para código: ${allowedCodPaymentPlan}`);
      return null;
    }
    this.logger.debug(`  ✓ Plano de Pagamento encontrado: ${findPaymentPlan.codPaymentPlan}`);

    const numped = await this.getNextSequenceOrderNumber();

    const allowedSupplierCode = Number(process.env.SUPPLIER_CODE) || 0;
    const allowedResale = process.env.PROVIDER_TYPE_RESALE || 'T';

    const findCodSupplier = await this.pcfornecRepository.findOne({
      where: {
        supplierCode: Number(allowedSupplierCode),
        resale: allowedResale,
      },
    });

    if (!findCodSupplier) {
      this.logger.warn(`  ✗ Fornecedor NÃO encontrado para código: ${allowedSupplierCode} e tipo de revenda "${allowedResale}"`);
      return null;
    }
    this.logger.debug(`  ✓ Fornecedor encontrado: ${findCodSupplier.supplierCode}`);

    const agora = new Date();

    const horaAtual = agora.getHours();
    const minutosAtuais = agora.getMinutes();

    const dataHojeMeiaNoite: Date = new Date();

    dataHojeMeiaNoite.setHours(0, 0, 0, 0);

    const numPedRca = process.env.NUMPEDRCA || '00524502P';


    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      const order = new PcpedcEntity();

      order.orderId = numped;
      order.loadNumber = 0;
      order.salePercent = 100;
      order.customerOrderNumber = parsed.header.poNumber;
      order.integrationOrigin = 'EDI';
      order.xmlVanOrderId = parsed.header.poNumber;
      order.importDate = dataHojeMeiaNoite;
      order.imported = 'S';
      order.discountPercent = 0;
      order.invoiceFreightValue = 0;
      order.otherExpensesValue = 0;
      order.saleCondition = 1;
      order.hour = horaAtual;
      order.minute = minutosAtuais;
      order.customerOrderDate = dataHojeMeiaNoite;
      order.dispatchFreight = findCodSupplier.dispatchFreightType;
      order.freightSupplierId = findCodSupplier.supplierCode;
      order.loadType = 'R';
      order.term1 = findPaymentPlan.firstPaymentTerm;
      order.averageTerm = findPaymentPlan.firstPaymentTerm;
      order.packagingType = 'U';
      order.orderOrigin = 'T';
      order.importReconciliation = 'N';
      order.regionNumber = findSquare.regionNumber;
      order.financialDiscountPercent = 0;
      order.useWmsIntegrator = 'N';
      order.useTv10SaleCfop = 'S';
      order.branchId = branchCode;
      order.customerId = codCompany.customerId;
      order.representativeId = findRCA.userCode;
      order.regionId = findSquare.codSquare;
      order.paymentPlanId = findPaymentPlan.codPaymentPlan;
      order.saleType = findPaymentPlan.saleType;
      order.billingId = codCompany.idBilling;
      order.issuerId = findIssuer.registration;
      order.date = new Date();
      order.position = 'B';
      order.invoiceBranchId = branchCode;
      order.supervisorId = findRCA.supervisorCode;
      order.observation = `EDI`;

      await queryRunner.manager.save(order);

      await queryRunner.commitTransaction();
      this.logger.debug(`  ✓ Pedido ${numped} salvo com sucesso no WinThor.`);

    } catch (error) {
      await queryRunner.rollbackTransaction();
      this.logger.error(`  ✗ Erro ao salvar pedido no banco: ${error.message}`);
      throw error;
    } finally {
      await queryRunner.release();
    }

    // return
  }

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

          const pedido = await this.importEDI(content, file.name, file.path);

          // this.logger.log('validado=============================', validation);


          await this.fileStorage.saveData('order', content, false, 'edi');

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