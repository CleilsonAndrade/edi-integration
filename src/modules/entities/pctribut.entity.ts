import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCTRIBUT' })
export class PctributEntity {
  @Column({ name: 'ACRESCALIQDESTICMSPART', type: 'varchar2', length: 1, nullable: true })
  increaseDestIcmsPartRate?: string | null;

  @Column({ name: 'AGREGADESCST1', type: 'varchar2', length: 1, nullable: true })
  aggregateDescSt1?: string | null;

  @Column({ name: 'AGREGAICMSISENCAOST1', type: 'varchar2', length: 1, nullable: true })
  aggregateIcmsExemptSt1?: string | null;

  @Column({ name: 'AGREGAICMSISENCAOST2', type: 'varchar2', length: 1, nullable: true })
  aggregateIcmsExemptSt2?: string | null;

  @Column({ name: 'AGREGAPISCOFINSST1', type: 'varchar2', length: 1, nullable: true })
  aggregatePisCoffinsSt1?: string | null;

  @Column({ name: 'AGREGAPISCOFINSST2', type: 'varchar2', length: 1, nullable: true })
  aggregatePisCoffinsSt2?: string | null;

  @Column({ name: 'AGREGARICMSNOVLTRANSF', type: 'varchar2', length: 1, nullable: true })
  aggregateIcmsNoVolTransf?: string | null;

  @Column({ name: 'AGREGARIPICALCULOST', type: 'varchar2', length: 1, nullable: true })
  aggregateIpiCalcSt?: string | null;

  @Column({ name: 'AGREGASUFRAMAST1', type: 'varchar2', length: 1, nullable: true })
  aggregateSuframaSt1?: string | null;

  @Column({ name: 'AGREGASUFRAMAST2', type: 'varchar2', length: 1, nullable: true })
  aggregateSuframaSt2?: string | null;

  @Column({ name: 'ALIQICMS1', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1?: number | null;

  @Column({ name: 'ALIQICMS1FONTE', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1Source?: number | null;

  @Column({ name: 'ALIQICMS1FONTESIMPLESNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1SourceSimplNac?: number | null;

  @Column({ name: 'ALIQICMS1TAB', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1Table?: number | null;

  @Column({ name: 'ALIQICMS1TRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1Transfer?: number | null;

  @Column({ name: 'ALIQICMS1TRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1TransferVirt?: number | null;

  @Column({ name: 'ALIQICMS1_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1Mc?: number | null;

  @Column({ name: 'ALIQICMS2', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2?: number | null;

  @Column({ name: 'ALIQICMS2FONTE', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2Source?: number | null;

  @Column({ name: 'ALIQICMS2FONTESIMPLESNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2SourceSimplNac?: number | null;

  @Column({ name: 'ALIQICMS2TAB', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2Table?: number | null;

  @Column({ name: 'ALIQICMS2TRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2Transfer?: number | null;

  @Column({ name: 'ALIQICMS2TRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2TransferVirt?: number | null;

  @Column({ name: 'ALIQICMS2_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2Mc?: number | null;

  @Column({ name: 'ALIQICMSEFETIVO', type: 'number', precision: 18, scale: 6, nullable: true })
  effectiveIcmsRate?: number | null;

  @Column({ name: 'ALIQICMSFECP', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsFecpRate?: number | null;

  @Column({ name: 'ALIQICMSSIMPLESNACIONAL', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsSimplNacRate?: number | null;

  @Column({ name: 'ALIQICMSTV9', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRateTv9?: number | null;

  @Column({ name: 'ALIQISS', type: 'number', precision: 8, scale: 4, nullable: true })
  issRate?: number | null;

  @Column({ name: 'ALIQSTSAIDA', type: 'number', precision: 8, scale: 4, nullable: true })
  stExitRate?: number | null;

  @Column({ name: 'ALIQSTSAIDAPF', type: 'number', precision: 8, scale: 4, nullable: true })
  stExitRatePf?: number | null;

  @Column({ name: 'ALIQSTSIMPLESNACIONAL', type: 'number', precision: 8, scale: 4, nullable: true })
  stSimplNacRate?: number | null;

  @Column({ name: 'ALIQUOTAICMSENTTRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsEntTransfRate?: number | null;

  @Column({ name: 'ALTERAFATORAJUSTEIVASN', type: 'varchar2', length: 1, nullable: true })
  alterAdjustFactorVasn?: string | null;

  @Column({ name: 'APLICAACRESCPJISENTA', type: 'varchar2', length: 1, nullable: true })
  applyIncreasePjExempt?: string | null;

  @Column({ name: 'APLICAACRESPFJURIDICA', type: 'varchar2', length: 1, nullable: true })
  applyIncreasePfJuridic?: string | null;

  @Column({ name: 'APLICAMVABASEICMS', type: 'varchar2', length: 1, nullable: true })
  applyMvaBaseIcms?: string | null;

  @Column({ name: 'APLICARDIFVALORFUNCEP', type: 'varchar2', length: 1, nullable: true })
  applyDiffValFuncep?: string | null;

  @Column({ name: 'APLICAREDICMSSEMIPIBA', type: 'varchar2', length: 1, nullable: true })
  applyReducIcmsNoIpiba?: string | null;

  @Column({ name: 'ASSINATURA', type: 'varchar2', length: 255, nullable: true })
  signature?: string | null;

  @Column({ name: 'BNFNAOCALCULAICMS', type: 'varchar2', length: 1, nullable: true })
  bnfNoCalcIcms?: string | null;

  @Column({ name: 'BNFNAOCALCULAICMSTV14', type: 'varchar2', length: 1, nullable: true })
  bnfNoCalcIcmsTv14?: string | null;

  @Column({ name: 'CALCBASEICMSMEDIAENT', type: 'varchar2', length: 1, nullable: true })
  calcBaseIcmsAvgEnt?: string | null;

  @Column({ name: 'CALCBASEREDICMSTRANSF', type: 'varchar2', length: 1, nullable: true })
  calcBaseReducIcmsTransf?: string | null;

  @Column({ name: 'CALCBCICMSNF', type: 'varchar2', length: 1, nullable: true })
  calcBcIcmsNf?: string | null;

  @Column({ name: 'CALCMEDIAPONDSTMG', type: 'varchar2', length: 1, nullable: true })
  calcAvgWeightStMg?: string | null;

  @Column({ name: 'CALCPARTISENTOICMS', type: 'varchar2', length: 1, nullable: true })
  calcPartExemptIcms?: string | null;

  @Column({ name: 'CALCSTTRANSF', type: 'varchar2', length: 1, nullable: true })
  calcStTransf?: string | null;

  @Column({ name: 'CALCULAFECPCLIMEI', type: 'varchar2', length: 1, nullable: true })
  calcFecpCliMei?: string | null;

  @Column({ name: 'CALCULARFECPISENTOIE', type: 'varchar2', length: 1, nullable: true })
  calcularfecpisentoie?: string | null;

  @Column({ name: 'CALCULARFUNCEPISENTOIE', type: 'varchar2', length: 1, nullable: true })
  calcularfuncepisentoie?: string | null;

  @Column({ name: 'CALCULARICMSSITTRIBUT060', type: 'varchar2', length: 1, nullable: true })
  calcularicmssittribut060?: string | null;

  @Column({ name: 'CALCULASTMT', type: 'varchar2', length: 1, nullable: true })
  calculastmt?: string | null;

  @Column({ name: 'CODCEST', type: 'varchar2', length: 7, nullable: true })
  codcest?: string | null;

  @Column({ name: 'CODCOLECAOVAR', type: 'number', precision: 4, scale: 0, nullable: true })
  codcolecaovar?: number | null;

  @Column({ name: 'CODECF', type: 'varchar2', length: 4, nullable: true })
  codecf?: string | null;

  @Column({ name: 'CODECFFUNCEP', type: 'varchar2', length: 4, nullable: true })
  codecffuncep?: string | null;

  @Column({ name: 'CODECFNRPA', type: 'varchar2', length: 4, nullable: true })
  codecfnrpa?: string | null;

  @Column({ name: 'CODECFREDUZIDO', type: 'varchar2', length: 4, nullable: true })
  codecfreduzido?: string | null;

  @Column({ name: 'CODFIGVENDATRIANGULAR', type: 'number', precision: 4, scale: 0, nullable: true })
  codfigvendatriangular?: number | null;

  @Column({ name: 'CODFISCAL', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscal?: number | null;

  @Column({ name: 'CODFISCALBONIFIC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalbonific?: number | null;

  @Column({ name: 'CODFISCALBONIFICINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalbonificinter?: number | null;

  @Column({ name: 'CODFISCALBONIFICINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalbonificinternasc?: number | null;

  @Column({ name: 'CODFISCALBROKERDEVENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalbrokerdevent?: number | null;

  @Column({ name: 'CODFISCALBROKERDEVSAID', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalbrokerdevsaid?: number | null;

  @Column({ name: 'CODFISCALBROKERENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalbrokerent?: number | null;

  @Column({ name: 'CODFISCALBROKERSAID', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalbrokersaid?: number | null;

  @Column({ name: 'CODFISCALCONSIG', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalconsig?: number | null;

  @Column({ name: 'CODFISCALCONSIGINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalconsiginter?: number | null;

  @Column({ name: 'CODFISCALCONSIGINTERNAC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalconsiginternac?: number | null;

  @Column({ name: 'CODFISCALCONSUFINAL', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalconsufinal?: number | null;

  @Column({ name: 'CODFISCALCONSUFINALINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalconsufinalinter?: number | null;

  @Column({ name: 'CODFISCALCONSUFINALINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalconsufinalinternasc?: number | null;

  @Column({ name: 'CODFISCALCONTAORDEM', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalcontaordem?: number | null;

  @Column({ name: 'CODFISCALCONTAORDEMINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalcontaordeminter?: number | null;

  @Column({ name: 'CODFISCALCONTAORDEMSIMPENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalcontaordemsimpent?: number | null;

  @Column({ name: 'CODFISCALCONTAORDEMSIMPENTINTE', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalcontaordemsimpentinte?: number | null;

  @Column({ name: 'CODFISCALDEVCLI', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcli?: number | null;

  @Column({ name: 'CODFISCALDEVCLIBONIFIC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevclibonific?: number | null;

  @Column({ name: 'CODFISCALDEVCLIBONIFICINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevclibonificinter?: number | null;

  @Column({ name: 'CODFISCALDEVCLIBONINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcliboninternasc?: number | null;

  @Column({ name: 'CODFISCALDEVCLIINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcliinter?: number | null;

  @Column({ name: 'CODFISCALDEVCLIINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcliinternasc?: number | null;

  @Column({ name: 'CODFISCALDEVCLIPF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevclipf?: number | null;

  @Column({ name: 'CODFISCALDEVCLIPFINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevclipfinter?: number | null;

  @Column({ name: 'CODFISCALDEVCLIPFINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevclipfinternasc?: number | null;

  @Column({ name: 'CODFISCALDEVCLIPROENTINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcliproentinternasc?: number | null;

  @Column({ name: 'CODFISCALDEVCLIPRONTAENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcliprontaent?: number | null;

  @Column({ name: 'CODFISCALDEVCLIPRONTAENTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcliprontaentinter?: number | null;

  @Column({ name: 'CODFISCALDEVCLISUFRAMAEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevclisuframaest?: number | null;

  @Column({ name: 'CODFISCALDEVCLISUFRAMAINTE', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevclisuframainte?: number | null;

  @Column({ name: 'CODFISCALDEVCOMODATOEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcomodatoest?: number | null;

  @Column({ name: 'CODFISCALDEVCOMODATOINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcomodatointer?: number | null;

  @Column({ name: 'CODFISCALDEVCONTAORDEM', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcontaordem?: number | null;

  @Column({ name: 'CODFISCALDEVCONTAORDEMINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcontaordeminter?: number | null;

  @Column({ name: 'CODFISCALDEVCONTORDINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevcontordinternasc?: number | null;

  @Column({ name: 'CODFISCALDEVISENTOST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevisentost?: number | null;

  @Column({ name: 'CODFISCALDEVISENTOSTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevisentostinter?: number | null;

  @Column({ name: 'CODFISCALDEVISENTOSTINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevisentostinternasc?: number | null;

  @Column({ name: 'CODFISCALDEVISEORGAOPUBEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldeviseorgaopubest?: number | null;

  @Column({ name: 'CODFISCALDEVISEORGAOPUBINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldeviseorgaopubinter?: number | null;

  @Column({ name: 'CODFISCALDEVMERCCONSIG', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevmercconsig?: number | null;

  @Column({ name: 'CODFISCALDEVMERCCONSIGINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevmercconsiginter?: number | null;

  @Column({ name: 'CODFISCALDEVTRANSF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevtransf?: number | null;

  @Column({ name: 'CODFISCALDEVTRANSFENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevtransfent?: number | null;

  @Column({ name: 'CODFISCALDEVTRANSFENTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevtransfentinter?: number | null;

  @Column({ name: 'CODFISCALDEVTRANSFINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaldevtransfinter?: number | null;

  @Column({ name: 'CODFISCALENTBENEFICEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalentbeneficest?: number | null;

  @Column({ name: 'CODFISCALENTBENEFICINTEREST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalentbeneficinterest?: number | null;

  @Column({ name: 'CODFISCALENTBENEFINTERNAC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalentbenefinternac?: number | null;

  @Column({ name: 'CODFISCALENTDEVTRANSFVIR', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalentdevtransfvir?: number | null;

  @Column({ name: 'CODFISCALENTDEVTRANSFVIRINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalentdevtransfvirinter?: number | null;

  @Column({ name: 'CODFISCALENTDEVTRFFILRET', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalentdevtrffilret?: number | null;

  @Column({ name: 'CODFISCALENTTRANSFVIR', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalenttransfvir?: number | null;

  @Column({ name: 'CODFISCALENTTRANSFVIRINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalenttransfvirinter?: number | null;

  @Column({ name: 'CODFISCALENTTRFFILRET', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalenttrffilret?: number | null;

  @Column({ name: 'CODFISCALENTTRFFILRETINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalenttrffilretinter?: number | null;

  @Column({ name: 'CODFISCALENVCOMODATOEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalenvcomodatoest?: number | null;

  @Column({ name: 'CODFISCALENVCOMODATOINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalenvcomodatointer?: number | null;

  @Column({ name: 'CODFISCALESTNFEVENDA', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalestnfevenda?: number | null;

  @Column({ name: 'CODFISCALESTNFEVENDAINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalestnfevendainter?: number | null;

  @Column({ name: 'CODFISCALESTNFEVENDAINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalestnfevendainternasc?: number | null;

  @Column({ name: 'CODFISCALESTORNO', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalestorno?: number | null;

  @Column({ name: 'CODFISCALESTORNOSAIDAINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalestornosaidainter?: number | null;

  @Column({ name: 'CODFISCALFILRETDEPTERCENTRADA', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalfilretdeptercentrada?: number | null;

  @Column({ name: 'CODFISCALFILRETDEPTERCENTRADAI', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalfilretdeptercentradai?: number | null;

  @Column({ name: 'CODFISCALINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalinter?: number | null;

  @Column({ name: 'CODFISCALINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalinternasc?: number | null;

  @Column({ name: 'CODFISCALINTERNASCPF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalinternascpf?: number | null;

  @Column({ name: 'CODFISCALINTERNASCTV9', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalinternasctv9?: number | null;

  @Column({ name: 'CODFISCALINTERPF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalinterpf?: number | null;

  @Column({ name: 'CODFISCALINTERTRANSFVENDENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalintertransfvendent?: number | null;

  @Column({ name: 'CODFISCALINTERTV9', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalintertv9?: number | null;

  @Column({ name: 'CODFISCALINTER_MC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalinterMc?: number | null;

  @Column({ name: 'CODFISCALISENTOST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentost?: number | null;

  @Column({ name: 'CODFISCALISENTOSTCONT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentostcont?: number | null;

  @Column({ name: 'CODFISCALISENTOSTCONTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentostcontinter?: number | null;

  @Column({ name: 'CODFISCALISENTOSTCONTINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentostcontinternasc?: number | null;

  @Column({ name: 'CODFISCALISENTOSTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentostinter?: number | null;

  @Column({ name: 'CODFISCALISENTOSTINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentostinternasc?: number | null;

  @Column({ name: 'CODFISCALISENTOSTRAMO', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentostramo?: number | null;

  @Column({ name: 'CODFISCALISENTOSTRAMOINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalisentostramointer?: number | null;

  @Column({ name: 'CODFISCALMERCCONSIG', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalmercconsig?: number | null;

  @Column({ name: 'CODFISCALMERCCONSIGINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalmercconsiginter?: number | null;

  @Column({ name: 'CODFISCALMERCCONSIGINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalmercconsiginternasc?: number | null;

  @Column({ name: 'CODFISCALPF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalpf?: number | null;

  @Column({ name: 'CODFISCALPRONTAENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalprontaent?: number | null;

  @Column({ name: 'CODFISCALPRONTAENTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalprontaentinter?: number | null;

  @Column({ name: 'CODFISCALPRONTAENTINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalprontaentinternasc?: number | null;

  @Column({ name: 'CODFISCALSAIDBENEFEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaidbenefest?: number | null;

  @Column({ name: 'CODFISCALSAIDBENEFINTEREST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaidbenefinterest?: number | null;

  @Column({ name: 'CODFISCALSAIDBENEFINTERNAC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaidbenefinternac?: number | null;

  @Column({ name: 'CODFISCALSAIDDEVTRANSFVIR', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaiddevtransfvir?: number | null;

  @Column({ name: 'CODFISCALSAIDDEVTRANSFVIRINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaiddevtransfvirinter?: number | null;

  @Column({ name: 'CODFISCALSAIDDEVTRFFILRET', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaiddevtrffilret?: number | null;

  @Column({ name: 'CODFISCALSAIDTRANSFVIR', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaidtransfvir?: number | null;

  @Column({ name: 'CODFISCALSAIDTRANSFVIRINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaidtransfvirinter?: number | null;

  @Column({ name: 'CODFISCALSAIDTRFFILRET', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaidtrffilret?: number | null;

  @Column({ name: 'CODFISCALSAIDTRFFILRETINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsaidtrffilretinter?: number | null;

  @Column({ name: 'CODFISCALSERV', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalserv?: number | null;

  @Column({ name: 'CODFISCALSIMPENTFUT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsimpentfut?: number | null;

  @Column({ name: 'CODFISCALSIMPENTFUTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsimpentfutinter?: number | null;

  @Column({ name: 'CODFISCALSIMPLESNACEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsimplesnacest?: number | null;

  @Column({ name: 'CODFISCALSIMPLESNACNAC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsimplesnacnac?: number | null;

  @Column({ name: 'CODFISCALSRENVIODEPFECH', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsrenviodepfech?: number | null;

  @Column({ name: 'CODFISCALSRESTSR', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsrestsr?: number | null;

  @Column({ name: 'CODFISCALSREXT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsrext?: number | null;

  @Column({ name: 'CODFISCALSRINTE', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsrinte?: number | null;

  @Column({ name: 'CODFISCALSRVASILHAME', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsrvasilhame?: number | null;

  @Column({ name: 'CODFISCALSRVASILHAMEINTERES', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsrvasilhameinteres?: number | null;

  @Column({ name: 'CODFISCALSTFONTEEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalstfonteest?: number | null;

  @Column({ name: 'CODFISCALSTFONTEINTEREST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalstfonteinterest?: number | null;

  @Column({ name: 'CODFISCALSTFONTEINTERNAC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalstfonteinternac?: number | null;

  @Column({ name: 'CODFISCALSUFRAMA', type: 'number', precision: 6, scale: 0, nullable: true })
  codfiscalsuframa?: number | null;

  @Column({ name: 'CODFISCALSUFRAMAINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalsuframainter?: number | null;

  @Column({ name: 'CODFISCALTRANSF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransf?: number | null;

  @Column({ name: 'CODFISCALTRANSFDEPFECHEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfdepfechest?: number | null;

  @Column({ name: 'CODFISCALTRANSFDEPFECHINTEREST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfdepfechinterest?: number | null;

  @Column({ name: 'CODFISCALTRANSFENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfent?: number | null;

  @Column({ name: 'CODFISCALTRANSFENTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfentinter?: number | null;

  @Column({ name: 'CODFISCALTRANSFF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransff?: number | null;

  @Column({ name: 'CODFISCALTRANSFFINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransffinter?: number | null;

  @Column({ name: 'CODFISCALTRANSFFINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransffinternasc?: number | null;

  @Column({ name: 'CODFISCALTRANSFINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfinter?: number | null;

  @Column({ name: 'CODFISCALTRANSFINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfinternasc?: number | null;

  @Column({ name: 'CODFISCALTRANSFSAIDAEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfsaidaest?: number | null;

  @Column({ name: 'CODFISCALTRANSFSAIDAINT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfsaidaint?: number | null;

  @Column({ name: 'CODFISCALTRANSFVENDENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfvendent?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIROPENTEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfviropentest?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIROPENTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfviropentinter?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIROPSAIEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfviropsaiest?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIROPSAIINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfviropsaiinter?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIRSNENTEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfvirsnentest?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIRSNENTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfvirsnentinter?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIRSNSAIEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfvirsnsaiest?: number | null;

  @Column({ name: 'CODFISCALTRANSFVIRSNSAIINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltransfvirsnsaiinter?: number | null;

  @Column({ name: 'CODFISCALTRIANGULAR', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltriangular?: number | null;

  @Column({ name: 'CODFISCALTRIANGULARINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltriangularinter?: number | null;

  @Column({ name: 'CODFISCALTRIANGULARINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltriangularinternasc?: number | null;

  @Column({ name: 'CODFISCALTRIANGULARINTERNASCPF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltriangularinternascpf?: number | null;

  @Column({ name: 'CODFISCALTRIANGULARINTERPF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltriangularinterpf?: number | null;

  @Column({ name: 'CODFISCALTRIANGULARPF', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltriangularpf?: number | null;

  @Column({ name: 'CODFISCALTROCA', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltroca?: number | null;

  @Column({ name: 'CODFISCALTROCAINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltrocainter?: number | null;

  @Column({ name: 'CODFISCALTROCAINTERNASC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltrocainternasc?: number | null;

  @Column({ name: 'CODFISCALTV9', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscaltv9?: number | null;

  @Column({ name: 'CODFISCALVENDACONSIG', type: 'number', precision: 10, scale: 0, nullable: true })
  codfiscalvendaconsig?: number | null;

  @Column({ name: 'CODFISCALVENDACONSIGINTER', type: 'number', precision: 10, scale: 0, nullable: true })
  codfiscalvendaconsiginter?: number | null;

  @Column({ name: 'CODFISCALVENDACONSIGINTERNASC', type: 'number', precision: 10, scale: 0, nullable: true })
  codfiscalvendaconsiginternasc?: number | null;

  @Column({ name: 'CODFISCALVENDAENTFUT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalvendaentfut?: number | null;

  @Column({ name: 'CODFISCALVENDAENTFUTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalvendaentfutinter?: number | null;

  @Column({ name: 'CODFISCALVENDAEXPINDIRETA', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalvendaexpindireta?: number | null;

  @Column({ name: 'CODFISCALVENDAEXPINDIRETAINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalvendaexpindiretainter?: number | null;

  @Column({ name: 'CODFISCALVENDAPRONTAENT', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalvendaprontaent?: number | null;

  @Column({ name: 'CODFISCALVENDAPRONTAENTINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalvendaprontaentinter?: number | null;

  @Column({ name: 'CODFISCALVENISEORGAOPUBEST', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalveniseorgaopubest?: number | null;

  @Column({ name: 'CODFISCALVENISEORGAOPUBINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalveniseorgaopubinter?: number | null;

  @Column({ name: 'CODFISCAL_MC', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscalMc?: number | null;

  @Column({ name: 'CODFISCENTDEVTRFFILRETINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscentdevtrffilretinter?: number | null;

  @Column({ name: 'CODFISCSAIDDEVTRFFILRETINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscsaiddevtrffilretinter?: number | null;

  @Column({ name: 'CODFISCSUFRAMAISENTICMSINTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfiscsuframaisenticmsinter?: number | null;

  @Column({ name: 'CODFISSRENVIODEPFECHINTERES', type: 'number', precision: 8, scale: 0, nullable: true })
  codfissrenviodepfechinteres?: number | null;

  @Column({ name: 'CODFISSRRETORNODEPFECH', type: 'number', precision: 8, scale: 0, nullable: true })
  codfissrretornodepfech?: number | null;

  @Column({ name: 'CODFISSRRETORNODEPFECHINTERES', type: 'number', precision: 8, scale: 0, nullable: true })
  codfissrretornodepfechinteres?: number | null;

  @Column({ name: 'CODFUNCULTALTER', type: 'number', precision: 8, scale: 0, nullable: true })
  codfuncultalter?: number | null;

  @Column({ name: 'CODICM', type: 'number', precision: 8, scale: 4, nullable: true })
  codicm?: number | null;

  @Column({ name: 'CODICMANTECIPADO', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmantecipado?: number | null;

  @Column({ name: 'CODICMCONSUMIDOR', type: 'number', precision: 8, scale: 2, nullable: true })
  codicmconsumidor?: number | null;

  @Column({ name: 'CODICMDIFER', type: 'number', precision: 18, scale: 6, nullable: true })
  codicmdifer?: number | null;

  @Column({ name: 'CODICMINTERNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  codicminternac?: number | null;

  @Column({ name: 'CODICMNRPA', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmnrpa?: number | null;

  @Column({ name: 'CODICMPF', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmpf?: number | null;

  @Column({ name: 'CODICMPRODRURAL', type: 'number', precision: 10, scale: 4, nullable: true })
  codicmprodrural?: number | null;

  @Column({ name: 'CODICMSIMPLESNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmsimplesnac?: number | null;

  @Column({ name: 'CODICMTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtab?: number | null;

  @Column({ name: 'CODICMTABBONIF', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabbonif?: number | null;

  @Column({ name: 'CODICMTABINTERNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabinternac?: number | null;

  @Column({ name: 'CODICMTABISENCAOICMS', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabisencaoicms?: number | null;

  @Column({ name: 'CODICMTABNRPA', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabnrpa?: number | null;

  @Column({ name: 'CODICMTABPF', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabpf?: number | null;

  @Column({ name: 'CODICMTABPFBONIF', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabpfbonif?: number | null;

  @Column({ name: 'CODICMTABSIMPNASC', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabsimpnasc?: number | null;

  @Column({ name: 'CODICMTABTRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtabtransf?: number | null;

  @Column({ name: 'CODICMTRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtransf?: number | null;

  @Column({ name: 'CODICMTRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmtransfvirt?: number | null;

  @Column({ name: 'CODICM_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  codicmMc?: number | null;

  @Column({ name: 'CODPRODGNRE', type: 'number', precision: 6, scale: 0, nullable: true })
  codprodgnre?: number | null;

  @PrimaryColumn({ name: 'CODST', type: 'number', precision: 4, scale: 0, nullable: false })
  statusCode?: number;

  @Column({ name: 'COMPARARBASEICMSMEDULTENTMES', type: 'varchar2', length: 1, nullable: true })
  compararbaseicmsmedultentmes?: string | null;

  @Column({ name: 'COMPARARPAUTACOMST', type: 'varchar2', length: 1, nullable: true })
  compararpautacomst?: string | null;

  @Column({ name: 'CONSIDERARCONTRIBICMSPART', type: 'varchar2', length: 1, nullable: true })
  considerarcontribicmspart?: string | null;

  @Column({ name: 'DESCICMSREDUZBASEICMS', type: 'varchar2', length: 1, nullable: true })
  descicmsreduzbaseicms?: string | null;

  @Column({ name: 'DESTACICMSSTANTERIOR', type: 'varchar2', length: 1, nullable: true })
  destacicmsstanterior?: string | null;

  @Column({ name: 'DESVINCULARFECPSTFUNCEPICMS', type: 'varchar2', length: 1, nullable: true })
  desvincularfecpstfuncepicms?: string | null;

  @Column({ name: 'DTALTERC5', type: 'timestamp', precision: 6, nullable: true })
  dtalterc5?: Date | null;

  @Column({ name: 'DTFIMVIGENCIA', type: 'date', nullable: true })
  dtfimvigencia?: Date | null;

  @Column({ name: 'DTINICIOVIGENCIA', type: 'date', nullable: true })
  dtiniciovigencia?: Date | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  dtmxsalter?: Date | null;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  dtultalter?: Date | null;

  @Column({ name: 'FATORAJUSTECUSTOCONT', type: 'number', precision: 8, scale: 4, nullable: true })
  fatorajustecustocont?: number | null;

  @Column({ name: 'FIGURAPARTILHA', type: 'varchar2', length: 1, nullable: true })
  figurapartilha?: string | null;

  @Column({ name: 'FORMULACMV', type: 'varchar2', length: 200, nullable: true })
  formulacmv?: string | null;

  @Column({ name: 'FORMULAFCP', type: 'varchar2', length: 200, nullable: true })
  formulafcp?: string | null;

  @Column({ name: 'FORMULAFECP', type: 'varchar2', length: 200, nullable: true })
  formulafecp?: string | null;

  @Column({ name: 'FORMULAFECPTRANSF', type: 'varchar2', length: 200, nullable: true })
  formulafecptransf?: string | null;

  @Column({ name: 'FORMULAFECPTRANSFVIRT', type: 'varchar2', length: 200, nullable: true })
  formulafecptransfvirt?: string | null;

  @Column({ name: 'FORMULAFUNCEPICMS', type: 'varchar2', length: 200, nullable: true })
  formulafuncepicms?: string | null;

  @Column({ name: 'FORMULAFUNCEPTRANSFRETIRA', type: 'varchar2', length: 200, nullable: true })
  formulafunceptransfretira?: string | null;

  @Column({ name: 'FORMULAFUNCEPTRANSFVIRT', type: 'varchar2', length: 200, nullable: true })
  formulafunceptransfvirt?: string | null;

  @Column({ name: 'FORMULAICMSEFETIVO', type: 'varchar2', length: 100, nullable: true })
  formulaicmsefetivo?: string | null;

  @Column({ name: 'FORMULAICMTAB', type: 'varchar2', length: 200, nullable: true })
  formulaicmtab?: string | null;

  @Column({ name: 'FORMULAIPI', type: 'varchar2', length: 200, nullable: true })
  formulaipi?: string | null;

  @Column({ name: 'FORMULAIPITRANSF', type: 'varchar2', length: 200, nullable: true })
  formulaipitransf?: string | null;

  @Column({ name: 'FORMULAIPITRANSFVIRT', type: 'varchar2', length: 200, nullable: true })
  formulaipitransfvirt?: string | null;

  @Column({ name: 'FORMULAPVENDA', type: 'varchar2', length: 200, nullable: true })
  formulapvenda?: string | null;

  @Column({ name: 'FORMULAPVENDATRANSF', type: 'varchar2', length: 200, nullable: true })
  formulapvendatransf?: string | null;

  @Column({ name: 'FORMULAPVENDATRANSFVIRT', type: 'varchar2', length: 200, nullable: true })
  formulapvendatransfvirt?: string | null;

  @Column({ name: 'FORMULAST', type: 'varchar2', length: 200, nullable: true })
  formulast?: string | null;

  @Column({ name: 'FORMULASTTRANSF', type: 'varchar2', length: 200, nullable: true })
  formulasttransf?: string | null;

  @Column({ name: 'FORMULASTTRANSFVIRT', type: 'varchar2', length: 200, nullable: true })
  formulasttransfvirt?: string | null;

  @Column({ name: 'FORUMAICMSEFETIVO', type: 'varchar2', length: 200, nullable: true })
  forumaicmsefetivo?: string | null;

  @Column({ name: 'GERACODFISCALENTDEVTRANSFVIR', type: 'varchar2', length: 1, nullable: true })
  geracodfiscalentdevtransfvir?: string | null;

  @Column({ name: 'GERACODFISCALENTTRANSFVIR', type: 'varchar2', length: 1, nullable: true })
  geracodfiscalenttransfvir?: string | null;

  @Column({ name: 'GERACODFISCALENTTRFFILRET', type: 'varchar2', length: 1, nullable: true })
  geracodfiscalenttrffilret?: string | null;

  @Column({ name: 'GERACODFISCALSAIDDEVTRANSFVIR', type: 'varchar2', length: 1, nullable: true })
  geracodfiscalsaiddevtransfvir?: string | null;

  @Column({ name: 'GERACODFISCALSAIDTRANSFVIR', type: 'varchar2', length: 1, nullable: true })
  geracodfiscalsaidtransfvir?: string | null;

  @Column({ name: 'GERACODFISCALSAIDTRFFILRET', type: 'varchar2', length: 1, nullable: true })
  geracodfiscalsaidtrffilret?: string | null;

  @Column({ name: 'GERACODFISCENTDEVTRFFILRET', type: 'varchar2', length: 1, nullable: true })
  geracodfiscentdevtrffilret?: string | null;

  @Column({ name: 'GERACODFISCSAIDDEVTRFFILRET', type: 'varchar2', length: 1, nullable: true })
  geracodfiscsaiddevtrffilret?: string | null;

  @Column({ name: 'GERAICMSLIVROFISCALTRANSFVIRT', type: 'varchar2', length: 2, nullable: true })
  geraicmslivrofiscaltransfvirt?: string | null;

  @Column({ name: 'GERARICMSLIVROFISCAL', type: 'varchar2', length: 1, nullable: true })
  geraricmslivrofiscal?: string | null;

  @Column({ name: 'GREGASUFRAMAST1', type: 'varchar2', length: 1, nullable: true })
  gregasuframast1?: string | null;

  @Column({ name: 'GRUPONFTRIBUT', type: 'number', precision: 1, scale: 0, nullable: true })
  gruponftribut?: number | null;

  @Column({ name: 'IDENTIFICARTRIB', type: 'varchar2', length: 200, nullable: true })
  identificartrib?: string | null;

  @Column({ name: 'INDICECOMPBASESTMG', type: 'number', precision: 18, scale: 6, nullable: true })
  indicecompbasestmg?: number | null;

  @Column({ name: 'INDICECOMPBASESTMT', type: 'number', precision: 18, scale: 6, nullable: true })
  indicecompbasestmt?: number | null;

  @Column({ name: 'INDICEST', type: 'number', precision: 8, scale: 4, nullable: true })
  indicest?: number | null;

  @Column({ name: 'ISENCAOICMSORGAOPUB', type: 'varchar2', length: 1, nullable: true })
  isencaoicmsorgaopub?: string | null;

  @Column({ name: 'ISENCAOSTORGAOPUB', type: 'varchar2', length: 1, nullable: true })
  isencaostorgaopub?: string | null;

  @Column({ name: 'ISENTAICMSBONIFIC', type: 'varchar2', length: 1, nullable: true })
  isentaicmsbonific?: string | null;

  @Column({ name: 'ISENTAICMSBONIFICINT', type: 'varchar2', length: 1, nullable: true })
  isentaicmsbonificint?: string | null;

  @Column({ name: 'ISENTAICMSPARTUFDESTORGAOPUB', type: 'varchar2', length: 1, nullable: true })
  isentaicmspartufdestorgaopub?: string | null;

  @Column({ name: 'ISENTAICMSSITTRIBUT041', type: 'varchar2', length: 1, nullable: true })
  isentaicmssittribut041?: string | null;

  @Column({ name: 'ISENTAICMSUFDEST', type: 'varchar2', length: 1, nullable: true })
  isentaicmsufdest?: string | null;

  @Column({ name: 'ISENTNUMEMPENHO', type: 'varchar2', length: 1, nullable: true })
  isentnumempenho?: string | null;

  @Column({ name: 'IVA', type: 'number', precision: 8, scale: 4, nullable: true })
  iva?: number | null;

  @Column({ name: 'IVAFONTE', type: 'number', precision: 8, scale: 4, nullable: true })
  ivafonte?: number | null;

  @Column({ name: 'IVAFONTESIMPLESNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  ivafontesimplesnac?: number | null;

  @Column({ name: 'IVATAB', type: 'number', precision: 8, scale: 4, nullable: true })
  ivatab?: number | null;

  @Column({ name: 'IVATRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  ivatransf?: number | null;

  @Column({ name: 'IVATRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  ivatransfvirt?: number | null;

  @Column({ name: 'IVA_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaMc?: number | null;

  @Column({ name: 'MEINAOCALCDIF', type: 'varchar2', length: 1, nullable: true })
  meinaocalcdif?: string | null;

  @Column({ name: 'MENSAGEM', type: 'varchar2', length: 40, nullable: true })
  mensagem?: string | null;

  @Column({ name: 'MENSAGEM2', type: 'varchar2', length: 200, nullable: true })
  mensagem2?: string | null;

  @Column({ name: 'MENSAGEMNRPA', type: 'varchar2', length: 100, nullable: true })
  mensagemnrpa?: string | null;

  @Column({ name: 'MOSTRARPVENDASEMIPI', type: 'varchar2', length: 1, nullable: true })
  mostrarpvendasemipi?: string | null;

  @Column({ name: 'MOSTRARPVENDASEMST', type: 'varchar2', length: 1, nullable: true })
  mostrarpvendasemst?: string | null;

  @Column({ name: 'NAOCALCULAFUNCEPAJUSTEESTOQUE', type: 'varchar2', length: 1, nullable: true })
  naocalculafuncepajusteestoque?: string | null;

  @Column({ name: 'NAOPERSISTEIVAPCMOV', type: 'varchar2', length: 1, nullable: true })
  naopersisteivapcmov?: string | null;

  @Column({ name: 'NUMSEQATU', type: 'number', nullable: true })
  numseqatu?: number | null;

  @Column({ name: 'OBS', type: 'varchar2', length: 100, nullable: true })
  obs?: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', length: 100, nullable: true })
  obs2?: string | null;

  @Column({ name: 'OBSISEORGAOPUB1', type: 'varchar2', length: 100, nullable: true })
  obsiseorgaopub1?: string | null;

  @Column({ name: 'OBSISEORGAOPUB2', type: 'varchar2', length: 100, nullable: true })
  obsiseorgaopub2?: string | null;

  @Column({ name: 'OBSPF', type: 'varchar2', length: 100, nullable: true })
  obspf?: string | null;

  @Column({ name: 'OBSPF2', type: 'varchar2', length: 100, nullable: true })
  obspf2?: string | null;

  @Column({ name: 'OBSSIMPLES', type: 'varchar2', length: 100, nullable: true })
  obssimples?: string | null;

  @Column({ name: 'OBSSUFRAMA', type: 'varchar2', length: 80, nullable: true })
  obssuframa?: string | null;

  @Column({ name: 'OBSTRANSF', type: 'varchar2', length: 100, nullable: true })
  obstransf?: string | null;

  @Column({ name: 'OBSTRIBUT_GNRE', type: 'varchar2', length: 80, nullable: true })
  obstributGnre?: string | null;

  @Column({ name: 'OBS_INFORMATIVO', type: 'varchar2', length: 2000, nullable: true })
  obsInformativo?: string | null;

  @Column({ name: 'PAGTONOMEDESTTRANSF', type: 'varchar2', length: 1, nullable: true })
  pagtonomedesttransf?: string | null;

  @Column({ name: 'PAGTONOMEDESTTRANSFTAB', type: 'varchar2', length: 1, nullable: true })
  pagtonomedesttransftab?: string | null;

  @Column({ name: 'PAGTONOMEDOCLIENTE', type: 'varchar2', length: 1, nullable: true })
  pagtonomedocliente?: string | null;

  @Column({ name: 'PAGTONOMEDOREMETENTE', type: 'varchar2', length: 1, nullable: true })
  pagtonomedoremetente?: string | null;

  @Column({ name: 'PAGTONOMEREMETTRANSF', type: 'varchar2', length: 1, nullable: true })
  pagtonomeremettransf?: string | null;

  @Column({ name: 'PAGTONOMEREMETTRANSFTAB', type: 'varchar2', length: 1, nullable: true })
  pagtonomeremettransftab?: string | null;

  @Column({ name: 'PAUTA', type: 'number', precision: 18, scale: 6, nullable: true })
  pauta?: number | null;

  @Column({ name: 'PAUTAFONTE', type: 'number', precision: 18, scale: 6, nullable: true })
  pautafonte?: number | null;

  @Column({ name: 'PAUTAFONTESIMPLESNAC', type: 'number', precision: 18, scale: 6, nullable: true })
  pautafontesimplesnac?: number | null;

  @Column({ name: 'PAUTATAB', type: 'number', precision: 18, scale: 6, nullable: true })
  pautatab?: number | null;

  @Column({ name: 'PAUTATRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  pautatransf?: number | null;

  @Column({ name: 'PAUTATRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  pautatransfvirt?: number | null;

  @Column({ name: 'PAUTA_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  pautaMc?: number | null;

  @Column({ name: 'PERACRESCIMOCUSTO', type: 'number', precision: 8, scale: 4, nullable: true })
  peracrescimocusto?: number | null;

  @Column({ name: 'PERACRESCIMOFUNCEP', type: 'number', precision: 8, scale: 4, nullable: true })
  peracrescimofuncep?: number | null;

  @Column({ name: 'PERACRESCIMONRPA', type: 'number', precision: 8, scale: 4, nullable: true })
  peracrescimonrpa?: number | null;

  @Column({ name: 'PERACRESCIMOPF', type: 'number', precision: 6, scale: 2, nullable: true })
  peracrescimopf?: number | null;

  @Column({ name: 'PERACRESCISMOPF', type: 'number', precision: 8, scale: 4, nullable: true })
  peracrescismopf?: number | null;

  @Column({ name: 'PERACRESCISMOSIMPNAC', type: 'number', precision: 18, scale: 6, nullable: true })
  peracrescismosimpnac?: number | null;

  @Column({ name: 'PERBASEREDNRPA', type: 'number', precision: 8, scale: 4, nullable: true })
  perbaserednrpa?: number | null;

  @Column({ name: 'PERBASEREDSIMPLESNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  perbaseredsimplesnac?: number | null;

  @Column({ name: 'PERBASEREDTRANSFENT', type: 'number', precision: 8, scale: 4, nullable: true })
  perbaseredtransfent?: number | null;

  @Column({ name: 'PERBASEREDTRANSFVIRTENT', type: 'number', precision: 8, scale: 4, nullable: true })
  perbaseredtransfvirtent?: number | null;

  @Column({ name: 'PERCACREPFVLACIMAPERMITIDO', type: 'number', precision: 6, scale: 2, nullable: true })
  percacrepfvlacimapermitido?: number | null;

  @Column({ name: 'PERCACRESCBASEPFEST', type: 'number', precision: 8, scale: 4, nullable: true })
  percacrescbasepfest?: number | null;

  @Column({ name: 'PERCACRESCBASEPFINT', type: 'number', precision: 8, scale: 4, nullable: true })
  percacrescbasepfint?: number | null;

  @Column({ name: 'PERCACRESCBENFFIS', type: 'number', precision: 18, scale: 6, nullable: true })
  percacrescbenffis?: number | null;

  @Column({ name: 'PERCACRESICMSPF_PI', type: 'number', precision: 8, scale: 4, nullable: true })
  percacresicmspfPi?: number | null;

  @Column({ name: 'PERCAGREGADORST', type: 'number', precision: 8, scale: 4, nullable: true })
  percagregadorst?: number | null;

  @Column({ name: 'PERCBASECALCREPASSE', type: 'number', precision: 18, scale: 6, nullable: true })
  percbasecalcrepasse?: number | null;

  @Column({ name: 'PERCBASERED', type: 'number', precision: 8, scale: 4, nullable: true })
  percbasered?: number | null;

  @Column({ name: 'PERCBASEREDADICIONAL', type: 'number', precision: 18, scale: 6, nullable: true })
  percbaseredadicional?: number | null;

  @Column({ name: 'PERCBASEREDADICIONALINTER', type: 'number', precision: 18, scale: 6, nullable: true })
  percbaseredadicionalinter?: number | null;

  @Column({ name: 'PERCBASEREDCONSUMIDOR', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredconsumidor?: number | null;

  @Column({ name: 'PERCBASEREDST', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredst?: number | null;

  @Column({ name: 'PERCBASEREDST2TRANSF', type: 'number', precision: 18, scale: 6, nullable: true })
  percbaseredst2transf?: number | null;

  @Column({ name: 'PERCBASEREDST2TRANSFVIRT', type: 'number', precision: 18, scale: 6, nullable: true })
  percbaseredst2transfvirt?: number | null;

  @Column({ name: 'PERCBASEREDSTFONTE', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredstfonte?: number | null;

  @Column({ name: 'PERCBASEREDSTFONTESIMPLESNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredstfontesimplesnac?: number | null;

  @Column({ name: 'PERCBASEREDSTTRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredsttransf?: number | null;

  @Column({ name: 'PERCBASEREDSTTRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredsttransfvirt?: number | null;

  @Column({ name: 'PERCBASEREDST_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredstMc?: number | null;

  @Column({ name: 'PERCBASEREDTRANFSAID', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredtranfsaid?: number | null;

  @Column({ name: 'PERCBASEREDTRANFVIRTSAID', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredtranfvirtsaid?: number | null;

  @Column({ name: 'PERCBASERED_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredMc?: number | null;

  @Column({ name: 'PERCBASESTRJ', type: 'number', precision: 8, scale: 4, nullable: true })
  percbasestrj?: number | null;

  @Column({ name: 'PERCCOFINSRETORGPUB', type: 'number', precision: 18, scale: 6, nullable: true })
  perccofinsretorgpub?: number | null;

  @Column({ name: 'PERCCOFINSRETORGPUBEST', type: 'number', precision: 18, scale: 6, nullable: true })
  perccofinsretorgpubest?: number | null;

  @Column({ name: 'PERCCOFINSRETORGPUBMUN', type: 'number', precision: 18, scale: 6, nullable: true })
  perccofinsretorgpubmun?: number | null;

  @Column({ name: 'PERCCSLLRETORGPUB', type: 'number', precision: 18, scale: 6, nullable: true })
  perccsllretorgpub?: number | null;

  @Column({ name: 'PERCCSLLRETORGPUBEST', type: 'number', precision: 18, scale: 6, nullable: true })
  perccsllretorgpubest?: number | null;

  @Column({ name: 'PERCCSLLRETORGPUBMUN', type: 'number', precision: 18, scale: 6, nullable: true })
  perccsllretorgpubmun?: number | null;

  @Column({ name: 'PERCDESCCOFINS', type: 'number', precision: 12, scale: 4, nullable: true })
  percdesccofins?: number | null;

  @Column({ name: 'PERCDESCPIS', type: 'number', precision: 12, scale: 4, nullable: true })
  percdescpis?: number | null;

  @Column({ name: 'PERCDIFALIQUOTAS', type: 'number', precision: 8, scale: 4, nullable: true })
  percdifaliquotas?: number | null;

  @Column({ name: 'PERCDIFALIQUOTASTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  percdifaliquotastab?: number | null;

  @Column({ name: 'PERCICMSCOMPLEMENTAR', type: 'number', precision: 8, scale: 4, nullable: true })
  percicmscomplementar?: number | null;

  @Column({ name: 'PERCIRPJRETORGPUB', type: 'number', precision: 18, scale: 6, nullable: true })
  percirpjretorgpub?: number | null;

  @Column({ name: 'PERCIRPJRETORGPUBEST', type: 'number', precision: 18, scale: 6, nullable: true })
  percirpjretorgpubest?: number | null;

  @Column({ name: 'PERCIRPJRETORGPUBMUN', type: 'number', precision: 18, scale: 6, nullable: true })
  percirpjretorgpubmun?: number | null;

  @Column({ name: 'PERCIVAMEX', type: 'number', precision: 8, scale: 4, nullable: true })
  percivamex?: number | null;

  @Column({ name: 'PERCIVAPAUTA', type: 'number', precision: 8, scale: 4, nullable: true })
  percivapauta?: number | null;

  @Column({ name: 'PERCPISRETORGPUB', type: 'number', precision: 18, scale: 6, nullable: true })
  percpisretorgpub?: number | null;

  @Column({ name: 'PERCPISRETORGPUBEST', type: 'number', precision: 18, scale: 6, nullable: true })
  percpisretorgpubest?: number | null;

  @Column({ name: 'PERCPISRETORGPUBMUN', type: 'number', precision: 18, scale: 6, nullable: true })
  percpisretorgpubmun?: number | null;

  @Column({ name: 'PERCREDBCSTCLISN', type: 'number', precision: 18, scale: 6, nullable: true })
  percredbcstclisn?: number | null;

  @Column({ name: 'PERCREDICMSEFETIVO', type: 'number', precision: 18, scale: 6, nullable: true })
  percredicmsefetivo?: number | null;

  @Column({ name: 'PERCREDPVENDASIMPLESNAC', type: 'number', precision: 8, scale: 4, nullable: true })
  percredpvendasimplesnac?: number | null;

  @Column({ name: 'PERCTRIBUTOS', type: 'number', precision: 4, scale: 2, nullable: true })
  perctributos?: number | null;

  @Column({ name: 'PERDESCCUSTO', type: 'number', precision: 8, scale: 4, nullable: true })
  perdesccusto?: number | null;

  @Column({ name: 'PERDESCCUSTOTRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  perdesccustotransf?: number | null;

  @Column({ name: 'PERDESCICMISENCAO', type: 'number', precision: 8, scale: 4, nullable: true })
  perdescicmisencao?: number | null;

  @Column({ name: 'PERDESCPISSUFRAMA', type: 'number', precision: 8, scale: 4, nullable: true })
  perdescpissuframa?: number | null;

  @Column({ name: 'PERDESCREPASSE', type: 'number', precision: 8, scale: 4, nullable: true })
  perdescrepasse?: number | null;

  @Column({ name: 'PERDESCSUFRAMA', type: 'number', precision: 8, scale: 4, nullable: true })
  perdescsuframa?: number | null;

  @Column({ name: 'PERDESTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  perdestab?: number | null;

  @Column({ name: 'PERDIFEREIMENTOICMS', type: 'number', precision: 8, scale: 4, nullable: true })
  perdifereimentoicms?: number | null;

  @Column({ name: 'PERDIFEREIMENTOICMSTV9', type: 'number', precision: 8, scale: 4, nullable: true })
  perdifereimentoicmstv9?: number | null;

  @Column({ name: 'PERDIFEREIMENTOICMS_MC', type: 'number', precision: 8, scale: 4, nullable: true })
  perdifereimentoicmsMc?: number | null;

  @Column({ name: 'PERDIFERENCIALTRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  perdiferencialtransf?: number | null;

  @Column({ name: 'PERDIFERENCIALTRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  perdiferencialtransfvirt?: number | null;

  @Column({ name: 'PERDIFERIMENTOCMSTRANSF', type: 'number', precision: 8, scale: 4, nullable: true })
  perdiferimentocmstransf?: number | null;

  @Column({ name: 'PERDIFERIMENTOCMSTRANSFVIRT', type: 'number', precision: 8, scale: 4, nullable: true })
  perdiferimentocmstransfvirt?: number | null;

  @Column({ name: 'PERICMTRANSVIRTENT', type: 'number', precision: 18, scale: 6, nullable: true })
  pericmtransvirtent?: number | null;

  @Column({ name: 'PERISS', type: 'number', precision: 8, scale: 4, nullable: true })
  periss?: number | null;

  @Column({ name: 'PERPAUTAICMS', type: 'number', precision: 18, scale: 6, nullable: true })
  perpautaicms?: number | null;

  @Column({ name: 'PERPAUTAICMSINTER', type: 'number', precision: 18, scale: 6, nullable: true })
  perpautaicmsinter?: number | null;

  @Column({ name: 'PERVLSTMAIORPERCMINPMC', type: 'number', precision: 8, scale: 2, nullable: true })
  pervlstmaiorpercminpmc?: number | null;

  @Column({ name: 'PRODRURALCALCDIFER', type: 'varchar2', length: 1, nullable: true })
  prodruralcalcdifer?: string | null;

  @Column({ name: 'PRODTRANSFTRIBRJ', type: 'varchar2', length: 1, nullable: true })
  prodtransftribrj?: string | null;

  @Column({ name: 'REDUZBASEICMDECRETOMARANHAO', type: 'varchar2', length: 1, nullable: true })
  reduzbaseicmdecretomaranhao?: string | null;

  @Column({ name: 'REPLICADESONERACAOCOMERCIAL', type: 'varchar2', length: 1, nullable: true })
  replicadesoneracaocomercial?: string | null;

  @Column({ name: 'RIOLOGISENTOST', type: 'varchar2', length: 1, nullable: true })
  riologisentost?: string | null;

  @Column({ name: 'SITTRIBENVIODEPFEC', type: 'varchar2', length: 3, nullable: true })
  sittribenviodepfec?: string | null;

  @Column({ name: 'SITTRIBRETORNODEPFEC', type: 'varchar2', length: 3, nullable: true })
  sittribretornodepfec?: string | null;

  @Column({ name: 'SITTRIBSTFONTEPF', type: 'varchar2', length: 3, nullable: true })
  sittribstfontepf?: string | null;

  @Column({ name: 'SITTRIBSTFONTEPJ', type: 'varchar2', length: 3, nullable: true })
  sittribstfontepj?: string | null;

  @Column({ name: 'SITTRIBUT', type: 'varchar2', length: 3, nullable: true })
  sittribut?: string | null;

  @Column({ name: 'SITTRIBUTBNFTV1', type: 'varchar2', length: 3, nullable: true })
  sittributbnftv1?: string | null;

  @Column({ name: 'SITTRIBUTBNFTV14', type: 'varchar2', length: 3, nullable: true })
  sittributbnftv14?: string | null;

  @Column({ name: 'SITTRIBUTBONIFIC', type: 'varchar2', length: 3, nullable: true })
  sittributbonific?: string | null;

  @Column({ name: 'SITTRIBUTBONIFICINT', type: 'varchar2', length: 3, nullable: true })
  sittributbonificint?: string | null;

  @Column({ name: 'SITTRIBUTCONSFINAL', type: 'varchar2', length: 3, nullable: true })
  sittributconsfinal?: string | null;

  @Column({ name: 'SITTRIBUTDEVSIMBOLCONSIG', type: 'varchar2', length: 3, nullable: true })
  sittributdevsimbolconsig?: string | null;

  @Column({ name: 'SITTRIBUTECF', type: 'varchar2', length: 3, nullable: true })
  sittributecf?: string | null;

  @Column({ name: 'SITTRIBUTISENTOST', type: 'varchar2', length: 3, nullable: true })
  sittributisentost?: string | null;

  @Column({ name: 'SITTRIBUTISENTOSTRAMO', type: 'varchar2', length: 3, nullable: true })
  sittributisentostramo?: string | null;

  @Column({ name: 'SITTRIBUTISEORGAOPUB', type: 'varchar2', length: 3, nullable: true })
  sittributiseorgaopub?: string | null;

  @Column({ name: 'SITTRIBUTMEI', type: 'varchar2', length: 3, nullable: true })
  sittributmei?: string | null;

  @Column({ name: 'SITTRIBUTMERCCONSIG', type: 'varchar2', length: 3, nullable: true })
  sittributmercconsig?: string | null;

  @Column({ name: 'SITTRIBUTNRPA', type: 'varchar2', length: 3, nullable: true })
  sittributnrpa?: string | null;

  @Column({ name: 'SITTRIBUTOPERLOGISTICOENTRADA', type: 'varchar2', length: 3, nullable: true })
  sittributoperlogisticoentrada?: string | null;

  @Column({ name: 'SITTRIBUTOPERLOGISTICOSAIDA', type: 'varchar2', length: 3, nullable: true })
  sittributoperlogisticosaida?: string | null;

  @Column({ name: 'SITTRIBUTORGAOPUB', type: 'varchar2', length: 3, nullable: true })
  sittributorgaopub?: string | null;

  @Column({ name: 'SITTRIBUTPAUTAICMS', type: 'varchar2', length: 3, nullable: true })
  sittributpautaicms?: string | null;

  @Column({ name: 'SITTRIBUTPAUTAICMSPF', type: 'varchar2', length: 3, nullable: true })
  sittributpautaicmspf?: string | null;

  @Column({ name: 'SITTRIBUTPF', type: 'varchar2', length: 3, nullable: true })
  sittributpf?: string | null;

  @Column({ name: 'SITTRIBUTPRIORIT', type: 'varchar2', length: 3, nullable: true })
  sittributpriorit?: string | null;

  @Column({ name: 'SITTRIBUTPRODRURALCALCDIFER', type: 'varchar2', length: 3, nullable: true })
  sittributprodruralcalcdifer?: string | null;

  @Column({ name: 'SITTRIBUTSEMIMPOSTO_MC', type: 'varchar2', length: 3, nullable: true })
  sittributsemimpostoMc?: string | null;

  @Column({ name: 'SITTRIBUTSIMPLESNAC', type: 'varchar2', length: 3, nullable: true })
  sittributsimplesnac?: string | null;

  @Column({ name: 'SITTRIBUTSIMPNACDEVFILNF', type: 'varchar2', length: 3, nullable: true })
  sittributsimpnacdevfilnf?: string | null;

  @Column({ name: 'SITTRIBUTSRVASILHAME', type: 'varchar2', length: 3, nullable: true })
  sittributsrvasilhame?: string | null;

  @Column({ name: 'SITTRIBUTSUFRAMA', type: 'varchar2', length: 3, nullable: true })
  sittributsuframa?: string | null;

  @Column({ name: 'SITTRIBUTTRANSF', type: 'varchar2', length: 3, nullable: true })
  sittributtransf?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFENT', type: 'varchar2', length: 3, nullable: true })
  sittributtransfent?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFVIROPENT', type: 'varchar2', length: 3, nullable: true })
  sittributtransfviropent?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFVIROPSAI', type: 'varchar2', length: 3, nullable: true })
  sittributtransfviropsai?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFVIRREGESPENT', type: 'varchar2', length: 3, nullable: true })
  sittributtransfvirregespent?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFVIRREGESPSAI', type: 'varchar2', length: 3, nullable: true })
  sittributtransfvirregespsai?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFVIRSNENT', type: 'varchar2', length: 3, nullable: true })
  sittributtransfvirsnent?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFVIRSNSAI', type: 'varchar2', length: 3, nullable: true })
  sittributtransfvirsnsai?: string | null;

  @Column({ name: 'SITTRIBUTTRANSFVIRT', type: 'varchar2', length: 3, nullable: true })
  sittributtransfvirt?: string | null;

  @Column({ name: 'SITTRIBUTTRANSVFVIRTENT', type: 'varchar2', length: 3, nullable: true })
  sittributtransvfvirtent?: string | null;

  @Column({ name: 'SITTRIBUTTRIANG', type: 'varchar2', length: 3, nullable: true })
  sittributtriang?: string | null;

  @Column({ name: 'SITTRIBUTTV1CONSIG', type: 'varchar2', length: 3, nullable: true })
  sittributtv1consig?: string | null;

  @Column({ name: 'SITTRIBUTTV7', type: 'varchar2', length: 3, nullable: true })
  sittributtv7?: string | null;

  @Column({ name: 'SITTRIBUTTV7ORDEM', type: 'varchar2', length: 3, nullable: true })
  sittributtv7ordem?: string | null;

  @Column({ name: 'SITTRIBUTTV8', type: 'varchar2', length: 3, nullable: true })
  sittributtv8?: string | null;

  @Column({ name: 'SITTRIBUTTV8ORDEM', type: 'varchar2', length: 3, nullable: true })
  sittributtv8ordem?: string | null;

  @Column({ name: 'SITTRIBUTTV9', type: 'varchar2', length: 3, nullable: true })
  sittributtv9?: string | null;

  @Column({ name: 'SITTRIBUTVENDAEXPINDIRETA', type: 'varchar2', length: 3, nullable: true })
  sittributvendaexpindireta?: string | null;

  @Column({ name: 'SITTRIBUT_MC', type: 'varchar2', length: 3, nullable: true })
  sittributMc?: string | null;

  @Column({ name: 'SNNAOCALCDIF', type: 'varchar2', length: 1, nullable: true })
  snnaocalcdif?: string | null;

  @Column({ name: 'SOMARVALORDIFBCICMS', type: 'varchar2', length: 1, nullable: true })
  somarvalordifbcicms?: string | null;

  @Column({ name: 'TIPOAPLICREPASSETRIBUT', type: 'varchar2', length: 2, nullable: true })
  tipoaplicrepassetribut?: string | null;

  @Column({ name: 'TIPOCALCULOGNRE', type: 'varchar2', length: 1, nullable: true })
  tipocalculognre?: string | null;

  @Column({ name: 'TIPOCALCULOGNRETAB', type: 'varchar2', length: 1, nullable: true })
  tipocalculognretab?: string | null;

  @Column({ name: 'TIPOCALCULOGNRETRANSF', type: 'varchar2', length: 1, nullable: true })
  tipocalculognretransf?: string | null;

  @Column({ name: 'TIPOCALCULOGNRETRANSFTAB', type: 'varchar2', length: 1, nullable: true })
  tipocalculognretransftab?: string | null;

  @Column({ name: 'TV9ISENTOST', type: 'varchar2', length: 1, nullable: true })
  tv9isentost?: string | null;

  @Column({ name: 'USAALIQDESTPART', type: 'varchar2', length: 1, nullable: true })
  usaaliqdestpart?: string | null;

  @Column({ name: 'USAALIQICMSSIMPLESNACIONAL', type: 'varchar2', length: 1, nullable: true })
  usaaliqicmssimplesnacional?: string | null;

  @Column({ name: 'USABASEICMSREDUZIDA', type: 'varchar2', length: 1, nullable: true })
  usabaseicmsreduzida?: string | null;

  @Column({ name: 'USACFOPBNFPARABRINDE', type: 'varchar2', length: 1, nullable: true })
  usacfopbnfparabrinde?: string | null;

  @Column({ name: 'USAFORMULAPVENDAFILRET', type: 'varchar2', length: 1, nullable: true })
  usaformulapvendafilret?: string | null;

  @Column({ name: 'USAISENCAOICMSVP', type: 'varchar2', length: 1, nullable: true })
  usaisencaoicmsvp?: string | null;

  @Column({ name: 'USAPAUTASEMIVA', type: 'varchar2', length: 1, nullable: true })
  usapautasemiva?: string | null;

  @Column({ name: 'USAPERCBASEREDASSOC', type: 'varchar2', length: 1, nullable: true })
  usapercbaseredassoc?: string | null;

  @Column({ name: 'USAPERCBASEREDDIST', type: 'varchar2', length: 1, nullable: true })
  usapercbasereddist?: string | null;

  @Column({ name: 'USAPERCBASEREDFARMA', type: 'varchar2', length: 1, nullable: true })
  usapercbaseredfarma?: string | null;

  @Column({ name: 'USAPERCBASEREDHOSP', type: 'varchar2', length: 1, nullable: true })
  usapercbaseredhosp?: string | null;

  @Column({ name: 'USAPERCBASEREDMEDICO', type: 'varchar2', length: 1, nullable: true })
  usapercbaseredmedico?: string | null;

  @Column({ name: 'USAPERCBASEREDOPE', type: 'varchar2', length: 1, nullable: true })
  usapercbaseredope?: string | null;

  @Column({ name: 'USAPERCBASEREDOPF', type: 'varchar2', length: 1, nullable: true })
  usapercbaseredopf?: string | null;

  @Column({ name: 'USAPERCBASEREDOPM', type: 'varchar2', length: 1, nullable: true })
  usapercbaseredopm?: string | null;

  @Column({ name: 'USAPMCBASEST', type: 'varchar2', length: 1, nullable: true })
  usapmcbasest?: string | null;

  @Column({ name: 'USAREDBASEICMSFONTEST', type: 'varchar2', length: 1, nullable: true })
  usaredbaseicmsfontest?: string | null;

  @Column({ name: 'USAREGIMEESPISENREDICMS', type: 'varchar2', length: 1, nullable: true })
  usaregimeespisenredicms?: string | null;

  @Column({ name: 'USARMEDULTENTBASICMSNFSR', type: 'varchar2', length: 1, nullable: true })
  usarmedultentbasicmsnfsr?: string | null;

  @Column({ name: 'USAVALORSTFONTE', type: 'varchar2', length: 1, nullable: true })
  usavalorstfonte?: string | null;

  @Column({ name: 'USAVALORULTENTBASEICMS', type: 'varchar2', length: 1, nullable: true })
  usavalorultentbaseicms?: string | null;

  @Column({ name: 'USAVALORULTENTBASEICMSFONTE', type: 'varchar2', length: 1, nullable: true })
  usavalorultentbaseicmsfonte?: string | null;

  @Column({ name: 'USAVALORULTENTBASEST', type: 'varchar2', length: 1, nullable: true })
  usavalorultentbasest?: string | null;

  @Column({ name: 'USAVALORULTENTBASEST2', type: 'varchar2', length: 1, nullable: true })
  usavalorultentbasest2?: string | null;

  @Column({ name: 'USAVALORULTENTBASESTFONTE', type: 'varchar2', length: 1, nullable: true })
  usavalorultentbasestfonte?: string | null;

  @Column({ name: 'USAVLSTMAIORPERCMINPMC', type: 'varchar2', length: 1, nullable: true })
  usavlstmaiorpercminpmc?: string | null;

  @Column({ name: 'USAVLULTENTMEDIOBASEST', type: 'varchar2', length: 1, nullable: true })
  usavlultentmediobasest?: string | null;

  @Column({ name: 'UTILIZAICMTABFLEX', type: 'varchar2', length: 1, nullable: true })
  utilizaicmtabflex?: string | null;

  @Column({ name: 'UTILIZAMOTORCALCULO', type: 'varchar2', length: 2, nullable: true })
  utilizamotorcalculo?: string | null;

  @Column({ name: 'UTILIZANATOPSRTV20', type: 'varchar2', length: 1, nullable: true })
  utilizanatopsrtv20?: string | null;

  @Column({ name: 'UTILIZAPARCADICFECP', type: 'varchar2', length: 1, nullable: true })
  utilizaparcadicfecp?: string | null;

  @Column({ name: 'UTILIZAPERCBASEREDPF', type: 'varchar2', length: 1, nullable: true })
  utilizapercbaseredpf?: string | null;

  @Column({ name: 'UTILIZAPERCBASEREDVENCONSIGN', type: 'varchar2', length: 1, nullable: true })
  utilizapercbaseredvenconsign?: string | null;

  @Column({ name: 'UTILIZARCUSTOCONTBASEST', type: 'varchar2', length: 1, nullable: true })
  utilizarcustocontbasest?: string | null;

  @Column({ name: 'UTILIZARSTFONTEPRECIFIC', type: 'varchar2', length: 1, nullable: true })
  utilizarstfonteprecific?: string | null;

  @Column({ name: 'VLPAUTAICMSEST', type: 'number', precision: 8, scale: 4, nullable: true })
  vlpautaicmsest?: number | null;

  @Column({ name: 'VLPAUTAICMSINTEREST', type: 'number', precision: 8, scale: 4, nullable: true })
  vlpautaicmsinterest?: number | null;

  @Column({ name: 'VLPAUTASEMIVA', type: 'number', precision: 8, scale: 4, nullable: true })
  vlpautasemiva?: number | null;

  @Column({ name: 'ZERARBASEICMSORGPUBSUFRAMA', type: 'varchar2', length: 1, nullable: true })
  zerarbaseicmsorgpubsuframa?: string | null;

  @Column({ name: 'ZERARPERCBASEREDSTFONTEDANFE', type: 'varchar2', length: 1, nullable: true })
  zerarpercbaseredstfontedanfe?: string | null;
}
