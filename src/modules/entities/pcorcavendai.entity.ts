import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCORCAVENDAI' })
export class PcorcavendaiEntity {
  @Column({ name: 'ADREMICMSRET', type: 'number', precision: 18, scale: 6, nullable: true })
  realIcmsRetAmount: number | null;

  @Column({ name: 'ALIQCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsRate: number | null;

  @Column({ name: 'ALIQFCP', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpRate: number | null;

  @Column({ name: 'ALIQIBS', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsRate: number | null;

  @Column({ name: 'ALIQICMS1', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate1: number | null;

  @Column({ name: 'ALIQICMS2', type: 'number', precision: 8, scale: 4, nullable: true })
  icmsRate2: number | null;

  @Column({ name: 'ALIQICMSFECP', type: 'number', precision: 12, scale: 4, nullable: true })
  icmsFecpRate: number | null;

  @Column({ name: 'ALIQINTERNADEST', type: 'number', precision: 18, scale: 6, nullable: true })
  destInternalRate: number | null;

  @Column({ name: 'ALIQINTERORIGPART', type: 'number', precision: 18, scale: 6, nullable: true })
  origPartInternalRate: number | null;

  @Column({ name: 'ALIQIS', type: 'number', precision: 23, scale: 10, nullable: true })
  isRate: number | null;

  @Column({ name: 'ALTERNATIVO', type: 'varchar2', length: 10, nullable: true })
  alternative: string | null;

  @Column({ name: 'AMBIENTE', type: 'varchar2', length: 50, nullable: true })
  environment: string | null;

  @Column({ name: 'BAIXADO', type: 'varchar2', length: 1, nullable: true })
  lowered: string | null;

  @Column({ name: 'BAIXAQTFRENTELOJA', type: 'varchar2', length: 1, nullable: true })
  lowersQtyFrontStore: string | null;

  @Column({ name: 'BASECBS', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsBase: number | null;

  @Column({ name: 'BASEDIFALIQUOTAS', type: 'number', precision: 18, scale: 6, nullable: true })
  diffRateBase: number | null;

  @Column({ name: 'BASEIBS', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsBase: number | null;

  @Column({ name: 'BASEICST', type: 'number', precision: 18, scale: 6, nullable: true })
  baseIcst: number | null;

  @Column({ name: 'BASEIS', type: 'number', precision: 23, scale: 10, nullable: true })
  isBase: number | null;

  @Column({ name: 'BCSTRETANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  priorStRetBase: number | null;

  @Column({ name: 'BONIFIC', type: 'varchar2', length: 1, nullable: true })
  bonus: string | null;

  @Column({ name: 'BRINDE', type: 'varchar2', length: 1, nullable: true })
  gift: string | null;

  @Column({ name: 'CHAVEPRINCIPAL', type: 'varchar2', length: 40, nullable: true })
  mainKey: string | null;

  @Column({ name: 'CODAUXILIAR', type: 'number', precision: 20, scale: 0, nullable: true })
  auxiliaryCode: number | null;

  @Column({ name: 'CODBASE', type: 'varchar2', length: 40, nullable: true })
  baseCode: string | null;

  @Column({ name: 'CODCBS', type: 'number', precision: 10, scale: 0, nullable: true })
  cbsCode: number | null;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  customerCode: number | null;

  @Column({ name: 'CODCOMBO', type: 'number', precision: 6, scale: 0, nullable: true })
  comboCode: number | null;

  @Column({ name: 'CODCONTRATO', type: 'number', precision: 6, scale: 0, nullable: true })
  contractCode: number | null;

  @Column({ name: 'CODDEPOSITO', type: 'number', precision: 10, scale: 0, nullable: true })
  depositCode: number | null;

  @Column({ name: 'CODDESCONTO', type: 'number', precision: 8, scale: 0, nullable: true })
  discountCode: number | null;

  @Column({ name: 'CODDESCONTOSIMULADOR', type: 'number', precision: 8, scale: 0, nullable: true })
  simulatorDiscountCode: number | null;

  @Column({ name: 'CODECF', type: 'varchar2', length: 6, nullable: true })
  ecfCode: string | null;

  @Column({ name: 'CODEMITENTEITEMPEDIDO', type: 'number', precision: 8, scale: 0, nullable: true })
  orderItemIssuerCode: number | null;

  @Column({ name: 'CODFIGVENDATRIANGULAR', type: 'number', precision: 4, scale: 0, nullable: true })
  triangularSaleFigCode: number | null;

  @Column({ name: 'CODFILIALRETIRA', type: 'varchar2', length: 2, nullable: true })
  pickupBranchCode: string | null;

  @Column({ name: 'CODFISCAL', type: 'number', precision: 8, scale: 0, nullable: true })
  fiscalCode: number | null;

  @Column({ name: 'CODFORMULA', type: 'varchar2', length: 20, nullable: true })
  formulaCode: string | null;

  @Column({ name: 'CODFUNCENTREGAMESA', type: 'number', precision: 8, scale: 0, nullable: true })
  tableDeliveryFunctionCode: number | null;

  @Column({ name: 'CODIBS', type: 'number', precision: 10, scale: 0, nullable: true })
  ibsCode: number | null;

  @Column({ name: 'CODICMTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  icmTableCode: number | null;

  @Column({ name: 'CODIGOINTEGRACAOWMS', type: 'varchar2', length: 15, nullable: true })
  wmsIntegrationCode: string | null;

  @Column({ name: 'CODIMP', type: 'number', precision: 10, scale: 0, nullable: true })
  impCode: number | null;

  @Column({ name: 'CODIMPSERVIMP', type: 'number', precision: 10, scale: 0, nullable: true })
  serviceImpCode: number | null;

  @Column({ name: 'CODINDICEMULTIPLICADOR', type: 'number', precision: 6, scale: 0, nullable: true })
  multiplierIndexCode: number | null;

  @Column({ name: 'CODIS', type: 'number', precision: 10, scale: 0, nullable: true })
  isCode: number | null;

  @Column({ name: 'CODMAQUINA', type: 'number', precision: 4, scale: 0, nullable: true })
  machineCode: number | null;

  @Column({ name: 'CODMOEDAESTRAGEIRA', type: 'number', precision: 6, scale: 0, nullable: true })
  foreignCurrencyCode: number | null;

  @Column({ name: 'CODMOTIVONAOATENDPROD', type: 'number', precision: 3, scale: 0, nullable: true })
  unmetProductReasonCode: number | null;

  @Column({ name: 'CODOFERTAORIG', type: 'number', precision: 6, scale: 0, nullable: true })
  codofertaorig: number | null;

  @Column({ name: 'CODPRECOFIXO', type: 'number', precision: 18, scale: 6, nullable: true })
  codprecofixo: number | null;

  @PrimaryColumn({ name: 'CODPROD', type: 'number', precision: 6, scale: 0, nullable: false })
  productCode: number;

  @Column({ name: 'CODPRODCESTA', type: 'number', precision: 6, scale: 0, nullable: true })
  codprodcesta: number | null;

  @Column({ name: 'CODPRODTINTA', type: 'varchar2', length: 40, nullable: true })
  codprodtinta: string | null;

  @Column({ name: 'CODPROMOCAO', type: 'varchar2', length: 10, nullable: true })
  codpromocao: string | null;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', precision: 9, scale: 0, nullable: true })
  codpromocaomed: number | null;

  @Column({ name: 'CODST', type: 'number', precision: 4, scale: 0, nullable: true })
  stCode: number | null;

  @Column({ name: 'CODUSUR', type: 'number', precision: 4, scale: 0, nullable: true })
  userCode: number | null;

  @Column({ name: 'COMPLEMENTO', type: 'varchar2', length: 40, nullable: true })
  complemento: string | null;

  @Column({ name: 'CUSTOFINEST', type: 'number', precision: 18, scale: 6, nullable: true })
  custofinest: number | null;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  date: Date | null;

  @Column({ name: 'DESCONSIDERARDESCATACADO', type: 'varchar2', length: 1, nullable: true })
  desconsiderardescatacado: string | null;

  @Column({ name: 'DESCRICAOPAF', type: 'varchar2', length: 200, nullable: true })
  descricaopaf: string | null;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  dtentrega: Date | null;

  @Column({ name: 'DTENTREGAMESA', type: 'date', nullable: true })
  dtentregamesa: Date | null;

  @Column({ name: 'DTENVIOSERVCARGA', type: 'date', nullable: true })
  dtenvioservcarga: Date | null;

  @Column({ name: 'DTEXPORTACAO', type: 'date', nullable: true })
  dtexportacao: Date | null;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  dtultalter: Date | null;

  @Column({ name: 'EANCODPROD', type: 'number', precision: 14, scale: 0, nullable: true })
  eancodprod: number | null;

  @Column({ name: 'ESCANIADO', type: 'number', precision: 4, scale: 0, nullable: true })
  escaniado: number | null;

  @Column({ name: 'EXPORTADO', type: 'varchar2', length: 1, nullable: true })
  exportado: string | null;

  @Column({ name: 'FATORPRECO', type: 'number', precision: 20, scale: 8, nullable: true })
  fatorpreco: number | null;

  @Column({ name: 'FORMANEGOCIACAO', type: 'varchar2', length: 1, nullable: true })
  formanegociacao: string | null;

  @Column({ name: 'GERAGNRE_CNPJCLIENTE', type: 'varchar2', length: 1, nullable: true })
  geragnreCnpjcliente: string | null;

  @Column({ name: 'GRUPOFATURAMENTO', type: 'varchar2', length: 1, nullable: true })
  grupofaturamento: string | null;

  @Column({ name: 'IMPRESSORESTAURANTE', type: 'varchar2', length: 1, nullable: true })
  impressorestaurante: string | null;

  @Column({ name: 'IMPRIMERESTAURANTE', type: 'varchar2', length: 1, nullable: true })
  imprimerestaurante: string | null;

  @Column({ name: 'IVA', type: 'number', precision: 8, scale: 4, nullable: true })
  iva: number | null;

  @Column({ name: 'LETRACOMISS', type: 'varchar2', length: 2, nullable: true })
  letracomiss: string | null;

  @Column({ name: 'LOCALIZACAO', type: 'varchar2', length: 40, nullable: true })
  localizacao: string | null;

  @Column({ name: 'MARGEM', type: 'number', precision: 10, scale: 2, nullable: true })
  margem: number | null;

  @Column({ name: 'MATRICULA', type: 'number', precision: 8, scale: 0, nullable: true })
  matricula: number | null;

  @Column({ name: 'MD5PAF', type: 'varchar2', length: 200, nullable: true })
  md5paf: string | null;

  @Column({ name: 'NEGOCIACAOPOSTERIOR', type: 'varchar2', length: 1, nullable: true })
  negociacaoposterior: string | null;

  @Column({ name: 'NUMCAR', type: 'number', precision: 8, scale: 0, nullable: true })
  numcar: number | null;

  @Column({ name: 'NUMEROETIQIMPRESSA', type: 'number', precision: 1, scale: 0, nullable: true })
  numeroetiqimpressa: number | null;

  @Column({ name: 'NUMFICHAORIG', type: 'number', precision: 10, scale: 0, nullable: true })
  numfichaorig: number | null;

  @Column({ name: 'NUMITEMORCA', type: 'number', precision: 6, scale: 0, nullable: true })
  numitemorca: number | null;

  @Column({ name: 'NUMITEMPED', type: 'number', precision: 10, scale: 0, nullable: true })
  numitemped: number | null;

  @Column({ name: 'NUMLISTA', type: 'number', precision: 6, scale: 0, nullable: true })
  numlista: number | null;

  @Column({ name: 'NUMLOTE', type: 'varchar2', length: 15, nullable: true })
  numlote: string | null;

  @Column({ name: 'NUMLOTEPROMOCAOMED', type: 'varchar2', length: 20, nullable: true })
  numlotepromocaomed: string | null;

  @PrimaryColumn({ name: 'NUMORCA', type: 'number', precision: 10, scale: 0, nullable: false })
  orderNumber: number;

  @Column({ name: 'NUMORCAORIG', type: 'number', precision: 10, scale: 0, nullable: true })
  numorcaorig: number | null;

  @Column({ name: 'NUMPEDCLI', type: 'varchar2', length: 15, nullable: true })
  numpedcli: string | null;

  @PrimaryColumn({ name: 'NUMSEQ', type: 'number', precision: 20, scale: 0, nullable: false })
  sequenceNumber: number;

  @Column({ name: 'NUMSEQCESTA', type: 'number', precision: 20, scale: 0, nullable: true })
  numseqcesta: number | null;

  @Column({ name: 'NUMSEQFORMULA', type: 'number', precision: 20, scale: 0, nullable: true })
  numseqformula: number | null;

  @Column({ name: 'NUMSEQIMPRESSAO', type: 'number', precision: 6, scale: 0, nullable: true })
  numseqimpressao: number | null;

  @Column({ name: 'NUMSEQITEMCONTRATO', type: 'number', precision: 6, scale: 0, nullable: true })
  numseqitemcontrato: number | null;

  @Column({ name: 'NUMTRANSENTPEPS', type: 'number', precision: 10, scale: 0, nullable: true })
  numtransentpeps: number | null;

  @Column({ name: 'NUMVERBACAMPANHA', type: 'number', precision: 8, scale: 0, nullable: true })
  numverbacampanha: number | null;

  @Column({ name: 'NUMVERBAREBCMV', type: 'number', precision: 6, scale: 0, nullable: true })
  numverbarebcmv: number | null;

  @Column({ name: 'OBS1', type: 'varchar2', length: 400, nullable: true })
  obs1: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', length: 400, nullable: true })
  obs2: string | null;

  @Column({ name: 'OBSERVACAO', type: 'varchar2', length: 300, nullable: true })
  observacao: string | null;

  @Column({ name: 'ORIGEMST', type: 'varchar2', length: 1, nullable: true })
  origemst: string | null;

  @Column({ name: 'ORIGMERCTRIB', type: 'varchar2', length: 1, nullable: true })
  origmerctrib: string | null;

  @Column({ name: 'PAUTA', type: 'number', precision: 8, scale: 4, nullable: true })
  tariff: number | null;

  @Column({ name: 'PBASECAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  pbasecampanha: number | null;

  @Column({ name: 'PBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  rcaBasePrice: number | null;

  @Column({ name: 'PBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  pbonific: number | null;

  @Column({ name: 'PERACRESCIMOFUNCEP', type: 'number', precision: 12, scale: 4, nullable: true })
  peracrescimofuncep: number | null;

  @Column({ name: 'PERBONIFIC', type: 'number', precision: 12, scale: 4, nullable: true })
  perbonific: number | null;

  @Column({ name: 'PERCAGREGADORST', type: 'number', precision: 8, scale: 4, nullable: true })
  percagregadorst: number | null;

  @Column({ name: 'PERCBASERED', type: 'number', precision: 8, scale: 4, nullable: true })
  percbasered: number | null;

  @Column({ name: 'PERCBASEREDPART', type: 'number', precision: 5, scale: 2, nullable: true })
  percbaseredpart: number | null;

  @Column({ name: 'PERCBASEREDST', type: 'number', precision: 8, scale: 4, nullable: true })
  percbaseredst: number | null;

  @Column({ name: 'PERCBASEREDSTFONTE', type: 'number', precision: 8, scale: 4, nullable: true })
  sourceStBaseReductionPercent: number | null;

  @Column({ name: 'PERCCUSTFORNEC', type: 'number', precision: 12, scale: 4, nullable: true })
  perccustfornec: number | null;

  @Column({ name: 'PERCDESCCOFINS', type: 'number', precision: 12, scale: 4, nullable: true })
  percdesccofins: number | null;

  @Column({ name: 'PERCDESCPIS', type: 'number', precision: 12, scale: 4, nullable: true })
  percdescpis: number | null;

  @Column({ name: 'PERCDESCQUANT', type: 'number', precision: 6, scale: 2, nullable: true })
  percdescquant: number | null;

  @Column({ name: 'PERCDESC_POLITICA', type: 'number', precision: 10, scale: 4, nullable: true })
  percdescPolitica: number | null;

  @Column({ name: 'PERCDIFALIQUOTAS', type: 'number', precision: 8, scale: 4, nullable: true })
  percdifaliquotas: number | null;

  @Column({ name: 'PERCIPI', type: 'number', precision: 12, scale: 4, nullable: true })
  ipiPercent: number | null;

  @Column({ name: 'PERCISS', type: 'number', precision: 8, scale: 4, nullable: true })
  issPercent: number | null;

  @Column({ name: 'PERCOM', type: 'number', precision: 8, scale: 4, nullable: true })
  commissionPercent: number | null;

  @Column({ name: 'PERCOM2', type: 'number', precision: 8, scale: 4, nullable: true })
  percom2: number | null;

  @Column({ name: 'PERCOM3', type: 'number', precision: 8, scale: 4, nullable: true })
  percom3: number | null;

  @Column({ name: 'PERCOM4', type: 'number', precision: 8, scale: 4, nullable: true })
  percom4: number | null;

  @Column({ name: 'PERCOMPROF', type: 'number', precision: 6, scale: 2, nullable: true })
  percomprof: number | null;

  @Column({ name: 'PERCOMSUP', type: 'number', precision: 8, scale: 4, nullable: true })
  percomsup: number | null;

  @Column({ name: 'PERCOMTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  percomtab: number | null;

  @Column({ name: 'PERCPROVPART', type: 'number', precision: 5, scale: 2, nullable: true })
  percprovpart: number | null;

  @Column({ name: 'PERCREDALIQIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  percredaliqipi: number | null;

  @Column({ name: 'PERCVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  percvenda: number | null;

  @Column({ name: 'PERDESC', type: 'number', precision: 18, scale: 6, nullable: true })
  discountPercent: number | null;

  @Column({ name: 'PERDESCAUX', type: 'number', precision: 5, scale: 2, nullable: true })
  perdescaux: number | null;

  @Column({ name: 'PERDESCAVISTA', type: 'number', precision: 18, scale: 6, nullable: true })
  perdescavista: number | null;

  @Column({ name: 'PERDESCCAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  perdesccampanha: number | null;

  @Column({ name: 'PERDESCCOM', type: 'number', precision: 12, scale: 4, nullable: true })
  perdesccom: number | null;

  @Column({ name: 'PERDESCCUSTO', type: 'number', precision: 8, scale: 4, nullable: true })
  perdesccusto: number | null;

  @Column({ name: 'PERDESCFIN', type: 'number', precision: 12, scale: 4, nullable: true })
  perdescfin: number | null;

  @Column({ name: 'PERDESCFLEX', type: 'number', precision: 18, scale: 6, nullable: true })
  perdescflex: number | null;

  @Column({ name: 'PERDESCISENTOICMS', type: 'number', precision: 4, scale: 2, nullable: true })
  icmsExemptDiscountPercent: number | null;

  @Column({ name: 'PERDESCMAXCAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  perdescmaxcampanha: number | null;

  @Column({ name: 'PERDESCNEGOCIADO', type: 'number', precision: 18, scale: 6, nullable: true })
  perdescnegociado: number | null;

  @Column({ name: 'PERDESCPAUTA', type: 'number', precision: 18, scale: 6, nullable: true })
  perdescpauta: number | null;

  @Column({ name: 'PERDESCPOLITICA', type: 'number', precision: 8, scale: 2, nullable: true })
  perdescpolitica: number | null;

  @Column({ name: 'PERDESCTAB', type: 'number', precision: 8, scale: 4, nullable: true })
  perdesctab: number | null;

  @Column({ name: 'PERFCPSN', type: 'number', precision: 12, scale: 4, nullable: true })
  perfcpsn: number | null;

  @Column({ name: 'PERFCPSTRET', type: 'number', precision: 12, scale: 4, nullable: true })
  perfcpstret: number | null;

  @Column({ name: 'PERFRETECMV', type: 'number', precision: 8, scale: 4, nullable: true })
  cmvFreightPercent: number | null;

  @Column({ name: 'PERREDCOMISS', type: 'number', precision: 18, scale: 6, nullable: true })
  perredcomiss: number | null;

  @Column({ name: 'PERREDCOMISSSUP', type: 'number', precision: 18, scale: 6, nullable: true })
  perredcomisssup: number | null;

  @Column({ name: 'PESOBRUTO', type: 'number', precision: 7, scale: 3, nullable: true })
  pesobruto: number | null;

  @Column({ name: 'PMPFMEDICAMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  pmpfmedicamento: number | null;

  @Column({ name: 'POLITICAPRIORITARIA', type: 'varchar2', length: 1, nullable: true })
  politicaprioritaria: string | null;

  @Column({ name: 'PORIGINAL', type: 'number', precision: 18, scale: 6, nullable: true })
  originalPrice: number | null;

  @Column({ name: 'POSICAO', type: 'varchar2', length: 2, nullable: true })
  position: string | null;

  @Column({ name: 'PRAZOMEDIO', type: 'number', precision: 4, scale: 0, nullable: true })
  prazomedio: number | null;

  @Column({ name: 'PRECOFIXO', type: 'number', precision: 18, scale: 6, nullable: true })
  precofixo: number | null;

  @Column({ name: 'PRECOFIXOCAMPANHA', type: 'number', precision: 18, scale: 6, nullable: true })
  precofixocampanha: number | null;

  @Column({ name: 'PRODDESCRICAOCONTRATO', type: 'varchar2', length: 300, nullable: true })
  proddescricaocontrato: string | null;

  @Column({ name: 'PRODIMPORTADOPEPS', type: 'varchar2', length: 1, nullable: true })
  prodimportadopeps: string | null;

  @Column({ name: 'PRODUZIR_TINTA', type: 'varchar2', length: 1, nullable: true })
  produzirTinta: string | null;

  @Column({ name: 'PROMOCAO', type: 'varchar2', length: 1, nullable: true })
  promocao: string | null;

  @Column({ name: 'PTABELA', type: 'number', precision: 19, scale: 6, nullable: true })
  listPrice: number | null;

  @Column({ name: 'PTABELAAUTPECAS', type: 'number', precision: 18, scale: 6, nullable: true })
  ptabelaautpecas: number | null;

  @Column({ name: 'PTABELAFABRICAZFM', type: 'number', precision: 18, scale: 6, nullable: true })
  ptabelafabricazfm: number | null;

  @Column({ name: 'PVENDA', type: 'number', precision: 19, scale: 6, nullable: true })
  salePrice: number | null;

  @Column({ name: 'PVENDA1', type: 'number', precision: 18, scale: 6, nullable: true })
  pvenda1: number | null;

  @Column({ name: 'PVENDAANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  pvendaanterior: number | null;

  @Column({ name: 'PVENDAATAC', type: 'number', precision: 12, scale: 3, nullable: true })
  pvendaatac: number | null;

  @Column({ name: 'PVENDABASE', type: 'number', precision: 18, scale: 6, nullable: true })
  baseSalePrice: number | null;

  @Column({ name: 'PVENDALIQ', type: 'number', precision: 18, scale: 6, nullable: true })
  pvendaliq: number | null;

  @Column({ name: 'QBCMONORET', type: 'number', precision: 18, scale: 6, nullable: true })
  qbcmonoret: number | null;

  @Column({ name: 'QT', type: 'number', precision: 20, scale: 6, nullable: true })
  quantity: number | null;

  @Column({ name: 'QTCOMBOVIRTUAL', type: 'number', precision: 12, scale: 4, nullable: true })
  qtcombovirtual: number | null;

  @Column({ name: 'QTCX', type: 'number', precision: 14, scale: 6, nullable: true })
  boxQuantity: number | null;

  @Column({ name: 'QTDIASENTREGAITEM', type: 'number', precision: 4, scale: 0, nullable: true })
  qtdiasentregaitem: number | null;

  @Column({ name: 'QTENTREGAR', type: 'number', precision: 16, scale: 3, nullable: true })
  qtentregar: number | null;

  @Column({ name: 'QTENTREGUE', type: 'number', precision: 16, scale: 3, nullable: true })
  qtentregue: number | null;

  @Column({ name: 'QTENTREGUEAUX', type: 'number', precision: 16, scale: 3, nullable: true })
  qtentregueaux: number | null;

  @Column({ name: 'QTFALTA', type: 'number', precision: 20, scale: 6, nullable: true })
  missingQuantity: number | null;

  @Column({ name: 'QTIMEDIATA', type: 'number', precision: 16, scale: 3, nullable: true })
  qtimediata: number | null;

  @Column({ name: 'QTMINIMAATACADO', type: 'number', precision: 18, scale: 6, nullable: true })
  qtminimaatacado: number | null;

  @Column({ name: 'QTPECAS', type: 'number', precision: 14, scale: 6, nullable: true })
  piecesQuantity: number | null;

  @Column({ name: 'QTPOSTERIOR', type: 'number', precision: 16, scale: 3, nullable: true })
  qtposterior: number | null;

  @Column({ name: 'QTRETIRA1', type: 'number', precision: 16, scale: 3, nullable: true })
  qtretira1: number | null;

  @Column({ name: 'QTRETIRA2', type: 'number', precision: 16, scale: 3, nullable: true })
  qtretira2: number | null;

  @Column({ name: 'QTRETIRA3', type: 'number', precision: 16, scale: 3, nullable: true })
  qtretira3: number | null;

  @Column({ name: 'QTUNITEMB', type: 'number', precision: 18, scale: 6, nullable: true })
  qtunitemb: number | null;

  @Column({ name: 'REFCOR', type: 'varchar2', length: 20, nullable: true })
  refcor: string | null;

  @Column({ name: 'ROTINALANC', type: 'varchar2', length: 48, nullable: true })
  rotinalanc: string | null;

  @Column({ name: 'RP_IMEDIATA', type: 'varchar2', length: 1, nullable: true })
  rpImediata: string | null;

  @Column({ name: 'SERVIMP', type: 'number', precision: 10, scale: 0, nullable: true })
  servimp: number | null;

  @Column({ name: 'SIGLAQUALIDADE', type: 'varchar2', length: 10, nullable: true })
  siglaqualidade: string | null;

  @Column({ name: 'SITTRIBUT', type: 'varchar2', length: 3, nullable: true })
  sittribut: string | null;

  @Column({ name: 'ST', type: 'number', precision: 18, scale: 6, nullable: true })
  st: number | null;

  @Column({ name: 'STATUSSUCATA', type: 'number', precision: 1, scale: 0, nullable: true })
  statussucata: number | null;

  @Column({ name: 'STCLIENTEGNRE', type: 'number', precision: 18, scale: 6, nullable: true })
  stclientegnre: number | null;

  @Column({ name: 'STPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  stpbaserca: number | null;

  @Column({ name: 'STPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  stptabela: number | null;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'number', precision: 12, scale: 6, nullable: true })
  taxacasomoedareal: number | null;

  @Column({ name: 'TIPODESCAPLICADO', type: 'varchar2', length: 2, nullable: true })
  tipodescaplicado: string | null;

  @Column({ name: 'TIPOENTREGA', type: 'varchar2', length: 2, nullable: true })
  tipoentrega: string | null;

  @Column({ name: 'TIPOMERC', type: 'varchar2', length: 2, nullable: true })
  tipomerc: string | null;

  @Column({ name: 'TIPOPESO', type: 'varchar2', length: 1, nullable: true })
  tipopeso: string | null;

  @Column({ name: 'TRUNCARITEM', type: 'varchar2', length: 1, nullable: true })
  truncaritem: string | null;

  @Column({ name: 'TXVENDA', type: 'number', precision: 8, scale: 6, nullable: true })
  txvenda: number | null;

  @Column({ name: 'UNIDADE', type: 'varchar2', length: 2, nullable: true })
  unidade: string | null;

  @Column({ name: 'UTILIZOUMOTORCALCULO', type: 'varchar2', length: 1, nullable: true })
  utilizoumotorcalculo: string | null;

  @Column({ name: 'VERSAOSERVICOPARTILHA', type: 'varchar2', length: 10, nullable: true })
  versaoservicopartilha: string | null;

  @Column({ name: 'VICMSMONORET', type: 'number', precision: 18, scale: 6, nullable: true })
  vicmsmonoret: number | null;

  @Column({ name: 'VLACRESCCOMPLEMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  vlacresccomplemento: number | null;

  @Column({ name: 'VLACRESCIMOFUNCEP', type: 'number', precision: 18, scale: 6, nullable: true })
  vlacrescimofuncep: number | null;

  @Column({ name: 'VLACRESCRODAPE', type: 'number', precision: 18, scale: 6, nullable: true })
  vlacrescrodape: number | null;

  @Column({ name: 'VLACRESFRETEKG', type: 'number', precision: 12, scale: 6, nullable: true })
  vlacresfretekg: number | null;

  @Column({ name: 'VLBASEFCPICMS', type: 'number', precision: 18, scale: 6, nullable: true })
  vlbasefcpicms: number | null;

  @Column({ name: 'VLBASEFCPST', type: 'number', precision: 18, scale: 6, nullable: true })
  vlbasefcpst: number | null;

  @Column({ name: 'VLBASEPARTDEST', type: 'number', precision: 18, scale: 6, nullable: true })
  vlbasepartdest: number | null;

  @Column({ name: 'VLBCFCPSTRET', type: 'number', precision: 18, scale: 6, nullable: true })
  vlbcfcpstret: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  vlbonific: number | null;

  @Column({ name: 'VLCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  vlcbs: number | null;

  @Column({ name: 'VLCBSPBASERCA', type: 'number', precision: 23, scale: 10, nullable: true })
  vlcbspbaserca: number | null;

  @Column({ name: 'VLCBSPTABELA', type: 'number', precision: 23, scale: 10, nullable: true })
  vlcbsptabela: number | null;

  @Column({ name: 'VLCREDFCPICMSSN', type: 'number', precision: 18, scale: 6, nullable: true })
  vlcredfcpicmssn: number | null;

  @Column({ name: 'VLCUSTFORNEC', type: 'number', precision: 18, scale: 6, nullable: true })
  vlcustfornec: number | null;

  @Column({ name: 'VLCUSTOCONT', type: 'number', precision: 18, scale: 6, nullable: true })
  vlcustocont: number | null;

  @Column({ name: 'VLCUSTOFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  financialCostValue: number | null;

  @Column({ name: 'VLCUSTOREAL', type: 'number', precision: 18, scale: 6, nullable: true })
  realCostValue: number | null;

  @Column({ name: 'VLCUSTOREP', type: 'number', precision: 18, scale: 6, nullable: true })
  vlcustorep: number | null;

  @Column({ name: 'VLDESCCMVPROMOCAOMED', type: 'number', precision: 18, scale: 6, nullable: true })
  vldesccmvpromocaomed: number | null;

  @Column({ name: 'VLDESCCOM', type: 'number', precision: 18, scale: 6, nullable: true })
  vldesccom: number | null;

  @Column({ name: 'VLDESCCUSTOCMV', type: 'number', precision: 12, scale: 4, nullable: true })
  vldesccustocmv: number | null;

  @Column({ name: 'VLDESCFIN', type: 'number', precision: 18, scale: 6, nullable: true })
  vldescfin: number | null;

  @Column({ name: 'VLDESCFLEX', type: 'number', precision: 18, scale: 6, nullable: true })
  vldescflex: number | null;

  @Column({ name: 'VLDESCICMISENCAO', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsExemptionDiscountValue: number | null;

  @Column({ name: 'VLDESCPISSUFRAMA', type: 'number', precision: 18, scale: 6, nullable: true })
  vldescpissuframa: number | null;

  @Column({ name: 'VLDESCREDUCAOCOFINS', type: 'number', precision: 24, scale: 6, nullable: true })
  vldescreducaocofins: number | null;

  @Column({ name: 'VLDESCREDUCAOPIS', type: 'number', precision: 24, scale: 6, nullable: true })
  vldescreducaopis: number | null;

  @Column({ name: 'VLDESCRODAPE', type: 'number', precision: 18, scale: 6, nullable: true })
  vldescrodape: number | null;

  @Column({ name: 'VLDESCSUFRAMA', type: 'number', precision: 18, scale: 6, nullable: true })
  suframaDiscountValue: number | null;

  @Column({ name: 'VLDIFALIQUOTAS', type: 'number', precision: 18, scale: 6, nullable: true })
  vldifaliquotas: number | null;

  @Column({ name: 'VLFCPPART', type: 'number', precision: 18, scale: 6, nullable: true })
  vlfcppart: number | null;

  @Column({ name: 'VLFCPSTRET', type: 'number', precision: 18, scale: 6, nullable: true })
  vlfcpstret: number | null;

  @Column({ name: 'VLFECP', type: 'number', precision: 18, scale: 6, nullable: true })
  vlfecp: number | null;

  @Column({ name: 'VLIBS', type: 'number', precision: 23, scale: 10, nullable: true })
  vlibs: number | null;

  @Column({ name: 'VLIBSPBASERCA', type: 'number', precision: 23, scale: 10, nullable: true })
  vlibspbaserca: number | null;

  @Column({ name: 'VLIBSPTABELA', type: 'number', precision: 23, scale: 10, nullable: true })
  vlibsptabela: number | null;

  @Column({ name: 'VLICMSDIFALIQPART', type: 'number', precision: 22, scale: 6, nullable: true })
  vlicmsdifaliqpart: number | null;

  @Column({ name: 'VLICMSPART', type: 'number', precision: 18, scale: 6, nullable: true })
  vlicmspart: number | null;

  @Column({ name: 'VLICMSPARTDEST', type: 'number', precision: 18, scale: 6, nullable: true })
  vlicmspartdest: number | null;

  @Column({ name: 'VLICMSPARTPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  vlicmspartpbaserca: number | null;

  @Column({ name: 'VLICMSPARTPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  vlicmspartptabela: number | null;

  @Column({ name: 'VLICMSPARTREM', type: 'number', precision: 18, scale: 6, nullable: true })
  vlicmspartrem: number | null;

  @Column({ name: 'VLICMSSTRETANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  vlicmsstretanterior: number | null;

  @Column({ name: 'VLICMSSUBSTITUTOANTERIOR', type: 'number', precision: 18, scale: 6, nullable: true })
  vlicmssubstitutoanterior: number | null;

  @Column({ name: 'VLIISUSPENSO', type: 'number', precision: 18, scale: 6, nullable: true })
  vliisuspenso: number | null;

  @Column({ name: 'VLIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiValue: number | null;

  @Column({ name: 'VLIPIPBASERCA', type: 'number', precision: 18, scale: 6, nullable: true })
  vlipipbaserca: number | null;

  @Column({ name: 'VLIPIPTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  vlipiptabela: number | null;

  @Column({ name: 'VLIPISUSPENSO', type: 'number', precision: 18, scale: 6, nullable: true })
  vlipisuspenso: number | null;

  @Column({ name: 'VLIS', type: 'number', precision: 23, scale: 10, nullable: true })
  vlis: number | null;

  @Column({ name: 'VLISPBASERCA', type: 'number', precision: 23, scale: 10, nullable: true })
  vlispbaserca: number | null;

  @Column({ name: 'VLISPTABELA', type: 'number', precision: 23, scale: 10, nullable: true })
  vlisptabela: number | null;

  @Column({ name: 'VLISS', type: 'number', precision: 18, scale: 6, nullable: true })
  issValue: number | null;

  @Column({ name: 'VLOUTRASDESP', type: 'number', precision: 18, scale: 6, nullable: true })
  vloutrasdesp: number | null;

  @Column({ name: 'VLREDCMVSIMPLESNAC', type: 'number', precision: 18, scale: 6, nullable: true })
  vlredcmvsimplesnac: number | null;

  @Column({ name: 'VLREDCOMISS', type: 'number', precision: 18, scale: 6, nullable: true })
  vlredcomiss: number | null;

  @Column({ name: 'VLREDCOMISSSUP', type: 'number', precision: 18, scale: 6, nullable: true })
  vlredcomisssup: number | null;

  @Column({ name: 'VLREDPVENDASIMPLESNA', type: 'number', precision: 18, scale: 6, nullable: true })
  vlredpvendasimplesna: number | null;

  @Column({ name: 'VLREPASSE', type: 'number', precision: 18, scale: 6, nullable: true })
  vlrepasse: number | null;

  @Column({ name: 'VLRMOEDAESTRAGEIRA', type: 'number', precision: 18, scale: 6, nullable: true })
  vlrmoedaestrageira: number | null;

  @Column({ name: 'VLTOTSERVICO', type: 'number', precision: 22, scale: 6, nullable: true })
  vltotservico: number | null;

  @Column({ name: 'VLVERBACMV', type: 'number', precision: 18, scale: 6, nullable: true })
  vlverbacmv: number | null;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', precision: 18, scale: 6, nullable: true })
  customerCmvFundValue: number | null;

  @Column({ name: 'VOLUMEDESEJADO', type: 'number', precision: 12, scale: 4, nullable: true })
  volumedesejado: number | null;
}
