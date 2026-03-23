import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCEST' })
export class PcestEntity {
  @Column({ name: 'ADREMICMSRET', type: 'number', precision: 7, scale: 4, nullable: true })
  realIcmsRetAmount: number | null;

  @Column({ name: 'ALIQICMS1', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsRate1: number | null;

  @Column({ name: 'ALIQICMS1ULTENT', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsRate1LastEnt: number | null;

  @Column({ name: 'ALIQICMS1ULTENTTAB', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsRate1LastEntTable: number | null;

  @Column({ name: 'ALIQICMS2ULTENT', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsRate2LastEnt: number | null;

  @Column({ name: 'ALIQICMS2ULTENTTAB', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsRate2LastEntTable: number | null;

  @Column({ name: 'APTO', type: 'number', precision: 4, scale: 0, nullable: true })
  apartmentNumber: number | null;

  @Column({ name: 'APTOCX', type: 'number', precision: 4, scale: 0, nullable: true })
  apartmentNumberCx: number | null;

  @Column({ name: 'ASSINATURA', type: 'varchar2', length: 255, nullable: true })
  signature: string | null;

  @Column({ name: 'BASEBCR', type: 'number', precision: 18, scale: 6, nullable: true })
  baseBcr: number | null;

  @Column({ name: 'BASEICMSBCR', type: 'number', precision: 18, scale: 6, nullable: true })
  baseIcmsBcr: number | null;

  @Column({ name: 'BASEICMSULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  baseIcmsLastEnt: number | null;

  @Column({ name: 'BASEICMSULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  baseIcmsLastEntTable: number | null;

  @Column({ name: 'BASEIPIULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  baseIpiLastEnt: number | null;

  @Column({ name: 'CODCEST', type: 'varchar2', length: 7, nullable: true })
  cestCode: string | null;

  @Column({ name: 'CODDEVOL', type: 'number', precision: 4, scale: 0, nullable: true })
  returnCode: number | null;

  @PrimaryColumn({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: false })
  branchCode: string;

  @PrimaryColumn({ name: 'CODPROD', type: 'number', precision: 6, scale: 0, nullable: false })
  productCode: number;

  @Column({ name: 'CORREDOR', type: 'number', precision: 4, scale: 0, nullable: true })
  brokerCode: number | null;

  @Column({ name: 'CURVA', type: 'varchar2', length: 250, nullable: true })
  curve: string | null;

  @Column({ name: 'CUSTOCONT', type: 'number', precision: 18, scale: 6, nullable: true })
  accountingCost: number | null;

  @Column({ name: 'CUSTODOLAR', type: 'number', precision: 18, scale: 6, nullable: true })
  dollarCost: number | null;

  @Column({ name: 'CUSTOFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  finalCost: number | null;

  @Column({ name: 'CUSTOFINSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  finalCostNoSt: number | null;

  @Column({ name: 'CUSTOFISCAL', type: 'number', precision: 18, scale: 6, nullable: true })
  fiscalCost: number | null;

  @Column({ name: 'CUSTOFORNEC', type: 'number', precision: 12, scale: 6, nullable: true })
  supplierCost: number | null;

  @Column({ name: 'CUSTOFORNECSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  supplierCostNoSt: number | null;

  @Column({ name: 'CUSTONFSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  nfCostNoSt: number | null;

  @Column({ name: 'CUSTONFSEMSTGUIAULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  nfCostNoStGuiaLastEnt: number | null;

  @Column({ name: 'CUSTONFSEMSTGUIAULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  nfCostNoStGuiaLastEntTable: number | null;

  @Column({ name: 'CUSTONFSEMSTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  nfCostNoStTable: number | null;

  @Column({ name: 'CUSTOPROXIMACOMPRA', type: 'number', precision: 18, scale: 6, nullable: true })
  nextPurchaseCost: number | null;

  @Column({ name: 'CUSTOPROXIMACOMPRASEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  nextPurchaseCostNoSt: number | null;

  @Column({ name: 'CUSTOREAL', type: 'number', precision: 18, scale: 6, nullable: true })
  realCost: number | null;

  @Column({ name: 'CUSTOREALLIQ', type: 'number', precision: 18, scale: 6, nullable: true })
  realCostLiq: number | null;

  @Column({ name: 'CUSTOREALSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  realCostNoSt: number | null;

  @Column({ name: 'CUSTOREP', type: 'number', precision: 18, scale: 6, nullable: true })
  repCost: number | null;

  @Column({ name: 'CUSTOULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCost: number | null;

  @Column({ name: 'CUSTOULTENTANT', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostPrev: number | null;

  @Column({ name: 'CUSTOULTENTCONT', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostAccounting: number | null;

  @Column({ name: 'CUSTOULTENTFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostFinal: number | null;

  @Column({ name: 'CUSTOULTENTFINSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostFinalNoSt: number | null;

  @Column({ name: 'CUSTOULTENTFISCAL', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostFiscal: number | null;

  @Column({ name: 'CUSTOULTENTLIQ', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostLiq: number | null;

  @Column({ name: 'CUSTOULTENTMED', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostMed: number | null;

  @Column({ name: 'CUSTOULTENTSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntCostNoSt: number | null;

  @Column({ name: 'CUSTOULTPEDCOMPRA', type: 'number', precision: 18, scale: 6, nullable: true })
  lastPurchaseOrderCost: number | null;

  @Column({ name: 'CUSTOULTPEDCOMPRASEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  lastPurchaseOrderCostNoSt: number | null;

  @Column({ name: 'DTALTERACAO1107', type: 'date', nullable: true })
  changeDate1107: Date | null;

  @Column({ name: 'DTEMISSAOULTENT', type: 'date', nullable: true })
  lastEntIssueDate: Date | null;

  @Column({ name: 'DTHORAULTALTDISP', type: 'date', nullable: true })
  lastDispChangeTime: Date | null;

  @Column({ name: 'DTHORAULTSAIDA', type: 'date', nullable: true })
  lastExitTime: Date | null;

  @Column({ name: 'DTPRIMCOMPRA', type: 'date', nullable: true })
  firstPurchaseDate: Date | null;

  @Column({ name: 'DTULTALTERSRVPRC', type: 'date', nullable: true })
  lastServicePriceChangeDate: Date | null;

  @Column({ name: 'DTULTDESDOBRA', type: 'date', nullable: true })
  lastSplitDate: Date | null;

  @Column({ name: 'DTULTENT', type: 'date', nullable: true })
  lastEntDate: Date | null;

  @Column({ name: 'DTULTFAT', type: 'date', nullable: true })
  lastInvoiceDate: Date | null;

  @Column({ name: 'DTULTINVENT', type: 'date', nullable: true })
  lastInventoryDate: Date | null;

  @Column({ name: 'DTULTPEDCOMPRA', type: 'date', nullable: true })
  lastPurchaseOrderDate: Date | null;

  @Column({ name: 'DTULTSAIDA', type: 'date', nullable: true })
  lastExitDate: Date | null;

  @Column({ name: 'ESTBONIFIC', type: 'varchar2', length: 1, nullable: true })
  bonusStock: string | null;

  @Column({ name: 'ESTIDEAL', type: 'number', precision: 16, scale: 3, nullable: true })
  idealStock: number | null;

  @Column({ name: 'ESTMAX', type: 'number', precision: 16, scale: 3, nullable: true })
  maxStock: number | null;

  @Column({ name: 'ESTMIN', type: 'number', precision: 16, scale: 3, nullable: true })
  minStock: number | null;

  @Column({ name: 'FIMESTOQUE', type: 'varchar2', length: 1, nullable: true })
  endStock: string | null;

  @Column({ name: 'FREQUENCIA', type: 'varchar2', length: 250, nullable: true })
  frequency: string | null;

  @Column({ name: 'IDENTIFICADOR', type: 'number', precision: 16, scale: 0, nullable: true })
  identifier: number | null;

  @Column({ name: 'IVAULTENT', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaLastEnt: number | null;

  @Column({ name: 'IVAULTENTTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaLastEntTable: number | null;

  @Column({ name: 'MODULO', type: 'number', precision: 2, scale: 0, nullable: true })
  module: number | null;

  @Column({ name: 'MODULOCX', type: 'number', precision: 2, scale: 0, nullable: true })
  moduleCx: number | null;

  @Column({ name: 'MOTIVOBLOQESTOQUE', type: 'varchar2', length: 80, nullable: true })
  stockBlockReason: string | null;

  @Column({ name: 'NUMERO', type: 'number', precision: 9, scale: 2, nullable: true })
  number: number | null;

  @Column({ name: 'NUMEROCX', type: 'number', precision: 9, scale: 2, nullable: true })
  numberCx: number | null;

  @Column({ name: 'NUMFCI', type: 'varchar2', length: 36, nullable: true })
  fciNumber: string | null;

  @Column({ name: 'NUMNOTAULTENT', type: 'number', precision: 10, scale: 0, nullable: true })
  lastEntNoteNumber: number | null;

  @Column({ name: 'NUMTRANSENTULTENT', type: 'number', precision: 10, scale: 0, nullable: true })
  lastEntTransactionNumber: number | null;

  @Column({ name: 'NUMTRANSENTULTENTBNF', type: 'number', precision: 12, scale: 0, nullable: true })
  lastEntTransactionNumberBnf: number | null;

  @Column({ name: 'NUMTRANSULTENTED', type: 'number', precision: 10, scale: 0, nullable: true })
  lastEntTransactionEd: number | null;

  @Column({ name: 'NUMTRANSULTENTET', type: 'number', precision: 10, scale: 0, nullable: true })
  lastEntTransactionEt: number | null;

  @Column({ name: 'NUMTRANSULTENTST', type: 'number', precision: 16, scale: 0, nullable: true })
  lastEntTransactionSt: number | null;

  @Column({ name: 'PCOMPRAULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntPurchasePrice: number | null;

  @Column({ name: 'PCUSTOANT', type: 'number', precision: 18, scale: 6, nullable: true })
  prevCostPrice: number | null;

  @Column({ name: 'PERCALIQEXTGUIAULTENT', type: 'number', precision: 12, scale: 4, nullable: true })
  extRateGuiaLastEnt: number | null;

  @Column({ name: 'PERCALIQEXTGUIAULTENTTAB', type: 'number', precision: 12, scale: 4, nullable: true })
  extRateGuiaLastEntTable: number | null;

  @Column({ name: 'PERCCONTEUDOIMPFCI', type: 'number', precision: 5, scale: 2, nullable: true })
  impContentFciRate: number | null;

  @Column({ name: 'PERCEVOLUCAOVENDA', type: 'number', precision: 12, scale: 4, nullable: true })
  salesEvolutionRate: number | null;

  @Column({ name: 'PERCICMSEFET', type: 'number', precision: 8, scale: 4, nullable: true })
  effectiveIcmsRate: number | null;

  @Column({ name: 'PERCICMSFRETEFOBSTULTENT', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsFreightFobStLastEnt: number | null;

  @Column({ name: 'PERCICMSFRETEFOBSTULTENTTAB', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsFreightFobStLastEntTable: number | null;

  @Column({ name: 'PERCIPIULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiLastEnt: number | null;

  @Column({ name: 'PERCMVAORIGTAB', type: 'number', precision: 12, scale: 4, nullable: true })
  mvaOrigTable: number | null;

  @Column({ name: 'PERCMVAORIGULTENT', type: 'number', precision: 12, scale: 4, nullable: true })
  mvaOrigLastEnt: number | null;

  @Column({ name: 'PERCREDBASEEFET', type: 'number', precision: 8, scale: 4, nullable: true })
  effectiveBaseReduction: number | null;

  @Column({ name: 'PERFCPSTRET', type: 'number', precision: 12, scale: 4, nullable: true })
  fcpStRet: number | null;

  @Column({ name: 'PERICMSANTECIPADOULTENT', type: 'number', precision: 12, scale: 4, nullable: true })
  anticipatedIcmsLastEnt: number | null;

  @Column({ name: 'PERICMULTENT', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsLastEnt: number | null;

  @Column({ name: 'PLIQULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntLiqPrice: number | null;

  @Column({ name: 'QBCMONORET', type: 'number', precision: 21, scale: 10, nullable: true })
  bcMonoRet: number | null;

  @Column({ name: 'QTBLOQTRANSF', type: 'number', precision: 16, scale: 3, nullable: true })
  blockTransferQty: number | null;

  @Column({ name: 'QTBLOQUEADA', type: 'number', precision: 20, scale: 6, nullable: true })
  blockedQty: number | null;

  @Column({ name: 'QTCROSSDOCK', type: 'number', precision: 22, scale: 8, nullable: true })
  crossDockQty: number | null;

  @Column({ name: 'QTDEVOLMES', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlyReturnQty: number | null;

  @Column({ name: 'QTDEVOLMES1', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlyReturnQty1: number | null;

  @Column({ name: 'QTDEVOLMES2', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlyReturnQty2: number | null;

  @Column({ name: 'QTDEVOLMES3', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlyReturnQty3: number | null;

  @Column({ name: 'QTENTDIA', type: 'number', precision: 16, scale: 3, nullable: true })
  dailyEntryQty: number | null;

  @Column({ name: 'QTENTMES', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlyEntryQty: number | null;

  @Column({ name: 'QTEST', type: 'number', precision: 22, scale: 8, nullable: true })
  stockQty: number | null;

  @Column({ name: 'QTESTANT', type: 'number', precision: 16, scale: 3, nullable: true })
  prevStockQty: number | null;

  @Column({ name: 'QTESTGER', type: 'number', precision: 22, scale: 8, nullable: true })
  managedStockQty: number | null;

  @Column({ name: 'QTESTOQUEDETERCEIRO', type: 'number', precision: 22, scale: 8, nullable: true })
  thirdPartyStockQty: number | null;

  @Column({ name: 'QTESTOQUEEMTERCEIRO', type: 'number', precision: 22, scale: 8, nullable: true })
  inThirdPartyStockQty: number | null;

  @Column({ name: 'QTESTORNOPRODUZDIA', type: 'number', precision: 22, scale: 8, nullable: true })
  dailyProductionReturnQty: number | null;

  @Column({ name: 'QTESTORNOPRODUZMES', type: 'number', precision: 22, scale: 8, nullable: true })
  monthlyProductionReturnQty: number | null;

  @Column({ name: 'QTFRENTELOJA', type: 'number', precision: 22, scale: 6, nullable: true })
  frontStoreQty: number | null;

  @Column({ name: 'QTGIROCURVATURA', type: 'number', precision: 16, scale: 3, nullable: true })
  curvatureRotationQty: number | null;

  @Column({ name: 'QTGIROCURVATURAANT', type: 'number', precision: 16, scale: 3, nullable: true })
  prevCurvatureRotationQty: number | null;

  @Column({ name: 'QTGIRODIA', type: 'number', precision: 16, scale: 3, nullable: true })
  dailyRotationQty: number | null;

  @Column({ name: 'QTINDENIZ', type: 'number', precision: 20, scale: 6, nullable: true })
  indemnityQty: number | null;

  @Column({ name: 'QTINDUSTRIA', type: 'number', precision: 20, scale: 6, nullable: true })
  industryQty: number | null;

  @Column({ name: 'QTLOJA', type: 'number', precision: 20, scale: 8, nullable: true })
  storeQty: number | null;

  @Column({ name: 'QTPEDIDA', type: 'number', precision: 16, scale: 3, nullable: true })
  requestedQty: number | null;

  @Column({ name: 'QTPENDENTE', type: 'number', precision: 16, scale: 3, nullable: true })
  pendingQty: number | null;

  @Column({ name: 'QTPERDADIA', type: 'number', precision: 16, scale: 3, nullable: true })
  dailyLossQty: number | null;

  @Column({ name: 'QTPERDAMES', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlyLossQty: number | null;

  @Column({ name: 'QTPRODUZIDADIA', type: 'number', precision: 22, scale: 8, nullable: true })
  dailyProducedQty: number | null;

  @Column({ name: 'QTPRODUZIDAMES', type: 'number', precision: 22, scale: 8, nullable: true })
  monthlyProducedQty: number | null;

  @Column({ name: 'QTREQUISICAO', type: 'number', precision: 16, scale: 3, nullable: true })
  requestQty: number | null;

  @Column({ name: 'QTRESERV', type: 'number', precision: 22, scale: 8, nullable: true })
  reserveQty: number | null;

  @Column({ name: 'QTRESERVMED', type: 'number', precision: 16, scale: 3, nullable: true })
  avgReserveQty: number | null;

  @Column({ name: 'QTTRANSITO', type: 'number', precision: 22, scale: 8, nullable: true })
  transitQty: number | null;

  // @Column({ name: 'QTTRANSITOBENEFIC', type: 'number', precision: 22, scale: 8, nullable: true })
  // beneficTransitQty: number | null;

  @Column({ name: 'QTTRANSITOTV10', type: 'number', precision: 22, scale: 8, nullable: true })
  transitQtyTv10: number | null;

  @Column({ name: 'QTTRANSITOTV13', type: 'number', precision: 22, scale: 8, nullable: true })
  transitQtyTv13: number | null;

  @Column({ name: 'QTULTENT', type: 'number', precision: 16, scale: 3, nullable: true })
  lastEntQty: number | null;

  @Column({ name: 'QTULTINVENT', type: 'number', precision: 16, scale: 3, nullable: true })
  lastInventoryQty: number | null;

  @Column({ name: 'QTVENDAPERDIDA', type: 'number', precision: 16, scale: 3, nullable: true })
  lostSalesQty: number | null;

  @Column({ name: 'QTVENDDIA', type: 'number', precision: 16, scale: 3, nullable: true })
  dailySalesQty: number | null;

  @Column({ name: 'QTVENDMES', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlySalesQty: number | null;

  @Column({ name: 'QTVENDMES1', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlySalesQty1: number | null;

  @Column({ name: 'QTVENDMES2', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlySalesQty2: number | null;

  @Column({ name: 'QTVENDMES3', type: 'number', precision: 16, scale: 3, nullable: true })
  monthlySalesQty3: number | null;

  @Column({ name: 'QTVENDSEMANA', type: 'number', precision: 16, scale: 3, nullable: true })
  weeklySalesQty: number | null;

  @Column({ name: 'QTVENDSEMANA1', type: 'number', precision: 16, scale: 3, nullable: true })
  weeklySalesQty1: number | null;

  @Column({ name: 'QTVENDSEMANA2', type: 'number', precision: 16, scale: 3, nullable: true })
  weeklySalesQty2: number | null;

  @Column({ name: 'QTVENDSEMANA3', type: 'number', precision: 16, scale: 3, nullable: true })
  weeklySalesQty3: number | null;

  @Column({ name: 'REDBASEIVAULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  redBaseIvaLastEnt: number | null;

  @Column({ name: 'REDBASEIVAULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  redBaseIvaLastEntTable: number | null;

  @Column({ name: 'ROTINALANC', type: 'varchar2', length: 48, nullable: true })
  launchRoutine: string | null;

  @Column({ name: 'RUA', type: 'number', precision: 4, scale: 0, nullable: true })
  street: number | null;

  @Column({ name: 'RUACX', type: 'number', precision: 4, scale: 0, nullable: true })
  streetCx: number | null;

  @Column({ name: 'STBCR', type: 'number', precision: 18, scale: 6, nullable: true })
  stBcr: number | null;

  @Column({ name: 'SUBCURVA', type: 'varchar2', length: 250, nullable: true })
  subCurve: string | null;

  @Column({ name: 'TEMESTOQUEECOMMERCE', type: 'varchar2', length: 1, nullable: true })
  hasEcommerceStock: string | null;

  @Column({ name: 'TIPOCURVA', type: 'varchar2', length: 1, nullable: true })
  curveType: string | null;

  @Column({ name: 'VALORULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntValue: number | null;

  @Column({ name: 'VALORULTENTMED', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntAvgValue: number | null;

  @Column({ name: 'VICMSMONORET', type: 'number', precision: 23, scale: 10, nullable: true })
  vicmsMonoRet: number | null;

  @Column({ name: 'VLBASEEFET', type: 'number', precision: 18, scale: 6, nullable: true })
  baseEffectiveAmount: number | null;

  @Column({ name: 'VLBASEFCPSTULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  baseFcpStLastEntTable: number | null;

  @Column({ name: 'VLBCFCPSTRET', type: 'number', precision: 18, scale: 6, nullable: true })
  bcFcpStRet: number | null;

  @Column({ name: 'VLCUSTODIAFIN', type: 'number', precision: 12, scale: 2, nullable: true })
  dailyCostFinAmount: number | null;

  @Column({ name: 'VLCUSTODIAREAL', type: 'number', precision: 12, scale: 2, nullable: true })
  dailyCostRealAmount: number | null;

  @Column({ name: 'VLCUSTOMESFIN', type: 'number', precision: 12, scale: 2, nullable: true })
  monthCostFinAmount: number | null;

  @Column({ name: 'VLCUSTOMESFINANT', type: 'number', precision: 14, scale: 2, nullable: true })
  monthCostFinPrevAmount: number | null;

  @Column({ name: 'VLCUSTOMESREAL', type: 'number', precision: 12, scale: 2, nullable: true })
  monthCostRealAmount: number | null;

  @Column({ name: 'VLCUSTOMESREALANT', type: 'number', precision: 14, scale: 2, nullable: true })
  monthCostRealPrevAmount: number | null;

  @Column({ name: 'VLFCPICMSULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpIcmsLastEntTable: number | null;

  @Column({ name: 'VLFCPSTRET', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpStRet2: number | null;

  @Column({ name: 'VLFCPSTULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpStLastEntTable: number | null;

  @Column({ name: 'VLFRETECONHECULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  freightKnowledgeLastEnt: number | null;

  @Column({ name: 'VLFRETECONHECULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  freightKnowledgeLastEntTable: number | null;

  @Column({ name: 'VLICMSBCR', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsBcr: number | null;

  @Column({ name: 'VLICMSEFET', type: 'number', precision: 18, scale: 6, nullable: true })
  effectiveIcmsAmount: number | null;

  @Column({ name: 'VLIISUSPENSOULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  iiSuspendedLastEnt: number | null;

  @Column({ name: 'VLIMPORTACAOFCI', type: 'number', precision: 18, scale: 6, nullable: true })
  importationFciAmount: number | null;

  @Column({ name: 'VLIPISUSPENSOULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  piSuspendedLastEnt: number | null;

  @Column({ name: 'VLIPIULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiLastEnt2: number | null;

  @Column({ name: 'VLPARCELAIMPFCI', type: 'number', precision: 18, scale: 6, nullable: true })
  impFciParcelAmount: number | null;

  @Column({ name: 'VLSTGUIAULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  stGuiaLastEnt: number | null;

  @Column({ name: 'VLSTGUIAULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  stGuiaLastEntTable: number | null;

  @Column({ name: 'VLSTULTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  stLastEnt: number | null;

  @Column({ name: 'VLSTULTENTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  stLastEntTable: number | null;

  @Column({ name: 'VLULTENTCONTSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  lastEntContNoStAmount: number | null;

  @Column({ name: 'VLULTPCOMPRA', type: 'number', precision: 18, scale: 6, nullable: true })
  lastPurchaseAmount: number | null;

  @Column({ name: 'VLVENDDIA', type: 'number', precision: 12, scale: 2, nullable: true })
  dailySalesAmount: number | null;

  @Column({ name: 'VLVENDDIAREAL', type: 'number', precision: 12, scale: 2, nullable: true })
  dailySalesRealAmount: number | null;

  @Column({ name: 'VLVENDMES', type: 'number', precision: 12, scale: 2, nullable: true })
  monthlySalesAmount: number | null;

  @Column({ name: 'VLVENDMESANT', type: 'number', precision: 14, scale: 2, nullable: true })
  monthlySalesPrevAmount: number | null;

  @Column({ name: 'VLVENDMESREAL', type: 'number', precision: 12, scale: 2, nullable: true })
  monthlySalesRealAmount: number | null;
}
