import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDI',
})
export class PcpediEntity {
  @PrimaryColumn({ name: 'NUMPED', type: 'number', precision: 10, scale: 0, nullable: false })
  orderId: number;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date | null;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  customerId: number | null;

  @Column({ name: 'CODPROD', type: 'number', precision: 6, scale: 0, nullable: false })
  productId: number;

  @Column({ name: 'CODUSUR', type: 'number', precision: 4, scale: 0, nullable: true })
  representativeId: number | null;

  @Column({ name: 'QT', type: 'number', precision: 20, scale: 6, nullable: true })
  quantity: number | null;

  @Column({ name: 'PVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice: number | null;

  @Column({ name: 'PTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  listPrice: number | null;

  @Column({ name: 'NUMCAR', type: 'number', precision: 8, scale: 0, nullable: true })
  loadNumber: number | null;

  @Column({ name: 'POSICAO', type: 'varchar2', length: 2, nullable: true })
  position: string | null;

  @Column({ name: 'ST', type: 'number', precision: 18, scale: 6, nullable: true })
  st: number | null;

  @Column({ name: 'VLCUSTOFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  finalCostValue: number | null;

  @Column({ name: 'VLCUSTOREAL', type: 'number', precision: 18, scale: 6, nullable: true })
  realCostValue: number | null;

  @Column({ name: 'PERCOM', type: 'number', precision: 8, scale: 4, nullable: true })
  commissionPercent: number | null;

  @Column({ name: 'PERDESC', type: 'number', precision: 18, scale: 6, nullable: true })
  discountPercent: number | null;

  @Column({ name: 'QTFALTA', type: 'number', precision: 20, scale: 6, nullable: true })
  missingQuantity: number | null;

  @PrimaryColumn({ name: 'NUMSEQ', type: 'number', precision: 20, scale: 0, nullable: false })
  sequence: number;

  @Column({ name: 'TIPOPESO', type: 'varchar2', length: 1, nullable: true })
  weightType: string | null;

  @Column({ name: 'PERCOMTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  tableCommissionPercent: number | null;

  @Column({ name: 'PERDESCTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  tableDiscountPercent: number | null;

  @Column({ name: 'CODMOTNAOCOMPRA', type: 'number', precision: 6, scale: 0, nullable: true })
  noPurchaseReasonId: number | null;

  @Column({ name: 'VLDESCCUSTOCMV', type: 'number', precision: 12, scale: 4, nullable: true })
  cmvCostDiscountValue: number | null;

  @Column({ name: 'QTSEPARADA', type: 'number', precision: 20, scale: 6, nullable: true })
  separatedQuantity: number | null;

  @Column({ name: 'QTVENDAEMB', type: 'number', precision: 12, scale: 3, nullable: true })
  packagingSaleQuantity: number | null;

  @Column({ name: 'PVENDAEMB', type: 'number', precision: 18, scale: 6, nullable: true })
  packagingSalePrice: number | null;

  @Column({ name: 'VLOUTROS', type: 'number', precision: 16, scale: 3, nullable: true })
  otherValue: number | null;

  @Column({ name: 'QTEMBALAGEM', type: 'number', precision: 12, scale: 3, nullable: true })
  packagingQuantity: number | null;

  @Column({ name: 'PVENDAEMBALAGEM', type: 'number', precision: 18, scale: 6, nullable: true })
  fullPackagingSalePrice: number | null;

  @Column({ name: 'CODAUXILIAR', type: 'number', precision: 20, scale: 0, nullable: true })
  auxiliaryId: number | null;

  @Column({ name: 'VLCUSTOREP', type: 'number', precision: 18, scale: 6, nullable: true })
  replacementCostValue: number | null;

  @Column({ name: 'VLCUSTOCONT', type: 'number', precision: 18, scale: 6, nullable: true })
  accountingCostValue: number | null;

  @Column({ name: 'CODCERTIFIC', type: 'number', precision: 8, scale: 0, nullable: true })
  certificateId: number | null;

  @Column({ name: 'PVENDABASE', type: 'number', precision: 18, scale: 6, nullable: true })
  baseSalePrice: number | null;

  @Column({ name: 'NOMECONCORRENTE', type: 'varchar2', length: 60, nullable: true })
  competitorName: string | null;

  @Column({ name: 'PRECO', type: 'number', precision: 10, scale: 2, nullable: true })
  price: number | null;

  @Column({ name: 'PRAZO', type: 'varchar2', length: 40, nullable: true })
  term: string | null;

  @Column({ name: 'QTNAOCOMPRA', type: 'number', precision: 18, scale: 6, nullable: true })
  missedPurchaseQuantity: number | null;

  @Column({ name: 'CODFILIALRETIRA', type: 'varchar2', length: 2, nullable: true })
  withdrawBranchId: string | null;

  @Column({ name: 'NUMTIRA', type: 'number', precision: 10, scale: 0, nullable: true })
  slipNumber: number | null;

  @Column({ name: 'CODFUNCSEP', type: 'number', precision: 8, scale: 0, nullable: true })
  pickerEmployeeId: number | null;

  @Column({ name: 'VLDESCSUFRAMA', type: 'number', precision: 18, scale: 6, nullable: true })
  suframaDiscountValue: number | null;

  @Column({ name: 'NUMLOTE', type: 'varchar2', length: 15, nullable: true })
  batchNumber: string | null;

  @Column({ name: 'VLDESCREPASSE', type: 'number', precision: 12, scale: 12, nullable: true })
  repassDiscountValue: number | null;

  @Column({ name: 'REFCOR', type: 'varchar2', length: 20, nullable: true })
  refColor: string | null;

  @Column({ name: 'CODFUNCCONF', type: 'number', precision: 8, scale: 0, nullable: true })
  checkerEmployeeId: number | null;

  @Column({ name: 'DATACONF', type: 'date', nullable: true })
  checkedDate: Date | null;

  @Column({ name: 'VLDESCICMISENCAO', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsExemptionDiscountValue: number | null;

  @Column({ name: 'QTORIGINAL', type: 'number', precision: 20, scale: 6, nullable: true })
  originalQuantity: number | null;

  @Column({ name: 'VLDESCFORNEC', type: 'number', precision: 18, scale: 6, nullable: true })
  supplierDiscountValue: number | null;

  @Column({ name: 'VLFRETE', type: 'number', precision: 18, scale: 6, nullable: true })
  freightValue: number | null;

  @Column({ name: 'VLIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiValue: number | null;

  @Column({ name: 'QTORIG', type: 'number', precision: 20, scale: 6, nullable: true })
  origQuantity: number | null;

  @Column({ name: 'QTSEPARARUN', type: 'number', precision: 18, scale: 6, nullable: true })
  separatedUnitQuantity: number | null;

  @Column({ name: 'QTSEPARARCX', type: 'number', precision: 18, scale: 6, nullable: true })
  separatedBoxQuantity: number | null;

  @Column({ name: 'CODST', type: 'number', precision: 4, scale: 0, nullable: true })
  stId: number | null;

  @Column({ name: 'VLDESCFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  financialDiscountValue: number | null;

  @Column({ name: 'PERCIPI', type: 'number', precision: 12, scale: 4, nullable: true })
  ipiPercent: number | null;

  @Column({ name: 'IVA', type: 'number', precision: 8, scale: 4, nullable: true })
  iva: number | null;

  @Column({ name: 'ALIQICMS1', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1: number | null;

  @Column({ name: 'ALIQICMS2', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2: number | null;

  @Column({ name: 'PAUTA', type: 'number', precision: 8, scale: 4, nullable: true })
  tariff: number | null;

  @Column({ name: 'PERCBASERED', type: 'number', precision: 8, scale: 4, nullable: true })
  baseReductionPercent: number | null;

  @Column({ name: 'VLDESCCOM', type: 'number', precision: 18, scale: 6, nullable: true })
  commissionDiscountValue: number | null;

  @Column({ name: 'PERDESCCOM', type: 'number', precision: 12, scale: 4, nullable: true })
  commissionDiscountPercent: number | null;

  @Column({ name: 'PERDESCFIN', type: 'number', precision: 12, scale: 4, nullable: true })
  financialDiscountPercent: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  bonusValue: number | null;

  @Column({ name: 'PERBONIFIC', type: 'number', precision: 12, scale: 4, nullable: true })
  bonusPercent: number | null;

  @Column({ name: 'PORIGINAL', type: 'number', precision: 18, scale: 6, nullable: true })
  originalPrice: number | null;

  @Column({ name: 'VLREBAIXACMV', type: 'number', precision: 18, scale: 6, nullable: true })
  cmvRebateValue: number | null;

  @Column({ name: 'NUMAPLIC', type: 'number', precision: 8, scale: 0, nullable: true })
  applicationNumber: number | null;

  @Column({ name: 'PERFRETECMV', type: 'number', precision: 8, scale: 4, nullable: true })
  cmvFreightPercent: number | null;

  @Column({ name: 'VLDESCRODAPE', type: 'number', precision: 18, scale: 6, nullable: true })
  footerDiscountValue: number | null;

  @Column({ name: 'STCLIENTEGNRE', type: 'number', precision: 18, scale: 6, nullable: true })
  clientStGnre: number | null;

  @Column({ name: 'IMPRIME', type: 'varchar2', length: 1, nullable: true })
  print: string | null;

  @Column({ name: 'COMPLEMENTO', type: 'varchar2', length: 40, nullable: true })
  complement: string | null;

  @Column({ name: 'CUSTOFINEST', type: 'number', precision: 18, scale: 6, nullable: true })
  finalStockCost: number | null;

  @Column({ name: 'PERCBASEREDSTFONTE', type: 'number', precision: 8, scale: 4, nullable: true })
  sourceStBaseReductionPercent: number | null;

  @Column({ name: 'PERCBASEREDST', type: 'number', precision: 8, scale: 4, nullable: true })
  stBaseReductionPercent: number | null;

  @Column({ name: 'PERDESCCUSTO', type: 'number', precision: 8, scale: 4, nullable: true })
  costDiscountPercent: number | null;

  @Column({ name: 'CODICMTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsTableId: number | null;

  @Column({ name: 'TXVENDA', type: 'number', precision: 8, scale: 6, nullable: true })
  saleTax: number | null;

  @Column({ name: 'PERCOM2', type: 'number', precision: 8, scale: 4, nullable: true })
  commission2Percent: number | null;

  @Column({ name: 'PERCOM3', type: 'number', precision: 8, scale: 4, nullable: true })
  commission3Percent: number | null;

  @Column({ name: 'PERCISS', type: 'number', precision: 8, scale: 4, nullable: true })
  issPercent: number | null;

  @Column({ name: 'VLISS', type: 'number', precision: 18, scale: 6, nullable: true })
  issValue: number | null;

  @Column({ name: 'NUMTRANSWMS', type: 'number', precision: 10, scale: 0, nullable: true })
  wmsTransactionNumber: number | null;

  @Column({ name: 'CODPROMOCAO', type: 'varchar2', length: 10, nullable: true })
  promotionId: string | null;

  @Column({ name: 'PRAZOMEDIO', type: 'number', precision: 4, scale: 0, nullable: true })
  averageTerm: number | null;

  @Column({ name: 'LOCALIZACAO', type: 'varchar2', length: 40, nullable: true })
  location: string | null;

  @Column({ name: 'VLREPASSE', type: 'number', precision: 18, scale: 6, nullable: true })
  repassValue: number | null;

  @Column({ name: 'PBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  bonusPrice: number | null;

  @Column({ name: 'PERCVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  salePercent: number | null;

  @Column({ name: 'VLDESCPISSUFRAMA', type: 'number', precision: 18, scale: 6, nullable: true })
  pisSuframaDiscountValue: number | null;

  @Column({ name: 'CODDEGUSTACAO', type: 'number', precision: 10, scale: 0, nullable: true })
  tastingId: number | null;

  @Column({ name: 'QTLOCALIZADA', type: 'number', precision: 8, scale: 2, nullable: true })
  locatedQuantity: number | null;

  @Column({ name: 'PERDESCFLEX', type: 'number', precision: 18, scale: 6, nullable: true })
  flexDiscountPercent: number | null;

  @Column({ name: 'VLDESCFLEX', type: 'number', precision: 18, scale: 6, nullable: true })
  flexDiscountValue: number | null;

  @Column({ name: 'PERREDCOMISS', type: 'number', precision: 18, scale: 6, nullable: true })
  commissionReductionPercent: number | null;

  @Column({ name: 'VLREDCOMISS', type: 'number', precision: 18, scale: 6, nullable: true })
  commissionReductionValue: number | null;

  @Column({ name: 'TIPODESCAPLICADO', type: 'varchar2', length: 2, nullable: true })
  appliedDiscountType: string | null;

  @Column({ name: 'PBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  rcaBasePrice: number | null;

  @Column({ name: 'PESOBRUTO', type: 'number', precision: 7, scale: 3, nullable: true })
  weightGross: number | null;

  @Column({ name: 'NUMVERBAREBCMV', type: 'number', precision: 6, scale: 0, nullable: true })
  rebCmvFundNumber: number | null;

  @Column({ name: 'CONDVENDA', type: 'number', precision: 5, scale: 0, nullable: true })
  saleCondition: number | null;

  @Column({ name: 'CODPLPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  paymentPlanId: number | null;

  @Column({ name: 'EANCODPROD', type: 'number', precision: 14, scale: 0, nullable: true })
  productEan: number | null;

  @Column({ name: 'BRINDE', type: 'varchar2', length: 1, nullable: true })
  gift: string | null;

  @Column({ name: 'PERCOMSUP', type: 'number', precision: 8, scale: 4, nullable: true })
  supervisorCommissionPercent: number | null;

  @Column({ name: 'NUMCONFERENCIA', type: 'number', precision: 2, scale: 0, nullable: true })
  conferenceNumber: number | null;

  @Column({ name: 'VLACRESCRODAPE', type: 'number', precision: 18, scale: 6, nullable: true })
  footerAdditionValue: number | null;

  @Column({ name: 'CODECF', type: 'varchar2', length: 4, nullable: true })
  ecfId: string | null;

  @Column({ name: 'LETRACOMISS', type: 'varchar2', length: 2, nullable: true })
  commissionLetter: string | null;

  @Column({ name: 'QTCX', type: 'number', precision: 14, scale: 6, nullable: true })
  boxQuantity: number | null;

  @Column({ name: 'QTPECAS', type: 'number', precision: 14, scale: 6, nullable: true })
  piecesQuantity: number | null;

  @Column({ name: 'NUMOP', type: 'number', precision: 8, scale: 0, nullable: true })
  opNumber: number | null;

  @Column({ name: 'PERREDCOMISSSUP', type: 'number', precision: 18, scale: 6, nullable: true })
  supervisorCommissionReductionPercent: number | null;

  @Column({ name: 'VLREDCOMISSSUP', type: 'number', precision: 18, scale: 6, nullable: true })
  supCommissionReductionValue: number | null;

  @Column({ name: 'BASEICST', type: 'number', precision: 18, scale: 6, nullable: true })
  stBase: number | null;

  @Column({ name: 'PVENDA1', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice1: number | null;

  @Column({ name: 'PERCAGREGADORST', type: 'number', precision: 8, scale: 4, nullable: true })
  stAggregatorPercent: number | null;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', precision: 18, scale: 6, nullable: true })
  customerCmvFundValue: number | null;

  @Column({ name: 'PERDESCISENTOICMS', type: 'number', precision: 4, scale: 2, nullable: true })
  icmsExemptDiscountPercent: number | null;

  @Column({ name: 'PERCOMPROF', type: 'number', precision: 6, scale: 2, nullable: true })
  professionalCommissionPercent: number | null;

  @Column({ name: 'NUMCARAUX', type: 'number', precision: 8, scale: 0, nullable: true })
  auxLoadNumber: number | null;

  @Column({ name: 'VLOUTRASDESP', type: 'number', precision: 18, scale: 6, nullable: true })
  otherExpensesValue: number | null;

  @Column({ name: 'QTAPANHA', type: 'number', precision: 20, scale: 6, nullable: true })
  pickQuantity: number | null;

  @Column({ name: 'EXPORTADOSERVINT', type: 'varchar2', length: 1, nullable: true })
  exportedIntService: string | null;

  @Column({ name: 'DTEXPORTACAOSERVINT', type: 'date', nullable: true })
  intServiceExportDate: Date | null;

  @Column({ name: 'DTIMPORTACAOSERVPRINC', type: 'date', nullable: true })
  mainServiceImportDate: Date | null;

  @Column({ name: 'IMPORTADOSERVPRINC', type: 'varchar2', length: 1, nullable: true })
  importedMainService: string | null;

  @Column({ name: 'CODVASILHAME', type: 'number', precision: 6, scale: 0, nullable: true })
  bottleId: number | null;

  @Column({ name: 'TRUNCARITEM', type: 'varchar2', length: 1, nullable: true })
  truncateItem: string | null;

  @Column({ name: 'QTUNITCX', type: 'number', precision: 8, scale: 2, nullable: true })
  boxUnitQuantity: number | null;

  @Column({ name: 'PERDESCPOLITICA', type: 'number', precision: 8, scale: 2, nullable: true })
  policyDiscountPercent: number | null;

  @Column({ name: 'PVENDAANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  previousSalePrice: number | null;

  @Column({ name: 'TIPOENTREGA', type: 'varchar2', length: 2, nullable: true })
  deliveryType: string | null;

  @Column({ name: 'NUMOS', type: 'number', precision: 15, scale: 0, nullable: true })
  orderServiceNumber: number | null;

  @Column({ name: 'DTINICIALSEP', type: 'date', nullable: true })
  separationStartDate: Date | null;

  @Column({ name: 'DTFINALSEP', type: 'date', nullable: true })
  separationEndDate: Date | null;

  @Column({ name: 'DATACONFFIM', type: 'date', nullable: true })
  checkEndDate: Date | null;

  @Column({ name: 'SITUACAOOS', type: 'number', precision: 2, scale: 0, nullable: true })
  orderServiceSituation: number | null;

  @Column({ name: 'NUMVIASOS', type: 'number', precision: 3, scale: 0, nullable: true })
  orderServiceCopiesNumber: number | null;

  @Column({ name: 'QTPENDOS', type: 'number', precision: 10, scale: 4, nullable: true })
  orderServicePendingQuantity: number | null;

  @Column({ name: 'DTINICIALPEND', type: 'date', nullable: true })
  pendingStartDate: Date | null;

  @Column({ name: 'DTFINALPEND', type: 'date', nullable: true })
  pendingEndDate: Date | null;

  @Column({ name: 'CODFUNCPEND', type: 'number', precision: 8, scale: 0, nullable: true })
  pendingEmployeeId: number | null;

  @Column({ name: 'DTLIBOS', type: 'date', nullable: true })
  orderServiceReleaseDate: Date | null;

  @Column({ name: 'CODFUNCLIBOS', type: 'number', precision: 8, scale: 0, nullable: true })
  orderServiceReleaseEmployeeId: number | null;

  @Column({ name: 'LOCALIZACAOOS', type: 'varchar2', length: 60, nullable: true })
  orderServiceLocation: string | null;

  @Column({ name: 'VLDIFALIQUOTAS', type: 'number', precision: 18, scale: 6, nullable: true })
  diffRateValue: number | null;

  @Column({ name: 'BASEDIFALIQUOTAS', type: 'number', precision: 18, scale: 6, nullable: true })
  diffRateBase: number | null;

  @Column({ name: 'PERCDIFALIQUOTAS', type: 'number', precision: 8, scale: 4, nullable: true })
  diffRatePercent: number | null;

  @Column({ name: 'GERAGNRE_CNPJCLIENTE', type: 'varchar2', length: 1, nullable: true })
  generateGnreClientCnpj: string | null;

  @Column({ name: 'PRODDESCRICAOCONTRATO', type: 'varchar2', length: 300, nullable: true })
  contractProductDescription: string | null;

  @Column({ name: 'CODFUNCALTERACAOOS', type: 'number', precision: 8, scale: 0, nullable: true })
  soChangeEmployeeId: number | null;

  @Column({ name: 'DTALTERACAOOS', type: 'date', nullable: true })
  soChangeDate: Date | null;

  @Column({ name: 'POLITICAPRIORITARIA', type: 'varchar2', length: 1, nullable: true })
  priorityPolicy: string | null;

  @Column({ name: 'QTIMEDIATA', type: 'number', precision: 16, scale: 3, nullable: true })
  immediateQuantity: number | null;

  @Column({ name: 'CODFUNCLANC', type: 'number', precision: 8, scale: 0, nullable: true })
  entryEmployeeId: number | null;

  @Column({ name: 'ROTINALANC', type: 'number', precision: 6, scale: 0, nullable: true })
  entryRoutine: number | null;

  @Column({ name: 'DTLANC', type: 'date', nullable: true })
  entryDate: Date | null;

  @Column({ name: 'CODFUNCULTALTER', type: 'number', precision: 8, scale: 0, nullable: true })
  lastChangeEmployeeId: number | null;

  @Column({ name: 'ROTINAULTLALTER', type: 'number', precision: 6, scale: 0, nullable: true })
  lastChangeRoutine: number | null;

  @Column({ name: 'DTULTLALTER', type: 'date', nullable: true })
  lastChangeDate: Date | null;

  @Column({ name: 'NUMOSORIGEM', type: 'number', precision: 15, scale: 0, nullable: true })
  originSoNumber: number | null;

  @Column({ name: 'QTUNITEMB', type: 'number', precision: 18, scale: 6, nullable: true })
  packagingUnitQuantity: number | null;

  @Column({ name: 'VLFRETE_RATEIO', type: 'number', precision: 18, scale: 6, nullable: true })
  freightApportionmentValue: number | null;

  @Column({ name: 'VLOUTRAS_RATEIO', type: 'number', precision: 18, scale: 6, nullable: true })
  otherApportionmentValue: number | null;

  @Column({ name: 'BASEICST_ANT_RATEIO', type: 'number', precision: 18, scale: 6, nullable: true })
  previousStBaseApportionment: number | null;

  @Column({ name: 'ST_ANT_RATEIO', type: 'number', precision: 18, scale: 6, nullable: true })
  previousStApportionment: number | null;

  @Column({ name: 'ST_DIF_RATEIO', type: 'number', precision: 18, scale: 6, nullable: true })
  diffStApportionment: number | null;

  @Column({ name: 'ABASTECIDO', type: 'varchar2', length: 1, nullable: true })
  fueled: string | null;

  @Column({ name: 'TVBONIF', type: 'number', precision: 2, scale: 0, nullable: true })
  bonusTv: number | null;

  @Column({ name: 'CODIGOBRINDE', type: 'number', precision: 6, scale: 0, nullable: true })
  giftId: number | null;

  @Column({ name: 'CODFUNCAJUSTEOS', type: 'number', precision: 8, scale: 0, nullable: true })
  soAdjustmentEmployeeId: number | null;

  @Column({ name: 'DTAJUSTEOS', type: 'date', nullable: true })
  soAdjustmentDate: Date | null;

  @Column({ name: 'TIPOCALCULOST', type: 'varchar2', length: 1, nullable: true })
  stCalculationType: string | null;

  @Column({ name: 'NUMETIQUETA', type: 'number', precision: 6, scale: 0, nullable: true })
  labelNumber: number | null;

  @Column({ name: 'VLVERBACMV', type: 'number', precision: 18, scale: 6, nullable: true })
  cmvFundValue: number | null;

  @Column({ name: 'NUMVOLUMESCONFERENCIA', type: 'number', precision: 4, scale: 0, nullable: true })
  conferenceVolumesNumber: number | null;

  @Column({ name: 'ROTINA', type: 'varchar2', length: 40, nullable: true })
  routine: string | null;

  @Column({ name: 'PERCDESCPIS', type: 'number', precision: 12, scale: 4, nullable: true })
  pisDiscountPercent: number | null;

  @Column({ name: 'PERCDESCCOFINS', type: 'number', precision: 12, scale: 4, nullable: true })
  cofinsDiscountPercent: number | null;

  @Column({ name: 'VLDESCREDUCAOPIS', type: 'number', precision: 24, scale: 6, nullable: true })
  pisReductionDiscountValue: number | null;

  @Column({ name: 'VLDESCREDUCAOCOFINS', type: 'number', precision: 24, scale: 6, nullable: true })
  cofinsReductionDiscountValue: number | null;

  @Column({ name: 'PERCOM4', type: 'number', precision: 8, scale: 4, nullable: true })
  commission4Percent: number | null;

  @Column({ name: 'TIPOSEPARACAO', type: 'varchar2', length: 1, nullable: true })
  separationType: string | null;

  @Column({ name: 'CODFUNCCONF2', type: 'number', precision: 8, scale: 0, nullable: true })
  checker2EmployeeId: number | null;

  @Column({ name: 'PRECOFVBRUTO', type: 'number', precision: 18, scale: 6, nullable: true })
  fvGrossPrice: number | null;

  @Column({ name: 'CODFUNCALTLOTE', type: 'number', precision: 8, scale: 0, nullable: true })
  batchChangeEmployeeId: number | null;

  @Column({ name: 'DTGERACAOOS', type: 'date', nullable: true })
  soGenerationDate: Date | null;

  @Column({ name: 'CODDESCONTO', type: 'number', precision: 8, scale: 0, nullable: true })
  discountId: number | null;

  @Column({ name: 'ALTERNATIVO', type: 'varchar2', length: 10, nullable: true })
  alternative: string | null;

  @Column({ name: 'SIGLAQUALIDADE', type: 'varchar2', length: 10, nullable: true })
  qualityAcronym: string | null;

  @Column({ name: 'VOLUMEDESEJADO', type: 'number', precision: 12, scale: 4, nullable: true })
  desiredVolume: number | null;

  @Column({ name: 'CODBASE', type: 'varchar2', length: 40, nullable: true })
  baseId: string | null;

  @Column({ name: 'CODFORMULA', type: 'varchar2', length: 20, nullable: true })
  formulaId: string | null;

  @Column({ name: 'USADEBCREDRCABRIND', type: 'varchar2', length: 1, nullable: true })
  useRcaGiftDebitCredit: string | null;

  @Column({ name: 'CODCOMBO', type: 'number', precision: 10, scale: 0, nullable: true })
  comboId: number | null;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  deliveryDate: Date | null;

  @Column({ name: 'MOVIMENTACONTACORRENTERCA', type: 'varchar2', length: 1, nullable: true })
  movesRcaCheckingAccount: string | null;

  @Column({ name: 'IDPATRIMONIO', type: 'varchar2', length: 75, nullable: true })
  assetId: string | null;

  @Column({ name: 'VLREDPVENDASIMPLESNA', type: 'number', precision: 18, scale: 6, nullable: true })
  simplesNacionalSalePriceReductionValue: number | null;

  @Column({ name: 'VLREDCMVSIMPLESNAC', type: 'number', precision: 18, scale: 6, nullable: true })
  simplesNacionalCmvReductionValue: number | null;

  @Column({ name: 'PERDESCFOB', type: 'number', precision: 5, scale: 2, nullable: true })
  fobDiscountPercent: number | null;

  @Column({ name: 'PRODDESCRICAODANFE', type: 'varchar2', length: 500, nullable: true })
  danfeProductDescription: string | null;

  @Column({ name: 'CODCONTRATO', type: 'number', precision: 6, scale: 0, nullable: true })
  contractId: number | null;

  @Column({ name: 'PERCICM', type: 'number', precision: 12, scale: 4, nullable: true })
  icmPercent: number | null;

  @Column({ name: 'PRECOMAXCONSUM', type: 'number', precision: 18, scale: 6, nullable: true })
  maxConsumerPrice: number | null;

  @Column({ name: 'DESCPRECOFAB', type: 'number', precision: 18, scale: 6, nullable: true })
  factoryPriceDiscount: number | null;

  @Column({ name: 'ROTINALANCULTALT', type: 'varchar2', length: 48, nullable: true })
  lastChangeEntryRoutine: string | null;

  @Column({ name: 'NUMCAIXA', type: 'varchar2', length: 10, nullable: true })
  boxNumber: string | null;

  @Column({ name: 'QTLITRAGEM', type: 'number', precision: 18, scale: 6, nullable: true })
  litersQuantity: number | null;

  @Column({ name: 'BONIFIC', type: 'varchar2', length: 1, nullable: true })
  bonus: string | null;

  @Column({ name: 'IDVENDA', type: 'number', precision: 6, scale: 0, nullable: true })
  saleId: number | null;

  @Column({ name: 'PERCDESCINDUSTRIA', type: 'number', precision: 18, scale: 6, nullable: true })
  industryDiscountPercent: number | null;

  @Column({ name: 'PERDESCBOLETO', type: 'number', precision: 18, scale: 6, nullable: true })
  boletoDiscountPercent: number | null;

  @Column({ name: 'CODLINHAPRAZO', type: 'number', precision: 6, scale: 0, nullable: true })
  termLineId: number | null;

  @Column({ name: 'STPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  stPbaserca: number | null;

  @Column({ name: 'STPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tableSt: number | null;

  @Column({ name: 'RP_IMEDIATA', type: 'varchar2', length: 1, nullable: true })
  immediateRp: string | null;

  @Column({ name: 'GRUPOFATURAMENTO', type: 'varchar2', length: 2, nullable: true })
  billingGroup: string | null;

  @Column({ name: 'PARTICIPAGIRO', type: 'varchar2', length: 1, nullable: true })
  turnoverParticipation: string | null;

  @Column({ name: 'VLIPIOUTRAS', type: 'number', precision: 18, scale: 6, nullable: true })
  otherIpiValue: number | null;

  @Column({ name: 'PERCIPIOUTRAS', type: 'number', precision: 18, scale: 6, nullable: true })
  otherIpiPercent: number | null;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  abatementDiscountValue: number | null;

  @Column({ name: 'PERCDESCABATIMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  abatementDiscountPercent: number | null;

  @Column({ name: 'QTRESERVANT', type: 'number', precision: 20, scale: 6, nullable: true })
  previousReservedQuantity: number | null;

  @Column({ name: 'VLDESCBOLETO', type: 'number', precision: 18, scale: 6, nullable: true })
  boletoDiscountValue: number | null;

  @Column({ name: 'NUMSEQITEMCONTRATO', type: 'number', precision: 6, scale: 0, nullable: true })
  contractItemSequence: number | null;

  @Column({ name: 'NUMLISTA', type: 'number', precision: 6, scale: 0, nullable: true })
  listNumber: number | null;

  @Column({ name: 'SUGESTAO', type: 'varchar2', length: 1, nullable: true })
  suggestion: string | null;

  @Column({ name: 'CODEMITENTEITEMPEDIDO', type: 'number', precision: 8, scale: 0, nullable: true })
  orderItemIssuerId: number | null;

  @Column({ name: 'QTUN', type: 'number', precision: 16, scale: 0, nullable: true })
  unitQuantity: number | null;

  @Column({ name: 'ROTINALANCBRINDE', type: 'number', precision: 6, scale: 0, nullable: true })
  giftEntryRoutine: number | null;

  @Column({ name: 'PERDESCINICOMISS', type: 'number', precision: 12, scale: 6, nullable: true })
  startCommissionDiscountPercent: number | null;

  @Column({ name: 'PERDESCFIMCOMISS', type: 'number', precision: 12, scale: 6, nullable: true })
  endCommissionDiscountPercent: number | null;

  @Column({ name: 'CONCEDERMAIORCOMISSREG', type: 'varchar2', length: 1, nullable: true })
  grantHigherRegCommission: string | null;

  @Column({ name: 'VLSUBTOTITEM', type: 'number', precision: 18, scale: 2, nullable: true })
  itemSubtotalValue: number | null;

  @Column({ name: 'PERDESCNEGOCIADO', type: 'number', precision: 18, scale: 6, nullable: true })
  negotiatedDiscountPercent: number | null;

  @Column({ name: 'FORMANEGOCIACAO', type: 'varchar2', length: 1, nullable: true })
  negotiationForm: string | null;

  @Column({ name: 'PERDESCAVISTA', type: 'number', precision: 18, scale: 6, nullable: true })
  cashDiscountPercent: number | null;

  @Column({ name: 'NEGOCIACAOPOSTERIOR', type: 'varchar2', length: 1, nullable: true })
  laterNegotiation: string | null;

  @Column({ name: 'CODPRECOFIXO', type: 'number', precision: 18, scale: 6, nullable: true })
  fixedPriceId: number | null;

  @Column({ name: 'VLACRESFRETEKG', type: 'number', precision: 12, scale: 6, nullable: true })
  freightKgAdditionValue: number | null;

  @Column({ name: 'STATUSSUCATA', type: 'number', precision: 1, scale: 0, nullable: true })
  scrapStatus: number | null;

  @Column({ name: 'PTABELAAUTPECAS', type: 'number', precision: 18, scale: 6, nullable: true })
  autopartsTablePrice: number | null;

  @Column({ name: 'GRPREGRABRINDE', type: 'number', precision: 6, scale: 0, nullable: true })
  giftRuleGroup: number | null;

  @Column({ name: 'NUMITEMPED', type: 'number', precision: 8, scale: 0, nullable: true })
  orderItemNumber: number | null;

  @Column({ name: 'VLITEMTRIBUTOS', type: 'number', precision: 18, scale: 6, nullable: true })
  itemTaxesValue: number | null;

  @Column({ name: 'PERCTRIBUTOS', type: 'number', precision: 4, scale: 2, nullable: true })
  taxesPercent: number | null;

  @Column({ name: 'TOTALIZADORALIQUOTA', type: 'varchar2', length: 10, nullable: true })
  rateTotalizer: string | null;

  @Column({ name: 'PERDESCPAUTA', type: 'number', precision: 18, scale: 6, nullable: true })
  tariffDiscountPercent: number | null;

  @Column({ name: 'ORIGEMST', type: 'varchar2', length: 1, nullable: true })
  stOrigin: string | null;

  @Column({ name: 'VLDESCSOCIOTORCEDOR', type: 'number', precision: 18, scale: 2, nullable: true })
  supporterPartnerDiscountValue: number | null;

  @Column({ name: 'INICIOINTERVALODESCQUANT', type: 'number', precision: 10, scale: 4, nullable: true })
  quantDiscountIntervalStart: number | null;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', precision: 9, scale: 0, nullable: true })
  medPromotionId: number | null;

  @Column({ name: 'NUMRECOPI', type: 'number', precision: 20, scale: 0, nullable: true })
  recopiNumber: number | null;

  @Column({ name: 'NUMERORECOPI', type: 'varchar2', length: 20, nullable: true })
  recopiNumberAux: string | null;

  @Column({ name: 'UNIDADE', type: 'varchar2', length: 2, nullable: true })
  unit: string | null;

  @Column({ name: 'AMBIENTE', type: 'varchar2', length: 50, nullable: true })
  environment: string | null;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'number', precision: 12, scale: 6, nullable: true })
  realCurrencyRateCase: number | null;

  @Column({ name: 'CODMOEDAESTRAGEIRA', type: 'number', precision: 6, scale: 0, nullable: true })
  foreignCurrencyId: number | null;

  @Column({ name: 'VLRMOEDAESTRAGEIRA', type: 'number', precision: 18, scale: 6, nullable: true })
  foreignCurrencyValue: number | null;

  @Column({ name: 'QTDIASENTREGAITEM', type: 'number', precision: 4, scale: 0, nullable: true })
  itemDeliveryDaysQuantity: number | null;

  @Column({ name: 'PERCIPIECF', type: 'number', precision: 12, scale: 4, nullable: true })
  cipiecfPercent: number | null;

  @Column({ name: 'VLIPIECF', type: 'number', precision: 18, scale: 6, nullable: true })
  ecfIpiValue: number | null;

  @Column({ name: 'BASEIPIECF', type: 'number', precision: 18, scale: 6, nullable: true })
  ecfIpiBase: number | null;

  @Column({ name: 'USAUNIDADEMASTER', type: 'varchar2', length: 1, nullable: true })
  useMasterUnit: string | null;

  @Column({ name: 'DTINICIOPROMOLOTE', type: 'date', nullable: true })
  batchPromoStartDate: Date | null;

  @Column({ name: 'DTFIMPROMOLOTE', type: 'date', nullable: true })
  batchPromoEndDate: Date | null;

  @Column({ name: 'QT_SEPARADAMANIF', type: 'number', precision: 20, scale: 6, nullable: true })
  manifestSeparatedQuantity: number | null;

  @Column({ name: 'CODCONTROLEVASILHAME', type: 'number', precision: 8, scale: 0, nullable: true })
  bottleControlId: number | null;

  @Column({ name: 'CODVASILHAMEECF', type: 'number', precision: 8, scale: 0, nullable: true })
  ecfBottleId: number | null;

  @Column({ name: 'QTSAIDAVASILHAME', type: 'number', precision: 8, scale: 0, nullable: true })
  bottleExitQuantity: number | null;

  @Column({ name: 'QTVENDIDAVASILHAME', type: 'number', precision: 8, scale: 0, nullable: true })
  bottleSoldQuantity: number | null;

  @Column({ name: 'VLACRESCVASILHAME', type: 'number', precision: 18, scale: 6, nullable: true })
  bottleAdditionValue: number | null;

  @Column({ name: 'PVENDAVASILHAME', type: 'number', precision: 18, scale: 6, nullable: true })
  bottleSalePrice: number | null;

  @Column({ name: 'MARGEMMIN', type: 'number', precision: 18, scale: 2, nullable: true })
  minMargin: number | null;

  @Column({ name: 'PERCREDALIQIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiCreditRatePercent: number | null;

  @Column({ name: 'CORTE', type: 'varchar2', length: 1, nullable: true })
  cut: string | null;

  @Column({ name: 'NUMSERIESAT', type: 'varchar2', length: 13, nullable: true })
  satSeriesNumber: string | null;

  @Column({ name: 'CODDESCONTOBASERCA', type: 'number', precision: 8, scale: 0, nullable: true })
  rcaBaseDiscountId: number | null;

  @Column({ name: 'CODPRODCESTA', type: 'number', precision: 6, scale: 0, nullable: true })
  basketProductId: number | null;

  @Column({ name: 'NUMSEQCESTABASICA', type: 'number', precision: 6, scale: 0, nullable: true })
  basicBasketSequence: number | null;

  @Column({ name: 'CODINDICEMULTIPLICADOR', type: 'number', precision: 6, scale: 0, nullable: true })
  multiplierIndexId: number | null;

  @Column({ name: 'PVENDALIQ', type: 'number', precision: 18, scale: 6, nullable: true })
  netSalePrice: number | null;

  @Column({ name: 'NUMPEDRAS', type: 'number', precision: 10, scale: 0, nullable: true })
  rasOrderNumber: number | null;

  @Column({ name: 'NUMSEQRAS', type: 'number', precision: 10, scale: 0, nullable: true })
  rasSequenceNumber: number | null;

  @Column({ name: 'ORIGEMDEPRECO', type: 'clob', nullable: true })
  priceOrigin: string | null;

  @Column({ name: 'ALIQICMSPART_DESATIVADO', type: 'number', precision: 18, scale: 6, nullable: true })
  partIcmsRateDisabled: number | null;

  @Column({ name: 'VLFCPPART', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpPartValue: number | null;

  @Column({ name: 'VLICMSPART', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsPartValue: number | null;

  @Column({ name: 'PERCPROVPART', type: 'number', precision: 5, scale: 2, nullable: true })
  provisionPartPercent: number | null;

  @Column({ name: 'VLICMSDIFALIQPART', type: 'number', precision: 22, scale: 6, nullable: true })
  partDiffRateIcmsValue: number | null;

  @Column({ name: 'PERCBASEREDPART', type: 'number', precision: 5, scale: 2, nullable: true })
  partBaseReductionPercent: number | null;

  @Column({ name: 'VLICMSPARTDEST', type: 'number', precision: 18, scale: 6, nullable: true })
  destPartIcmsValue: number | null;

  @Column({ name: 'VLBASEPARTDEST', type: 'number', precision: 18, scale: 6, nullable: true })
  destPartBaseValue: number | null;

  @Column({ name: 'ALIQFCP', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpRate: number | null;

  @Column({ name: 'ALIQINTERNADEST', type: 'number', precision: 18, scale: 6, nullable: true })
  destInternalRate: number | null;

  @Column({ name: 'VLICMSPARTREM', type: 'number', precision: 18, scale: 6, nullable: true })
  remPartIcmsValue: number | null;

  @Column({ name: 'ALIQINTERORIGPART', type: 'number', precision: 18, scale: 6, nullable: true })
  origPartInterRate: number | null;

  @Column({ name: 'VLBASEPART_DESATIVADO', type: 'number', precision: 18, scale: 6, nullable: true })
  partBaseDisabledValue: number | null;

  @Column({ name: 'ALIQFCPPART_DESATIVADO', type: 'number', precision: 18, scale: 6, nullable: true })
  partFcpRateDisabled: number | null;

  @Column({ name: 'VLACRESPART_DESATIVADO', type: 'number', precision: 18, scale: 6, nullable: true })
  partAdditionDisabledValue: number | null;

  @Column({ name: 'VLIPIPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceIpiValue: number | null;

  @Column({ name: 'VLIPIPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  rcaBasePriceIpiValue: number | null;

  @Column({ name: 'VLICMSPARTPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePricePartIcmsValue: number | null;

  @Column({ name: 'VLICMSPARTPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  rcaBasePricePartIcmsValue: number | null;

  @Column({ name: 'CODCEST', type: 'varchar2', length: 7, nullable: true })
  cestId: string | null;

  @Column({ name: 'QTDIFPESO', type: 'number', precision: 18, scale: 6, nullable: true })
  weightDiffQuantity: number | null;

  @Column({ name: 'ORIGMERCTRIB', type: 'varchar2', length: 1, nullable: true })
  taxMerchOrigin: string | null;

  @Column({ name: 'CODFIGVENDATRIANGULAR', type: 'number', precision: 4, scale: 0, nullable: true })
  triangularSaleFigId: number | null;

  @Column({ name: 'NUMOSSERVICO', type: 'number', precision: 6, scale: 0, nullable: true })
  serviceSoNumber: number | null;

  @Column({ name: 'CODBARRABALANCA', type: 'varchar2', length: 100, nullable: true })
  scaleBarId: string | null;

  @Column({ name: 'CODFISCAL', type: 'number', precision: 8, scale: 0, nullable: true })
  fiscalId: number | null;

  @Column({ name: 'SITTRIBUT', type: 'varchar2', length: 3, nullable: true })
  taxSituationStr: string | null;

  @Column({ name: 'VERSAOSERVICOPARTILHA', type: 'varchar2', length: 10, nullable: true })
  shareServiceVersion: string | null;

  @Column({ name: 'CODDESCONTOSIMULADOR', type: 'number', precision: 8, scale: 0, nullable: true })
  simulatorDiscountId: number | null;

  @Column({ name: 'PRODIMPORTADOPEPS', type: 'varchar2', length: 1, nullable: true })
  pepsImportedProduct: string | null;

  @Column({ name: 'NUMTRANSENTPEPS', type: 'number', precision: 10, scale: 0, nullable: true })
  pepsEntryTransNumber: number | null;

  @Column({ name: 'PTABELAFABRICAZFM', type: 'number', precision: 18, scale: 6, nullable: true })
  zfmFactoryTablePrice: number | null;

  @Column({ name: 'CODSUPERVISOR', type: 'number', precision: 4, scale: 0, nullable: true })
  supervisorId: number | null;

  @Column({ name: 'QTMINATACVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  minWholeSaleQuantity: number | null;

  @Column({ name: 'TIPODESCATACVENDA', type: 'varchar2', length: 1, nullable: true })
  wholeSaleDiscountType: string | null;

  @Column({ name: 'VLTOTSERVICO', type: 'number', precision: 12, scale: 6, nullable: true })
  totalServiceValue: number | null;

  @Column({ name: 'PRODUZIR_TINTA', type: 'varchar2', length: 1, nullable: true })
  produceInk: string | null;

  @Column({ name: 'VLBASEPART', type: 'number', precision: 18, scale: 6, nullable: true })
  partBaseValue: number | null;

  @Column({ name: 'ALIQFCPPART', type: 'number', precision: 18, scale: 6, nullable: true })
  rateFcppart: number | null;

  @Column({ name: 'ALIQICMSPART', type: 'number', precision: 18, scale: 6, nullable: true })
  rateIcmspart: number | null;

  @Column({ name: 'VLACRESPART', type: 'number', precision: 18, scale: 6, nullable: true })
  partAdditionValue: number | null;

  @Column({ name: 'VLDESCCARCACA', type: 'number', precision: 18, scale: 6, nullable: true })
  carcassDiscountValue: number | null;

  @Column({ name: 'DEVOLUCAOCARCACA', type: 'varchar2', length: 1, nullable: true })
  carcassReturn: string | null;

  @Column({ name: 'NUMCHAVEEXP', type: 'varchar2', length: 44, nullable: true })
  expKeyNumber: string | null;

  @Column({ name: 'NUMDRAWBACK', type: 'number', precision: 11, scale: 0, nullable: true })
  drawbackNumber: number | null;

  @Column({ name: 'NUMREGEXP', type: 'number', precision: 12, scale: 0, nullable: true })
  expRegNumber: number | null;

  @Column({ name: 'FATCONVCOMBO', type: 'number', precision: 18, scale: 6, nullable: true })
  comboConvFactor: number | null;

  @Column({ name: 'TIPOCOMBO', type: 'varchar2', length: 1, nullable: true })
  comboType: string | null;

  @Column({ name: 'CODOFERTA', type: 'number', precision: 6, scale: 0, nullable: true })
  offerId: number | null;

  @Column({ name: 'CNPJFABRICANTE', type: 'varchar2', length: 18, nullable: true })
  manufacturerCnpj: string | null;

  @Column({ name: 'FABRICANTE', type: 'varchar2', length: 60, nullable: true })
  manufacturer: string | null;

  @Column({ name: 'INDESCALARELEVANTE', type: 'varchar2', length: 1, nullable: true })
  relevantScaleInd: string | null;

  @Column({ name: 'CODBENEFICIOFISCAL', type: 'varchar2', length: 10, nullable: true })
  fiscalBenefitId: string | null;

  @Column({ name: 'CODAGREGACAO', type: 'varchar2', length: 20, nullable: true })
  aggregationId: string | null;

  @Column({ name: 'VLBASEFCPICMS', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpIcmsBaseValue: number | null;

  @Column({ name: 'VLBASEFCPST', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpStBaseValue: number | null;

  @Column({ name: 'VLBCFCPSTRET', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpStRetBaseValue: number | null;

  @Column({ name: 'PERFCPSTRET', type: 'number', precision: 12, scale: 4, nullable: true })
  fcpStRetPercent: number | null;

  @Column({ name: 'VLFCPSTRET', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpStRetValue: number | null;

  @Column({ name: 'PERFCPSN', type: 'number', precision: 12, scale: 4, nullable: true })
  snFcpPercent: number | null;

  @Column({ name: 'VLCREDFCPICMSSN', type: 'number', precision: 18, scale: 6, nullable: true })
  snFcpIcmsCreditValue: number | null;

  @Column({ name: 'VLFECP', type: 'number', precision: 18, scale: 6, nullable: true })
  fecpValue: number | null;

  @Column({ name: 'VLACRESCIMOFUNCEP', type: 'number', precision: 18, scale: 6, nullable: true })
  funcepAdditionValue: number | null;

  @Column({ name: 'PERACRESCIMOFUNCEP', type: 'number', precision: 12, scale: 4, nullable: true })
  funcepAdditionPercent: number | null;

  @Column({ name: 'ALIQICMSFECP', type: 'number', precision: 12, scale: 4, nullable: true })
  rateIcmsFecp: number | null;

  @Column({ name: 'PGLP', type: 'number', precision: 7, scale: 4, nullable: true })
  pglp: number | null;

  @Column({ name: 'PGNN', type: 'number', precision: 7, scale: 4, nullable: true })
  pgnn: number | null;

  @Column({ name: 'PGNI', type: 'number', precision: 7, scale: 4, nullable: true })
  pgni: number | null;

  @Column({ name: 'VPART', type: 'number', precision: 23, scale: 10, nullable: true })
  vpart: number | null;

  @Column({ name: 'BRINDEVAREJO', type: 'varchar2', length: 1, nullable: true })
  retailGift: string | null;

  @Column({ name: 'UTILIZOUMOTORCALCULO', type: 'varchar2', length: 1, nullable: true })
  usedCalcEngine: string | null;

  @Column({ name: 'ANP', type: 'number', precision: 9, scale: 0, nullable: true })
  anp: number | null;

  @Column({ name: 'DESCANP', type: 'varchar2', length: 95, nullable: true })
  anpDiscount: string | null;

  @Column({ name: 'NUMSEQITEMBRINDE', type: 'number', precision: 20, scale: 0, nullable: true })
  giftItemSequence: number | null;

  @Column({ name: 'BAIXAQTFRENTELOJA', type: 'varchar2', length: 1, nullable: true })
  storeFrontQtyWriteOff: string | null;

  @Column({ name: 'CODMAQUINA', type: 'number', precision: 4, scale: 0, nullable: true })
  posMachineId: number | null;

  @Column({ name: 'QTORIGTV8', type: 'number', precision: 22, scale: 6, nullable: true })
  origTv8Quantity: number | null;

  @Column({ name: 'CUPOMDESCONTO', type: 'varchar2', length: 50, nullable: true })
  discountCoupon: string | null;

  @Column({ name: 'CODCUPOMDESCONTO', type: 'varchar2', length: 15, nullable: true })
  discountCouponId: string | null;

  @Column({ name: 'DTCONSOLIDACAOAUXPRO', type: 'date', nullable: true })
  auxProConsolidationDate: Date | null;

  @Column({ name: 'IDREMESSAWEB', type: 'number', precision: 22, scale: 0, nullable: true })
  webShipmentId: number | null;

  @Column({ name: 'CODFORMULACMV', type: 'varchar2', length: 200, nullable: true })
  cmvFormulaId: string | null;

  @Column({ name: 'FATORGRAMATURALICIT', type: 'number', precision: 30, scale: 16, nullable: true })
  licitGrammageFactor: number | null;

  @Column({ name: 'NUMPEDCLI', type: 'varchar2', length: 15, nullable: true })
  customerOrderNumber: string | null;

  @Column({ name: 'NUMLOTEPROMOCAOMED', type: 'varchar2', length: 15, nullable: true })
  medPromoBatchNumber: string | null;

  @Column({ name: 'NUMVERBACAMPANHA', type: 'number', precision: 8, scale: 0, nullable: true })
  campaignFundNumber: number | null;

  @Column({ name: 'PERCCUSTFORNEC', type: 'number', precision: 12, scale: 4, nullable: true })
  supplierCostPercent: number | null;

  @Column({ name: 'VLCUSTFORNEC', type: 'number', precision: 18, scale: 6, nullable: true })
  supplierCostValue: number | null;

  @Column({ name: 'CODPRECOCESTA', type: 'number', precision: 22, scale: 0, nullable: true })
  basketPriceId: number | null;

  @Column({ name: 'POSICAOCFAT', type: 'varchar2', length: 3, nullable: true })
  cfatPosition: string | null;

  @Column({ name: 'REGIMEESPISENSTFONTE', type: 'varchar2', length: 1, nullable: true })
  stSourceExempSpecRegime: string | null;

  @Column({ name: 'OBSERVACAOSTFONTE', type: 'varchar2', length: 2000, nullable: true })
  stSourceObservation: string | null;

  @Column({ name: 'CODCONFIGFUNCEPMED', type: 'number', precision: 4, scale: 0, nullable: true })
  medPfeFuncConfigId: number | null;

  @Column({ name: 'CODDEPOSITO', type: 'number', precision: 10, scale: 0, nullable: true })
  warehouseId: number | null;

  @Column({ name: 'CODIGOINTEGRACAOWMS', type: 'varchar2', length: 20, nullable: true })
  wmsIntegrationId: string | null;

  @Column({ name: 'NUMVIASMAPASEPRI', type: 'number', precision: 3, scale: 0, nullable: true })
  copiesMapasepriNumber: number | null;

  @Column({ name: 'NUMEMPENHO', type: 'varchar2', length: 20, nullable: true })
  commitmentNumber: string | null;

  @Column({ name: 'CODEDITAL', type: 'number', precision: 9, scale: 0, nullable: true })
  biddingId: number | null;

  @Column({ name: 'LOTECONTRATO', type: 'varchar2', length: 10, nullable: true })
  contractBatch: string | null;

  @Column({ name: 'PRECOSEMIMPOSTO', type: 'number', precision: 18, scale: 6, nullable: true })
  priceWithoutTax: number | null;

  @Column({ name: 'BCSTRETANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  previousStRetBase: number | null;

  @Column({ name: 'VLICMSSUBSTITUTOANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  previousSubstituteIcmsValue: number | null;

  @Column({ name: 'VLICMSSTRETANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  previousStRetIcmsValue: number | null;

  @Column({ name: 'VLDESCCMVPROMOCAOMED', type: 'number', precision: 18, scale: 6, nullable: true })
  medPromoCmvDiscountValue: number | null;

  @Column({ name: 'NUMSEQORIG', type: 'number', precision: 20, scale: 0, nullable: true })
  origSequenceNumber: number | null;

  @Column({ name: 'USACASHBACK', type: 'varchar2', length: 1, nullable: true })
  useCashback: string | null;

  @Column({ name: 'QBCMONORET', type: 'number', precision: 18, scale: 6, nullable: true })
  monoretQbc: number | null;

  @Column({ name: 'ADREMICMSRET', type: 'number', precision: 18, scale: 6, nullable: true })
  retAdremIcms: number | null;

  @Column({ name: 'VICMSMONORET', type: 'number', precision: 18, scale: 6, nullable: true })
  monoretVIcms: number | null;

  @Column({ name: 'VLIPISUPENSO', type: 'number', precision: 18, scale: 6, nullable: true })
  suspendedIpiValue: number | null;

  @Column({ name: 'VLIISUSPENSO', type: 'number', precision: 18, scale: 6, nullable: true })
  suspendedIiValue: number | null;

  @Column({ name: 'CODBENEFICIOFISCALCOMPLE', type: 'varchar2', length: 100, nullable: true })
  complementaryFiscalBenefitId: string | null;

  @Column({ name: 'INDDEDUZDESONERACAO', type: 'number', precision: 1, scale: 0, nullable: true })
  deductDesonerationInd: number | null;

  @Column({ name: 'QTCOMBOVIRTUAL', type: 'number', precision: 12, scale: 4, nullable: true })
  virtualComboQuantity: number | null;

  @Column({ name: 'CUPOMVINCLANCAMENTO', type: 'number', nullable: true })
  coupomVincEntry: number | null;

  @Column({ name: 'CUSTOULTENTFISCAL', type: 'number', precision: 18, scale: 3, nullable: true })
  lastFiscalEntryCost: number | null;

  @Column({ name: 'PERDESCMAXCAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  maxCampaignDiscountPercent: number | null;

  @Column({ name: 'PERDESCCAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  campaignDiscountPercent: number | null;

  @Column({ name: 'PBASECAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  campaignBasePrice: number | null;

  @Column({ name: 'PRECOFIXOCAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  campaignFixedPrice: number | null;

  @Column({ name: 'ALIQCBS', type: 'number', precision: 18, scale: 6, nullable: true })
  cbsRate: number | null;

  @Column({ name: 'ALIQIBS', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsRate: number | null;

  @Column({ name: 'ALIQIS', type: 'number', precision: 18, scale: 6, nullable: true })
  isRate: number | null;

  @Column({ name: 'BASECBS', type: 'number', precision: 18, scale: 6, nullable: true })
  cbsBase: number | null;

  @Column({ name: 'BASEIBS', type: 'number', precision: 18, scale: 6, nullable: true })
  ibsBase: number | null;

  @Column({ name: 'BASEIS', type: 'number', precision: 18, scale: 6, nullable: true })
  isBase: number | null;

  @Column({ name: 'VLCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsValue: number | null;

  @Column({ name: 'VLIBS', type: 'number', precision: 18, scale: 6, nullable: true })
  ibsValue: number | null;

  @Column({ name: 'VLIS', type: 'number', precision: 18, scale: 6, nullable: true })
  isValue: number | null;

  @Column({ name: 'CODCBS', type: 'number', precision: 10, scale: 0, nullable: true })
  cbsId: number | null;

  @Column({ name: 'CODIBS', type: 'number', precision: 10, scale: 0, nullable: true })
  ibsId: number | null;

  @Column({ name: 'CODIS', type: 'number', precision: 10, scale: 0, nullable: true })
  isId: number | null;

  @Column({ name: 'VLCBSPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceCbsValue: number | null;

  @Column({ name: 'VLIBSPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceIbsValue: number | null;

  @Column({ name: 'VLISPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceIsValue: number | null;

  @Column({ name: 'VLCBSPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  rcaBaseCbsValue: number | null;

  @Column({ name: 'VLIBSPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  rcaBaseIbsValue: number | null;

  @Column({ name: 'VLISPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  rcaBaseIsValue: number | null;

  @Column({ name: 'PRECOUTILIZADONFE', type: 'varchar2', length: 1, nullable: true })
  nfeUsedPrice: string | null;

  @Column({ name: 'CODIGOTRIBUTACAOCBSIBS', type: 'number', precision: 10, scale: 0, nullable: true })
  cbsIbsTaxationId: number | null;

  @Column({ name: 'CSTIBSCBS', type: 'varchar2', length: 3, nullable: true })
  ibsCbsCst: string | null;

  @Column({ name: 'CCLASSTRIBIBSCBS', type: 'varchar2', length: 6, nullable: true })
  ibsCbsTaxClass: string | null;

  @Column({ name: 'VLBASEIBSCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsCbsBaseValue: number | null;

  @Column({ name: 'IBSUF', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsUf: number | null;

  @Column({ name: 'PDIFIBSUF', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsUfDiffPercent: number | null;

  @Column({ name: 'VDIFIBSUF', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsUfDiffValue: number | null;

  @Column({ name: 'PREDALIQIBSUF', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsUfRateRedPercent: number | null;

  @Column({ name: 'PALIQEFETIBSUF', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsUfEffectiveRatePercent: number | null;

  @Column({ name: 'VIBSUF', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsUfValue: number | null;

  @Column({ name: 'PIBSMUN', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsMunPercent: number | null;

  @Column({ name: 'PDIFIBSMUN', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsMunDiffPercent: number | null;

  @Column({ name: 'VDIFIBSMUN', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsMunDiffValue: number | null;

  @Column({ name: 'PREDALIQIBSMUN', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsMunRateRedPercent: number | null;

  @Column({ name: 'PALIQEFETIBSMUN', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsMunEffectiveRatePercent: number | null;

  @Column({ name: 'VIBSMUN', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsMunValue: number | null;

  @Column({ name: 'PDIFCBS', type: 'number', precision: 7, scale: 4, nullable: true })
  cbsDiffPercent: number | null;

  @Column({ name: 'VDIFCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsDiffValue: number | null;

  @Column({ name: 'PREDALIQCBS', type: 'number', precision: 7, scale: 4, nullable: true })
  cbsRateRedPercent: number | null;

  @Column({ name: 'PALIQEFETCBS', type: 'number', precision: 7, scale: 4, nullable: true })
  cbsEffectiveRatePercent: number | null;

  @Column({ name: 'CSTTRIBREG', type: 'varchar2', length: 3, nullable: true })
  regTaxCst: string | null;

  @Column({ name: 'CCLASSTRIBREG', type: 'varchar2', length: 6, nullable: true })
  regTaxClass: string | null;

  @Column({ name: 'PALIQEFETREGIBSUF', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsUfRegEffectiveRatePercent: number | null;

  @Column({ name: 'VTRIBREGIBSUF', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsUfRegTaxValue: number | null;

  @Column({ name: 'ALIQEFETREGIBSMUN', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsMunRegEffectiveRate: number | null;

  @Column({ name: 'VTRIBREGIBSMUN', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsMunRegTaxValue: number | null;

  @Column({ name: 'PALIQEFETREGCBS', type: 'number', precision: 7, scale: 2, nullable: true })
  cbsRegEffectiveRatePercent: number | null;

  @Column({ name: 'VTRIBREGCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsRegTaxValue: number | null;

  @Column({ name: 'PIBSUFCOMPRAGOV', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsUfGovPurchasePercent: number | null;

  @Column({ name: 'VIBSUFCOMPRAGOV', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsUfGovPurchaseValue: number | null;

  @Column({ name: 'PIBSMUNCOMPRAGOV', type: 'number', precision: 7, scale: 4, nullable: true })
  ibsMunGovPurchasePercent: number | null;

  @Column({ name: 'VIBSMUNCOMPRAGOV', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsMunGovPurchaseValue: number | null;

  @Column({ name: 'PCBGCOMPRAGOV', type: 'number', precision: 7, scale: 4, nullable: true })
  cbsGovPurchasePercent: number | null;

  @Column({ name: 'VCBSCOMPRAGOV', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsGovPurchaseValue: number | null;

  @Column({ name: 'CODIGOTRIBUTACAOIS', type: 'number', precision: 10, scale: 0, nullable: true })
  isTaxationId: number | null;

  @Column({ name: 'CSTIS', type: 'varchar2', length: 3, nullable: true })
  isCst: string | null;

  @Column({ name: 'CCLASSTRIBIS', type: 'varchar2', length: 6, nullable: true })
  isTaxClass: string | null;

  @Column({ name: 'VLBASEIS', type: 'number', precision: 23, scale: 10, nullable: true })
  isBaseValue: number | null;

  @Column({ name: 'ALIQESPECIFICAIS', type: 'number', precision: 7, scale: 4, nullable: true })
  specificIsRate: number | null;

  @Column({ name: 'PERMITIRCUMULATIVIDADEVERBACMV', type: 'varchar2', length: 1, nullable: true })
  allowCmvFundCumulativity: string | null;

}