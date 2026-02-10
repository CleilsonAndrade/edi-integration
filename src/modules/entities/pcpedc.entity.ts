import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDC',
})
export class PcpedcEntity {
  @Column({ name: 'CODPLPAG', type: 'number', nullable: true })
  paymentPlanId: number | null;

  @Column({ name: 'CODFUNCCANCEL', type: 'number', nullable: true })
  codfunccancelId: number | null;

  @Column({ name: 'NUMTRANSVENDA', type: 'number', nullable: true })
  saleTransactionNumber: number | null;

  @Column({ name: 'MONTANDO', type: 'varchar2', nullable: true })
  assembling: string | null;

  @Column({ name: 'NUMPEDRCA', type: 'number', nullable: true })
  rcaOrderId: number | null;

  @Column({ name: 'FRETEDESPACHO', type: 'varchar2', nullable: true })
  dispatchFreight: string | null;

  @Column({ name: 'FRETEREDESPACHO', type: 'varchar2', nullable: true })
  redispatchFreight: string | null;

  @Column({ name: 'CODFORNECFRETE', type: 'number', nullable: true })
  freightSupplierId: number | null;

  @Column({ name: 'TIPOCARGA', type: 'varchar2', nullable: true })
  loadType: string | null;

  @Column({ name: 'PRAZO1', type: 'number', nullable: true })
  term1: number | null;

  @Column({ name: 'PRAZO2', type: 'number', nullable: true })
  term2: number | null;

  @Column({ name: 'PRAZO3', type: 'number', nullable: true })
  term3: number | null;

  @Column({ name: 'PRAZO4', type: 'number', nullable: true })
  term4: number | null;

  @Column({ name: 'PRAZO5', type: 'number', nullable: true })
  term5: number | null;

  @Column({ name: 'PRAZO6', type: 'number', nullable: true })
  term6: number | null;

  @Column({ name: 'PRAZO7', type: 'number', nullable: true })
  term7: number | null;

  @Column({ name: 'PRAZO8', type: 'number', nullable: true })
  term8: number | null;

  @Column({ name: 'PRAZO9', type: 'number', nullable: true })
  term9: number | null;

  @Column({ name: 'PRAZO10', type: 'number', nullable: true })
  term10: number | null;

  @Column({ name: 'PRAZO11', type: 'number', nullable: true })
  term11: number | null;

  @Column({ name: 'PRAZO12', type: 'number', nullable: true })
  term12: number | null;

  @Column({ name: 'PRAZOMEDIO', type: 'number', nullable: true })
  averageTerm: number | null;

  @Column({ name: 'OBSENTREGA1', type: 'varchar2', nullable: true })
  deliveryObservation1: string | null;

  @Column({ name: 'OBSENTREGA2', type: 'varchar2', nullable: true })
  deliveryObservation2: string | null;

  @Column({ name: 'OBSENTREGA3', type: 'varchar2', nullable: true })
  deliveryObservation3: string | null;

  @Column({ name: 'CODEPTO', type: 'number', nullable: true })
  departmentId: number | null;

  @Column({ name: 'TIPOEMBALAGEM', type: 'varchar2', nullable: true })
  packagingType: string | null;

  @Column({ name: 'DTLIBERA', type: 'date', nullable: true })
  releaseDate: Date | null;

  @Column({ name: 'CODMOTORISTA', type: 'number', nullable: true })
  driverId: number | null;

  @Column({ name: 'CODFILIALNF', type: 'varchar2', nullable: true })
  invoiceBranchId: string | null;

  @Column({ name: 'DTNFTRANSF', type: 'date', nullable: true })
  transfNfDate: Date | null;

  @Column({ name: 'NUMNFTRANSF', type: 'number', nullable: true })
  transfNfNumber: number | null;

  @Column({ name: 'NUMCUPOM', type: 'number', nullable: true })
  couponNumber: number | null;

  @Column({ name: 'SERIEECF', type: 'varchar2', nullable: true })
  ecfSeries: string | null;

  @Column({ name: 'CODMOTBLOQUEIO', type: 'number', nullable: true })
  blockReasonId: number | null;

  @Column({ name: 'CODMOTCANCEL', type: 'number', nullable: true })
  cancelReasonId: number | null;

  @Column({ name: 'TIPOOPER', type: 'varchar2', nullable: true })
  operType: string | null;

  @Column({ name: 'CODDISTRIB', type: 'varchar2', nullable: true })
  distribCode: string | null;

  @Column({ name: 'NUMVIASMAPASEP', type: 'number', nullable: true })
  sepMapCopiesNumber: number | null;

  @Column({ name: 'NUMVOLUME', type: 'number', nullable: true })
  volumeNumber: number | null;

  @Column({ name: 'NUMSEQENTR', type: 'number', nullable: true })
  deliverySeqNumber: number | null;

  @Column({ name: 'CODFUNCCX', type: 'number', nullable: true })
  cashierEmployeeId: number | null;

  @Column({ name: 'NUMCAIXA', type: 'number', nullable: true })
  boxNumber: number | null;

  @Column({ name: 'NUMNOTA', type: 'number', nullable: true })
  invoiceNumber: number | null;

  @Column({ name: 'VLCUSTOREP', type: 'number', nullable: true })
  replacementCostValue: number | null;

  @Column({ name: 'VLCUSTOCONT', type: 'number', nullable: true })
  accountingCostValue: number | null;

  @Column({ name: 'VLDESCNEG', type: 'number', nullable: true })
  negotiatedDiscountValue: number | null;

  @Column({ name: 'PERCDESCCANAL', type: 'number', nullable: true })
  channelDiscountPercent: number | null;

  @Column({ name: 'PERCDESCABC', type: 'number', nullable: true })
  abcDiscountPercent: number | null;

  @Column({ name: 'PERCDESCCLI', type: 'number', nullable: true })
  customerDiscountPercent: number | null;

  @Column({ name: 'PERCDESCNEG', type: 'number', nullable: true })
  negotiatedDiscountPercent: number | null;

  @Column({ name: 'NUMNOTAMANIF', type: 'number', nullable: true })
  manifestInvoiceNumber: number | null;

  @Column({ name: 'SERIEMANIF', type: 'varchar2', nullable: true })
  manifestSeries: string | null;

  @Column({ name: 'ORIGEMPED', type: 'varchar2', nullable: true })
  orderOrigin: string | null;

  @Column({ name: 'CODFORNECVDIRETO', type: 'number', nullable: true })
  directSaleSupplierId: number | null;

  @Column({ name: 'CODFUNCEXPARQOL', type: 'number', nullable: true })
  olFileExportEmployeeId: number | null;

  @Column({ name: 'DATAEXPARQOL', type: 'date', nullable: true })
  olFileExportDate: Date | null;

  @Column({ name: 'NUMSEQMONTAGEM', type: 'number', nullable: true })
  assemblySeqNumber: number | null;

  @Column({ name: 'EXPORTADO', type: 'varchar2', nullable: true, default: 'N' })
  exported: string | null;

  @Column({ name: 'ESPECIEMANIF', type: 'varchar2', nullable: true })
  manifestSpecies: string | null;

  @Column({ name: 'EANENTREGA', type: 'number', nullable: true })
  deliveryEan: number | null;

  @Column({ name: 'EANCOBRANCA', type: 'number', nullable: true })
  billingEan: number | null;

  @Column({ name: 'CODFUNCCONF', type: 'number', nullable: true })
  checkerEmployeeId: number | null;

  @Column({ name: 'CODCONTRATO', type: 'number', nullable: true })
  contractId: number | null;

  @Column({ name: 'NUMPEDENTFUT', type: 'number', nullable: true })
  futureDelOrderId: number | null;

  @Column({ name: 'DTFAT', type: 'date', nullable: true })
  billingDate: Date | null;

  @Column({ name: 'CODFUNCLIBERA', type: 'number', nullable: true })
  releaserEmployeeId: number | null;

  @Column({ name: 'NUMVIASPEDIDO', type: 'number', nullable: true })
  orderCopiesNumber: number | null;

  @Column({ name: 'HORAFAT', type: 'number', nullable: true })
  billingHour: number | null;

  @Column({ name: 'MINUTOFAT', type: 'number', nullable: true })
  billingMinute: number | null;

  @Column({ name: 'NUMPEDTV3', type: 'number', nullable: true })
  tv3OrderId: number | null;

  @Column({ name: 'NUMPEDORIGEM', type: 'number', nullable: true })
  originOrderId: number | null;

  @Column({ name: 'CODFUNCEMBALADOR', type: 'number', nullable: true })
  packerEmployeeId: number | null;

  @Column({ name: 'NUMNOTACONSIG', type: 'number', nullable: true })
  consigInvoiceNumber: number | null;

  @Column({ name: 'PEDIDOEMBALADO', type: 'varchar2', nullable: true })
  packedOrder: string | null;

  @Column({ name: 'NUMSERIEEQUIP', type: 'varchar2', nullable: true })
  equipSeriesNumber: string | null;

  @Column({ name: 'NUMORCA', type: 'number', nullable: true })
  quoteNumber: number | null;

  @Column({ name: 'NUMCARMANIF', type: 'number', nullable: true })
  manifestLoadNumber: number | null;

  @Column({ name: 'CODUSUR2', type: 'number', nullable: true })
  representative2Id: number | null;

  @Column({ name: 'CODUSUR3', type: 'number', nullable: true })
  representative3Id: number | null;

  @Column({ name: 'HORAINICIALSEP', type: 'number', nullable: true })
  sepStartHour: number | null;

  @Column({ name: 'MINUTOINICIALSEP', type: 'number', nullable: true })
  sepStartMinute: number | null;

  @Column({ name: 'HORAFINALSEP', type: 'number', nullable: true })
  sepEndHour: number | null;

  @Column({ name: 'MINUTOFINALSEP', type: 'number', nullable: true })
  sepEndMinute: number | null;

  @Column({ name: 'DTWMS', type: 'date', nullable: true })
  wmsDate: Date | null;

  @Column({ name: 'DTVENC1', type: 'date', nullable: true })
  dueDate1: Date | null;

  @Column({ name: 'DTVENC2', type: 'date', nullable: true })
  dueDate2: Date | null;

  @Column({ name: 'DTVENC3', type: 'date', nullable: true })
  dueDate3: Date | null;

  @Column({ name: 'NUMEMPENHO', type: 'varchar2', nullable: true })
  commitmentNumber: string | null;

  @Column({ name: 'NUMPROCESSO', type: 'varchar2', nullable: true })
  processNumber: string | null;

  @Column({ name: 'NUMFONTERECURSO', type: 'varchar2', nullable: true })
  resourceSourceNumber: string | null;

  @Column({ name: 'CODFUNCCALCFRETE', type: 'number', nullable: true })
  freightCalcEmployeeId: number | null;

  @Column({ name: 'DTCALCFRETE', type: 'date', nullable: true })
  freightCalcDate: Date | null;

  @Column({ name: 'VLFRETENF', type: 'number', nullable: true })
  invoiceFreightValue: number | null;

  @Column({ name: 'PRAZOADICIONAL', type: 'number', nullable: true })
  additionalTerm: number | null;

  @Column({ name: 'HORALIBERA', type: 'number', nullable: true })
  releaseHour: number | null;

  @Column({ name: 'MINUTOLIBERA', type: 'number', nullable: true })
  releaseMinute: number | null;

  @Column({ name: 'CODCLICONSIGNACAO', type: 'number', nullable: true })
  consignmentCustomerId: number | null;

  @Column({ name: 'QRCODESAT', type: 'varchar2', nullable: true })
  satQrCode: string | null;

  @Column({ name: 'NUMSESSAOSAT', type: 'number', nullable: true })
  satSessionNumber: number | null;

  @Column({ name: 'CODSEFAZSAT', type: 'number', nullable: true })
  satSefazCode: number | null;

  @Column({ name: 'CODRETORNOSAT', type: 'number', nullable: true })
  satReturnCode: number | null;

  @Column({ name: 'PROTOCOLONFCE', type: 'varchar2', nullable: true })
  nfceProtocol: string | null;

  @Column({ name: 'MELDATAEMISSAOPED', type: 'date', nullable: true })
  bestOrderIssueDate: Date | null;

  @Column({ name: 'VILDTSEPARACOMPLFIM', type: 'date', nullable: true })
  sepComplEndDate: Date | null;

  @Column({ name: 'VILDTSEPARACOMPLINI', type: 'date', nullable: true })
  sepComplStartDate: Date | null;

  @Column({ name: 'COLETAFRETE', type: 'varchar2', nullable: true, default: 'N' })
  freightPickup: string | null;

  @Column({ name: 'VLFRETETRANSP', type: 'number', nullable: true })
  carrierFreightValue: number | null;

  @Column({ name: 'VLFRETEEMPENTREGA', type: 'number', nullable: true })
  deliveryCompanyFreightValue: number | null;

  @Column({ name: 'OBSNFCE', type: 'varchar2', nullable: true })
  nfceObservation: string | null;

  @Column({ name: 'VLTOTALCOMTROCO', type: 'number', nullable: true })
  totalWithChangeValue: number | null;

  @Column({ name: 'VENDALOCESTRANG', type: 'varchar2', nullable: true })
  foreignLocSale: string | null;

  @Column({ name: 'NUMCOLETA', type: 'varchar2', nullable: true })
  pickupNumber: string | null;

  @Column({ name: 'TRANSPORTADORA', type: 'varchar2', nullable: true })
  carrier: string | null;

  @Column({ name: 'CGCFRETE', type: 'varchar2', nullable: true })
  freightCnpj: string | null;

  @Column({ name: 'IEFRETE', type: 'varchar2', nullable: true })
  freightIe: string | null;

  @Column({ name: 'UFFRETE', type: 'varchar2', nullable: true })
  freightUf: string | null;

  @Column({ name: 'CODDISP', type: 'number', nullable: true })
  dispCode: number | null;

  @Column({ name: 'VENDALOCALCLIEX', type: 'varchar2', nullable: true, default: 'N' })
  localExClientSale: string | null;

  @Column({ name: 'SITUACAOSAT', type: 'varchar2', nullable: true })
  satStatus: string | null;

  @Column({ name: 'CODSTATUSSAT', type: 'number', nullable: true })
  satStatusCode: number | null;

  @Column({ name: 'USACREDRCATIPOBNF', type: 'varchar2', nullable: true })
  useRcaCreditBnfType: string | null;

  @Column({ name: 'UIDREGISTRO', type: 'number', nullable: true })
  recordUid: number | null;

  @Column({ name: 'IDPARCEIRO', type: 'varchar2', nullable: true })
  partnerId: string | null;

  @Column({ name: 'ASSINATURA', type: 'varchar2', nullable: true })
  signature: string | null;

  @Column({ name: 'DATAEXPEDICAO', type: 'date', nullable: true })
  shippingDate: Date | null;

  @Column({ name: 'DATARETORNO', type: 'date', nullable: true })
  returnDate: Date | null;

  @Column({ name: 'DATASAIDA', type: 'date', nullable: true })
  exitDate: Date | null;

  @Column({ name: 'EXPORTACRM', type: 'number', nullable: true })
  crmExport: number | null;

  @Column({ name: 'MULTIPLICADORDUPLIC', type: 'number', nullable: true })
  duplicateMultiplier: number | null;

  @Column({ name: 'COPIAIDENTICAPEDDUP', type: 'varchar2', nullable: true })
  duplicateOrderCopy: string | null;

  @Column({ name: 'TRIBVENDATRIANGULAR', type: 'varchar2', nullable: true })
  triangularSaleTax: string | null;

  @Column({ name: 'VLTXENT', type: 'number', nullable: true })
  entryTaxValue: number | null;

  @Column({ name: 'NUMOS', type: 'number', nullable: true })
  soNumber: number | null;

  @Column({ name: 'VLOPERACAOFRETE', type: 'number', nullable: true })
  freightOperationValue: number | null;

  @Column({ name: 'VLBASESTFRETE', type: 'number', nullable: true })
  freightStBaseValue: number | null;

  @Column({ name: 'VLICMSSTFRETE', type: 'number', nullable: true })
  freightStIcmsValue: number | null;

  @Column({ name: 'PERCENTUALSTFRETE', type: 'number', nullable: true })
  freightStPercent: number | null;

  @Column({ name: 'CODEDITAL', type: 'number', nullable: true })
  biddingId: number | null;

  @Column({ name: 'CONDFINANC', type: 'varchar2', nullable: true })
  financialCondition: string | null;

  @Column({ name: 'PLANOSUPPLI', type: 'number', nullable: true })
  suppliPlan: number | null;

  @Column({ name: 'PAGCHEQUEMORADIA', type: 'varchar2', nullable: true })
  housingCheckPayment: string | null;

  @Column({ name: 'QTPARCELAS', type: 'number', nullable: true })
  installmentQuantity: number | null;

  @Column({ name: 'NSU', type: 'varchar2', nullable: true })
  nsu: string | null;

  @Column({ name: 'CODAUTORIZACAO', type: 'number', nullable: true })
  authCode: number | null;

  @Column({ name: 'TIPOOPERACAOTEF', type: 'varchar2', nullable: true })
  tefOperType: string | null;

  @Column({ name: 'CODBANDEIRATEF', type: 'varchar2', nullable: true })
  tefBrandId: string | null;

  @Column({ name: 'EANCOBRANCAFATURA', type: 'number', nullable: true })
  invoiceBillingEan: number | null;

  @Column({ name: 'NUMPRECAR', type: 'number', nullable: true })
  preLoadNumber: number | null;

  @Column({ name: 'CODBREX', type: 'number', nullable: true })
  brexCode: number | null;

  @Column({ name: 'VLFRETEOUTRASDESP', type: 'number', nullable: true })
  otherExpFreightValue: number | null;

  @Column({ name: 'STATUSPEDIDOCIASHOP', type: 'varchar2', nullable: true })
  ciashopOrderStatus: string | null;

  @Column({ name: 'DERRUBADACARGA', type: 'varchar2', nullable: true })
  loadDrop: string | null;

  @Column({ name: 'CODPLPAGANT', type: 'number', nullable: true })
  previousPaymentPlanId: number | null;

  @Column({ name: 'RECALPRECOALTPLPAG', type: 'varchar2', nullable: true })
  recalcPricePayPlanChange: string | null;

  @Column({ name: 'MENSAGEM', type: 'varchar2', nullable: true })
  message: string | null;

  @Column({ name: 'ORDEMSEP', type: 'number', nullable: true })
  pickOrder: number | null;

  @Column({ name: 'ORDEMCONF', type: 'number', nullable: true })
  checkOrder: number | null;

  @Column({ name: 'PAGAMENTOAPROVADOCIASHOP', type: 'varchar2', nullable: true })
  ciashopPaymentApproved: string | null;

  @Column({ name: 'TIPOCONTACORRENTE', type: 'varchar2', nullable: true })
  checkingAccountType: string | null;

  @Column({ name: 'MATERIALDECONSTRUCAO', type: 'varchar2', nullable: true })
  constructionMaterial: string | null;

  @Column({ name: 'CODGERENTE', type: 'number', nullable: true })
  managerId: number | null;

  @Column({ name: 'VLVERBACMV', type: 'number', nullable: true })
  cmvFundValue: number | null;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', nullable: true })
  customerCmvFundValue: number | null;

  @Column({ name: 'NUMPEDMKTPLACE', type: 'varchar2', nullable: true })
  marketplaceOrderId: string | null;

  @Column({ name: 'DATAEFETIVAENTREGACIASHOP', type: 'date', nullable: true })
  ciashopEffectiveDeliveryDate: Date | null;

  @Column({ name: 'SITUACAOPROCESSAMENTO', type: 'varchar2', nullable: true, default: 'N' })
  processingStatus: string | null;

  @Column({ name: 'TIPOCALCVLATEND', type: 'varchar2', nullable: true })
  attendValueCalcType: string | null;

  @Column({ name: 'CODFUNCLIBERADTENTREGA', type: 'number', nullable: true })
  deliveryDateReleaseEmployeeId: number | null;

  @Column({ name: 'USACORTECIASHOP', type: 'varchar2', nullable: true })
  useCiashopCut: string | null;

  @Column({ name: 'INDICADORDESCONTO', type: 'varchar2', nullable: true })
  discountIndicator: string | null;

  @Column({ name: 'INDICADORACRESCIMO', type: 'varchar2', nullable: true })
  additionIndicator: string | null;

  @Column({ name: 'IDREMESSAWEB', type: 'number', nullable: true })
  webShipmentId: number | null;

  @Column({ name: 'NUMVIASMAPASEPRI', type: 'number', nullable: true })
  sepPriMapCopiesNumber: number | null;

  @Column({ name: 'ULTIMASITUACAOCFAT', type: 'varchar2', nullable: true })
  lastCfatStatus: string | null;

  @Column({ name: 'DATAULTIMASITUACAOCFAT', type: 'date', nullable: true })
  lastCfatStatusDate: Date | null;

  @Column({ name: 'VLJUROSPARCELAMENTO', type: 'number', nullable: true })
  installmentInterestValue: number | null;

  @Column({ name: 'DATAHORAPROCESSAMENTO', type: 'date', nullable: true })
  processingDateTime: Date | null;

  @Column({ name: 'PERMITEPRODSEMDISTRIBUICAO', type: 'varchar2', nullable: true })
  permiteprodsemdistribuicao: string | null;

  @Column({ name: 'SISTEMALEGADO', type: 'varchar2', nullable: true })
  legacySystem: string | null;

  @Column({ name: 'NUMTRANSENTCROSSDOCK', type: 'number', nullable: true })
  crossdockEntTransactionNumber: number | null;

  @Column({ name: 'NUMTRANSENTORIGCONSIG', type: 'number', nullable: true })
  consigEntOrigTransactionNumber: number | null;

  @Column({ name: 'NUMTRANSENTORIGTV10', type: 'number', nullable: true })
  tv10EntOrigTransactionNumber: number | null;

  @Column({ name: 'QTPALETE', type: 'number', nullable: true })
  palletQuantity: number | null;

  @Column({ name: 'TOTPESOPALETE', type: 'number', nullable: true })
  totalPalletWeight: number | null;

  @Column({ name: 'NUMPEDHUBE', type: 'varchar2', nullable: true })
  hubeOrderId: string | null;

  @Column({ name: 'DTNSU', type: 'date', nullable: true })
  nsuDate: Date | null;

  @Column({ name: 'NUMFICHA', type: 'number', nullable: true })
  sheetNumber: number | null;

  @Column({ name: 'BLOQUEIOFATURAMENTO', type: 'varchar2', nullable: true })
  billingBlock: string | null;

  @Column({ name: 'GERANDOWMS', type: 'varchar2', nullable: true })
  generatingWms: string | null;

  @PrimaryColumn({ name: 'NUMPED', type: 'number' })
  orderId: number;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date | null;

  @Column({ name: 'VLTOTAL', type: 'number', nullable: true })
  totalValue: number | null;

  @Column({ name: 'CODCLI', type: 'number', nullable: true })
  customerId: number | null;

  @Column({ name: 'CODUSUR', type: 'number', nullable: true })
  representativeId: number | null;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  deliveryDate: Date | null;

  @Column({ name: 'VLTABELA', type: 'number', nullable: true })
  listValue: number | null;

  @Column({ name: 'CODFILIAL', type: 'varchar2', nullable: true })
  branchId: string | null;

  @Column({ name: 'VLDESCONTO', type: 'number', nullable: true })
  discountValue: number | null;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', nullable: true })
  saleType: string | null;

  @Column({ name: 'OBS', type: 'varchar2', nullable: true })
  observation: string | null;

  @Column({ name: 'VLCUSTOREAL', type: 'number', nullable: true })
  realCostValue: number | null;

  @Column({ name: 'VLCUSTOFIN', type: 'number', nullable: true })
  finalCostValue: number | null;

  @Column({ name: 'VLFRETE', type: 'number', nullable: true })
  freightValue: number | null;

  @Column({ name: 'VLOUTRASDESP', type: 'number', nullable: true })
  otherExpensesValue: number | null;

  @Column({ name: 'TOTPESO', type: 'number', nullable: true })
  totalWeight: number | null;

  @Column({ name: 'TOTVOLUME', type: 'number', nullable: true })
  totalVolume: number | null;

  @Column({ name: 'CODPRACA', type: 'number', nullable: true })
  regionId: number | null;

  @Column({ name: 'NUMITENS', type: 'number', nullable: true })
  itemCount: number | null;

  @Column({ name: 'CODEMITENTE', type: 'number', nullable: true })
  issuerId: number | null;

  @Column({ name: 'DTCANCEL', type: 'date', nullable: true })
  cancelDate: Date | null;

  @Column({ name: 'POSICAO', type: 'varchar2', nullable: true })
  position: string | null;

  @Column({ name: 'VLATEND', type: 'number', nullable: true })
  serviceValue: number | null;

  @Column({ name: 'OPERACAO', type: 'varchar2', nullable: true })
  operation: string | null;

  @Column({ name: 'NUMCAR', type: 'number', nullable: true })
  loadNumber: number | null;

  @Column({ name: 'CODCOB', type: 'varchar2', nullable: true })
  billingId: string | null;

  @Column({ name: 'HORA', type: 'number', nullable: true })
  hour: number | null;

  @Column({ name: 'MINUTO', type: 'number', nullable: true })
  minute: number | null;

  @Column({ name: 'NUMSEQENTREGA', type: 'number', nullable: true })
  deliverySequenceAndr: number | null;

  @Column({ name: 'CUSTOENTREGA', type: 'number', nullable: true })
  deliveryCost: number | null;

  @Column({ name: 'CODSUPERVISOR', type: 'number', nullable: true })
  supervisorId: number | null;

  @Column({ name: 'CAMPANHA', type: 'varchar2', nullable: true })
  campaign: string | null;

  @Column({ name: 'NUMPEDCLI', type: 'varchar2', nullable: true })
  customerOrderNumber: string | null;

  @Column({ name: 'CONDVENDA', type: 'number', nullable: true })
  saleCondition: number | null;

  @Column({ name: 'PERCVENDA', type: 'number', nullable: true })
  salePercent: number | null;

  @Column({ name: 'OBS1', type: 'varchar2', nullable: true })
  observation1: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', nullable: true })
  observation2: string | null;

  @Column({ name: 'PERDESC', type: 'number', nullable: true })
  discountPercent: number | null;

  @Column({ name: 'NEGOCIADO', type: 'varchar2', nullable: true })
  negotiated: string | null;

  @Column({ name: 'CODUNIDADEEXECUTORA', type: 'varchar2', nullable: true })
  executingUnitId: string | null;

  @Column({ name: 'DTLIMITEFAT', type: 'date', nullable: true })
  billinglimitDate: Date | null;

  @Column({ name: 'NUMTRANSACAOTRANSF', type: 'number', nullable: true })
  transferTransactionNumber: number | null;

  @Column({ name: 'NUMCCF', type: 'number', nullable: true })
  ccfNumber: number | null;

  @Column({ name: 'C', type: 'varchar2', nullable: true, default: 'VV' })
  c: string | null;

  @Column({ name: 'DTEXPORTACAOWMS', type: 'date', nullable: true })
  wmsExportDate: Date | null;

  @Column({ name: 'DTIMPORTACAOWMS', type: 'date', nullable: true })
  wmsImportDate: Date | null;

  @Column({ name: 'CODFUNCLIBDESC', type: 'number', nullable: true })
  discountReleaseEmployeeId: number | null;

  @Column({ name: 'PERDESCLIB', type: 'number', nullable: true })
  releasedDiscountPercent: number | null;

  @Column({ name: 'FORNECENTREGA', type: 'varchar2', nullable: true })
  deliverySupplier: string | null;

  @Column({ name: 'ROTINALANC', type: 'varchar2', nullable: true })
  entryRoutine: string | null;

  @Column({ name: 'ROTINALANCULTALT', type: 'varchar2', nullable: true })
  lastChangeEntryRoutine: string | null;

  @Column({ name: 'RESERVAESTOQUETV7', type: 'varchar2', nullable: true })
  tv7StockReserve: string | null;

  @Column({ name: 'ALTAPOSMAPASEP', type: 'varchar2', nullable: true })
  sepMapPosChange: string | null;

  @Column({ name: 'CODPLPAGETICO', type: 'number', nullable: true })
  ethicalPaymentPlanId: number | null;

  @Column({ name: 'CODPLPAGGENERICO', type: 'number', nullable: true })
  genericPaymentPlanId: number | null;

  @Column({ name: 'CODCLITV8', type: 'number', nullable: true })
  tv8CustomerId: number | null;

  @Column({ name: 'DTINICIODIGITACAOPEDIDO', type: 'date', nullable: true })
  orderTypingStartDate: Date | null;

  @Column({ name: 'DTFIMDIGITACAOPEDIDO', type: 'date', nullable: true })
  orderTypingEndDate: Date | null;

  @Column({ name: 'TIPOFV', type: 'varchar2', nullable: true })
  fvType: string | null;

  @Column({ name: 'MOTORISTAVEICULO', type: 'varchar2', nullable: true })
  vehicleDriver: string | null;

  @Column({ name: 'UFVEICULO', type: 'varchar2', nullable: true })
  vehicleUf: string | null;

  @Column({ name: 'DEVSIMBOLICA', type: 'varchar2', nullable: true })
  symbolicDev: string | null;

  @Column({ name: 'CODAUTORIZACAOTEFWEB', type: 'varchar2', nullable: true })
  webTefAuthCode: string | null;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', nullable: true })
  abatementDiscountValue: number | null;

  @Column({ name: 'TURNOENTREGA', type: 'varchar2', nullable: true })
  deliveryShift: string | null;

  @Column({ name: 'VENDAEXPORTACAO', type: 'varchar2', nullable: true })
  exportSale: string | null;

  @Column({ name: 'PEDIDOAVARIA', type: 'varchar2', nullable: true })
  damagedOrder: string | null;

  @Column({ name: 'IDAGRUPAMENTO', type: 'varchar2', nullable: true })
  groupingId: string | null;

  @Column({ name: 'NUMLISTA', type: 'number', nullable: true })
  listNumber: number | null;

  @Column({ name: 'AGRUPAMENTO', type: 'varchar2', nullable: true })
  grouping: string | null;

  @Column({ name: 'NUMTRANSVENDATV13', type: 'number', nullable: true })
  tv13SaleTransactionNumber: number | null;

  @Column({ name: 'PERDESCAVISTA', type: 'number', nullable: true })
  cashDiscountPercent: number | null;

  @Column({ name: 'PLPAGAVISTA', type: 'varchar2', nullable: true })
  cashPaymentPlan: string | null;

  @Column({ name: 'NUMPEDVANXML', type: 'varchar2', nullable: true })
  xmlVanOrderId: string | null;

  @Column({ name: 'TIPOEMISSAO', type: 'varchar2', nullable: true })
  issueType: string | null;

  @Column({ name: 'CONTINGENCIATV14', type: 'varchar2', nullable: true })
  tv14Contingency: string | null;

  @Column({ name: 'CHAVENFE', type: 'varchar2', nullable: true })
  nfeKey: string | null;

  @Column({ name: 'NUMPEDTV14', type: 'number', nullable: true })
  tv14OrderId: number | null;

  @Column({ name: 'CODENDENTCLI', type: 'number', nullable: true })
  customerDeliveryAddressId: number | null;

  @Column({ name: 'NUMPEDAGRUPADO', type: 'number', nullable: true })
  groupedOrderId: number | null;

  @Column({ name: 'NUMVIASPEDAGRUPADO', type: 'number', nullable: true })
  groupedOrderCopiesNumber: number | null;

  @Column({ name: 'ENVIADOCOMPRA', type: 'varchar2', nullable: true })
  sentPurchase: string | null;

  @Column({ name: 'ENVIADOVENDA', type: 'varchar2', nullable: true })
  sentSale: string | null;

  @Column({ name: 'JUSTIFICATIVACONTIGENCIA', type: 'varchar2', nullable: true })
  contingencyJustification: string | null;

  @Column({ name: 'DTAHORAENTRADACONTIGENCIA', type: 'date', nullable: true })
  contingencyEntryDateTime: Date | null;

  @Column({ name: 'VLTRIBUTOS', type: 'number', nullable: true })
  taxesValue: number | null;

  @Column({ name: 'VLDESCONTOCUPOM', type: 'number', nullable: true })
  couponDiscountValue: number | null;

  @Column({ name: 'CARTAODOTZ', type: 'varchar2', nullable: true })
  dotzCard: string | null;

  @Column({ name: 'HORAEMISSAO', type: 'varchar2', nullable: true })
  issueHour: string | null;

  @Column({ name: 'UTILIZAVENDAPOREMBALAGEM', type: 'varchar2', nullable: true })
  usePackagingSale: string | null;

  @Column({ name: 'CONSUMIUNUMNFE', type: 'varchar2', nullable: true })
  consumedNfeNumber: string | null;

  @Column({ name: 'NSUSOCIOTORCEDOR', type: 'varchar2', nullable: true })
  supporterPartnerNsu: string | null;

  @Column({ name: 'VLDESCSOCIOTORCEDOR', type: 'number', nullable: true })
  supporterPartnerDiscountValue: number | null;

  @Column({ name: 'LATITUDE', type: 'varchar2', nullable: true })
  latitude: string | null;

  @Column({ name: 'LONGITUDE', type: 'varchar2', nullable: true })
  longitude: string | null;

  @Column({ name: 'PRECISAOLATLNG', type: 'number', nullable: true })
  precisaolatlng: number | null;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', nullable: true })
  medPromotionId: number | null;

  @Column({ name: 'IDTIPOPRESENCA', type: 'varchar2', nullable: true })
  presenceTypeId: string | null;

  @Column({ name: 'VLSUBTOTAL', type: 'number', nullable: true })
  subtotalValue: number | null;

  @Column({ name: 'NUMREGEXP', type: 'number', nullable: true })
  regExpNumber: number | null;

  @Column({ name: 'NUMCHAVEEXP', type: 'varchar2', nullable: true })
  expKeyNumber: string | null;

  @Column({ name: 'NUMDRAWBACK', type: 'number', nullable: true })
  drawbackNumber: number | null;

  @Column({ name: 'CODCONTATO', type: 'number', nullable: true })
  contactId: number | null;

  @Column({ name: 'LIBERA_RETAGUARDA', type: 'varchar2', nullable: true })
  backofficeRelease: string | null;

  @Column({ name: 'CODFUNCLIBEROURET', type: 'number', nullable: true })
  returnReleaseEmployeeId: number | null;

  @Column({ name: 'DATALIBEROURET', type: 'date', nullable: true })
  releaseOrReturnDate: Date | null;

  @Column({ name: 'CODMOEDAESTRANGEIRA', type: 'number', nullable: true })
  foreignCurrencyId: number | null;

  @Column({ name: 'VLRMOEDAESTRANGEIRA', type: 'number', nullable: true })
  foreignCurrencyValue: number | null;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'number', nullable: true })
  realCurrencyRateCase: number | null;

  @Column({ name: 'AMBIENTENFCE', type: 'varchar2', nullable: true })
  nfceEnvironment: string | null;

  @Column({ name: 'VERSAOFATURAMENTO', type: 'varchar2', nullable: true })
  billingVersion: string | null;

  @Column({ name: 'DOCEMISSAO', type: 'varchar2', nullable: true })
  issueDoc: string | null;

  @Column({ name: 'QRCODENFCE', type: 'varchar2', nullable: true })
  nfceQrCode: string | null;

  @Column({ name: 'CHAVENFCE', type: 'varchar2', nullable: true })
  nfceKey: string | null;

  @Column({ name: 'CODMOEDAESTRANGEIRAORIGINAL', type: 'number', nullable: true })
  originalForeignCurrencyId: number | null;

  @Column({ name: 'PEDIDOPAGOECOMMERCE', type: 'varchar2', nullable: true })
  ecommercePaidOrder: string | null;

  @Column({ name: 'CODFRETE', type: 'number', nullable: true })
  freightId: number | null;

  @Column({ name: 'COLUNAFRETE', type: 'number', nullable: true })
  freightColumn: number | null;

  @Column({ name: 'NUMFORMULARIO', type: 'number', nullable: true })
  formNumber: number | null;

  @Column({ name: 'NUMSELO', type: 'varchar2', nullable: true })
  sealNumber: string | null;

  @Column({ name: 'NUMCIRURGIA', type: 'number', nullable: true })
  surgeryNumber: number | null;

  @Column({ name: 'NUMFECHAMENTOMOVCX', type: 'number', nullable: true })
  cashMovClosingNumber: number | null;

  @Column({ name: 'DTMOVIMENTOCX', type: 'date', nullable: true })
  cashMovDate: Date | null;

  @Column({ name: 'CODBANCOCM', type: 'number', nullable: true })
  cmBankId: number | null;

  @Column({ name: 'VENDANFSERIED', type: 'varchar2', nullable: true })
  nfSeriesDSale: string | null;

  @Column({ name: 'EMITIRCUPOMFISCAL', type: 'varchar2', nullable: true })
  issueFiscalCoupon: string | null;

  @Column({ name: 'NUMSERIESAT', type: 'varchar2', nullable: true })
  satSeriesNumber: string | null;

  @Column({ name: 'DATAHORAEMISSAOSAT', type: 'date', nullable: true })
  satIssueDateTime: Date | null;

  @Column({ name: 'CHAVESAT', type: 'varchar2', nullable: true })
  satKey: string | null;

  @Column({ name: 'NUMSEQRETORNO1', type: 'number', nullable: true })
  return1SeqNumber: number | null;

  @Column({ name: 'NUMSEQRETORNO2', type: 'number', nullable: true })
  return2SeqNumber: number | null;

  @Column({ name: 'USAINTEGRACAOWMS', type: 'varchar2', nullable: true })
  useWmsIntegrator: string | null;

  @Column({ name: 'CODFUNCEXPINTWMS', type: 'number', nullable: true })
  wmsIntExportEmployeeId: number | null;

  @Column({ name: 'CODFUNCIMPINTWMS', type: 'number', nullable: true })
  wmsIntImportEmployeeId: number | null;

  @Column({ name: 'DTIMPORTACAO', type: 'date', nullable: true })
  importDate: Date | null;

  @Column({ name: 'NUMLOTEINTWMS', type: 'number', nullable: true })
  wmsIntBatchNumber: number | null;

  @Column({ name: 'RESTRICAOTRANSPORTE', type: 'varchar2', nullable: true })
  transportRestriction: string | null;

  @Column({ name: 'VENDAASSISTIVA', type: 'varchar2', nullable: true })
  assistiveSale: string | null;

  @Column({ name: 'TOTPESOLIQ', type: 'number', nullable: true })
  totalNetWeight: number | null;

  @Column({ name: 'NUMORCAPRINC', type: 'number', nullable: true })
  mainQuoteNumber: number | null;

  @Column({ name: 'CODENDENT', type: 'number', nullable: true })
  deliveryAddressId: number | null;

  @Column({ name: 'USACFOPVENDANATV10', type: 'varchar2', nullable: true })
  useTv10SaleCfop: string | null;

  @Column({ name: 'GERARDADOSNFPAULISTA', type: 'varchar2', nullable: true })
  generateNfPaulistaData: string | null;

  @Column({ name: 'DTINICIALPEND', type: 'date', nullable: true })
  pendingStartDate: Date | null;

  @Column({ name: 'DTFINALPEND', type: 'date', nullable: true })
  pendingEndDate: Date | null;

  @Column({ name: 'VERSAOROTINA', type: 'varchar2', nullable: true })
  routineVersion: string | null;

  @Column({ name: 'PEDDUPLICADO', type: 'varchar2', nullable: true })
  duplicatedOrder: string | null;

  @Column({ name: 'TIPOPRIORIDADEENTREGA', type: 'varchar2', nullable: true })
  deliveryPriorityType: string | null;

  @Column({ name: 'TOTPESOLIQAGRUPADO', type: 'number', nullable: true })
  totalGroupedNetWeight: number | null;

  @Column({ name: 'TOTPESOAGRUPADO', type: 'number', nullable: true })
  totalGroupedWeight: number | null;

  @Column({ name: 'TOTVOLUMEAGRUPADO', type: 'number', nullable: true })
  totalGroupedVolume: number | null;

  @Column({ name: 'NUMPEDORIGEMFRETE', type: 'number', nullable: true })
  freightOriginOrderId: number | null;

  @Column({ name: 'LOCALIZACAOPEDIDO', type: 'varchar2', nullable: true })
  orderLocation: string | null;

  @Column({ name: 'SUBSERIE', type: 'varchar2', nullable: true })
  subSeries: string | null;

  @Column({ name: 'PERCFRETE', type: 'number', nullable: true })
  freightPercent: number | null;

  @Column({ name: 'BRINDE', type: 'varchar2', nullable: true })
  gift: string | null;

  @Column({ name: 'USACREDRCA', type: 'varchar2', nullable: true })
  useRcaCredit: string | null;

  @Column({ name: 'USADEBCREDRCA', type: 'varchar2', nullable: true })
  useRcaCreditDebit: string | null;

  @Column({ name: 'BONIFICALTDEBCREDRCA', type: 'varchar2', nullable: true })
  bonusRcaCreditDebitChange: string | null;

  @Column({ name: 'TROCAALTDEBCREDRCA', type: 'varchar2', nullable: true })
  changeRcaCreditDebitExch: string | null;

  @Column({ name: 'BROKERALTDEBCREDRCA', type: 'varchar2', nullable: true })
  brokerRcaCreditDebitChange: string | null;

  @Column({ name: 'CRMALTDEBCREDRCA', type: 'varchar2', nullable: true })
  crmRcaCreditDebitChange: string | null;

  @Column({ name: 'TIPOMOVCCRCA', type: 'varchar2', nullable: true, default: 'VV' })
  rcaCcMovType: string | null;

  @Column({ name: 'NUMVOLUMEAGRUPADO', type: 'number', nullable: true })
  groupedVolumeNumber: number | null;

  @Column({ name: 'ESPECIEVOLUME', type: 'varchar2', nullable: true })
  volumeSpecies: string | null;

  @Column({ name: 'MARCAVOLUME', type: 'varchar2', nullable: true })
  volumeBrand: string | null;

  @Column({ name: 'NUMCARANTERIOR', type: 'number', nullable: true })
  previousLoadNumber: number | null;

  @Column({ name: 'CODPRACADESTINO', type: 'number', nullable: true })
  destRegionId: number | null;

  @Column({ name: 'GERARCONTROLEDEENTREGA', type: 'varchar2', nullable: true })
  generateDeliveryControl: string | null;

  @Column({ name: 'DTCONFGARANTIA', type: 'date', nullable: true })
  guaranteeCheckDate: Date | null;

  @Column({ name: 'CODFUNCCONFGARANTIA', type: 'number', nullable: true })
  codfuncconfgarantiaId: number | null;

  @Column({ name: 'CODIGOSAZONALIDADE', type: 'number', nullable: true })
  seasonalityCode: number | null;

  @Column({ name: 'ROTINA', type: 'varchar2', nullable: true })
  routine: string | null;

  @Column({ name: 'CODUSUR4', type: 'number', nullable: true })
  representative4Id: number | null;

  @Column({ name: 'CODTRANSP', type: 'number', nullable: true })
  carrierId: number | null;

  @Column({ name: 'NUMPEDTV1', type: 'number', nullable: true })
  tv1OrderId: number | null;

  @Column({ name: 'RECARGA', type: 'varchar2', nullable: true })
  recharge: string | null;

  @Column({ name: 'CODAUTORIZACAOTEF', type: 'number', nullable: true })
  tefAuthCode: number | null;

  @Column({ name: 'NSUTEF', type: 'varchar2', nullable: true })
  tefNsu: string | null;

  @Column({ name: 'CODADMCARTAO', type: 'varchar2', nullable: true })
  cardAdminId: string | null;

  @Column({ name: 'PROTOCOLONFP', type: 'varchar2', nullable: true })
  nfpProtocol: string | null;

  @Column({ name: 'NUMPESO', type: 'number', nullable: true })
  weightNumber: number | null;

  @Column({ name: 'CODFUNCSEP', type: 'number', nullable: true })
  pickerEmployeeId: number | null;

  @Column({ name: 'USASALDOCONTACORRENTEDESCFIN', type: 'varchar2', nullable: true })
  useFinDescCheckingAccountBal: string | null;

  @Column({ name: 'BLOQUEIOSALDOCCDESCFIN', type: 'varchar2', nullable: true })
  finDescBalanceBlock: string | null;

  @Column({ name: 'INTEGRADORA', type: 'number', nullable: true })
  integrator: number | null;

  @Column({ name: 'VALORDESCFIN', type: 'number', nullable: true })
  financialDiscountValue: number | null;

  @Column({ name: 'TIPODOCUMENTO', type: 'varchar2', nullable: true })
  documentType: string | null;

  @Column({ name: 'CODVISITA', type: 'number', nullable: true })
  visitId: number | null;

  @Column({ name: 'NUMVIASETIQUETA', type: 'number', nullable: true })
  labelCopiesNumber: number | null;

  @Column({ name: 'VENDATRIANGULAR', type: 'varchar2', nullable: true })
  triangularSale: string | null;

  @Column({ name: 'CODMOTIVO2', type: 'number', nullable: true })
  reason2Id: number | null;

  @Column({ name: 'BLOQFINANCEIRO', type: 'varchar2', nullable: true })
  financialBlock: string | null;

  @Column({ name: 'BLOQCOMERCIAL', type: 'varchar2', nullable: true })
  commercialBlock: string | null;

  @Column({ name: 'VLENTRADA', type: 'number', nullable: true })
  entryValue: number | null;

  @Column({ name: 'VLFRETERETIDO', type: 'number', nullable: true })
  retainedFreightValue: number | null;

  @Column({ name: 'VLSTFRETERETIDO', type: 'number', nullable: true })
  retainedFreightStValue: number | null;

  @Column({ name: 'PERCFRETERETIDO', type: 'number', nullable: true })
  retainedFreightPercent: number | null;

  @Column({ name: 'PERCSTFRETERETIDO', type: 'number', nullable: true })
  retainedFreightStPercent: number | null;

  @Column({ name: 'PRAZOMEDIOPLPAG', type: 'number', nullable: true })
  payPlanAverageTerm: number | null;

  @Column({ name: 'DTLIBERA2', type: 'date', nullable: true })
  release2Date: Date | null;

  @Column({ name: 'CODFUNCLIBERA2', type: 'number', nullable: true })
  release2EmployeeId: number | null;

  @Column({ name: 'UFDESEMBARACO', type: 'varchar2', nullable: true })
  clearanceUf: string | null;

  @Column({ name: 'LOCALDESEMBARACO', type: 'varchar2', nullable: true })
  clearancePlace: string | null;

  @Column({ name: 'CUSTOBONIFICACAO', type: 'varchar2', nullable: true })
  bonusCost: string | null;

  @Column({ name: 'CODFORNECBONIFIC', type: 'number', nullable: true })
  bonusSupplierId: number | null;

  @Column({ name: 'CODBNF', type: 'number', nullable: true })
  bnfCode: number | null;

  @Column({ name: 'PERCSALDORESERVARCA', type: 'number', nullable: true })
  rcaReserveBalancePercent: number | null;

  @Column({ name: 'PLACAVEICULO', type: 'varchar2', nullable: true })
  vehiclePlate: string | null;

  @Column({ name: 'SOFTNUMLANC', type: 'varchar2', nullable: true })
  softEntryNum: string | null;

  @Column({ name: 'OBSENTREGA4', type: 'varchar2', nullable: true })
  deliveryObservation4: string | null;

  @Column({ name: 'CFOPBNFDEGUSTA', type: 'number', nullable: true })
  tastingBnfCfop: number | null;

  @Column({ name: 'CONTAORDEM', type: 'varchar2', nullable: true })
  orderAccount: string | null;

  @Column({ name: 'LOG', type: 'varchar2', nullable: true })
  log: string | null;

  @Column({ name: 'LOG1', type: 'varchar2', nullable: true })
  log1: string | null;

  @Column({ name: 'LOG2', type: 'varchar2', nullable: true })
  log2: string | null;

  @Column({ name: 'LOG3', type: 'varchar2', nullable: true })
  log3: string | null;

  @Column({ name: 'LOG4', type: 'varchar2', nullable: true })
  log4: string | null;

  @Column({ name: 'CODPOSTAGEM', type: 'varchar2', nullable: true })
  postageId: string | null;

  @Column({ name: 'DATAEMPENHO', type: 'date', nullable: true })
  commitmentDate: Date | null;

  @Column({ name: 'PERMITEFATURARCOMWMSPEND', type: 'varchar2', nullable: true, default: 'N' })
  permitefaturarcomwmspend: string | null;

  @Column({ name: 'DESCINTERMEDIADOR', type: 'varchar2', nullable: true })
  intermediaryDescription: string | null;

  @Column({ name: 'CNPJINTERMEDIADOR', type: 'varchar2', nullable: true })
  intermediaryCnpj: string | null;

  @Column({ name: 'OPERVENDAEXPINDIRETA', type: 'varchar2', nullable: true })
  indirectExpSaleOper: string | null;

  @Column({ name: 'DESFEZKITCANC', type: 'varchar2', nullable: true })
  undidCancelKit: string | null;

  @Column({ name: 'DTINITRANSACAODIG', type: 'date', nullable: true })
  digTransStartDate: Date | null;

  @Column({ name: 'DTITERACAOTRANSACAODIG', type: 'date', nullable: true })
  digTransIterationDate: Date | null;

  @Column({ name: 'STATUSTRANSACAODIG', type: 'varchar2', nullable: true })
  digTransactionStatus: string | null;

  @Column({ name: 'JSONTPD_PAGAMENTO', type: 'blob', nullable: true })
  paymentTpdJson: Buffer | null;

  @Column({ name: 'BLOQUEIOSUPPLIER', type: 'varchar2', nullable: true, default: 'N' })
  supplierBlock: string | null;

  @Column({ name: 'ESC_IDCOTACAOFRETE', type: 'varchar2', nullable: true })
  freightQuoteId: string | null;

  @Column({ name: 'DESTACARICMSDEVSIMBOLICA', type: 'varchar2', nullable: true })
  highlightSymbolicDevIcms: string | null;

  @Column({ name: 'CODIGORASTREIOFRETEVENDA', type: 'varchar2', nullable: true })
  trackingCodeSaleFreight: string | null;

  @Column({ name: 'TIB_IDCOTACAO', type: 'varchar2', nullable: true })
  tibQuoteId: string | null;

  @Column({ name: 'TIB_ORDEMCOTACAO', type: 'number', nullable: true })
  tibQuoteOrder: number | null;

  @Column({ name: 'ORIGEMINTEGRACAO', type: 'varchar2', nullable: true })
  integrationOrigin: string | null;

  @Column({ name: 'NUMPEDBNFTV14', type: 'number', nullable: true })
  tv14BnfOrderId: number | null;

  @Column({ name: 'TIPOEXPEDICAOCESTABASICA', type: 'varchar2', nullable: true })
  basicBasketDispatchType: string | null;

  @Column({ name: 'CODAUTORIZACAOTEF1', type: 'varchar2', nullable: true })
  tefAuthCode1: string | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsChangeDate: Date | null;

  @Column({ name: 'VLST', type: 'number', nullable: true })
  stValue: number | null;

  @Column({ name: 'BAIXAESTCLI', type: 'varchar2', nullable: true })
  customerStockWriteOff: string | null;

  @Column({ name: 'CODSUPERVISOR2', type: 'number', nullable: true })
  supervisor2Id: number | null;

  @Column({ name: 'CODSUPERVISOR3', type: 'number', nullable: true })
  supervisor3Id: number | null;

  @Column({ name: 'NUMTRANSWMS', type: 'number', nullable: true })
  wmsTransactionNumber: number | null;

  @Column({ name: 'TIPOCFOPTV4', type: 'varchar2', nullable: true, default: 'OS' })
  cfopTv4Type: string | null;

  @Column({ name: 'PRAZOPONDERADO', type: 'varchar2', nullable: true, default: 'N' })
  weightedTerm: string | null;

  @Column({ name: 'DTEMISSAOMAPA', type: 'date', nullable: true })
  mapIssueDate: Date | null;

  @Column({ name: 'HORAEMISSAOMAPA', type: 'number', nullable: true })
  mapIssueHour: number | null;

  @Column({ name: 'MINUTOEMISSAOMAPA', type: 'number', nullable: true })
  mapIssueMinute: number | null;

  @Column({ name: 'DATAPROTOCOLO', type: 'date', nullable: true })
  protocolDate: Date | null;

  @Column({ name: 'HORAPROTOCOLO', type: 'number', nullable: true })
  protocolHour: number | null;

  @Column({ name: 'MINUTOPROTOCOLO', type: 'number', nullable: true })
  protocolMinute: number | null;

  @Column({ name: 'CODFUNCPROTOCOLO', type: 'number', nullable: true })
  protocolEmployeeId: number | null;

  @Column({ name: 'NUMSEQCORREIO', type: 'number', nullable: true })
  mailSeqNumber: number | null;

  @Column({ name: 'NUMCONTRATOCORREIO', type: 'number', nullable: true })
  mailContractNumber: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', nullable: true })
  bonusValue: number | null;

  @Column({ name: 'NUMORDEMCARGA', type: 'number', nullable: true })
  loadOrderNumber: number | null;

  @Column({ name: 'OBSFRETENF1', type: 'varchar2', nullable: true })
  freightObservation1: string | null;

  @Column({ name: 'OBSFRETENF2', type: 'varchar2', nullable: true })
  freightObservation2: string | null;

  @Column({ name: 'OBSFRETENF3', type: 'varchar2', nullable: true })
  freightObservation3: string | null;

  @Column({ name: 'ALIQICMSFRETENF', type: 'number', nullable: true })
  invoiceFreightIcmsRate: number | null;

  @Column({ name: 'BASEICMSFRETENF', type: 'number', nullable: true })
  invoiceFreightIcmsBase: number | null;

  @Column({ name: 'VLICMSFRETENF', type: 'number', nullable: true })
  invoiceFreightIcmsValue: number | null;

  @Column({ name: 'DTINICIALCHECKOUT', type: 'date', nullable: true })
  checkoutStartDate: Date | null;

  @Column({ name: 'DTFINALCHECKOUT', type: 'date', nullable: true })
  checkoutEndDate: Date | null;

  @Column({ name: 'CODFUNCEMISSAOMAPA', type: 'number', nullable: true })
  mapIssueEmployeeId: number | null;

  @Column({ name: 'DTVALIDADE', type: 'date', nullable: true })
  expirationDate: Date | null;

  @Column({ name: 'CODCLINF', type: 'number', nullable: true })
  nfeCustomerId: number | null;

  @Column({ name: 'NUMPEDVALE', type: 'number', nullable: true })
  valeOrderId: number | null;

  @Column({ name: 'DATAPEDCLI', type: 'date', nullable: true })
  customerOrderDate: Date | null;

  @Column({ name: 'DTABERTURAPEDPALM', type: 'date', nullable: true })
  palmOrderOpenDate: Date | null;

  @Column({ name: 'DTFECHAMENTOPEDPALM', type: 'date', nullable: true })
  palmOrderCloseDate: Date | null;

  @Column({ name: 'NUMCARAUX', type: 'number', nullable: true })
  auxLoadNumber: number | null;

  @Column({ name: 'NUMNOTATRANSFDEP', type: 'number', nullable: true })
  depTransfInvoiceNumber: number | null;

  @Column({ name: 'CODCONDICAOVENDA', type: 'number', nullable: true })
  saleConditionId: number | null;

  @Column({ name: 'TOTVLDESCFIN', type: 'number', nullable: true })
  totalFinDiscountValue: number | null;

  @Column({ name: 'TOTVLDESCCOM', type: 'number', nullable: true })
  totalComDiscountValue: number | null;

  @Column({ name: 'TOTVLBONIFIC', type: 'number', nullable: true })
  totalBonusValue: number | null;

  @Column({ name: 'TOTVLDESCFLEX', type: 'number', nullable: true })
  totalFlexDiscountValue: number | null;

  @Column({ name: 'TOTVLREDCOMISS', type: 'number', nullable: true })
  totalComReductionValue: number | null;

  @Column({ name: 'IMPORTACUPOM', type: 'number', nullable: true })
  importCoupon: number | null;

  @Column({ name: 'DTAGENDAENTREGA', type: 'date', nullable: true })
  deliveryScheduleDate: Date | null;

  @Column({ name: 'EANCOMPRADOR', type: 'number', nullable: true })
  buyerEan: number | null;

  @Column({ name: 'EANLOCALENTREGA', type: 'number', nullable: true })
  deliveryPlaceEan: number | null;

  @Column({ name: 'NUMPEDECF', type: 'number', nullable: true })
  ecfOrderId: number | null;

  @Column({ name: 'NUMPEDBNF', type: 'number', nullable: true })
  bnfOrderId: number | null;

  @Column({ name: 'NUMREGIAO', type: 'number', nullable: true })
  regionNumber: number | null;

  @Column({ name: 'CONCILIAIMPORTACAO', type: 'varchar2', nullable: true })
  importReconciliation: string | null;

  @Column({ name: 'PAGTOANTECIPADO', type: 'varchar2', nullable: true })
  advancedPayment: string | null;

  @Column({ name: 'PERDESCFIN', type: 'number', nullable: true })
  financialDiscountPercent: number | null;

  @Column({ name: 'CODCLIRECEBEDOR', type: 'number', nullable: true })
  receiverCustomerId: number | null;

  @Column({ name: 'NUMCAIXAFISCAL', type: 'number', nullable: true })
  fiscalCashierNumber: number | null;

  @Column({ name: 'MOTIVOPOSICAO', type: 'varchar2', nullable: true })
  positionReason: string | null;

  @Column({ name: 'PRONTAENTREGA', type: 'varchar2', nullable: true })
  readyDelivery: string | null;

  @Column({ name: 'IMPORTADO', type: 'varchar2', nullable: true })
  imported: string | null;

  @Column({ name: 'DTEXPORTADO', type: 'date', nullable: true })
  exportedDate: Date | null;

  @Column({ name: 'DTIMPORTADO', type: 'date', nullable: true })
  importedDate: Date | null;

  @Column({ name: 'NUMCARFAB', type: 'number', nullable: true })
  factoryLoadNumber: number | null;

  @Column({ name: 'NUMTABELA', type: 'varchar2', nullable: true })
  tableNumber: string | null;

  @Column({ name: 'CODESTABELECIMENTO', type: 'varchar2', nullable: true })
  establishmentId: string | null;

  @Column({ name: 'BROKER', type: 'varchar2', nullable: true })
  broker: string | null;

  @Column({ name: 'RESTRICAOTRANSP', type: 'varchar2', nullable: true, default: 'N' })
  carrierRestriction: string | null;

  @Column({ name: 'NUMSEQROTA', type: 'number', nullable: true })
  routeSeqNumber: number | null;

  @Column({ name: 'CONFERINDOPEDIDO', type: 'varchar2', nullable: true })
  checkingOrder: string | null;

  @Column({ name: 'TOTVLREDCOMISSSUP', type: 'number', nullable: true })
  totalSupComReductionValue: number | null;

  @Column({ name: 'CODATENDIMENTO', type: 'number', nullable: true })
  serviceId: number | null;

  @Column({ name: 'TRIBUTAPORREGIAOFILIAL', type: 'varchar2', nullable: true })
  taxByBranchRegion: string | null;

  @Column({ name: 'NUMECF', type: 'number', nullable: true })
  ecfNumber: number | null;

  @Column({ name: 'GERACP', type: 'varchar2', nullable: true, default: 'N' })
  generateCp: string | null;

  @Column({ name: 'RESERVARITENSTV7', type: 'varchar2', nullable: true })
  tv7ReserveItems: string | null;

  @Column({ name: 'NUMPREVENDA', type: 'number', nullable: true })
  preSaleNumber: number | null;

  @Column({ name: 'CODPROFISSIONAL', type: 'number', nullable: true })
  professionalId: number | null;

  @Column({ name: 'NUMORCAFILIAL', type: 'number', nullable: true })
  branchQuoteNumber: number | null;

  @Column({ name: 'TIPOFORMULARIONF', type: 'varchar2', nullable: true })
  nfFormType: string | null;

  @Column({ name: 'NUMPEDWEB', type: 'number', nullable: true })
  webOrderId: number | null;

  @Column({ name: 'CODVEICULO', type: 'varchar2', nullable: true })
  vehicleId: string | null;

  @Column({ name: 'NOMEARQUIVOFV', type: 'varchar2', nullable: true })
  fvFileName: string | null;

  @Column({ name: 'DTINICIALSEP', type: 'date', nullable: true })
  sepStartDate: Date | null;

  @Column({ name: 'DTFINALSEP', type: 'date', nullable: true })
  sepEndDate: Date | null;

  @Column({ name: 'TIPORETIRADA', type: 'varchar2', nullable: true })
  withdrawType: string | null;

  @Column({ name: 'IMPORTADOSERVPRINC', type: 'varchar2', nullable: true })
  importedMainService: string | null;

  @Column({ name: 'DTIMPORTACAOSERVPRINC', type: 'date', nullable: true })
  mainServiceImportDate: Date | null;

  @Column({ name: 'DTEXPORTACAOSERVINT', type: 'date', nullable: true })
  intServiceExportDate: Date | null;

  @Column({ name: 'EXPORTADOSERVINT', type: 'varchar2', nullable: true })
  exportedIntService: string | null;

  @Column({ name: 'PERCCOMPROFISSIONAL', type: 'number', nullable: true })
  professionalComPercent: number | null;

  @Column({ name: 'VENDAASSISTIDA', type: 'varchar2', nullable: true })
  assistedSale: string | null;

  @Column({ name: 'CODFORNECREDESPACHO', type: 'number', nullable: true })
  redispatchSupplierId: number | null;

  @Column({ name: 'DTCHEGADACLIENTE', type: 'date', nullable: true })
  customerArrivalDate: Date | null;

  @Column({ name: 'CODMOTIVO', type: 'number', nullable: true })
  reasonId: number | null;

  @Column({ name: 'BLOQUEIOEDICAO', type: 'varchar2', nullable: true })
  editingBlock: string | null;

  @Column({ name: 'DTEXPORTACAO', type: 'date', nullable: true })
  exportDate: Date | null;

  @Column({ name: 'NUMSEQENVIO', type: 'number', nullable: true })
  sendingSeqNumber: number | null;
}
