import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCORIGEMPRECO' })
export class PcorigemprecoEntity {
  @Column({ name: 'CODAUTORIZACAO', type: 'number', precision: 10, scale: 0, nullable: true })
  authorizationCode: number | null;

  @Column({ name: 'CODAUXILIAR', type: 'number', precision: 20, scale: 0, nullable: true })
  auxiliaryCode: number | null;

  @Column({ name: 'CODCAMPANHA', type: 'number', precision: 8, scale: 0, nullable: true })
  campaignCode: number | null;

  @Column({ name: 'CODCBS', type: 'number', precision: 10, scale: 0, nullable: true })
  cbsCode: number | null;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  customerCode: number | null;

  @Column({ name: 'CODDESCFLEX', type: 'number', precision: 8, scale: 0, nullable: true })
  flexDiscountCode: number | null;

  @Column({ name: 'CODDESCONTO', type: 'number', precision: 8, scale: 0, nullable: true })
  discountCode: number | null;

  @Column({ name: 'CODDESCPBASE', type: 'number', precision: 8, scale: 0, nullable: true })
  basePriceDiscountCode: number | null;

  @Column({ name: 'CODDESCPTABELA', type: 'number', precision: 8, scale: 0, nullable: true })
  tableDiscountCode: number | null;

  @Column({ name: 'CODDESCVOLPTABELA', type: 'number', precision: 8, scale: 0, nullable: true })
  tableVolumeDiscountCode: number | null;

  @Column({ name: 'CODDESCVOLUME', type: 'number', precision: 8, scale: 0, nullable: true })
  volumeDiscountCode: number | null;

  @Column({ name: 'CODEMITENTE', type: 'number', precision: 8, scale: 0, nullable: true })
  issuerCode: number | null;

  @Column({ name: 'CODFIGVENDATRIANGULAR', type: 'number', precision: 4, scale: 0, nullable: true })
  triangularSaleFigCode: number | null;

  @Column({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: true })
  branchCode: string | null;

  @Column({ name: 'CODFILIALNF', type: 'varchar2', length: 2, nullable: true })
  nfBranchCode: string | null;

  @Column({ name: 'CODFISCAL', type: 'number', precision: 8, scale: 0, nullable: true })
  fiscalCode: number | null;

  @Column({ name: 'CODIBS', type: 'number', precision: 10, scale: 0, nullable: true })
  ibsCode: number | null;

  @Column({ name: 'CODIS', type: 'number', precision: 10, scale: 0, nullable: true })
  isCode: number | null;

  @Column({ name: 'CODPLPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  paymentPlanCode: number | null;

  @Column({ name: 'CODPRECOFIXO', type: 'number', precision: 10, scale: 0, nullable: true })
  fixedPriceCode: number | null;

  @PrimaryColumn({ name: 'CODPROD', type: 'number', precision: 6, scale: 0, nullable: false })
  productCode: number;

  @Column({ name: 'CODPRODSUBST', type: 'number', precision: 6, scale: 0, nullable: true })
  substituteProdCode: number | null;

  @Column({ name: 'CODROTINADESCFLEX', type: 'number', precision: 8, scale: 0, nullable: true })
  flexDiscountRoutineCode: number | null;

  @Column({ name: 'CODROTINADESCPTABELA', type: 'number', precision: 8, scale: 0, nullable: true })
  tableDiscountRoutineCode: number | null;

  @Column({ name: 'CODROTINAPBASE', type: 'number', precision: 8, scale: 0, nullable: true })
  basePriceRoutineCode: number | null;

  @Column({ name: 'COLUNAPRECO', type: 'number', precision: 2, scale: 0, nullable: true })
  priceColumn: number | null;

  @Column({ name: 'CREDITAPOLITICAPBASE', type: 'varchar2', length: 1, nullable: true })
  accreditBasePolicy: string | null;

  @Column({ name: 'CUSTOMARKUPMED', type: 'number', precision: 18, scale: 6, nullable: true })
  customMarkupMed: number | null;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date | null;

  @Column({ name: 'DTFIMAUTOR', type: 'date', nullable: true })
  authEndDate: Date | null;

  @Column({ name: 'DTFIMDESCFLEX', type: 'date', nullable: true })
  flexDiscountEndDate: Date | null;

  @Column({ name: 'DTFIMDESCPBASE', type: 'date', nullable: true })
  basePriceDiscountEndDate: Date | null;

  @Column({ name: 'DTFIMDESCPTABELA', type: 'date', nullable: true })
  tableDiscountEndDate: Date | null;

  @Column({ name: 'DTFIMDESCVOLUME', type: 'date', nullable: true })
  volumeDiscountEndDate: Date | null;

  @Column({ name: 'DTFIMOFERTA', type: 'date', nullable: true })
  offerEndDate: Date | null;

  @Column({ name: 'DTINICIOAUTOR', type: 'date', nullable: true })
  authStartDate: Date | null;

  @Column({ name: 'DTINICIODESCFLEX', type: 'date', nullable: true })
  flexDiscountStartDate: Date | null;

  @Column({ name: 'DTINICIODESCPBASE', type: 'date', nullable: true })
  basePriceDiscountStartDate: Date | null;

  @Column({ name: 'DTINICIODESCPTABELA', type: 'date', nullable: true })
  tableDiscountStartDate: Date | null;

  @Column({ name: 'DTINICIODESCVOLUME', type: 'date', nullable: true })
  volumeDiscountStartDate: Date | null;

  @Column({ name: 'DTINICIOOFERTA', type: 'date', nullable: true })
  offerStartDate: Date | null;

  @Column({ name: 'FATORPRECO', type: 'number', precision: 18, scale: 6, nullable: true })
  priceFactor: number | null;

  @Column({ name: 'FIMINTERVALO', type: 'number', precision: 18, scale: 6, nullable: true })
  intervalEnd: number | null;

  @Column({ name: 'FIMINTERVALOAUTORI', type: 'number', precision: 18, scale: 6, nullable: true })
  authIntervalEnd: number | null;

  @Column({ name: 'FIMINTERVALOPBASE', type: 'number', precision: 18, scale: 6, nullable: true })
  basePriceIntervalEnd: number | null;

  @Column({ name: 'FIMINTERVALOPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tableIntervalEnd: number | null;

  @Column({ name: 'INCIOINTERVALOAUTORI', type: 'number', precision: 18, scale: 6, nullable: true })
  authIntervalStart: number | null;

  @Column({ name: 'INICIOINTERVALO', type: 'number', precision: 18, scale: 6, nullable: true })
  intervalStart: number | null;

  @Column({ name: 'INICIOINTERVALOAUTORI', type: 'number', precision: 18, scale: 6, nullable: true })
  authIntervalStart2: number | null;

  @Column({ name: 'INICIOINTERVALOPBASE', type: 'number', precision: 18, scale: 6, nullable: true })
  basePriceIntervalStart: number | null;

  @Column({ name: 'INICIOINTERVALOPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tableIntervalStart: number | null;

  @Column({ name: 'NAODEBITAPOLITICAPBASE', type: 'varchar2', length: 1, nullable: true })
  noDebitBasePolicy: string | null;

  @PrimaryColumn({ name: 'NUMPED', type: 'number', precision: 10, scale: 0, nullable: false })
  orderNumber: number;

  @Column({ name: 'NUMREGIAO', type: 'number', precision: 4, scale: 0, nullable: true })
  regionNumber: number | null;

  @PrimaryColumn({ name: 'NUMSEQ', type: 'number', precision: 20, scale: 0, nullable: false })
  sequenceNumber: number;

  @Column({ name: 'ORIGEMPED', type: 'varchar2', length: 1, nullable: true })
  orderOrigin: string | null;

  @Column({ name: 'ORIGEMPEDFLEX', type: 'varchar2', length: 3, nullable: true })
  flexOrderOrigin: string | null;

  @Column({ name: 'ORIGEMPEDPBASE', type: 'varchar2', length: 3, nullable: true })
  basePriceOrderOrigin: string | null;

  @Column({ name: 'ORIGEMPEDPTABELA', type: 'varchar2', length: 3, nullable: true })
  tableOrderOrigin: string | null;

  @Column({ name: 'ORIGEMPRECO', type: 'varchar2', length: 3, nullable: true })
  priceOrigin: string | null;

  @Column({ name: 'PERACRESCISMOSIMPNAC', type: 'number', precision: 18, scale: 6, nullable: true })
  increaseSimplNacRate: number | null;

  @Column({ name: 'PERBONIFIC', type: 'number', precision: 12, scale: 4, nullable: true })
  bonusRate: number | null;

  @Column({ name: 'PERCACRESC', type: 'number', precision: 18, scale: 6, nullable: true })
  increaseRate: number | null;

  @Column({ name: 'PERCACRESCBALCAO', type: 'number', precision: 8, scale: 4, nullable: true })
  counterIncreaseRate: number | null;

  @Column({ name: 'PERCACRESCBENFFIS', type: 'number', precision: 6, scale: 0, nullable: true })
  fiscalBenefitIncreaseRate: number | null;

  @Column({ name: 'PERCACRESCIMOTELEMARKETING', type: 'number', precision: 18, scale: 6, nullable: true })
  imTelemarketingIncreaseRate: number | null;

  @Column({ name: 'PERCACRESCPF', type: 'number', precision: 8, scale: 4, nullable: true })
  pfIncreaseRate: number | null;

  @Column({ name: 'PERCDESC', type: 'number', precision: 18, scale: 6, nullable: true })
  discountRate: number | null;

  @Column({ name: 'PERCDESCABATIMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  abatementDiscountRate: number | null;

  @Column({ name: 'PERCDESCAUTOR', type: 'number', precision: 18, scale: 6, nullable: true })
  authDiscountRate: number | null;

  @Column({ name: 'PERCDESCCOFINS', type: 'number', precision: 12, scale: 4, nullable: true })
  cofinsDiscountRate: number | null;

  @Column({ name: 'PERCDESCFLEX', type: 'number', precision: 8, scale: 4, nullable: true })
  flexDiscountRate: number | null;

  @Column({ name: 'PERCDESCPBASE', type: 'number', precision: 8, scale: 4, nullable: true })
  basePriceDiscountRate: number | null;

  @Column({ name: 'PERCDESCPIS', type: 'number', precision: 12, scale: 4, nullable: true })
  pisDiscountRate: number | null;

  @Column({ name: 'PERCDESCPTABELA', type: 'number', precision: 8, scale: 4, nullable: true })
  tableDiscountRate: number | null;

  @Column({ name: 'PERCDESCVOLUME', type: 'number', precision: 8, scale: 4, nullable: true })
  volumeDiscountRate: number | null;

  @Column({ name: 'PERCFRETE', type: 'number', precision: 8, scale: 4, nullable: true })
  freightRate: number | null;

  @Column({ name: 'PERCMARKUPMED', type: 'number', precision: 18, scale: 6, nullable: true })
  markupMedRate: number | null;

  @Column({ name: 'PERCPLPAG', type: 'number', precision: 8, scale: 4, nullable: true })
  paymentPlanRate: number | null;

  @Column({ name: 'PERCRAMOATIV', type: 'number', precision: 8, scale: 4, nullable: true })
  activityAreaRate: number | null;

  @Column({ name: 'PERCREDALIQIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiRateReductionRate: number | null;

  @Column({ name: 'PERDESCCOM', type: 'number', precision: 12, scale: 4, nullable: true })
  commissionDiscountRate: number | null;

  @Column({ name: 'POFERTA', type: 'number', precision: 18, scale: 6, nullable: true })
  offerPrice: number | null;

  @Column({ name: 'PORIGINAL', type: 'number', precision: 18, scale: 6, nullable: true })
  originalPrice: number | null;

  @Column({ name: 'PRECOECF', type: 'number', precision: 18, scale: 6, nullable: true })
  ecfPrice: number | null;

  @Column({ name: 'QTMINATACADO', type: 'number', precision: 18, scale: 6, nullable: true })
  minWholesaleQty: number | null;

  @Column({ name: 'QTMULTIPLO', type: 'number', precision: 6, scale: 0, nullable: true })
  multipleQty: number | null;

  @Column({ name: 'SITTRIBUT', type: 'varchar2', length: 3, nullable: true })
  tributaryStatus: string | null;

  @Column({ name: 'TIPOBROKER', type: 'varchar2', length: 3, nullable: true })
  brokerType: string | null;

  @Column({ name: 'TIPOCUSTOMARKUPMED', type: 'varchar2', length: 2, nullable: true })
  customMarkupMedType: string | null;

  @Column({ name: 'TIPODESCFLEX', type: 'varchar2', length: 3, nullable: true })
  flexDiscountType: string | null;

  @Column({ name: 'TIPODESCONTO', type: 'varchar2', length: 1, nullable: true })
  discountType: string | null;

  @Column({ name: 'TIPODESCPBASE', type: 'varchar2', length: 3, nullable: true })
  basePriceDiscountType: string | null;

  @Column({ name: 'TIPODESCPTABELA', type: 'varchar2', length: 3, nullable: true })
  tableDiscountType: string | null;

  @Column({ name: 'TIPOFRETE', type: 'varchar2', length: 2, nullable: true })
  freightType: string | null;

  @Column({ name: 'USATRIBUTPORUF', type: 'varchar2', length: 1, nullable: true })
  useStateTaxes: string | null;

  @Column({ name: 'VALORCARCACA', type: 'number', precision: 18, scale: 6, nullable: true })
  scalepValue: number | null;

  @Column({ name: 'VLACRESC', type: 'number', precision: 18, scale: 6, nullable: true })
  increaseAmount: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  bonusAmount: number | null;

  @Column({ name: 'VLCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsAmount: number | null;

  @Column({ name: 'VLDESC', type: 'number', precision: 18, scale: 6, nullable: true })
  discountAmount: number | null;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  abatementDiscountAmount: number | null;

  @Column({ name: 'VLDESCCOM', type: 'number', precision: 18, scale: 6, nullable: true })
  commissionDiscountAmount: number | null;

  @Column({ name: 'VLDESCICMS', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsDiscountAmount: number | null;

  @Column({ name: 'VLDESCREDUCAOCOFINS', type: 'number', precision: 24, scale: 6, nullable: true })
  cofinsReductionAmount: number | null;

  @Column({ name: 'VLDESCREDUCAOPIS', type: 'number', precision: 24, scale: 6, nullable: true })
  pisReductionAmount: number | null;

  @Column({ name: 'VLDIFALIQUOTAS', type: 'number', precision: 18, scale: 6, nullable: true })
  diffRateAmount: number | null;

  @Column({ name: 'VLFECP', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpAmount: number | null;

  @Column({ name: 'VLIBS', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsAmount: number | null;

  @Column({ name: 'VLICMSDIFALIQPART', type: 'number', precision: 22, scale: 6, nullable: true })
  icmsDiffRatePartAmount: number | null;

  @Column({ name: 'VLICMSPARTILHA', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsShareAmount: number | null;

  @Column({ name: 'VLICMSSTRETANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  priorIcmsStAmount: number | null;

  @Column({ name: 'VLIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiAmount: number | null;

  @Column({ name: 'VLIS', type: 'number', precision: 23, scale: 10, nullable: true })
  isAmount: number | null;

  @Column({ name: 'VLREDCMVSIMPLESNAC', type: 'number', precision: 18, scale: 6, nullable: true })
  cmvSimplNacReductionAmount: number | null;

  @Column({ name: 'VLREDPVENDASIMPLESNA', type: 'number', precision: 18, scale: 6, nullable: true })
  salesSimplNaReductionAmount: number | null;

  @Column({ name: 'VLREPASSE', type: 'number', precision: 18, scale: 6, nullable: true })
  repasseAmount: number | null;

  @Column({ name: 'VLST', type: 'number', precision: 18, scale: 6, nullable: true })
  stAmount: number | null;

  @Column({ name: 'VLSUFRAMA', type: 'number', precision: 18, scale: 6, nullable: true })
  suframaAmount: number | null;
}
