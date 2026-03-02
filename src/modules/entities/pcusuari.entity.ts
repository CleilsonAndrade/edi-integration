import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCUSUARI' })
export class PcusuariEntity {
  @Column({ name: 'AREAATUACAO', type: 'varchar2', length: 1, nullable: true })
  areaOfActivity: string | null;

  @Column({ name: 'BAIRRO', type: 'varchar2', length: 25, nullable: true })
  neighborhood: string | null;

  @Column({ name: 'BIP', type: 'varchar2', length: 20, nullable: true })
  pager: string | null;

  @Column({ name: 'BLOQCOMIS', type: 'varchar2', length: 1, nullable: true })
  blockCommission: string | null;

  @Column({ name: 'BLOQUEIO', type: 'varchar2', length: 1, nullable: true })
  block: string | null;

  @Column({ name: 'BLOQVENDATLMK', type: 'varchar2', length: 1, nullable: true })
  blockTelemarketingSale: string | null;

  @Column({ name: 'CALCULARDSR', type: 'varchar2', length: 1, nullable: true })
  calculateDsr: string | null;

  @Column({ name: 'CCORRENTE', type: 'varchar2', length: 1, nullable: true })
  checkingAccount: string | null;

  @Column({ name: 'CEP', type: 'varchar2', length: 9, nullable: true })
  zipCode: string | null;

  @Column({ name: 'CGC', type: 'varchar2', length: 20, nullable: true })
  cgc: string | null;

  @Column({ name: 'CHAPA_RM', type: 'varchar2', length: 16, nullable: true })
  rmBadge: string | null;

  @Column({ name: 'CI', type: 'varchar2', length: 20, nullable: true })
  idCard: string | null;

  @Column({ name: 'CIDADE', type: 'varchar2', length: 15, nullable: true })
  city: string | null;

  @Column({ name: 'CODBAIRRO', type: 'number', precision: 6, scale: 0, nullable: true })
  neighborhoodCode: number | null;

  @Column({ name: 'CODCIDADE', type: 'number', precision: 6, scale: 0, nullable: true })
  cityCode: number | null;

  @Column({ name: 'CODCOMOCLIENTE', type: 'number', precision: 6, scale: 0, nullable: true })
  clientCommissionCode: number | null;

  @Column({ name: 'CODCONTAB', type: 'varchar2', length: 12, nullable: true })
  accountingCode: string | null;

  @Column({ name: 'CODCONTACOFINS', type: 'number', precision: 10, scale: 0, nullable: true })
  cofinsAccountCode: number | null;

  @Column({ name: 'CODCONTACSRF', type: 'number', precision: 10, scale: 0, nullable: true })
  csrfAccountCode: number | null;

  @Column({ name: 'CODCONTAINSS', type: 'number', precision: 10, scale: 0, nullable: true })
  inssAccountCode: number | null;

  @Column({ name: 'CODCONTAIRRF', type: 'number', precision: 10, scale: 0, nullable: true })
  irrfAccountCode: number | null;

  @Column({ name: 'CODCONTAISS', type: 'number', precision: 10, scale: 0, nullable: true })
  issAccountCode: number | null;

  @Column({ name: 'CODCONTAPIS', type: 'number', precision: 10, scale: 0, nullable: true })
  pisAccountCode: number | null;

  @Column({ name: 'CODCONTASRF', type: 'number', precision: 10, scale: 0, nullable: true })
  srfAccountCode: number | null;

  @Column({ name: 'CODDISTRIB', type: 'varchar2', length: 4, nullable: true })
  distributionCode: string | null;

  @Column({ name: 'CODEQUIPE', type: 'number', precision: 4, scale: 0, nullable: true })
  teamCode: number | null;

  @Column({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: true })
  branchCode: string | null;

  @Column({ name: 'CODIGOCENTROCUSTO', type: 'varchar2', length: 40, nullable: true })
  costCenterCode: string | null;

  @Column({ name: 'CODMONITOR', type: 'number', precision: 8, scale: 0, nullable: true })
  monitorCode: number | null;

  @Column({ name: 'CODOPERACAO', type: 'varchar2', length: 3, nullable: true })
  operationCode: string | null;

  @Column({ name: 'CODPRACAPRINCIPAL', type: 'number', precision: 4, scale: 0, nullable: true })
  mainPlazaCode: number | null;

  @Column({ name: 'CODROTA', type: 'number', precision: 4, scale: 0, nullable: true })
  routeCode: number | null;

  @Column({ name: 'CODSUPERVISOR', type: 'number', precision: 4, scale: 0, nullable: true })
  supervisorCode: number | null;

  @PrimaryColumn({ name: 'CODUSUR', type: 'number', precision: 4, scale: 0, nullable: false })
  userCode: number;

  @Column({ name: 'CODUSURPG', type: 'varchar2', length: 6, nullable: true })
  pgUserCode: string | null;

  @Column({ name: 'COMISSAOFIXA', type: 'number', precision: 10, scale: 2, nullable: true })
  fixedCommission: number | null;

  @Column({ name: 'COMISSAOSERVICOPRESTADO', type: 'number', precision: 12, scale: 2, nullable: true })
  serviceProvidedCommission: number | null;

  @Column({ name: 'CONJUGE', type: 'varchar2', length: 40, nullable: true })
  spouse: string | null;

  @Column({ name: 'CONTRIBINDIVIDUALINSS', type: 'varchar2', length: 1, nullable: true })
  individualInssContributor: string | null;

  @Column({ name: 'CPF', type: 'varchar2', length: 20, nullable: true })
  cpf: string | null;

  @Column({ name: 'CPFAUX', type: 'varchar2', length: 20, nullable: true })
  auxiliaryCpf: string | null;

  @Column({ name: 'CPFTITULARCC', type: 'varchar2', length: 20, nullable: true })
  checkingAccountHolderCpf: string | null;

  @Column({ name: 'CPFTITULARCP', type: 'varchar2', length: 20, nullable: true })
  savingsAccountHolderCpf: string | null;

  @Column({ name: 'DIRENVIOFTP', type: 'varchar2', length: 50, nullable: true })
  ftpSendDirectory: string | null;

  @Column({ name: 'DIRETORIOASSINATURA', type: 'varchar2', length: 200, nullable: true })
  signatureDirectory: string | null;

  @Column({ name: 'DIRRECEPCAOFTP', type: 'varchar2', length: 50, nullable: true })
  ftpReceptionDirectory: string | null;

  @Column({ name: 'DTENTREGADOC', type: 'date', nullable: true })
  docDeliveryDate: Date | null;

  @Column({ name: 'DTEXCLUSAO', type: 'date', nullable: true })
  exclusionDate: Date | null;

  @Column({ name: 'DTFIMVIGCLUBEITT', type: 'date', nullable: true })
  ittClubValidityEndDate: Date | null;

  @Column({ name: 'DTINFORMATIZA', type: 'date', nullable: true })
  informatizationDate: Date | null;

  @Column({ name: 'DTINICIO', type: 'date', nullable: true })
  startDate: Date | null;

  @Column({ name: 'DTLIMENTREGADOC', type: 'date', nullable: true })
  docDeliveryLimitDate: Date | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  maxAlterDate: Date | null;

  @Column({ name: 'DTNASC', type: 'date', nullable: true })
  birthDate: Date | null;

  @Column({ name: 'DTNASCONJUGE', type: 'date', nullable: true })
  spouseBirthDate: Date | null;

  @Column({ name: 'DTTERMINO', type: 'date', nullable: true })
  endDate: Date | null;

  @Column({ name: 'DTULTALTERACAO', type: 'date', nullable: true })
  lastAlterationDate: Date | null;

  @Column({ name: 'DTULTPAGCONSELHO', type: 'date', nullable: true })
  lastCouncilPaymentDate: Date | null;

  @Column({ name: 'DTULTVENDA', type: 'date', nullable: true })
  lastSaleDate: Date | null;

  @Column({ name: 'EMAIL', type: 'varchar2', length: 100, nullable: true })
  email: string | null;

  @Column({ name: 'EMAIL2', type: 'varchar2', length: 100, nullable: true })
  email2: string | null;

  @Column({ name: 'ENDERECO', type: 'varchar2', length: 40, nullable: true })
  address: string | null;

  @Column({ name: 'ENDERECO2', type: 'varchar2', length: 40, nullable: true })
  address2: string | null;

  @Column({ name: 'ESTADO', type: 'varchar2', length: 2, nullable: true })
  state: string | null;

  @Column({ name: 'EXPORTADADOS', type: 'varchar2', length: 1, nullable: true })
  dataExport: string | null;

  @Column({ name: 'EXPORTARCOMISSAOFOLHARM', type: 'varchar2', length: 1, nullable: true })
  exportCommissionToRmPayroll: string | null;

  @Column({ name: 'EXPORTARECF', type: 'varchar2', length: 1, nullable: true })
  exportEcf: string | null;

  @Column({ name: 'EXPORTARPARAFORCAVENDAS', type: 'varchar2', length: 1, nullable: true })
  exportToSalesForce: string | null;

  @Column({ name: 'FATORCOMISLIQ', type: 'number', precision: 18, scale: 6, nullable: true })
  netCommissionFactor: number | null;

  @Column({ name: 'FAX', type: 'varchar2', length: 13, nullable: true })
  fax: string | null;

  @Column({ name: 'FIRMA', type: 'varchar2', length: 40, nullable: true })
  firm: string | null;

  @Column({ name: 'HORAFIMCONEXAOPALM', type: 'number', precision: 2, scale: 0, nullable: true })
  palmConnectionEndTime: number | null;

  @Column({ name: 'HORAINICONEXAOPALM', type: 'number', precision: 2, scale: 0, nullable: true })
  palmConnectionStartTime: number | null;

  @Column({ name: 'INDICECPFECHCOMISSAO', type: 'varchar2', length: 1, nullable: true })
  commissionClosingIndex: string | null;

  @Column({ name: 'INDICERATEIOCOMISSAO', type: 'number', precision: 5, scale: 2, nullable: true })
  commissionApportionmentIndex: number | null;

  @Column({ name: 'INSCMUNICIPAL', type: 'varchar2', length: 15, nullable: true })
  municipalRegistration: string | null;

  @Column({ name: 'INSS', type: 'number', precision: 12, scale: 0, nullable: true })
  inss: number | null;

  @Column({ name: 'LATITUDE', type: 'varchar2', length: 20, nullable: true })
  latitude: string | null;

  @Column({ name: 'LONGITUDE', type: 'varchar2', length: 20, nullable: true })
  longitude: string | null;

  @Column({ name: 'MASKPREPOSTO', type: 'varchar2', length: 9, nullable: true })
  representativeMask: string | null;

  @Column({ name: 'MENS1', type: 'varchar2', length: 60, nullable: true })
  message1: string | null;

  @Column({ name: 'MENS2', type: 'varchar2', length: 60, nullable: true })
  message2: string | null;

  @Column({ name: 'MENS3', type: 'varchar2', length: 60, nullable: true })
  message3: string | null;

  @Column({ name: 'MENS4', type: 'varchar2', length: 60, nullable: true })
  message4: string | null;

  @Column({ name: 'MINUTOFIMCONEXAOPALM', type: 'number', precision: 2, scale: 0, nullable: true })
  palmConnectionEndMinute: number | null;

  @Column({ name: 'MINUTOINICONEXAOPALM', type: 'number', precision: 2, scale: 0, nullable: true })
  palmConnectionStartMinute: number | null;

  @Column({ name: 'MODELOPALM', type: 'varchar2', length: 30, nullable: true })
  palmModel: string | null;

  @Column({ name: 'MOTIVO', type: 'varchar2', length: 40, nullable: true })
  reason: string | null;

  @Column({ name: 'NIT', type: 'varchar2', length: 20, nullable: true })
  nit: string | null;

  @Column({ name: 'NOME', type: 'varchar2', length: 40, nullable: true })
  name: string | null;

  @Column({ name: 'NUMAGENCIA', type: 'number', precision: 4, scale: 0, nullable: true })
  agencyNumber: number | null;

  @Column({ name: 'NUMAGENCIAPOUP', type: 'number', precision: 4, scale: 0, nullable: true })
  savingsAgencyNumber: number | null;

  @Column({ name: 'NUMAIDF', type: 'varchar2', length: 30, nullable: true })
  aidfNumber: string | null;

  @Column({ name: 'NUMBANCO', type: 'number', precision: 3, scale: 0, nullable: true })
  bankNumber: number | null;

  @Column({ name: 'NUMBANCOPOUP', type: 'number', precision: 3, scale: 0, nullable: true })
  savingsBankNumber: number | null;

  @Column({ name: 'NUMCCORRENTE', type: 'number', precision: 12, scale: 0, nullable: true })
  checkingAccountNumber: number | null;

  @Column({ name: 'NUMCCORRENTEALFA', type: 'varchar2', length: 12, nullable: true })
  alphaCheckingAccountNumber: string | null;

  @Column({ name: 'NUMCCORRENTEPOUP', type: 'number', precision: 12, scale: 0, nullable: true })
  savingsAccountNumber: number | null;

  @Column({ name: 'NUMCLIPOS', type: 'number', precision: 20, scale: 8, nullable: true })
  posClientNumber: number | null;

  @Column({ name: 'NUMCONSELHO', type: 'varchar2', length: 20, nullable: true })
  councilNumber: string | null;

  @Column({ name: 'NUMDEP', type: 'number', precision: 2, scale: 0, nullable: true })
  departmentNumber: number | null;

  @Column({ name: 'NUMDEPENDENTES', type: 'number', precision: 3, scale: 0, nullable: true })
  numberOfDependents: number | null;

  @Column({ name: 'NUMDVAGENCIA', type: 'varchar2', length: 1, nullable: true })
  agencyDigit: string | null;

  @Column({ name: 'NUMDVAGENCIAPOUP', type: 'varchar2', length: 1, nullable: true })
  savingsAgencyDigit: string | null;

  @Column({ name: 'NUMDVCCORRENTE', type: 'varchar2', length: 2, nullable: true })
  checkingAccountDigit: string | null;

  @Column({ name: 'NUMDVCCORRENTEPOUP', type: 'varchar2', length: 2, nullable: true })
  savingsAccountDigit: string | null;

  @Column({ name: 'NUMFORMFINAL', type: 'number', precision: 10, scale: 0, nullable: true })
  finalFormNumber: number | null;

  @Column({ name: 'NUMFORMINICIAL', type: 'number', precision: 10, scale: 0, nullable: true })
  initialFormNumber: number | null;

  @Column({ name: 'NUMNOTABLOCO1', type: 'varchar2', length: 10, nullable: true })
  block1NoteNumber: string | null;

  @Column({ name: 'NUMPEDECF', type: 'number', precision: 10, scale: 0, nullable: true })
  ecfOrderNumber: number | null;

  @Column({ name: 'NUMSELOFINAL', type: 'varchar2', length: 20, nullable: true })
  finalSealNumber: string | null;

  @Column({ name: 'NUMSELOINICIAL', type: 'varchar2', length: 20, nullable: true })
  initialSealNumber: string | null;

  @Column({ name: 'NUMSERIEEQUIP', type: 'number', precision: 10, scale: 0, nullable: true })
  equipmentSerialNumber: number | null;

  @Column({ name: 'NUMSERIEEQUIP2', type: 'varchar2', length: 15, nullable: true })
  equipmentSerialNumber2: string | null;

  @Column({ name: 'OBS1', type: 'varchar2', length: 80, nullable: true })
  observation1: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', length: 80, nullable: true })
  observation2: string | null;

  @Column({ name: 'OBSBLOQ', type: 'varchar2', length: 30, nullable: true })
  blockObservation: string | null;

  @Column({ name: 'OBSFORCAVENDAS1', type: 'varchar2', length: 80, nullable: true })
  salesForceObservation1: string | null;

  @Column({ name: 'OBSFORCAVENDAS2', type: 'varchar2', length: 80, nullable: true })
  salesForceObservation2: string | null;

  @Column({ name: 'OBSFORCAVENDAS3', type: 'varchar2', length: 80, nullable: true })
  salesForceObservation3: string | null;

  @Column({ name: 'OBSFORCAVENDAS4', type: 'varchar2', length: 80, nullable: true })
  salesForceObservation4: string | null;

  @Column({ name: 'PARTCLUBEITT', type: 'varchar2', length: 1, nullable: true })
  ittClubParticipation: string | null;

  @Column({ name: 'PERCACRESCIMOVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  salesIncreasePercentage: number | null;

  @Column({ name: 'PERCACRESFV', type: 'number', precision: 8, scale: 2, nullable: true })
  fvIncreasePercentage: number | null;

  @Column({ name: 'PERCCOFINSNFSERVICO', type: 'number', precision: 6, scale: 2, nullable: true })
  serviceInvoiceCofinsPercentage: number | null;

  @Column({ name: 'PERCCSRF', type: 'number', precision: 5, scale: 2, nullable: true })
  csrfPercentage: number | null;

  @Column({ name: 'PERCENT', type: 'number', precision: 4, scale: 2, nullable: true })
  percentage: number | null;

  @Column({ name: 'PERCENT2', type: 'number', precision: 6, scale: 2, nullable: true })
  percentage2: number | null;

  @Column({ name: 'PERCINSS', type: 'number', precision: 5, scale: 2, nullable: true })
  inssPercentage: number | null;

  @Column({ name: 'PERCIRRF', type: 'number', precision: 4, scale: 2, nullable: true })
  irrfPercentage: number | null;

  @Column({ name: 'PERCISS', type: 'number', precision: 4, scale: 2, nullable: true })
  issPercentage: number | null;

  @Column({ name: 'PERCMETADEPTO', type: 'number', precision: 10, scale: 2, nullable: true })
  deptGoalPercentage: number | null;

  @Column({ name: 'PERCOMMETA', type: 'number', precision: 8, scale: 4, nullable: true })
  commissionGoalPercentage: number | null;

  @Column({ name: 'PERCPISNFSERVICO', type: 'number', precision: 6, scale: 2, nullable: true })
  serviceInvoicePisPercentage: number | null;

  @Column({ name: 'PERDESCMAX', type: 'number', precision: 5, scale: 2, nullable: true })
  maxDiscountPercentage: number | null;

  @Column({ name: 'PERMAXVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  maxSalePercentage: number | null;

  @Column({ name: 'PERMETA', type: 'number', precision: 10, scale: 2, nullable: true })
  goalPercentage: number | null;

  @Column({ name: 'PERMETAMETRO', type: 'number', precision: 10, scale: 2, nullable: true })
  meterGoalPercentage: number | null;

  @Column({ name: 'PERMITEADIANTCOMISSAO', type: 'varchar2', length: 1, nullable: true })
  allowCommissionAdvance: string | null;

  @Column({ name: 'PERMITEPRODSEMDISTRIBUICAO', type: 'varchar2', length: 1, nullable: true })
  allowProductWithoutDistribution: string | null;

  @Column({ name: 'PRACA1', type: 'varchar2', length: 80, nullable: true })
  plaza1: string | null;

  @Column({ name: 'PRACA2', type: 'varchar2', length: 80, nullable: true })
  plaza2: string | null;

  @Column({ name: 'PROXCODCLIPALM', type: 'number', precision: 6, scale: 0, nullable: true })
  nextPalmClientCode: number | null;

  @Column({ name: 'PROXNUMFORM', type: 'number', precision: 10, scale: 0, nullable: true })
  nextFormNumber: number | null;

  @Column({ name: 'PROXNUMPED', type: 'number', precision: 14, scale: 2, nullable: true })
  nextOrderNumber: number | null;

  @Column({ name: 'PROXNUMPEDFORCA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextSalesForceOrderNumber: number | null;

  @Column({ name: 'PROXNUMPEDWEB', type: 'number', precision: 10, scale: 0, nullable: true })
  nextWebOrderNumber: number | null;

  @Column({ name: 'PROXNUMSELO', type: 'number', precision: 10, scale: 0, nullable: true })
  nextSealNumber: number | null;

  @Column({ name: 'QTITENSPEDPREV', type: 'number', precision: 14, scale: 2, nullable: true })
  prevOrderItemsQty: number | null;

  @Column({ name: 'QTPEDPREV', type: 'number', precision: 14, scale: 2, nullable: true })
  prevOrderQty: number | null;

  @Column({ name: 'ROTAMASTERFOODS', type: 'varchar2', length: 20, nullable: true })
  masterFoodsRoute: string | null;

  @Column({ name: 'SENHA', type: 'varchar2', length: 10, nullable: true })
  password: string | null;

  @Column({ name: 'SENHADIALUP', type: 'varchar2', length: 12, nullable: true })
  dialUpPassword: string | null;

  @Column({ name: 'SENHAFTP', type: 'varchar2', length: 10, nullable: true })
  ftpPassword: string | null;

  @Column({ name: 'SENHALOGIN', type: 'varchar2', length: 10, nullable: true })
  loginPassword: string | null;

  @Column({ name: 'SENHAPOP', type: 'varchar2', length: 10, nullable: true })
  popPassword: string | null;

  @Column({ name: 'SERIENF', type: 'varchar2', length: 3, nullable: true })
  invoiceSeries: string | null;

  @Column({ name: 'SERVFTP', type: 'varchar2', length: 50, nullable: true })
  ftpServer: string | null;

  @Column({ name: 'SERVPOP', type: 'varchar2', length: 30, nullable: true })
  popServer: string | null;

  @Column({ name: 'SERVSMTP', type: 'varchar2', length: 30, nullable: true })
  smtpServer: string | null;

  @Column({ name: 'SIMPLESNACIONAL', type: 'varchar2', length: 1, nullable: true })
  nationalSimple: string | null;

  @Column({ name: 'TELEFONE1', type: 'varchar2', length: 13, nullable: true })
  phone1: string | null;

  @Column({ name: 'TELEFONE2', type: 'varchar2', length: 13, nullable: true })
  phone2: string | null;

  @Column({ name: 'TELPROVEDOR', type: 'varchar2', length: 15, nullable: true })
  providerPhone: string | null;

  @Column({ name: 'TIPOCOMISSAO', type: 'varchar2', length: 1, nullable: true })
  commissionType: string | null;

  @Column({ name: 'TIPOCONTAPAGAMENTO', type: 'number', precision: 1, scale: 0, nullable: true })
  paymentAccountType: number | null;

  @Column({ name: 'TIPOFIRMA', type: 'varchar2', length: 1, nullable: true })
  firmType: string | null;

  @Column({ name: 'TIPOPESSOA', type: 'varchar2', length: 1, nullable: true })
  personType: string | null;

  @Column({ name: 'TIPOVEND', type: 'varchar2', length: 2, nullable: true })
  salespersonType: string | null;

  @Column({ name: 'ULTNUMPED', type: 'number', precision: 10, scale: 0, nullable: true })
  lastOrderNumber: number | null;

  @Column({ name: 'USACOBRANCACARTAO', type: 'varchar2', length: 1, nullable: true })
  useCardCollection: string | null;

  @Column({ name: 'USACONTROLEFORMSELOSEFAZ', type: 'varchar2', length: 1, nullable: true })
  useSefazSealFormControl: string | null;

  @Column({ name: 'USADEBCREDRCA', type: 'varchar2', length: 1, nullable: true })
  useRcaDebitCredit: string | null;

  @Column({ name: 'USARRCAOPERADOR', type: 'varchar2', length: 1, nullable: true })
  useOperatorRca: string | null;

  @Column({ name: 'USURDIALUP', type: 'varchar2', length: 40, nullable: true })
  dialUpUser: string | null;

  @Column({ name: 'USURDIRFV', type: 'varchar2', length: 50, nullable: true })
  fvDirUser: string | null;

  @Column({ name: 'USURFTP', type: 'varchar2', length: 40, nullable: true })
  ftpUser: string | null;

  @Column({ name: 'USURLOGIN', type: 'varchar2', length: 40, nullable: true })
  loginUser: string | null;

  @Column({ name: 'USURPOP', type: 'varchar2', length: 40, nullable: true })
  popUser: string | null;

  @Column({ name: 'UTILIZASELOSEFAZ', type: 'varchar2', length: 1, nullable: true })
  useSefazSeal: string | null;

  @Column({ name: 'VALIDARACRESCDESCPRECOFIXO', type: 'varchar2', length: 1, nullable: true })
  validateFixedPriceIncreaseDiscount: string | null;

  @Column({ name: 'VENDEDORQK', type: 'varchar2', length: 1, nullable: true })
  qkSalesperson: string | null;

  @Column({ name: 'VISUALIZARPRODDEPTOSEC', type: 'varchar2', length: 1, nullable: true })
  viewSecDeptProduct: string | null;

  @Column({ name: 'VLCORRENTE', type: 'number', precision: 10, scale: 2, nullable: true })
  currentValue: number | null;

  @Column({ name: 'VLLIMCRED', type: 'number', precision: 10, scale: 2, nullable: true })
  creditLimitValue: number | null;

  @Column({ name: 'VLMAXTROCA', type: 'number', precision: 6, scale: 2, nullable: true })
  maxExchangeValue: number | null;

  @Column({ name: 'VLVENDAMINPED', type: 'number', precision: 12, scale: 2, nullable: true })
  minOrderSaleValue: number | null;

  @Column({ name: 'VLVENDAPREV', type: 'number', precision: 12, scale: 2, nullable: true })
  prevSaleValue: number | null;

}
