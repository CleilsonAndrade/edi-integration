import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDI',
})
export class PcpediEntity {
  @PrimaryColumn({ name: 'NUMPED', type: 'number' })
  orderId: number;

  @PrimaryColumn({ name: 'NUMSEQ', type: 'number' })
  sequence: number;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date;

  @Column({ name: 'CODCLI', type: 'number', nullable: true })
  customerId: number;

  @Column({ name: 'CODPROD', type: 'number', nullable: true })
  productId: number;

  @Column({ name: 'CODUSUR', type: 'number', nullable: true })
  representativeId: number;

  @Column({ name: 'QT', type: 'number', nullable: true })
  quantity: number;

  @Column({ name: 'PVENDA', type: 'number', nullable: true })
  salePrice: number;

  @Column({ name: 'PTABELA', type: 'number', nullable: true })
  listPrice: number;

  @Column({ name: 'NUMCAR', type: 'number', nullable: true })
  loadNumber: number;

  @Column({ name: 'POSICAO', type: 'number', nullable: true })
  position: number;

  @Column({ name: 'ST', type: 'number', nullable: true })
  st: number;

  @Column({ name: 'VLCUSTOFIN', type: 'number', nullable: true })
  finalCostValue: number;

  @Column({ name: 'VLCUSTOREAL', type: 'number', nullable: true })
  realCostValue: number;

  @Column({ name: 'PERCOM', type: 'number', nullable: true })
  commissionPercent: number;

  @Column({ name: 'PERDESC', type: 'number', nullable: true })
  discountPercent: number;

  @Column({ name: 'QTFALTA', type: 'number', nullable: true })
  missingQuantity: number;

  @Column({ name: 'TIPOPESO', type: 'varchar2', nullable: true })
  weightType: string;

  @Column({ name: 'PERCOMTAB', type: 'number', nullable: true })
  tableCommissionPercent: number;

  @Column({ name: 'PERDESCTAB', type: 'varchar2', nullable: true })
  tableDiscountPercentStr: string;

  @Column({ name: 'CODMOTNAOCOMPRA', type: 'number', nullable: true })
  noPurchaseReasonId: number;

  @Column({ name: 'VLDESCCUSTOCMV', type: 'number', nullable: true })
  cmvCostDiscountValue: number;

  @Column({ name: 'QTSEPARADA', type: 'number', nullable: true })
  separatedQuantity: number;

  @Column({ name: 'QTVENDAEMB', type: 'number', nullable: true })
  packagingSaleQuantity: number;

  @Column({ name: 'PVENDAEMB', type: 'number', nullable: true })
  packagingSalePrice: number;

  @Column({ name: 'VLOUTROS', type: 'number', nullable: true })
  otherValue: number;

  @Column({ name: 'QTEMBALAGEM', type: 'number', nullable: true })
  packagingQuantity: number;

  @Column({ name: 'PVENDAEMBALAGEM', type: 'varchar2', nullable: true })
  packagingSalePriceStr: string;

  @Column({ name: 'CODAUXILIAR', type: 'number', nullable: true })
  auxiliaryId: number;

  @Column({ name: 'VLCUSTOREP', type: 'number', nullable: true })
  replacementCostValue: number;

  @Column({ name: 'VLCUSTOCONT', type: 'number', nullable: true })
  accountingCostValue: number;

  @Column({ name: 'CODCERTIFIC', type: 'number', nullable: true })
  certificateId: number;

  @Column({ name: 'PVENDABASE', type: 'number', nullable: true })
  baseSalePrice: number;

  @Column({ name: 'NOMECONCORRENTE', type: 'varchar2', nullable: true })
  competitorName: string;

  @Column({ name: 'PRECO', type: 'number', nullable: true })
  price: number;

  @Column({ name: 'PRAZO', type: 'number', nullable: true })
  term: number;

  @Column({ name: 'QTNAOCOMPRA', type: 'number', nullable: true })
  missedPurchaseQuantity: number;

  @Column({ name: 'CODFILIALRETIRA', type: 'number', nullable: true })
  withdrawBranchId: number;

  @Column({ name: 'NUMTIRA', type: 'number', nullable: true })
  slipNumber: number;

  @Column({ name: 'CODFUNCSEP', type: 'number', nullable: true })
  pickerEmployeeId: number;

  @Column({ name: 'VLDESCSUFRAMA', type: 'number', nullable: true })
  suframaDiscountValue: number;

  @Column({ name: 'NUMLOTE', type: 'number', nullable: true })
  batchNumber: number;

  @Column({ name: 'VLDESCREPASSE', type: 'number', nullable: true })
  repassDiscountValue: number;

  @Column({ name: 'REFCOR', type: 'varchar2', nullable: true })
  refColor: string;

  @Column({ name: 'CODFUNCCONF', type: 'number', nullable: true })
  checkerEmployeeId: number;

  @Column({ name: 'DATACONF', type: 'date', nullable: true })
  checkedDate: Date;

  @Column({ name: 'VLDESCICMISENCAO', type: 'number', nullable: true })
  icmsExemptionDiscountValue: number;

  @Column({ name: 'QTORIGINAL', type: 'number', nullable: true })
  originalQuantity: number;

  @Column({ name: 'VLDESCFORNEC', type: 'number', nullable: true })
  supplierDiscountValue: number;

  @Column({ name: 'VLFRETE', type: 'number', nullable: true })
  freightValue: number;

  @Column({ name: 'VLIPI', type: 'number', nullable: true })
  ipiValue: number;

  @Column({ name: 'QTORIG', type: 'number', nullable: true })
  origQuantity: number;

  @Column({ name: 'QTSEPARARUN', type: 'number', nullable: true })
  separatedUnitQuantity: number;

  @Column({ name: 'QTSEPARARCX', type: 'number', nullable: true })
  separatedBoxQuantity: number;

  @Column({ name: 'CODST', type: 'number', nullable: true })
  stId: number;

  @Column({ name: 'VLDESCFIN', type: 'number', nullable: true })
  financialDiscountValue: number;

  @Column({ name: 'PERCIPI', type: 'number', nullable: true })
  ipiPercent: number;

  @Column({ name: 'IVA', type: 'number', nullable: true })
  iva: number;

  @Column({ name: 'ALIQICMS1', type: 'number', nullable: true })
  icmsRate1: number;

  @Column({ name: 'ALIQICMS2', type: 'number', nullable: true })
  icmsRate2: number;

  @Column({ name: 'PAUTA', type: 'number', nullable: true })
  tariff: number;

  @Column({ name: 'PERCBASERED', type: 'number', nullable: true })
  baseReductionPercent: number;

  @Column({ name: 'VLDESCCOM', type: 'number', nullable: true })
  commissionDiscountValue: number;

  @Column({ name: 'PERDESCCOM', type: 'varchar2', nullable: true })
  commissionDiscountPercent: string;

  @Column({ name: 'PERDESCFIN', type: 'varchar2', nullable: true })
  financialDiscountPercent: string;

  @Column({ name: 'VLBONIFIC', type: 'number', nullable: true })
  bonusValue: number;

  @Column({ name: 'PERBONIFIC', type: 'varchar2', nullable: true })
  bonusPercent: string;

  @Column({ name: 'PORIGINAL', type: 'number', nullable: true })
  originalPrice: number;

  @Column({ name: 'VLREBAIXACMV', type: 'number', nullable: true })
  cmvRebateValue: number;

  @Column({ name: 'NUMAPLIC', type: 'number', nullable: true })
  applicationNumber: number;

  @Column({ name: 'PERFRETECMV', type: 'varchar2', nullable: true })
  cmvFreightPercent: string;

  @Column({ name: 'VLDESCRODAPE', type: 'number', nullable: true })
  footerDiscountValue: number;

  @Column({ name: 'STCLIENTEGNRE', type: 'varchar2', nullable: true })
  clientStGnre: string;

  @Column({ name: 'IMPRIME', type: 'varchar2', nullable: true })
  print: string;

  @Column({ name: 'COMPLEMENTO', type: 'varchar2', nullable: true })
  complement: string;

  @Column({ name: 'CUSTOFINEST', type: 'varchar2', nullable: true })
  finalStockCost: string;

  @Column({ name: 'PERCBASEREDSTFONTE', type: 'number', nullable: true })
  sourceStBaseReductionPercent: number;

  @Column({ name: 'PERCBASEREDST', type: 'number', nullable: true })
  stBaseReductionPercent: number;

  @Column({ name: 'PERDESCCUSTO', type: 'varchar2', nullable: true })
  costDiscountPercent: string;

  @Column({ name: 'CODICMTAB', type: 'number', nullable: true })
  icmsTableId: number;

  @Column({ name: 'TXVENDA', type: 'varchar2', nullable: true })
  saleTax: string;

  @Column({ name: 'PERCOM2', type: 'number', nullable: true })
  commission2Percent: number;

  @Column({ name: 'PERCOM3', type: 'number', nullable: true })
  commission3Percent: number;

  @Column({ name: 'PERCISS', type: 'number', nullable: true })
  issPercent: number;

  @Column({ name: 'VLISS', type: 'number', nullable: true })
  issValue: number;

  @Column({ name: 'NUMTRANSWMS', type: 'number', nullable: true })
  wmsTransactionNumber: number;

  @Column({ name: 'CODPROMOCAO', type: 'number', nullable: true })
  promotionId: number;

  @Column({ name: 'PRAZOMEDIO', type: 'number', nullable: true })
  averageTerm: number;

  @Column({ name: 'LOCALIZACAO', type: 'varchar2', nullable: true })
  location: string;

  @Column({ name: 'VLREPASSE', type: 'number', nullable: true })
  repassValue: number;

  @Column({ name: 'PBONIFIC', type: 'number', nullable: true })
  bonusPrice: number;

  @Column({ name: 'PERCVENDA', type: 'number', nullable: true })
  salePercent: number;

  @Column({ name: 'VLDESCPISSUFRAMA', type: 'number', nullable: true })
  pisSuframaDiscountValue: number;

  @Column({ name: 'CODDEGUSTACAO', type: 'number', nullable: true })
  tastingId: number;

  @Column({ name: 'QTLOCALIZADA', type: 'number', nullable: true })
  locatedQuantity: number;

  @Column({ name: 'PERDESCFLEX', type: 'varchar2', nullable: true })
  flexDiscountPercent: string;

  @Column({ name: 'VLDESCFLEX', type: 'number', nullable: true })
  flexDiscountValue: number;

  @Column({ name: 'PERREDCOMISS', type: 'varchar2', nullable: true })
  commissionReductionPercent: string;

  @Column({ name: 'VLREDCOMISS', type: 'number', nullable: true })
  commissionReductionValue: number;

  @Column({ name: 'TIPODESCAPLICADO', type: 'varchar2', nullable: true })
  appliedDiscountType: string;

  @Column({ name: 'PBASERCA', type: 'number', nullable: true })
  rcaBasePrice: number;

  @Column({ name: 'PESOBRUTO', type: 'number', nullable: true })
  weightGross: number;

  @Column({ name: 'NUMVERBAREBCMV', type: 'number', nullable: true })
  rebCmvFundNumber: number;

  @Column({ name: 'CONDVENDA', type: 'varchar2', nullable: true })
  saleCondition: string;

  @Column({ name: 'CODPLPAG', type: 'number', nullable: true })
  paymentPlanId: number;

  @Column({ name: 'EANCODPROD', type: 'varchar2', nullable: true })
  productEan: string;

  @Column({ name: 'BRINDE', type: 'varchar2', nullable: true })
  gift: string;

  @Column({ name: 'PERCOMSUP', type: 'number', nullable: true })
  supervisorCommissionPercent: number;

  @Column({ name: 'NUMCONFERENCIA', type: 'number', nullable: true })
  conferenceNumber: number;

  @Column({ name: 'VLACRESCRODAPE', type: 'number', nullable: true })
  footerAdditionValue: number;

  @Column({ name: 'CODECF', type: 'number', nullable: true })
  ecfId: number;

  @Column({ name: 'LETRACOMISS', type: 'varchar2', nullable: true })
  commissionLetter: string;

  @Column({ name: 'QTCX', type: 'number', nullable: true })
  boxQuantity: number;

  @Column({ name: 'QTPECAS', type: 'number', nullable: true })
  piecesQuantity: number;

  @Column({ name: 'NUMOP', type: 'number', nullable: true })
  opNumber: number;

  @Column({ name: 'PERREDCOMISSSUP', type: 'varchar2', nullable: true })
  supervisorCommissionReductionPercent: string;

  @Column({ name: 'VLREDCOMISSSUP', type: 'number', nullable: true })
  supCommissionReductionValue: number;

  @Column({ name: 'BASEICST', type: 'number', nullable: true })
  stBase: number;

  @Column({ name: 'PVENDA1', type: 'number', nullable: true })
  salePrice1: number;

  @Column({ name: 'PERCAGREGADORST', type: 'number', nullable: true })
  stAggregatorPercent: number;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', nullable: true })
  customerCmvFundValue: number;

  @Column({ name: 'PERDESCISENTOICMS', type: 'varchar2', nullable: true })
  icmsExemptDiscountPercent: string;

  @Column({ name: 'PERCOMPROF', type: 'number', nullable: true })
  professionalCommissionPercent: number;

  @Column({ name: 'NUMCARAUX', type: 'number', nullable: true })
  auxLoadNumber: number;

  @Column({ name: 'VLOUTRASDESP', type: 'number', nullable: true })
  otherExpensesValue: number;

  @Column({ name: 'QTAPANHA', type: 'number', nullable: true })
  pickQuantity: number;

  @Column({ name: 'EXPORTADOSERVINT', type: 'varchar2', nullable: true })
  exportedIntService: string;

  @Column({ name: 'DTEXPORTACAOSERVINT', type: 'date', nullable: true })
  intServiceExportDate: Date;

  @Column({ name: 'DTIMPORTACAOSERVPRINC', type: 'date', nullable: true })
  mainServiceImportDate: Date;

  @Column({ name: 'IMPORTADOSERVPRINC', type: 'varchar2', nullable: true })
  importedMainService: string;

  @Column({ name: 'CODVASILHAME', type: 'number', nullable: true })
  bottleId: number;

  @Column({ name: 'TRUNCARITEM', type: 'varchar2', nullable: true })
  truncateItem: string;

  @Column({ name: 'QTUNITCX', type: 'number', nullable: true })
  boxUnitQuantity: number;

  @Column({ name: 'PERDESCPOLITICA', type: 'varchar2', nullable: true })
  policyDiscountPercent: string;

  @Column({ name: 'PVENDAANTERIOR', type: 'varchar2', nullable: true })
  previousSalePrice: string;

  @Column({ name: 'TIPOENTREGA', type: 'varchar2', nullable: true })
  deliveryType: string;

  @Column({ name: 'NUMOS', type: 'number', nullable: true })
  soNumber: number;

  @Column({ name: 'DTINICIALSEP', type: 'date', nullable: true })
  separationStartDate: Date;

  @Column({ name: 'DTFINALSEP', type: 'date', nullable: true })
  separationEndDate: Date;

  @Column({ name: 'DATACONFFIM', type: 'date', nullable: true })
  checkEndDate: Date;

  @Column({ name: 'SITUACAOOS', type: 'varchar2', nullable: true })
  soSituation: string;

  @Column({ name: 'NUMVIASOS', type: 'number', nullable: true })
  soCopiesNumber: number;

  @Column({ name: 'QTPENDOS', type: 'number', nullable: true })
  soPendingQuantity: number;

  @Column({ name: 'DTINICIALPEND', type: 'date', nullable: true })
  pendingStartDate: Date;

  @Column({ name: 'DTFINALPEND', type: 'date', nullable: true })
  pendingEndDate: Date;

  @Column({ name: 'CODFUNCPEND', type: 'number', nullable: true })
  pendingEmployeeId: number;

  @Column({ name: 'DTLIBOS', type: 'date', nullable: true })
  soReleaseDate: Date;

  @Column({ name: 'CODFUNCLIBOS', type: 'number', nullable: true })
  soReleaseEmployeeId: number;

  @Column({ name: 'LOCALIZACAOOS', type: 'varchar2', nullable: true })
  soLocation: string;

  @Column({ name: 'VLDIFALIQUOTAS', type: 'number', nullable: true })
  diffRateValue: number;

  @Column({ name: 'BASEDIFALIQUOTAS', type: 'number', nullable: true })
  diffRateBase: number;

  @Column({ name: 'PERCDIFALIQUOTAS', type: 'number', nullable: true })
  diffRatePercent: number;

  @Column({ name: 'GERAGNRE_CNPJCLIENTE', type: 'varchar2', nullable: true })
  generateGnreClientCnpj: string;

  @Column({ name: 'PRODDESCRICAOCONTRATO', type: 'varchar2', nullable: true })
  contractProductDescription: string;

  @Column({ name: 'CODFUNCALTERACAOOS', type: 'number', nullable: true })
  soChangeEmployeeId: number;

  @Column({ name: 'DTALTERACAOOS', type: 'date', nullable: true })
  soChangeDate: Date;

  @Column({ name: 'POLITICAPRIORITARIA', type: 'varchar2', nullable: true })
  priorityPolicy: string;

  @Column({ name: 'QTIMEDIATA', type: 'number', nullable: true })
  immediateQuantity: number;

  @Column({ name: 'CODFUNCLANC', type: 'number', nullable: true })
  entryEmployeeId: number;

  @Column({ name: 'ROTINALANC', type: 'varchar2', nullable: true })
  entryRoutine: string;

  @Column({ name: 'DTLANC', type: 'date', nullable: true })
  entryDate: Date;

  @Column({ name: 'CODFUNCULTALTER', type: 'number', nullable: true })
  lastChangeEmployeeId: number;

  @Column({ name: 'ROTINAULTLALTER', type: 'varchar2', nullable: true })
  lastChangeRoutine: string;

  @Column({ name: 'DTULTLALTER', type: 'date', nullable: true })
  lastChangeDate: Date;

  @Column({ name: 'NUMOSORIGEM', type: 'number', nullable: true })
  originSoNumber: number;

  @Column({ name: 'QTUNITEMB', type: 'number', nullable: true })
  packagingUnitQuantity: number;

  @Column({ name: 'VLFRETE_RATEIO', type: 'number', nullable: true })
  freightApportionmentValue: number;

  @Column({ name: 'VLOUTRAS_RATEIO', type: 'number', nullable: true })
  otherApportionmentValue: number;

  @Column({ name: 'BASEICST_ANT_RATEIO', type: 'number', nullable: true })
  previousStBaseApportionment: number;

  @Column({ name: 'ST_ANT_RATEIO', type: 'varchar2', nullable: true })
  previousStApportionment: string;

  @Column({ name: 'ST_DIF_RATEIO', type: 'varchar2', nullable: true })
  diffStApportionment: string;

  @Column({ name: 'ABASTECIDO', type: 'varchar2', nullable: true })
  fueled: string;

  @Column({ name: 'TVBONIF', type: 'varchar2', nullable: true })
  bonusTv: string;

  @Column({ name: 'CODIGOBRINDE', type: 'number', nullable: true })
  giftId: number;

  @Column({ name: 'CODFUNCAJUSTEOS', type: 'number', nullable: true })
  soAdjustmentEmployeeId: number;

  @Column({ name: 'DTAJUSTEOS', type: 'date', nullable: true })
  soAdjustmentDate: Date;

  @Column({ name: 'TIPOCALCULOST', type: 'varchar2', nullable: true })
  stCalculationType: string;

  @Column({ name: 'NUMETIQUETA', type: 'number', nullable: true })
  labelNumber: number;

  @Column({ name: 'VLVERBACMV', type: 'number', nullable: true })
  cmvFundValue: number;

  @Column({ name: 'NUMVOLUMESCONFERENCIA', type: 'number', nullable: true })
  conferenceVolumesNumber: number;

  @Column({ name: 'ROTINA', type: 'varchar2', nullable: true })
  routine: string;

  @Column({ name: 'PERCDESCPIS', type: 'number', nullable: true })
  pisDiscountPercent: number;

  @Column({ name: 'PERCDESCCOFINS', type: 'number', nullable: true })
  cofinsDiscountPercent: number;

  @Column({ name: 'VLDESCREDUCAOPIS', type: 'number', nullable: true })
  pisReductionDiscountValue: number;

  @Column({ name: 'VLDESCREDUCAOCOFINS', type: 'number', nullable: true })
  cofinsReductionDiscountValue: number;

  @Column({ name: 'PERCOM4', type: 'number', nullable: true })
  commission4Percent: number;

  @Column({ name: 'TIPOSEPARACAO', type: 'varchar2', nullable: true })
  separationType: string;

  @Column({ name: 'CODFUNCCONF2', type: 'number', nullable: true })
  checker2EmployeeId: number;

  @Column({ name: 'PRECOFVBRUTO', type: 'varchar2', nullable: true })
  fvGrossPrice: string;

  @Column({ name: 'CODFUNCALTLOTE', type: 'number', nullable: true })
  batchChangeEmployeeId: number;

  @Column({ name: 'DTGERACAOOS', type: 'date', nullable: true })
  soGenerationDate: Date;

  @Column({ name: 'CODDESCONTO', type: 'number', nullable: true })
  discountId: number;

  @Column({ name: 'ALTERNATIVO', type: 'varchar2', nullable: true })
  alternative: string;

  @Column({ name: 'SIGLAQUALIDADE', type: 'varchar2', nullable: true })
  qualityAcronym: string;

  @Column({ name: 'VOLUMEDESEJADO', type: 'varchar2', nullable: true })
  desiredVolume: string;

  @Column({ name: 'CODBASE', type: 'number', nullable: true })
  baseId: number;

  @Column({ name: 'CODFORMULA', type: 'number', nullable: true })
  formulaId: number;

  @Column({ name: 'USADEBCREDRCABRIND', type: 'varchar2', nullable: true })
  useRcaGiftDebitCredit: string;

  @Column({ name: 'CODCOMBO', type: 'number', nullable: true })
  comboId: number;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  deliveryDate: Date;

  @Column({ name: 'MOVIMENTACONTACORRENTERCA', type: 'varchar2', nullable: true })
  movesRcaCheckingAccount: string;

  @Column({ name: 'IDPATRIMONIO', type: 'varchar2', nullable: true })
  assetId: string;

  @Column({ name: 'VLREDPVENDASIMPLESNA', type: 'number', nullable: true })
  simpleNationalSalePriceReductionValue: number;

  @Column({ name: 'VLREDCMVSIMPLESNAC', type: 'number', nullable: true })
  simpleNationalCmvReductionValue: number;

  @Column({ name: 'PERDESCFOB', type: 'varchar2', nullable: true })
  fobDiscountPercent: string;

  @Column({ name: 'PRODDESCRICAODANFE', type: 'varchar2', nullable: true })
  danfeProductDescription: string;

  @Column({ name: 'CODCONTRATO', type: 'number', nullable: true })
  contractId: number;

  @Column({ name: 'PERCICM', type: 'number', nullable: true })
  icmPercent: number;

  @Column({ name: 'PRECOMAXCONSUM', type: 'varchar2', nullable: true })
  maxConsumerPrice: string;

  @Column({ name: 'DESCPRECOFAB', type: 'varchar2', nullable: true })
  factoryPriceDiscount: string;

  @Column({ name: 'ROTINALANCULTALT', type: 'varchar2', nullable: true })
  lastChangeEntryRoutine: string;

  @Column({ name: 'NUMCAIXA', type: 'number', nullable: true })
  caixaNumber: number;

  @Column({ name: 'QTLITRAGEM', type: 'number', nullable: true })
  litersQuantity: number;

  @Column({ name: 'BONIFIC', type: 'varchar2', nullable: true })
  bonus: string;

  @Column({ name: 'IDVENDA', type: 'varchar2', nullable: true })
  saleId: string;

  @Column({ name: 'PERCDESCINDUSTRIA', type: 'number', nullable: true })
  industryDiscountPercent: number;

  @Column({ name: 'PERDESCBOLETO', type: 'varchar2', nullable: true })
  boletoDiscountPercent: string;

  @Column({ name: 'CODLINHAPRAZO', type: 'number', nullable: true })
  termLineId: number;

  @Column({ name: 'STPBASERCA', type: 'number', nullable: true })
  stPbaserca: number;

  @Column({ name: 'STPTABELA', type: 'varchar2', nullable: true })
  tableSt: string;

  @Column({ name: 'RP_IMEDIATA', type: 'varchar2', nullable: true })
  immediateRp: string;

  @Column({ name: 'GRUPOFATURAMENTO', type: 'varchar2', nullable: true })
  billingGroup: string;

  @Column({ name: 'PARTICIPAGIRO', type: 'varchar2', nullable: true })
  turnoverParticipation: string;

  @Column({ name: 'VLIPIOUTRAS', type: 'number', nullable: true })
  otherIpiValue: number;

  @Column({ name: 'PERCIPIOUTRAS', type: 'number', nullable: true })
  otherIpiPercent: number;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', nullable: true })
  abatementDiscountValue: number;

  @Column({ name: 'PERCDESCABATIMENTO', type: 'number', nullable: true })
  abatementDiscountPercent: number;

  @Column({ name: 'QTRESERVANT', type: 'number', nullable: true })
  previousReservedQuantity: number;

  @Column({ name: 'VLDESCBOLETO', type: 'number', nullable: true })
  boletoDiscountValue: number;

  @Column({ name: 'NUMSEQITEMCONTRATO', type: 'number', nullable: true })
  contractItemSequence: number;

  @Column({ name: 'NUMLISTA', type: 'number', nullable: true })
  listNumber: number;

  @Column({ name: 'SUGESTAO', type: 'varchar2', nullable: true })
  suggestion: string;

  @Column({ name: 'CODEMITENTEITEMPEDIDO', type: 'number', nullable: true })
  orderItemIssuerId: number;

  @Column({ name: 'QTUN', type: 'number', nullable: true })
  unitQuantity: number;

  @Column({ name: 'ROTINALANCBRINDE', type: 'varchar2', nullable: true })
  giftEntryRoutine: string;

  @Column({ name: 'PERDESCINICOMISS', type: 'varchar2', nullable: true })
  startCommissionDiscountPercent: string;

  @Column({ name: 'PERDESCFIMCOMISS', type: 'varchar2', nullable: true })
  endCommissionDiscountPercent: string;

  @Column({ name: 'CONCEDERMAIORCOMISSREG', type: 'varchar2', nullable: true })
  grantHigherRegCommission: string;

  @Column({ name: 'VLSUBTOTITEM', type: 'number', nullable: true })
  itemSubtotalValue: number;

  @Column({ name: 'PERDESCNEGOCIADO', type: 'varchar2', nullable: true })
  negotiatedDiscountPercent: string;

  @Column({ name: 'FORMANEGOCIACAO', type: 'varchar2', nullable: true })
  negotiationForm: string;

  @Column({ name: 'PERDESCAVISTA', type: 'varchar2', nullable: true })
  cashDiscountPercent: string;

  @Column({ name: 'NEGOCIACAOPOSTERIOR', type: 'varchar2', nullable: true })
  laterNegotiation: string;

  @Column({ name: 'CODPRECOFIXO', type: 'number', nullable: true })
  fixedPriceId: number;

  @Column({ name: 'VLACRESFRETEKG', type: 'number', nullable: true })
  freightKgAdditionValue: number;

  @Column({ name: 'STATUSSUCATA', type: 'varchar2', nullable: true })
  scrapStatus: string;

  @Column({ name: 'PTABELAAUTPECAS', type: 'varchar2', nullable: true })
  autopartsTablePrice: string;

  @Column({ name: 'GRPREGRABRINDE', type: 'varchar2', nullable: true })
  giftRuleGroup: string;

  @Column({ name: 'NUMITEMPED', type: 'number', nullable: true })
  orderItemNumber: number;

  @Column({ name: 'VLITEMTRIBUTOS', type: 'number', nullable: true })
  itemTaxesValue: number;

  @Column({ name: 'PERCTRIBUTOS', type: 'number', nullable: true })
  taxesPercent: number;

  @Column({ name: 'TOTALIZADORALIQUOTA', type: 'number', nullable: true })
  rateTotalizer: number;

  @Column({ name: 'PERDESCPAUTA', type: 'varchar2', nullable: true })
  tariffDiscountPercent: string;

  @Column({ name: 'ORIGEMST', type: 'varchar2', nullable: true })
  stOrigin: string;

  @Column({ name: 'VLDESCSOCIOTORCEDOR', type: 'number', nullable: true })
  supporterPartnerDiscountValue: number;

  @Column({ name: 'INICIOINTERVALODESCQUANT', type: 'varchar2', nullable: true })
  quantDiscountIntervalStart: string;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', nullable: true })
  medPromotionId: number;

  @Column({ name: 'NUMRECOPI', type: 'number', nullable: true })
  recopiNumber: number;

  @Column({ name: 'NUMERORECOPI', type: 'number', nullable: true })
  recopiNumberAux: number;

  @Column({ name: 'UNIDADE', type: 'varchar2', nullable: true })
  unit: string;

  @Column({ name: 'AMBIENTE', type: 'varchar2', nullable: true })
  environment: string;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'varchar2', nullable: true })
  realCurrencyRateCase: string;

  @Column({ name: 'CODMOEDAESTRAGEIRA', type: 'number', nullable: true })
  foreignCurrencyId: number;

  @Column({ name: 'VLRMOEDAESTRAGEIRA', type: 'number', nullable: true })
  foreignCurrencyValue: number;

  @Column({ name: 'QTDIASENTREGAITEM', type: 'number', nullable: true })
  itemDeliveryDaysQuantity: number;

  @Column({ name: 'PERCIPIECF', type: 'number', nullable: true })
  cipiecfPercent: number;

  @Column({ name: 'VLIPIECF', type: 'number', nullable: true })
  ecfIpiValue: number;

  @Column({ name: 'BASEIPIECF', type: 'number', nullable: true })
  ecfIpiBase: number;

  @Column({ name: 'USAUNIDADEMASTER', type: 'varchar2', nullable: true })
  useMasterUnit: string;

  @Column({ name: 'DTINICIOPROMOLOTE', type: 'date', nullable: true })
  batchPromoStartDate: Date;

  @Column({ name: 'DTFIMPROMOLOTE', type: 'date', nullable: true })
  batchPromoEndDate: Date;

  @Column({ name: 'QT_SEPARADAMANIF', type: 'number', nullable: true })
  manifestSeparatedQuantity: number;

  @Column({ name: 'CODCONTROLEVASILHAME', type: 'number', nullable: true })
  bottleControlId: number;

  @Column({ name: 'CODVASILHAMEECF', type: 'number', nullable: true })
  ecfBottleId: number;

  @Column({ name: 'QTSAIDAVASILHAME', type: 'number', nullable: true })
  bottleExitQuantity: number;

  @Column({ name: 'QTVENDIDAVASILHAME', type: 'number', nullable: true })
  bottleSoldQuantity: number;

  @Column({ name: 'VLACRESCVASILHAME', type: 'number', nullable: true })
  bottleAdditionValue: number;

  @Column({ name: 'PVENDAVASILHAME', type: 'varchar2', nullable: true })
  bottleSalePriceStr: string;

  @Column({ name: 'MARGEMMIN', type: 'varchar2', nullable: true })
  minMargin: string;

  @Column({ name: 'PERCREDALIQIPI', type: 'number', nullable: true })
  ipiCreditRatePercent: number;

  @Column({ name: 'CORTE', type: 'varchar2', nullable: true })
  cut: string;

  @Column({ name: 'NUMSERIESAT', type: 'number', nullable: true })
  satSeriesNumber: number;

  @Column({ name: 'CODDESCONTOBASERCA', type: 'number', nullable: true })
  rcaBaseDiscountId: number;

  @Column({ name: 'CODPRODCESTA', type: 'number', nullable: true })
  basketProductId: number;

  @Column({ name: 'NUMSEQCESTABASICA', type: 'number', nullable: true })
  basicBasketSequence: number;

  @Column({ name: 'CODINDICEMULTIPLICADOR', type: 'number', nullable: true })
  multiplierIndexId: number;

  @Column({ name: 'PVENDALIQ', type: 'number', nullable: true })
  netSalePrice: number;

  @Column({ name: 'NUMPEDRAS', type: 'number', nullable: true })
  rasOrderNumber: number;

  @Column({ name: 'NUMSEQRAS', type: 'number', nullable: true })
  rasSequenceNumber: number;

  @Column({ name: 'ORIGEMDEPRECO', type: 'varchar2', nullable: true })
  priceOrigin: string;

  @Column({ name: 'ALIQICMSPART_DESATIVADO', type: 'number', nullable: true })
  partIcmsRateDisabled: number;

  @Column({ name: 'VLFCPPART', type: 'number', nullable: true })
  fcpPartValue: number;

  @Column({ name: 'VLICMSPART', type: 'number', nullable: true })
  icmsPartValue: number;

  @Column({ name: 'PERCPROVPART', type: 'number', nullable: true })
  provisionPartPercent: number;

  @Column({ name: 'VLICMSDIFALIQPART', type: 'number', nullable: true })
  partDiffRateIcmsValue: number;

  @Column({ name: 'PERCBASEREDPART', type: 'number', nullable: true })
  partBaseReductionPercent: number;

  @Column({ name: 'VLICMSPARTDEST', type: 'number', nullable: true })
  destPartIcmsValue: number;

  @Column({ name: 'VLBASEPARTDEST', type: 'number', nullable: true })
  destPartBaseValue: number;

  @Column({ name: 'ALIQFCP', type: 'number', nullable: true })
  fcpRate: number;

  @Column({ name: 'ALIQINTERNADEST', type: 'number', nullable: true })
  destInternalRate: number;

  @Column({ name: 'VLICMSPARTREM', type: 'number', nullable: true })
  remPartIcmsValue: number;

  @Column({ name: 'ALIQINTERORIGPART', type: 'number', nullable: true })
  origPartInterRate: number;

  @Column({ name: 'VLBASEPART_DESATIVADO', type: 'number', nullable: true })
  partBaseDisabledValue: number;

  @Column({ name: 'ALIQFCPPART_DESATIVADO', type: 'number', nullable: true })
  partFcpRateDisabled: number;

  @Column({ name: 'VLACRESPART_DESATIVADO', type: 'number', nullable: true })
  partAdditionDisabledValue: number;

  @Column({ name: 'VLIPIPTABELA', type: 'number', nullable: true })
  tablePriceIpiValue: number;

  @Column({ name: 'VLIPIPBASERCA', type: 'number', nullable: true })
  rcaBasePriceIpiValue: number;

  @Column({ name: 'VLICMSPARTPTABELA', type: 'number', nullable: true })
  tablePricePartIcmsValue: number;

  @Column({ name: 'VLICMSPARTPBASERCA', type: 'number', nullable: true })
  rcaBasePricePartIcmsValue: number;

  @Column({ name: 'CODCEST', type: 'number', nullable: true })
  cestId: number;

  @Column({ name: 'QTDIFPESO', type: 'number', nullable: true })
  weightDiffQuantity: number;

  @Column({ name: 'ORIGMERCTRIB', type: 'varchar2', nullable: true })
  taxMerchOrigin: string;

  @Column({ name: 'CODFIGVENDATRIANGULAR', type: 'number', nullable: true })
  triangularSaleFigId: number;

  @Column({ name: 'NUMOSSERVICO', type: 'number', nullable: true })
  serviceSoNumber: number;

  @Column({ name: 'CODBARRABALANCA', type: 'number', nullable: true })
  scaleBarId: number;

  @Column({ name: 'CODFISCAL', type: 'number', nullable: true })
  fiscalId: number;

  @Column({ name: 'SITTRIBUT', type: 'varchar2', nullable: true })
  taxSituationStr: string;

  @Column({ name: 'VERSAOSERVICOPARTILHA', type: 'varchar2', nullable: true })
  shareServiceVersion: string;

  @Column({ name: 'CODDESCONTOSIMULADOR', type: 'number', nullable: true })
  simulatorDiscountId: number;

  @Column({ name: 'PRODIMPORTADOPEPS', type: 'varchar2', nullable: true })
  pepsImportedProduct: string;

  @Column({ name: 'NUMTRANSENTPEPS', type: 'number', nullable: true })
  pepsEntryTransNumber: number;

  @Column({ name: 'PTABELAFABRICAZFM', type: 'varchar2', nullable: true })
  zfmFactoryTablePrice: string;

  @Column({ name: 'CODSUPERVISOR', type: 'number', nullable: true })
  supervisorId: number;

  @Column({ name: 'QTMINATACVENDA', type: 'number', nullable: true })
  minWholesaleSaleQuantity: number;

  @Column({ name: 'TIPODESCATACVENDA', type: 'varchar2', nullable: true })
  wholesaleSaleDiscountType: string;

  @Column({ name: 'VLTOTSERVICO', type: 'number', nullable: true })
  totalServiceValue: number;

  @Column({ name: 'PRODUZIR_TINTA', type: 'varchar2', nullable: true })
  produceInk: string;

  @Column({ name: 'VLBASEPART', type: 'number', nullable: true })
  partBaseValue: number;

  @Column({ name: 'ALIQFCPPART', type: 'number', nullable: true })
  rateFcppart: number;

  @Column({ name: 'ALIQICMSPART', type: 'number', nullable: true })
  rateIcmspart: number;

  @Column({ name: 'VLACRESPART', type: 'number', nullable: true })
  partAdditionValue: number;

  @Column({ name: 'VLDESCCARCACA', type: 'number', nullable: true })
  carcassDiscountValue: number;

  @Column({ name: 'DEVOLUCAOCARCACA', type: 'varchar2', nullable: true })
  carcassReturn: string;

  @Column({ name: 'NUMCHAVEEXP', type: 'number', nullable: true })
  expKeyNumber: number;

  @Column({ name: 'NUMDRAWBACK', type: 'number', nullable: true })
  drawbackNumber: number;

  @Column({ name: 'NUMREGEXP', type: 'number', nullable: true })
  expRegNumber: number;

  @Column({ name: 'FATCONVCOMBO', type: 'varchar2', nullable: true })
  comboConvFactor: string;

  @Column({ name: 'TIPOCOMBO', type: 'varchar2', nullable: true })
  comboType: string;

  @Column({ name: 'CODOFERTA', type: 'number', nullable: true })
  offerId: number;

  @Column({ name: 'CNPJFABRICANTE', type: 'varchar2', nullable: true })
  manufacturerCnpj: string;

  @Column({ name: 'FABRICANTE', type: 'varchar2', nullable: true })
  manufacturer: string;

  @Column({ name: 'INDESCALARELEVANTE', type: 'varchar2', nullable: true })
  relevantScaleInd: string;

  @Column({ name: 'CODBENEFICIOFISCAL', type: 'number', nullable: true })
  fiscalBenefitId: number;

  @Column({ name: 'CODAGREGACAO', type: 'number', nullable: true })
  agregacaoId: number;

  @Column({ name: 'VLBASEFCPICMS', type: 'number', nullable: true })
  fcpIcmsBaseValue: number;

  @Column({ name: 'VLBASEFCPST', type: 'number', nullable: true })
  fcpStBaseValue: number;

  @Column({ name: 'VLBCFCPSTRET', type: 'number', nullable: true })
  fcpStRetBaseValue: number;

  @Column({ name: 'PERFCPSTRET', type: 'varchar2', nullable: true })
  fcpStRetPercent: string;

  @Column({ name: 'VLFCPSTRET', type: 'number', nullable: true })
  fcpStRetValue: number;

  @Column({ name: 'PERFCPSN', type: 'number', nullable: true })
  snFcpPercent: number;

  @Column({ name: 'VLCREDFCPICMSSN', type: 'number', nullable: true })
  snFcpIcmsCreditValue: number;

  @Column({ name: 'VLFECP', type: 'number', nullable: true })
  fecpValue: number;

  @Column({ name: 'VLACRESCIMOFUNCEP', type: 'number', nullable: true })
  funcepAdditionValue: number;

  @Column({ name: 'PERACRESCIMOFUNCEP', type: 'varchar2', nullable: true })
  funcepAdditionPercent: string;

  @Column({ name: 'ALIQICMSFECP', type: 'number', nullable: true })
  rateIcmsfecp: number;

  @Column({ name: 'PGLP', type: 'number', nullable: true })
  pglp: number;

  @Column({ name: 'PGNN', type: 'number', nullable: true })
  pgnn: number;

  @Column({ name: 'PGNI', type: 'number', nullable: true })
  pgni: number;

  @Column({ name: 'VPART', type: 'varchar2', nullable: true })
  vpart: string;

  @Column({ name: 'BRINDEVAREJO', type: 'varchar2', nullable: true })
  retailGift: string;

  @Column({ name: 'UTILIZOUMOTORCALCULO', type: 'varchar2', nullable: true })
  usedCalcEngine: string;

  @Column({ name: 'ANP', type: 'varchar2', nullable: true })
  anp: string;

  @Column({ name: 'DESCANP', type: 'varchar2', nullable: true })
  anpDiscount: string;

  @Column({ name: 'NUMSEQITEMBRINDE', type: 'number', nullable: true })
  giftItemSequence: number;

  @Column({ name: 'BAIXAQTFRENTELOJA', type: 'varchar2', nullable: true })
  storeFrontQtyWriteOff: string;

  @Column({ name: 'CODMAQUINA', type: 'number', nullable: true })
  posMachineId: number;

  @Column({ name: 'QTORIGTV8', type: 'number', nullable: true })
  origTv8Quantity: number;

  @Column({ name: 'CUPOMDESCONTO', type: 'varchar2', nullable: true })
  discountCoupon: string;

  @Column({ name: 'CODCUPOMDESCONTO', type: 'number', nullable: true })
  discountCouponId: number;

  @Column({ name: 'DTCONSOLIDACAOAUXPRO', type: 'date', nullable: true })
  auxProConsolidationDate: Date;

  @Column({ name: 'IDREMESSAWEB', type: 'varchar2', nullable: true })
  webShipmentIdStr: string;

  @Column({ name: 'CODFORMULACMV', type: 'number', nullable: true })
  cmvFormulaId: number;

  @Column({ name: 'FATORGRAMATURALICIT', type: 'varchar2', nullable: true })
  licitGrammageFactor: string;

  @Column({ name: 'NUMPEDCLI', type: 'number', nullable: true })
  customerOrderNumber: number;

  @Column({ name: 'NUMLOTEPROMOCAOMED', type: 'number', nullable: true })
  medPromoBatchNumber: number;

  @Column({ name: 'NUMVERBACAMPANHA', type: 'number', nullable: true })
  campaignFundNumber: number;

  @Column({ name: 'PERCCUSTFORNEC', type: 'number', nullable: true })
  supplierCostPercent: number;

  @Column({ name: 'VLCUSTFORNEC', type: 'number', nullable: true })
  supplierCostValue: number;

  @Column({ name: 'CODPRECOCESTA', type: 'number', nullable: true })
  basketPriceId: number;

  @Column({ name: 'POSICAOCFAT', type: 'varchar2', nullable: true })
  cfatPosition: string;

  @Column({ name: 'REGIMEESPISENSTFONTE', type: 'varchar2', nullable: true })
  stSourceExempSpecRegime: string;

  @Column({ name: 'OBSERVACAOSTFONTE', type: 'varchar2', nullable: true })
  stSourceObservation: string;

  @Column({ name: 'CODCONFIGFUNCEPMED', type: 'number', nullable: true })
  medPfeFuncConfigId: number;

  @Column({ name: 'CODDEPOSITO', type: 'number', nullable: true })
  warehouseId: number;

  @Column({ name: 'CODIGOINTEGRACAOWMS', type: 'number', nullable: true })
  wmsIntegrationId: number;

  @Column({ name: 'NUMVIASMAPASEPRI', type: 'number', nullable: true })
  copiesMapasepriNumber: number;

  @Column({ name: 'NUMEMPENHO', type: 'number', nullable: true })
  commitmentNumber: number;

  @Column({ name: 'CODEDITAL', type: 'number', nullable: true })
  biddingId: number;

  @Column({ name: 'LOTECONTRATO', type: 'varchar2', nullable: true })
  contractBatch: string;

  @Column({ name: 'PRECOSEMIMPOSTO', type: 'varchar2', nullable: true })
  priceWithoutTax: string;

  @Column({ name: 'BCSTRETANTERIOR', type: 'varchar2', nullable: true })
  previousStRetBase: string;

  @Column({ name: 'VLICMSSUBSTITUTOANTERIOR', type: 'number', nullable: true })
  previousSubstituteIcmsValue: number;

  @Column({ name: 'VLICMSSTRETANTERIOR', type: 'number', nullable: true })
  previousStRetIcmsValue: number;

  @Column({ name: 'VLDESCCMVPROMOCAOMED', type: 'number', nullable: true })
  medPromoCmvDiscountValue: number;

  @Column({ name: 'NUMSEQORIG', type: 'number', nullable: true })
  origSequenceNumber: number;

  @Column({ name: 'USACASHBACK', type: 'varchar2', nullable: true })
  useCashback: string;

  @Column({ name: 'QBCMONORET', type: 'varchar2', nullable: true })
  monoretQbc: string;

  @Column({ name: 'ADREMICMSRET', type: 'varchar2', nullable: true })
  retAdremIcms: string;

  @Column({ name: 'VICMSMONORET', type: 'varchar2', nullable: true })
  monoretVIcms: string;

  @Column({ name: 'VLIPISUPENSO', type: 'number', nullable: true })
  suspendedIpiValue: number;

  @Column({ name: 'VLIISUSPENSO', type: 'number', nullable: true })
  suspendedIiValue: number;

  @Column({ name: 'CODBENEFICIOFISCALCOMPLE', type: 'number', nullable: true })
  complementaryFiscalBenefitId: number;

  @Column({ name: 'INDDEDUZDESONERACAO', type: 'varchar2', nullable: true })
  deductDesonerationInd: string;

  @Column({ name: 'QTCOMBOVIRTUAL', type: 'number', nullable: true })
  virtualComboQuantity: number;

  @Column({ name: 'CUSTOULTENTFISCAL', type: 'varchar2', nullable: true })
  lastFiscalEntryCost: string;

  @Column({ name: 'PERDESCMAXCAMPANHA', type: 'varchar2', nullable: true })
  maxCampaignDiscountPercent: string;

  @Column({ name: 'PERDESCCAMPANHA', type: 'varchar2', nullable: true })
  campaignDiscountPercent: string;

  @Column({ name: 'PBASECAMPANHA', type: 'number', nullable: true })
  campaignBasePrice: number;

  @Column({ name: 'PRECOFIXOCAMPANHA', type: 'varchar2', nullable: true })
  campaignFixedPriceStr: string;

  @Column({ name: 'ALIQCBS', type: 'number', nullable: true })
  cbsRate: number;

  @Column({ name: 'ALIQIBS', type: 'number', nullable: true })
  ibsRate: number;

  @Column({ name: 'ALIQIS', type: 'number', nullable: true })
  isRate: number;

  @Column({ name: 'BASECBS', type: 'number', nullable: true })
  cbsBase: number;

  @Column({ name: 'BASEIBS', type: 'number', nullable: true })
  ibsBase: number;

  @Column({ name: 'BASEIS', type: 'number', nullable: true })
  isBase: number;

  @Column({ name: 'VLCBS', type: 'number', nullable: true })
  cbsValue: number;

  @Column({ name: 'VLIBS', type: 'number', nullable: true })
  ibsValue: number;

  @Column({ name: 'VLIS', type: 'number', nullable: true })
  isValue: number;

  @Column({ name: 'CODCBS', type: 'number', nullable: true })
  cbsId: number;

  @Column({ name: 'CODIBS', type: 'number', nullable: true })
  ibsId: number;

  @Column({ name: 'CODIS', type: 'number', nullable: true })
  isId: number;

  @Column({ name: 'VLCBSPTABELA', type: 'number', nullable: true })
  tablePriceCbsValue: number;

  @Column({ name: 'VLIBSPTABELA', type: 'number', nullable: true })
  tablePriceIbsValue: number;

  @Column({ name: 'VLISPTABELA', type: 'number', nullable: true })
  tablePriceIsValue: number;

  @Column({ name: 'VLCBSPBASERCA', type: 'number', nullable: true })
  rcaBaseCbsValue: number;

  @Column({ name: 'VLIBSPBASERCA', type: 'number', nullable: true })
  rcaBaseIbsValue: number;

  @Column({ name: 'VLISPBASERCA', type: 'number', nullable: true })
  rcaBaseIsValue: number;

  @Column({ name: 'PRECOUTILIZADONFE', type: 'varchar2', nullable: true })
  nfeUsedPrice: string;

  @Column({ name: 'CODIGOTRIBUTACAOCBSIBS', type: 'number', nullable: true })
  cbsIbsTaxationId: number;

  @Column({ name: 'CSTIBSCBS', type: 'varchar2', nullable: true })
  ibsCbsCst: string;

  @Column({ name: 'CCLASSTRIBIBSCBS', type: 'varchar2', nullable: true })
  ibsCbsTaxClass: string;

  @Column({ name: 'VLBASEIBSCBS', type: 'number', nullable: true })
  ibsCbsBaseValue: number;

  @Column({ name: 'IBSUF', type: 'varchar2', nullable: true })
  ibsUf: string;

  @Column({ name: 'PDIFIBSUF', type: 'number', nullable: true })
  ibsUfDiffPercent: number;

  @Column({ name: 'VDIFIBSUF', type: 'varchar2', nullable: true })
  ibsUfDiffValueStr: string;

  @Column({ name: 'PREDALIQIBSUF', type: 'varchar2', nullable: true })
  ibsUfRateRedPercentStr: string;

  @Column({ name: 'PALIQEFETIBSUF', type: 'varchar2', nullable: true })
  ibsUfEffectiveRatePercentStr: string;

  @Column({ name: 'VIBSUF', type: 'varchar2', nullable: true })
  ibsUfValueStr: string;

  @Column({ name: 'PIBSMUN', type: 'number', nullable: true })
  ibsMunPercent: number;

  @Column({ name: 'PDIFIBSMUN', type: 'varchar2', nullable: true })
  ibsMunDiffPercentStr: string;

  @Column({ name: 'VDIFIBSMUN', type: 'varchar2', nullable: true })
  ibsMunDiffValueStr: string;

  @Column({ name: 'PREDALIQIBSMUN', type: 'varchar2', nullable: true })
  ibsMunRateRedPercentStr: string;

  @Column({ name: 'PALIQEFETIBSMUN', type: 'varchar2', nullable: true })
  ibsMunEffectiveRatePercentStr: string;

  @Column({ name: 'VIBSMUN', type: 'varchar2', nullable: true })
  ibsMunValueStr: string;

  @Column({ name: 'PDIFCBS', type: 'number', nullable: true })
  cbsDiffPercent: number;

  @Column({ name: 'VDIFCBS', type: 'varchar2', nullable: true })
  cbsDiffValueStr: string;

  @Column({ name: 'PREDALIQCBS', type: 'varchar2', nullable: true })
  cbsRateRedPercentStr: string;

  @Column({ name: 'PALIQEFETCBS', type: 'varchar2', nullable: true })
  cbsEffectiveRatePercentStr: string;

  @Column({ name: 'CSTTRIBREG', type: 'varchar2', nullable: true })
  regTaxCst: string;

  @Column({ name: 'CCLASSTRIBREG', type: 'varchar2', nullable: true })
  regTaxClass: string;

  @Column({ name: 'PALIQEFETREGIBSUF', type: 'varchar2', nullable: true })
  ibsUfRegEffectiveRatePercentStr: string;

  @Column({ name: 'VTRIBREGIBSUF', type: 'varchar2', nullable: true })
  ibsUfRegTaxValueStr: string;

  @Column({ name: 'ALIQEFETREGIBSMUN', type: 'number', nullable: true })
  ibsMunRegEffectiveRate: number;

  @Column({ name: 'VTRIBREGIBSMUN', type: 'varchar2', nullable: true })
  ibsMunRegTaxValueStr: string;

  @Column({ name: 'PALIQEFETREGCBS', type: 'varchar2', nullable: true })
  cbsRegEffectiveRatePercentStr: string;

  @Column({ name: 'VTRIBREGCBS', type: 'varchar2', nullable: true })
  cbsRegTaxValueStr: string;

  @Column({ name: 'PIBSUFCOMPRAGOV', type: 'varchar2', nullable: true })
  ibsUfGovPurchasePercentStr: string;

  @Column({ name: 'VIBSUFCOMPRAGOV', type: 'varchar2', nullable: true })
  ibsUfGovPurchaseValueStr: string;

  @Column({ name: 'PIBSMUNCOMPRAGOV', type: 'varchar2', nullable: true })
  ibsMunGovPurchasePercentStr: string;

  @Column({ name: 'VIBSMUNCOMPRAGOV', type: 'varchar2', nullable: true })
  ibsMunGovPurchaseValueStr: string;

  @Column({ name: 'PCBGCOMPRAGOV', type: 'varchar2', nullable: true })
  cbsGovPurchasePercentStr: string;

  @Column({ name: 'VCBSCOMPRAGOV', type: 'varchar2', nullable: true })
  cbsGovPurchaseValueStr: string;

  @Column({ name: 'CODIGOTRIBUTACAOIS', type: 'number', nullable: true })
  isTaxationId: number;

  @Column({ name: 'CSTIS', type: 'varchar2', nullable: true })
  isCst: string;

  @Column({ name: 'CCLASSTRIBIS', type: 'varchar2', nullable: true })
  isTaxClass: string;

  @Column({ name: 'VLBASEIS', type: 'number', nullable: true })
  isBaseValue: number;

  @Column({ name: 'ALIQESPECIFICAIS', type: 'number', nullable: true })
  specificIsRate: number;

  @Column({ name: 'PERMITIRCUMULATIVIDADEVERBACMV', type: 'varchar2', nullable: true })
  allowCmvFundCumulativity: string;

}
