import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDI',
})
export class PcpediEntity {
  @PrimaryColumn({ name: 'NUMPED', type: 'number' })
  orderId: number;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date | null;

  @Column({ name: 'CODCLI', type: 'number', nullable: true })
  customerId: number | null;

  @Column({ name: 'CODPROD', type: 'number' })
  productId: number;

  @Column({ name: 'CODUSUR', type: 'number', nullable: true })
  representativeId: number | null;

  @Column({ name: 'QT', type: 'number', nullable: true })
  quantity: number | null;

  @Column({ name: 'PVENDA', type: 'number', nullable: true })
  salePrice: number | null;

  @Column({ name: 'PTABELA', type: 'number', nullable: true })
  listPrice: number | null;

  @Column({ name: 'NUMCAR', type: 'number', nullable: true })
  loadNumber: number | null;

  @Column({ name: 'POSICAO', type: 'varchar2', nullable: true })
  position: string | null;

  @Column({ name: 'ST', type: 'number', nullable: true })
  st: number | null;

  @Column({ name: 'VLCUSTOFIN', type: 'number', nullable: true })
  finalCostValue: number | null;

  @Column({ name: 'VLCUSTOREAL', type: 'number', nullable: true })
  realCostValue: number | null;

  @Column({ name: 'PERCOM', type: 'number', nullable: true })
  commissionPercent: number | null;

  @Column({ name: 'PERDESC', type: 'number', nullable: true })
  discountPercent: number | null;

  @Column({ name: 'QTFALTA', type: 'number', nullable: true })
  missingQuantity: number | null;

  @PrimaryColumn({ name: 'NUMSEQ', type: 'number' })
  sequence: number;

  @Column({ name: 'TIPOPESO', type: 'varchar2', nullable: true })
  weightType: string | null;

  @Column({ name: 'PERCOMTAB', type: 'number', nullable: true })
  tableCommissionPercent: number | null;

  @Column({ name: 'PERDESCTAB', type: 'number', nullable: true })
  tableDiscountPercent: number | null;

  @Column({ name: 'CODMOTNAOCOMPRA', type: 'number', nullable: true })
  noPurchaseReasonId: number | null;

  @Column({ name: 'VLDESCCUSTOCMV', type: 'number', nullable: true })
  cmvCostDiscountValue: number | null;

  @Column({ name: 'QTSEPARADA', type: 'number', nullable: true })
  separatedQuantity: number | null;

  @Column({ name: 'QTVENDAEMB', type: 'number', nullable: true })
  packagingSaleQuantity: number | null;

  @Column({ name: 'PVENDAEMB', type: 'number', nullable: true })
  packagingSalePrice: number | null;

  @Column({ name: 'VLOUTROS', type: 'number', nullable: true })
  otherValue: number | null;

  @Column({ name: 'QTEMBALAGEM', type: 'number', nullable: true })
  packagingQuantity: number | null;

  @Column({ name: 'PVENDAEMBALAGEM', type: 'number', nullable: true })
  fullPackagingSalePrice: number | null;

  @Column({ name: 'CODAUXILIAR', type: 'number', nullable: true })
  auxiliaryId: number | null;

  @Column({ name: 'VLCUSTOREP', type: 'number', nullable: true })
  replacementCostValue: number | null;

  @Column({ name: 'VLCUSTOCONT', type: 'number', nullable: true })
  accountingCostValue: number | null;

  @Column({ name: 'CODCERTIFIC', type: 'number', nullable: true })
  certificateId: number | null;

  @Column({ name: 'PVENDABASE', type: 'number', nullable: true })
  baseSalePrice: number | null;

  @Column({ name: 'NOMECONCORRENTE', type: 'varchar2', nullable: true })
  competitorName: string | null;

  @Column({ name: 'PRECO', type: 'number', nullable: true })
  price: number | null;

  @Column({ name: 'PRAZO', type: 'varchar2', nullable: true })
  term: string | null;

  @Column({ name: 'QTNAOCOMPRA', type: 'number', nullable: true })
  missedPurchaseQuantity: number | null;

  @Column({ name: 'CODFILIALRETIRA', type: 'varchar2', nullable: true })
  withdrawBranchId: string | null;

  @Column({ name: 'NUMTIRA', type: 'number', nullable: true })
  slipNumber: number | null;

  @Column({ name: 'CODFUNCSEP', type: 'number', nullable: true })
  pickerEmployeeId: number | null;

  @Column({ name: 'VLDESCSUFRAMA', type: 'number', nullable: true })
  suframaDiscountValue: number | null;

  @Column({ name: 'NUMLOTE', type: 'varchar2', nullable: true })
  batchNumber: string | null;

  @Column({ name: 'VLDESCREPASSE', type: 'number', nullable: true })
  repassDiscountValue: number | null;

  @Column({ name: 'REFCOR', type: 'varchar2', nullable: true })
  refColor: string | null;

  @Column({ name: 'CODFUNCCONF', type: 'number', nullable: true })
  checkerEmployeeId: number | null;

  @Column({ name: 'DATACONF', type: 'date', nullable: true })
  checkedDate: Date | null;

  @Column({ name: 'VLDESCICMISENCAO', type: 'number', nullable: true })
  icmsExemptionDiscountValue: number | null;

  @Column({ name: 'QTORIGINAL', type: 'number', nullable: true })
  originalQuantity: number | null;

  @Column({ name: 'VLDESCFORNEC', type: 'number', nullable: true })
  supplierDiscountValue: number | null;

  @Column({ name: 'VLFRETE', type: 'number', nullable: true })
  freightValue: number | null;

  @Column({ name: 'VLIPI', type: 'number', nullable: true })
  ipiValue: number | null;

  @Column({ name: 'QTORIG', type: 'number', nullable: true })
  origQuantity: number | null;

  @Column({ name: 'QTSEPARARUN', type: 'number', nullable: true })
  separatedUnitQuantity: number | null;

  @Column({ name: 'QTSEPARARCX', type: 'number', nullable: true })
  separatedBoxQuantity: number | null;

  @Column({ name: 'CODST', type: 'number', nullable: true })
  stId: number | null;

  @Column({ name: 'VLDESCFIN', type: 'number', nullable: true })
  financialDiscountValue: number | null;

  @Column({ name: 'PERCIPI', type: 'number', nullable: true })
  ipiPercent: number | null;

  @Column({ name: 'IVA', type: 'number', nullable: true })
  iva: number | null;

  @Column({ name: 'ALIQICMS1', type: 'number', nullable: true })
  icmsRate1: number | null;

  @Column({ name: 'ALIQICMS2', type: 'number', nullable: true })
  icmsRate2: number | null;

  @Column({ name: 'PAUTA', type: 'number', nullable: true })
  tariff: number | null;

  @Column({ name: 'PERCBASERED', type: 'number', nullable: true })
  baseReductionPercent: number | null;

  @Column({ name: 'VLDESCCOM', type: 'number', nullable: true })
  commissionDiscountValue: number | null;

  @Column({ name: 'PERDESCCOM', type: 'number', nullable: true })
  commissionDiscountPercent: number | null;

  @Column({ name: 'PERDESCFIN', type: 'number', nullable: true })
  financialDiscountPercent: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', nullable: true })
  bonusValue: number | null;

  @Column({ name: 'PERBONIFIC', type: 'number', nullable: true })
  bonusPercent: number | null;

  @Column({ name: 'PORIGINAL', type: 'number', nullable: true })
  originalPrice: number | null;

  @Column({ name: 'VLREBAIXACMV', type: 'number', nullable: true })
  cmvRebateValue: number | null;

  @Column({ name: 'NUMAPLIC', type: 'number', nullable: true })
  applicationNumber: number | null;

  @Column({ name: 'PERFRETECMV', type: 'number', nullable: true })
  cmvFreightPercent: number | null;

  @Column({ name: 'VLDESCRODAPE', type: 'number', nullable: true })
  footerDiscountValue: number | null;

  @Column({ name: 'STCLIENTEGNRE', type: 'number', nullable: true })
  clientStGnre: number | null;

  @Column({ name: 'IMPRIME', type: 'varchar2', nullable: true })
  print: string | null;

  @Column({ name: 'COMPLEMENTO', type: 'varchar2', nullable: true })
  complement: string | null;

  @Column({ name: 'CUSTOFINEST', type: 'number', nullable: true })
  finalStockCost: number | null;

  @Column({ name: 'PERCBASEREDSTFONTE', type: 'number', nullable: true })
  sourceStBaseReductionPercent: number | null;

  @Column({ name: 'PERCBASEREDST', type: 'number', nullable: true })
  stBaseReductionPercent: number | null;

  @Column({ name: 'PERDESCCUSTO', type: 'number', nullable: true })
  costDiscountPercent: number | null;

  @Column({ name: 'CODICMTAB', type: 'number', nullable: true })
  icmsTableId: number | null;

  @Column({ name: 'TXVENDA', type: 'number', nullable: true })
  saleTax: number | null;

  @Column({ name: 'PERCOM2', type: 'number', nullable: true })
  commission2Percent: number | null;

  @Column({ name: 'PERCOM3', type: 'number', nullable: true })
  commission3Percent: number | null;

  @Column({ name: 'PERCISS', type: 'number', nullable: true })
  issPercent: number | null;

  @Column({ name: 'VLISS', type: 'number', nullable: true })
  issValue: number | null;

  @Column({ name: 'NUMTRANSWMS', type: 'number', nullable: true })
  wmsTransactionNumber: number | null;

  @Column({ name: 'CODPROMOCAO', type: 'varchar2', nullable: true })
  promotionId: string | null;

  @Column({ name: 'PRAZOMEDIO', type: 'number', nullable: true })
  averageTerm: number | null;

  @Column({ name: 'LOCALIZACAO', type: 'varchar2', nullable: true })
  location: string | null;

  @Column({ name: 'VLREPASSE', type: 'number', nullable: true })
  repassValue: number | null;

  @Column({ name: 'PBONIFIC', type: 'number', nullable: true })
  bonusPrice: number | null;

  @Column({ name: 'PERCVENDA', type: 'number', nullable: true })
  salePercent: number | null;

  @Column({ name: 'VLDESCPISSUFRAMA', type: 'number', nullable: true })
  pisSuframaDiscountValue: number | null;

  @Column({ name: 'CODDEGUSTACAO', type: 'number', nullable: true })
  tastingId: number | null;

  @Column({ name: 'QTLOCALIZADA', type: 'number', nullable: true })
  locatedQuantity: number | null;

  @Column({ name: 'PERDESCFLEX', type: 'number', nullable: true })
  flexDiscountPercent: number | null;

  @Column({ name: 'VLDESCFLEX', type: 'number', nullable: true })
  flexDiscountValue: number | null;

  @Column({ name: 'PERREDCOMISS', type: 'number', nullable: true })
  commissionReductionPercent: number | null;

  @Column({ name: 'VLREDCOMISS', type: 'number', nullable: true })
  commissionReductionValue: number | null;

  @Column({ name: 'TIPODESCAPLICADO', type: 'varchar2', nullable: true })
  appliedDiscountType: string | null;

  @Column({ name: 'PBASERCA', type: 'number', nullable: true })
  rcaBasePrice: number | null;

  @Column({ name: 'PESOBRUTO', type: 'number', nullable: true })
  weightGross: number | null;

  @Column({ name: 'NUMVERBAREBCMV', type: 'number', nullable: true })
  rebCmvFundNumber: number | null;

  @Column({ name: 'CONDVENDA', type: 'number', nullable: true })
  saleCondition: number | null;

  @Column({ name: 'CODPLPAG', type: 'number', nullable: true })
  paymentPlanId: number | null;

  @Column({ name: 'EANCODPROD', type: 'number', nullable: true })
  productEan: number | null;

  @Column({ name: 'BRINDE', type: 'varchar2', nullable: true })
  gift: string | null;

  @Column({ name: 'PERCOMSUP', type: 'number', nullable: true })
  supervisorCommissionPercent: number | null;

  @Column({ name: 'NUMCONFERENCIA', type: 'number', nullable: true })
  conferenceNumber: number | null;

  @Column({ name: 'VLACRESCRODAPE', type: 'number', nullable: true })
  footerAdditionValue: number | null;

  @Column({ name: 'CODECF', type: 'varchar2', nullable: true })
  ecfId: string | null;

  @Column({ name: 'LETRACOMISS', type: 'varchar2', nullable: true })
  commissionLetter: string | null;

  @Column({ name: 'QTCX', type: 'number', nullable: true })
  boxQuantity: number | null;

  @Column({ name: 'QTPECAS', type: 'number', nullable: true })
  piecesQuantity: number | null;

  @Column({ name: 'NUMOP', type: 'number', nullable: true })
  opNumber: number | null;

  @Column({ name: 'PERREDCOMISSSUP', type: 'number', nullable: true })
  supervisorCommissionReductionPercent: number | null;

  @Column({ name: 'VLREDCOMISSSUP', type: 'number', nullable: true })
  supCommissionReductionValue: number | null;

  @Column({ name: 'BASEICST', type: 'number', nullable: true })
  stBase: number | null;

  @Column({ name: 'PVENDA1', type: 'number', nullable: true })
  salePrice1: number | null;

  @Column({ name: 'PERCAGREGADORST', type: 'number', nullable: true })
  stAggregatorPercent: number | null;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', nullable: true })
  customerCmvFundValue: number | null;

  @Column({ name: 'PERDESCISENTOICMS', type: 'number', nullable: true })
  icmsExemptDiscountPercent: number | null;

  @Column({ name: 'PERCOMPROF', type: 'number', nullable: true })
  professionalCommissionPercent: number | null;

  @Column({ name: 'NUMCARAUX', type: 'number', nullable: true })
  auxLoadNumber: number | null;

  @Column({ name: 'VLOUTRASDESP', type: 'number', nullable: true })
  otherExpensesValue: number | null;

  @Column({ name: 'QTAPANHA', type: 'number', nullable: true })
  pickQuantity: number | null;

  @Column({ name: 'EXPORTADOSERVINT', type: 'varchar2', nullable: true })
  exportedIntService: string | null;

  @Column({ name: 'DTEXPORTACAOSERVINT', type: 'date', nullable: true })
  intServiceExportDate: Date | null;

  @Column({ name: 'DTIMPORTACAOSERVPRINC', type: 'date', nullable: true })
  mainServiceImportDate: Date | null;

  @Column({ name: 'IMPORTADOSERVPRINC', type: 'varchar2', nullable: true })
  importedMainService: string | null;

  @Column({ name: 'CODVASILHAME', type: 'number', nullable: true })
  bottleId: number | null;

  @Column({ name: 'TRUNCARITEM', type: 'varchar2', nullable: true })
  truncateItem: string | null;

  @Column({ name: 'QTUNITCX', type: 'number', nullable: true })
  boxUnitQuantity: number | null;

  @Column({ name: 'PERDESCPOLITICA', type: 'number', nullable: true })
  policyDiscountPercent: number | null;

  @Column({ name: 'PVENDAANTERIOR', type: 'number', nullable: true })
  previousSalePrice: number | null;

  @Column({ name: 'TIPOENTREGA', type: 'varchar2', nullable: true })
  deliveryType: string | null;

  @Column({ name: 'NUMOS', type: 'number', nullable: true })
  soNumber: number | null;

  @Column({ name: 'DTINICIALSEP', type: 'date', nullable: true })
  separationStartDate: Date | null;

  @Column({ name: 'DTFINALSEP', type: 'date', nullable: true })
  separationEndDate: Date | null;

  @Column({ name: 'DATACONFFIM', type: 'date', nullable: true })
  checkEndDate: Date | null;

  @Column({ name: 'SITUACAOOS', type: 'number', nullable: true })
  soSituation: number | null;

  @Column({ name: 'NUMVIASOS', type: 'number', nullable: true })
  soCopiesNumber: number | null;

  @Column({ name: 'QTPENDOS', type: 'number', nullable: true })
  soPendingQuantity: number | null;

  @Column({ name: 'DTINICIALPEND', type: 'date', nullable: true })
  pendingStartDate: Date | null;

  @Column({ name: 'DTFINALPEND', type: 'date', nullable: true })
  pendingEndDate: Date | null;

  @Column({ name: 'CODFUNCPEND', type: 'number', nullable: true })
  pendingEmployeeId: number | null;

  @Column({ name: 'DTLIBOS', type: 'date', nullable: true })
  soReleaseDate: Date | null;

  @Column({ name: 'CODFUNCLIBOS', type: 'number', nullable: true })
  soReleaseEmployeeId: number | null;

  @Column({ name: 'LOCALIZACAOOS', type: 'varchar2', nullable: true })
  soLocation: string | null;

  @Column({ name: 'VLDIFALIQUOTAS', type: 'number', nullable: true })
  diffRateValue: number | null;

  @Column({ name: 'BASEDIFALIQUOTAS', type: 'number', nullable: true })
  diffRateBase: number | null;

  @Column({ name: 'PERCDIFALIQUOTAS', type: 'number', nullable: true })
  diffRatePercent: number | null;

  @Column({ name: 'GERAGNRE_CNPJCLIENTE', type: 'varchar2', nullable: true })
  generateGnreClientCnpj: string | null;

  @Column({ name: 'PRODDESCRICAOCONTRATO', type: 'varchar2', nullable: true })
  contractProductDescription: string | null;

  @Column({ name: 'CODFUNCALTERACAOOS', type: 'number', nullable: true })
  soChangeEmployeeId: number | null;

  @Column({ name: 'DTALTERACAOOS', type: 'date', nullable: true })
  soChangeDate: Date | null;

  @Column({ name: 'POLITICAPRIORITARIA', type: 'varchar2', nullable: true })
  priorityPolicy: string | null;

  @Column({ name: 'QTIMEDIATA', type: 'number', nullable: true })
  immediateQuantity: number | null;

  @Column({ name: 'CODFUNCLANC', type: 'number', nullable: true })
  entryEmployeeId: number | null;

  @Column({ name: 'ROTINALANC', type: 'number', nullable: true })
  entryRoutine: number | null;

  @Column({ name: 'DTLANC', type: 'date', nullable: true })
  entryDate: Date | null;

  @Column({ name: 'CODFUNCULTALTER', type: 'number', nullable: true })
  lastChangeEmployeeId: number | null;

  @Column({ name: 'ROTINAULTLALTER', type: 'number', nullable: true })
  lastChangeRoutine: number | null;

  @Column({ name: 'DTULTLALTER', type: 'date', nullable: true })
  lastChangeDate: Date | null;

  @Column({ name: 'NUMOSORIGEM', type: 'number', nullable: true })
  originSoNumber: number | null;

  @Column({ name: 'QTUNITEMB', type: 'number', nullable: true })
  packagingUnitQuantity: number | null;

  @Column({ name: 'VLFRETE_RATEIO', type: 'number', nullable: true })
  freightApportionmentValue: number | null;

  @Column({ name: 'VLOUTRAS_RATEIO', type: 'number', nullable: true })
  otherApportionmentValue: number | null;

  @Column({ name: 'BASEICST_ANT_RATEIO', type: 'number', nullable: true })
  previousStBaseApportionment: number | null;

  @Column({ name: 'ST_ANT_RATEIO', type: 'number', nullable: true })
  previousStApportionment: number | null;

  @Column({ name: 'ST_DIF_RATEIO', type: 'number', nullable: true })
  diffStApportionment: number | null;

  @Column({ name: 'ABASTECIDO', type: 'varchar2', nullable: true })
  fueled: string | null;

  @Column({ name: 'TVBONIF', type: 'number', nullable: true })
  bonusTv: number | null;

  @Column({ name: 'CODIGOBRINDE', type: 'number', nullable: true })
  giftId: number | null;

  @Column({ name: 'CODFUNCAJUSTEOS', type: 'number', nullable: true })
  soAdjustmentEmployeeId: number | null;

  @Column({ name: 'DTAJUSTEOS', type: 'date', nullable: true })
  soAdjustmentDate: Date | null;

  @Column({ name: 'TIPOCALCULOST', type: 'varchar2', nullable: true })
  stCalculationType: string | null;

  @Column({ name: 'NUMETIQUETA', type: 'number', nullable: true })
  labelNumber: number | null;

  @Column({ name: 'VLVERBACMV', type: 'number', nullable: true })
  cmvFundValue: number | null;

  @Column({ name: 'NUMVOLUMESCONFERENCIA', type: 'number', nullable: true })
  conferenceVolumesNumber: number | null;

  @Column({ name: 'ROTINA', type: 'varchar2', nullable: true })
  routine: string | null;

  @Column({ name: 'PERCDESCPIS', type: 'number', nullable: true })
  pisDiscountPercent: number | null;

  @Column({ name: 'PERCDESCCOFINS', type: 'number', nullable: true })
  cofinsDiscountPercent: number | null;

  @Column({ name: 'VLDESCREDUCAOPIS', type: 'number', nullable: true })
  pisReductionDiscountValue: number | null;

  @Column({ name: 'VLDESCREDUCAOCOFINS', type: 'number', nullable: true })
  cofinsReductionDiscountValue: number | null;

  @Column({ name: 'PERCOM4', type: 'number', nullable: true })
  commission4Percent: number | null;

  @Column({ name: 'TIPOSEPARACAO', type: 'varchar2', nullable: true })
  separationType: string | null;

  @Column({ name: 'CODFUNCCONF2', type: 'number', nullable: true })
  checker2EmployeeId: number | null;

  @Column({ name: 'PRECOFVBRUTO', type: 'number', nullable: true })
  fvGrossPrice: number | null;

  @Column({ name: 'CODFUNCALTLOTE', type: 'number', nullable: true })
  batchChangeEmployeeId: number | null;

  @Column({ name: 'DTGERACAOOS', type: 'date', nullable: true })
  soGenerationDate: Date | null;

  @Column({ name: 'CODDESCONTO', type: 'number', nullable: true })
  discountId: number | null;

  @Column({ name: 'ALTERNATIVO', type: 'varchar2', nullable: true })
  alternative: string | null;

  @Column({ name: 'SIGLAQUALIDADE', type: 'varchar2', nullable: true })
  qualityAcronym: string | null;

  @Column({ name: 'VOLUMEDESEJADO', type: 'number', nullable: true })
  desiredVolume: number | null;

  @Column({ name: 'CODBASE', type: 'varchar2', nullable: true })
  baseId: string | null;

  @Column({ name: 'CODFORMULA', type: 'varchar2', nullable: true })
  formulaId: string | null;

  @Column({ name: 'USADEBCREDRCABRIND', type: 'varchar2', nullable: true })
  useRcaGiftDebitCredit: string | null;

  @Column({ name: 'CODCOMBO', type: 'number', nullable: true })
  comboId: number | null;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  deliveryDate: Date | null;

  @Column({ name: 'MOVIMENTACONTACORRENTERCA', type: 'varchar2', nullable: true })
  movesRcaCheckingAccount: string | null;

  @Column({ name: 'IDPATRIMONIO', type: 'varchar2', nullable: true })
  assetId: string | null;

  @Column({ name: 'VLREDPVENDASIMPLESNA', type: 'number', nullable: true })
  simpleNationalSalePriceReductionValue: number | null;

  @Column({ name: 'VLREDCMVSIMPLESNAC', type: 'number', nullable: true })
  simpleNationalCmvReductionValue: number | null;

  @Column({ name: 'PERDESCFOB', type: 'number', nullable: true })
  fobDiscountPercent: number | null;

  @Column({ name: 'PRODDESCRICAODANFE', type: 'varchar2', nullable: true })
  danfeProductDescription: string | null;

  @Column({ name: 'CODCONTRATO', type: 'number', nullable: true })
  contractId: number | null;

  @Column({ name: 'PERCICM', type: 'number', nullable: true })
  icmPercent: number | null;

  @Column({ name: 'PRECOMAXCONSUM', type: 'number', nullable: true })
  maxConsumerPrice: number | null;

  @Column({ name: 'DESCPRECOFAB', type: 'number', nullable: true })
  factoryPriceDiscount: number | null;

  @Column({ name: 'ROTINALANCULTALT', type: 'varchar2', nullable: true })
  lastChangeEntryRoutine: string | null;

  @Column({ name: 'NUMCAIXA', type: 'varchar2', nullable: true })
  caixaNumber: string | null;

  @Column({ name: 'QTLITRAGEM', type: 'number', nullable: true })
  litersQuantity: number | null;

  @Column({ name: 'BONIFIC', type: 'varchar2', nullable: true })
  bonus: string | null;

  @Column({ name: 'IDVENDA', type: 'number', nullable: true })
  saleId: number | null;

  @Column({ name: 'PERCDESCINDUSTRIA', type: 'number', nullable: true })
  industryDiscountPercent: number | null;

  @Column({ name: 'PERDESCBOLETO', type: 'number', nullable: true })
  boletoDiscountPercent: number | null;

  @Column({ name: 'CODLINHAPRAZO', type: 'number', nullable: true })
  termLineId: number | null;

  @Column({ name: 'STPBASERCA', type: 'number', nullable: true })
  stPbaserca: number | null;

  @Column({ name: 'STPTABELA', type: 'number', nullable: true })
  tableSt: number | null;

  @Column({ name: 'RP_IMEDIATA', type: 'varchar2', nullable: true })
  immediateRp: string | null;

  @Column({ name: 'GRUPOFATURAMENTO', type: 'varchar2', nullable: true })
  billingGroup: string | null;

  @Column({ name: 'PARTICIPAGIRO', type: 'varchar2', nullable: true })
  turnoverParticipation: string | null;

  @Column({ name: 'VLIPIOUTRAS', type: 'number', nullable: true })
  otherIpiValue: number | null;

  @Column({ name: 'PERCIPIOUTRAS', type: 'number', nullable: true })
  otherIpiPercent: number | null;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', nullable: true })
  abatementDiscountValue: number | null;

  @Column({ name: 'PERCDESCABATIMENTO', type: 'number', nullable: true })
  abatementDiscountPercent: number | null;

  @Column({ name: 'QTRESERVANT', type: 'number', nullable: true })
  previousReservedQuantity: number | null;

  @Column({ name: 'VLDESCBOLETO', type: 'number', nullable: true })
  boletoDiscountValue: number | null;

  @Column({ name: 'NUMSEQITEMCONTRATO', type: 'number', nullable: true })
  contractItemSequence: number | null;

  @Column({ name: 'NUMLISTA', type: 'number', nullable: true })
  listNumber: number | null;

  @Column({ name: 'SUGESTAO', type: 'varchar2', nullable: true })
  suggestion: string | null;

  @Column({ name: 'CODEMITENTEITEMPEDIDO', type: 'number', nullable: true })
  orderItemIssuerId: number | null;

  @Column({ name: 'QTUN', type: 'number', nullable: true })
  unitQuantity: number | null;

  @Column({ name: 'ROTINALANCBRINDE', type: 'number', nullable: true })
  giftEntryRoutine: number | null;

  @Column({ name: 'PERDESCINICOMISS', type: 'number', nullable: true })
  startCommissionDiscountPercent: number | null;

  @Column({ name: 'PERDESCFIMCOMISS', type: 'number', nullable: true })
  endCommissionDiscountPercent: number | null;

  @Column({ name: 'CONCEDERMAIORCOMISSREG', type: 'varchar2', nullable: true })
  grantHigherRegCommission: string | null;

  @Column({ name: 'VLSUBTOTITEM', type: 'number', nullable: true })
  itemSubtotalValue: number | null;

  @Column({ name: 'PERDESCNEGOCIADO', type: 'number', nullable: true })
  negotiatedDiscountPercent: number | null;

  @Column({ name: 'FORMANEGOCIACAO', type: 'varchar2', nullable: true })
  negotiationForm: string | null;

  @Column({ name: 'PERDESCAVISTA', type: 'number', nullable: true })
  cashDiscountPercent: number | null;

  @Column({ name: 'NEGOCIACAOPOSTERIOR', type: 'varchar2', nullable: true })
  laterNegotiation: string | null;

  @Column({ name: 'CODPRECOFIXO', type: 'number', nullable: true })
  fixedPriceId: number | null;

  @Column({ name: 'VLACRESFRETEKG', type: 'number', nullable: true })
  freightKgAdditionValue: number | null;

  @Column({ name: 'STATUSSUCATA', type: 'number', nullable: true })
  scrapStatus: number | null;

  @Column({ name: 'PTABELAAUTPECAS', type: 'number', nullable: true })
  autopartsTablePrice: number | null;

  @Column({ name: 'GRPREGRABRINDE', type: 'number', nullable: true })
  giftRuleGroup: number | null;

  @Column({ name: 'NUMITEMPED', type: 'number', nullable: true })
  orderItemNumber: number | null;

  @Column({ name: 'VLITEMTRIBUTOS', type: 'number', nullable: true })
  itemTaxesValue: number | null;

  @Column({ name: 'PERCTRIBUTOS', type: 'number', nullable: true })
  taxesPercent: number | null;

  @Column({ name: 'TOTALIZADORALIQUOTA', type: 'varchar2', nullable: true })
  rateTotalizer: string | null;

  @Column({ name: 'PERDESCPAUTA', type: 'number', nullable: true })
  tariffDiscountPercent: number | null;

  @Column({ name: 'ORIGEMST', type: 'varchar2', nullable: true })
  stOrigin: string | null;

  @Column({ name: 'VLDESCSOCIOTORCEDOR', type: 'number', nullable: true })
  supporterPartnerDiscountValue: number | null;

  @Column({ name: 'INICIOINTERVALODESCQUANT', type: 'number', nullable: true })
  quantDiscountIntervalStart: number | null;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', nullable: true })
  medPromotionId: number | null;

  @Column({ name: 'NUMRECOPI', type: 'number', nullable: true })
  recopiNumber: number | null;

  @Column({ name: 'NUMERORECOPI', type: 'varchar2', nullable: true })
  recopiNumberAux: string | null;

  @Column({ name: 'UNIDADE', type: 'varchar2', nullable: true })
  unit: string | null;

  @Column({ name: 'AMBIENTE', type: 'varchar2', nullable: true })
  environment: string | null;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'number', nullable: true })
  realCurrencyRateCase: number | null;

  @Column({ name: 'CODMOEDAESTRAGEIRA', type: 'number', nullable: true })
  foreignCurrencyId: number | null;

  @Column({ name: 'VLRMOEDAESTRAGEIRA', type: 'number', nullable: true })
  foreignCurrencyValue: number | null;

  @Column({ name: 'QTDIASENTREGAITEM', type: 'number', nullable: true })
  itemDeliveryDaysQuantity: number | null;

  @Column({ name: 'PERCIPIECF', type: 'number', nullable: true })
  cipiecfPercent: number | null;

  @Column({ name: 'VLIPIECF', type: 'number', nullable: true })
  ecfIpiValue: number | null;

  @Column({ name: 'BASEIPIECF', type: 'number', nullable: true })
  ecfIpiBase: number | null;

  @Column({ name: 'USAUNIDADEMASTER', type: 'varchar2', nullable: true, default: 'N' })
  useMasterUnit: string | null;

  @Column({ name: 'DTINICIOPROMOLOTE', type: 'date', nullable: true })
  batchPromoStartDate: Date | null;

  @Column({ name: 'DTFIMPROMOLOTE', type: 'date', nullable: true })
  batchPromoEndDate: Date | null;

  @Column({ name: 'QT_SEPARADAMANIF', type: 'number', nullable: true })
  manifestSeparatedQuantity: number | null;

  @Column({ name: 'CODCONTROLEVASILHAME', type: 'number', nullable: true })
  bottleControlId: number | null;

  @Column({ name: 'CODVASILHAMEECF', type: 'number', nullable: true })
  ecfBottleId: number | null;

  @Column({ name: 'QTSAIDAVASILHAME', type: 'number', nullable: true })
  bottleExitQuantity: number | null;

  @Column({ name: 'QTVENDIDAVASILHAME', type: 'number', nullable: true })
  bottleSoldQuantity: number | null;

  @Column({ name: 'VLACRESCVASILHAME', type: 'number', nullable: true })
  bottleAdditionValue: number | null;

  @Column({ name: 'PVENDAVASILHAME', type: 'number', nullable: true })
  bottleSalePrice: number | null;

  @Column({ name: 'MARGEMMIN', type: 'number', nullable: true })
  minMargin: number | null;

  @Column({ name: 'PERCREDALIQIPI', type: 'number', nullable: true })
  ipiCreditRatePercent: number | null;

  @Column({ name: 'CORTE', type: 'varchar2', nullable: true, default: 'N' })
  cut: string | null;

  @Column({ name: 'NUMSERIESAT', type: 'varchar2', nullable: true })
  satSeriesNumber: string | null;

  @Column({ name: 'CODDESCONTOBASERCA', type: 'number', nullable: true })
  rcaBaseDiscountId: number | null;

  @Column({ name: 'CODPRODCESTA', type: 'number', nullable: true })
  basketProductId: number | null;

  @Column({ name: 'NUMSEQCESTABASICA', type: 'number', nullable: true })
  basicBasketSequence: number | null;

  @Column({ name: 'CODINDICEMULTIPLICADOR', type: 'number', nullable: true })
  multiplierIndexId: number | null;

  @Column({ name: 'PVENDALIQ', type: 'number', nullable: true })
  netSalePrice: number | null;

  @Column({ name: 'NUMPEDRAS', type: 'number', nullable: true })
  rasOrderNumber: number | null;

  @Column({ name: 'NUMSEQRAS', type: 'number', nullable: true })
  rasSequenceNumber: number | null;

  @Column({ name: 'ORIGEMDEPRECO', type: 'clob', nullable: true })
  priceOrigin: string | null;

  @Column({ name: 'ALIQICMSPART_DESATIVADO', type: 'number', nullable: true })
  partIcmsRateDisabled: number | null;

  @Column({ name: 'VLFCPPART', type: 'number', nullable: true })
  fcpPartValue: number | null;

  @Column({ name: 'VLICMSPART', type: 'number', nullable: true })
  icmsPartValue: number | null;

  @Column({ name: 'PERCPROVPART', type: 'number', nullable: true })
  provisionPartPercent: number | null;

  @Column({ name: 'VLICMSDIFALIQPART', type: 'number', nullable: true })
  partDiffRateIcmsValue: number | null;

  @Column({ name: 'PERCBASEREDPART', type: 'number', nullable: true })
  partBaseReductionPercent: number | null;

  @Column({ name: 'VLICMSPARTDEST', type: 'number', nullable: true })
  destPartIcmsValue: number | null;

  @Column({ name: 'VLBASEPARTDEST', type: 'number', nullable: true })
  destPartBaseValue: number | null;

  @Column({ name: 'ALIQFCP', type: 'number', nullable: true })
  fcpRate: number | null;

  @Column({ name: 'ALIQINTERNADEST', type: 'number', nullable: true })
  destInternalRate: number | null;

  @Column({ name: 'VLICMSPARTREM', type: 'number', nullable: true })
  remPartIcmsValue: number | null;

  @Column({ name: 'ALIQINTERORIGPART', type: 'number', nullable: true })
  origPartInterRate: number | null;

  @Column({ name: 'VLBASEPART_DESATIVADO', type: 'number', nullable: true })
  partBaseDisabledValue: number | null;

  @Column({ name: 'ALIQFCPPART_DESATIVADO', type: 'number', nullable: true })
  partFcpRateDisabled: number | null;

  @Column({ name: 'VLACRESPART_DESATIVADO', type: 'number', nullable: true })
  partAdditionDisabledValue: number | null;

  @Column({ name: 'VLIPIPTABELA', type: 'number', nullable: true })
  tablePriceIpiValue: number | null;

  @Column({ name: 'VLIPIPBASERCA', type: 'number', nullable: true })
  rcaBasePriceIpiValue: number | null;

  @Column({ name: 'VLICMSPARTPTABELA', type: 'number', nullable: true })
  tablePricePartIcmsValue: number | null;

  @Column({ name: 'VLICMSPARTPBASERCA', type: 'number', nullable: true })
  rcaBasePricePartIcmsValue: number | null;

  @Column({ name: 'CODCEST', type: 'varchar2', nullable: true })
  cestId: string | null;

  @Column({ name: 'QTDIFPESO', type: 'number', nullable: true })
  weightDiffQuantity: number | null;

  @Column({ name: 'ORIGMERCTRIB', type: 'varchar2', nullable: true })
  taxMerchOrigin: string | null;

  @Column({ name: 'CODFIGVENDATRIANGULAR', type: 'number', nullable: true })
  triangularSaleFigId: number | null;

  @Column({ name: 'NUMOSSERVICO', type: 'number', nullable: true })
  serviceSoNumber: number | null;

  @Column({ name: 'CODBARRABALANCA', type: 'varchar2', nullable: true })
  scaleBarId: string | null;

  @Column({ name: 'CODFISCAL', type: 'number', nullable: true })
  fiscalId: number | null;

  @Column({ name: 'SITTRIBUT', type: 'varchar2', nullable: true })
  taxSituationStr: string | null;

  @Column({ name: 'VERSAOSERVICOPARTILHA', type: 'varchar2', nullable: true })
  shareServiceVersion: string | null;

  @Column({ name: 'CODDESCONTOSIMULADOR', type: 'number', nullable: true })
  simulatorDiscountId: number | null;

  @Column({ name: 'PRODIMPORTADOPEPS', type: 'varchar2', nullable: true })
  pepsImportedProduct: string | null;

  @Column({ name: 'NUMTRANSENTPEPS', type: 'number', nullable: true })
  pepsEntryTransNumber: number | null;

  @Column({ name: 'PTABELAFABRICAZFM', type: 'number', nullable: true })
  zfmFactoryTablePrice: number | null;

  @Column({ name: 'CODSUPERVISOR', type: 'number', nullable: true })
  supervisorId: number | null;

  @Column({ name: 'QTMINATACVENDA', type: 'number', nullable: true })
  minWholesaleSaleQuantity: number | null;

  @Column({ name: 'TIPODESCATACVENDA', type: 'varchar2', nullable: true })
  wholesaleSaleDiscountType: string | null;

  @Column({ name: 'VLTOTSERVICO', type: 'number', nullable: true })
  totalServiceValue: number | null;

  @Column({ name: 'PRODUZIR_TINTA', type: 'varchar2', nullable: true })
  produceInk: string | null;

  @Column({ name: 'VLBASEPART', type: 'number', nullable: true })
  partBaseValue: number | null;

  @Column({ name: 'ALIQFCPPART', type: 'number', nullable: true })
  rateFcppart: number | null;

  @Column({ name: 'ALIQICMSPART', type: 'number', nullable: true })
  rateIcmspart: number | null;

  @Column({ name: 'VLACRESPART', type: 'number', nullable: true })
  partAdditionValue: number | null;

  @Column({ name: 'VLDESCCARCACA', type: 'number', nullable: true })
  carcassDiscountValue: number | null;

  @Column({ name: 'DEVOLUCAOCARCACA', type: 'varchar2', nullable: true, default: 'N' })
  carcassReturn: string | null;

  @Column({ name: 'NUMCHAVEEXP', type: 'varchar2', nullable: true })
  expKeyNumber: string | null;

  @Column({ name: 'NUMDRAWBACK', type: 'number', nullable: true })
  drawbackNumber: number | null;

  @Column({ name: 'NUMREGEXP', type: 'number', nullable: true })
  expRegNumber: number | null;

  @Column({ name: 'FATCONVCOMBO', type: 'number', nullable: true })
  comboConvFactor: number | null;

  @Column({ name: 'TIPOCOMBO', type: 'varchar2', nullable: true })
  comboType: string | null;

  @Column({ name: 'CODOFERTA', type: 'number', nullable: true })
  offerId: number | null;

  @Column({ name: 'CNPJFABRICANTE', type: 'varchar2', nullable: true })
  manufacturerCnpj: string | null;

  @Column({ name: 'FABRICANTE', type: 'varchar2', nullable: true })
  manufacturer: string | null;

  @Column({ name: 'INDESCALARELEVANTE', type: 'varchar2', nullable: true, default: 'S' })
  relevantScaleInd: string | null;

  @Column({ name: 'CODBENEFICIOFISCAL', type: 'varchar2', nullable: true })
  fiscalBenefitId: string | null;

  @Column({ name: 'CODAGREGACAO', type: 'varchar2', nullable: true })
  agregacaoId: string | null;

  @Column({ name: 'VLBASEFCPICMS', type: 'number', nullable: true })
  fcpIcmsBaseValue: number | null;

  @Column({ name: 'VLBASEFCPST', type: 'number', nullable: true })
  fcpStBaseValue: number | null;

  @Column({ name: 'VLBCFCPSTRET', type: 'number', nullable: true })
  fcpStRetBaseValue: number | null;

  @Column({ name: 'PERFCPSTRET', type: 'number', nullable: true })
  fcpStRetPercent: number | null;

  @Column({ name: 'VLFCPSTRET', type: 'number', nullable: true })
  fcpStRetValue: number | null;

  @Column({ name: 'PERFCPSN', type: 'number', nullable: true })
  snFcpPercent: number | null;

  @Column({ name: 'VLCREDFCPICMSSN', type: 'number', nullable: true })
  snFcpIcmsCreditValue: number | null;

  @Column({ name: 'VLFECP', type: 'number', nullable: true })
  fecpValue: number | null;

  @Column({ name: 'VLACRESCIMOFUNCEP', type: 'number', nullable: true })
  funcepAdditionValue: number | null;

  @Column({ name: 'PERACRESCIMOFUNCEP', type: 'number', nullable: true })
  funcepAdditionPercent: number | null;

  @Column({ name: 'ALIQICMSFECP', type: 'number', nullable: true })
  rateIcmsfecp: number | null;

  @Column({ name: 'PGLP', type: 'number', nullable: true })
  pglp: number | null;

  @Column({ name: 'PGNN', type: 'number', nullable: true })
  pgnn: number | null;

  @Column({ name: 'PGNI', type: 'number', nullable: true })
  pgni: number | null;

  @Column({ name: 'VPART', type: 'number', nullable: true })
  vpart: number | null;

  @Column({ name: 'BRINDEVAREJO', type: 'varchar2', nullable: true })
  retailGift: string | null;

  @Column({ name: 'UTILIZOUMOTORCALCULO', type: 'varchar2', nullable: true })
  usedCalcEngine: string | null;

  @Column({ name: 'ANP', type: 'number', nullable: true })
  anp: number | null;

  @Column({ name: 'DESCANP', type: 'varchar2', nullable: true })
  anpDiscount: string | null;

  @Column({ name: 'NUMSEQITEMBRINDE', type: 'number', nullable: true })
  giftItemSequence: number | null;

  @Column({ name: 'BAIXAQTFRENTELOJA', type: 'varchar2', nullable: true })
  storeFrontQtyWriteOff: string | null;

  @Column({ name: 'CODMAQUINA', type: 'number', nullable: true })
  posMachineId: number | null;

  @Column({ name: 'QTORIGTV8', type: 'number', nullable: true })
  origTv8Quantity: number | null;

  @Column({ name: 'CUPOMDESCONTO', type: 'varchar2', nullable: true })
  discountCoupon: string | null;

  @Column({ name: 'CODCUPOMDESCONTO', type: 'varchar2', nullable: true })
  discountCouponId: string | null;

  @Column({ name: 'DTCONSOLIDACAOAUXPRO', type: 'date', nullable: true })
  auxProConsolidationDate: Date | null;

  @Column({ name: 'IDREMESSAWEB', type: 'number', nullable: true })
  webShipmentId: number | null;

  @Column({ name: 'CODFORMULACMV', type: 'varchar2', nullable: true })
  cmvFormulaId: string | null;

  @Column({ name: 'FATORGRAMATURALICIT', type: 'number', nullable: true })
  licitGrammageFactor: number | null;

  @Column({ name: 'NUMPEDCLI', type: 'varchar2', nullable: true })
  customerOrderNumber: string | null;

  @Column({ name: 'NUMLOTEPROMOCAOMED', type: 'varchar2', nullable: true })
  medPromoBatchNumber: string | null;

  @Column({ name: 'NUMVERBACAMPANHA', type: 'number', nullable: true })
  campaignFundNumber: number | null;

  @Column({ name: 'PERCCUSTFORNEC', type: 'number', nullable: true })
  supplierCostPercent: number | null;

  @Column({ name: 'VLCUSTFORNEC', type: 'number', nullable: true })
  supplierCostValue: number | null;

  @Column({ name: 'CODPRECOCESTA', type: 'number', nullable: true })
  basketPriceId: number | null;

  @Column({ name: 'POSICAOCFAT', type: 'varchar2', nullable: true })
  cfatPosition: string | null;

  @Column({ name: 'REGIMEESPISENSTFONTE', type: 'varchar2', nullable: true })
  stSourceExempSpecRegime: string | null;

  @Column({ name: 'OBSERVACAOSTFONTE', type: 'varchar2', nullable: true })
  stSourceObservation: string | null;

  @Column({ name: 'CODCONFIGFUNCEPMED', type: 'number', nullable: true })
  medPfeFuncConfigId: number | null;

  @Column({ name: 'CODDEPOSITO', type: 'number', nullable: true })
  warehouseId: number | null;

  @Column({ name: 'CODIGOINTEGRACAOWMS', type: 'varchar2', nullable: true })
  wmsIntegrationId: string | null;

  @Column({ name: 'NUMVIASMAPASEPRI', type: 'number', nullable: true })
  copiesMapasepriNumber: number | null;

  @Column({ name: 'NUMEMPENHO', type: 'varchar2', nullable: true })
  commitmentNumber: string | null;

  @Column({ name: 'CODEDITAL', type: 'number', nullable: true })
  biddingId: number | null;

  @Column({ name: 'LOTECONTRATO', type: 'varchar2', nullable: true })
  contractBatch: string | null;

  @Column({ name: 'PRECOSEMIMPOSTO', type: 'number', nullable: true })
  priceWithoutTax: number | null;

  @Column({ name: 'BCSTRETANTERIOR', type: 'number', nullable: true })
  previousStRetBase: number | null;

  @Column({ name: 'VLICMSSUBSTITUTOANTERIOR', type: 'number', nullable: true })
  previousSubstituteIcmsValue: number | null;

  @Column({ name: 'VLICMSSTRETANTERIOR', type: 'number', nullable: true })
  previousStRetIcmsValue: number | null;

  @Column({ name: 'VLDESCCMVPROMOCAOMED', type: 'number', nullable: true })
  medPromoCmvDiscountValue: number | null;

  @Column({ name: 'NUMSEQORIG', type: 'number', nullable: true })
  origSequenceNumber: number | null;

  @Column({ name: 'USACASHBACK', type: 'varchar2', nullable: true })
  useCashback: string | null;

  @Column({ name: 'QBCMONORET', type: 'number', nullable: true })
  monoretQbc: number | null;

  @Column({ name: 'ADREMICMSRET', type: 'number', nullable: true })
  retAdremIcms: number | null;

  @Column({ name: 'VICMSMONORET', type: 'number', nullable: true })
  monoretVIcms: number | null;

  @Column({ name: 'VLIPISUPENSO', type: 'number', nullable: true })
  suspendedIpiValue: number | null;

  @Column({ name: 'VLIISUSPENSO', type: 'number', nullable: true })
  suspendedIiValue: number | null;

  @Column({ name: 'CODBENEFICIOFISCALCOMPLE', type: 'varchar2', nullable: true })
  complementaryFiscalBenefitId: string | null;

  @Column({ name: 'INDDEDUZDESONERACAO', type: 'number', nullable: true })
  deductDesonerationInd: number | null;

  @Column({ name: 'QTCOMBOVIRTUAL', type: 'number', nullable: true })
  virtualComboQuantity: number | null;

  @Column({ name: 'CUPOMVINCLANCAMENTO', type: 'number', nullable: true })
  coupomVincEntry: number | null;

  @Column({ name: 'CUSTOULTENTFISCAL', type: 'number', nullable: true })
  lastFiscalEntryCost: number | null;

  @Column({ name: 'PERDESCMAXCAMPANHA', type: 'number', nullable: true })
  maxCampaignDiscountPercent: number | null;

  @Column({ name: 'PERDESCCAMPANHA', type: 'number', nullable: true })
  campaignDiscountPercent: number | null;

  @Column({ name: 'PBASECAMPANHA', type: 'number', nullable: true })
  campaignBasePrice: number | null;

  @Column({ name: 'PRECOFIXOCAMPANHA', type: 'number', nullable: true })
  campaignFixedPrice: number | null;

  @Column({ name: 'ALIQCBS', type: 'number', nullable: true })
  cbsRate: number | null;

  @Column({ name: 'ALIQIBS', type: 'number', nullable: true })
  ibsRate: number | null;

  @Column({ name: 'ALIQIS', type: 'number', nullable: true })
  isRate: number | null;

  @Column({ name: 'BASECBS', type: 'number', nullable: true })
  cbsBase: number | null;

  @Column({ name: 'BASEIBS', type: 'number', nullable: true })
  ibsBase: number | null;

  @Column({ name: 'BASEIS', type: 'number', nullable: true })
  isBase: number | null;

  @Column({ name: 'VLCBS', type: 'number', nullable: true })
  cbsValue: number | null;

  @Column({ name: 'VLIBS', type: 'number', nullable: true })
  ibsValue: number | null;

  @Column({ name: 'VLIS', type: 'number', nullable: true })
  isValue: number | null;

  @Column({ name: 'CODCBS', type: 'number', nullable: true })
  cbsId: number | null;

  @Column({ name: 'CODIBS', type: 'number', nullable: true })
  ibsId: number | null;

  @Column({ name: 'CODIS', type: 'number', nullable: true })
  isId: number | null;

  @Column({ name: 'VLCBSPTABELA', type: 'number', nullable: true })
  tablePriceCbsValue: number | null;

  @Column({ name: 'VLIBSPTABELA', type: 'number', nullable: true })
  tablePriceIbsValue: number | null;

  @Column({ name: 'VLISPTABELA', type: 'number', nullable: true })
  tablePriceIsValue: number | null;

  @Column({ name: 'VLCBSPBASERCA', type: 'number', nullable: true })
  rcaBaseCbsValue: number | null;

  @Column({ name: 'VLIBSPBASERCA', type: 'number', nullable: true })
  rcaBaseIbsValue: number | null;

  @Column({ name: 'VLISPBASERCA', type: 'number', nullable: true })
  rcaBaseIsValue: number | null;

  @Column({ name: 'PRECOUTILIZADONFE', type: 'varchar2', nullable: true })
  nfeUsedPrice: string | null;

  @Column({ name: 'CODIGOTRIBUTACAOCBSIBS', type: 'number', nullable: true })
  cbsIbsTaxationId: number | null;

  @Column({ name: 'CSTIBSCBS', type: 'varchar2', nullable: true })
  ibsCbsCst: string | null;

  @Column({ name: 'CCLASSTRIBIBSCBS', type: 'varchar2', nullable: true })
  ibsCbsTaxClass: string | null;

  @Column({ name: 'VLBASEIBSCBS', type: 'number', nullable: true })
  ibsCbsBaseValue: number | null;

  @Column({ name: 'IBSUF', type: 'number', nullable: true })
  ibsUf: number | null;

  @Column({ name: 'PDIFIBSUF', type: 'number', nullable: true })
  ibsUfDiffPercent: number | null;

  @Column({ name: 'VDIFIBSUF', type: 'number', nullable: true })
  ibsUfDiffValue: number | null;

  @Column({ name: 'PREDALIQIBSUF', type: 'number', nullable: true })
  ibsUfRateRedPercent: number | null;

  @Column({ name: 'PALIQEFETIBSUF', type: 'number', nullable: true })
  ibsUfEffectiveRatePercent: number | null;

  @Column({ name: 'VIBSUF', type: 'number', nullable: true })
  ibsUfValue: number | null;

  @Column({ name: 'PIBSMUN', type: 'number', nullable: true })
  ibsMunPercent: number | null;

  @Column({ name: 'PDIFIBSMUN', type: 'number', nullable: true })
  ibsMunDiffPercent: number | null;

  @Column({ name: 'VDIFIBSMUN', type: 'number', nullable: true })
  ibsMunDiffValue: number | null;

  @Column({ name: 'PREDALIQIBSMUN', type: 'number', nullable: true })
  ibsMunRateRedPercent: number | null;

  @Column({ name: 'PALIQEFETIBSMUN', type: 'number', nullable: true })
  ibsMunEffectiveRatePercent: number | null;

  @Column({ name: 'VIBSMUN', type: 'number', nullable: true })
  ibsMunValue: number | null;

  @Column({ name: 'PDIFCBS', type: 'number', nullable: true })
  cbsDiffPercent: number | null;

  @Column({ name: 'VDIFCBS', type: 'number', nullable: true })
  cbsDiffValue: number | null;

  @Column({ name: 'PREDALIQCBS', type: 'number', nullable: true })
  cbsRateRedPercent: number | null;

  @Column({ name: 'PALIQEFETCBS', type: 'number', nullable: true })
  cbsEffectiveRatePercent: number | null;

  @Column({ name: 'CSTTRIBREG', type: 'varchar2', nullable: true })
  regTaxCst: string | null;

  @Column({ name: 'CCLASSTRIBREG', type: 'varchar2', nullable: true })
  regTaxClass: string | null;

  @Column({ name: 'PALIQEFETREGIBSUF', type: 'number', nullable: true })
  ibsUfRegEffectiveRatePercent: number | null;

  @Column({ name: 'VTRIBREGIBSUF', type: 'number', nullable: true })
  ibsUfRegTaxValue: number | null;

  @Column({ name: 'ALIQEFETREGIBSMUN', type: 'number', nullable: true })
  ibsMunRegEffectiveRate: number | null;

  @Column({ name: 'VTRIBREGIBSMUN', type: 'number', nullable: true })
  ibsMunRegTaxValue: number | null;

  @Column({ name: 'PALIQEFETREGCBS', type: 'number', nullable: true })
  cbsRegEffectiveRatePercent: number | null;

  @Column({ name: 'VTRIBREGCBS', type: 'number', nullable: true })
  cbsRegTaxValue: number | null;

  @Column({ name: 'PIBSUFCOMPRAGOV', type: 'number', nullable: true })
  ibsUfGovPurchasePercent: number | null;

  @Column({ name: 'VIBSUFCOMPRAGOV', type: 'number', nullable: true })
  ibsUfGovPurchaseValue: number | null;

  @Column({ name: 'PIBSMUNCOMPRAGOV', type: 'number', nullable: true })
  ibsMunGovPurchasePercent: number | null;

  @Column({ name: 'VIBSMUNCOMPRAGOV', type: 'number', nullable: true })
  ibsMunGovPurchaseValue: number | null;

  @Column({ name: 'PCBGCOMPRAGOV', type: 'number', nullable: true })
  cbsGovPurchasePercent: number | null;

  @Column({ name: 'VCBSCOMPRAGOV', type: 'number', nullable: true })
  cbsGovPurchaseValue: number | null;

  @Column({ name: 'CODIGOTRIBUTACAOIS', type: 'number', nullable: true })
  isTaxationId: number | null;

  @Column({ name: 'CSTIS', type: 'varchar2', nullable: true })
  isCst: string | null;

  @Column({ name: 'CCLASSTRIBIS', type: 'varchar2', nullable: true })
  isTaxClass: string | null;

  @Column({ name: 'VLBASEIS', type: 'number', nullable: true })
  isBaseValue: number | null;

  @Column({ name: 'ALIQESPECIFICAIS', type: 'number', nullable: true })
  specificIsRate: number | null;

  @Column({ name: 'PERMITIRCUMULATIVIDADEVERBACMV', type: 'varchar2', nullable: true })
  allowCmvFundCumulativity: string | null;

}