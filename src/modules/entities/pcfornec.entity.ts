import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCFORNEC' })
export class PcfornecEntity {
  @Column({ name: 'ACEITAENTREGAANCECIP', type: 'varchar2', length: 1, nullable: true })
  acceptEarlyDelivery: string | null;

  @Column({ name: 'ADJUDICACAO', type: 'varchar2', length: 1, nullable: true })
  adjudication: string | null;

  @Column({ name: 'ADM_BAIRRO', type: 'varchar2', length: 40, nullable: true })
  adminNeighborhood: string | null;

  @Column({ name: 'ADM_CEP', type: 'number', precision: 8, scale: 0, nullable: true })
  adminZipCode: number | null;

  @Column({ name: 'ADM_CIDADE', type: 'varchar2', length: 40, nullable: true })
  adminCity: string | null;

  @Column({ name: 'ADM_CONTATO', type: 'varchar2', length: 40, nullable: true })
  adminContact: string | null;

  @Column({ name: 'ADM_DTANIVERSARIO', type: 'date', nullable: true })
  adminBirthDate: Date | null;

  @Column({ name: 'ADM_ENDERECO', type: 'varchar2', length: 40, nullable: true })
  adminAddress: string | null;

  @Column({ name: 'ADM_UF', type: 'varchar2', length: 2, nullable: true })
  adminState: string | null;

  @Column({ name: 'ALIMENTAFUNDOMULTIFILIAL', type: 'varchar2', length: 1, nullable: true })
  feedsMultiBranchFund: string | null;

  @Column({ name: 'APLICAVERBAREBCUSTO', type: 'varchar2', length: 1, nullable: true })
  applyAllowanceOnCostRebate: string | null;

  @Column({ name: 'ASSOCIACAODESPORTIVA', type: 'varchar2', length: 1, nullable: true })
  sportsAssociation: string | null;

  @Column({ name: 'ATUALIZASTULTENT', type: 'varchar2', length: 1, nullable: true })
  updateLastEntryStatus: string | null;

  @Column({ name: 'AVALIACAOVENDA', type: 'varchar2', length: 2, nullable: true })
  salesEvaluation: string | null;

  @Column({ name: 'BAIRRO', type: 'varchar2', length: 20, nullable: true })
  neighborhood: string | null;

  @Column({ name: 'BAIRROCOB', type: 'varchar2', length: 40, nullable: true })
  billingNeighborhood: string | null;

  @Column({ name: 'BLOQUEIO', type: 'varchar2', length: 1, nullable: true })
  blocked: string | null;

  @Column({ name: 'BLOQUEIOSEFAZFORNEC', type: 'varchar2', length: 1, nullable: true })
  sefazSupplierBlock: string | null;

  @Column({ name: 'CAE', type: 'varchar2', length: 30, nullable: true })
  cae: string | null;

  @Column({ name: 'CALCCREDICMSBASEREDUZIDA', type: 'varchar2', length: 1, nullable: true })
  calcIcmsCreditReducedBase: string | null;

  @Column({ name: 'CALCDESPFINPRAZOPGTO', type: 'varchar2', length: 1, nullable: true })
  calcFinExpPaymentTerm: string | null;

  @Column({ name: 'CALCIPICOMDESC', type: 'varchar2', length: 1, nullable: true })
  calcIpiWithDiscount: string | null;

  @Column({ name: 'CALCIPICOMFRETEFOB', type: 'varchar2', length: 1, nullable: true })
  calcIpiWithFobFreight: string | null;

  @Column({ name: 'CALCIPICOMFRETENF', type: 'varchar2', length: 1, nullable: true })
  calcIpiWithInvoiceFreight: string | null;

  @Column({ name: 'CALCPISCOFINSBASERED', type: 'varchar2', length: 1, nullable: true })
  calcPisCofinsReducedBase: string | null;

  @Column({ name: 'CALCSTGUIAALIQEXT', type: 'varchar2', length: 1, nullable: true })
  calcStGuideExtRate: string | null;

  @Column({ name: 'CALCSUFRAMASOBREPLIQUIDO', type: 'varchar2', length: 1, nullable: true })
  calcSuframaOnNetWeight: string | null;

  @Column({ name: 'CALCULAPISCOFINSCOMIPI', type: 'varchar2', length: 1, nullable: true })
  calcPisCofinsWithIpi: string | null;

  @Column({ name: 'CALCULARIPIPESOLIQ', type: 'varchar2', length: 1, nullable: true })
  calcIpiNetWeight: string | null;

  @Column({ name: 'CENTRALIZACAO', type: 'varchar2', length: 1, nullable: true })
  centralization: string | null;

  @Column({ name: 'CEP', type: 'varchar2', length: 11, nullable: true })
  zipCode: string | null;

  @Column({ name: 'CEPCOB', type: 'varchar2', length: 11, nullable: true })
  billingZipCode: string | null;

  @Column({ name: 'CFOPENTADJUD', type: 'number', precision: 8, scale: 0, nullable: true })
  cfopAdjudicationEntry: number | null;

  @Column({ name: 'CFOPRESSARCIMENTOSTGUIA', type: 'number', precision: 8, scale: 0, nullable: true })
  cfopStGuideReimbursement: number | null;

  @Column({ name: 'CFOPRESTITUICAO', type: 'number', precision: 8, scale: 0, nullable: true })
  cfopRestitution: number | null;

  @Column({ name: 'CGC', type: 'varchar2', length: 18, nullable: true })
  taxId: string | null;

  @Column({ name: 'CGCAUX', type: 'varchar2', length: 20, nullable: true })
  auxTaxId: string | null;

  @Column({ name: 'CHAVEPIX', type: 'varchar2', length: 100, nullable: true })
  pixKey: string | null;

  @Column({ name: 'CIDADE', type: 'varchar2', length: 15, nullable: true })
  city: string | null;

  @Column({ name: 'CLASSE', type: 'varchar2', length: 1, nullable: true })
  classification: string | null;

  @Column({ name: 'CLASSECOMPRA', type: 'varchar2', length: 1, nullable: true })
  purchaseClass: string | null;

  @Column({ name: 'CLASSEESTOQUE', type: 'varchar2', length: 1, nullable: true })
  stockClass: string | null;

  @Column({ name: 'CLASSEMC', type: 'varchar2', length: 1, nullable: true })
  mcClass: string | null;

  @Column({ name: 'CLASSEVENDA', type: 'varchar2', length: 1, nullable: true })
  salesClass: string | null;

  @Column({ name: 'CLASSIFICTIPOFORNEC', type: 'varchar2', length: 1, nullable: true })
  supplierTypeClassification: string | null;

  @Column({ name: 'COBERTURA', type: 'number', precision: 4, scale: 0, nullable: true })
  coverage: number | null;

  @Column({ name: 'CODCENTROCUSTO', type: 'varchar2', length: 40, nullable: true })
  costCenterCode: string | null;

  @Column({ name: 'CODCIDADE', type: 'number', precision: 6, scale: 0, nullable: true })
  cityCode: number | null;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  customerCode: number | null;

  @Column({ name: 'CODCOBSEFAZ', type: 'varchar2', length: 4, nullable: true })
  sefazCollectionCode: string | null;

  @Column({ name: 'CODCOMPRADOR', type: 'number', precision: 8, scale: 0, nullable: true })
  buyerCode: number | null;

  @Column({ name: 'CODCONTAB', type: 'varchar2', length: 12, nullable: true })
  accountingCode: string | null;

  @Column({ name: 'CODCONTACOFINS', type: 'number', precision: 10, scale: 0, nullable: true })
  cofinsAccountCode: number | null;

  @Column({ name: 'CODCONTACONTABADIANTFOR', type: 'number', precision: 10, scale: 0, nullable: true })
  supplierAdvanceAccountCode: number | null;

  @Column({ name: 'CODCONTACSRF', type: 'number', precision: 10, scale: 0, nullable: true })
  csrfAccountCode: number | null;

  @Column({ name: 'CODCONTAINSS', type: 'number', precision: 10, scale: 0, nullable: true })
  inssAccountCode: number | null;

  @Column({ name: 'CODCONTAINSSTOMADOR', type: 'number', precision: 10, scale: 0, nullable: true })
  inssTakerAccountCode: number | null;

  @Column({ name: 'CODCONTAIRRF', type: 'number', precision: 10, scale: 0, nullable: true })
  irrfAccountCode: number | null;

  @Column({ name: 'CODCONTAISS', type: 'number', precision: 10, scale: 0, nullable: true })
  issAccountCode: number | null;

  @Column({ name: 'CODCONTALANCFRETE', type: 'number', precision: 6, scale: 0, nullable: true })
  freightPostingAccountCode: number | null;

  @Column({ name: 'CODCONTAPIS', type: 'number', precision: 10, scale: 0, nullable: true })
  pisAccountCode: number | null;

  @Column({ name: 'CODCONTASESTSENAT', type: 'number', precision: 10, scale: 0, nullable: true })
  sestSenatAccountCode: number | null;

  @Column({ name: 'CODDEPTO', type: 'number', precision: 6, scale: 0, nullable: true })
  departmentCode: number | null;

  @Column({ name: 'CODDISTRIB', type: 'varchar2', length: 4, nullable: true })
  distributorCode: string | null;

  @PrimaryColumn({ name: 'CODFORNEC', type: 'number', precision: 6, scale: 0 })
  supplierCode: number;

  @Column({ name: 'CODFORNECBAL', type: 'varchar2', length: 4, nullable: true })
  balanceSupplierCode: string | null;

  @Column({ name: 'CODFORNECFRETE', type: 'number', precision: 8, scale: 0, nullable: true })
  freightSupplierCode: number | null;

  @Column({ name: 'CODFORNECPRINC', type: 'number', precision: 6, scale: 0, nullable: true })
  mainSupplierCode: number | null;

  @Column({ name: 'CODFORNECSTGUIA', type: 'number', precision: 6, scale: 0, nullable: true })
  stGuideSupplierCode: number | null;

  @Column({ name: 'CODFUNCULTCONTATOCOB', type: 'number', precision: 8, scale: 0, nullable: true })
  lastBillingContactEmployeeCode: number | null;

  @Column({ name: 'CODGLN', type: 'number', precision: 13, scale: 0, nullable: true })
  glnCode: number | null;

  @Column({ name: 'CODIGONACIONALOBRAS', type: 'varchar2', length: 14, nullable: true })
  nationalConstructionCode: string | null;

  @Column({ name: 'CODLICITGRUPOFORNEC', type: 'number', precision: 3, scale: 0, nullable: true })
  biddingSupplierGroupCode: number | null;

  @Column({ name: 'CODMUNICIPIO', type: 'number', precision: 10, scale: 0, nullable: true })
  municipalityCode: number | null;

  @Column({ name: 'CODPAIS', type: 'number', precision: 6, scale: 0, nullable: true })
  countryCode: number | null;

  @Column({ name: 'CODPARCELA', type: 'number', precision: 6, scale: 0, nullable: true })
  installmentCode: number | null;

  @Column({ name: 'CODPARCELADIFALIQ', type: 'number', precision: 6, scale: 0, nullable: true })
  diffRateInstallmentCode: number | null;

  @Column({ name: 'CODPARCELAFRETEFOB', type: 'number', precision: 6, scale: 0, nullable: true })
  fobFreightInstallmentCode: number | null;

  @Column({ name: 'CODPARCELAFUNRURAL', type: 'number', precision: 6, scale: 0, nullable: true })
  funruralInstallmentCode: number | null;

  @Column({ name: 'CODPARCELAOUTDESP', type: 'number', precision: 6, scale: 0, nullable: true })
  otherExpensesInstallmentCode: number | null;

  @Column({ name: 'CODPARCELASTGUIA', type: 'number', precision: 6, scale: 0, nullable: true })
  stGuideInstallmentCode: number | null;

  @Column({ name: 'CODPARCICMSANTECIP', type: 'number', precision: 6, scale: 0, nullable: true })
  anticipatedIcmsInstallmentCode: number | null;

  @Column({ name: 'CODPRODUTORRURAL', type: 'varchar2', length: 20, nullable: true })
  ruralProducerCode: string | null;

  @Column({ name: 'CODSITTRIBPISCOFINSCONHEC', type: 'number', precision: 3, scale: 0, nullable: true })
  pisCofinsKnownTaxSitCode: number | null;

  @Column({ name: 'CODSITTRIBPISCOFINSSERVICO', type: 'number', precision: 3, scale: 0, nullable: true })
  pisCofinsServiceTaxSitCode: number | null;

  @Column({ name: 'CODTIPOCHAVEPIX', type: 'varchar2', length: 2, nullable: true })
  pixKeyTypeCode: string | null;

  @Column({ name: 'CODUSUARIOWINTHOR', type: 'number', precision: 8, scale: 0, nullable: true })
  winthorUserCode: number | null;

  @Column({ name: 'COMPLEMENTOEND', type: 'varchar2', length: 80, nullable: true })
  addressComplement: string | null;

  @Column({ name: 'COM_BAIRRO', type: 'varchar2', length: 40, nullable: true })
  commercialNeighborhood: string | null;

  @Column({ name: 'COM_CELULAR', type: 'varchar2', length: 20, nullable: true })
  commercialCellPhone: string | null;

  @Column({ name: 'COM_CEP', type: 'number', precision: 8, scale: 0, nullable: true })
  commercialZipCode: number | null;

  @Column({ name: 'COM_CIDADE', type: 'varchar2', length: 40, nullable: true })
  commercialCity: string | null;

  @Column({ name: 'COM_CONTATO', type: 'varchar2', length: 40, nullable: true })
  commercialContact: string | null;

  @Column({ name: 'COM_DTANIVERSARIO', type: 'date', nullable: true })
  commercialBirthDate: Date | null;

  @Column({ name: 'COM_EMAIL', type: 'varchar2', length: 100, nullable: true })
  commercialEmail: string | null;

  @Column({ name: 'COM_ENDERECO', type: 'varchar2', length: 40, nullable: true })
  commercialAddress: string | null;

  @Column({ name: 'COM_UF', type: 'varchar2', length: 2, nullable: true })
  commercialState: string | null;

  @Column({ name: 'CONCEDCREDPRES', type: 'varchar2', length: 1, nullable: true })
  grantPresumedCredit: string | null;

  @Column({ name: 'CONDCOMERCAUTORIZMED', type: 'varchar2', length: 20, nullable: true })
  commercialConditionAuthorizedMeasure: string | null;

  @Column({ name: 'CONSCAPATAZIAICMS', type: 'varchar2', length: 1, nullable: true })
  considerWharfageIcms: string | null;

  @Column({ name: 'CONSDESONNOVESUFRAMA', type: 'varchar2', length: 1, nullable: true })
  considerNewSuframaExemption: string | null;

  @Column({ name: 'CONSFRETEFOBBASEDIFALIQ', type: 'varchar2', length: 1, nullable: true })
  considerFobFreightDiffRateBase: string | null;

  @Column({ name: 'CONSFRETEFOBBASESTNF', type: 'varchar2', length: 1, nullable: true })
  considerFobFreightStInvoiceBase: string | null;

  @Column({ name: 'CONSFRETEFOBCALCICMSANTECIP', type: 'varchar2', length: 1, nullable: true })
  considerFobFreightCalcAnticIcms: string | null;

  @Column({ name: 'CONSIDERARPAUTAZEROSTGUIA', type: 'varchar2', length: 1, nullable: true })
  considerZeroGuidelineSt: string | null;

  @Column({ name: 'CONSIPICALCBASECREPRES', type: 'varchar2', length: 1, nullable: true })
  considerIpiCalcPresumedCreditBase: string | null;

  @Column({ name: 'CONSIPICALCBASEST', type: 'varchar2', length: 1, nullable: true })
  considerIpiCalcStBase: string | null;

  @Column({ name: 'CONSIPICALCICMSANT', type: 'varchar2', length: 1, nullable: true })
  considerIpiCalcAnticIcms: string | null;

  @Column({ name: 'CONSMAIORICMSVLPAUTA', type: 'varchar2', length: 1, nullable: true })
  considerHigherIcmsGuidelineValue: string | null;

  @Column({ name: 'CONSOLIDARDIFPRECOVERBA', type: 'varchar2', length: 1, nullable: true })
  consolidatePriceDiffAllowance: string | null;

  @Column({ name: 'CONSSTGUIAPISCOFINS', type: 'varchar2', length: 1, nullable: true })
  considerStGuidePisCofins: string | null;

  @Column({ name: 'CONSSTNFPISCOFINS', type: 'varchar2', length: 1, nullable: true })
  considerStInvoicePisCofins: string | null;

  @Column({ name: 'CONSUMIDORFINAL', type: 'varchar2', length: 1, nullable: true })
  finalConsumer: string | null;

  @Column({ name: 'CONTATO', type: 'varchar2', length: 40, nullable: true })
  contact: string | null;

  @Column({ name: 'CONTATOADM', type: 'varchar2', length: 40, nullable: true })
  adminContactName: string | null;

  @Column({ name: 'CONTATOCOM', type: 'varchar2', length: 40, nullable: true })
  commercialContactName: string | null;

  @Column({ name: 'CONTATOVERBA', type: 'varchar2', length: 40, nullable: true })
  allowanceContact: string | null;

  @Column({ name: 'CONTRIBUINTEDOCPRB', type: 'varchar2', length: 1, nullable: true })
  taxpayerDocPrb: string | null;

  @Column({ name: 'CONTRIBUINTEICMS', type: 'varchar2', length: 1, nullable: true })
  icmsTaxpayer: string | null;

  @Column({ name: 'CPFCONTATOVERBA', type: 'varchar2', length: 18, nullable: true })
  allowanceContactCpf: string | null;

  @Column({ name: 'CPFPRODUTORRURAL', type: 'varchar2', length: 18, nullable: true })
  ruralProducerCpf: string | null;

  @Column({ name: 'CREDITADESCMENOROPERLOG', type: 'varchar2', length: 1, nullable: true })
  creditLowerDiscountOperLog: string | null;

  @Column({ name: 'CREDITARSALDOESTVERBA', type: 'varchar2', length: 1, nullable: true })
  creditAllowanceStockBalance: string | null;

  @Column({ name: 'CRF', type: 'varchar2', length: 30, nullable: true })
  crf: string | null;

  @Column({ name: 'DEDFRETECIFCREDPRESICMS', type: 'varchar2', length: 1, nullable: true })
  deductCifFreightPresumedIcmsCredit: string | null;

  @Column({ name: 'DEDUZIRCAPATAZIABASEII', type: 'varchar2', length: 1, nullable: true })
  deductWharfageFromIiBase: string | null;

  @Column({ name: 'DEDUZIRCAPATAZIABASEPISCOFINS', type: 'varchar2', length: 1, nullable: true })
  deductWharfageFromPisCofinsBase: string | null;

  @Column({ name: 'DEDUZIRFCPICMSDOFCPST', type: 'varchar2', length: 1, nullable: true })
  deductFcpIcmsFromFcpSt: string | null;

  @Column({ name: 'DEDUZIRICMSDIFBASEICMSATECIP', type: 'varchar2', length: 1, nullable: true })
  deductIcmsDiffFromAnticIcmsBase: string | null;

  @Column({ name: 'DEDUZIRIPIBASEDIFALIQ', type: 'varchar2', length: 1, nullable: true })
  deductIpiFromDiffRateBase: string | null;

  @Column({ name: 'DEDUZIRSUFRAMAALIQEXT', type: 'varchar2', length: 1, nullable: true })
  deductSuframaExtRate: string | null;

  @Column({ name: 'DEDUZIRSUFRAMABCSTALIQ1', type: 'varchar2', length: 1, nullable: true })
  deductSuframaStBaseRate1: string | null;

  @Column({ name: 'DEDUZIRSUFRAMACALCCREDICM', type: 'varchar2', length: 1, nullable: true })
  deductSuframaCalcIcmsCredit: string | null;

  @Column({ name: 'DEDUZIRSUFRAMACALCCREDPIS', type: 'varchar2', length: 1, nullable: true })
  deductSuframaCalcPisCredit: string | null;

  @Column({ name: 'DEDUZIRSUFRAMADIFALIQ', type: 'varchar2', length: 1, nullable: true })
  deductSuframaDiffRate: string | null;

  @Column({ name: 'DESCPAGTODUP', type: 'varchar2', length: 1, nullable: true })
  paymentDiscountDuplicate: string | null;

  @Column({ name: 'DESCREDICMSFCP3010', type: 'varchar2', length: 1, nullable: true })
  discountIcmsFcp3010: string | null;

  @Column({ name: 'DESTACASELONF', type: 'varchar2', length: 1, nullable: true })
  highlightSealOnInvoice: string | null;

  @Column({ name: 'DETENTORREGESPECIAL', type: 'char', length: 1, nullable: true })
  specialRegimeHolder: string | null;

  @Column({ name: 'DIAPGVERBAOPERLOG', type: 'number', precision: 2, scale: 0, nullable: true })
  allowancePayDayOperLog: number | null;

  @Column({ name: 'DIASAVALIACAOVENDA', type: 'number', precision: 4, scale: 0, nullable: true })
  salesEvaluationDays: number | null;

  @Column({ name: 'DIASEMANAATEND', type: 'number', precision: 2, scale: 0, nullable: true })
  serviceWeekDay: number | null;

  @Column({ name: 'DISTRIB', type: 'varchar2', length: 1, nullable: true })
  distributor: string | null;

  @Column({ name: 'DTBLOQUEIO', type: 'date', nullable: true })
  blockDate: Date | null;

  @Column({ name: 'DTBLOQUEIOSEFAZFORNEC', type: 'date', nullable: true })
  sefazSupplierBlockDate: Date | null;

  @Column({ name: 'DTCADASTRO', type: 'date', nullable: true })
  registrationDate: Date | null;

  @Column({ name: 'DTEXCLUSAO', type: 'date', nullable: true })
  deletionDate: Date | null;

  @Column({ name: 'DTEXCLUSAOSOFITVIEW', type: 'date', nullable: true })
  sofitViewDeletionDate: Date | null;

  @Column({ name: 'DTIMPORTINTEGRACAO', type: 'date', nullable: true })
  integrationImportDate: Date | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsLastChangeDate: Date | null;

  @Column({ name: 'DTPROXATEND', type: 'date', nullable: true })
  nextServiceDate: Date | null;

  @Column({ name: 'DTPROXCOMPRA', type: 'date', nullable: true })
  nextPurchaseDate: Date | null;

  @Column({ name: 'DTPROXCONTATOCOB', type: 'date', nullable: true })
  nextBillingContactDate: Date | null;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  lastChangeDate: Date | null;

  @Column({ name: 'DTULTALTERSOFITVIEW', type: 'date', nullable: true })
  sofitViewLastChangeDate: Date | null;

  @Column({ name: 'DTULTALTERSRVPRC', type: 'date', nullable: true })
  srvPrcLastChangeDate: Date | null;

  @Column({ name: 'DTULTCOMPRA', type: 'date', nullable: true })
  lastPurchaseDate: Date | null;

  @Column({ name: 'DTULTCONTATOCOB', type: 'date', nullable: true })
  lastBillingContactDate: Date | null;

  @Column({ name: 'DTVALIDADE', type: 'date', nullable: true })
  expirationDate: Date | null;

  @Column({ name: 'DTVENCALVARAANVISA', type: 'date', nullable: true })
  anvisaLicenseExpirationDate: Date | null;

  @Column({ name: 'DTVENCALVARAFUNC', type: 'date', nullable: true })
  operatingLicenseExpirationDate: Date | null;

  @Column({ name: 'DTVENCALVARAPSICO', type: 'date', nullable: true })
  psychotropicLicenseExpirationDate: Date | null;

  @Column({ name: 'DTVENCCRF', type: 'date', nullable: true })
  crfExpirationDate: Date | null;

  @Column({ name: 'DVAG', type: 'varchar2', length: 2, nullable: true })
  agencyCheckDigit: string | null;

  @Column({ name: 'DVCC', type: 'varchar2', length: 2, nullable: true })
  accountCheckDigit: string | null;

  @Column({ name: 'EMAIL', type: 'varchar2', length: 100, nullable: true })
  email: string | null;

  @Column({ name: 'EMAILNFE', type: 'varchar2', length: 3500, nullable: true })
  nfeEmail: string | null;

  @Column({ name: 'EMITENFE', type: 'varchar2', length: 1, nullable: true })
  issuesNfe: string | null;

  @Column({ name: 'ENDER', type: 'varchar2', length: 40, nullable: true })
  address: string | null;

  @Column({ name: 'ENDERCOB', type: 'varchar2', length: 40, nullable: true })
  billingAddress: string | null;

  @Column({ name: 'EQUIPINDUSTRIA', type: 'varchar2', length: 1, nullable: true })
  industryEquipment: string | null;

  @Column({ name: 'EREABASTECIMENTO', type: 'varchar2', length: 1, nullable: true })
  isSupply: string | null;

  @Column({ name: 'EREDESPACHO', type: 'varchar2', length: 1, nullable: true })
  isDispatch: string | null;

  @Column({ name: 'ESTADO', type: 'varchar2', length: 2, nullable: true })
  state: string | null;

  @Column({ name: 'ESTCOB', type: 'varchar2', length: 2, nullable: true })
  billingState: string | null;

  @Column({ name: 'ESTRATEGICO', type: 'varchar2', length: 1, nullable: true })
  strategic: string | null;

  @Column({ name: 'EXCLUIDO', type: 'varchar2', length: 1, nullable: true })
  deleted: string | null;

  @Column({ name: 'EXIGEREDESPACHO', type: 'varchar2', length: 1, nullable: true })
  requiresDispatch: string | null;

  @Column({ name: 'FANTASIA', type: 'varchar2', length: 60, nullable: true })
  tradeName: string | null;

  @Column({ name: 'FAXFAB', type: 'varchar2', length: 20, nullable: true })
  manufacturerFax: string | null;

  @Column({ name: 'FAXREP', type: 'varchar2', length: 20, nullable: true })
  representativeFax: string | null;

  @Column({ name: 'FORMAPGTO', type: 'number', scale: 0, nullable: true })
  paymentMethod: number | null;

  @Column({ name: 'FORMATRIBPRODRURAL', type: 'varchar2', length: 1, nullable: true })
  ruralProducerTaxForm: string | null;

  @Column({ name: 'FORNECEDOR', type: 'varchar2', length: 60, nullable: true })
  supplierName: string | null;

  @Column({ name: 'FORNECIMPORTACAO', type: 'number', precision: 3, scale: 0, nullable: true })
  importSupplier: number | null;

  @Column({ name: 'GATILHO', type: 'number', precision: 12, scale: 4, nullable: true })
  trigger: number | null;

  @Column({ name: 'GERACREDDIFPRECO', type: 'varchar2', length: 1, nullable: true })
  generatePriceDiffCredit: string | null;

  @Column({ name: 'GERAPEDBONIFIC', type: 'varchar2', length: 1, nullable: true })
  generateBonusOrder: string | null;

  @Column({ name: 'GERAPEDIDOCOMPRAXML', type: 'varchar2', length: 1, nullable: true })
  generatePurchaseOrderXml: string | null;

  @Column({ name: 'GERARRECEITARESTITUICAO', type: 'varchar2', length: 1, nullable: true })
  generateRestitutionRevenue: string | null;

  @Column({ name: 'GRAVARCODFAB253', type: 'varchar2', length: 1, nullable: true })
  saveManufacturerCode253: string | null;

  @Column({ name: 'GRUPOCAMPANHA', type: 'number', precision: 6, scale: 0, nullable: true })
  campaignGroup: number | null;

  @Column({ name: 'HORACOLETA', type: 'number', precision: 2, scale: 0, nullable: true })
  collectionHour: number | null;

  @Column({ name: 'ICMSSOBRETXMINIMA', type: 'varchar2', length: 1, nullable: true })
  icmsOnMinimumRate: string | null;

  @Column({ name: 'IDINTEGRACAOMYFROTA', type: 'raw', length: 16, nullable: true })
  myFleetIntegrationId: string | null;

  @Column({ name: 'IDSOFITVIEW', type: 'varchar2', length: 10, nullable: true })
  sofitViewId: string | null;

  @Column({ name: 'IE', type: 'varchar2', length: 15, nullable: true })
  stateRegistration: string | null;

  @Column({ name: 'IEST', type: 'varchar2', length: 15, nullable: true })
  stateRegistrationSt: string | null;

  @Column({ name: 'IMPORTAXMLAUTOMATICO', type: 'varchar2', length: 1, nullable: true })
  autoImportXml: string | null;

  @Column({ name: 'INDAQPRODRURAL', type: 'varchar2', length: 1, nullable: true })
  ruralProducerAcquisitionInd: string | null;

  @Column({ name: 'INDUSTRIALOCAL', type: 'varchar2', length: 1, nullable: true })
  localIndustry: string | null;

  @Column({ name: 'INSCESTRANGEIRA', type: 'number', precision: 15, scale: 0, nullable: true })
  foreignRegistration: number | null;

  @Column({ name: 'INSCMUNICIP', type: 'varchar2', length: 15, nullable: true })
  municipalRegistration: string | null;

  @Column({ name: 'INSS', type: 'number', precision: 12, scale: 0, nullable: true })
  inss: number | null;

  @Column({ name: 'ISENTOST', type: 'varchar2', length: 1, nullable: true })
  stExempt: string | null;

  @Column({ name: 'JUROCAPITALPROP', type: 'varchar2', length: 1, nullable: true })
  ownCapitalInterest: string | null;

  @Column({ name: 'LEDTIME', type: 'number', precision: 4, scale: 0, nullable: true })
  leadTime: number | null;

  @Column({ name: 'LIBERAENTIMPXML', type: 'varchar2', length: 1, nullable: true })
  releaseXmlImportEntry: string | null;

  @Column({ name: 'LOCALIZACAO', type: 'varchar2', length: 20, nullable: true })
  location: string | null;

  @Column({ name: 'MANIFESTACAOAUTOMATICA', type: 'varchar2', length: 1, nullable: true })
  automaticManifestation: string | null;

  @Column({ name: 'MUNICOB', type: 'varchar2', length: 40, nullable: true })
  billingMunicipality: string | null;

  @Column({ name: 'NUMAGENCIADOC', type: 'number', precision: 6, scale: 0, nullable: true })
  docAgencyNumber: number | null;

  @Column({ name: 'NUMALVARAANVISA', type: 'varchar2', length: 30, nullable: true })
  anvisaLicenseNumber: string | null;

  @Column({ name: 'NUMALVARAFUNC', type: 'varchar2', length: 30, nullable: true })
  operatingLicenseNumber: string | null;

  @Column({ name: 'NUMALVARAPSICO', type: 'varchar2', length: 30, nullable: true })
  psychotropicLicenseNumber: string | null;

  @Column({ name: 'NUMBANCODOC', type: 'number', precision: 4, scale: 0, nullable: true })
  docBankNumber: number | null;

  @Column({ name: 'NUMCASASDECREDUCAOICMS', type: 'number', precision: 2, scale: 0, nullable: true })
  icmsReductionDecimalPlaces: number | null;

  @Column({ name: 'NUMCCORRENTEDOC', type: 'varchar2', length: 15, nullable: true })
  docCheckingAccountNumber: string | null;

  @Column({ name: 'NUMCREDENCIAMENTOSEFAZ', type: 'varchar2', length: 30, nullable: true })
  sefazAccreditationNumber: string | null;

  @Column({ name: 'NUMDEPIRRF', type: 'number', precision: 4, scale: 0, nullable: true })
  irrfDependentsNumber: number | null;

  @Column({ name: 'NUMEROEND', type: 'varchar2', length: 6, nullable: true })
  addressNumber: string | null;

  @Column({ name: 'NUMORDEM', type: 'number', precision: 3, scale: 0, nullable: true })
  orderNumber: number | null;

  @Column({ name: 'OBS', type: 'varchar2', length: 20, nullable: true })
  observation: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', length: 35, nullable: true })
  observation2: string | null;

  @Column({ name: 'OBSERVACAO', type: 'varchar2', length: 2000, nullable: true })
  remarks: string | null;

  @Column({ name: 'ORGAOPUB', type: 'varchar2', length: 1, nullable: true })
  publicAgency: string | null;

  @Column({ name: 'ORIGEMCUSTOCONTTRANSF', type: 'varchar2', length: 1, nullable: true })
  transferCostOriginCont: string | null;

  @Column({ name: 'ORIGEMPARCFINANC', type: 'varchar2', length: 1, nullable: true })
  financialInstallmentOrigin: string | null;

  @Column({ name: 'PERCBONDIN', type: 'number', precision: 12, scale: 2, nullable: true })
  cashBonusPercentage: number | null;

  @Column({ name: 'PERCBONMERC', type: 'number', precision: 12, scale: 2, nullable: true })
  goodsBonusPercentage: number | null;

  @Column({ name: 'PERCBONOUTRAS', type: 'number', precision: 12, scale: 2, nullable: true })
  otherBonusPercentage: number | null;

  @Column({ name: 'PERCCOFINSNFSERVICO', type: 'number', precision: 6, scale: 2, nullable: true })
  cofinsServiceInvoicePercentage: number | null;

  @Column({ name: 'PERCCOMISSAO', type: 'number', precision: 12, scale: 2, nullable: true })
  commissionPercentage: number | null;

  @Column({ name: 'PERCCONTRIBBEMCONC', type: 'number', precision: 12, scale: 4, nullable: true })
  grantedAssetContribPercentage: number | null;

  @Column({ name: 'PERCCONTRIBPREVDESC', type: 'number', precision: 12, scale: 4, nullable: true })
  socialSecurityContribDiscPercentage: number | null;

  @Column({ name: 'PERCCONTRIBSENAR', type: 'number', precision: 12, scale: 4, nullable: true })
  senarContribPercentage: number | null;

  @Column({ name: 'PERCCSRF', type: 'number', precision: 5, scale: 2, nullable: true })
  csrfPercentage: number | null;

  @Column({ name: 'PERCDESCFIN', type: 'number', precision: 12, scale: 4, nullable: true })
  financialDiscountPercentage: number | null;

  @Column({ name: 'PERCDESPFIN', type: 'number', precision: 12, scale: 4, nullable: true })
  financialExpensePercentage: number | null;

  @Column({ name: 'PERCFLUVIAL', type: 'number', precision: 6, scale: 4, nullable: true })
  fluvialPercentage: number | null;

  @Column({ name: 'PERCIMPPRODUTORURAL', type: 'number', precision: 12, scale: 4, nullable: true })
  ruralProducerTaxPercentage: number | null;

  @Column({ name: 'PERCINSS', type: 'number', precision: 5, scale: 2, nullable: true })
  inssPercentage: number | null;

  @Column({ name: 'PERCINSSTOMADOR', type: 'number', precision: 5, scale: 2, nullable: true })
  inssTakerPercentage: number | null;

  @Column({ name: 'PERCIRRF', type: 'number', precision: 4, scale: 2, nullable: true })
  irrfPercentage: number | null;

  @Column({ name: 'PERCISS', type: 'number', precision: 4, scale: 2, nullable: true })
  issPercentage: number | null;

  @Column({ name: 'PERCMARGEMGARANTIDA', type: 'number', precision: 12, scale: 4, nullable: true })
  guaranteedMarginPercentage: number | null;

  @Column({ name: 'PERCMAXBONIFIC', type: 'number', precision: 5, scale: 2, nullable: true })
  maxBonusPercentage: number | null;

  @Column({ name: 'PERCOFINS', type: 'number', precision: 6, scale: 2, nullable: true })
  cofinsPercentage: number | null;

  @Column({ name: 'PERCOUTROSCUSTOSFRETE', type: 'number', precision: 5, scale: 2, nullable: true })
  otherFreightCostsPercentage: number | null;

  @Column({ name: 'PERCPISNFSERVICO', type: 'number', precision: 6, scale: 2, nullable: true })
  pisServiceInvoicePercentage: number | null;

  @Column({ name: 'PERCPISRED', type: 'number', precision: 5, scale: 2, nullable: true })
  pisReducedPercentage: number | null;

  @Column({ name: 'PERCREDORGAOPUB', type: 'number', precision: 12, scale: 4, nullable: true })
  publicAgencyReductionPercentage: number | null;

  @Column({ name: 'PERCSESTSENAT', type: 'number', precision: 5, scale: 2, nullable: true })
  sestSenatPercentage: number | null;

  @Column({ name: 'PERFRETEVALOR', type: 'number', precision: 12, scale: 4, nullable: true })
  freightValuePercentage: number | null;

  @Column({ name: 'PERGRIS', type: 'number', precision: 8, scale: 4, nullable: true })
  grisPercentage: number | null;

  @Column({ name: 'PERIOCIDADEATEND', type: 'number', precision: 4, scale: 0, nullable: true })
  servicePeriodicity: number | null;

  @Column({ name: 'PERIODICIDADECOMPRA', type: 'number', precision: 4, scale: 0, nullable: true })
  purchasePeriodicity: number | null;

  @Column({ name: 'PERPIS', type: 'number', precision: 6, scale: 2, nullable: true })
  pisPercentage: number | null;

  @Column({ name: 'PESOMINTRANSP', type: 'number', precision: 12, scale: 4, nullable: true })
  minTransportWeight: number | null;

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

  @Column({ name: 'PRAZOENTREGA', type: 'number', precision: 4, scale: 0, nullable: true })
  deliveryTerm: number | null;

  @Column({ name: 'PRAZOMIN', type: 'number', precision: 4, scale: 0, nullable: true })
  minimumTerm: number | null;

  @Column({ name: 'PRODUTORRURAL', type: 'varchar2', length: 1, nullable: true })
  ruralProducer: string | null;

  @Column({ name: 'QTDIASVENCVERBAS', type: 'number', precision: 4, scale: 0, nullable: true })
  allowanceExpirationDays: number | null;

  @Column({ name: 'RECALCTRIBENT', type: 'varchar2', length: 1, nullable: true })
  recalcEntryTax: string | null;

  @Column({ name: 'REGIONAL', type: 'varchar2', length: 1, nullable: true })
  regional: string | null;

  @Column({ name: 'REPRES', type: 'varchar2', length: 40, nullable: true })
  representative: string | null;

  @Column({ name: 'REP_BAIRRO', type: 'varchar2', length: 13, nullable: true })
  representativeNeighborhood: string | null;

  @Column({ name: 'REP_CEP', type: 'number', precision: 8, scale: 0, nullable: true })
  representativeZipCode: number | null;

  @Column({ name: 'REP_CIDADE', type: 'varchar2', length: 15, nullable: true })
  representativeCity: string | null;

  @Column({ name: 'REP_CONTATO', type: 'varchar2', length: 10, nullable: true })
  representativeContact: string | null;

  @Column({ name: 'REP_DTANIVERSARIO', type: 'date', nullable: true })
  representativeBirthDate: Date | null;

  @Column({ name: 'REP_EMAIL', type: 'varchar2', length: 100, nullable: true })
  representativeEmail: string | null;

  @Column({ name: 'REP_ENDERECO', type: 'varchar2', length: 23, nullable: true })
  representativeAddress: string | null;

  @Column({ name: 'REP_NEXTELID', type: 'varchar2', length: 18, nullable: true })
  representativeNextelId: string | null;

  @Column({ name: 'REP_OBS', type: 'varchar2', length: 2000, nullable: true })
  representativeObservation: string | null;

  @Column({ name: 'REP_UF', type: 'varchar2', length: 2, nullable: true })
  representativeState: string | null;

  @Column({ name: 'RESSARCIMENTOSTGUIA', type: 'varchar2', length: 1, nullable: true })
  stGuideReimbursement: string | null;

  @Column({ name: 'RESSARCIMENTOSTNF', type: 'varchar2', length: 1, nullable: true })
  stInvoiceReimbursement: string | null;

  @Column({ name: 'REVENDA', type: 'varchar2', length: 1, nullable: true })
  resale: string | null;

  @Column({ name: 'RG', type: 'varchar2', length: 20, nullable: true })
  identityCard: string | null;

  @Column({ name: 'RGCONTATOVERBA', type: 'varchar2', length: 20, nullable: true })
  allowanceContactIdentityCard: string | null;

  @Column({ name: 'SIMPLESNACIONAL', type: 'varchar2', length: 1, nullable: true })
  simplesNacional: string | null;

  @Column({ name: 'SITTRIBENTADJUD', type: 'varchar2', length: 3, nullable: true })
  adjudicationEntryTaxSituation: string | null;

  @Column({ name: 'SITTRIBRESTITUICAO', type: 'varchar2', length: 3, nullable: true })
  restitutionTaxSituation: string | null;

  @Column({ name: 'SITTRIBUTRESSARCIMENTOSTGUIA', type: 'varchar2', length: 3, nullable: true })
  stGuideReimbursementTaxSituation: string | null;

  @Column({ name: 'SOMAFRETEFOBNOSTFORANF', type: 'varchar2', length: 1, nullable: true })
  addFobFreightStOutsideInvoice: string | null;

  @Column({ name: 'SUFRAMA', type: 'varchar2', length: 1, nullable: true })
  suframa: string | null;

  @Column({ name: 'SUPERVISORVERBA', type: 'varchar2', length: 40, nullable: true })
  allowanceSupervisor: string | null;

  @Column({ name: 'SUP_CELULAR', type: 'varchar2', length: 20, nullable: true })
  supervisorCellPhone: string | null;

  @Column({ name: 'SUP_EMAIL', type: 'varchar2', length: 100, nullable: true })
  supervisorEmail: string | null;

  @Column({ name: 'TAXA0', type: 'number', precision: 8, scale: 4, nullable: true })
  rate0: number | null;

  @Column({ name: 'TAXA14', type: 'number', precision: 8, scale: 4, nullable: true })
  rate14: number | null;

  @Column({ name: 'TAXA21', type: 'number', precision: 8, scale: 4, nullable: true })
  rate21: number | null;

  @Column({ name: 'TAXA28', type: 'number', precision: 8, scale: 4, nullable: true })
  rate28: number | null;

  @Column({ name: 'TAXA35', type: 'number', precision: 8, scale: 4, nullable: true })
  rate35: number | null;

  @Column({ name: 'TAXA42', type: 'number', precision: 8, scale: 4, nullable: true })
  rate42: number | null;

  @Column({ name: 'TAXA7', type: 'number', precision: 8, scale: 4, nullable: true })
  rate7: number | null;

  @Column({ name: 'TAXAEMISSAOCT', type: 'number', precision: 12, scale: 4, nullable: true })
  ctIssuanceFee: number | null;

  @Column({ name: 'TELCOB', type: 'varchar2', length: 13, nullable: true })
  billingPhone: string | null;

  @Column({ name: 'TELEFONEADM', type: 'varchar2', length: 20, nullable: true })
  adminPhone: string | null;

  @Column({ name: 'TELEFONECOM', type: 'varchar2', length: 20, nullable: true })
  commercialPhone: string | null;

  @Column({ name: 'TELEXFAB', type: 'varchar2', length: 20, nullable: true })
  manufacturerTelex: string | null;

  @Column({ name: 'TELEXREP', type: 'varchar2', length: 20, nullable: true })
  representativeTelex: string | null;

  @Column({ name: 'TELFAB', type: 'varchar2', length: 20, nullable: true })
  manufacturerPhone: string | null;

  @Column({ name: 'TELREP', type: 'varchar2', length: 20, nullable: true })
  representativePhone: string | null;

  @Column({ name: 'TIPOCALCFRETE', type: 'number', precision: 2, scale: 0, nullable: true })
  freightCalcType: number | null;

  @Column({ name: 'TIPOEMBALAGEMPEDIDO', type: 'varchar2', length: 1, nullable: true })
  orderPackagingType: string | null;

  @Column({ name: 'TIPOFINANCDEVFORNEC', type: 'number', precision: 2, scale: 0, nullable: true })
  supplierReturnFinanceType: number | null;

  @Column({ name: 'TIPOFORNEC', type: 'varchar2', length: 1, nullable: true })
  supplierType: string | null;

  @Column({ name: 'TIPOFRETECIFFOB', type: 'varchar2', length: 1, nullable: true })
  cifFobFreightType: string | null;

  @Column({ name: 'TIPOFRETEDESPACHO', type: 'varchar2', length: 1, nullable: true })
  dispatchFreightType: string | null;

  @Column({ name: 'TIPOORGAOPUB', type: 'varchar2', length: 2, nullable: true })
  publicAgencyType: string | null;

  @Column({ name: 'TIPOPESQUISAAUTOMATICA', type: 'varchar2', length: 1, nullable: true })
  autoSearchType: string | null;

  @Column({ name: 'TIPOPESSOA', type: 'varchar2', length: 1, nullable: true })
  personType: string | null;

  @Column({ name: 'TIPOVENCIMENTO', type: 'varchar2', length: 1, nullable: true })
  maturityType: string | null;

  @Column({ name: 'TRANSPAUTONOMO', type: 'varchar2', length: 1, nullable: true })
  autonomousCarrier: string | null;

  @Column({ name: 'TRANSPCREDENCIADOSEFAZ', type: 'varchar2', length: 1, nullable: true })
  sefazAccreditedCarrier: string | null;

  @Column({ name: 'TRANSPORTEPROPRIO', type: 'varchar2', length: 1, nullable: true })
  ownTransport: string | null;

  @Column({ name: 'URLBASERASTREIO', type: 'varchar2', length: 255, nullable: true })
  trackingBaseUrl: string | null;

  @Column({ name: 'USACREDPISCOFINSENTBONIFIC', type: 'varchar2', length: 1, nullable: true })
  usePisCofinsCreditBonusEntry: string | null;

  @Column({ name: 'USADEBCREDOPERLOG', type: 'varchar2', length: 1, nullable: true })
  useDebitCreditOperLog: string | null;

  @Column({ name: 'USADRAWBACK', type: 'varchar2', length: 1, nullable: true })
  useDrawback: string | null;

  @Column({ name: 'USAECOMMERCEUNILEVER', type: 'varchar2', length: 1, nullable: true })
  useEcommerceUnilever: string | null;

  @Column({ name: 'USAFRETEFOBPORFORNEC', type: 'varchar2', length: 1, nullable: true })
  useFobFreightBySupplier: string | null;

  @Column({ name: 'USANUMNEGOCIACAO', type: 'varchar2', length: 1, nullable: true })
  useNegotiationNumber: string | null;

  @Column({ name: 'USAOUTRASDESPSEGUROPISCOFINS', type: 'varchar2', length: 1, nullable: true })
  useOtherInsuranceExpPisCofins: string | null;

  @Column({ name: 'USAPERCALTERCUSTOENT', type: 'varchar2', length: 1, nullable: true })
  usePercChangeEntryCost: string | null;

  @Column({ name: 'USAPERCICMSNAALIQEXTST', type: 'varchar2', length: 1, nullable: true })
  usePercIcmsInExtRateSt: string | null;

  @Column({ name: 'USAREDICMSPARA', type: 'varchar2', length: 1, nullable: true })
  useIcmsReductionPara: string | null;

  @Column({ name: 'UTILIZADESCCALCICMS', type: 'varchar2', length: 1, nullable: true })
  useDiscountCalcIcms: string | null;

  @Column({ name: 'UTILIZADESCCALCIPI', type: 'varchar2', length: 1, nullable: true })
  useDiscountCalcIpi: string | null;

  @Column({ name: 'UTILIZADESCCALCST', type: 'varchar2', length: 1, nullable: true })
  useDiscountCalcSt: string | null;

  @Column({ name: 'UTILIZAFATOR253', type: 'varchar2', length: 1, nullable: true })
  useFactor253: string | null;

  @Column({ name: 'UTILIZAFRETECALCICMS', type: 'varchar2', length: 1, nullable: true })
  useFreightCalcIcms: string | null;

  @Column({ name: 'UTILIZAFRETECALCIPI', type: 'varchar2', length: 1, nullable: true })
  useFreightCalcIpi: string | null;

  @Column({ name: 'UTILIZAICMSDIFZERADO', type: 'varchar2', length: 1, nullable: true })
  useZeroIcmsDiff: string | null;

  @Column({ name: 'UTILIZAICMSTRIBENT', type: 'varchar2', length: 1, nullable: true })
  useIcmsTaxEntry: string | null;

  @Column({ name: 'UTILIZAIPICALCICMS', type: 'varchar2', length: 1, nullable: true })
  useIpiCalcIcms: string | null;

  @Column({ name: 'UTILIZAOUTDESPCALCSUFRAMA', type: 'varchar2', length: 1, nullable: true })
  useOtherExpCalcSuframa: string | null;

  @Column({ name: 'UTILIZAOUTDESPNFBASEST', type: 'varchar2', length: 1, nullable: true })
  useOtherExpInvoiceBaseSt: string | null;

  @Column({ name: 'UTILIZAOUTRASDESPCALCICMS', type: 'varchar2', length: 1, nullable: true })
  useOtherExpCalcIcms: string | null;

  @Column({ name: 'UTILIZAOUTRASDESPCALCIPI', type: 'varchar2', length: 1, nullable: true })
  useOtherExpCalcIpi: string | null;

  @Column({ name: 'UTILIZAPERCBON', type: 'varchar2', length: 1, nullable: true })
  useBonusPercentage: string | null;

  @Column({ name: 'UTILIZAPISCOFINSTRIBENT', type: 'varchar2', length: 1, nullable: true })
  usePisCofinsTaxEntry: string | null;

  @Column({ name: 'VALORDEDUCAOIRRF', type: 'number', precision: 14, scale: 2, nullable: true })
  irrfDeductionValue: number | null;

  @Column({ name: 'VLFRETEKG', type: 'number', precision: 12, scale: 4, nullable: true })
  freightPerKgValue: number | null;

  @Column({ name: 'VLLIMITEFRETEMIN', type: 'number', precision: 18, scale: 6, nullable: true })
  minFreightLimitValue: number | null;

  @Column({ name: 'VLMINPEDCOMPRA', type: 'number', precision: 10, scale: 2, nullable: true })
  minPurchaseOrderValue: number | null;

  @Column({ name: 'VLMINPEDREPOSICAO', type: 'number', precision: 15, scale: 2, nullable: true })
  minReplenishmentOrderValue: number | null;

  @Column({ name: 'VLPEDAGIO', type: 'number', precision: 12, scale: 2, nullable: true })
  tollValue: number | null;
}

