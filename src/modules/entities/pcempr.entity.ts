import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'PCEMPR'
})
export class PcemprEntity {
  @PrimaryColumn({ name: 'MATRICULA', type: 'number', precision: 8, scale: 0, default: null, })
  registration: number;

  @Column({ name: 'CPF', type: 'varchar2', length: 20, nullable: true, })
  cpf: string | null;

  @Column({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: true, })
  codBranch: string | null;

  @Column({ name: 'CODSETOR', type: 'number', precision: 6, scale: 0, nullable: true, })
  codSector: number | null;

  @Column({ name: 'NOME_GUERRA', type: 'varchar2', length: 15, nullable: true, })
  nameWar: string | null;

  @Column({ name: 'SITUACAO', type: 'varchar2', length: 1, nullable: true, default: 'A', })
  situation: string | null;

  @Column({ name: 'AREAATUACAO', type: 'varchar2', length: 40, nullable: true, })
  areaActing: string | null;

  @Column({ name: 'NOME', type: 'varchar2', length: 40, nullable: true })
  name: string | null;

  @Column({ name: 'DT_EXCLUSAO', type: 'date', nullable: true })
  exclusionDate: Date | null;

  @Column({ name: 'ADMISSAO', type: 'date', nullable: true })
  admissionDate: Date | null;

  @Column({ name: 'ENDERECO', type: 'varchar2', length: 40, nullable: true })
  address: string | null;

  @Column({ name: 'BAIRRO', type: 'varchar2', length: 25, nullable: true })
  neighborhood: string | null;

  @Column({ name: 'CIDADE', type: 'varchar2', length: 20, nullable: true })
  city: string | null;

  @Column({ name: 'ESTADO', type: 'varchar2', length: 2, nullable: true })
  state: string | null;

  @Column({ name: 'FONE', type: 'varchar2', length: 13, nullable: true })
  phone: string | null;

  @Column({ name: 'CELULAR', type: 'varchar2', length: 13, nullable: true })
  cellphone: string | null;

  @Column({ name: 'EMAIL', type: 'varchar2', length: 50, nullable: true })
  email: string | null;

  @Column({ name: 'RG', type: 'varchar2', length: 20, nullable: true })
  rg: string | null;

  @Column({ name: 'DTNASC', type: 'date', nullable: true })
  birthDate: Date | null;

  @Column({ name: 'SEXO', type: 'varchar2', length: 1, nullable: true, default: 'M' })
  gender: string | null;

  @Column({ name: 'DTDEMISSAO', type: 'date', nullable: true })
  dismissalDate: Date | null;

  @Column({ name: 'CODUSUR', type: 'number', precision: 4, scale: 0, nullable: true })
  codRca: number | null;

  @Column({ name: 'CODIGOCENTROCUSTO', type: 'varchar2', length: 40, nullable: true })
  costCenterCode: string | null;

  @Column({ name: 'CEP', type: 'varchar2', length: 8, nullable: true })
  zipCode: string | null;

  @Column({ name: 'OBSERVACAO', type: 'varchar2', length: 100, nullable: true })
  observation: string | null;

  @Column({ name: 'USUARIOBD', type: 'varchar2', length: 15, nullable: true })
  dbUser: string | null;

  @Column({ name: 'SENHABD', type: 'varchar2', length: 32, nullable: true })
  dbPassword: string | null;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', length: 1, nullable: true, default: 'T' })
  salesType: string | null;

  @Column({ name: 'NUMBANCO', type: 'number', precision: 3, scale: 0, nullable: true })
  bankNumber: number | null;

  @Column({ name: 'NUMAGENCIA', type: 'number', precision: 4, scale: 0, nullable: true })
  agencyNumber: number | null;

  @Column({ name: 'NUMCCORRENTE', type: 'varchar2', length: 15, nullable: true })
  accountNumber: string | null;

  @Column({ name: 'NUMCENTRALPA', type: 'number', precision: 4, scale: 0, nullable: true })
  centralPaNumber: number | null;

  @Column({ name: 'NUMCENTRALTEL', type: 'varchar2', length: 20, nullable: true })
  centralTelNumber: string | null;

  @Column({ name: 'PERMITEALTJUROSBX', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowChangeInterestWriteOff: string | null;

  @Column({ name: 'VLAUMENTOLIMCRED', type: 'number', precision: 14, scale: 2, nullable: true })
  creditLimitIncreaseValue: number | null;

  @Column({ name: 'TIPO', type: 'varchar2', length: 1, nullable: true })
  type: string | null;

  @Column({ name: 'CTPS', type: 'varchar2', length: 20, nullable: true })
  ctps: string | null;

  @Column({ name: 'PIS', type: 'varchar2', length: 20, nullable: true })
  pis: string | null;

  @Column({ name: 'FUNCAO', type: 'varchar2', length: 30, nullable: true })
  jobTitleDescription: string | null;

  @Column({ name: 'FATORCOMISSAO', type: 'number', precision: 10, scale: 6, nullable: true })
  commissionFactor: number | null;

  @Column({ name: 'DTEXPIRASENHA', type: 'date', nullable: true })
  passwordExpiryDate: Date | null;

  @Column({ name: 'VLCOMISSTON', type: 'number', precision: 14, scale: 2, nullable: true })
  commissionValueTon: number | null;

  @Column({ name: 'VLCOMISSENT', type: 'number', precision: 14, scale: 2, nullable: true })
  commissionValueEnt: number | null;

  @Column({ name: 'VLLIMCREDCOMPRA', type: 'number', precision: 14, scale: 2, nullable: true })
  purchaseCreditLimitValue: number | null;

  @Column({ name: 'DTINICIOLIMCREDCOMPRA', type: 'date', nullable: true })
  purchaseCreditLimitStartDate: Date | null;

  @Column({ name: 'DTFIMLIMCREDCOMPRA', type: 'date', nullable: true })
  purchaseCreditLimitEndDate: Date | null;

  @Column({ name: 'CODCONFERENTE', type: 'number', precision: 8, scale: 0, nullable: true })
  conferenteCode: number | null;

  @Column({ name: 'CODFUNCAO', type: 'number', precision: 4, scale: 0, nullable: true })
  jobFunctionCode: number | null;

  @Column({ name: 'SERIECTPS', type: 'varchar2', length: 15, nullable: true })
  ctpsSeries: string | null;

  @Column({ name: 'GERACCCARD', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateCCCard: string | null;

  @Column({ name: 'MATRICULACCCARD', type: 'number', precision: 10, scale: 0, nullable: true })
  ccCardRegistration: number | null;

  @Column({ name: 'VLSALCARTEIRA', type: 'number', precision: 10, scale: 2, nullable: true })
  walletSalaryValue: number | null;

  @Column({ name: 'VLSALARIO', type: 'number', precision: 10, scale: 2, nullable: true })
  salaryValue: number | null;

  @Column({ name: 'RESCISAO', type: 'date', nullable: true })
  terminationDate: Date | null;

  @Column({ name: 'NUMFILHOS', type: 'number', precision: 2, scale: 0, nullable: true })
  numberOfChildren: number | null;

  @Column({ name: 'COMPLEMENTO', type: 'varchar2', length: 40, nullable: true })
  complement: string | null;

  @Column({ name: 'PERCVT', type: 'number', precision: 5, scale: 2, nullable: true })
  transportVoucherPercentage: number | null;

  @Column({ name: 'VLPLANOSAUDE', type: 'number', precision: 10, scale: 2, nullable: true })
  healthPlanValue: number | null;

  @Column({ name: 'VLSALFAMILIA', type: 'number', precision: 10, scale: 2, nullable: true })
  familySalaryValue: number | null;

  @Column({ name: 'PERCINSS', type: 'number', precision: 5, scale: 2, nullable: true })
  inssPercentage: number | null;

  @Column({ name: 'VLPENSAOALIMENTICIA', type: 'number', precision: 10, scale: 2, nullable: true })
  childSupportValue: number | null;

  @Column({ name: 'VLADICIONAL', type: 'number', precision: 10, scale: 2, nullable: true })
  additionalValue: number | null;

  @Column({ name: 'VLVALES', type: 'number', precision: 10, scale: 2, nullable: true })
  voucherValue: number | null;

  @Column({ name: 'VLMAXLIBPEDIDO', type: 'number', precision: 16, scale: 3, nullable: true })
  maxOrderReleaseValue: number | null;

  @Column({ name: 'CNH', type: 'varchar2', length: 15, nullable: true })
  cnh: string | null;

  @Column({ name: 'UFCNH', type: 'varchar2', length: 2, nullable: true })
  cnhState: string | null;

  @Column({ name: 'TIPOENVIO', type: 'varchar2', length: 1, nullable: true })
  shippingType: string | null;

  @Column({ name: 'CODFORNEC', type: 'number', precision: 6, scale: 0, nullable: true })
  supplierCode: number | null;

  @Column({ name: 'PERCOMMOT', type: 'number', precision: 5, scale: 2, nullable: true })
  driverCommissionPercentage: number | null;

  @Column({ name: 'VLFRETEENTREGA', type: 'number', precision: 10, scale: 4, nullable: true })
  deliveryFreightValue: number | null;

  @Column({ name: 'CODVEICULO', type: 'number', precision: 4, scale: 0, nullable: true })
  vehicleCode: number | null;

  @Column({ name: 'PERMITEALTDESCBX', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowChangeDiscountWriteOff: string | null;

  @Column({ name: 'REFERENCIAPESSOAL', type: 'varchar2', length: 100, nullable: true })
  personalReference: string | null;

  @Column({ name: 'DDDTEL', type: 'number', precision: 3, scale: 0, nullable: true })
  phoneDdd: number | null;

  @Column({ name: 'NOMEPAI', type: 'varchar2', length: 60, nullable: true })
  fatherName: string | null;

  @Column({ name: 'NOMEMAE', type: 'varchar2', length: 60, nullable: true })
  motherName: string | null;

  @Column({ name: 'CATEGORIACNH', type: 'varchar2', length: 3, nullable: true })
  cnhCategory: string | null;

  @Column({ name: 'TIPOMOTORISTA', type: 'varchar2', length: 1, nullable: true })
  driverType: string | null;

  @Column({ name: 'DTVALIDADECNH', type: 'date', nullable: true })
  cnhValidityDate: Date | null;

  @Column({ name: 'ORGAOEMISSORRG', type: 'varchar2', length: 20, nullable: true })
  rgIssuer: string | null;

  @Column({ name: 'NACIONALIDADE', type: 'varchar2', length: 40, nullable: true })
  nationality: string | null;

  @Column({ name: 'ESTADOCIVIL', type: 'varchar2', length: 25, nullable: true })
  maritalStatus: string | null;

  @Column({ name: 'PROFISSAO', type: 'varchar2', length: 30, nullable: true })
  profession: string | null;

  @Column({ name: 'USUARIOLOGADO', type: 'varchar2', length: 1, nullable: true })
  loggedInUser: string | null;

  @Column({ name: 'NUMDVAGENCIA', type: 'varchar2', length: 2, nullable: true })
  agencyDigit: string | null;

  @Column({ name: 'NUMCONEXOES', type: 'number', precision: 4, scale: 0, nullable: true })
  connectionCount: number | null;

  @Column({ name: 'NUMCONEXOESATUAL', type: 'number', precision: 4, scale: 0, nullable: true })
  currentConnectionCount: number | null;

  @Column({ name: 'GRUPOEMAIL', type: 'varchar2', length: 10, nullable: true })
  emailGroup: string | null;

  @Column({ name: 'NOMEEMAIL', type: 'varchar2', length: 40, nullable: true })
  emailName: string | null;

  @Column({ name: 'PERCMINJUROSMORA', type: 'number', precision: 8, scale: 4, nullable: true, default: '0' })
  minMoraInterestPercentage: number | null;

  @Column({ name: 'PERCMAXJUROSMORA', type: 'number', precision: 8, scale: 4, nullable: true, default: '0' })
  maxMoraInterestPercentage: number | null;

  @Column({ name: 'CODIDIOMA', type: 'varchar2', length: 6, nullable: true, default: 'PT-BR' })
  languageCode: string | null;

  @Column({ name: 'PERCEXCLIMCRED', type: 'number', precision: 8, scale: 4, nullable: true })
  creditLimitExceededPercentage: number | null;

  @Column({ name: 'ENVIAFV', type: 'varchar2', length: 1, nullable: true })
  sendFv: string | null;

  @Column({ name: 'PERCREDUZCOMISRCA', type: 'number', precision: 6, scale: 2, nullable: true })
  reduceRcaCommissionPercentage: number | null;

  @Column({ name: 'VLSALDOLIMALTCREDITO', type: 'number', precision: 14, scale: 2, nullable: true, default: '999999999999' })
  creditLimitChangeBalanceValue: number | null;

  @Column({ name: 'OBSINATIVO', type: 'varchar2', length: 100, nullable: true })
  inactiveObservation: string | null;

  @Column({ name: 'GRUPOOS', type: 'number', precision: 15, scale: 0, nullable: true })
  osGroup: number | null;

  @Column({ name: 'DTINICIO', type: 'date', nullable: true })
  startDate: Date | null;

  @Column({ name: 'TIPOATENDE', type: 'varchar2', length: 1, nullable: true })
  attendanceType: string | null;

  @Column({ name: 'CODBARRA', type: 'varchar2', length: 20, nullable: true })
  barcode: string | null;

  @Column({ name: 'NUMDIASPAGTORETROATIVO', type: 'number', precision: 4, scale: 0, nullable: true, default: '0' })
  retroactivePaymentDays: number | null;

  @Column({ name: 'VENDAASSISTIDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  assistedSale: string | null;

  @Column({ name: 'CODIGOPERFIL', type: 'number', precision: 20, scale: 0, nullable: true })
  profileCode: number | null;

  @Column({ name: 'NUMCAIXABALCAO', type: 'number', precision: 8, scale: 0, nullable: true })
  counterCashNumber: number | null;

  @Column({ name: 'MAXTEMPOSECAOOCIOSA', type: 'number', precision: 1, scale: 0, nullable: true })
  maxIdleSessionTime: number | null;

  @Column({ name: 'USARATEIOCOMISSAOOPERADOR', type: 'varchar2', length: 1, nullable: true })
  useOperatorCommissionApportionment: string | null;

  @Column({ name: 'PERMITEPERSONCAD', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowRegistrationCustomization: string | null;

  @Column({ name: 'NUMIDENTIFICADORECF', type: 'varchar2', length: 13, nullable: true })
  ecfIdentifierNumber: string | null;

  @Column({ name: 'OBS', type: 'varchar2', length: 60, nullable: true })
  note: string | null;

  @Column({ name: 'IPRF', type: 'varchar2', length: 14, nullable: true })
  iprf: string | null;

  @Column({ name: 'NUMDIASMAXPRORROG', type: 'number', precision: 4, scale: 0, nullable: true })
  maxExtensionDays: number | null;

  @Column({ name: 'USABIOMETRIAMENU', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBiometryMenu: string | null;

  @Column({ name: 'PERCDESC', type: 'number', precision: 10, scale: 4, nullable: true })
  discountPercentage: number | null;

  @Column({ name: 'NUMDVCONTA', type: 'varchar2', length: 2, nullable: true })
  accountDigit: string | null;

  @Column({ name: 'TIPOAGENTECOB', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  collectionAgentType: string | null;

  @Column({ name: 'DIASCOB', type: 'number', precision: 6, scale: 0, nullable: true })
  collectionDays: number | null;

  @Column({ name: 'LIMITEDESCONTO561', type: 'number', precision: 5, scale: 2, nullable: true })
  discountLimit561: number | null;

  @Column({ name: 'NUMINSS', type: 'varchar2', length: 12, nullable: true })
  inssNumber: string | null;

  @Column({ name: 'TIPOCOMISSAO', type: 'varchar2', length: 1, nullable: true })
  commissionType: string | null;

  @Column({ name: 'COMISSAOFIXA', type: 'number', precision: 10, scale: 2, nullable: true })
  fixedCommission: number | null;

  @Column({ name: 'USAAVISOAUTOMENU', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useAutoMenuNotice: string | null;

  @Column({ name: 'PERCMAXDESCTITULO', type: 'number', precision: 10, scale: 4, nullable: true })
  maxTitleDiscountPercentage: number | null;

  @Column({ name: 'RESPLIBCADASTRO', type: 'varchar2', length: 1, nullable: true })
  respLibRegistration: string | null;

  @Column({ name: 'USATABELACLIENTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useCustomerTable: string | null;

  @Column({ name: 'VLMAXLIMCREDCLI', type: 'number', precision: 14, scale: 2, nullable: true })
  maxCustomerCreditLimitValue: number | null;

  @Column({ name: 'CODPERFIL', type: 'number', precision: 6, scale: 0, nullable: true })
  profileId: number | null;

  @Column({ name: 'USUARIOLOGADORF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  rfLoggedInUser: string | null;

  @Column({ name: 'CONCEDERABATIMENTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  grantRebate: string | null;

  @Column({ name: 'ORGAOEMISSORCNH', type: 'varchar2', length: 20, nullable: true })
  cnhIssuer: string | null;

  @Column({ name: 'QTDEPENDENTES', type: 'number', precision: 4, scale: 0, nullable: true })
  dependentCount: number | null;

  @Column({ name: 'CODCIDADE', type: 'number', precision: 6, scale: 0, nullable: true })
  cityCode: number | null;

  @Column({ name: 'VLLIMMAXPEDCOMPRA', type: 'number', precision: 14, scale: 2, nullable: true })
  maxPurchaseOrderLimitValue: number | null;

  @Column({ name: 'CHAPA_RM', type: 'varchar2', length: 16, nullable: true })
  rmBadge: string | null;

  @Column({ name: 'RAMAL', type: 'number', precision: 6, scale: 0, nullable: true })
  extension: number | null;

  @Column({ name: 'AUTOCHEQUEBLOQVENDA', type: 'varchar2', length: 1, nullable: true })
  autoCheckSalesBlock: string | null;

  @Column({ name: 'SENHAHASH', type: 'varchar2', length: 32, nullable: true })
  hashPassword: string | null;

  @Column({ name: 'MOTIVOINATIVACAO', type: 'varchar2', length: 2000, nullable: true })
  inactivationReason: string | null;

  @Column({ name: 'VLRLIMAPROVARSOLICITACAO', type: 'number', precision: 14, scale: 2, nullable: true })
  approvalRequestLimitValue: number | null;

  @Column({ name: 'FIID', type: 'varchar2', length: 50, nullable: true })
  fiid: string | null;

  @Column({ name: 'TIPOCARGO', type: 'varchar2', length: 100, nullable: true })
  jobType: string | null;

  @Column({ name: 'PERDESCMAXITEM', type: 'number', precision: 6, scale: 2, nullable: true })
  maxItemDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAXRODAPE', type: 'number', precision: 6, scale: 2, nullable: true })
  maxFooterDiscountPercentage: number | null;

  @Column({ name: 'LIM_REDUCAOCREDITO', type: 'number', precision: 12, scale: 6, nullable: true })
  creditReductionLimit: number | null;

  @Column({ name: 'LIM_AUMENTOCREDITO', type: 'number', precision: 12, scale: 6, nullable: true })
  creditIncreaseLimit: number | null;

  @Column({ name: 'PERIODO_ALTERACAOCREDITO', type: 'number', precision: 3, scale: 0, nullable: true })
  creditChangePeriod: number | null;

  @Column({ name: 'DEDOPRIORITARIO', type: 'varchar2', length: 1, nullable: true })
  priorityFinger: string | null;

  @Column({ name: 'SITUACAO_CCW', type: 'varchar2', length: 1, nullable: true })
  ccwSituation: string | null;

  @Column({ name: 'EMITIRPEDIDO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  issueOrder: string | null;

  @Column({ name: 'EMITIRORCAMENTO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  issueBudget: string | null;

  @Column({ name: 'PERSONALEMBRETE', type: 'date', nullable: true })
  personReminder: Date | null;

  @Column({ name: 'IDSOFITVIEW', type: 'varchar2', length: 10, nullable: true })
  sofitViewId: string | null;

  @Column({ name: 'DTULTALTERSOFITVIEW', type: 'timestamp', precision: 6, nullable: true })
  sofitViewLastChangeDate: Date | null;

  @Column({ name: 'DTEXCLUSAOSOFITVIEW', type: 'timestamp', precision: 6, nullable: true })
  sofitViewExclusionDate: Date | null;

  @Column({ name: 'HASHSENHAWINTHOR', type: 'varchar2', length: 250, nullable: true })
  winthorHashPassword: string | null;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  lastChangeDate: Date | null;

  @Column({ name: 'ACESSOWEBCOMPRAS', type: 'varchar2', length: 1, nullable: true })
  webPurchasesAccess: string | null;

  @Column({ name: 'ACESSOWEBVERBAS', type: 'varchar2', length: 1, nullable: true })
  webFundsAccess: string | null;

  @Column({ name: 'LIMITEFUNDONEGATIVO', type: 'number', precision: 18, scale: 6, nullable: true, default: '0' })
  negativeFundLimit: number;

  @Column({ name: 'CODIBGE', type: 'number', precision: 10, scale: 0, nullable: true })
  ibgeCode: number | null;

  @Column({ name: 'CODFILIALINTEGRACAO', type: 'number', precision: 3, scale: 0, nullable: true })
  integrationBranchCode: number | null;

  @Column({ name: 'DTALTERC5', type: 'timestamp', precision: 6, nullable: true })
  c5ChangeDate: Date | null;

  @Column({ name: 'ALTERARSENHAPROXIMOLOGIN', type: 'varchar2', length: 1, nullable: true })
  changePasswordNextLogin: string | null;

  @Column({ name: 'CODPERFILACESSO', type: 'number', precision: 6, scale: 0, nullable: true })
  accessProfileCode: number | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsChangeDate: Date | null;

  @Column({ name: 'CODTIPOCHAVEPIX', type: 'varchar2', length: 2, nullable: true })
  pixKeyTypeCode: string | null;

  @Column({ name: 'CHAVEPIX', type: 'varchar2', length: 100, nullable: true })
  pixKey: string | null;
}
