import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDC',
})
export class PcpedcEntity {
  @PrimaryColumn({ name: 'NUMPED', type: 'number', precision: 10, scale: 0, nullable: false })
  orderId: number;

  @Column({ name: 'CODPLPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  paymentPlanId: number | null;

  @Column({ name: 'CODFUNCCANCEL', type: 'number', precision: 8, scale: 0, nullable: true })
  codfunccancelId: number | null;

  @Column({ name: 'NUMTRANSVENDA', type: 'number', precision: 10, scale: 0, nullable: true })
  saleTransactionNumber: number | null;

  @Column({ name: 'MONTANDO', type: 'varchar2', length: 1, nullable: true })
  assembling: string | null;

  @Column({ name: 'NUMPEDRCA', type: 'number', precision: 10, scale: 0, nullable: true })
  rcaOrderId: number | null;

  @Column({ name: 'FRETEDESPACHO', type: 'varchar2', length: 1, nullable: true })
  dispatchFreight: string | null;

  @Column({ name: 'FRETEREDESPACHO', type: 'varchar2', length: 1, nullable: true })
  redispatchFreight: string | null;

  @Column({ name: 'CODFORNECFRETE', type: 'number', precision: 6, scale: 0, nullable: true })
  freightSupplierId: number | null;

  @Column({ name: 'TIPOCARGA', type: 'varchar2', length: 1, nullable: true })
  loadType: string | null;

  @Column({ name: 'PRAZO1', type: 'number', precision: 4, scale: 0, nullable: true })
  term1: number | null;

  @Column({ name: 'PRAZO2', type: 'number', precision: 4, scale: 0, nullable: true })
  term2: number | null;

  @Column({ name: 'PRAZO3', type: 'number', precision: 4, scale: 0, nullable: true })
  term3: number | null;

  @Column({ name: 'PRAZO4', type: 'number', precision: 4, scale: 0, nullable: true })
  term4: number | null;

  @Column({ name: 'PRAZO5', type: 'number', precision: 4, scale: 0, nullable: true })
  term5: number | null;

  @Column({ name: 'PRAZO6', type: 'number', precision: 4, scale: 0, nullable: true })
  term6: number | null;

  @Column({ name: 'PRAZO7', type: 'number', precision: 4, scale: 0, nullable: true })
  term7: number | null;

  @Column({ name: 'PRAZO8', type: 'number', precision: 4, scale: 0, nullable: true })
  term8: number | null;

  @Column({ name: 'PRAZO9', type: 'number', precision: 4, scale: 0, nullable: true })
  term9: number | null;

  @Column({ name: 'PRAZO10', type: 'number', precision: 4, scale: 0, nullable: true })
  term10: number | null;

  @Column({ name: 'PRAZO11', type: 'number', precision: 4, scale: 0, nullable: true })
  term11: number | null;

  @Column({ name: 'PRAZO12', type: 'number', precision: 4, scale: 0, nullable: true })
  term12: number | null;

  @Column({ name: 'PRAZOMEDIO', type: 'number', precision: 4, scale: 0, nullable: true })
  averageTerm: number | null;

  @Column({ name: 'OBSENTREGA1', type: 'varchar2', length: 75, nullable: true })
  deliveryObservation1: string | null;

  @Column({ name: 'OBSENTREGA2', type: 'varchar2', length: 75, nullable: true })
  deliveryObservation2: string | null;

  @Column({ name: 'OBSENTREGA3', type: 'varchar2', length: 75, nullable: true })
  deliveryObservation3: string | null;

  @Column({ name: 'CODEPTO', type: 'number', precision: 6, scale: 0, nullable: true })
  departmentId: number | null;

  @Column({ name: 'TIPOEMBALAGEM', type: 'varchar2', length: 1, nullable: true })
  packagingType: string | null;

  @Column({ name: 'DTLIBERA', type: 'date', nullable: true })
  releaseDate: Date | null;

  @Column({ name: 'CODMOTORISTA', type: 'number', precision: 8, scale: 0, nullable: true })
  driverId: number | null;

  @Column({ name: 'CODFILIALNF', type: 'varchar2', length: 2, nullable: true })
  invoiceBranchId: string | null;

  @Column({ name: 'DTNFTRANSF', type: 'date', nullable: true })
  transfNfDate: Date | null;

  @Column({ name: 'NUMNFTRANSF', type: 'number', precision: 10, scale: 0, nullable: true })
  transfNfNumber: number | null;

  @Column({ name: 'NUMCUPOM', type: 'number', precision: 10, scale: 0, nullable: true })
  couponNumber: number | null;

  @Column({ name: 'SERIEECF', type: 'varchar2', length: 2, nullable: true })
  ecfSeries: string | null;

  @Column({ name: 'CODMOTBLOQUEIO', type: 'number', precision: 8, scale: 0, nullable: true })
  blockReasonId: number | null;

  @Column({ name: 'CODMOTCANCEL', type: 'number', precision: 6, scale: 0, nullable: true })
  cancelReasonId: number | null;

  @Column({ name: 'TIPOOPER', type: 'varchar2', length: 1, nullable: true })
  operType: string | null;

  @Column({ name: 'CODDISTRIB', type: 'varchar2', length: 4, nullable: true })
  distribCode: string | null;

  @Column({ name: 'NUMVIASMAPASEP', type: 'number', precision: 2, scale: 0, nullable: true })
  sepMapCopiesNumber: number | null;

  @Column({ name: 'NUMVOLUME', type: 'number', precision: 8, scale: 0, nullable: true })
  volumeNumber: number | null;

  @Column({ name: 'NUMSEQENTR', type: 'number', precision: 4, scale: 0, nullable: true })
  deliverySeqNumber: number | null;

  @Column({ name: 'CODFUNCCX', type: 'number', precision: 8, scale: 0, nullable: true })
  cashierEmployeeId: number | null;

  @Column({ name: 'NUMCAIXA', type: 'number', precision: 4, scale: 0, nullable: true })
  boxNumber: number | null;

  @Column({ name: 'NUMNOTA', type: 'number', precision: 10, scale: 0, nullable: true })
  invoiceNumber: number | null;

  @Column({ name: 'VLCUSTOREP', type: 'number', precision: 14, scale: 2, nullable: true })
  replacementCostValue: number | null;

  @Column({ name: 'VLCUSTOCONT', type: 'number', precision: 14, scale: 2, nullable: true })
  accountingCostValue: number | null;

  @Column({ name: 'VLDESCNEG', type: 'number', precision: 12, scale: 2, nullable: true })
  negotiatedDiscountValue: number | null;

  @Column({ name: 'PERCDESCCANAL', type: 'number', precision: 8, scale: 2, nullable: true })
  channelDiscountPercent: number | null;

  @Column({ name: 'PERCDESCABC', type: 'number', precision: 8, scale: 2, nullable: true })
  abcDiscountPercent: number | null;

  @Column({ name: 'PERCDESCCLI', type: 'number', precision: 8, scale: 2, nullable: true })
  customerDiscountPercent: number | null;

  @Column({ name: 'PERCDESCNEG', type: 'number', precision: 8, scale: 2, nullable: true })
  negotiatedDiscountPercent: number | null;

  @Column({ name: 'NUMNOTAMANIF', type: 'number', precision: 10, scale: 0, nullable: true })
  manifestInvoiceNumber: number | null;

  @Column({ name: 'SERIEMANIF', type: 'varchar2', length: 3, nullable: true })
  manifestSeries: string | null;

  @Column({ name: 'ORIGEMPED', type: 'varchar2', length: 1, nullable: true })
  orderOrigin: string | null;

  @Column({ name: 'CODFORNECVDIRETO', type: 'number', precision: 6, scale: 0, nullable: true })
  directSaleSupplierId: number | null;

  @Column({ name: 'CODFUNCEXPARQOL', type: 'number', precision: 8, scale: 0, nullable: true })
  olFileExportEmployeeId: number | null;

  @Column({ name: 'DATAEXPARQOL', type: 'date', nullable: true })
  olFileExportDate: Date | null;

  @Column({ name: 'NUMSEQMONTAGEM', type: 'number', precision: 4, scale: 0, nullable: true })
  assemblySeqNumber: number | null;

  @Column({ name: 'EXPORTADO', type: 'varchar2', length: 1, nullable: true })
  exported: string | null;

  @Column({ name: 'ESPECIEMANIF', type: 'varchar2', length: 2, nullable: true })
  manifestSpecies: string | null;

  @Column({ name: 'EANENTREGA', type: 'number', precision: 14, scale: 0, nullable: true })
  deliveryEan: number | null;

  @Column({ name: 'EANCOBRANCA', type: 'number', precision: 14, scale: 0, nullable: true })
  billingEan: number | null;

  @Column({ name: 'CODFUNCCONF', type: 'number', precision: 8, scale: 0, nullable: true })
  checkerEmployeeId: number | null;

  @Column({ name: 'CODCONTRATO', type: 'number', precision: 6, scale: 0, nullable: true })
  contractId: number | null;

  @Column({ name: 'NUMPEDENTFUT', type: 'number', precision: 10, scale: 0, nullable: true })
  futureDelOrderId: number | null;

  @Column({ name: 'DTFAT', type: 'date', nullable: true })
  billingDate: Date | null;

  @Column({ name: 'CODFUNCLIBERA', type: 'number', precision: 8, scale: 0, nullable: true })
  releaserEmployeeId: number | null;

  @Column({ name: 'NUMVIASPEDIDO', type: 'number', precision: 2, scale: 0, nullable: true })
  orderCopiesNumber: number | null;

  @Column({ name: 'HORAFAT', type: 'number', precision: 2, scale: 0, nullable: true })
  billingHour: number | null;

  @Column({ name: 'MINUTOFAT', type: 'number', precision: 2, scale: 0, nullable: true })
  billingMinute: number | null;

  @Column({ name: 'NUMPEDTV3', type: 'number', precision: 10, scale: 0, nullable: true })
  tv3OrderId: number | null;

  @Column({ name: 'NUMPEDORIGEM', type: 'number', precision: 10, scale: 0, nullable: true })
  originOrderId: number | null;

  @Column({ name: 'CODFUNCEMBALADOR', type: 'number', precision: 8, scale: 0, nullable: true })
  packerEmployeeId: number | null;

  @Column({ name: 'NUMNOTACONSIG', type: 'number', precision: 10, scale: 0, nullable: true })
  consigInvoiceNumber: number | null;

  @Column({ name: 'PEDIDOEMBALADO', type: 'varchar2', length: 8, nullable: true })
  packedOrder: string | null;

  @Column({ name: 'NUMSERIEEQUIP', type: 'varchar2', length: 30, nullable: true })
  equipSeriesNumber: string | null;

  @Column({ name: 'NUMORCA', type: 'number', precision: 10, scale: 0, nullable: true })
  quoteNumber: number | null;

  @Column({ name: 'NUMCARMANIF', type: 'number', precision: 8, scale: 0, nullable: true })
  manifestLoadNumber: number | null;

  @Column({ name: 'CODUSUR2', type: 'number', precision: 6, scale: 0, nullable: true })
  representative2Id: number | null;

  @Column({ name: 'CODUSUR3', type: 'number', precision: 6, scale: 0, nullable: true })
  representative3Id: number | null;

  @Column({ name: 'HORAINICIALSEP', type: 'number', precision: 2, scale: 0, nullable: true })
  sepStartHour: number | null;

  @Column({ name: 'MINUTOINICIALSEP', type: 'number', precision: 2, scale: 0, nullable: true })
  sepStartMinute: number | null;

  @Column({ name: 'HORAFINALSEP', type: 'number', precision: 2, scale: 0, nullable: true })
  sepEndHour: number | null;

  @Column({ name: 'MINUTOFINALSEP', type: 'number', precision: 2, scale: 0, nullable: true })
  sepEndMinute: number | null;

  @Column({ name: 'DTWMS', type: 'date', nullable: true })
  wmsDate: Date | null;

  @Column({ name: 'DTVENC1', type: 'date', nullable: true })
  dueDate1: Date | null;

  @Column({ name: 'DTVENC2', type: 'date', nullable: true })
  dueDate2: Date | null;

  @Column({ name: 'DTVENC3', type: 'date', nullable: true })
  dueDate3: Date | null;

  @Column({ name: 'NUMEMPENHO', type: 'varchar2', length: 20, nullable: true })
  commitmentNumber: string | null;

  @Column({ name: 'NUMPROCESSO', type: 'varchar2', length: 20, nullable: true })
  processNumber: string | null;

  @Column({ name: 'NUMFONTERECURSO', type: 'varchar2', length: 10, nullable: true })
  resourceSourceNumber: string | null;

  @Column({ name: 'CODFUNCCALCFRETE', type: 'number', precision: 8, scale: 0, nullable: true })
  freightCalcEmployeeId: number | null;

  @Column({ name: 'DTCALCFRETE', type: 'date', nullable: true })
  freightCalcDate: Date | null;

  @Column({ name: 'VLFRETENF', type: 'number', precision: 12, scale: 2, nullable: true })
  invoiceFreightValue: number | null;

  @Column({ name: 'PRAZOADICIONAL', type: 'number', precision: 4, scale: 0, nullable: true })
  additionalTerm: number | null;

  @Column({ name: 'HORALIBERA', type: 'number', precision: 2, scale: 0, nullable: true })
  releaseHour: number | null;

  @Column({ name: 'MINUTOLIBERA', type: 'number', precision: 2, scale: 0, nullable: true })
  releaseMinute: number | null;

  @Column({ name: 'CODCLICONSIGNACAO', type: 'number', precision: 6, scale: 0, nullable: true })
  consignmentCustomerId: number | null;

  @Column({ name: 'QRCODESAT', type: 'varchar2', length: 4000, nullable: true })
  satQrCode: string | null;

  @Column({ name: 'NUMSESSAOSAT', type: 'number', precision: 10, scale: 0, nullable: true })
  satSessionNumber: number | null;

  @Column({ name: 'CODSEFAZSAT', type: 'number', precision: 10, scale: 0, nullable: true })
  satSefazCode: number | null;

  @Column({ name: 'CODRETORNOSAT', type: 'number', precision: 10, scale: 0, nullable: true })
  satReturnCode: number | null;

  @Column({ name: 'PROTOCOLONFCE', type: 'varchar2', length: 50, nullable: true })
  nfceProtocol: string | null;

  @Column({ name: 'MELDATAEMISSAOPED', type: 'date', nullable: true })
  bestOrderIssueDate: Date | null;

  @Column({ name: 'VILDTSEPARACOMPLFIM', type: 'date', nullable: true })
  sepComplEndDate: Date | null;

  @Column({ name: 'VILDTSEPARACOMPLINI', type: 'date', nullable: true })
  sepComplStartDate: Date | null;

  @Column({ name: 'COLETAFRETE', type: 'varchar2', length: 1, nullable: true })
  freightPickup: string | null;

  @Column({ name: 'VLFRETETRANSP', type: 'number', precision: 18, scale: 6, nullable: true })
  carrierFreightValue: number | null;

  @Column({ name: 'VLFRETEEMPENTREGA', type: 'number', precision: 18, scale: 6, nullable: true })
  deliveryCompanyFreightValue: number | null;

  @Column({ name: 'OBSNFCE', type: 'varchar2', length: 4000, nullable: true })
  nfceObservation: string | null;

  @Column({ name: 'VLTOTALCOMTROCO', type: 'number', precision: 16, scale: 3, nullable: true })
  totalWithChangeValue: number | null;

  @Column({ name: 'VENDALOCESTRANG', type: 'varchar2', length: 1, nullable: true })
  foreignLocSale: string | null;

  @Column({ name: 'NUMCOLETA', type: 'varchar2', length: 20, nullable: true })
  pickupNumber: string | null;

  @Column({ name: 'TRANSPORTADORA', type: 'varchar2', length: 60, nullable: true })
  carrier: string | null;

  @Column({ name: 'CGCFRETE', type: 'varchar2', length: 18, nullable: true })
  freightCnpj: string | null;

  @Column({ name: 'IEFRETE', type: 'varchar2', length: 15, nullable: true })
  freightIe: string | null;

  @Column({ name: 'UFFRETE', type: 'varchar2', length: 2, nullable: true })
  freightUf: string | null;

  @Column({ name: 'CODDISP', type: 'number', precision: 5, scale: 0, nullable: true })
  dispCode: number | null;

  @Column({ name: 'VENDALOCALCLIEX', type: 'varchar2', length: 1, nullable: true })
  localExClientSale: string | null;

  @Column({ name: 'SITUACAOSAT', type: 'varchar2', length: 2, nullable: true })
  satStatus: string | null;

  @Column({ name: 'CODSTATUSSAT', type: 'number', precision: 10, scale: 0, nullable: true })
  satStatusCode: number | null;

  @Column({ name: 'USACREDRCATIPOBNF', type: 'varchar2', length: 1, nullable: true })
  useRcaCreditBnfType: string | null;

  @Column({ name: 'UIDREGISTRO', type: 'number', precision: 10, scale: 0, nullable: true })
  recordUid: number | null;

  @Column({ name: 'IDPARCEIRO', type: 'varchar2', length: 15, nullable: true })
  partnerId: string | null;

  @Column({ name: 'ASSINATURA', type: 'varchar2', length: 100, nullable: true })
  signature: string | null;

  @Column({ name: 'DATAEXPEDICAO', type: 'date', nullable: true })
  shippingDate: Date | null;

  @Column({ name: 'DATARETORNO', type: 'date', nullable: true })
  returnDate: Date | null;

  @Column({ name: 'DATASAIDA', type: 'date', nullable: true })
  exitDate: Date | null;

  @Column({ name: 'EXPORTACRM', type: 'number', precision: 10, scale: 0, nullable: true })
  crmExport: number | null;

  @Column({ name: 'MULTIPLICADORDUPLIC', type: 'number', precision: 18, scale: 6, nullable: true })
  duplicateMultiplier: number | null;

  @Column({ name: 'COPIAIDENTICAPEDDUP', type: 'varchar2', length: 1, nullable: true })
  duplicateOrderCopy: string | null;

  @Column({ name: 'TRIBVENDATRIANGULAR', type: 'varchar2', length: 1, nullable: true })
  triangularSaleTax: string | null;

  @Column({ name: 'VLTXENT', type: 'number', precision: 18, scale: 6, nullable: true })
  entryTaxValue: number | null;

  @Column({ name: 'NUMOS', type: 'number', precision: 6, scale: 0, nullable: true })
  soNumber: number | null;

  @Column({ name: 'VLOPERACAOFRETE', type: 'number', precision: 14, scale: 2, nullable: true })
  freightOperationValue: number | null;

  @Column({ name: 'VLBASESTFRETE', type: 'number', precision: 14, scale: 2, nullable: true })
  freightStBaseValue: number | null;

  @Column({ name: 'VLICMSSTFRETE', type: 'number', precision: 14, scale: 2, nullable: true })
  freightStIcmsValue: number | null;

  @Column({ name: 'PERCENTUALSTFRETE', type: 'number', precision: 14, scale: 2, nullable: true })
  freightStPercent: number | null;

  @Column({ name: 'CODEDITAL', type: 'number', precision: 9, scale: 0, nullable: true })
  biddingId: number | null;

  @Column({ name: 'CONDFINANC', type: 'varchar2', length: 9, nullable: true })
  financialCondition: string | null;

  @Column({ name: 'PLANOSUPPLI', type: 'number', precision: 2, scale: 0, nullable: true })
  suppliPlan: number | null;

  @Column({ name: 'PAGCHEQUEMORADIA', type: 'varchar2', length: 1, nullable: true })
  housingCheckPayment: string | null;

  @Column({ name: 'QTPARCELAS', type: 'number', precision: 3, scale: 0, nullable: true })
  installmentQuantity: number | null;

  @Column({ name: 'NSU', type: 'varchar2', length: 15, nullable: true })
  nsu: string | null;

  @Column({ name: 'CODAUTORIZACAO', type: 'number', precision: 20, scale: 0, nullable: true })
  authCode: number | null;

  @Column({ name: 'TIPOOPERACAOTEF', type: 'varchar2', length: 4, nullable: true })
  tefOperType: string | null;

  @Column({ name: 'CODBANDEIRATEF', type: 'varchar2', length: 5, nullable: true })
  tefBrandId: string | null;

  @Column({ name: 'EANCOBRANCAFATURA', type: 'number', precision: 13, scale: 0, nullable: true })
  invoiceBillingEan: number | null;

  @Column({ name: 'NUMPRECAR', type: 'number', precision: 8, scale: 0, nullable: true })
  preLoadNumber: number | null;

  @Column({ name: 'CODBREX', type: 'number', precision: 6, scale: 0, nullable: true })
  brexCode: number | null;

  @Column({ name: 'VLFRETEOUTRASDESP', type: 'number', precision: 14, scale: 2, nullable: true })
  otherExpFreightValue: number | null;

  @Column({ name: 'STATUSPEDIDOCIASHOP', type: 'varchar2', length: 50, nullable: true })
  ciashopOrderStatus: string | null;

  @Column({ name: 'DERRUBADACARGA', type: 'varchar2', length: 1, nullable: true })
  loadDrop: string | null;

  @Column({ name: 'CODPLPAGANT', type: 'number', precision: 4, scale: 0, nullable: true })
  previousPaymentPlanId: number | null;

  @Column({ name: 'RECALPRECOALTPLPAG', type: 'varchar2', length: 1, nullable: true })
  recalcPricePayPlanChange: string | null;

  @Column({ name: 'MENSAGEM', type: 'varchar2', length: 3000, nullable: true })
  message: string | null;

  @Column({ name: 'ORDEMSEP', type: 'number', precision: 4, scale: 0, nullable: true })
  pickOrder: number | null;

  @Column({ name: 'ORDEMCONF', type: 'number', precision: 4, scale: 0, nullable: true })
  checkOrder: number | null;

  @Column({ name: 'PAGAMENTOAPROVADOCIASHOP', type: 'varchar2', length: 1, nullable: true })
  ciashopPaymentApproved: string | null;

  @Column({ name: 'TIPOCONTACORRENTE', type: 'varchar2', length: 1, nullable: true })
  checkingAccountType: string | null;

  @Column({ name: 'MATERIALDECONSTRUCAO', type: 'varchar2', length: 1, nullable: true })
  constructionMaterial: string | null;

  @Column({ name: 'CODGERENTE', type: 'number', precision: 4, scale: 0, nullable: true })
  managerId: number | null;

  @Column({ name: 'VLVERBACMV', type: 'number', precision: 18, scale: 6, nullable: true })
  cmvFundValue: number | null;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', precision: 18, scale: 6, nullable: true })
  customerCmvFundValue: number | null;

  @Column({ name: 'NUMPEDMKTPLACE', type: 'varchar2', length: 150, nullable: true })
  marketplaceOrderId: string | null;

  @Column({ name: 'DATAEFETIVAENTREGACIASHOP', type: 'date', nullable: true })
  ciashopEffectiveDeliveryDate: Date | null;

  @Column({ name: 'SITUACAOPROCESSAMENTO', type: 'varchar2', length: 1, nullable: true })
  processingStatus: string | null;

  @Column({ name: 'TIPOCALCVLATEND', type: 'varchar2', length: 1, nullable: true })
  attendValueCalcType: string | null;

  @Column({ name: 'CODFUNCLIBERADTENTREGA', type: 'number', precision: 8, scale: 0, nullable: true })
  deliveryDateReleaseEmployeeId: number | null;

  @Column({ name: 'USACORTECIASHOP', type: 'varchar2', length: 1, nullable: true })
  useCiashopCut: string | null;

  @Column({ name: 'INDICADORDESCONTO', type: 'varchar2', length: 1, nullable: true })
  discountIndicator: string | null;

  @Column({ name: 'INDICADORACRESCIMO', type: 'varchar2', length: 1, nullable: true })
  additionIndicator: string | null;

  @Column({ name: 'IDREMESSAWEB', type: 'number', precision: 22, scale: 0, nullable: true })
  webShipmentId: number | null;

  @Column({ name: 'NUMVIASMAPASEPRI', type: 'number', precision: 2, scale: 0, nullable: true })
  sepPriMapCopiesNumber: number | null;

  @Column({ name: 'ULTIMASITUACAOCFAT', type: 'varchar2', length: 100, nullable: true })
  lastCfatStatus: string | null;

  @Column({ name: 'DATAULTIMASITUACAOCFAT', type: 'date', nullable: true })
  lastCfatStatusDate: Date | null;

  @Column({ name: 'VLJUROSPARCELAMENTO', type: 'number', precision: 18, scale: 2, nullable: true })
  installmentInterestValue: number | null;

  @Column({ name: 'DATAHORAPROCESSAMENTO', type: 'date', nullable: true })
  processingDateTime: Date | null;

  @Column({ name: 'PERMITEPRODSEMDISTRIBUICAO', type: 'varchar2', length: 1, nullable: true })
  permiteprodsemdistribuicao: string | null;

  @Column({ name: 'SISTEMALEGADO', type: 'varchar2', length: 1, nullable: true })
  legacySystem: string | null;

  @Column({ name: 'NUMTRANSENTCROSSDOCK', type: 'number', precision: 10, scale: 0, nullable: true })
  crossdockEntTransactionNumber: number | null;

  @Column({ name: 'NUMTRANSENTORIGCONSIG', type: 'number', precision: 10, scale: 0, nullable: true })
  consigEntOrigTransactionNumber: number | null;

  @Column({ name: 'NUMTRANSENTORIGTV10', type: 'number', precision: 10, scale: 0, nullable: true })
  tv10EntOrigTransactionNumber: number | null;

  @Column({ name: 'QTPALETE', type: 'number', precision: 10, scale: 0, nullable: true })
  palletQuantity: number | null;

  @Column({ name: 'TOTPESOPALETE', type: 'number', precision: 12, scale: 6, nullable: true })
  totalPalletWeight: number | null;

  @Column({ name: 'NUMPEDHUBE', type: 'varchar2', length: 50, nullable: true })
  hubeOrderId: string | null;

  @Column({ name: 'DTNSU', type: 'date', nullable: true })
  nsuDate: Date | null;

  @Column({ name: 'NUMFICHA', type: 'number', precision: 8, scale: 0, nullable: true })
  sheetNumber: number | null;

  @Column({ name: 'BLOQUEIOFATURAMENTO', type: 'varchar2', length: 1, nullable: true })
  billingBlock: string | null;

  @Column({ name: 'GERANDOWMS', type: 'varchar2', length: 1, nullable: true })
  generatingWms: string | null;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date | null;

  @Column({ name: 'VLTOTAL', type: 'number', precision: 16, scale: 3, nullable: true })
  totalValue: number | null;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  customerId: number | null;

  @Column({ name: 'CODUSUR', type: 'number', precision: 4, scale: 0, nullable: true })
  representativeId: number | null;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  deliveryDate: Date | null;

  @Column({ name: 'VLTABELA', type: 'number', precision: 16, scale: 3, nullable: true })
  listValue: number | null;

  @Column({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: true })
  branchId: string | null;

  @Column({ name: 'VLDESCONTO', type: 'number', precision: 16, scale: 3, nullable: true })
  discountValue: number | null;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', length: 2, nullable: true })
  saleType: string | null;

  @Column({ name: 'OBS', type: 'varchar2', length: 25, nullable: true })
  observation: string | null;

  @Column({ name: 'VLCUSTOREAL', type: 'number', precision: 14, scale: 2, nullable: true })
  realCostValue: number | null;

  @Column({ name: 'VLCUSTOFIN', type: 'number', precision: 14, scale: 2, nullable: true })
  finalCostValue: number | null;

  @Column({ name: 'VLFRETE', type: 'number', precision: 16, scale: 3, nullable: true })
  freightValue: number | null;

  @Column({ name: 'VLOUTRASDESP', type: 'number', precision: 16, scale: 3, nullable: true })
  otherExpensesValue: number | null;

  @Column({ name: 'TOTPESO', type: 'number', precision: 18, scale: 6, nullable: true })
  totalWeight: number | null;

  @Column({ name: 'TOTVOLUME', type: 'number', precision: 18, scale: 6, nullable: true })
  totalVolume: number | null;

  @Column({ name: 'CODPRACA', type: 'number', precision: 4, scale: 0, nullable: true })
  regionId: number | null;

  @Column({ name: 'NUMITENS', type: 'number', precision: 4, scale: 0, nullable: true })
  itemCount: number | null;

  @Column({ name: 'CODEMITENTE', type: 'number', precision: 8, scale: 0, nullable: true })
  issuerId: number | null;

  @Column({ name: 'DTCANCEL', type: 'date', nullable: true })
  cancelDate: Date | null;

  @Column({ name: 'POSICAO', type: 'varchar2', length: 2, nullable: true })
  position: string | null;

  @Column({ name: 'VLATEND', type: 'number', precision: 16, scale: 3, nullable: true })
  serviceValue: number | null;

  @Column({ name: 'OPERACAO', type: 'varchar2', length: 1, nullable: true })
  operation: string | null;

  @Column({ name: 'NUMCAR', type: 'number', precision: 8, scale: 0, nullable: true })
  loadNumber: number | null;

  @Column({ name: 'CODCOB', type: 'varchar2', length: 4, nullable: true })
  billingId: string | null;

  @Column({ name: 'HORA', type: 'number', precision: 2, scale: 0, nullable: true })
  hour: number | null;

  @Column({ name: 'MINUTO', type: 'number', precision: 2, scale: 0, nullable: true })
  minute: number | null;

  @Column({ name: 'NUMSEQENTREGA', type: 'number', precision: 20, scale: 0, nullable: true })
  deliverySequenceAndr: number | null;

  @Column({ name: 'CUSTOENTREGA', type: 'number', precision: 14, scale: 2, nullable: true })
  deliveryCost: number | null;

  @Column({ name: 'CODSUPERVISOR', type: 'number', precision: 4, scale: 0, nullable: true })
  supervisorId: number | null;

  @Column({ name: 'CAMPANHA', type: 'varchar2', length: 2, nullable: true })
  campaign: string | null;

  @Column({ name: 'NUMPEDCLI', type: 'varchar2', length: 15, nullable: true })
  customerOrderNumber: string | null;

  @Column({ name: 'CONDVENDA', type: 'number', precision: 5, scale: 0, nullable: true })
  saleCondition: number | null;

  @Column({ name: 'PERCVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  salePercent: number | null;

  @Column({ name: 'OBS1', type: 'varchar2', length: 50, nullable: true })
  observation1: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', length: 50, nullable: true })
  observation2: string | null;

  @Column({ name: 'PERDESC', type: 'number', precision: 18, scale: 6, nullable: true })
  discountPercent: number | null;

  @Column({ name: 'NEGOCIADO', type: 'varchar2', length: 1, nullable: true })
  negotiated: string | null;

  @Column({ name: 'CODUNIDADEEXECUTORA', type: 'varchar2', length: 20, nullable: true })
  executingUnitId: string | null;

  @Column({ name: 'DTLIMITEFAT', type: 'date', nullable: true })
  billinglimitDate: Date | null;

  @Column({ name: 'NUMTRANSACAOTRANSF', type: 'number', precision: 10, scale: 0, nullable: true })
  transferTransactionNumber: number | null;

  @Column({ name: 'NUMCCF', type: 'number', precision: 8, scale: 0, nullable: true })
  ccfNumber: number | null;

  @Column({ name: 'C', type: 'varchar2', length: 2, nullable: true })
  c: string | null;

  @Column({ name: 'DTEXPORTACAOWMS', type: 'date', nullable: true })
  wmsExportDate: Date | null;

  @Column({ name: 'DTIMPORTACAOWMS', type: 'date', nullable: true })
  wmsImportDate: Date | null;

  @Column({ name: 'CODFUNCLIBDESC', type: 'number', precision: 8, scale: 0, nullable: true })
  discountReleaseEmployeeId: number | null;

  @Column({ name: 'PERDESCLIB', type: 'number', precision: 18, scale: 6, nullable: true })
  releasedDiscountPercent: number | null;

  @Column({ name: 'FORNECENTREGA', type: 'varchar2', length: 1, nullable: true })
  deliverySupplier: string | null;

  @Column({ name: 'ROTINALANC', type: 'varchar2', length: 48, nullable: true })
  entryRoutine: string | null;

  @Column({ name: 'ROTINALANCULTALT', type: 'varchar2', length: 48, nullable: true })
  lastChangeEntryRoutine: string | null;

  @Column({ name: 'RESERVAESTOQUETV7', type: 'varchar2', length: 1, nullable: true })
  tv7StockReserve: string | null;

  @Column({ name: 'ALTAPOSMAPASEP', type: 'varchar2', length: 1, nullable: true })
  sepMapPosChange: string | null;

  @Column({ name: 'CODPLPAGETICO', type: 'number', precision: 4, scale: 0, nullable: true })
  ethicalPaymentPlanId: number | null;

  @Column({ name: 'CODPLPAGGENERICO', type: 'number', precision: 4, scale: 0, nullable: true })
  genericPaymentPlanId: number | null;

  @Column({ name: 'CODCLITV8', type: 'number', precision: 6, scale: 0, nullable: true })
  tv8CustomerId: number | null;

  @Column({ name: 'DTINICIODIGITACAOPEDIDO', type: 'date', nullable: true })
  orderTypingStartDate: Date | null;

  @Column({ name: 'DTFIMDIGITACAOPEDIDO', type: 'date', nullable: true })
  orderTypingEndDate: Date | null;

  @Column({ name: 'TIPOFV', type: 'varchar2', length: 2, nullable: true })
  fvType: string | null;

  @Column({ name: 'MOTORISTAVEICULO', type: 'varchar2', length: 40, nullable: true })
  vehicleDriver: string | null;

  @Column({ name: 'UFVEICULO', type: 'varchar2', length: 2, nullable: true })
  vehicleUf: string | null;

  @Column({ name: 'DEVSIMBOLICA', type: 'varchar2', length: 1, nullable: true })
  symbolicDev: string | null;

  @Column({ name: 'CODAUTORIZACAOTEFWEB', type: 'varchar2', length: 128, nullable: true })
  webTefAuthCode: string | null;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  abatementDiscountValue: number | null;

  @Column({ name: 'TURNOENTREGA', type: 'varchar2', length: 5, nullable: true })
  deliveryShift: string | null;

  @Column({ name: 'VENDAEXPORTACAO', type: 'varchar2', length: 1, nullable: true })
  exportSale: string | null;

  @Column({ name: 'PEDIDOAVARIA', type: 'varchar2', length: 1, nullable: true })
  damagedOrder: string | null;

  @Column({ name: 'IDAGRUPAMENTO', type: 'varchar2', length: 1, nullable: true })
  groupingId: string | null;

  @Column({ name: 'NUMLISTA', type: 'number', precision: 6, scale: 0, nullable: true })
  listNumber: number | null;

  @Column({ name: 'AGRUPAMENTO', type: 'varchar2', length: 1, nullable: true })
  grouping: string | null;

  @Column({ name: 'NUMTRANSVENDATV13', type: 'number', precision: 10, scale: 0, nullable: true })
  tv13SaleTransactionNumber: number | null;

  @Column({ name: 'PERDESCAVISTA', type: 'number', precision: 18, scale: 6, nullable: true })
  cashDiscountPercent: number | null;

  @Column({ name: 'PLPAGAVISTA', type: 'varchar2', length: 1, nullable: true })
  cashPaymentPlan: string | null;

  @Column({ name: 'NUMPEDVANXML', type: 'varchar2', length: 20, nullable: true })
  xmlVanOrderId: string | null;

  @Column({ name: 'TIPOEMISSAO', type: 'varchar2', length: 1, nullable: true })
  issueType: string | null;

  @Column({ name: 'CONTINGENCIATV14', type: 'varchar2', length: 1, nullable: true })
  tv14Contingency: string | null;

  @Column({ name: 'CHAVENFE', type: 'varchar2', length: 45, nullable: true })
  nfeKey: string | null;

  @Column({ name: 'NUMPEDTV14', type: 'number', precision: 10, scale: 0, nullable: true })
  tv14OrderId: number | null;

  @Column({ name: 'CODENDENTCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  customerDeliveryAddressId: number | null;

  @Column({ name: 'NUMPEDAGRUPADO', type: 'number', precision: 10, scale: 0, nullable: true })
  groupedOrderId: number | null;

  @Column({ name: 'NUMVIASPEDAGRUPADO', type: 'number', precision: 2, scale: 0, nullable: true })
  groupedOrderCopiesNumber: number | null;

  @Column({ name: 'ENVIADOCOMPRA', type: 'varchar2', length: 1, nullable: true })
  sentPurchase: string | null;

  @Column({ name: 'ENVIADOVENDA', type: 'varchar2', length: 1, nullable: true })
  sentSale: string | null;

  @Column({ name: 'JUSTIFICATIVACONTIGENCIA', type: 'varchar2', length: 256, nullable: true })
  contingencyJustification: string | null;

  @Column({ name: 'DTAHORAENTRADACONTIGENCIA', type: 'date', nullable: true })
  contingencyEntryDateTime: Date | null;

  @Column({ name: 'VLTRIBUTOS', type: 'number', precision: 14, scale: 2, nullable: true })
  taxesValue: number | null;

  @Column({ name: 'VLDESCONTOCUPOM', type: 'number', precision: 16, scale: 2, nullable: true })
  couponDiscountValue: number | null;

  @Column({ name: 'CARTAODOTZ', type: 'varchar2', length: 18, nullable: true })
  dotzCard: string | null;

  @Column({ name: 'HORAEMISSAO', type: 'varchar2', length: 8, nullable: true })
  issueHour: string | null;

  @Column({ name: 'UTILIZAVENDAPOREMBALAGEM', type: 'varchar2', length: 1, nullable: true })
  usePackagingSale: string | null;

  @Column({ name: 'CONSUMIUNUMNFE', type: 'varchar2', length: 1, nullable: true })
  consumedNfeNumber: string | null;

  @Column({ name: 'NSUSOCIOTORCEDOR', type: 'varchar2', length: 15, nullable: true })
  supporterPartnerNsu: string | null;

  @Column({ name: 'VLDESCSOCIOTORCEDOR', type: 'number', precision: 18, scale: 2, nullable: true })
  supporterPartnerDiscountValue: number | null;

  @Column({ name: 'LATITUDE', type: 'varchar2', length: 20, nullable: true })
  latitude: string | null;

  @Column({ name: 'LONGITUDE', type: 'varchar2', length: 20, nullable: true })
  longitude: string | null;

  @Column({ name: 'PRECISAOLATLNG', type: 'number', precision: 8, scale: 2, nullable: true })
  precisaolatlng: number | null;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', precision: 9, scale: 0, nullable: true })
  medPromotionId: number | null;

  @Column({ name: 'IDTIPOPRESENCA', type: 'varchar2', length: 2, nullable: true })
  presenceTypeId: string | null;

  @Column({ name: 'VLSUBTOTAL', type: 'number', precision: 18, scale: 2, nullable: true })
  subtotalValue: number | null;

  @Column({ name: 'NUMREGEXP', type: 'number', precision: 12, scale: 0, nullable: true })
  regExpNumber: number | null;

  @Column({ name: 'NUMCHAVEEXP', type: 'varchar2', length: 44, nullable: true })
  expKeyNumber: string | null;

  @Column({ name: 'NUMDRAWBACK', type: 'number', precision: 11, scale: 0, nullable: true })
  drawbackNumber: number | null;

  @Column({ name: 'CODCONTATO', type: 'number', precision: 6, scale: 0, nullable: true })
  contactId: number | null;

  @Column({ name: 'LIBERA_RETAGUARDA', type: 'varchar2', length: 1, nullable: true })
  backofficeRelease: string | null;

  @Column({ name: 'CODFUNCLIBEROURET', type: 'number', precision: 8, scale: 0, nullable: true })
  returnReleaseEmployeeId: number | null;

  @Column({ name: 'DATALIBEROURET', type: 'date', nullable: true })
  releaseOrReturnDate: Date | null;

  @Column({ name: 'CODMOEDAESTRANGEIRA', type: 'number', precision: 6, scale: 0, nullable: true })
  foreignCurrencyId: number | null;

  @Column({ name: 'VLRMOEDAESTRANGEIRA', type: 'number', precision: 18, scale: 2, nullable: true })
  foreignCurrencyValue: number | null;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'number', precision: 8, scale: 6, nullable: true })
  realCurrencyRateCase: number | null;

  @Column({ name: 'AMBIENTENFCE', type: 'varchar2', length: 1, nullable: true })
  nfceEnvironment: string | null;

  @Column({ name: 'VERSAOFATURAMENTO', type: 'varchar2', length: 40, nullable: true })
  billingVersion: string | null;

  @Column({ name: 'DOCEMISSAO', type: 'varchar2', length: 2, nullable: true })
  issueDoc: string | null;

  @Column({ name: 'QRCODENFCE', type: 'varchar2', length: 400, nullable: true })
  nfceQrCode: string | null;

  @Column({ name: 'CHAVENFCE', type: 'varchar2', length: 50, nullable: true })
  nfceKey: string | null;

  @Column({ name: 'CODMOEDAESTRANGEIRAORIGINAL', type: 'number', precision: 6, scale: 0, nullable: true })
  originalForeignCurrencyId: number | null;

  @Column({ name: 'PEDIDOPAGOECOMMERCE', type: 'varchar2', length: 1, nullable: true })
  ecommercePaidOrder: string | null;

  @Column({ name: 'CODFRETE', type: 'number', precision: 10, scale: 0, nullable: true })
  freightId: number | null;

  @Column({ name: 'COLUNAFRETE', type: 'number', precision: 2, scale: 0, nullable: true })
  freightColumn: number | null;

  @Column({ name: 'NUMFORMULARIO', type: 'number', precision: 10, scale: 0, nullable: true })
  formNumber: number | null;

  @Column({ name: 'NUMSELO', type: 'varchar2', length: 20, nullable: true })
  sealNumber: string | null;

  @Column({ name: 'NUMCIRURGIA', type: 'number', precision: 10, scale: 0, nullable: true })
  surgeryNumber: number | null;

  @Column({ name: 'NUMFECHAMENTOMOVCX', type: 'number', precision: 10, scale: 0, nullable: true })
  cashMovClosingNumber: number | null;

  @Column({ name: 'DTMOVIMENTOCX', type: 'date', nullable: true })
  cashMovDate: Date | null;

  @Column({ name: 'CODBANCOCM', type: 'number', precision: 4, scale: 0, nullable: true })
  cmBankId: number | null;

  @Column({ name: 'VENDANFSERIED', type: 'varchar2', length: 1, nullable: true })
  nfSeriesDSale: string | null;

  @Column({ name: 'EMITIRCUPOMFISCAL', type: 'varchar2', length: 1, nullable: true })
  issueFiscalCoupon: string | null;

  @Column({ name: 'NUMSERIESAT', type: 'varchar2', length: 13, nullable: true })
  satSeriesNumber: string | null;

  @Column({ name: 'DATAHORAEMISSAOSAT', type: 'date', nullable: true })
  satIssueDateTime: Date | null;

  @Column({ name: 'CHAVESAT', type: 'varchar2', length: 400, nullable: true })
  satKey: string | null;

  @Column({ name: 'NUMSEQRETORNO1', type: 'number', precision: 6, scale: 0, nullable: true })
  return1SeqNumber: number | null;

  @Column({ name: 'NUMSEQRETORNO2', type: 'number', precision: 6, scale: 0, nullable: true })
  return2SeqNumber: number | null;

  @Column({ name: 'USAINTEGRACAOWMS', type: 'varchar2', length: 1, nullable: true })
  useWmsIntegrator: string | null;

  @Column({ name: 'CODFUNCEXPINTWMS', type: 'number', precision: 8, scale: 0, nullable: true })
  wmsIntExportEmployeeId: number | null;

  @Column({ name: 'CODFUNCIMPINTWMS', type: 'number', precision: 8, scale: 0, nullable: true })
  wmsIntImportEmployeeId: number | null;

  @Column({ name: 'DTIMPORTACAO', type: 'date', nullable: true })
  importDate: Date | null;

  @Column({ name: 'NUMLOTEINTWMS', type: 'number', precision: 9, scale: 0, nullable: true })
  wmsIntBatchNumber: number | null;

  @Column({ name: 'RESTRICAOTRANSPORTE', type: 'varchar2', length: 1, nullable: true })
  transportRestriction: string | null;

  @Column({ name: 'VENDAASSISTIVA', type: 'varchar2', length: 1, nullable: true })
  assistiveSale: string | null;

  @Column({ name: 'TOTPESOLIQ', type: 'number', precision: 18, scale: 6, nullable: true })
  totalNetWeight: number | null;

  @Column({ name: 'NUMORCAPRINC', type: 'number', precision: 10, scale: 0, nullable: true })
  mainQuoteNumber: number | null;

  @Column({ name: 'CODENDENT', type: 'number', precision: 6, scale: 0, nullable: true })
  deliveryAddressId: number | null;

  @Column({ name: 'USACFOPVENDANATV10', type: 'varchar2', length: 1, nullable: true })
  useTv10SaleCfop: string | null;

  @Column({ name: 'GERARDADOSNFPAULISTA', type: 'varchar2', length: 1, nullable: true })
  generateNfPaulistaData: string | null;

  @Column({ name: 'DTINICIALPEND', type: 'date', nullable: true })
  pendingStartDate: Date | null;

  @Column({ name: 'DTFINALPEND', type: 'date', nullable: true })
  pendingEndDate: Date | null;

  @Column({ name: 'VERSAOROTINA', type: 'varchar2', length: 40, nullable: true })
  routineVersion: string | null;

  @Column({ name: 'PEDDUPLICADO', type: 'varchar2', length: 1, nullable: true })
  duplicatedOrder: string | null;

  @Column({ name: 'TIPOPRIORIDADEENTREGA', type: 'varchar2', length: 1, nullable: true })
  deliveryPriorityType: string | null;

  @Column({ name: 'TOTPESOLIQAGRUPADO', type: 'number', precision: 18, scale: 6, nullable: true })
  totalGroupedNetWeight: number | null;

  @Column({ name: 'TOTPESOAGRUPADO', type: 'number', precision: 18, scale: 6, nullable: true })
  totalGroupedWeight: number | null;

  @Column({ name: 'TOTVOLUMEAGRUPADO', type: 'number', precision: 18, scale: 6, nullable: true })
  totalGroupedVolume: number | null;

  @Column({ name: 'NUMPEDORIGEMFRETE', type: 'number', precision: 10, scale: 0, nullable: true })
  freightOriginOrderId: number | null;

  @Column({ name: 'LOCALIZACAOPEDIDO', type: 'varchar2', length: 100, nullable: true })
  orderLocation: string | null;

  @Column({ name: 'SUBSERIE', type: 'varchar2', length: 2, nullable: true })
  subSeries: string | null;

  @Column({ name: 'PERCFRETE', type: 'number', precision: 8, scale: 4, nullable: true })
  freightPercent: number | null;

  @Column({ name: 'BRINDE', type: 'varchar2', length: 1, nullable: true })
  gift: string | null;

  @Column({ name: 'USACREDRCA', type: 'varchar2', length: 1, nullable: true })
  useRcaCredit: string | null;

  @Column({ name: 'USADEBCREDRCA', type: 'varchar2', length: 1, nullable: true })
  useRcaCreditDebit: string | null;

  @Column({ name: 'BONIFICALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true })
  bonusRcaCreditDebitChange: string | null;

  @Column({ name: 'TROCAALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true })
  changeRcaCreditDebitExch: string | null;

  @Column({ name: 'BROKERALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true })
  brokerRcaCreditDebitChange: string | null;

  @Column({ name: 'CRMALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true })
  crmRcaCreditDebitChange: string | null;

  @Column({ name: 'TIPOMOVCCRCA', type: 'varchar2', length: 2, nullable: true })
  rcaCcMovType: string | null;

  @Column({ name: 'NUMVOLUMEAGRUPADO', type: 'number', precision: 4, scale: 0, nullable: true })
  groupedVolumeNumber: number | null;

  @Column({ name: 'ESPECIEVOLUME', type: 'varchar2', length: 100, nullable: true })
  volumeSpecies: string | null;

  @Column({ name: 'MARCAVOLUME', type: 'varchar2', length: 100, nullable: true })
  volumeBrand: string | null;

  @Column({ name: 'NUMCARANTERIOR', type: 'number', precision: 8, scale: 0, nullable: true })
  previousLoadNumber: number | null;

  @Column({ name: 'CODPRACADESTINO', type: 'number', precision: 4, scale: 0, nullable: true })
  destRegionId: number | null;

  @Column({ name: 'GERARCONTROLEDEENTREGA', type: 'varchar2', length: 1, nullable: true })
  generateDeliveryControl: string | null;

  @Column({ name: 'DTCONFGARANTIA', type: 'date', nullable: true })
  guaranteeCheckDate: Date | null;

  @Column({ name: 'CODFUNCCONFGARANTIA', type: 'number', precision: 8, scale: 0, nullable: true })
  codfuncconfgarantiaId: number | null;

  @Column({ name: 'CODIGOSAZONALIDADE', type: 'number', precision: 6, scale: 0, nullable: true })
  seasonalityCode: number | null;

  @Column({ name: 'ROTINA', type: 'varchar2', length: 40, nullable: true })
  routine: string | null;

  @Column({ name: 'CODUSUR4', type: 'number', precision: 6, scale: 0, nullable: true })
  representative4Id: number | null;

  @Column({ name: 'CODTRANSP', type: 'number', precision: 6, scale: 0, nullable: true })
  carrierId: number | null;

  @Column({ name: 'NUMPEDTV1', type: 'number', precision: 10, scale: 0, nullable: true })
  tv1OrderId: number | null;

  @Column({ name: 'RECARGA', type: 'varchar2', length: 1, nullable: true })
  recharge: string | null;

  @Column({ name: 'CODAUTORIZACAOTEF', type: 'number', precision: 6, scale: 0, nullable: true })
  tefAuthCode: number | null;

  @Column({ name: 'NSUTEF', type: 'varchar2', length: 15, nullable: true })
  tefNsu: string | null;

  @Column({ name: 'CODADMCARTAO', type: 'varchar2', length: 6, nullable: true })
  cardAdminId: string | null;

  @Column({ name: 'PROTOCOLONFP', type: 'varchar2', length: 20, nullable: true })
  nfpProtocol: string | null;

  @Column({ name: 'NUMPESO', type: 'number', precision: 18, scale: 6, nullable: true })
  weightNumber: number | null;

  @Column({ name: 'CODFUNCSEP', type: 'number', precision: 8, scale: 0, nullable: true })
  pickerEmployeeId: number | null;

  @Column({ name: 'USASALDOCONTACORRENTEDESCFIN', type: 'varchar2', length: 1, nullable: true })
  useFinDescCheckingAccountBal: string | null;

  @Column({ name: 'BLOQUEIOSALDOCCDESCFIN', type: 'varchar2', length: 1, nullable: true })
  finDescBalanceBlock: string | null;

  @Column({ name: 'INTEGRADORA', type: 'number', precision: 6, scale: 0, nullable: true })
  integrator: number | null;

  @Column({ name: 'VALORDESCFIN', type: 'number', precision: 18, scale: 3, nullable: true })
  financialDiscountValue: number | null;

  @Column({ name: 'TIPODOCUMENTO', type: 'varchar2', length: 1, nullable: true })
  documentType: string | null;

  @Column({ name: 'CODVISITA', type: 'number', precision: 10, scale: 0, nullable: true })
  visitId: number | null;

  @Column({ name: 'NUMVIASETIQUETA', type: 'number', precision: 2, scale: 0, nullable: true })
  labelCopiesNumber: number | null;

  @Column({ name: 'VENDATRIANGULAR', type: 'varchar2', length: 1, nullable: true })
  triangularSale: string | null;

  @Column({ name: 'CODMOTIVO2', type: 'number', precision: 6, scale: 0, nullable: true })
  reason2Id: number | null;

  @Column({ name: 'BLOQFINANCEIRO', type: 'varchar2', length: 1, nullable: true })
  financialBlock: string | null;

  @Column({ name: 'BLOQCOMERCIAL', type: 'varchar2', length: 1, nullable: true })
  commercialBlock: string | null;

  @Column({ name: 'VLENTRADA', type: 'number', precision: 16, scale: 3, nullable: true })
  entryValue: number | null;

  @Column({ name: 'VLFRETERETIDO', type: 'number', precision: 14, scale: 2, nullable: true })
  retainedFreightValue: number | null;

  @Column({ name: 'VLSTFRETERETIDO', type: 'number', precision: 14, scale: 2, nullable: true })
  retainedFreightStValue: number | null;

  @Column({ name: 'PERCFRETERETIDO', type: 'number', precision: 8, scale: 4, nullable: true })
  retainedFreightPercent: number | null;

  @Column({ name: 'PERCSTFRETERETIDO', type: 'number', precision: 8, scale: 4, nullable: true })
  retainedFreightStPercent: number | null;

  @Column({ name: 'PRAZOMEDIOPLPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  payPlanAverageTerm: number | null;

  @Column({ name: 'DTLIBERA2', type: 'date', nullable: true })
  release2Date: Date | null;

  @Column({ name: 'CODFUNCLIBERA2', type: 'number', precision: 8, scale: 0, nullable: true })
  release2EmployeeId: number | null;

  @Column({ name: 'UFDESEMBARACO', type: 'varchar2', length: 2, nullable: true })
  clearanceUf: string | null;

  @Column({ name: 'LOCALDESEMBARACO', type: 'varchar2', length: 30, nullable: true })
  clearancePlace: string | null;

  @Column({ name: 'CUSTOBONIFICACAO', type: 'varchar2', length: 1, nullable: true })
  bonusCost: string | null;

  @Column({ name: 'CODFORNECBONIFIC', type: 'number', precision: 6, scale: 0, nullable: true })
  bonusSupplierId: number | null;

  @Column({ name: 'CODBNF', type: 'number', precision: 4, scale: 0, nullable: true })
  bnfCode: number | null;

  @Column({ name: 'PERCSALDORESERVARCA', type: 'number', precision: 5, scale: 2, nullable: true })
  rcaReserveBalancePercent: number | null;

  @Column({ name: 'PLACAVEICULO', type: 'varchar2', length: 10, nullable: true })
  vehiclePlate: string | null;

  @Column({ name: 'SOFTNUMLANC', type: 'varchar2', length: 20, nullable: true })
  softEntryNum: string | null;

  @Column({ name: 'OBSENTREGA4', type: 'varchar2', length: 75, nullable: true })
  deliveryObservation4: string | null;

  @Column({ name: 'CFOPBNFDEGUSTA', type: 'number', precision: 8, scale: 0, nullable: true })
  tastingBnfCfop: number | null;

  @Column({ name: 'CONTAORDEM', type: 'varchar2', length: 1, nullable: true })
  orderAccount: string | null;

  @Column({ name: 'LOG', type: 'varchar2', length: 4000, nullable: true })
  log: string | null;

  @Column({ name: 'LOG1', type: 'varchar2', length: 4000, nullable: true })
  log1: string | null;

  @Column({ name: 'LOG2', type: 'varchar2', length: 4000, nullable: true })
  log2: string | null;

  @Column({ name: 'LOG3', type: 'varchar2', length: 4000, nullable: true })
  log3: string | null;

  @Column({ name: 'LOG4', type: 'varchar2', length: 4000, nullable: true })
  log4: string | null;

  @Column({ name: 'CODPOSTAGEM', type: 'varchar2', length: 15, nullable: true })
  postageId: string | null;

  @Column({ name: 'DATAEMPENHO', type: 'date', nullable: true })
  commitmentDate: Date | null;

  @Column({ name: 'PERMITEFATURARCOMWMSPEND', type: 'varchar2', length: 1, nullable: false })
  permitefaturarcomwmspend: string | null;

  @Column({ name: 'DESCINTERMEDIADOR', type: 'varchar2', length: 60, nullable: true })
  intermediaryDescription: string | null;

  @Column({ name: 'CNPJINTERMEDIADOR', type: 'varchar2', length: 20, nullable: true })
  intermediaryCnpj: string | null;

  @Column({ name: 'OPERVENDAEXPINDIRETA', type: 'varchar2', length: 1, nullable: true })
  indirectExpSaleOper: string | null;

  @Column({ name: 'DESFEZKITCANC', type: 'varchar2', length: 1, nullable: true })
  undidCancelKit: string | null;

  @Column({ name: 'DTINITRANSACAODIG', type: 'date', nullable: true })
  digTransStartDate: Date | null;

  @Column({ name: 'DTITERACAOTRANSACAODIG', type: 'date', nullable: true })
  digTransIterationDate: Date | null;

  @Column({ name: 'STATUSTRANSACAODIG', type: 'varchar2', length: 25, nullable: true })
  digTransactionStatus: string | null;

  @Column({ name: 'JSONTPD_PAGAMENTO', type: 'blob', nullable: true })
  paymentTpdJson: Buffer | null;

  @Column({ name: 'BLOQUEIOSUPPLIER', type: 'varchar2', length: 1, nullable: true })
  supplierBlock: string | null;

  @Column({ name: 'ESC_IDCOTACAOFRETE', type: 'varchar2', length: 40, nullable: true })
  freightQuoteId: string | null;

  @Column({ name: 'DESTACARICMSDEVSIMBOLICA', type: 'varchar2', length: 1, nullable: true })
  highlightSymbolicDevIcms: string | null;

  @Column({ name: 'CODIGORASTREIOFRETEVENDA', type: 'varchar2', length: 2000, nullable: true })
  trackingCodeSaleFreight: string | null;

  @Column({ name: 'TIB_IDCOTACAO', type: 'varchar2', length: 300, nullable: true })
  tibQuoteId: string | null;

  @Column({ name: 'TIB_ORDEMCOTACAO', type: 'number', precision: 4, scale: 0, nullable: true })
  tibQuoteOrder: number | null;

  @Column({ name: 'ORIGEMINTEGRACAO', type: 'varchar2', length: 50, nullable: true })
  integrationOrigin: string | null;

  @Column({ name: 'NUMPEDBNFTV14', type: 'number', precision: 10, scale: 0, nullable: true })
  tv14BnfOrderId: number | null;

  @Column({ name: 'TIPOEXPEDICAOCESTABASICA', type: 'varchar2', length: 2, nullable: true })
  basicBasketDispatchType: string | null;

  @Column({ name: 'CODAUTORIZACAOTEF1', type: 'varchar2', length: 20, nullable: true })
  tefAuthCode1: string | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsChangeDate: Date | null;

  @Column({ name: 'VLST', type: 'number', precision: 20, scale: 4, nullable: true })
  stValue: number | null;

  @Column({ name: 'BAIXAESTCLI', type: 'varchar2', length: 1, nullable: true })
  customerStockWriteOff: string | null;

  @Column({ name: 'CODSUPERVISOR2', type: 'number', precision: 4, scale: 0, nullable: true })
  supervisor2Id: number | null;

  @Column({ name: 'CODSUPERVISOR3', type: 'number', precision: 4, scale: 0, nullable: true })
  supervisor3Id: number | null;

  @Column({ name: 'NUMTRANSWMS', type: 'number', precision: 10, scale: 0, nullable: true })
  wmsTransactionNumber: number | null;

  @Column({ name: 'TIPOCFOPTV4', type: 'varchar2', length: 2, nullable: true })
  cfopTv4Type: string | null;

  @Column({ name: 'PRAZOPONDERADO', type: 'varchar2', length: 1, nullable: true })
  weightedTerm: string | null;

  @Column({ name: 'DTEMISSAOMAPA', type: 'date', nullable: true })
  mapIssueDate: Date | null;

  @Column({ name: 'HORAEMISSAOMAPA', type: 'number', precision: 2, scale: 0, nullable: true })
  mapIssueHour: number | null;

  @Column({ name: 'MINUTOEMISSAOMAPA', type: 'number', precision: 2, scale: 0, nullable: true })
  mapIssueMinute: number | null;

  @Column({ name: 'DATAPROTOCOLO', type: 'date', nullable: true })
  protocolDate: Date | null;

  @Column({ name: 'HORAPROTOCOLO', type: 'number', precision: 2, scale: 0, nullable: true })
  protocolHour: number | null;

  @Column({ name: 'MINUTOPROTOCOLO', type: 'number', precision: 2, scale: 0, nullable: true })
  protocolMinute: number | null;

  @Column({ name: 'CODFUNCPROTOCOLO', type: 'number', precision: 8, scale: 0, nullable: true })
  protocolEmployeeId: number | null;

  @Column({ name: 'NUMSEQCORREIO', type: 'number', precision: 8, scale: 0, nullable: true })
  mailSeqNumber: number | null;

  @Column({ name: 'NUMCONTRATOCORREIO', type: 'number', precision: 8, scale: 0, nullable: true })
  mailContractNumber: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', precision: 16, scale: 3, nullable: true })
  bonusValue: number | null;

  @Column({ name: 'NUMORDEMCARGA', type: 'number', precision: 4, scale: 0, nullable: true })
  loadOrderNumber: number | null;

  @Column({ name: 'OBSFRETENF1', type: 'varchar2', length: 75, nullable: true })
  freightObservation1: string | null;

  @Column({ name: 'OBSFRETENF2', type: 'varchar2', length: 75, nullable: true })
  freightObservation2: string | null;

  @Column({ name: 'OBSFRETENF3', type: 'varchar2', length: 75, nullable: true })
  freightObservation3: string | null;

  @Column({ name: 'ALIQICMSFRETENF', type: 'number', precision: 5, scale: 2, nullable: true })
  invoiceFreightIcmsRate: number | null;

  @Column({ name: 'BASEICMSFRETENF', type: 'number', precision: 12, scale: 2, nullable: true })
  invoiceFreightIcmsBase: number | null;

  @Column({ name: 'VLICMSFRETENF', type: 'number', precision: 12, scale: 2, nullable: true })
  invoiceFreightIcmsValue: number | null;

  @Column({ name: 'DTINICIALCHECKOUT', type: 'date', nullable: true })
  checkoutStartDate: Date | null;

  @Column({ name: 'DTFINALCHECKOUT', type: 'date', nullable: true })
  checkoutEndDate: Date | null;

  @Column({ name: 'CODFUNCEMISSAOMAPA', type: 'number', precision: 8, scale: 0, nullable: true })
  mapIssueEmployeeId: number | null;

  @Column({ name: 'DTVALIDADE', type: 'date', nullable: true })
  expirationDate: Date | null;

  @Column({ name: 'CODCLINF', type: 'number', precision: 6, scale: 0, nullable: true })
  nfeCustomerId: number | null;

  @Column({ name: 'NUMPEDVALE', type: 'number', precision: 10, scale: 0, nullable: true })
  valeOrderId: number | null;

  @Column({ name: 'DATAPEDCLI', type: 'date', nullable: true })
  customerOrderDate: Date | null;

  @Column({ name: 'DTABERTURAPEDPALM', type: 'date', nullable: true })
  palmOrderOpenDate: Date | null;

  @Column({ name: 'DTFECHAMENTOPEDPALM', type: 'date', nullable: true })
  palmOrderCloseDate: Date | null;

  @Column({ name: 'NUMCARAUX', type: 'number', precision: 8, scale: 0, nullable: true })
  auxLoadNumber: number | null;

  @Column({ name: 'NUMNOTATRANSFDEP', type: 'number', precision: 10, scale: 0, nullable: true })
  depTransfInvoiceNumber: number | null;

  @Column({ name: 'CODCONDICAOVENDA', type: 'number', precision: 6, scale: 0, nullable: true })
  saleConditionId: number | null;

  @Column({ name: 'TOTVLDESCFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  totalFinDiscountValue: number | null;

  @Column({ name: 'TOTVLDESCCOM', type: 'number', precision: 18, scale: 6, nullable: true })
  totalComDiscountValue: number | null;

  @Column({ name: 'TOTVLBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  totalBonusValue: number | null;

  @Column({ name: 'TOTVLDESCFLEX', type: 'number', precision: 18, scale: 6, nullable: true })
  totalFlexDiscountValue: number | null;

  @Column({ name: 'TOTVLREDCOMISS', type: 'number', precision: 18, scale: 6, nullable: true })
  totalComReductionValue: number | null;

  @Column({ name: 'IMPORTACUPOM', type: 'number', precision: 1, scale: 0, nullable: true })
  importCoupon: number | null;

  @Column({ name: 'DTAGENDAENTREGA', type: 'date', nullable: true })
  deliveryScheduleDate: Date | null;

  @Column({ name: 'EANCOMPRADOR', type: 'number', precision: 14, scale: 0, nullable: true })
  buyerEan: number | null;

  @Column({ name: 'EANLOCALENTREGA', type: 'number', precision: 14, scale: 0, nullable: true })
  deliveryPlaceEan: number | null;

  @Column({ name: 'NUMPEDECF', type: 'number', precision: 10, scale: 0, nullable: true })
  ecfOrderId: number | null;

  @Column({ name: 'NUMPEDBNF', type: 'number', precision: 10, scale: 0, nullable: true })
  bnfOrderId: number | null;

  @Column({ name: 'NUMREGIAO', type: 'number', precision: 4, scale: 0, nullable: true })
  regionNumber: number | null;

  @Column({ name: 'CONCILIAIMPORTACAO', type: 'varchar2', length: 1, nullable: true })
  importReconciliation: string | null;

  @Column({ name: 'PAGTOANTECIPADO', type: 'varchar2', length: 1, nullable: true })
  advancedPayment: string | null;

  @Column({ name: 'PERDESCFIN', type: 'number', precision: 12, scale: 6, nullable: true })
  financialDiscountPercent: number | null;

  @Column({ name: 'CODCLIRECEBEDOR', type: 'number', precision: 6, scale: 0, nullable: true })
  receiverCustomerId: number | null;

  @Column({ name: 'NUMCAIXAFISCAL', type: 'number', precision: 4, scale: 0, nullable: true })
  fiscalCashierNumber: number | null;

  @Column({ name: 'MOTIVOPOSICAO', type: 'varchar2', length: 60, nullable: true })
  positionReason: string | null;

  @Column({ name: 'PRONTAENTREGA', type: 'varchar2', length: 1, nullable: true })
  readyDelivery: string | null;

  @Column({ name: 'IMPORTADO', type: 'varchar2', length: 1, nullable: true })
  imported: string | null;

  @Column({ name: 'DTEXPORTADO', type: 'date', nullable: true })
  exportedDate: Date | null;

  @Column({ name: 'DTIMPORTADO', type: 'date', nullable: true })
  importedDate: Date | null;

  @Column({ name: 'NUMCARFAB', type: 'number', precision: 8, scale: 0, nullable: true })
  factoryLoadNumber: number | null;

  @Column({ name: 'NUMTABELA', type: 'varchar2', length: 20, nullable: true })
  tableNumber: string | null;

  @Column({ name: 'CODESTABELECIMENTO', type: 'varchar2', length: 3, nullable: true })
  establishmentId: string | null;

  @Column({ name: 'BROKER', type: 'varchar2', length: 1, nullable: true })
  broker: string | null;

  @Column({ name: 'RESTRICAOTRANSP', type: 'varchar2', length: 1, nullable: true })
  carrierRestriction: string | null;

  @Column({ name: 'NUMSEQROTA', type: 'number', precision: 10, scale: 2, nullable: true })
  routeSeqNumber: number | null;

  @Column({ name: 'CONFERINDOPEDIDO', type: 'varchar2', length: 1, nullable: true })
  checkingOrder: string | null;

  @Column({ name: 'TOTVLREDCOMISSSUP', type: 'number', precision: 18, scale: 6, nullable: true })
  totalSupComReductionValue: number | null;

  @Column({ name: 'CODATENDIMENTO', type: 'number', precision: 7, scale: 0, nullable: true })
  serviceId: number | null;

  @Column({ name: 'TRIBUTAPORREGIAOFILIAL', type: 'varchar2', length: 1, nullable: true })
  taxByBranchRegion: string | null;

  @Column({ name: 'NUMECF', type: 'number', precision: 10, scale: 0, nullable: true })
  ecfNumber: number | null;

  @Column({ name: 'GERACP', type: 'varchar2', length: 1, nullable: true })
  generateCp: string | null;

  @Column({ name: 'RESERVARITENSTV7', type: 'varchar2', length: 1, nullable: true })
  tv7ReserveItems: string | null;

  @Column({ name: 'NUMPREVENDA', type: 'number', precision: 10, scale: 0, nullable: true })
  preSaleNumber: number | null;

  @Column({ name: 'CODPROFISSIONAL', type: 'number', precision: 6, scale: 0, nullable: true })
  professionalId: number | null;

  @Column({ name: 'NUMORCAFILIAL', type: 'number', precision: 10, scale: 0, nullable: true })
  branchQuoteNumber: number | null;

  @Column({ name: 'TIPOFORMULARIONF', type: 'varchar2', length: 1, nullable: true })
  nfFormType: string | null;

  @Column({ name: 'NUMPEDWEB', type: 'number', precision: 15, scale: 0, nullable: true })
  webOrderId: number | null;

  @Column({ name: 'CODVEICULO', type: 'varchar2', length: 12, nullable: true })
  vehicleId: string | null;

  @Column({ name: 'NOMEARQUIVOFV', type: 'varchar2', length: 100, nullable: true })
  fvFileName: string | null;

  @Column({ name: 'DTINICIALSEP', type: 'date', nullable: true })
  sepStartDate: Date | null;

  @Column({ name: 'DTFINALSEP', type: 'date', nullable: true })
  sepEndDate: Date | null;

  @Column({ name: 'TIPORETIRADA', type: 'varchar2', length: 1, nullable: true })
  withdrawType: string | null;

  @Column({ name: 'IMPORTADOSERVPRINC', type: 'varchar2', length: 1, nullable: true })
  importedMainService: string | null;

  @Column({ name: 'DTIMPORTACAOSERVPRINC', type: 'date', nullable: true })
  mainServiceImportDate: Date | null;

  @Column({ name: 'DTEXPORTACAOSERVINT', type: 'date', nullable: true })
  intServiceExportDate: Date | null;

  @Column({ name: 'EXPORTADOSERVINT', type: 'varchar2', length: 1, nullable: true })
  exportedIntService: string | null;

  @Column({ name: 'PERCCOMPROFISSIONAL', type: 'number', precision: 8, scale: 4, nullable: true })
  professionalComPercent: number | null;

  @Column({ name: 'VENDAASSISTIDA', type: 'varchar2', length: 1, nullable: true })
  assistedSale: string | null;

  @Column({ name: 'CODFORNECREDESPACHO', type: 'number', precision: 6, scale: 0, nullable: true })
  redispatchSupplierId: number | null;

  @Column({ name: 'DTCHEGADACLIENTE', type: 'date', nullable: true })
  customerArrivalDate: Date | null;

  @Column({ name: 'CODMOTIVO', type: 'number', precision: 6, scale: 0, nullable: true })
  reasonId: number | null;

  @Column({ name: 'BLOQUEIOEDICAO', type: 'varchar2', length: 1, nullable: true })
  editingBlock: string | null;

  @Column({ name: 'DTEXPORTACAO', type: 'date', nullable: true })
  exportDate: Date | null;

  @Column({ name: 'NUMSEQENVIO', type: 'number', precision: 8, scale: 0, nullable: true })
  sendingSeqNumber: number | null;
}
