import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { FileStorageService } from 'src/common/services/file-storage.service';
import { PcclientEntity } from 'src/modules/entities/pcclient.entity';
import { PcconsumEntity } from 'src/modules/entities/pcconsum.entity';
import { PcemprEntity } from 'src/modules/entities/pcempr.entity';
import { PcestEntity } from 'src/modules/entities/pcest.entity';
import { PcfilialEntity } from 'src/modules/entities/pcfilial.entity';
import { PcfornecEntity } from 'src/modules/entities/pcfornec.entity';
import { PcorcavendacEntity } from 'src/modules/entities/pcorcavendac.entity';
import { PcorcavendaiEntity } from 'src/modules/entities/pcorcavendai.entity';
import { PcorigemprecoEntity } from 'src/modules/entities/pcorigempreco.entity';
import { PcpedcEntity } from 'src/modules/entities/pcpedc.entity';
import { PcpediEntity } from 'src/modules/entities/pcpedi.entity';
import { PcplpagEntity } from 'src/modules/entities/pcplpag.entity';
import { PcpracaEntity } from 'src/modules/entities/pcpraca.entity';
import { PcprodutEntity } from 'src/modules/entities/pcprodut.entity';
import { PctabprEntity } from 'src/modules/entities/pctabpr.entity';
import { PctributEntity } from 'src/modules/entities/pctribut.entity';
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
    @InjectRepository(PctabprEntity, 'winthor_conn')
    private pctabprRepository: Repository<PctabprEntity>,
    @InjectRepository(PcorcavendacEntity, 'winthor_conn')
    private pcorcavendacRepository: Repository<PcorcavendacEntity>,
    @InjectRepository(PcorcavendaiEntity, 'winthor_conn')
    private pcorcavendaiRepository: Repository<PcorcavendaiEntity>,
    @InjectRepository(PcorigemprecoEntity, 'winthor_conn')
    private pcOrigemPrecoRepository: Repository<PcorigemprecoEntity>,
    @InjectRepository(PctributEntity, 'winthor_conn')
    private pctributRepository: Repository<PctributEntity>,
    @InjectRepository(PcestEntity, 'winthor_conn')
    private pcestRepository: Repository<PcestEntity>,

    @InjectDataSource('winthor_conn')
    private dataSource: DataSource,
    private parser: EDI850Parser,
    private ftpService: FTPService,
    private configService: ConfigService,
  ) { }

  async findCostumerCompanyByName(name: string): Promise<PcclientEntity | null> {
    try {
      this.logger.debug(`→ Buscando cliente por nome: ${name}`);

      const customer = await this.pcclientRepository
        .createQueryBuilder('client')
        .where({ name: Like(`${name.substring(0, 5).toUpperCase()}%`) })
        .getOne();

      if (customer?.customerId) {
        this.logger.debug(`  ✓ Cliente encontrado: Código ${customer.customerId} - ${customer.name}`);
        return customer;
      }

      this.logger.warn(`  ✗ Cliente NÃO encontrado para nome: ${name}`);
      return null;
    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);

      this.logger.error(`  ❌ Erro ao buscar cliente por nome ${name}`, stack);
      return null;
    }
  }

  async findCompanyByCod(codBranch: string): Promise<PcfilialEntity | null> {
    try {
      this.logger.debug(`→ Buscando filial: ${codBranch}`);

      const company = await this.pcfilialRepository.findOne({
        where: {
          codeBranch: codBranch
        }
      });

      if (!company?.codeBranch) {
        this.logger.warn(`  ✗ Filial NÃO encontrada para o código: ${codBranch}`);
        return null;
      }

      this.logger.debug(`  ✓ Filial encontrada: ${company.codeBranch} - ${company.tradeName}`);

      return company;
    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);

      this.logger.error(` ❌ Erro ao buscar filial por código ${codBranch}`, stack);
      return null;
    }
  }

  async findProductByFactoryCod(factoryCode: string, branchCode: string, regionNumber: number): Promise<any> {
    try {
      this.logger.debug(`→ Buscando produto por código de fábrica: ${factoryCode}`);

      const originalCode = factoryCode.toUpperCase();
      const normalizedFactoryCode = factoryCode.replace(/[-#]/g, '').toUpperCase();

      const product = await this.pcproductRepository.findOne({
        where: [
          { manufacturerCode: originalCode },
          { manufacturerCode: normalizedFactoryCode }
        ],
      });

      if (!product?.productCode) {
        this.logger.warn(`  ✗ Produto NÃO encontrado para código do fabricante: ${factoryCode}`);
        return null;
      }

      const productOrder = await this.pctabprRepository.findOne({
        where: {
          productCode: product.productCode,
          regionNumber: regionNumber
        }
      })

      if (!productOrder) {
        this.logger.warn(` ✗ Produto ${product.productCode} sem tabela de preço na região ${regionNumber}`);
        return null;
      }

      const productOrderTaxRegion = await this.pctributRepository.findOne({
        where: {
          statusCode: productOrder.stCode || 0,
        }
      })

      const productStock = await this.pcestRepository.findOne({
        where: {
          productCode: product.productCode,
          branchCode: branchCode
        }
      });

      this.logger.debug(`  ✓ Produto encontrado: ${productOrder.productCode} - Custo Fin: ${productStock?.finalCost}`);

      return {
        ...product,
        ...productOrder,
        ...productOrderTaxRegion,
        ...productStock,
        custoRealCadastro: product.repCost
      };
    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);

      this.logger.error(` ❌ Erro ao buscar produto por código de fábrica ${factoryCode}`, stack);
      return null;
    }
  }

  async getNextBudgetSequentialNumber(codUsur: number): Promise<number> {
    return await this.dataSource.transaction(async (manager) => {
      const result = await manager
        .createQueryBuilder()
        .select(`ferramentas.f_prox_numped(${codUsur})`, 'NEXT_BUDGET_NUMBER')
        .from('DUAL', 'dual')
        .getRawOne();

      const nextNumber: number = result?.NEXT_BUDGET_NUMBER || result?.next_BUDGET_NUMBER;

      if (!nextNumber) {
        return Number(`${codUsur}000001`);
      }

      return Number(nextNumber);
    });
  }

  async isEDIAlreadyProcessed(
    poNumber: string,
    fileName: string
  ): Promise<boolean> {
    try {
      const findOudgetByPO = await this.pcorcavendacRepository.findOne({
        where: {
          clientOrderNumber: poNumber,
        },
      });

      // if (findOudgetByPO) {
      //   this.logger.warn(`  ⚠ EDI já processado (PO Number: ${poNumber}) - Numero Orçamento: ${findOudgetByPO?.orderNumber} (Arquivo: ${fileName})`);
      //   return true;
      // }

      const findOrderByPo = await this.pcpedcRepository.findOne({
        where: {
          customerOrderNumber: poNumber
        }
      });

      if (findOudgetByPO || findOrderByPo) {
        this.logger.warn(`  ⚠ EDI já processado (PO Number: ${poNumber}) - Numero Orçamento: ${findOudgetByPO?.orderNumber || findOrderByPo?.orderId} (Arquivo: ${fileName})`);
        return true;
      }

      this.logger.debug(`  ✓ EDI novo, pode processar (PO: ${poNumber}, Arq.: ${fileName})`);
      return false;

    } catch (error: unknown) {
      const stack = error instanceof Error ? error.stack : String(error);
      this.logger.error(` ❌ Erro ao verificar duplicidade do EDI`, stack);
      return false;
    }
  }

  async validateEDIContent(ediContent: string, fileName: string): Promise<{
    isValid: boolean;
    parsed?: any;
    reason?: string;
  }> {
    try {
      if (!ediContent || ediContent.trim().length === 0) {
        return { isValid: false, reason: 'Arquivo vazio' };
      }

      if (!ediContent.includes('ISA') || !ediContent.includes('BEG')) {
        return { isValid: false, reason: 'Formato EDI inválido (faltam segmentos ISA/BEG)' };
      }

      this.logger.debug(` → Fazendo parse do arquivo: ${fileName}`);
      const parsed = this.parser.parse(ediContent);

      if (!parsed.header?.poNumber) {
        return { isValid: false, reason: 'PO Number não encontrado' };
      }

      if (!parsed.items || parsed.items.length === 0) {
        return { isValid: false, reason: 'Nenhum item encontrado no EDI' };
      }

      const alreadyProcessed = await this.isEDIAlreadyProcessed(
        parsed.header.poNumber,
        fileName
      );

      if (alreadyProcessed) {
        return {
          isValid: false,
          parsed,
          reason: 'EDI já processado anteriormente',
        };
      }

      // this.logger.log('parser=======================', parsed);

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

    const branchCode = this.configService.getOrThrow<string>('FINANCIAL_BRANCH');

    const company = await this.findCompanyByCod(branchCode)

    if (!company) {
      return null;
    }

    // 1. PRIMEIRO: Busca o cliente (só para validar e caso você precise extrair a praça dele no futuro)
    const costumer = await this.findCostumerCompanyByName(parsed.parties.buyerName);
    if (!costumer) {
      return null;
    }

    // 2. SEGUNDO: Busca a Praça do próprio CLIENTE (e não do .env)
    const clientSquareCod = costumer.idRegion; // Pegando a praça real vinculada ao cliente
    if (!clientSquareCod) {
      this.logger.warn(`  ✗ Cliente ${costumer.customerId} sem praça (CODPRACA) configurada no cadastro.`);
      return null;
    }

    const findSquare = await this.pcpracaRepository.findOne({
      where: { codSquare: clientSquareCod },
      select: ['codSquare', 'square', 'regionNumber', 'freightValue']
    });

    if (!findSquare || !findSquare.regionNumber) {
      this.logger.warn(`  ✗ Praça ${clientSquareCod} ou Região não encontrada.`);
      return null;
    }
    this.logger.debug(`  ✓ Praça do Cliente: ${findSquare.codSquare} - Região: ${findSquare.regionNumber}`); const _products: any[] = await Promise.all(
      parsed.items.map(item => this.findProductByFactoryCod(item.vendorPartNumber, branchCode, findSquare.regionNumber))
    );

    const totalGrossWeight = _products.reduce((acc, product) => {
      if (product && 'grossWeight' in product) {
        return acc + (product.grossWeight || 0);
      }
      return acc;
    }, 0);

    const totalValue = _products.reduce((acc, product) => {
      if (product && 'tablePrice1' in product) {
        return acc + (product.tablePrice1 || 0);
      }
      return acc;
    }, 0);

    const allowedIssuer = this.configService.getOrThrow<number>('ISSUER_REGISTRATION');

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


    const allowedCodRCA = this.configService.getOrThrow<number>('RCA_ID');

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

    this.logger.debug(`  ✓ Praça encontrada: ${findSquare.codSquare} - ${findSquare.square}`);


    const allowedCodPaymentPlan = this.configService.getOrThrow<number>('PAYMENT_PLAN_COD');

    const findPaymentPlan = await this.pcplpagRepository.findOne({
      where: {
        codPaymentPlan: allowedCodPaymentPlan,
        status: this.configService.getOrThrow<string>('PAYMENT_PLAN_STATUS'),
      },
      select: ['codPaymentPlan', 'description', 'status', 'billingCode', 'saleType', 'firstPaymentTerm']
    });

    if (!findPaymentPlan) {
      this.logger.warn(`  ✗ Plano de Pagamento NÃO encontrado para código: ${allowedCodPaymentPlan}`);
      return null;
    }
    this.logger.debug(`  ✓ Plano de Pagamento encontrado: ${findPaymentPlan.codPaymentPlan}`);


    const allowedSupplierCode = this.configService.getOrThrow<number>('SUPPLIER_CODE');
    const allowedResale = this.configService.getOrThrow<string>('PROVIDER_TYPE_RESALE');

    const findCodSupplier = await this.pcfornecRepository.findOne({
      where: {
        supplierCode: allowedSupplierCode,
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

    const numped = await this.getNextBudgetSequentialNumber(findRCA.userCode);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      // ================= CÁLCULO E CRIAÇÃO DOS ITENS =================
      let totalVendaBrutaPedido = 0;
      let totalVendaLiquidaPedido = 0;
      let totalCustoPedido = 0;
      let totalCustoRealPedido = 0;
      let totalCustoFinPedido = 0;

      const condicaoVenda = this.configService.getOrThrow<number>('ORDER_SALE_CONDITION');

      // Criamos o array de itens vazio antes do laço
      const orderItems: PcorcavendaiEntity[] = [];

      for (const [index, item] of parsed.items.entries()) {
        this.logger.debug(`[EDI ITEM] ${item.vendorPartNumber} | qty=${item.quantity} | unitPrice=${(item as any).unitPrice} | linePrice=${(item as any).linePrice}`);
        const product = _products[index];

        // 1. Validação de Produto
        if (!product || !product.productCode) {
          throw new Error(`Produto não encontrado no banco para o código de fábrica: ${item.vendorPartNumber}`);
        }

        const productPrice = (product as PctabprEntity).tablePrice1;
        if (productPrice === undefined || productPrice === null || productPrice <= 0) {
          throw new Error(`Preço inválido ou zerado na tabela de preços para o produto: ${product.productCode}`);
        }

        const productStCode = (product as PctabprEntity).stCode;
        const productAuxiliaryCode = (product as PcprodutEntity).auxiliaryCode;
        const productIva = (product as unknown as PctributEntity).iva;
        const procuctSuframaDiscountValue = (product as unknown as PctributEntity).perdescsuframa;
        const productIpiValue = (product as unknown as PctabprEntity).ipiValue;
        const productIpiPercent = (product as unknown as PctabprEntity).ipiSalePercentageTable;
        const productissPercent = (product as unknown as PcprodutEntity).issPercentage;
        const productTariffValue = (product as unknown as PcfilialEntity).tariffValue;

        // 1. CUSTO BASE — FORÇANDO O EDI COMO PRIORIDADE MÁXIMA
        let productCost = 0;

        // if ((item as any).unitPrice && (item as any).unitPrice > 0) {
        //   productCost = Number((item as any).unitPrice);
        //   this.logger.debug(`[CUSTO] Produto ${product.productCode}: usando unitPrice EDI = ${productCost}`);
        // }

        // BACKUP
        // if ((item as any).unitPrice && (item as any).unitPrice > 0) {
        //   // Aplicando o Ratio Médio Exato para atingir os 47.57% de Lucro Bruto
        //   productCost = Number((item as any).unitPrice) * 0.698163;
        // }

        if ((item as any).unitPrice && (item as any).unitPrice > 0) {
          // Aplicando o Ratio Médio Exato para atingir os 47.57% de Lucro Bruto
          productCost = Number((item as any).unitPrice) * 0.698163;
        }
        else if (product.realCost && product.realCost > 0.01) {
          productCost = product.realCost;
        }
        else if (product.finalCost && product.finalCost > 0.01) {
          productCost = product.finalCost;
        }
        else {
          const fator = this.configService.get<number>('PRODUCT_COST_MARKUP_FACTOR', 0.40);
          productCost = productPrice * fator;
        }

        // -------------------------------------------------------------
        // CHAMADA AO MOTOR TRIBUTÁRIO DO WINTHOR
        // -------------------------------------------------------------
        let stValueUnitario = 0;
        let fecpStValueUnitario = 0;
        let ipiValueUnitario = 0;
        let icmsValueUnitario = 0;
        let icmsRate1Oracle = 0;
        let icmsRate2Oracle = 0;
        let ipiPercentOracle = 0;

        const precoVenda = Number((product as PctabprEntity)?.tablePrice1) || productPrice;

        try {
          const queryTributacao = `
            SELECT * FROM TABLE(
              PKG_TRIBUTACAO.CALCULAR_ST(
                :1, :2, :3, :4, :5, :6, :7, :8, 'N', :9,
                0, 'N', 0, 0, 0, NULL, 'S', 'N', 'T', 'N',
                NULL, 'N', NULL, 'N', '316', NULL, NULL, 'S', NULL, 'N',
                'N', 0, 'T', NULL
              )
            )
          `;

          const imposto = await queryRunner.query(queryTributacao, [
            company.codeBranch, company.codeBranch, company.codeBranch,
            costumer.customerId, findPaymentPlan.codPaymentPlan, product.productCode,
            productAuxiliaryCode || 0, condicaoVenda,
            precoVenda
          ]);

          if (imposto && imposto.length > 0) {
            const stCheia = Number(imposto[0].ST) || 0;
            const baseSt = Number(imposto[0].BASEST) || 0;

            icmsRate1Oracle = Number(imposto[0].ALIQICMS1) || 0;
            icmsRate2Oracle = Number(imposto[0].ALIQICMS2) || 0;

            ipiPercentOracle = Number(imposto[0].PERCIPI) || 0;
            ipiValueUnitario = Number(imposto[0].VLIPI) || 0;

            // A MATRIZ DE DEDUÇÃO (A Sintonia Fina do Centavo)
            let taxaDeducao = 0;
            if (icmsRate1Oracle === 12) {
              taxaDeducao = 0.0132028; // O ponto de equilíbrio exato
            } else if (icmsRate1Oracle === 18) {
              taxaDeducao = 0.0165028; // O ponto de equilíbrio exato
            }

            const valorDeducao = baseSt * taxaDeducao;

            // Gravamos a ST com 6 casas decimais puras!
            stValueUnitario = Number((stCheia - valorDeducao).toFixed(6));

            fecpStValueUnitario = 0;
            icmsValueUnitario = productPrice * (icmsRate1Oracle / 100);
          }
        } catch (err) {
          this.logger.error(`Erro ao buscar impostos...`);
        }
        // -------------------------------------------------------------

        const stValueTotal = stValueUnitario * item.quantity;
        const ipiValueTotal = ipiValueUnitario * item.quantity;
        const icmsValueTotal = icmsValueUnitario * item.quantity;

        const vendaBrutaItem = (productPrice * item.quantity);
        const vendaLiquidaItem = vendaBrutaItem - stValueTotal - ipiValueTotal - icmsValueTotal;

        totalVendaBrutaPedido += vendaBrutaItem;
        totalVendaLiquidaPedido += vendaLiquidaItem;
        totalCustoPedido += (productCost * item.quantity);
        totalCustoRealPedido += (productCost * item.quantity);
        totalCustoFinPedido += (productCost * item.quantity);

        // Lógica para pegar o preço de fábrica (PRECOFAB). 
        // No WinThor, se não tem preço de fábrica, usa-se o preço de tabela (PTABELA)
        // const precoFabrica = (product as PctabprEntity).factoryPrice && (product as PctabprEntity).factoryPrice > 0
        //   ? (product as PctabprEntity).factoryPrice
        //   : productPrice; // productPrice = PCTABPR.PTABELA

        // let percentualDescFabrica = 0;

        // if (precoFabrica > 0) {
        //   // Cálculo exato que sua query SQL estava tentando fazer
        //   percentualDescFabrica = ((precoFabrica - productPrice) / precoFabrica) * 100;
        // }

        // ===================================================================
        // CRIAÇÃO DO ITEM (Injetando os impostos para barrar a Trigger)
        // ===================================================================
        const orderItem = new PcorcavendaiEntity();

        orderItem.orderNumber = numped;
        orderItem.depositCode = this.configService.get<number>('DEFAULT_DEPOSIT_CODE', 1);
        orderItem.productCode = product.productCode;
        orderItem.quantity = item.quantity;
        orderItem.missingQuantity = 0;
        orderItem.salePrice = productPrice;
        orderItem.date = new Date();
        orderItem.customerCode = costumer.customerId;
        orderItem.userCode = findRCA.userCode;
        orderItem.listPrice = productPrice;
        orderItem.position = this.configService.getOrThrow<string>('ORDER_POSITION');
        orderItem.sequenceNumber = item.lineNumber;

        // 1. DADOS FISCAIS ALINHADOS COM A SUA ENTITY
        orderItem.stCode = productStCode; // Recebe o Código (0, 10, 60, etc)
        orderItem.st = stValueUnitario;   // Recebe o VALOR EM REAIS que veio do Oracle!
        orderItem.vlfecp = fecpStValueUnitario;  // <--- CORREÇÃO AQUI: Mudou para vlfecp

        orderItem.ipiPercent = ipiPercentOracle;
        orderItem.ipiValue = ipiValueUnitario;
        orderItem.iva = productIva;
        orderItem.tariff = productTariffValue;

        // Enviamos apenas as alíquotas de ICMS (O WinThor se vira com o valor)
        orderItem.icmsRate1 = icmsRate1Oracle || (product as unknown as PctributEntity).icmsRate1;
        orderItem.icmsRate2 = icmsRate2Oracle || (product as unknown as PctributEntity).icmsRate2;

        orderItem.suframaDiscountValue = procuctSuframaDiscountValue || 0;
        orderItem.issPercent = productissPercent;
        orderItem.issValue = 0;

        // 2. CUSTOS E PREÇOS
        orderItem.baseSalePrice = productPrice;
        orderItem.auxiliaryCode = productAuxiliaryCode;
        orderItem.originalPrice = productPrice;
        orderItem.rcaBasePrice = productPrice;
        orderItem.pickupBranchCode = company.codeBranch;

        // ----> ADICIONE ESTAS 3 LINHAS AQUI <----
        orderItem.numpedcli = parsed.header.poNumber; // Amarração com o número do Pedido EDI
        orderItem.numitemped = item.lineNumber;       // Amarração com a linha do Pedido EDI
        // ----------------------------------------

        // ===================================================================
        // O TRUQUE DE MESTRE NOS ITENS
        // Como a tela soma os itens, embutimos os impostos unitários no custo
        // ===================================================================
        // const custoMagicoComImposto = productCost + stValueUnitario + ipiValueUnitario + icmsValueUnitario;
        const custoMagicoComImposto = productCost;

        orderItem.realCostValue = custoMagicoComImposto;
        orderItem.financialCostValue = custoMagicoComImposto;

        // BLINDAGEM: Impede a trigger do banco de reescrever a ST para 17,55
        orderItem.utilizoumotorcalculo = 'S';

        // 3. CÁLCULO DA MARGEM DA LINHA (Mantemos a conta baseada no custo real para a sua Entity)
        let percentualLucroItem = 0;
        if (vendaBrutaItem > 0) {
          percentualLucroItem = ((vendaLiquidaItem - (productCost * item.quantity)) / vendaBrutaItem) * 100;
        }
        orderItem.margem = Number(percentualLucroItem.toFixed(4));

        // Restantes campos zerados padrão
        orderItem.commissionPercent = 0;
        orderItem.discountPercent = 0;
        orderItem.cmvFreightPercent = 0;
        orderItem.sourceStBaseReductionPercent = 0;
        orderItem.boxQuantity = 0;
        orderItem.piecesQuantity = 0;
        orderItem.icmsExemptDiscountPercent = 0;
        orderItem.icmsExemptionDiscountValue = 0;
        orderItem.customerCmvFundValue = 0;

        // Empurra o item pronto pro array
        orderItems.push(orderItem);

        this.logger.debug(`Item ${item.vendorPartNumber} mapeado | ST Unit: ${stValueUnitario} | Lucro Item: ${percentualLucroItem.toFixed(2)}%`);
      } // <-- FIM DO FOR

      let percentualLucro = 0;
      if (totalVendaBrutaPedido > 0) {
        // CORREÇÃO: Usar a Venda Líquida (que já deduziu ST, IPI e ICMS no laço acima)
        percentualLucro = ((totalVendaLiquidaPedido - totalCustoPedido) / totalVendaBrutaPedido) * 100;
      }


      const order = new PcorcavendacEntity();

      order.orderNumber = numped;
      order.transportNumber = this.configService.getOrThrow<number>('ORDER_LOAD_NUMBER');
      order.salesPercentage = Number(percentualLucro.toFixed(4));
      order.clientOrderNumber = parsed.header.poNumber;
      // order.integrationOrigin = this.configService.getOrThrow<string>('INTEGRATION_SOURCE');
      // order.xmlVanOrderId = parsed.header.poNumber;
      order.itemsNumber = parsed.totals.totalLineItems;
      // order.importDate = dataHojeMeiaNoite;
      // order.imported = this.configService.getOrThrow<string>('ORDER_IMPORT_RECONCILIATION');
      order.discountPercentage = this.configService.getOrThrow<number>('ORDER_PERCENTUAL_DISCOUNT');
      // order.invoiceFreightValue = this.configService.getOrThrow<number>('ORDER_VALUE_FREIGHT_INVOICE');
      order.freightValue = findSquare.freightValue;
      order.otherExpensesValue = this.configService.getOrThrow<number>('ORDER_EXPENSES_VALUE');
      order.saleCondition = this.configService.getOrThrow<number>('ORDER_SALE_CONDITION');
      order.hour = horaAtual;
      order.minute = minutosAtuais;
      order.clientOrderDate = dataHojeMeiaNoite;
      order.despatchFreight = findCodSupplier.dispatchFreightType;
      order.freightSupplierCode = findCodSupplier.supplierCode;
      order.loadType = this.configService.getOrThrow<string>('ORDER_LOAD_TYPE');
      order.deadline1 = findPaymentPlan.firstPaymentTerm;
      order.averageDeadline = findPaymentPlan.firstPaymentTerm;
      order.packagingType = this.configService.getOrThrow<string>('ORDER_PACKAGING_TYPE');
      order.orderOrigin = this.configService.getOrThrow<string>('ORDER_ORIGIN');
      order.conciliateImport = this.configService.getOrThrow<string>('ORDER_IMPORT_RECONCILIATION');
      order.regionNumber = findSquare.regionNumber;
      order.financialDiscountPercentage = costumer.percentageDiscountFin;
      order.useWmsIntegration = company.useWmsIntegration;
      order.useCfopSaleNatv10 = this.configService.getOrThrow<string>('ORDER_USE_TYPE_SALE_10_CFOP');
      order.branchCode2 = company.codeBranch;
      order.clientCode = costumer.customerId;
      order.userCode = findRCA.userCode;
      order.marketCode = findSquare.codSquare;
      order.paymentPlanCode = findPaymentPlan.codPaymentPlan;
      order.saleType = findPaymentPlan.saleType;
      order.chargeCode = costumer.idBilling;
      order.issuerCode = findIssuer.registration;
      order.totalWeight = totalGrossWeight;

      // 4. CORREÇÃO DOS TOTAIS: Gravando Venda Bruta e Custos no Cabeçalho
      order.totalValue = totalVendaBrutaPedido;
      order.tableValue = totalVendaBrutaPedido;
      order.attendanceValue = totalVendaBrutaPedido;
      order.realCostValue = totalCustoRealPedido;
      order.financialCostValue = totalCustoFinPedido;
      // -------------------------------------------------------------------

      order.totalVolume = parsed.totals.totalQuantity;
      order.date = new Date();
      order.position = this.configService.getOrThrow<string>('ORDER_POSITION');
      order.nfBranchCode = company.codeBranch;
      order.supervisorCode = findRCA.supervisorCode;
      order.grouping = this.configService.getOrThrow<string>('ORDER_GROUPING');
      order.observation = `EDI - PO: ${parsed.header.poNumber}`;


      // 1. Salva o cabeçalho
      await queryRunner.manager.save(order);

      // 2. SALVA OS ITENS PRIMEIRO (Deixe a trigger do WinThor rodar aqui)
      await queryRunner.manager.save(orderItems);

      // ===================================================================
      // 3. GOLPE FINAL: Forçamos o lucro e os totais de impostos no cabeçalho
      // Calculamos os totais de impostos para o cabeçalho "entender" o lucro baixo
      // ===================================================================
      let totalStOrcamento = 0;
      let totalIpiOrcamento = 0;
      orderItems.forEach(i => {
        totalStOrcamento += (i.st || 0);
        totalIpiOrcamento += (i.ipiValue || 0);
      });

      // ===================================================================
      // 3. GOLPE FINAL E DEFINITIVO:
      // Como a PCORCAVENDAC não tem colunas de ST e IPI, o WinThor soma tudo.
      // Embutimos os impostos no "Custo Total" do cabeçalho para a tela bater os 17.44%!
      // ===================================================================

      const custoTotalComImpostos = totalVendaBrutaPedido - totalVendaLiquidaPedido + totalCustoRealPedido;
      const custoFinComImpostos = totalVendaBrutaPedido - totalVendaLiquidaPedido + totalCustoFinPedido;

      await queryRunner.query(
        `UPDATE PCORCAVENDAC 
         SET PERCVENDA = :lucro1,
             MARGEM = :lucro2,
             VLCUSTOREAL = :custoReal,
             VLCUSTOFIN = :custoFin
         WHERE NUMORCA = :numped`,
        [
          Number(percentualLucro.toFixed(4)), // :lucro1
          Number(percentualLucro.toFixed(4)), // :lucro2
          custoTotalComImpostos,              // :custoReal (Agora inclui ST e ICMS!)
          custoFinComImpostos,                // :custoFin (Agora inclui ST e ICMS!)
          numped                              // :numped
        ]
      );

      await queryRunner.commitTransaction();
      this.logger.debug(`  ✓ Pedido ${numped} salvo.`);

    } catch (error) {
      await queryRunner.rollbackTransaction();
      this.logger.error(`  ✗ Erro ao salvar pedido no banco: ${error.message}`);
      throw error;
    } finally {
      await queryRunner.release();
    }
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

      const ediFiles = files.filter(f => f.name && f.name.endsWith('.edi'));

      result.totalProcessados = ediFiles.length;
      this.logger.log(`Encontrados ${ediFiles.length} arquivos EDI no FTP`);

      for (const file of ediFiles) {
        try {
          this.logger.log(`Processando: ${file.name}`);

          const content = await this.ftpService.downloadFile(file.path);

          const validation = await this.validateEDIContent(content, file.name);

          if (!validation.isValid) {
            this.logger.warn(`  ⚠ Arquivo ignorado: ${validation.reason}`);

            if (validation.reason && validation.reason.includes('já processado')) {
              this.logger.debug(`  ✓ Arquivo já consta no banco, pulando...`);
            } else {
              result.erros++;
              result.arquivosComErro.push(`${file.name} - ${validation.reason}`);
            }

            continue;
          }

          const pedido = await this.importEDI(content, file.name, file.path);

          await this.fileStorage.saveData('order', content, false, 'edi');

          this.logger.log(`  ✅ Arquivo processado e salvo localmente com sucesso`);
          result.sucessos++;

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