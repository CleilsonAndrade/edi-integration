import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCORCAVENDAC' })
export class PcorcavendacEntity {
  @Column({ name: 'ACAOSOLICITADA', type: 'varchar2', length: 2, nullable: true })
  requestedAction?: string | null;

  @Column({ name: 'AGRUPAMENTO', type: 'varchar2', length: 1, nullable: true })
  grouping?: string | null;

  @Column({ name: 'ASSINATURA', type: 'varchar2', length: 255, nullable: true })
  signature?: string | null;

  @Column({ name: 'BAIRRO', type: 'varchar2', length: 40, nullable: true })
  neighborhood?: string | null;

  @Column({ name: 'BASEICST', type: 'number', precision: 18, scale: 6, nullable: true })
  baseIcst?: number | null;

  @Column({ name: 'BLOQUEARALTERACAO', type: 'varchar2', length: 1, nullable: true })
  blockModification?: string | null;

  @Column({ name: 'BLOQUEIO_PAF', type: 'varchar2', length: 1, nullable: true })
  pafBlock?: string | null;

  @Column({ name: 'BRINDE', type: 'varchar2', length: 1, nullable: true })
  gift?: string | null;

  @Column({ name: 'BROKER', type: 'varchar2', length: 1, nullable: true })
  broker?: string | null;

  @Column({ name: 'CAMPANHA', type: 'varchar2', length: 2, nullable: true })
  campaign?: string | null;

  @Column({ name: 'CARTAOCRM', type: 'varchar2', length: 19, nullable: true })
  crmCard?: string | null;

  @Column({ name: 'CARTAOFIDELIDADE', type: 'varchar2', length: 1, nullable: true })
  loyaltyCard?: string | null;

  @Column({ name: 'CIDADE', type: 'varchar2', length: 80, nullable: true })
  city?: string | null;

  @Column({ name: 'CLIENTE', type: 'varchar2', length: 60, nullable: true })
  client?: string | null;

  @Column({ name: 'CNPJ', type: 'varchar2', length: 18, nullable: true })
  cnpj?: string | null;

  @Column({ name: 'CNPJINTERMEDIADOR', type: 'varchar2', length: 20, nullable: true })
  brokerCnpj?: string | null;

  @Column({ name: 'CODADMCARTAO', type: 'varchar2', length: 6, nullable: true })
  cardAdmCode?: string | null;

  @Column({ name: 'CODATV1', type: 'number', precision: 6, scale: 0, nullable: true })
  statusAtv1Code?: number | null;

  @Column({ name: 'CODAUTORIZACAO', type: 'number', precision: 20, scale: 0, nullable: true })
  authorizationCode?: number | null;

  @Column({ name: 'CODBANDEIRATEF', type: 'varchar2', length: 5, nullable: true })
  tefBrandCode?: string | null;

  @Column({ name: 'CODBNF', type: 'number', precision: 4, scale: 0, nullable: true })
  benefitCode?: number | null;

  @Column({ name: 'CODCHECKOUTPDV', type: 'number', precision: 3, scale: 0, nullable: true })
  checkoutPdvCode?: number | null;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  clientCode?: number | null;

  @Column({ name: 'CODCLINF', type: 'number', precision: 6, scale: 0, nullable: true })
  clientInfCode?: number | null;

  @Column({ name: 'CODCLIRECEBEDOR', type: 'number', precision: 6, scale: 0, nullable: true })
  receiverClientCode?: number | null;

  @Column({ name: 'CODCLITV8', type: 'number', precision: 6, scale: 0, nullable: true })
  clientTv8Code?: number | null;

  @Column({ name: 'CODCOB', type: 'varchar2', length: 4, nullable: true })
  chargeCode?: string | null;

  @Column({ name: 'CODCONDICAOVENDA', type: 'number', precision: 6, scale: 0, nullable: true })
  saleConditionCode?: number | null;

  @Column({ name: 'CODCONTATO', type: 'number', precision: 6, scale: 0, nullable: true })
  contactCode?: number | null;

  @Column({ name: 'CODCONTRATO', type: 'number', precision: 6, scale: 0, nullable: true })
  contractCode?: number | null;

  @Column({ name: 'CODCRECLI', type: 'number', precision: 6, scale: 0, nullable: true })
  creditClientCode?: number | null;

  @Column({ name: 'CODCRED', type: 'number', precision: 6, scale: 0, nullable: true })
  creditCode?: number | null;

  @Column({ name: 'CODDISTRIB', type: 'varchar2', length: 4, nullable: true })
  distributorCode?: string | null;

  @Column({ name: 'CODEDITAL', type: 'number', precision: 9, scale: 0, nullable: true })
  biddingCode?: number | null;

  @Column({ name: 'CODEMITENTE', type: 'number', precision: 8, scale: 0, nullable: true })
  issuerCode?: number | null;

  @Column({ name: 'CODEMPRESAPDV', type: 'number', precision: 3, scale: 0, nullable: true })
  pdvCompanyCode?: number | null;

  @Column({ name: 'CODENDENT', type: 'number', precision: 6, scale: 0, nullable: true })
  branchCode?: number | null;

  @Column({ name: 'CODENTREGA', type: 'number', precision: 8, scale: 0, nullable: true })
  deliveryCode?: number | null;

  @Column({ name: 'CODEPTO', type: 'number', precision: 6, scale: 0, nullable: true })
  departmentCode?: number | null;

  @Column({ name: 'CODESTABELECIMENTO', type: 'varchar2', length: 3, nullable: true })
  establishmentCode?: string | null;

  @Column({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: true })
  branchCode2?: string | null;

  @Column({ name: 'CODFILIALNF', type: 'varchar2', length: 2, nullable: true })
  nfBranchCode?: string | null;

  @Column({ name: 'CODFILIALRETIRA1', type: 'varchar2', length: 2, nullable: true })
  pickupBranch1Code?: string | null;

  @Column({ name: 'CODFILIALRETIRA2', type: 'varchar2', length: 2, nullable: true })
  pickupBranch2Code?: string | null;

  @Column({ name: 'CODFILIALRETIRA3', type: 'varchar2', length: 2, nullable: true })
  pickupBranch3Code?: string | null;

  @Column({ name: 'CODFORNECBONIFIC', type: 'number', precision: 6, scale: 0, nullable: true })
  bonificationSupplierCode?: number | null;

  @Column({ name: 'CODFORNECFRETE', type: 'number', precision: 6, scale: 0, nullable: true })
  freightSupplierCode?: number | null;

  @Column({ name: 'CODFORNECREDESPACHO', type: 'number', precision: 6, scale: 0, nullable: true })
  redespatchSupplierCode?: number | null;

  @Column({ name: 'CODFRETE', type: 'number', precision: 10, scale: 0, nullable: true })
  freightCode?: number | null;

  @Column({ name: 'CODFUNCCALCFRETE', type: 'number', precision: 8, scale: 0, nullable: true })
  freightCalcFunctionCode?: number | null;

  @Column({ name: 'CODFUNCCANCEL', type: 'number', precision: 8, scale: 0, nullable: true })
  cancelFunctionCode?: number | null;

  @Column({ name: 'CODMOTBLOQUEIO', type: 'number', precision: 8, scale: 0, nullable: true })
  blockReasonCode?: number | null;

  @Column({ name: 'CODMOTIVO', type: 'number', precision: 6, scale: 0, nullable: true })
  reasonCode?: number | null;

  @Column({ name: 'CODMOTIVONAOATENDORCA', type: 'number', precision: 3, scale: 0, nullable: true })
  unmetReasonCode?: number | null;

  @Column({ name: 'CODMOTORISTA', type: 'number', precision: 8, scale: 0, nullable: true })
  driverCode?: number | null;

  @Column({ name: 'CODPLPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  paymentPlanCode?: number | null;

  @Column({ name: 'CODPLPAGETICO', type: 'number', precision: 4, scale: 0, nullable: true })
  etticPaymentPlanCode?: number | null;

  @Column({ name: 'CODPLPAGGENERICO', type: 'number', precision: 4, scale: 0, nullable: true })
  genericPaymentPlanCode?: number | null;

  @Column({ name: 'CODPRACA', type: 'number', precision: 4, scale: 0, nullable: true })
  marketCode?: number | null;

  @Column({ name: 'CODPRACADESTINO', type: 'number', precision: 4, scale: 0, nullable: true })
  destMarketCode?: number | null;

  @Column({ name: 'CODPROFISSIONAL', type: 'number', precision: 6, scale: 0, nullable: true })
  professionalCode?: number | null;

  @Column({ name: 'CODSUPERVISOR', type: 'number', precision: 4, scale: 0, nullable: true })
  supervisorCode?: number | null;

  @Column({ name: 'CODTRANSP', type: 'number', precision: 6, scale: 0, nullable: true })
  carrierCode?: number | null;

  @Column({ name: 'CODUNIDADEEXECUTORA', type: 'varchar2', length: 20, nullable: true })
  executingUnitCode?: string | null;

  @Column({ name: 'CODUSUR', type: 'number', precision: 4, scale: 0, nullable: true })
  userCode?: number | null;

  @Column({ name: 'CODUSUR2', type: 'number', precision: 6, scale: 0, nullable: true })
  userCode2?: number | null;

  @Column({ name: 'CODUSUR3', type: 'number', precision: 6, scale: 0, nullable: true })
  userCode3?: number | null;

  @Column({ name: 'CODUSUR4', type: 'number', precision: 6, scale: 0, nullable: true })
  userCode4?: number | null;

  @Column({ name: 'CODVISITA', type: 'number', precision: 10, scale: 0, nullable: true })
  visitCode?: number | null;

  @Column({ name: 'COLUNAFRETE', type: 'number', precision: 2, scale: 0, nullable: true })
  freightColumn?: number | null;

  @Column({ name: 'CONCILIAIMPORTACAO', type: 'varchar2', length: 1, nullable: true })
  conciliateImport?: string | null;

  @Column({ name: 'CONDVENDA', type: 'number', precision: 5, scale: 0, nullable: true })
  saleCondition?: number | null;

  @Column({ name: 'CONDVENDADESTINO', type: 'number', precision: 5, scale: 0, nullable: true })
  destSaleCondition?: number | null;

  @Column({ name: 'CONTAORDEM', type: 'varchar2', length: 1, nullable: true })
  orderAccount?: string | null;

  @Column({ name: 'CONVERTIDOPEDIDO', type: 'varchar2', length: 1, nullable: true })
  convertedToOrder?: string | null;

  @Column({ name: 'COOCONF', type: 'varchar2', length: 10, nullable: true })
  cooConfirmation?: string | null;

  @Column({ name: 'CUSTOBONIFICACAO', type: 'varchar2', length: 1, nullable: true })
  bonificationCost?: string | null;

  @Column({ name: 'CUSTOENTREGA', type: 'number', precision: 14, scale: 2, nullable: true })
  deliveryCost?: number | null;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date?: Date | null;

  @Column({ name: 'DATAEMPENHO', type: 'date', nullable: true })
  commitmentDate?: Date | null;

  @Column({ name: 'DATAHORA', type: 'date', nullable: true })
  dateTime?: Date | null;

  @Column({ name: 'DATAHORA_PRIMEIRODOCUMENTO_ECF', type: 'varchar2', length: 19, nullable: true })
  firstDocumentDateTimeEcf?: string | null;

  @Column({ name: 'DATAPEDCLI', type: 'date', nullable: true })
  clientOrderDate?: Date | null;

  @Column({ name: 'DESCINTERMEDIADOR', type: 'varchar2', length: 60, nullable: true })
  brokerDescription?: string | null;

  @Column({ name: 'DTABERTURA', type: 'date', nullable: true })
  openingDate?: Date | null;

  @Column({ name: 'DTAGENDAENTREGA', type: 'date', nullable: true })
  scheduledDeliveryDate?: Date | null;

  @Column({ name: 'DTCALCFRETE', type: 'date', nullable: true })
  freightCalcDate?: Date | null;

  @Column({ name: 'DTCANCEL', type: 'date', nullable: true })
  cancellationDate?: Date | null;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  deliveryDate?: Date | null;

  @Column({ name: 'DTENTREGAENVIO', type: 'date', nullable: true })
  deliverySendDate?: Date | null;

  @Column({ name: 'DTENTREGARETORNO', type: 'date', nullable: true })
  deliveryReturnDate?: Date | null;

  @Column({ name: 'DTENVIOSERVCARGA', type: 'date', nullable: true })
  chargeServiceSendDate?: Date | null;

  @Column({ name: 'DTEXPORTACAO', type: 'date', nullable: true })
  exportDate?: Date | null;

  @Column({ name: 'DTFECHAMENTO', type: 'date', nullable: true })
  closingDate?: Date | null;

  @Column({ name: 'DTIMPORTACAO', type: 'date', nullable: true })
  importDate?: Date | null;

  @Column({ name: 'DTINITRANSACAODIG', type: 'date', nullable: true })
  digitalTransactionInitDate?: Date | null;

  @Column({ name: 'DTITERACAOTRANSACAODIG', type: 'date', nullable: true })
  digitalTransactionIterDate?: Date | null;

  @Column({ name: 'DTLIBERA', type: 'date', nullable: true })
  releaseDate?: Date | null;

  @Column({ name: 'DTVALIDADE', type: 'date', nullable: true })
  validityDate?: Date | null;

  @Column({ name: 'DTVENC1', type: 'date', nullable: true })
  dueDate1?: Date | null;

  @Column({ name: 'DTVENC2', type: 'date', nullable: true })
  dueDate2?: Date | null;

  @Column({ name: 'DTVENC3', type: 'date', nullable: true })
  dueDate3?: Date | null;

  @Column({ name: 'DUPLICADO', type: 'varchar2', length: 1, nullable: true })
  duplicated?: string | null;

  @Column({ name: 'EANCOBRANCA', type: 'number', precision: 14, scale: 0, nullable: true })
  chargeEan?: number | null;

  @Column({ name: 'EANCODPROD', type: 'number', precision: 14, scale: 0, nullable: true })
  productCodeEan?: number | null;

  @Column({ name: 'EANENTREGA', type: 'number', precision: 14, scale: 0, nullable: true })
  deliveryEan?: number | null;

  @Column({ name: 'EDITANDOORCA', type: 'varchar2', length: 1, nullable: true })
  editingQuote?: string | null;

  @Column({ name: 'EMAILENVIADO', type: 'varchar2', length: 1, nullable: true })
  emailSent?: string | null;

  @Column({ name: 'ENDERECO', type: 'varchar2', length: 40, nullable: true })
  address?: string | null;

  @Column({ name: 'ENVIAEMAIL', type: 'blob', nullable: true })
  sendEmail?: Buffer | null;

  @Column({ name: 'ESPECIEMANIF', type: 'varchar2', length: 2, nullable: true })
  manifestType?: string | null;

  @Column({ name: 'ESTOQUEVENDAVALERESERVADO', type: 'varchar2', length: 1, nullable: true })
  stockSaleReservedValue?: string | null;

  @Column({ name: 'EXPORTADO', type: 'varchar2', length: 1, nullable: true })
  exported?: string | null;

  @Column({ name: 'FRETEDESPACHO', type: 'varchar2', length: 1, nullable: true })
  despatchFreight?: string | null;

  @Column({ name: 'FRETEREDESPACHO', type: 'varchar2', length: 1, nullable: true })
  redespatchFreight?: string | null;

  @Column({ name: 'GERACP', type: 'varchar2', length: 1, nullable: true })
  generateCp?: string | null;

  @Column({ name: 'GERARCONTROLEDEENTREGA', type: 'varchar2', length: 1, nullable: true })
  generateDeliveryControl?: string | null;

  @Column({ name: 'GNFCONF', type: 'varchar2', length: 6, nullable: true })
  gnfConfirmation?: string | null;

  @Column({ name: 'HORA', type: 'number', precision: 2, scale: 0, nullable: true })
  hour?: number | null;

  @Column({ name: 'HORAENTREGA', type: 'number', precision: 2, scale: 0, nullable: true })
  deliveryHour?: number | null;

  @Column({ name: 'IE', type: 'varchar2', length: 18, nullable: true })
  inscriptionStatus?: string | null;

  @Column({ name: 'INDICADORACRESCIMO', type: 'varchar2', length: 1, nullable: true })
  increaseIndicator?: string | null;

  @Column({ name: 'INDICADORDESCONTO', type: 'varchar2', length: 1, nullable: true })
  discountIndicator?: string | null;

  @Column({ name: 'JSONCRM_CLIENTE', type: 'blob', nullable: true })
  crmClientJson?: Buffer | null;

  @Column({ name: 'JSONCRM_PROCESSAVENDA', type: 'blob', nullable: true })
  crmSalesProcessJson?: Buffer | null;

  @Column({ name: 'JSONTPD_PAGAMENTO', type: 'blob', nullable: true })
  paymentTpdJson?: Buffer | null;

  @Column({ name: 'LETRACOMIS', type: 'varchar2', length: 2, nullable: true })
  commissionLetter?: string | null;

  @Column({ name: 'LISTA_MD5_2030MG', type: 'varchar2', length: 40, nullable: true })
  md5List2030Mg?: string | null;

  @Column({ name: 'LOCALDESEMBARACO', type: 'varchar2', length: 30, nullable: true })
  clearanceLocation?: string | null;

  @Column({ name: 'LOG', type: 'clob', nullable: true })
  log?: string | null;

  @Column({ name: 'MARGEM', type: 'number', precision: 10, scale: 2, nullable: true })
  margin?: number | null;

  @Column({ name: 'MD5PAF', type: 'varchar2', length: 200, nullable: true })
  pafMd5?: string | null;

  @Column({ name: 'MENSAGEM', type: 'varchar2', length: 3000, nullable: true })
  message?: string | null;

  @Column({ name: 'MESASERVIR', type: 'number', precision: 18, scale: 6, nullable: true })
  tableServing?: number | null;

  @Column({ name: 'MINUTO', type: 'number', precision: 2, scale: 0, nullable: true })
  minute?: number | null;

  @Column({ name: 'MINUTOENTREGA', type: 'number', precision: 2, scale: 0, nullable: true })
  deliveryMinute?: number | null;

  @Column({ name: 'MONTANDO', type: 'varchar2', length: 1, nullable: true })
  assembling?: string | null;

  @Column({ name: 'MOTIVOPOSICAO', type: 'varchar2', length: 60, nullable: true })
  positionReason?: string | null;

  @Column({ name: 'NEGOCIADO', type: 'varchar2', length: 1, nullable: true })
  negotiated?: string | null;

  @Column({ name: 'NFCE', type: 'varchar2', length: 1, nullable: true })
  nfce?: string | null;

  @Column({ name: 'NSU', type: 'varchar2', length: 15, nullable: true })
  nsu?: string | null;

  @Column({ name: 'NUMCAIXA', type: 'number', precision: 4, scale: 0, nullable: true })
  boxNumber?: number | null;

  @Column({ name: 'NUMCAR', type: 'number', precision: 8, scale: 0, nullable: true })
  transportNumber?: number | null;

  @Column({ name: 'NUMCARMANIF', type: 'number', precision: 8, scale: 0, nullable: true })
  manifestTransportNumber?: number | null;

  @Column({ name: 'NUMCCF', type: 'number', precision: 8, scale: 0, nullable: true })
  ccfNumber?: number | null;

  @Column({ name: 'NUMCUPOM', type: 'number', precision: 10, scale: 0, nullable: true })
  couponNumber?: number | null;

  @Column({ name: 'NUMDAV', type: 'number', precision: 13, scale: 0, nullable: true })
  davNumber?: number | null;

  @Column({ name: 'NUMDOCTOPDV', type: 'number', precision: 11, scale: 0, nullable: true })
  pdvDocNumber?: number | null;

  @Column({ name: 'NUMEMPENHO', type: 'varchar2', length: 20, nullable: true })
  commitmentNumber?: string | null;

  @Column({ name: 'NUMEROORCAMENTO', type: 'number', precision: 8, scale: 0, nullable: true })
  quoteNumber?: number | null;

  @Column({ name: 'NUMFICHA', type: 'number', precision: 10, scale: 0, nullable: true })
  sheetNumber?: number | null;

  @Column({ name: 'NUMITENS', type: 'number', precision: 4, scale: 0, nullable: true })
  itemsNumber?: number | null;

  @Column({ name: 'NUMLISTA', type: 'number', precision: 6, scale: 0, nullable: true })
  listNumber?: number | null;

  @Column({ name: 'NUMNFPAF', type: 'number', precision: 20, scale: 0, nullable: true })
  nfPafNumber?: number | null;

  @Column({ name: 'NUMNOTA', type: 'number', precision: 10, scale: 0, nullable: true })
  noteNumber?: number | null;

  @Column({ name: 'NUMNOTAMANIF', type: 'number', precision: 10, scale: 0, nullable: true })
  manifestNoteNumber?: number | null;

  @Column({ name: 'NUMNOTATRANSF', type: 'number', precision: 10, scale: 0, nullable: true })
  transferNoteNumber?: number | null;

  @PrimaryColumn({ name: 'NUMORCA', type: 'number', precision: 10, scale: 0, nullable: false })
  orderNumber?: number;

  @Column({ name: 'NUMORCAENTFUT', type: 'number', precision: 10, scale: 0, nullable: true })
  futureDeliveryOrderNumber?: number | null;

  @Column({ name: 'NUMORCAFILIAL', type: 'number', precision: 10, scale: 0, nullable: true })
  branchOrderNumber?: number | null;

  @Column({ name: 'NUMORCAORIGEM', type: 'number', precision: 10, scale: 0, nullable: true })
  originOrderNumber?: number | null;

  @Column({ name: 'NUMORCAPRINC', type: 'number', precision: 10, scale: 0, nullable: true })
  mainOrderNumber?: number | null;

  @Column({ name: 'NUMPED', type: 'number', precision: 10, scale: 0, nullable: true })
  orderNumber2?: number | null;

  @Column({ name: 'NUMPEDBNF', type: 'number', precision: 10, scale: 0, nullable: true })
  benefitOrderNumber?: number | null;

  @Column({ name: 'NUMPEDCLI', type: 'varchar2', length: 15, nullable: true })
  clientOrderNumber?: string | null;

  @Column({ name: 'NUMPEDECF', type: 'number', precision: 10, scale: 0, nullable: true })
  ecfOrderNumber?: number | null;

  @Column({ name: 'NUMPEDENTFUT', type: 'number', precision: 10, scale: 0, nullable: true })
  futureDeliveryOrderNumber2?: number | null;

  @Column({ name: 'NUMPEDRCA', type: 'number', precision: 10, scale: 0, nullable: true })
  rcaOrderNumber?: number | null;

  @Column({ name: 'NUMPREVENDA', type: 'number', precision: 10, scale: 0, nullable: true })
  resaleOrderNumber?: number | null;

  @Column({ name: 'NUMREGIAO', type: 'number', precision: 4, scale: 0, nullable: true })
  regionNumber?: number | null;

  @Column({ name: 'NUMREGIAOAVULSA', type: 'number', precision: 4, scale: 0, nullable: true })
  bulkRegionNumber?: number | null;

  @Column({ name: 'NUMSEQENTREGA', type: 'number', precision: 20, scale: 0, nullable: true })
  deliverySequenceNumber?: number | null;

  @Column({ name: 'NUMSERIEEQUIP', type: 'varchar2', length: 30, nullable: true })
  equipmentSeriesNumber?: string | null;

  @Column({ name: 'NUMTABELA', type: 'varchar2', length: 20, nullable: true })
  tableNumber?: string | null;

  @Column({ name: 'NUMTRANSENTORIGEM', type: 'number', precision: 10, scale: 0, nullable: true })
  originTransactionNumber?: number | null;

  @Column({ name: 'NUMTRANSVENDA', type: 'number', precision: 10, scale: 0, nullable: true })
  saleTransactionNumber?: number | null;

  @Column({ name: 'NUMVIASORCA', type: 'number', precision: 2, scale: 0, nullable: true })
  quotesCopiesNumber?: number | null;

  @Column({ name: 'OBS', type: 'varchar2', length: 25, nullable: true })
  observation?: string | null;

  @Column({ name: 'OBS1', type: 'varchar2', length: 50, nullable: true })
  observation1?: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', length: 50, nullable: true })
  observation2?: string | null;

  @Column({ name: 'OBSENTREGA1', type: 'varchar2', length: 75, nullable: true })
  deliveryObservation1?: string | null;

  @Column({ name: 'OBSENTREGA2', type: 'varchar2', length: 75, nullable: true })
  deliveryObservation2?: string | null;

  @Column({ name: 'OBSENTREGA3', type: 'varchar2', length: 75, nullable: true })
  deliveryObservation3?: string | null;

  @Column({ name: 'OPERACAO', type: 'varchar2', length: 1, nullable: true })
  operation?: string | null;

  @Column({ name: 'OPERVENDAEXPINDIRETA', type: 'varchar2', length: 1, nullable: true })
  indirectExportSaleOper?: string | null;

  @Column({ name: 'ORCADOPOR', type: 'varchar2', length: 60, nullable: true })
  quotedBy?: string | null;

  @Column({ name: 'ORCAGERADODEVALES', type: 'varchar2', length: 1, nullable: true })
  quoteGeneratedFromVales?: string | null;

  @Column({ name: 'ORCAMENTOUTILIZADO', type: 'varchar2', length: 1, nullable: true })
  quotationUsed?: string | null;

  @Column({ name: 'ORCASALVO', type: 'varchar2', length: 1, nullable: true })
  quoteSaved?: string | null;

  @Column({ name: 'ORIGEMPED', type: 'varchar2', length: 1, nullable: true })
  orderOrigin?: string | null;

  @Column({ name: 'PAGCHEQUEMORADIA', type: 'varchar2', length: 1, nullable: true })
  housingCheckPayment?: string | null;

  @Column({ name: 'PERCACRESCRODAPE', type: 'number', precision: 18, scale: 6, nullable: true })
  baseboardIncreasePercentage?: number | null;

  @Column({ name: 'PERCCOMPROFISSIONAL', type: 'number', precision: 8, scale: 4, nullable: true })
  professionalCommissionPercentage?: number | null;

  @Column({ name: 'PERCDESCATIV', type: 'number', precision: 5, scale: 2, nullable: true })
  statusDiscountPercentage?: number | null;

  @Column({ name: 'PERCDESCONTORODAPE', type: 'number', precision: 18, scale: 6, nullable: true })
  baseboardDiscountPercentage?: number | null;

  @Column({ name: 'PERCVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  salesPercentage?: number | null;

  @Column({ name: 'PERDESC', type: 'number', precision: 18, scale: 6, nullable: true })
  discountPercentage?: number | null;

  @Column({ name: 'PERDESCAVISTA', type: 'number', precision: 18, scale: 6, nullable: true })
  cashDiscountPercentage?: number | null;

  @Column({ name: 'PERDESCFIN', type: 'number', precision: 12, scale: 6, nullable: true })
  financialDiscountPercentage?: number | null;

  @Column({ name: 'PERDESCTOTAL', type: 'number', precision: 18, scale: 6, nullable: true })
  totalDiscountPercentage?: number | null;

  @Column({ name: 'PERMITEPRODSEMDISTRIBUICAO', type: 'varchar2', length: 1, nullable: true })
  allowProductWithoutDistribution?: string | null;

  @Column({ name: 'PLACAVEICULO', type: 'varchar2', length: 10, nullable: true })
  vehicleLicensePlate?: string | null;

  @Column({ name: 'PLPAGAAVISTA', type: 'varchar2', length: 1, nullable: true })
  paymentPlanCashAavista?: string | null;

  @Column({ name: 'PLPAGAVISTA', type: 'varchar2', length: 1, nullable: true })
  paymentPlanAvista?: string | null;

  @Column({ name: 'POSICAO', type: 'varchar2', length: 2, nullable: true })
  position?: string | null;

  @Column({ name: 'PRAZO1', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline1?: number | null;

  @Column({ name: 'PRAZO10', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline10?: number | null;

  @Column({ name: 'PRAZO11', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline11?: number | null;

  @Column({ name: 'PRAZO12', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline12?: number | null;

  @Column({ name: 'PRAZO2', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline2?: number | null;

  @Column({ name: 'PRAZO3', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline3?: number | null;

  @Column({ name: 'PRAZO4', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline4?: number | null;

  @Column({ name: 'PRAZO5', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline5?: number | null;

  @Column({ name: 'PRAZO6', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline6?: number | null;

  @Column({ name: 'PRAZO7', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline7?: number | null;

  @Column({ name: 'PRAZO8', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline8?: number | null;

  @Column({ name: 'PRAZO9', type: 'number', precision: 4, scale: 0, nullable: true })
  deadline9?: number | null;

  @Column({ name: 'PRAZOMEDIO', type: 'number', precision: 4, scale: 0, nullable: true })
  averageDeadline?: number | null;

  @Column({ name: 'QTPARCELAS', type: 'number', precision: 3, scale: 0, nullable: true })
  installmentsQuantity?: number | null;

  @Column({ name: 'RESERVARITENSTV7', type: 'varchar2', length: 1, nullable: true })
  reserveItemsTv7?: string | null;

  @Column({ name: 'RESTRICAOTRANSP', type: 'varchar2', length: 1, nullable: true })
  carrierRestriction?: string | null;

  @Column({ name: 'ROTINALANC', type: 'varchar2', length: 48, nullable: true })
  launchRoutine?: string | null;

  @Column({ name: 'SELECIONAREGIAOAVULSA', type: 'varchar2', length: 1, nullable: true })
  selectBulkRegion?: string | null;

  @Column({ name: 'SERIEECF', type: 'varchar2', length: 2, nullable: true })
  seriesEcf?: string | null;

  @Column({ name: 'SERIEMANIF', type: 'varchar2', length: 2, nullable: true })
  manifestSeries?: string | null;

  @Column({ name: 'SITUACAOENTREGA', type: 'varchar2', length: 2, nullable: true })
  deliveryStatus?: string | null;

  @Column({ name: 'STATUSTRANSACAODIG', type: 'varchar2', length: 25, nullable: true })
  digitalTransactionStatus?: string | null;

  @Column({ name: 'STCLIENTEGNRE', type: 'number', precision: 18, scale: 6, nullable: true })
  clientStatusGnre?: number | null;

  @Column({ name: 'TELEFONE', type: 'varchar2', length: 13, nullable: true })
  phone?: string | null;

  @Column({ name: 'TIPOCARGA', type: 'varchar2', length: 1, nullable: true })
  loadType?: string | null;

  @Column({ name: 'TIPOCONTACORRENTE', type: 'varchar2', length: 1, nullable: true })
  accountType?: string | null;

  @Column({ name: 'TIPODOC', type: 'varchar2', length: 1, nullable: true })
  documentType?: string | null;

  @Column({ name: 'TIPODOCUMENTO', type: 'varchar2', length: 1, nullable: true })
  documentType2?: string | null;

  @Column({ name: 'TIPOEMBALAGEM', type: 'varchar2', length: 1, nullable: true })
  packagingType?: string | null;

  @Column({ name: 'TIPOFV', type: 'varchar2', length: 2, nullable: true })
  fvType?: string | null;

  @Column({ name: 'TIPOIMPR', type: 'varchar2', length: 1, nullable: true })
  printerType?: string | null;

  @Column({ name: 'TIPONFDESTINO', type: 'varchar2', length: 2, nullable: true })
  destNfType?: string | null;

  @Column({ name: 'TIPOOPER', type: 'varchar2', length: 1, nullable: true })
  operationType?: string | null;

  @Column({ name: 'TIPOOPERACAOTEF', type: 'varchar2', length: 4, nullable: true })
  tefOperationType?: string | null;

  @Column({ name: 'TIPOORCAMENTO', type: 'varchar2', length: 1, nullable: true })
  quoteType?: string | null;

  @Column({ name: 'TIPOPRIORIDADEENTREGA', type: 'varchar2', length: 1, nullable: true })
  deliveryPriorityType?: string | null;

  @Column({ name: 'TIPORETIRADA', type: 'varchar2', length: 1, nullable: true })
  pickupType?: string | null;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', length: 2, nullable: true })
  saleType?: string | null;

  @Column({ name: 'TOTPESO', type: 'number', precision: 10, scale: 2, nullable: true })
  totalWeight?: number | null;

  @Column({ name: 'TOTVLBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  totalBonificationValue?: number | null;

  @Column({ name: 'TOTVLDESCCOM', type: 'number', precision: 18, scale: 6, nullable: true })
  totalCommissionDiscountValue?: number | null;

  @Column({ name: 'TOTVLDESCFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  totalFinancialDiscountValue?: number | null;

  @Column({ name: 'TOTVLDESCFLEX', type: 'number', precision: 18, scale: 6, nullable: true })
  totalFlexibleDiscountValue?: number | null;

  @Column({ name: 'TOTVLREDCOMISS', type: 'number', precision: 18, scale: 6, nullable: true })
  totalCommissionReductionValue?: number | null;

  @Column({ name: 'TOTVLREDCOMISSSUP', type: 'number', precision: 18, scale: 6, nullable: true })
  totalSupplementalCommissionReductionValue?: number | null;

  @Column({ name: 'TOTVOLUME', type: 'number', precision: 18, scale: 6, nullable: true })
  totalVolume?: number | null;

  @Column({ name: 'TRIBUTAPORREGIAOFILIAL', type: 'varchar2', length: 1, nullable: true })
  tributeByBranchRegion?: string | null;

  @Column({ name: 'TRIBVENDATRIANGULAR', type: 'varchar2', length: 1, nullable: true })
  triangularSaleTribute?: string | null;

  @Column({ name: 'UF', type: 'varchar2', length: 2, nullable: true })
  state?: string | null;

  @Column({ name: 'UFDESEMBARACO', type: 'varchar2', length: 2, nullable: true })
  clearanceState?: string | null;

  @Column({ name: 'USACFOPVENDANATV10', type: 'varchar2', length: 1, nullable: true })
  useCfopSaleNatv10?: string | null;

  @Column({ name: 'USAINTEGRACAOWMS', type: 'varchar2', length: 1, nullable: true })
  useWmsIntegration?: string | null;

  @Column({ name: 'VALORDESCFIN', type: 'number', precision: 18, scale: 3, nullable: true })
  finalDiscountAmount?: number | null;

  @Column({ name: 'VENDAASSISTIDA', type: 'varchar2', length: 1, nullable: true })
  assistedSale?: string | null;

  @Column({ name: 'VENDALOCESTRANG', type: 'varchar2', length: 1, nullable: true })
  foreignLocationSale?: string | null;

  @Column({ name: 'VENDATRIANGULAR', type: 'varchar2', length: 1, nullable: true })
  triangularSale?: string | null;

  @Column({ name: 'VLATEND', type: 'number', precision: 16, scale: 3, nullable: true })
  attendanceValue?: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', precision: 16, scale: 3, nullable: true })
  bonificationValue?: number | null;

  @Column({ name: 'VLCUSTOCONT', type: 'number', precision: 18, scale: 6, nullable: true })
  accountingCostValue?: number | null;

  @Column({ name: 'VLCUSTOFIN', type: 'number', precision: 14, scale: 2, nullable: true })
  financialCostValue?: number | null;

  @Column({ name: 'VLCUSTOREAL', type: 'number', precision: 14, scale: 2, nullable: true })
  realCostValue?: number | null;

  @Column({ name: 'VLCUSTOREP', type: 'number', precision: 18, scale: 6, nullable: true })
  replacementCostValue?: number | null;

  @Column({ name: 'VLDESCCUSTOCMV', type: 'number', precision: 12, scale: 4, nullable: true })
  costDiscountCmvValue?: number | null;

  @Column({ name: 'VLDESCONTO', type: 'number', precision: 12, scale: 2, nullable: true })
  discountValue?: number | null;

  @Column({ name: 'VLDESCONTOTOTAL', type: 'number', precision: 12, scale: 2, nullable: true })
  totalDiscountValue?: number | null;

  @Column({ name: 'VLDESCSUFRAMA', type: 'number', precision: 18, scale: 6, nullable: true })
  suframaDiscountValue?: number | null;

  @Column({ name: 'VLEMDINHEIRO', type: 'number', precision: 22, scale: 6, nullable: true })
  cashValue?: number | null;

  @Column({ name: 'VLENTRADA', type: 'number', precision: 16, scale: 3, nullable: true })
  entryValue?: number | null;

  @Column({ name: 'VLFRETE', type: 'number', precision: 14, scale: 2, nullable: true })
  freightValue?: number | null;

  @Column({ name: 'VLOUTRASDESP', type: 'number', precision: 14, scale: 2, nullable: true })
  otherExpensesValue?: number | null;

  @Column({ name: 'VLTABELA', type: 'number', precision: 19, scale: 6, nullable: true })
  tableValue?: number | null;

  @Column({ name: 'VLTOTAL', type: 'number', precision: 19, scale: 6, nullable: true })
  totalValue?: number | null;

  @Column({ name: 'VLTROCO', type: 'number', precision: 19, scale: 6, nullable: true })
  changeValue?: number | null;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', precision: 18, scale: 6, nullable: true })
  cliCmvVerbaValue?: number | null;
}
