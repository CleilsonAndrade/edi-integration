import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDC',
})
export class PcpedcEntity {
  @PrimaryColumn({ name: 'NUMPED', type: 'number', precision: 10, scale: 0 })
  orderId: number;

  @Column({ name: 'ALIQICMSFRETENF', type: 'number', nullable: true })
  invoiceFreightIcmsRate: number;

  @Column({ name: 'AGRUPAMENTO', type: 'varchar2', nullable: true })
  grouping: string;

  @Column({ name: 'ALTAPOSMAPASEP', type: 'varchar2', nullable: true })
  sepMapPosChange: string;

  @Column({ name: 'AMBIENTENFCE', type: 'varchar2', nullable: true })
  nfceEnvironment: string;

  @Column({ name: 'ASSINATURA', type: 'varchar2', nullable: true })
  signature: string;

  @Column({ name: 'BAIXAESTCLI', type: 'varchar2', nullable: true })
  customerStockWriteOff: string;

  @Column({ name: 'BASEICMSFRETENF', type: 'varchar2', nullable: true })
  invoiceFreightIcmsBase: string;

  @Column({ name: 'BLOQCOMERCIAL', type: 'varchar2', nullable: true })
  commercialBlock: string;

  @Column({ name: 'BLOQFINANCEIRO', type: 'varchar2', nullable: true })
  financialBlock: string;

  @Column({ name: 'BLOQUEIOEDICAO', type: 'varchar2', nullable: true })
  editingBlock: string;

  @Column({ name: 'BLOQUEIOFATURAMENTO', type: 'varchar2', nullable: true })
  billingBlock: string;

  @Column({ name: 'BLOQUEIOSALDOCCDESCFIN', type: 'varchar2', nullable: true })
  finDescBalanceBlock: string;

  @Column({ name: 'BLOQUEIOSUPPLIER', type: 'varchar2', nullable: true })
  supplierBlock: string;

  @Column({ name: 'BONIFICALTDEBCREDRCA', type: 'varchar2', nullable: true })
  bonusRcaCreditDebitChange: string;

  @Column({ name: 'BRINDE', type: 'varchar2', nullable: true })
  gift: string;

  @Column({ name: 'BROKER', type: 'varchar2', nullable: true })
  broker: string;

  @Column({ name: 'BROKERALTDEBCREDRCA', type: 'varchar2', nullable: true })
  brokerRcaCreditDebitChange: string;

  @Column({ name: 'C', type: 'number', nullable: true })
  c: number;

  @Column({ name: 'CAMPANHA', type: 'varchar2', nullable: true })
  campaign: string;

  @Column({ name: 'CARTAODOTZ', type: 'varchar2', nullable: true })
  dotzCard: string;

  @Column({ name: 'CFOPBNFDEGUSTA', type: 'varchar2', nullable: true })
  tastingBnfCfop: string;

  @Column({ name: 'CGCFRETE', type: 'varchar2', nullable: true })
  freightCnpj: string;

  @Column({ name: 'CHAVENFCE', type: 'varchar2', nullable: true })
  nfceKey: string;

  @Column({ name: 'CHAVENFE', type: 'varchar2', nullable: true })
  nfeKey: string;

  @Column({ name: 'CHAVESAT', type: 'varchar2', nullable: true })
  satKey: string;

  @Column({ name: 'CNPJINTERMEDIADOR', type: 'varchar2', nullable: true })
  intermediaryCnpj: string;

  @Column({ name: 'CODADMCARTAO', type: 'number', nullable: true })
  cardAdminId: number;

  @Column({ name: 'CODATENDIMENTO', type: 'number', nullable: true })
  serviceId: number;

  @Column({ name: 'CODAUTORIZACAO', type: 'number', nullable: true })
  authCode: number;

  @Column({ name: 'CODAUTORIZACAOTEF', type: 'number', nullable: true })
  tefAuthCode: number;

  @Column({ name: 'CODAUTORIZACAOTEF1', type: 'number', nullable: true })
  tefAuthCode1: number;

  @Column({ name: 'CODAUTORIZACAOTEFWEB', type: 'number', nullable: true })
  webTefAuthCode: number;

  @Column({ name: 'CODBANCOCM', type: 'number', nullable: true })
  cmBankId: number;

  @Column({ name: 'CODBANDEIRATEF', type: 'number', nullable: true })
  tefBrandId: number;

  @Column({ name: 'CODBNF', type: 'number', nullable: true })
  bnfCode: number;

  @Column({ name: 'CODBREX', type: 'number', nullable: true })
  brexCode: number;

  @Column({ name: 'CODCLI', type: 'number', nullable: true })
  customerId: number;

  @Column({ name: 'CODCLICONSIGNACAO', type: 'number', nullable: true })
  consignmentCustomerId: number;

  @Column({ name: 'CODCLINF', type: 'number', nullable: true })
  nfeCustomerId: number;

  @Column({ name: 'CODCLIRECEBEDOR', type: 'number', nullable: true })
  receiverCustomerId: number;

  @Column({ name: 'CODCLITV8', type: 'number', nullable: true })
  tv8CustomerId: number;

  @Column({ name: 'CODCOB', type: 'number', nullable: true })
  billingId: number;

  @Column({ name: 'CODCONDICAOVENDA', type: 'number', nullable: true })
  saleConditionId: number;

  @Column({ name: 'CODCONTATO', type: 'number', nullable: true })
  contactId: number;

  @Column({ name: 'CODCONTRATO', type: 'number', nullable: true })
  contractId: number;

  @Column({ name: 'CODDISP', type: 'number', nullable: true })
  dispCode: number;

  @Column({ name: 'CODDISTRIB', type: 'number', nullable: true })
  distribCode: number;

  @Column({ name: 'CODEDITAL', type: 'number', nullable: true })
  biddingId: number;

  @Column({ name: 'CODEMITENTE', type: 'number', nullable: true })
  issuerId: number;

  @Column({ name: 'CODENDENT', type: 'number', nullable: true })
  deliveryAddressId: number;

  @Column({ name: 'CODENDENTCLI', type: 'number', nullable: true })
  customerDeliveryAddressId: number;

  @Column({ name: 'CODEPTO', type: 'number', nullable: true })
  departmentId: number;

  @Column({ name: 'CODESTABELECIMENTO', type: 'number', nullable: true })
  establishmentId: number;

  @Column({ name: 'CODFILIAL', type: 'number', nullable: true })
  branchId: number;

  @Column({ name: 'CODFILIALNF', type: 'number', nullable: true })
  invoiceBranchId: number;

  @Column({ name: 'CODFORNECBONIFIC', type: 'number', nullable: true })
  bonusSupplierId: number;

  @Column({ name: 'CODFORNECFRETE', type: 'number', nullable: true })
  freightSupplierId: number;

  @Column({ name: 'CODFORNECREDESPACHO', type: 'number', nullable: true })
  redispatchSupplierId: number;

  @Column({ name: 'CODFORNECVDIRETO', type: 'number', nullable: true })
  directSaleSupplierId: number;

  @Column({ name: 'CODFRETE', type: 'number', nullable: true })
  freightId: number;

  @Column({ name: 'CODFUNCCALCFRETE', type: 'number', nullable: true })
  freightCalcEmployeeId: number;

  @Column({ name: 'CODFUNCCANCEL', type: 'number', nullable: true })
  codfunccancelId: number;

  @Column({ name: 'CODFUNCCONF', type: 'number', nullable: true })
  checkerEmployeeId: number;

  @Column({ name: 'CODFUNCCONFGARANTIA', type: 'number', nullable: true })
  codfuncconfgarantiaId: number;

  @Column({ name: 'CODFUNCCX', type: 'number', nullable: true })
  cashierEmployeeId: number;

  @Column({ name: 'CODFUNCEMBALADOR', type: 'number', nullable: true })
  packerEmployeeId: number;

  @Column({ name: 'CODFUNCEMISSAOMAPA', type: 'number', nullable: true })
  mapIssueEmployeeId: number;

  @Column({ name: 'CODFUNCEXPARQOL', type: 'number', nullable: true })
  olFileExportEmployeeId: number;

  @Column({ name: 'CODFUNCEXPINTWMS', type: 'number', nullable: true })
  wmsIntExportEmployeeId: number;

  @Column({ name: 'CODFUNCIMPINTWMS', type: 'number', nullable: true })
  wmsIntImportEmployeeId: number;

  @Column({ name: 'CODFUNCLIBDESC', type: 'number', nullable: true })
  discountReleaseEmployeeId: number;

  @Column({ name: 'CODFUNCLIBERA', type: 'number', nullable: true })
  releaserEmployeeId: number;

  @Column({ name: 'CODFUNCLIBERA2', type: 'number', nullable: true })
  release2EmployeeId: number;

  @Column({ name: 'CODFUNCLIBERADTENTREGA', type: 'number', nullable: true })
  deliveryDateReleaseEmployeeId: number;

  @Column({ name: 'CODFUNCLIBEROURET', type: 'number', nullable: true })
  returnReleaseEmployeeId: number;

  @Column({ name: 'CODFUNCPROTOCOLO', type: 'number', nullable: true })
  protocolEmployeeId: number;

  @Column({ name: 'CODFUNCSEP', type: 'number', nullable: true })
  pickerEmployeeId: number;

  @Column({ name: 'CODGERENTE', type: 'number', nullable: true })
  managerId: number;

  @Column({ name: 'CODIGORASTREIOFRETEVENDA', type: 'number', nullable: true })
  trackingCodeSaleFreight: number;

  @Column({ name: 'CODIGOSAZONALIDADE', type: 'number', nullable: true })
  seasonalityCode: number;

  @Column({ name: 'CODMOEDAESTRANGEIRA', type: 'number', nullable: true })
  foreignCurrencyId: number;

  @Column({ name: 'CODMOEDAESTRANGEIRAORIGINAL', type: 'number', nullable: true })
  originalForeignCurrencyId: number;

  @Column({ name: 'CODMOTBLOQUEIO', type: 'number', nullable: true })
  blockReasonId: number;

  @Column({ name: 'CODMOTCANCEL', type: 'number', nullable: true })
  cancelReasonId: number;

  @Column({ name: 'CODMOTIVO', type: 'number', nullable: true })
  reasonId: number;

  @Column({ name: 'CODMOTIVO2', type: 'number', nullable: true })
  reason2Id: number;

  @Column({ name: 'CODMOTORISTA', type: 'number', nullable: true })
  driverId: number;

  @Column({ name: 'CODPLPAG', type: 'number', nullable: true })
  paymentPlanId: number;

  @Column({ name: 'CODPLPAGANT', type: 'number', nullable: true })
  previousPaymentPlanId: number;

  @Column({ name: 'CODPLPAGETICO', type: 'number', nullable: true })
  ethicalPaymentPlanId: number;

  @Column({ name: 'CODPLPAGGENERICO', type: 'number', nullable: true })
  genericPaymentPlanId: number;

  @Column({ name: 'CODPOSTAGEM', type: 'number', nullable: true })
  postageId: number;

  @Column({ name: 'CODPRACA', type: 'number', nullable: true })
  regionId: number;

  @Column({ name: 'CODPRACADESTINO', type: 'number', nullable: true })
  destRegionId: number;

  @Column({ name: 'CODPROFISSIONAL', type: 'number', nullable: true })
  professionalId: number;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', nullable: true })
  medPromotionId: number;

  @Column({ name: 'CODRETORNOSAT', type: 'number', nullable: true })
  satReturnCode: number;

  @Column({ name: 'CODSEFAZSAT', type: 'number', nullable: true })
  satSefazCode: number;

  @Column({ name: 'CODSTATUSSAT', type: 'number', nullable: true })
  satStatusCode: number;

  @Column({ name: 'CODSUPERVISOR', type: 'number', nullable: true })
  supervisorId: number;

  @Column({ name: 'CODSUPERVISOR2', type: 'number', nullable: true })
  supervisor2Id: number;

  @Column({ name: 'CODSUPERVISOR3', type: 'number', nullable: true })
  supervisor3Id: number;

  @Column({ name: 'CODTRANSP', type: 'number', nullable: true })
  carrierId: number;

  @Column({ name: 'CODUNIDADEEXECUTORA', type: 'number', nullable: true })
  executingUnitId: number;

  @Column({ name: 'CODUSUR', type: 'number', nullable: true })
  representativeId: number;

  @Column({ name: 'CODUSUR2', type: 'number', nullable: true })
  representative2Id: number;

  @Column({ name: 'CODUSUR3', type: 'number', nullable: true })
  representative3Id: number;

  @Column({ name: 'CODUSUR4', type: 'number', nullable: true })
  representative4Id: number;

  @Column({ name: 'CODVEICULO', type: 'number', nullable: true })
  vehicleId: number;

  @Column({ name: 'CODVISITA', type: 'number', nullable: true })
  visitId: number;

  @Column({ name: 'COLETAFRETE', type: 'varchar2', nullable: true })
  freightPickup: string;

  @Column({ name: 'COLUNAFRETE', type: 'varchar2', nullable: true })
  freightColumn: string;

  @Column({ name: 'CONCILIAIMPORTACAO', type: 'varchar2', nullable: true })
  importReconciliation: string;

  @Column({ name: 'CONDFINANC', type: 'varchar2', nullable: true })
  financialCondition: string;

  @Column({ name: 'CONDVENDA', type: 'varchar2', nullable: true })
  saleCondition: string;

  @Column({ name: 'CONFERINDOPEDIDO', type: 'varchar2', nullable: true })
  checkingOrder: string;

  @Column({ name: 'CONSUMIUNUMNFE', type: 'varchar2', nullable: true })
  consumedNfeNumber: string;

  @Column({ name: 'CONTAORDEM', type: 'varchar2', nullable: true })
  orderAccount: string;

  @Column({ name: 'CONTINGENCIATV14', type: 'varchar2', nullable: true })
  tv14Contingency: string;

  @Column({ name: 'COPIAIDENTICAPEDDUP', type: 'varchar2', nullable: true })
  duplicateOrderCopy: string;

  @Column({ name: 'CRMALTDEBCREDRCA', type: 'varchar2', nullable: true })
  crmRcaCreditDebitChange: string;

  @Column({ name: 'CUSTOBONIFICACAO', type: 'varchar2', nullable: true })
  bonusCost: string;

  @Column({ name: 'CUSTOENTREGA', type: 'varchar2', nullable: true })
  deliveryCost: string;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date;

  @Column({ name: 'DATAEFETIVAENTREGACIASHOP', type: 'date', nullable: true })
  ciashopEffectiveDeliveryDate: Date;

  @Column({ name: 'DATAEMPENHO', type: 'date', nullable: true })
  commitmentDate: Date;

  @Column({ name: 'DATAEXPARQOL', type: 'date', nullable: true })
  olFileExportDate: Date;

  @Column({ name: 'DATAEXPEDICAO', type: 'date', nullable: true })
  shippingDate: Date;

  @Column({ name: 'DATAHORAEMISSAOSAT', type: 'date', nullable: true })
  satIssueDateTime: Date;

  @Column({ name: 'DATAHORAPROCESSAMENTO', type: 'date', nullable: true })
  processingDateTime: Date;

  @Column({ name: 'DATALIBEROURET', type: 'date', nullable: true })
  releaseOrReturnDate: Date;

  @Column({ name: 'DATAPEDCLI', type: 'date', nullable: true })
  customerOrderDate: Date;

  @Column({ name: 'DATAPROTOCOLO', type: 'date', nullable: true })
  protocolDate: Date;

  @Column({ name: 'DATARETORNO', type: 'date', nullable: true })
  returnDate: Date;

  @Column({ name: 'DATASAIDA', type: 'date', nullable: true })
  exitDate: Date;

  @Column({ name: 'DATAULTIMASITUACAOCFAT', type: 'date', nullable: true })
  lastCfatStatusDate: Date;

  @Column({ name: 'DERRUBADACARGA', type: 'varchar2', nullable: true })
  loadDrop: string;

  @Column({ name: 'DESCINTERMEDIADOR', type: 'varchar2', nullable: true })
  intermediaryDescription: string;

  @Column({ name: 'DESFEZKITCANC', type: 'varchar2', nullable: true })
  undidCancelKit: string;

  @Column({ name: 'DESTACARICMSDEVSIMBOLICA', type: 'varchar2', nullable: true })
  highlightSymbolicDevIcms: string;

  @Column({ name: 'DEVSIMBOLICA', type: 'varchar2', nullable: true })
  symbolicDev: string;

  @Column({ name: 'DOCEMISSAO', type: 'varchar2', nullable: true })
  issueDoc: string;

  @Column({ name: 'DTABERTURAPEDPALM', type: 'date', nullable: true })
  palmOrderOpenDate: Date;

  @Column({ name: 'DTAGENDAENTREGA', type: 'date', nullable: true })
  deliveryScheduleDate: Date;

  @Column({ name: 'DTAHORAENTRADACONTIGENCIA', type: 'date', nullable: true })
  contingencyEntryDateTime: Date;

  @Column({ name: 'DTCALCFRETE', type: 'date', nullable: true })
  freightCalcDate: Date;

  @Column({ name: 'DTCANCEL', type: 'date', nullable: true })
  cancelDate: Date;

  @Column({ name: 'DTCHEGADACLIENTE', type: 'date', nullable: true })
  customerArrivalDate: Date;

  @Column({ name: 'DTCONFGARANTIA', type: 'date', nullable: true })
  guaranteeCheckDate: Date;

  @Column({ name: 'DTEMISSAOMAPA', type: 'date', nullable: true })
  mapIssueDate: Date;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  deliveryDate: Date;

  @Column({ name: 'DTEXPORTACAO', type: 'date', nullable: true })
  exportDate: Date;

  @Column({ name: 'DTEXPORTACAOSERVINT', type: 'date', nullable: true })
  intServiceExportDate: Date;

  @Column({ name: 'DTEXPORTACAOWMS', type: 'date', nullable: true })
  wmsExportDate: Date;

  @Column({ name: 'DTEXPORTADO', type: 'date', nullable: true })
  exportedDate: Date;

  @Column({ name: 'DTFAT', type: 'date', nullable: true })
  billingDate: Date;

  @Column({ name: 'DTFECHAMENTOPEDPALM', type: 'date', nullable: true })
  palmOrderCloseDate: Date;

  @Column({ name: 'DTFIMDIGITACAOPEDIDO', type: 'date', nullable: true })
  orderTypingEndDate: Date;

  @Column({ name: 'DTFINALCHECKOUT', type: 'date', nullable: true })
  checkoutEndDate: Date;

  @Column({ name: 'DTFINALPEND', type: 'date', nullable: true })
  pendingEndDate: Date;

  @Column({ name: 'DTFINALSEP', type: 'date', nullable: true })
  sepEndDate: Date;

  @Column({ name: 'DTIMPORTACAO', type: 'date', nullable: true })
  importDate: Date;

  @Column({ name: 'DTIMPORTACAOSERVPRINC', type: 'date', nullable: true })
  mainServiceImportDate: Date;

  @Column({ name: 'DTIMPORTACAOWMS', type: 'date', nullable: true })
  wmsImportDate: Date;

  @Column({ name: 'DTIMPORTADO', type: 'date', nullable: true })
  importedDate: Date;

  @Column({ name: 'DTINICIALCHECKOUT', type: 'date', nullable: true })
  checkoutStartDate: Date;

  @Column({ name: 'DTINICIALPEND', type: 'date', nullable: true })
  pendingStartDate: Date;

  @Column({ name: 'DTINICIALSEP', type: 'date', nullable: true })
  sepStartDate: Date;

  @Column({ name: 'DTINICIODIGITACAOPEDIDO', type: 'date', nullable: true })
  orderTypingStartDate: Date;

  @Column({ name: 'DTINITRANSACAODIG', type: 'date', nullable: true })
  digTransStartDate: Date;

  @Column({ name: 'DTITERACAOTRANSACAODIG', type: 'date', nullable: true })
  digTransIterationDate: Date;

  @Column({ name: 'DTLIBERA', type: 'date', nullable: true })
  releaseDate: Date;

  @Column({ name: 'DTLIBERA2', type: 'date', nullable: true })
  release2Date: Date;

  @Column({ name: 'DTLIMITEFAT', type: 'date', nullable: true })
  billinglimitDate: Date;

  @Column({ name: 'DTMOVIMENTOCX', type: 'date', nullable: true })
  cashMovDate: Date;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsChangeDate: Date;

  @Column({ name: 'DTNFTRANSF', type: 'date', nullable: true })
  transfNfDate: Date;

  @Column({ name: 'DTNSU', type: 'date', nullable: true })
  nsuDate: Date;

  @Column({ name: 'DTVALIDADE', type: 'date', nullable: true })
  expirationDate: Date;

  @Column({ name: 'DTVENC1', type: 'date', nullable: true })
  dueDate1: Date;

  @Column({ name: 'DTVENC2', type: 'date', nullable: true })
  dueDate2: Date;

  @Column({ name: 'DTVENC3', type: 'date', nullable: true })
  dueDate3: Date;

  @Column({ name: 'DTWMS', type: 'date', nullable: true })
  wmsDate: Date;

  @Column({ name: 'EANCOBRANCA', type: 'varchar2', nullable: true })
  billingEan: string;

  @Column({ name: 'EANCOBRANCAFATURA', type: 'varchar2', nullable: true })
  invoiceBillingEan: string;

  @Column({ name: 'EANCOMPRADOR', type: 'varchar2', nullable: true })
  buyerEan: string;

  @Column({ name: 'EANENTREGA', type: 'varchar2', nullable: true })
  deliveryEan: string;

  @Column({ name: 'EANLOCALENTREGA', type: 'varchar2', nullable: true })
  deliveryPlaceEan: string;

  @Column({ name: 'EMITIRCUPOMFISCAL', type: 'varchar2', nullable: true })
  issueFiscalCoupon: string;

  @Column({ name: 'ENVIADOCOMPRA', type: 'varchar2', nullable: true })
  sentPurchase: string;

  @Column({ name: 'ENVIADOVENDA', type: 'varchar2', nullable: true })
  sentSale: string;

  @Column({ name: 'ESC_IDCOTACAOFRETE', type: 'varchar2', nullable: true })
  freightQuoteId: string;

  @Column({ name: 'ESPECIEMANIF', type: 'varchar2', nullable: true })
  manifestSpecies: string;

  @Column({ name: 'ESPECIEVOLUME', type: 'varchar2', nullable: true })
  volumeSpecies: string;

  @Column({ name: 'EXPORTACRM', type: 'varchar2', nullable: true })
  crmExport: string;

  @Column({ name: 'EXPORTADO', type: 'varchar2', nullable: true })
  exported: string;

  @Column({ name: 'EXPORTADOSERVINT', type: 'varchar2', nullable: true })
  exportedIntService: string;

  @Column({ name: 'FORNECENTREGA', type: 'varchar2', nullable: true })
  deliverySupplier: string;

  @Column({ name: 'FRETEDESPACHO', type: 'varchar2', nullable: true })
  dispatchFreight: string;

  @Column({ name: 'FRETEREDESPACHO', type: 'varchar2', nullable: true })
  redispatchFreight: string;

  @Column({ name: 'GERACP', type: 'varchar2', nullable: true })
  generateCp: string;

  @Column({ name: 'GERANDOWMS', type: 'varchar2', nullable: true })
  generatingWms: string;

  @Column({ name: 'GERARCONTROLEDEENTREGA', type: 'varchar2', nullable: true })
  generateDeliveryControl: string;

  @Column({ name: 'GERARDADOSNFPAULISTA', type: 'varchar2', nullable: true })
  generateNfPaulistaData: string;

  @Column({ name: 'HORA', type: 'number', nullable: true })
  hour: number;

  @Column({ name: 'HORAEMISSAO', type: 'number', nullable: true })
  issueHour: number;

  @Column({ name: 'HORAEMISSAOMAPA', type: 'number', nullable: true })
  mapIssueHour: number;

  @Column({ name: 'HORAFAT', type: 'number', nullable: true })
  billingHour: number;

  @Column({ name: 'HORAFINALSEP', type: 'number', nullable: true })
  sepEndHour: number;

  @Column({ name: 'HORAINICIALSEP', type: 'number', nullable: true })
  sepStartHour: number;

  @Column({ name: 'HORALIBERA', type: 'number', nullable: true })
  releaseHour: number;

  @Column({ name: 'HORAPROTOCOLO', type: 'number', nullable: true })
  protocolHour: number;

  @Column({ name: 'IDAGRUPAMENTO', type: 'varchar2', nullable: true })
  groupingId: string;

  @Column({ name: 'IDPARCEIRO', type: 'varchar2', nullable: true })
  partnerId: string;

  @Column({ name: 'IDREMESSAWEB', type: 'varchar2', nullable: true })
  webShipmentId: string;

  @Column({ name: 'IDTIPOPRESENCA', type: 'varchar2', nullable: true })
  presenceTypeId: string;

  @Column({ name: 'IEFRETE', type: 'varchar2', nullable: true })
  freightIe: string;

  @Column({ name: 'IMPORTACUPOM', type: 'varchar2', nullable: true })
  importCoupon: string;

  @Column({ name: 'IMPORTADO', type: 'varchar2', nullable: true })
  imported: string;

  @Column({ name: 'IMPORTADOSERVPRINC', type: 'varchar2', nullable: true })
  importedMainService: string;

  @Column({ name: 'INDICADORACRESCIMO', type: 'varchar2', nullable: true })
  additionIndicator: string;

  @Column({ name: 'INDICADORDESCONTO', type: 'varchar2', nullable: true })
  discountIndicator: string;

  @Column({ name: 'INTEGRADORA', type: 'varchar2', nullable: true })
  integrator: string;

  @Column({ name: 'JSONTPD_PAGAMENTO', type: 'varchar2', nullable: true })
  paymentTpdJson: string;

  @Column({ name: 'JUSTIFICATIVACONTIGENCIA', type: 'varchar2', nullable: true })
  contingencyJustification: string;

  @Column({ name: 'LATITUDE', type: 'varchar2', nullable: true })
  latitude: string;

  @Column({ name: 'LIBERA_RETAGUARDA', type: 'varchar2', nullable: true })
  backofficeRelease: string;

  @Column({ name: 'LOCALDESEMBARACO', type: 'varchar2', nullable: true })
  clearancePlace: string;

  @Column({ name: 'LOCALIZACAOPEDIDO', type: 'varchar2', nullable: true })
  orderLocation: string;

  @Column({ name: 'LOG', type: 'varchar2', nullable: true })
  log: string;

  @Column({ name: 'LOG1', type: 'varchar2', nullable: true })
  log1: string;

  @Column({ name: 'LOG2', type: 'varchar2', nullable: true })
  log2: string;

  @Column({ name: 'LOG3', type: 'varchar2', nullable: true })
  log3: string;

  @Column({ name: 'LOG4', type: 'varchar2', nullable: true })
  log4: string;

  @Column({ name: 'LONGITUDE', type: 'varchar2', nullable: true })
  longitude: string;

  @Column({ name: 'MARCAVOLUME', type: 'varchar2', nullable: true })
  volumeBrand: string;

  @Column({ name: 'MATERIALDECONSTRUCAO', type: 'varchar2', nullable: true })
  constructionMaterial: string;

  @Column({ name: 'MELDATAEMISSAOPED', type: 'date', nullable: true })
  bestOrderIssueDate: Date;

  @Column({ name: 'MENSAGEM', type: 'varchar2', nullable: true })
  message: string;

  @Column({ name: 'MINUTO', type: 'number', nullable: true })
  minute: number;

  @Column({ name: 'MINUTOEMISSAOMAPA', type: 'number', nullable: true })
  mapIssueMinute: number;

  @Column({ name: 'MINUTOFAT', type: 'number', nullable: true })
  billingMinute: number;

  @Column({ name: 'MINUTOFINALSEP', type: 'number', nullable: true })
  sepEndMinute: number;

  @Column({ name: 'MINUTOINICIALSEP', type: 'number', nullable: true })
  sepStartMinute: number;

  @Column({ name: 'MINUTOLIBERA', type: 'number', nullable: true })
  releaseMinute: number;

  @Column({ name: 'MINUTOPROTOCOLO', type: 'number', nullable: true })
  protocolMinute: number;

  @Column({ name: 'MONTANDO', type: 'varchar2', nullable: true })
  assembling: string;

  @Column({ name: 'MOTIVOPOSICAO', type: 'varchar2', nullable: true })
  positionReason: string;

  @Column({ name: 'MOTORISTAVEICULO', type: 'varchar2', nullable: true })
  vehicleDriver: string;

  @Column({ name: 'MULTIPLICADORDUPLIC', type: 'varchar2', nullable: true })
  duplicateMultiplier: string;

  @Column({ name: 'NEGOCIADO', type: 'varchar2', nullable: true })
  negotiated: string;

  @Column({ name: 'NOMEARQUIVOFV', type: 'varchar2', nullable: true })
  fvFileName: string;

  @Column({ name: 'NSU', type: 'varchar2', nullable: true })
  nsu: string;

  @Column({ name: 'NSUSOCIOTORCEDOR', type: 'varchar2', nullable: true })
  supporterPartnerNsu: string;

  @Column({ name: 'NSUTEF', type: 'varchar2', nullable: true })
  tefNsu: string;

  @Column({ name: 'NUMCAIXA', type: 'number', nullable: true })
  boxNumber: number;

  @Column({ name: 'NUMCAIXAFISCAL', type: 'number', nullable: true })
  fiscalCashierNumber: number;

  @Column({ name: 'NUMCAR', type: 'number', nullable: true })
  loadNumber: number;

  @Column({ name: 'NUMCARANTERIOR', type: 'number', nullable: true })
  previousLoadNumber: number;

  @Column({ name: 'NUMCARAUX', type: 'number', nullable: true })
  auxLoadNumber: number;

  @Column({ name: 'NUMCARFAB', type: 'number', nullable: true })
  factoryLoadNumber: number;

  @Column({ name: 'NUMCARMANIF', type: 'number', nullable: true })
  manifestLoadNumber: number;

  @Column({ name: 'NUMCCF', type: 'number', nullable: true })
  ccfNumber: number;

  @Column({ name: 'NUMCHAVEEXP', type: 'number', nullable: true })
  expKeyNumber: number;

  @Column({ name: 'NUMCIRURGIA', type: 'number', nullable: true })
  surgeryNumber: number;

  @Column({ name: 'NUMCOLETA', type: 'number', nullable: true })
  pickupNumber: number;

  @Column({ name: 'NUMCONTRATOCORREIO', type: 'number', nullable: true })
  mailContractNumber: number;

  @Column({ name: 'NUMCUPOM', type: 'number', nullable: true })
  couponNumber: number;

  @Column({ name: 'NUMDRAWBACK', type: 'number', nullable: true })
  drawbackNumber: number;

  @Column({ name: 'NUMECF', type: 'number', nullable: true })
  ecfNumber: number;

  @Column({ name: 'NUMEMPENHO', type: 'number', nullable: true })
  commitmentNumber: number;

  @Column({ name: 'NUMFECHAMENTOMOVCX', type: 'number', nullable: true })
  cashMovClosingNumber: number;

  @Column({ name: 'NUMFICHA', type: 'number', nullable: true })
  sheetNumber: number;

  @Column({ name: 'NUMFONTERECURSO', type: 'number', nullable: true })
  resourceSourceNumber: number;

  @Column({ name: 'NUMFORMULARIO', type: 'number', nullable: true })
  formNumber: number;

  @Column({ name: 'NUMITENS', type: 'number', nullable: true })
  itemCount: number;

  @Column({ name: 'NUMLISTA', type: 'number', nullable: true })
  listNumber: number;

  @Column({ name: 'NUMLOTEINTWMS', type: 'number', nullable: true })
  wmsIntBatchNumber: number;

  @Column({ name: 'NUMNFTRANSF', type: 'number', nullable: true })
  transfNfNumber: number;

  @Column({ name: 'NUMNOTA', type: 'number', nullable: true })
  invoiceNumber: number;

  @Column({ name: 'NUMNOTACONSIG', type: 'number', nullable: true })
  consigInvoiceNumber: number;

  @Column({ name: 'NUMNOTAMANIF', type: 'number', nullable: true })
  manifestInvoiceNumber: number;

  @Column({ name: 'NUMNOTATRANSFDEP', type: 'number', nullable: true })
  depTransfInvoiceNumber: number;

  @Column({ name: 'NUMORCA', type: 'number', nullable: true })
  quoteNumber: number;

  @Column({ name: 'NUMORCAFILIAL', type: 'number', nullable: true })
  branchQuoteNumber: number;

  @Column({ name: 'NUMORCAPRINC', type: 'number', nullable: true })
  mainQuoteNumber: number;

  @Column({ name: 'NUMORDEMCARGA', type: 'number', nullable: true })
  loadOrderNumber: number;

  @Column({ name: 'NUMOS', type: 'number', nullable: true })
  soNumber: number;

  @Column({ name: 'NUMPEDAGRUPADO', type: 'number', nullable: true })
  groupedOrderId: number;

  @Column({ name: 'NUMPEDBNF', type: 'number', nullable: true })
  bnfOrderId: number;

  @Column({ name: 'NUMPEDBNFTV14', type: 'number', nullable: true })
  tv14BnfOrderId: number;

  @Column({ name: 'NUMPEDCLI', type: 'number', nullable: true })
  customerOrderNumber: number;

  @Column({ name: 'NUMPEDECF', type: 'number', nullable: true })
  ecfOrderId: number;

  @Column({ name: 'NUMPEDENTFUT', type: 'number', nullable: true })
  futureDelOrderId: number;

  @Column({ name: 'NUMPEDHUBE', type: 'number', nullable: true })
  hubeOrderId: number;

  @Column({ name: 'NUMPEDMKTPLACE', type: 'number', nullable: true })
  marketplaceOrderId: number;

  @Column({ name: 'NUMPEDORIGEM', type: 'number', nullable: true })
  originOrderId: number;

  @Column({ name: 'NUMPEDORIGEMFRETE', type: 'number', nullable: true })
  freightOriginOrderId: number;

  @Column({ name: 'NUMPEDRCA', type: 'number', nullable: true })
  rcaOrderId: number;

  @Column({ name: 'NUMPEDTV1', type: 'number', nullable: true })
  tv1OrderId: number;

  @Column({ name: 'NUMPEDTV14', type: 'number', nullable: true })
  tv14OrderId: number;

  @Column({ name: 'NUMPEDTV3', type: 'number', nullable: true })
  tv3OrderId: number;

  @Column({ name: 'NUMPEDVALE', type: 'number', nullable: true })
  valeOrderId: number;

  @Column({ name: 'NUMPEDVANXML', type: 'number', nullable: true })
  xmlVanOrderId: number;

  @Column({ name: 'NUMPEDWEB', type: 'number', nullable: true })
  webOrderId: number;

  @Column({ name: 'NUMPESO', type: 'number', nullable: true })
  weightNumber: number;

  @Column({ name: 'NUMPRECAR', type: 'number', nullable: true })
  preLoadNumber: number;

  @Column({ name: 'NUMPREVENDA', type: 'number', nullable: true })
  preSaleNumber: number;

  @Column({ name: 'NUMPROCESSO', type: 'number', nullable: true })
  processNumber: number;

  @Column({ name: 'NUMREGEXP', type: 'number', nullable: true })
  regExpNumber: number;

  @Column({ name: 'NUMREGIAO', type: 'number', nullable: true })
  regionNumber: number;

  @Column({ name: 'NUMSELO', type: 'number', nullable: true })
  sealNumber: number;

  @Column({ name: 'NUMSEQCORREIO', type: 'number', nullable: true })
  mailSeqNumber: number;

  @Column({ name: 'NUMSEQENTR', type: 'number', nullable: true })
  deliverySeqNumber: number;

  @Column({ name: 'NUMSEQENTREGA', type: 'number', nullable: true })
  deliverySequenceAndr: number;

  @Column({ name: 'NUMSEQENVIO', type: 'number', nullable: true })
  sendingSeqNumber: number;

  @Column({ name: 'NUMSEQMONTAGEM', type: 'number', nullable: true })
  assemblySeqNumber: number;

  @Column({ name: 'NUMSEQRETORNO1', type: 'number', nullable: true })
  return1SeqNumber: number;

  @Column({ name: 'NUMSEQRETORNO2', type: 'number', nullable: true })
  return2SeqNumber: number;

  @Column({ name: 'NUMSEQROTA', type: 'number', nullable: true })
  routeSeqNumber: number;

  @Column({ name: 'NUMSERIEEQUIP', type: 'number', nullable: true })
  equipSeriesNumber: number;

  @Column({ name: 'NUMSERIESAT', type: 'number', nullable: true })
  satSeriesNumber: number;

  @Column({ name: 'NUMSESSAOSAT', type: 'number', nullable: true })
  satSessionNumber: number;

  @Column({ name: 'NUMTABELA', type: 'number', nullable: true })
  tableNumber: number;

  @Column({ name: 'NUMTRANSACAOTRANSF', type: 'number', nullable: true })
  transferTransactionNumber: number;

  @Column({ name: 'NUMTRANSENTCROSSDOCK', type: 'number', nullable: true })
  crossdockEntTransactionNumber: number;

  @Column({ name: 'NUMTRANSENTORIGCONSIG', type: 'number', nullable: true })
  consigEntOrigTransactionNumber: number;

  @Column({ name: 'NUMTRANSENTORIGTV10', type: 'number', nullable: true })
  tv10EntOrigTransactionNumber: number;

  @Column({ name: 'NUMTRANSVENDA', type: 'number', nullable: true })
  saleTransactionNumber: number;

  @Column({ name: 'NUMTRANSVENDATV13', type: 'number', nullable: true })
  tv13SaleTransactionNumber: number;

  @Column({ name: 'NUMTRANSWMS', type: 'number', nullable: true })
  wmsTransactionNumber: number;

  @Column({ name: 'NUMVIASETIQUETA', type: 'number', nullable: true })
  labelCopiesNumber: number;

  @Column({ name: 'NUMVIASMAPASEP', type: 'number', nullable: true })
  sepMapCopiesNumber: number;

  @Column({ name: 'NUMVIASMAPASEPRI', type: 'number', nullable: true })
  sepPriMapCopiesNumber: number;

  @Column({ name: 'NUMVIASPEDAGRUPADO', type: 'number', nullable: true })
  groupedOrderCopiesNumber: number;

  @Column({ name: 'NUMVIASPEDIDO', type: 'number', nullable: true })
  orderCopiesNumber: number;

  @Column({ name: 'NUMVOLUME', type: 'number', nullable: true })
  volumeNumber: number;

  @Column({ name: 'NUMVOLUMEAGRUPADO', type: 'number', nullable: true })
  groupedVolumeNumber: number;

  @Column({ name: 'OBS', type: 'varchar2', nullable: true })
  observation: string;

  @Column({ name: 'OBS1', type: 'varchar2', nullable: true })
  observation1: string;

  @Column({ name: 'OBS2', type: 'varchar2', nullable: true })
  observation2: string;

  @Column({ name: 'OBSENTREGA1', type: 'varchar2', nullable: true })
  deliveryObservation1: string;

  @Column({ name: 'OBSENTREGA2', type: 'varchar2', nullable: true })
  deliveryObservation2: string;

  @Column({ name: 'OBSENTREGA3', type: 'varchar2', nullable: true })
  deliveryObservation3: string;

  @Column({ name: 'OBSENTREGA4', type: 'varchar2', nullable: true })
  deliveryObservation4: string;

  @Column({ name: 'OBSFRETENF1', type: 'varchar2', nullable: true })
  freightObservation1: string;

  @Column({ name: 'OBSFRETENF2', type: 'varchar2', nullable: true })
  freightObservation2: string;

  @Column({ name: 'OBSFRETENF3', type: 'varchar2', nullable: true })
  freightObservation3: string;

  @Column({ name: 'OBSNFCE', type: 'varchar2', nullable: true })
  nfceObservation: string;

  @Column({ name: 'OPERACAO', type: 'varchar2', nullable: true })
  operation: string;

  @Column({ name: 'OPERVENDAEXPINDIRETA', type: 'varchar2', nullable: true })
  indirectExpSaleOper: string;

  @Column({ name: 'ORDEMCONF', type: 'varchar2', nullable: true })
  checkOrder: string;

  @Column({ name: 'ORDEMSEP', type: 'varchar2', nullable: true })
  pickOrder: string;

  @Column({ name: 'ORIGEMINTEGRACAO', type: 'varchar2', nullable: true })
  integrationOrigin: string;

  @Column({ name: 'ORIGEMPED', type: 'varchar2', nullable: true })
  orderOrigin: string;

  @Column({ name: 'PAGAMENTOAPROVADOCIASHOP', type: 'varchar2', nullable: true })
  ciashopPaymentApproved: string;

  @Column({ name: 'PAGCHEQUEMORADIA', type: 'varchar2', nullable: true })
  housingCheckPayment: string;

  @Column({ name: 'PAGTOANTECIPADO', type: 'varchar2', nullable: true })
  advancedPayment: string;

  @Column({ name: 'PEDDUPLICADO', type: 'varchar2', nullable: true })
  duplicatedOrder: string;

  @Column({ name: 'PEDIDOAVARIA', type: 'varchar2', nullable: true })
  damagedOrder: string;

  @Column({ name: 'PEDIDOEMBALADO', type: 'varchar2', nullable: true })
  packedOrder: string;

  @Column({ name: 'PEDIDOPAGOECOMMERCE', type: 'varchar2', nullable: true })
  ecommercePaidOrder: string;

  @Column({ name: 'PERCCOMPROFISSIONAL', type: 'number', nullable: true })
  professionalComPercent: number;

  @Column({ name: 'PERCDESCABC', type: 'number', nullable: true })
  abcDiscountPercent: number;

  @Column({ name: 'PERCDESCCANAL', type: 'number', nullable: true })
  channelDiscountPercent: number;

  @Column({ name: 'PERCDESCCLI', type: 'number', nullable: true })
  customerDiscountPercent: number;

  @Column({ name: 'PERCDESCNEG', type: 'number', nullable: true })
  negotiatedDiscountPercent: number;

  @Column({ name: 'PERCENTUALSTFRETE', type: 'number', nullable: true })
  freightStPercent: number;

  @Column({ name: 'PERCFRETE', type: 'number', nullable: true })
  freightPercent: number;

  @Column({ name: 'PERCFRETERETIDO', type: 'number', nullable: true })
  retainedFreightPercent: number;

  @Column({ name: 'PERCSALDORESERVARCA', type: 'number', nullable: true })
  rcaReserveBalancePercent: number;

  @Column({ name: 'PERCSTFRETERETIDO', type: 'number', nullable: true })
  retainedFreightStPercent: number;

  @Column({ name: 'PERCVENDA', type: 'number', nullable: true })
  salePercent: number;

  @Column({ name: 'PERDESC', type: 'varchar2', nullable: true })
  discountPercent: string;

  @Column({ name: 'PERDESCAVISTA', type: 'varchar2', nullable: true })
  cashDiscountPercent: string;

  @Column({ name: 'PERDESCFIN', type: 'varchar2', nullable: true })
  financialDiscountPercent: string;

  @Column({ name: 'PERDESCLIB', type: 'varchar2', nullable: true })
  releasedDiscountPercent: string;

  @Column({ name: 'PERMITEFATURARCOMWMSPEND', type: 'varchar2', nullable: true })
  permitefaturarcomwmspend: string;

  @Column({ name: 'PERMITEPRODSEMDISTRIBUICAO', type: 'varchar2', nullable: true })
  permiteprodsemdistribuicao: string;

  @Column({ name: 'PLACAVEICULO', type: 'varchar2', nullable: true })
  vehiclePlate: string;

  @Column({ name: 'PLANOSUPPLI', type: 'varchar2', nullable: true })
  suppliPlan: string;

  @Column({ name: 'PLPAGAVISTA', type: 'varchar2', nullable: true })
  cashPaymentPlan: string;

  @Column({ name: 'POSICAO', type: 'varchar2', nullable: true })
  position: string;

  @Column({ name: 'PRAZO1', type: 'number', nullable: true })
  term1: number;

  @Column({ name: 'PRAZO10', type: 'number', nullable: true })
  term10: number;

  @Column({ name: 'PRAZO11', type: 'number', nullable: true })
  term11: number;

  @Column({ name: 'PRAZO12', type: 'number', nullable: true })
  term12: number;

  @Column({ name: 'PRAZO2', type: 'number', nullable: true })
  term2: number;

  @Column({ name: 'PRAZO3', type: 'number', nullable: true })
  term3: number;

  @Column({ name: 'PRAZO4', type: 'number', nullable: true })
  term4: number;

  @Column({ name: 'PRAZO5', type: 'number', nullable: true })
  term5: number;

  @Column({ name: 'PRAZO6', type: 'number', nullable: true })
  term6: number;

  @Column({ name: 'PRAZO7', type: 'number', nullable: true })
  term7: number;

  @Column({ name: 'PRAZO8', type: 'number', nullable: true })
  term8: number;

  @Column({ name: 'PRAZO9', type: 'number', nullable: true })
  term9: number;

  @Column({ name: 'PRAZOADICIONAL', type: 'number', nullable: true })
  additionalTerm: number;

  @Column({ name: 'PRAZOMEDIO', type: 'number', nullable: true })
  averageTerm: number;

  @Column({ name: 'PRAZOMEDIOPLPAG', type: 'number', nullable: true })
  payPlanAverageTerm: number;

  @Column({ name: 'PRAZOPONDERADO', type: 'number', nullable: true })
  weightedTerm: number;

  @Column({ name: 'PRECISAOLATLNG', type: 'varchar2', nullable: true })
  precisaolatlng: string;

  @Column({ name: 'PRONTAENTREGA', type: 'varchar2', nullable: true })
  readyDelivery: string;

  @Column({ name: 'PROTOCOLONFCE', type: 'varchar2', nullable: true })
  nfceProtocol: string;

  @Column({ name: 'PROTOCOLONFP', type: 'varchar2', nullable: true })
  nfpProtocol: string;

  @Column({ name: 'QRCODENFCE', type: 'varchar2', nullable: true })
  nfceQrCode: string;

  @Column({ name: 'QRCODESAT', type: 'varchar2', nullable: true })
  satQrCode: string;

  @Column({ name: 'QTPALETE', type: 'number', nullable: true })
  palletQuantity: number;

  @Column({ name: 'QTPARCELAS', type: 'number', nullable: true })
  installmentQuantity: number;

  @Column({ name: 'RECALPRECOALTPLPAG', type: 'varchar2', nullable: true })
  recalcPricePayPlanChange: string;

  @Column({ name: 'RECARGA', type: 'varchar2', nullable: true })
  recharge: string;

  @Column({ name: 'RESERVAESTOQUETV7', type: 'varchar2', nullable: true })
  tv7StockReserve: string;

  @Column({ name: 'RESERVARITENSTV7', type: 'varchar2', nullable: true })
  tv7ReserveItems: string;

  @Column({ name: 'RESTRICAOTRANSP', type: 'varchar2', nullable: true })
  carrierRestriction: string;

  @Column({ name: 'RESTRICAOTRANSPORTE', type: 'varchar2', nullable: true })
  transportRestriction: string;

  @Column({ name: 'ROTINA', type: 'varchar2', nullable: true })
  routine: string;

  @Column({ name: 'ROTINALANC', type: 'varchar2', nullable: true })
  entryRoutine: string;

  @Column({ name: 'ROTINALANCULTALT', type: 'varchar2', nullable: true })
  lastChangeEntryRoutine: string;

  @Column({ name: 'SERIEECF', type: 'varchar2', nullable: true })
  ecfSeries: string;

  @Column({ name: 'SERIEMANIF', type: 'varchar2', nullable: true })
  manifestSeries: string;

  @Column({ name: 'SISTEMALEGADO', type: 'varchar2', nullable: true })
  legacySystem: string;

  @Column({ name: 'SITUACAOPROCESSAMENTO', type: 'varchar2', nullable: true })
  processingStatus: string;

  @Column({ name: 'SITUACAOSAT', type: 'varchar2', nullable: true })
  satStatus: string;

  @Column({ name: 'SOFTNUMLANC', type: 'varchar2', nullable: true })
  softEntryNum: string;

  @Column({ name: 'STATUSPEDIDOCIASHOP', type: 'varchar2', nullable: true })
  ciashopOrderStatus: string;

  @Column({ name: 'STATUSTRANSACAODIG', type: 'varchar2', nullable: true })
  digTransactionStatus: string;

  @Column({ name: 'SUBSERIE', type: 'varchar2', nullable: true })
  subSeries: string;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'varchar2', nullable: true })
  realCurrencyRateCase: string;

  @Column({ name: 'TIB_IDCOTACAO', type: 'varchar2', nullable: true })
  tibQuoteId: string;

  @Column({ name: 'TIB_ORDEMCOTACAO', type: 'varchar2', nullable: true })
  tibQuoteOrder: string;

  @Column({ name: 'TIPOCALCVLATEND', type: 'varchar2', nullable: true })
  attendValueCalcType: string;

  @Column({ name: 'TIPOCARGA', type: 'varchar2', nullable: true })
  loadType: string;

  @Column({ name: 'TIPOCFOPTV4', type: 'varchar2', nullable: true })
  cfopTv4Type: string;

  @Column({ name: 'TIPOCONTACORRENTE', type: 'varchar2', nullable: true })
  checkingAccountType: string;

  @Column({ name: 'TIPODOCUMENTO', type: 'varchar2', nullable: true })
  documentType: string;

  @Column({ name: 'TIPOEMBALAGEM', type: 'varchar2', nullable: true })
  packagingType: string;

  @Column({ name: 'TIPOEMISSAO', type: 'varchar2', nullable: true })
  issueType: string;

  @Column({ name: 'TIPOEXPEDICAOCESTABASICA', type: 'varchar2', nullable: true })
  basicBasketDispatchType: string;

  @Column({ name: 'TIPOFORMULARIONF', type: 'varchar2', nullable: true })
  nfFormType: string;

  @Column({ name: 'TIPOFV', type: 'varchar2', nullable: true })
  fvType: string;

  @Column({ name: 'TIPOMOVCCRCA', type: 'varchar2', nullable: true })
  rcaCcMovType: string;

  @Column({ name: 'TIPOOPER', type: 'varchar2', nullable: true })
  operType: string;

  @Column({ name: 'TIPOOPERACAOTEF', type: 'varchar2', nullable: true })
  tefOperType: string;

  @Column({ name: 'TIPOPRIORIDADEENTREGA', type: 'varchar2', nullable: true })
  deliveryPriorityType: string;

  @Column({ name: 'TIPORETIRADA', type: 'varchar2', nullable: true })
  withdrawType: string;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', nullable: true })
  saleType: string;

  @Column({ name: 'TOTPESO', type: 'number', nullable: true })
  totalWeight: number;

  @Column({ name: 'TOTPESOAGRUPADO', type: 'number', nullable: true })
  totalGroupedWeight: number;

  @Column({ name: 'TOTPESOLIQ', type: 'number', nullable: true })
  totalNetWeight: number;

  @Column({ name: 'TOTPESOLIQAGRUPADO', type: 'number', nullable: true })
  totalGroupedNetWeight: number;

  @Column({ name: 'TOTPESOPALETE', type: 'number', nullable: true })
  totalPalletWeight: number;

  @Column({ name: 'TOTVLBONIFIC', type: 'number', nullable: true })
  totalBonusValue: number;

  @Column({ name: 'TOTVLDESCCOM', type: 'number', nullable: true })
  totalComDiscountValue: number;

  @Column({ name: 'TOTVLDESCFIN', type: 'number', nullable: true })
  totalFinDiscountValue: number;

  @Column({ name: 'TOTVLDESCFLEX', type: 'number', nullable: true })
  totalFlexDiscountValue: number;

  @Column({ name: 'TOTVLREDCOMISS', type: 'number', nullable: true })
  totalComReductionValue: number;

  @Column({ name: 'TOTVLREDCOMISSSUP', type: 'number', nullable: true })
  totalSupComReductionValue: number;

  @Column({ name: 'TOTVOLUME', type: 'number', nullable: true })
  totalVolume: number;

  @Column({ name: 'TOTVOLUMEAGRUPADO', type: 'number', nullable: true })
  totalGroupedVolume: number;

  @Column({ name: 'TRANSPORTADORA', type: 'varchar2', nullable: true })
  carrier: string;

  @Column({ name: 'TRIBUTAPORREGIAOFILIAL', type: 'varchar2', nullable: true })
  taxByBranchRegion: string;

  @Column({ name: 'TRIBVENDATRIANGULAR', type: 'varchar2', nullable: true })
  triangularSaleTax: string;

  @Column({ name: 'TROCAALTDEBCREDRCA', type: 'varchar2', nullable: true })
  changeRcaCreditDebitExch: string;

  @Column({ name: 'TURNOENTREGA', type: 'varchar2', nullable: true })
  deliveryShift: string;

  @Column({ name: 'UFDESEMBARACO', type: 'varchar2', nullable: true })
  clearanceUf: string;

  @Column({ name: 'UFFRETE', type: 'varchar2', nullable: true })
  freightUf: string;

  @Column({ name: 'UFVEICULO', type: 'varchar2', nullable: true })
  vehicleUf: string;

  @Column({ name: 'UIDREGISTRO', type: 'varchar2', nullable: true })
  recordUid: string;

  @Column({ name: 'ULTIMASITUACAOCFAT', type: 'varchar2', nullable: true })
  lastCfatStatus: string;

  @Column({ name: 'USACFOPVENDANATV10', type: 'varchar2', nullable: true })
  useTv10SaleCfop: string;

  @Column({ name: 'USACORTECIASHOP', type: 'varchar2', nullable: true })
  useCiashopCut: string;

  @Column({ name: 'USACREDRCA', type: 'varchar2', nullable: true })
  useRcaCredit: string;

  @Column({ name: 'USACREDRCATIPOBNF', type: 'varchar2', nullable: true })
  useRcaCreditBnfType: string;

  @Column({ name: 'USADEBCREDRCA', type: 'varchar2', nullable: true })
  useRcaCreditDebit: string;

  @Column({ name: 'USAINTEGRACAOWMS', type: 'varchar2', nullable: true })
  useWmsIntegrator: string;

  @Column({ name: 'USASALDOCONTACORRENTEDESCFIN', type: 'varchar2', nullable: true })
  useFinDescCheckingAccountBal: string;

  @Column({ name: 'UTILIZAVENDAPOREMBALAGEM', type: 'varchar2', nullable: true })
  usePackagingSale: string;

  @Column({ name: 'VALORDESCFIN', type: 'varchar2', nullable: true })
  financialDiscountValue: string;

  @Column({ name: 'VENDAASSISTIDA', type: 'varchar2', nullable: true })
  assistedSale: string;

  @Column({ name: 'VENDAASSISTIVA', type: 'varchar2', nullable: true })
  assistiveSale: string;

  @Column({ name: 'VENDAEXPORTACAO', type: 'varchar2', nullable: true })
  exportSale: string;

  @Column({ name: 'VENDALOCALCLIEX', type: 'varchar2', nullable: true })
  localExClientSale: string;

  @Column({ name: 'VENDALOCESTRANG', type: 'varchar2', nullable: true })
  foreignLocSale: string;

  @Column({ name: 'VENDANFSERIED', type: 'varchar2', nullable: true })
  nfSeriesDSale: string;

  @Column({ name: 'VENDATRIANGULAR', type: 'varchar2', nullable: true })
  triangularSale: string;

  @Column({ name: 'VERSAOFATURAMENTO', type: 'varchar2', nullable: true })
  billingVersion: string;

  @Column({ name: 'VERSAOROTINA', type: 'varchar2', nullable: true })
  routineVersion: string;

  @Column({ name: 'VILDTSEPARACOMPLFIM', type: 'varchar2', nullable: true })
  sepComplEndDate: string;

  @Column({ name: 'VILDTSEPARACOMPLINI', type: 'varchar2', nullable: true })
  sepComplStartDate: string;

  @Column({ name: 'VLATEND', type: 'number', nullable: true })
  serviceValue: number;

  @Column({ name: 'VLBASESTFRETE', type: 'number', nullable: true })
  freightStBaseValue: number;

  @Column({ name: 'VLBONIFIC', type: 'number', nullable: true })
  bonusValue: number;

  @Column({ name: 'VLCUSTOCONT', type: 'number', nullable: true })
  accountingCostValue: number;

  @Column({ name: 'VLCUSTOFIN', type: 'number', nullable: true })
  finalCostValue: number;

  @Column({ name: 'VLCUSTOREAL', type: 'number', nullable: true })
  realCostValue: number;

  @Column({ name: 'VLCUSTOREP', type: 'number', nullable: true })
  replacementCostValue: number;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', nullable: true })
  abatementDiscountValue: number;

  @Column({ name: 'VLDESCNEG', type: 'number', nullable: true })
  negotiatedDiscountValue: number;

  @Column({ name: 'VLDESCONTO', type: 'number', nullable: true })
  discountValue: number;

  @Column({ name: 'VLDESCONTOCUPOM', type: 'number', nullable: true })
  couponDiscountValue: number;

  @Column({ name: 'VLDESCSOCIOTORCEDOR', type: 'number', nullable: true })
  supporterPartnerDiscountValue: number;

  @Column({ name: 'VLENTRADA', type: 'number', nullable: true })
  entryValue: number;

  @Column({ name: 'VLFRETE', type: 'number', nullable: true })
  freightValue: number;

  @Column({ name: 'VLFRETEEMPENTREGA', type: 'number', nullable: true })
  deliveryCompanyFreightValue: number;

  @Column({ name: 'VLFRETENF', type: 'number', nullable: true })
  invoiceFreightValue: number;

  @Column({ name: 'VLFRETEOUTRASDESP', type: 'number', nullable: true })
  otherExpFreightValue: number;

  @Column({ name: 'VLFRETERETIDO', type: 'number', nullable: true })
  retainedFreightValue: number;

  @Column({ name: 'VLFRETETRANSP', type: 'number', nullable: true })
  carrierFreightValue: number;

  @Column({ name: 'VLICMSFRETENF', type: 'number', nullable: true })
  invoiceFreightIcmsValue: number;

  @Column({ name: 'VLICMSSTFRETE', type: 'number', nullable: true })
  freightStIcmsValue: number;

  @Column({ name: 'VLJUROSPARCELAMENTO', type: 'number', nullable: true })
  installmentInterestValue: number;

  @Column({ name: 'VLOPERACAOFRETE', type: 'number', nullable: true })
  freightOperationValue: number;

  @Column({ name: 'VLOUTRASDESP', type: 'number', nullable: true })
  otherExpensesValue: number;

  @Column({ name: 'VLRMOEDAESTRANGEIRA', type: 'number', nullable: true })
  foreignCurrencyValue: number;

  @Column({ name: 'VLST', type: 'number', nullable: true })
  stValue: number;

  @Column({ name: 'VLSTFRETERETIDO', type: 'number', nullable: true })
  retainedFreightStValue: number;

  @Column({ name: 'VLSUBTOTAL', type: 'number', nullable: true })
  subtotalValue: number;

  @Column({ name: 'VLTABELA', type: 'number', nullable: true })
  listValue: number;

  @Column({ name: 'VLTOTAL', type: 'number', nullable: true })
  totalValue: number;

  @Column({ name: 'VLTOTALCOMTROCO', type: 'number', nullable: true })
  totalWithChangeValue: number;

  @Column({ name: 'VLTRIBUTOS', type: 'number', nullable: true })
  taxesValue: number;

  @Column({ name: 'VLTXENT', type: 'number', nullable: true })
  entryTaxValue: number;

  @Column({ name: 'VLVERBACMV', type: 'number', nullable: true })
  cmvFundValue: number;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', nullable: true })
  customerCmvFundValue: number;

}
