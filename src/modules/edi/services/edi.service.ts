import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { FileStorageService } from 'src/common/services/file-storage.service';
import { PcclientEntity } from 'src/modules/entities/pcclient.entity';
import { PcconsumEntity } from 'src/modules/entities/pcconsum.entity';
import { PcemprEntity } from 'src/modules/entities/pcempr.entity';
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

  async findProductByFactoryCod(factoryCode: string): Promise<any> {
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
          regionNumber: 368
        }
      })

      if (!productOrder) {
        this.logger.warn(` ✗ Produto ${product.productCode} sem tabela de preço na região 368`);
        return null;
      }

      const productOrderTaxRegion = await this.pctributRepository.findOne({
        where: {
          statusCode: productOrder.stCode || 0,
        }
      })

      this.logger.debug(`  ✓ Produto encontrado: ${productOrder.productCode}`);

      this.logger.log('product========================================>', product)

      this.logger.log('productOrder========================================>', productOrder)

      this.logger.log('productOrderTaxRegion========================================>', productOrderTaxRegion)

      return { ...product, ...productOrder, ...productOrderTaxRegion };
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
      const byPO = await this.pcorcavendacRepository
        .createQueryBuilder('ped')
        .where('ped.clientOrderNumber = :poNumber', { poNumber })
        .getOne();

      if (byPO) {
        this.logger.warn(`  ⚠ EDI já processado (PO Number: ${poNumber}) - Numero Orçamento: ${byPO.orderNumber}`);
        return true;
      }

      this.logger.debug(`  ✓ EDI novo, pode processar (PO: ${poNumber}, File: ${fileName})`);
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

    const _products: (PctabprEntity | PcprodutEntity)[] = await Promise.all(
      parsed.items.map(item => this.findProductByFactoryCod(item.vendorPartNumber))
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

    const branchCode = this.configService.getOrThrow<string>('FINANCIAL_BRANCH');

    const company = await this.findCompanyByCod(branchCode)

    if (!company) {
      return null;
    }

    const costumer = await this.findCostumerCompanyByName(parsed.parties.buyerName);

    if (!costumer) {
      return null;
    }

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


    const allowedCodSquare = this.configService.getOrThrow<number>('SQUARE_COD');

    const findSquare = await this.pcpracaRepository.findOne({
      where: {
        codSquare: allowedCodSquare
      },
      select: ['codSquare', 'square', 'regionNumber', 'freightValue']
    })

    if (!findSquare) {
      this.logger.warn(`  ✗ Praça NÃO encontrada para código: ${allowedCodSquare}`);
      return null;
    }
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

      // const order = new PcpedcEntity();

      // order.orderId = numped;
      // order.loadNumber = this.configService.getOrThrow<number>('ORDER_LOAD_NUMBER');
      // order.salePercent = this.configService.getOrThrow<number>('ORDER_SALE_PERCENTAGE');
      // order.customerOrderNumber = parsed.header.poNumber;
      // order.integrationOrigin = this.configService.getOrThrow<string>('INTEGRATION_SOURCE');
      // order.xmlVanOrderId = parsed.header.poNumber;
      // order.itemCount = parsed.totals.totalLineItems;
      // // order.importDate = dataHojeMeiaNoite;
      // order.imported = this.configService.getOrThrow<string>('ORDER_IMPORT_RECONCILIATION');
      // order.discountPercent = this.configService.getOrThrow<number>('ORDER_PERCENTUAL_DISCOUNT');
      // order.invoiceFreightValue = this.configService.getOrThrow<number>('ORDER_VALUE_FREIGHT_INVOICE');
      // order.freightValue = findSquare.freightValue;
      // order.otherExpensesValue = this.configService.getOrThrow<number>('ORDER_EXPENSES_VALUE');
      // order.saleCondition = this.configService.getOrThrow<number>('ORDER_SALE_CONDITION');
      // order.hour = horaAtual;
      // order.minute = minutosAtuais;
      // order.customerOrderDate = dataHojeMeiaNoite;
      // order.dispatchFreight = findCodSupplier.dispatchFreightType;
      // order.freightSupplierId = findCodSupplier.supplierCode;
      // order.loadType = this.configService.getOrThrow<string>('ORDER_LOAD_TYPE');
      // order.term1 = findPaymentPlan.firstPaymentTerm;
      // order.averageTerm = findPaymentPlan.firstPaymentTerm;
      // order.packagingType = this.configService.getOrThrow<string>('ORDER_PACKAGING_TYPE');
      // order.orderOrigin = this.configService.getOrThrow<string>('ORDER_ORIGIN');
      // order.importReconciliation = this.configService.getOrThrow<string>('ORDER_IMPORT_RECONCILIATION');
      // order.regionNumber = findSquare.regionNumber;
      // order.financialDiscountPercent = costumer.percentageDiscountFin;
      // order.useWmsIntegrator = company.useWmsIntegration;
      // order.useTv10SaleCfop = this.configService.getOrThrow<string>('ORDER_USE_TYPE_SALE_10_CFOP');
      // order.branchId = company.codeBranch;
      // order.customerId = costumer.customerId;
      // order.representativeId = findRCA.userCode;
      // order.regionId = findSquare.codSquare;
      // order.paymentPlanId = findPaymentPlan.codPaymentPlan;
      // order.saleType = findPaymentPlan.saleType;
      // order.billingId = costumer.idBilling;
      // order.issuerId = findIssuer.registration;
      // order.totalWeight = totalGrossWeight;
      // order.totalValue = totalValue * parsed.totals.totalQuantity;
      // order.listValue = totalValue * parsed.totals.totalQuantity;
      // order.serviceValue = totalValue * parsed.totals.totalQuantity;
      // order.totalVolume = parsed.totals.totalQuantity;
      // order.date = new Date();
      // order.position = this.configService.getOrThrow<string>('ORDER_POSITION');
      // order.invoiceBranchId = company.codeBranch;
      // order.supervisorId = findRCA.supervisorCode;
      // order.grouping = this.configService.getOrThrow<string>('ORDER_GROUPING');
      // order.observation = `EDI - PO: ${parsed.header.poNumber}`;
      // // order.accountingCostValue = ;
      // // order.replacementCostValue = ;
      // // order.realCostValue = ;
      // // order.finalCostValue = ;
      // // order.deliveryDate = ;


      // await queryRunner.manager.save(order);

      // const orderItems = parsed.items.map((item, index) => {
      //   const product = _products[index];

      //   const orderItem = new PcpediEntity();

      //   orderItem.orderId = numped;
      //   orderItem.productId = product?.productCode || 0;
      //   orderItem.quantity = item.quantity;
      //   orderItem.missingQuantity = 0;
      //   orderItem.salePrice = (product as PctabprEntity)?.tablePrice1 || 0;
      //   orderItem.date = new Date();
      //   orderItem.customerId = costumer.customerId;
      //   orderItem.representativeId = findRCA.userCode;
      //   orderItem.listPrice = (product as PctabprEntity)?.tablePrice1 || 0;
      //   orderItem.position = this.configService.getOrThrow<string>('ORDER_POSITION');
      //   orderItem.st = (product as PctabprEntity)?.stCode || 0;
      //   orderItem.commissionPercent = 0;
      //   orderItem.discountPercent = 0;
      //   orderItem.sequence = 2;
      //   orderItem.stId = (product as PctabprEntity)?.stCode || 0;
      //   orderItem.ipiPercent = 0;
      //   orderItem.ipiValue = 0;
      //   orderItem.iva = 99.02;
      //   orderItem.tariff = 0;
      //   orderItem.icmsRate1 = 18;
      //   orderItem.icmsRate2 = 4;
      //   orderItem.suframaDiscountValue = 0;
      //   orderItem.cmvFreightPercent = 0;
      //   orderItem.sourceStBaseReductionPercent = 0;
      //   orderItem.issPercent = 0;
      //   orderItem.issValue = 0;
      //   orderItem.baseSalePrice = (product as PctabprEntity)?.tablePrice1 || 0;
      //   orderItem.auxiliaryId = (product as PcprodutEntity)?.auxiliaryCode || 0;
      //   orderItem.originalPrice = (product as PctabprEntity)?.tablePrice1 || 0;
      //   orderItem.rcaBasePrice = (product as PctabprEntity)?.tablePrice1 || 0;
      //   orderItem.boxQuantity = 0;
      //   orderItem.piecesQuantity = 0;
      //   orderItem.withdrawBranchId = company.codeBranch;
      //   orderItem.icmsExemptDiscountPercent = 0;
      //   orderItem.icmsExemptionDiscountValue = 0;
      //   orderItem.customerCmvFundValue = 0;

      //   return orderItem;

      // });

      // await queryRunner.manager.save(orderItems);

      // await queryRunner.commitTransaction();
      // this.logger.debug(`  ✓ Pedido ${numped} salvo.`);


      // ======================================================================================


      const order = new PcorcavendacEntity();

      order.orderNumber = numped;
      order.transportNumber = this.configService.getOrThrow<number>('ORDER_LOAD_NUMBER');
      order.salesPercentage = this.configService.getOrThrow<number>('ORDER_SALE_PERCENTAGE');
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
      order.totalValue = totalValue * parsed.totals.totalQuantity;
      order.tableValue = totalValue * parsed.totals.totalQuantity;
      order.attendanceValue = totalValue * parsed.totals.totalQuantity;
      order.totalVolume = parsed.totals.totalQuantity;
      order.date = new Date();
      order.position = this.configService.getOrThrow<string>('ORDER_POSITION');
      order.nfBranchCode = company.codeBranch;
      order.supervisorCode = findRCA.supervisorCode;
      order.grouping = this.configService.getOrThrow<string>('ORDER_GROUPING');
      order.observation = `EDI - PO: ${parsed.header.poNumber}`;
      // order.realCostValue = 0;
      // order.financialCostValue = 0;
      // order.accountingCostValue = ;
      // order.replacementCostValue = ;
      // order.deliveryDate = ;


      await queryRunner.manager.save(order);

      const orderItems = parsed.items.map((item, index) => {
        const product = _products[index];

        // Validação: Se o produto não existe, lança um erro para acionar o rollback
        if (!product || !product.productCode) {
          throw new Error(`Produto não encontrado no banco para o código de fábrica/vendorPartNumber: ${item.vendorPartNumber}`);
        }

        // Extraímos o preço para uma variável para não repetir o cast (product as PctabprEntity) várias vezes
        const productPrice = (product as PctabprEntity).tablePrice1;

        // 2. Validação do Preço
        if (productPrice === undefined || productPrice === null || productPrice <= 0) {
          throw new Error(`Preço inválido ou zerado na tabela de preços para o produto: ${product.productCode}`);
        }

        const productStCode = (product as PctabprEntity).stCode;
        // 3. Validação Fiscal (ST)
        // Checamos por null/undefined porque, dependendo da tipagem do banco, o ST '0' pode ser válido para CST 00.
        if (productStCode === undefined || productStCode === null) {
          throw new Error(`Cadastro fiscal incompleto (ST não definida) para o produto: ${product.productCode}`);
        }

        // Extraindo junto com as outras variáveis no início do map:
        const productAuxiliaryCode = (product as PcprodutEntity).auxiliaryCode;

        // 4. Validação do Código Auxiliar
        if (!productAuxiliaryCode || productAuxiliaryCode === 0) {
          throw new Error(`Código auxiliar (EAN) ausente ou inválido para o produto: ${product.productCode}`);
        }

        const orderItem = new PcorcavendaiEntity();

        orderItem.orderNumber = numped;
        orderItem.productCode = product?.productCode;
        orderItem.quantity = item.quantity;
        orderItem.missingQuantity = 0;
        orderItem.salePrice = productPrice;
        orderItem.date = new Date();
        orderItem.customerCode = costumer.customerId;
        orderItem.userCode = findRCA.userCode;
        orderItem.listPrice = productPrice;
        orderItem.position = this.configService.getOrThrow<string>('ORDER_POSITION');
        orderItem.st = productStCode;
        orderItem.commissionPercent = 0;
        orderItem.discountPercent = 0;
        orderItem.sequenceNumber = item.lineNumber;
        orderItem.stCode = productStCode;
        orderItem.ipiPercent = 0;
        orderItem.ipiValue = 0;
        orderItem.iva = 99.02;
        orderItem.tariff = 0;
        orderItem.icmsRate1 = 18;
        orderItem.icmsRate2 = 4;
        orderItem.suframaDiscountValue = 0;
        orderItem.cmvFreightPercent = 0;
        orderItem.sourceStBaseReductionPercent = 0;
        orderItem.issPercent = 0;
        orderItem.issValue = 0;
        orderItem.baseSalePrice = productPrice;
        orderItem.auxiliaryCode = productAuxiliaryCode;
        orderItem.originalPrice = productPrice;
        orderItem.rcaBasePrice = productPrice;
        orderItem.boxQuantity = 0;
        orderItem.piecesQuantity = 0;
        orderItem.pickupBranchCode = company.codeBranch;
        orderItem.icmsExemptDiscountPercent = 0;
        orderItem.icmsExemptionDiscountValue = 0;
        orderItem.customerCmvFundValue = 0;
        orderItem.realCostValue = 0;
        orderItem.financialCostValue = 0;

        return orderItem;

      });

      await queryRunner.manager.save(orderItems);

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