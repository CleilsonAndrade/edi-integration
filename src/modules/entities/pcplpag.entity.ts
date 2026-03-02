import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPLPAG',
})
export class PcplpagEntity {
  @PrimaryColumn({ name: 'CODPLPAG', type: 'number', precision: 4, scale: 0, nullable: false })
  codPaymentPlan: number;

  @Column({ name: 'DESCRICAO', type: 'varchar2', length: 40, nullable: true })
  description: string;

  @Column({ name: 'NUMDIAS', type: 'number', precision: 4, scale: 0, nullable: true })
  numberOfDays: number;

  @Column({ name: 'TIPOPRAZO', type: 'varchar2', length: 1, nullable: true })
  paymentTermType: string;

  @Column({ name: 'PRAZO1', type: 'number', precision: 4, scale: 0, nullable: true })
  firstPaymentTerm: number;

  @Column({ name: 'PRAZO2', type: 'number', precision: 4, scale: 0, nullable: true })
  secondPaymentTerm: number;

  @Column({ name: 'PRAZO3', type: 'number', precision: 4, scale: 0, nullable: true })
  thirdPaymentTerm: number;

  @Column({ name: 'PRAZO4', type: 'number', precision: 4, scale: 0, nullable: true })
  fourthPaymentTerm: number;

  @Column({ name: 'PRAZO5', type: 'number', precision: 4, scale: 0, nullable: true })
  fifthPaymentTerm: number;

  @Column({ name: 'PRAZO6', type: 'number', precision: 4, scale: 0, nullable: true })
  sixthPaymentTerm: number;

  @Column({ name: 'PRAZO7', type: 'number', precision: 4, scale: 0, nullable: true })
  seventhPaymentTerm: number;

  @Column({ name: 'PRAZO8', type: 'number', precision: 4, scale: 0, nullable: true })
  eighthPaymentTerm: number;

  @Column({ name: 'PRAZO9', type: 'number', precision: 4, scale: 0, nullable: true })
  ninthPaymentTerm: number;

  @Column({ name: 'PRAZO10', type: 'number', precision: 4, scale: 0, nullable: true })
  tenthPaymentTerm: number;

  @Column({ name: 'PRAZO11', type: 'number', precision: 4, scale: 0, nullable: true })
  eleventhPaymentTerm: number;

  @Column({ name: 'PRAZO12', type: 'number', precision: 4, scale: 0, nullable: true })
  twelfthPaymentTerm: number;

  @Column({ name: 'DTVENC1', type: 'date', nullable: true })
  firstDueDate: Date;

  @Column({ name: 'DTVENC2', type: 'date', nullable: true })
  secondDueDate: Date;

  @Column({ name: 'DTVENC3', type: 'date', nullable: true })
  thirdDueDate: Date;

  @Column({ name: 'NUMPR', type: 'number', precision: 6, scale: 2, nullable: true })
  numberOfPayments: number;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', length: 2, nullable: true })
  saleType: string;

  @Column({ name: 'PERTXFIM', type: 'number', precision: 8, scale: 4, nullable: true })
  finalPercentage: number;

  @Column({ name: 'OBS', type: 'varchar2', length: 2, nullable: true })
  observation: string;

  @Column({ name: 'OFERTA', type: 'number', precision: 8, scale: 4, nullable: true })
  offer: number;

  @Column({ name: 'VENDABK', type: 'varchar2', length: 1, nullable: false, default: 'S' })
  saleBlocked: string;

  @Column({ name: 'VLMINPEDIDO', type: 'number', precision: 12, scale: 2, nullable: true })
  minimumOrderValue: number;

  @Column({ name: 'CODCOB', type: 'varchar2', length: 4, nullable: true })
  billingCode: string;

  @Column({ name: 'TIPOENTRADA', type: 'number', precision: 1, scale: 0, nullable: true })
  inputType: number;

  @Column({ name: 'LETRAPLPAG', type: 'varchar2', length: 2, nullable: true })
  paymentPlanLetter: string;

  @Column({ name: 'MARGEMMIN', type: 'number', precision: 5, scale: 2, nullable: true })
  minimumMargin: number;

  @Column({ name: 'NUMITENSMINIMO', type: 'number', precision: 4, scale: 0, nullable: true })
  minimumItems: number;

  @Column({ name: 'OBSPLPAG', type: 'varchar2', length: 100, nullable: true })
  observationPaymentPlan: string;

  @Column({ name: 'PERTXFIMPALM', type: 'number', precision: 8, scale: 4, nullable: true })
  finalPercentageAlm: number;

  @Column({ name: 'CODEQUIPE', type: 'number', precision: 4, scale: 0, nullable: true })
  teamCode: number;

  @Column({ name: 'TIPORESTRICAO', type: 'varchar2', length: 2, nullable: false, default: 'NR' })
  restrictionType: string;

  @Column({ name: 'CODRESTRICAO', type: 'number', precision: 8, scale: 0, nullable: true })
  restrictionCode: number;

  @Column({ name: 'CODPLPAGKRAFT', type: 'varchar2', length: 3, nullable: true })
  paymentPlanCodeKraft: string;

  @Column({ name: 'ENVIAPLANOFV', type: 'varchar2', length: 1, nullable: false, default: 'S' })
  sendPaymentPlanToFV: string;

  @Column({ name: 'PRAZOPONDERADO', type: 'varchar2', length: 1, nullable: false, default: 'N' })
  weightedPaymentTerm: string;

  @Column({ name: 'USAPLPAGAUTOSERVICO', type: 'varchar2', length: 1, nullable: false, default: 'S' })
  usePaymentPlanAutoService: string;

  @Column({ name: 'USADESCLINHAPROD', type: 'varchar2', length: 1, nullable: true })
  useProductLineDescription: string;

  @Column({ name: 'ENTRADA', type: 'varchar2', length: 1, nullable: false, default: 'N' })
  entry: string;

  @Column({ name: 'FORMAPARCELAMENTO', type: 'varchar2', length: 1, nullable: false, default: 'C' })
  installmentForm: string;

  @Column({ name: 'NUMPARCELAS', type: 'number', precision: 2, scale: 0, nullable: false, default: 0 })
  numberOfInstallments: number;

  @Column({ name: 'NUMDIASCARENCIA', type: 'number', precision: 4, scale: 0, nullable: false, default: 0 })
  numberGracePeriodDays: number;

  @Column({ name: 'NUMDIASCARTAO', type: 'number', precision: 4, scale: 0, nullable: true })
  cardGracePeriodDays: number;

  @Column({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: true })
  branchCode: string;

  @Column({ name: 'USAPRAZOADICIONALPCCLIENT', type: 'varchar2', length: 1, nullable: false, default: 'S' })
  useAdditionalTermForClient: string;

  @Column({ name: 'DESCRICAO2', type: 'varchar2', length: 45, nullable: true })
  description2: string;

  @Column({ name: 'VLTXCARNE', type: 'number', precision: 8, scale: 2, nullable: true })
  meatValue: number;

  @Column({ name: 'TXFATOR', type: 'number', precision: 18, scale: 6, nullable: true })
  factorTax: number;

  @Column({ name: 'USADESCFINANCEIRO', type: 'varchar2', length: 1, nullable: false, default: 'S' })
  useFinancialDiscount: string;

  @Column({ name: 'USAMULTIFILIAL', type: 'varchar2', length: 1, nullable: false, default: 'S' })
  useMultiBranch: string;

  @Column({ name: 'STATUS', type: 'varchar2', length: 1, nullable: true })
  status: string;

  @Column({ name: 'DIASCARENCIA', type: 'number', precision: 2, scale: 0, nullable: true })
  gracePeriodDays: number;

  @Column({ name: 'DIAFIXO', type: 'number', precision: 2, scale: 0, nullable: true })
  fixedDay: number;

  @Column({ name: 'NUMEROPARCELASDIAFIXO', type: 'number', precision: 2, scale: 0, nullable: true })
  numberOfInstallmentsFixedDay: number;

  @Column({ name: 'CODFUNC', type: 'number', precision: 8, scale: 0, nullable: true })
  employeeCode: number;

  @Column({ name: 'NUMDIASATRASOINI', type: 'number', precision: 4, scale: 0, nullable: true })
  initialOverdueDays: number;

  @Column({ name: 'NUMDIASATRASOFIM', type: 'number', precision: 4, scale: 0, nullable: true })
  finalOverdueDays: number;

  @Column({ name: 'VLMINPARCELA', type: 'number', precision: 18, scale: 6, nullable: true })
  minimumInstallmentValue: number;

  @Column({ name: 'DIASMINPARCELA', type: 'number', precision: 6, scale: 0, nullable: true })
  minimumInstallmentDays: number;

  @Column({ name: 'DIASMAXPARCELA', type: 'number', precision: 6, scale: 0, nullable: true })
  maximumInstallmentDays: number;

  @Column({ name: 'DESCENTLIMCREDCLI', type: 'varchar2', length: 1, nullable: true })
  financialDiscountLimitCreditClient: string;

  @Column({ name: 'TIPOPLANO', type: 'varchar2', length: 1, nullable: false, default: 'N' })
  planType: string;

  @Column({ name: 'NAOCOBRARTXBOLETO', type: 'varchar2', length: 1, nullable: true })
  doNotChargeBoletoTax: string;

  @Column({ name: 'USASUPPLICARD', type: 'varchar2', length: 1, nullable: true })
  useSupplicard: string;

  @Column({ name: 'CONDFINANC', type: 'varchar2', length: 9, nullable: true })
  financialCondition: string;

  @Column({ name: 'CODSUPPLICARD', type: 'varchar2', length: 15, nullable: true })
  supplicardCode: string;

  @Column({ name: 'DIAFIXOCLIPRIMPARC', type: 'varchar2', length: 1, nullable: false, default: 'S' })
  fixedDayClientFirstInstallment: string;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  lastUpdateDate: Date;

  @Column({ name: 'DTCADASTRO', type: 'date', nullable: true })
  registrationDate: Date;

  @Column({ name: 'MXSPJENVIAECOMMERCE', type: 'varchar2', length: 1, nullable: true })
  mxspjSendEcommerce: string;

  @Column({ name: 'MXSPJPAGAMENTOAPOSSEPARACAO', type: 'varchar2', length: 1, nullable: true })
  mxspjPaymentAfterSeparation: string;

  @Column({ name: 'DTALTERC5', type: 'date', nullable: true })
  dtAlterC5: Date;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  dtMxsAlter: Date;
}