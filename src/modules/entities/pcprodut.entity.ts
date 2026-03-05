import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPRODUT',
})
export class PcprodutEntity {
  @Column({ name: 'ABASTEPALETE', type: 'varchar2', length: 1, nullable: true })
  palletSupply: string | null;

  @Column({ name: 'ABASTEPALETECX', type: 'varchar2', length: 1, nullable: true })
  palletSupplyBox: string | null;

  @Column({ name: 'ACEITATROCAINSERVIVEL', type: 'varchar2', length: 1, nullable: true })
  acceptUnusableExchange: string | null;

  @Column({ name: 'ACEITAVENDAFRACAO', type: 'varchar2', length: 1, nullable: true })
  acceptFractionSale: string | null;

  @Column({ name: 'ALIQAVULSADARE', type: 'number', precision: 5, scale: 2, nullable: true })
  separateTaxRate: number | null;

  @Column({ name: 'ALIQUOTATCIF', type: 'number', precision: 18, scale: 6, nullable: true })
  cifTaxRate: number | null;

  @Column({ name: 'ALTURA', type: 'number', precision: 10, scale: 4, nullable: true })
  height: number | null;

  @Column({ name: 'ALTURAARM', type: 'number', precision: 10, scale: 6, nullable: true })
  storageHeight: number | null;

  @Column({ name: 'ALTURAM3', type: 'number', precision: 10, scale: 6, nullable: true })
  heightM3: number | null;

  @Column({ name: 'ALTURAPAL', type: 'number', precision: 10, scale: 4, nullable: true })
  palletHeight: number | null;

  @Column({ name: 'ALTURATOTAL', type: 'number', precision: 10, scale: 4, nullable: true })
  totalHeight: number | null;

  @Column({ name: 'ANALISEDESC', type: 'varchar2', length: 100, nullable: true })
  analysisDescription: string | null;

  @Column({ name: 'ANP', type: 'number', precision: 9, scale: 0, nullable: true })
  anp: number | null;

  @Column({ name: 'ANTIDUMPING', type: 'varchar2', length: 1, nullable: true })
  antiDumping: string | null;

  @Column({ name: 'ANVISA', type: 'varchar2', length: 20, nullable: true })
  anvisa: string | null;

  @Column({ name: 'ANVISACAPINSTAL', type: 'number', precision: 11, scale: 0, nullable: true })
  anvisaInstalledCapacity: number | null;

  @Column({ name: 'ANVISACLASTERAPEUTICA', type: 'varchar2', length: 40, nullable: true })
  anvisaTherapeuticClass: string | null;

  @Column({ name: 'ANVISACOEFTEC', type: 'varchar2', length: 20, nullable: true })
  anvisaTechCoef: string | null;

  @Column({ name: 'ANVISACONCEN', type: 'number', precision: 8, scale: 0, nullable: true })
  anvisaConcentration: number | null;

  @Column({ name: 'ANVISADESCPRINCAT1', type: 'varchar2', length: 100, nullable: true })
  anvisaPrincCatDesc1: string | null;

  @Column({ name: 'ANVISADESCPRINCAT2', type: 'varchar2', length: 100, nullable: true })
  anvisaPrincCatDesc2: string | null;

  @Column({ name: 'ANVISADESCPRINCAT3', type: 'varchar2', length: 100, nullable: true })
  anvisaPrincCatDesc3: string | null;

  @Column({ name: 'ANVISADESCPRINCAT4', type: 'varchar2', length: 100, nullable: true })
  anvisaPrincCatDesc4: string | null;

  @Column({ name: 'ANVISAFORMAFARM', type: 'varchar2', length: 20, nullable: true })
  anvisaPharmaForm: string | null;

  @Column({ name: 'ANVISANUMPRINCAT', type: 'number', precision: 4, scale: 0, nullable: true })
  anvisaPrincCatNum: number | null;

  @Column({ name: 'ANVISANUMREGMED', type: 'varchar2', length: 20, nullable: true })
  anvisaMedRegNum: string | null;

  @Column({ name: 'ANVISAQTEMBALAGEM', type: 'number', precision: 5, scale: 0, nullable: true })
  anvisaPackQty: number | null;

  @Column({ name: 'ANVISAUNCOEFTEC', type: 'varchar2', length: 3, nullable: true })
  anvisaTechCoefUnit: string | null;

  @Column({ name: 'ANVISAUNDOSAG', type: 'varchar2', length: 3, nullable: true })
  anvisaDosageUnit: string | null;

  @Column({ name: 'ANVISAUSOCONTINUO', type: 'varchar2', length: 1, nullable: true })
  anvisaContinuousUse: string | null;

  @Column({ name: 'ANVISAVIAADM', type: 'varchar2', length: 20, nullable: true })
  anvisaAdminRoute: string | null;

  @Column({ name: 'APLICACOES', type: 'varchar2', length: 500, nullable: true })
  applications: string | null;

  @Column({ name: 'APLICAPERCREDALIQIPI', type: 'varchar2', length: 1, nullable: true })
  applyIpiCreditRate: string | null;

  @Column({ name: 'APLICPERCIVAPAUTA', type: 'varchar2', length: 1, nullable: true })
  applyIvaPautaPerc: string | null;

  @Column({ name: 'APLICPERCIVAPAUTAICMSANTECIP', type: 'varchar2', length: 1, nullable: true })
  applyIvaPautaIcmsAdvPerc: string | null;

  @Column({ name: 'APLICREDBASEIVAPLIQ', type: 'varchar2', length: 1, nullable: true })
  applyIvaBaseRedNet: string | null;

  @Column({ name: 'APLICREDBASEIVAPLIQBCR', type: 'varchar2', length: 1, nullable: true })
  applyIvaBaseRedNetBcr: string | null;

  @Column({ name: 'APROVEITACREDICMS', type: 'varchar2', length: 1, nullable: true })
  useIcmsCredit: string | null;

  @Column({ name: 'APROVEITACREDICMSCONT', type: 'varchar2', length: 1, nullable: true })
  useIcmsCreditCont: string | null;

  @Column({ name: 'APROVEITACREDPISCOFINS', type: 'varchar2', length: 1, nullable: true })
  usePisCofinsCredit: string | null;

  @Column({ name: 'APROVEITACREDPISCOFINSCONT', type: 'varchar2', length: 1, nullable: true })
  usePisCofinsCreditCont: string | null;

  @Column({ name: 'APTO', type: 'number', precision: 4, scale: 0, nullable: true })
  apartment: number | null;

  @Column({ name: 'APTO2', type: 'number', precision: 2, scale: 0, nullable: true })
  apartment2: number | null;

  @Column({ name: 'APTOCT', type: 'number', precision: 2, scale: 0, nullable: true })
  apartmentCt: number | null;

  @Column({ name: 'APTOCX', type: 'number', precision: 4, scale: 0, nullable: true })
  apartmentBox: number | null;

  @Column({ name: 'ASSINATURA', type: 'varchar2', length: 255, nullable: true })
  signature: string | null;

  @Column({ name: 'ATUPESOMASTERENT', type: 'varchar2', length: 1, nullable: true })
  updateMasterWeightEntry: string | null;

  @Column({ name: 'AUTORIZATIPO4', type: 'varchar2', length: 1, nullable: true })
  authorizeType4: string | null;

  @Column({ name: 'BASEPISCOFINSLIT', type: 'number', precision: 18, scale: 6, nullable: true })
  pisCofinsLitBase: number | null;

  @Column({ name: 'BASEPISCOFINSLITIMP', type: 'number', precision: 18, scale: 6, nullable: true })
  pisCofinsLitImpBase: number | null;

  @Column({ name: 'BASEPISCOFINSLITRAGEM', type: 'number', precision: 18, scale: 6, nullable: true })
  pisCofinsLiterageBase: number | null;

  @Column({ name: 'BLOQUEIOACORDOPARCERIA', type: 'varchar2', length: 1, nullable: true })
  partnershipAgreementBlock: string | null;

  @Column({ name: 'BOLORESLEVEDURAS', type: 'varchar2', length: 100, nullable: true })
  moldsYeasts: string | null;

  @Column({ name: 'CALCCREDIPI', type: 'varchar2', length: 1, nullable: true })
  calcIpiCredit: string | null;

  @Column({ name: 'CALCCREDIPICONT', type: 'varchar2', length: 1, nullable: true })
  calcIpiCreditCont: string | null;

  @Column({ name: 'CALCIPILITRAGEM', type: 'varchar2', length: 1, nullable: true })
  calcIpiLiterage: string | null;

  @Column({ name: 'CAMAPAPAL', type: 'number', precision: 10, scale: 4, nullable: true })
  layerPallet: number | null;

  @Column({ name: 'CAMPANHA', type: 'varchar2', length: 1, nullable: true })
  campaign: string | null;

  @Column({ name: 'CAPACIDADEPA', type: 'number', precision: 8, scale: 2, nullable: true })
  paCapacity: number | null;

  @Column({ name: 'CAPACIDADEPICKING', type: 'number', precision: 8, scale: 2, nullable: true })
  pickingCapacity: number | null;

  @Column({ name: 'CAPACIDADEPICKINGAL', type: 'number', precision: 8, scale: 2, nullable: true })
  pickingCapacityAl: number | null;

  @Column({ name: 'CAPACIDADEPICKINGCX', type: 'number', precision: 8, scale: 2, nullable: true })
  pickingCapacityBox: number | null;

  @Column({ name: 'CAPVOLDNF', type: 'number', precision: 5, scale: 0, nullable: true })
  volCapDnf: number | null;

  @Column({ name: 'CARCACABATERIA', type: 'varchar2', length: 1, nullable: true })
  batteryCarcass: string | null;

  @Column({ name: 'CATERGORIA', type: 'varchar2', length: 2, nullable: true })
  category: string | null;

  @Column({ name: 'CESTABASICALEGIS', type: 'varchar2', length: 1, nullable: true })
  basicBasketLegis: string | null;

  @Column({ name: 'CFOPORIG', type: 'number', precision: 8, scale: 0, nullable: true })
  originalCfop: number | null;

  @Column({ name: 'CHECARMULTIPLOVENDABNF', type: 'varchar2', length: 1, nullable: true })
  checkBnfSaleMultiple: string | null;

  @Column({ name: 'CLASSE', type: 'varchar2', length: 1, nullable: true })
  class: string | null;

  @Column({ name: 'CLASSECOMISSAO', type: 'varchar2', length: 2, nullable: true })
  commissionClass: string | null;

  @Column({ name: 'CLASSECOMPRA', type: 'varchar2', length: 1, nullable: true })
  purchaseClass: string | null;

  @Column({ name: 'CLASSEESTOQUE', type: 'varchar2', length: 1, nullable: true })
  stockClass: string | null;

  @Column({ name: 'CLASSEFLOW', type: 'varchar2', length: 6, nullable: true })
  flowClass: string | null;

  @Column({ name: 'CLASSEMC', type: 'varchar2', length: 1, nullable: true })
  mcClass: string | null;

  @Column({ name: 'CLASSEVENDA', type: 'varchar2', length: 1, nullable: true })
  salesClass: string | null;

  @Column({ name: 'CLASSEVENDAQT', type: 'varchar2', length: 1, nullable: true })
  salesClassQty: string | null;

  @Column({ name: 'CLASSIFICFISCAL', type: 'varchar2', length: 20, nullable: true })
  fiscalClassification: string | null;

  @Column({ name: 'CODACONDICIONAMENTO', type: 'varchar2', length: 4, nullable: true })
  packagingCode: string | null;

  @Column({ name: 'CODADWORDS', type: 'varchar2', length: 200, nullable: true })
  adwordsCode: string | null;

  @Column({ name: 'CODAGREGACAO', type: 'varchar2', length: 20, nullable: true })
  aggregationCode: string | null;

  @Column({ name: 'CODAGRUPMAPASEP', type: 'varchar2', length: 2, nullable: true })
  mapAsepGroupCode: string | null;

  @Column({ name: 'CODAUXILIAR', type: 'number', precision: 20, scale: 0, nullable: true })
  auxiliaryCode: number | null;

  @Column({ name: 'CODAUXILIAR2', type: 'number', precision: 14, scale: 0, nullable: true })
  auxiliaryCode2: number | null;

  @Column({ name: 'CODAUXILIARTRIB', type: 'number', precision: 20, scale: 0, nullable: true })
  taxAuxiliaryCode: number | null;

  @Column({ name: 'CODCA', type: 'varchar2', length: 100, nullable: true })
  caCode: string | null;

  @Column({ name: 'CODCAMPLOMADEE', type: 'varchar2', length: 200, nullable: true })
  madeeFieldCode: string | null;

  @Column({ name: 'CODCARACPROD', type: 'number', precision: 3, scale: 0, nullable: true })
  prodCharacCode: number | null;

  @Column({ name: 'CODCATEGORIA', type: 'number', precision: 6, scale: 0, nullable: true })
  categoryCode: number | null;

  @Column({ name: 'CODCATEGORIAWEB', type: 'number', precision: 10, scale: 0, nullable: true })
  webCategoryCode: number | null;

  @Column({ name: 'CODCEST', type: 'varchar2', length: 7, nullable: true })
  cestCode: string | null;

  @Column({ name: 'CODCESTDEV', type: 'varchar2', length: 7, nullable: true })
  cestDevCode: string | null;

  @Column({ name: 'CODCLASSETERAPEUTSNGPC', type: 'number', precision: 2, scale: 0, nullable: true })
  sngpcTherapeuticClassCode: number | null;

  @Column({ name: 'CODCOR', type: 'number', precision: 10, scale: 0, nullable: true })
  colorCode: number | null;

  @Column({ name: 'CODDEPTOWEB', type: 'number', precision: 10, scale: 0, nullable: true })
  webDeptCode: number | null;

  @Column({ name: 'CODDISTRIB', type: 'number', precision: 4, scale: 0, nullable: true })
  distribCode: number | null;

  @Column({ name: 'CODENDERECOAL', type: 'number', precision: 10, scale: 0, nullable: true })
  addressCodeAl: number | null;

  @Column({ name: 'CODENDERECOAP', type: 'number', precision: 10, scale: 0, nullable: true })
  addressCodeAp: number | null;

  @Column({ name: 'CODENDERECOCX', type: 'number', precision: 10, scale: 0, nullable: true })
  addressCodeBox: number | null;

  @Column({ name: 'CODENDERECOPA', type: 'number', precision: 10, scale: 0, nullable: true })
  addressCodePa: number | null;

  @Column({ name: 'CODEPTO', type: 'number', precision: 4, scale: 0, nullable: true })
  deptCode: number | null;

  @Column({ name: 'CODEQUIPE', type: 'number', precision: 4, scale: 0, nullable: true })
  teamCode: number | null;

  @Column({ name: 'CODEXCECAOPISCOFINS', type: 'number', precision: 6, scale: 0, nullable: true })
  pisCofinsExceptionCode: number | null;

  @Column({ name: 'CODFAB', type: 'varchar2', length: 30, nullable: true })
  manufacturerCode: string | null;

  @Column({ name: 'CODFILIAL', type: 'number', precision: 2, scale: 0, nullable: true })
  branchCode: number | null;

  @Column({ name: 'CODFILIALPRODUTORA', type: 'number', precision: 3, scale: 0, nullable: true })
  producerBranchCode: number | null;

  @Column({ name: 'CODFILIALRETIRA', type: 'number', precision: 2, scale: 0, nullable: true })
  pickupBranchCode: number | null;

  @Column({ name: 'CODFISCAL', type: 'number', precision: 4, scale: 0, nullable: true })
  fiscalCode: number | null;

  @Column({ name: 'CODFISCALBENEFICENTRADA', type: 'number', precision: 4, scale: 0, nullable: true })
  entryBenefitFiscalCode: number | null;

  @Column({ name: 'CODFISCALBENEFICRETORNO', type: 'number', precision: 4, scale: 0, nullable: true })
  returnBenefitFiscalCode: number | null;

  @Column({ name: 'CODFISCALBENEFICSAIDA', type: 'number', precision: 4, scale: 0, nullable: true })
  exitBenefitFiscalCode: number | null;

  @Column({ name: 'CODFISCALBONIFIC', type: 'number', precision: 4, scale: 0, nullable: true })
  bonusFiscalCode: number | null;

  @Column({ name: 'CODFISCALCOCOMPRA', type: 'number', precision: 4, scale: 0, nullable: true })
  coPurchaseFiscalCode: number | null;

  @Column({ name: 'CODFISCALCONSIG', type: 'number', precision: 4, scale: 0, nullable: true })
  consignmentFiscalCode: number | null;

  @Column({ name: 'CODFISCALCONSIGFAT', type: 'number', precision: 4, scale: 0, nullable: true })
  consignmentInvFiscalCode: number | null;

  @Column({ name: 'CODFISCALCOREMESSA', type: 'number', precision: 4, scale: 0, nullable: true })
  coRemittanceFiscalCode: number | null;

  @Column({ name: 'CODFISCALDEVFORNEC', type: 'number', precision: 4, scale: 0, nullable: true })
  supplierDevFiscalCode: number | null;

  @Column({ name: 'CODFISCALDEVOPLOG', type: 'number', precision: 4, scale: 0, nullable: true })
  opLogDevFiscalCode: number | null;

  @Column({ name: 'CODFISCALENTENTFUT', type: 'number', precision: 4, scale: 0, nullable: true })
  futureEntryFiscalCode: number | null;

  @Column({ name: 'CODFISCALENTOPLOG', type: 'number', precision: 4, scale: 0, nullable: true })
  opLogEntryFiscalCode: number | null;

  @Column({ name: 'CODFISCALENTTRANSF', type: 'number', precision: 4, scale: 0, nullable: true })
  transferEntryFiscalCode: number | null;

  @Column({ name: 'CODFISCALENTTV9', type: 'number', precision: 4, scale: 0, nullable: true })
  tv9EntryFiscalCode: number | null;

  @Column({ name: 'CODFISCALREMENTFUT', type: 'number', precision: 4, scale: 0, nullable: true })
  futureRemittanceFiscalCode: number | null;

  @Column({ name: 'CODFISCALSR', type: 'number', precision: 4, scale: 0, nullable: true })
  srFiscalCode: number | null;

  @Column({ name: 'CODFORMATOPAPEL', type: 'number', precision: 6, scale: 0, nullable: true })
  paperFormatCode: number | null;

  @Column({ name: 'CODFORNEC', type: 'number', precision: 6, scale: 0, nullable: true })
  supplierCode: number | null;

  @Column({ name: 'CODFUNCCADASTRO', type: 'number', precision: 8, scale: 0, nullable: true })
  registerEmployeeCode: number | null;

  @Column({ name: 'CODFUNCULTALTCAD', type: 'number', precision: 8, scale: 0, nullable: true })
  lastCadUpdateEmployeeCode: number | null;

  @Column({ name: 'CODFUNCULTALTER', type: 'number', precision: 8, scale: 0, nullable: true })
  lastUpdateEmployeeCode: number | null;

  @Column({ name: 'CODGENEROFISCAL', type: 'number', precision: 6, scale: 0, nullable: true })
  fiscalGenreCode: number | null;

  @Column({ name: 'CODGRADE', type: 'number', precision: 10, scale: 0, nullable: true })
  gridCode: number | null;

  @Column({ name: 'CODGRULIT', type: 'number', precision: 4, scale: 0, nullable: true })
  literageGroupCode: number | null;

  @Column({ name: 'CODIGOCNAE', type: 'number', precision: 7, scale: 0, nullable: true })
  cnaeCode: number | null;

  @Column({ name: 'CODINFNUTRI', type: 'number', precision: 6, scale: 0, nullable: true })
  nutriInfoCode: number | null;

  @Column({ name: 'CODINSERVIVEL', type: 'varchar2', length: 1, nullable: true })
  unusableCode: string | null;

  @Column({ name: 'CODINTERNO', type: 'varchar2', length: 15, nullable: true })
  internalCode: string | null;

  @Column({ name: 'CODLINHA', type: 'number', precision: 4, scale: 0, nullable: true })
  lineCode: number | null;

  @Column({ name: 'CODLINHANESTLE', type: 'number', precision: 2, scale: 0, nullable: true })
  nestleLineCode: number | null;

  @Column({ name: 'CODLINHAPRAZO', type: 'number', precision: 4, scale: 0, nullable: true })
  termLineCode: number | null;

  @Column({ name: 'CODLINHAPROD', type: 'number', precision: 8, scale: 0, nullable: true })
  prodLineCode: number | null;

  @Column({ name: 'CODMARCA', type: 'number', precision: 6, scale: 0, nullable: true })
  brandCode: number | null;

  @Column({ name: 'CODMOTISENCAOANVISA', type: 'number', precision: 4, scale: 0, nullable: true })
  anvisaExemptionReasonCode: number | null;

  @Column({ name: 'CODNCMEX', type: 'number', precision: 2, scale: 0, nullable: true })
  ncmExCode: number | null;

  @Column({ name: 'CODNESTLETERCEIROS', type: 'varchar2', length: 20, nullable: true })
  nestleThirdPartyCode: string | null;

  @Column({ name: 'CODONU', type: 'varchar2', length: 20, nullable: true })
  onuCode: string | null;

  @Column({ name: 'CODPASSEFISCAL', type: 'number', precision: 6, scale: 0, nullable: true })
  fiscalPassCode: number | null;

  @Column({ name: 'CODPRAZOENT', type: 'number', precision: 4, scale: 0, nullable: true })
  deliveryTermCode: number | null;

  @Column({ name: 'CODPRINCIPATIVO', type: 'number', precision: 6, scale: 0, nullable: true })
  activePrincipleCode: number | null;

  @Column({ name: 'CODPRINCIPATIVO2', type: 'number', precision: 6, scale: 0, nullable: true })
  activePrincipleCode2: number | null;

  @PrimaryColumn({ name: 'CODPROD', type: 'number', precision: 6, scale: 0, nullable: false })
  productCode: number | null;

  @Column({ name: 'CODPRODANTUTICAD', type: 'number', precision: 6, scale: 0, nullable: true })
  lastCadProdCode: number | null;

  @Column({ name: 'CODPRODDNF', type: 'number', precision: 6, scale: 0, nullable: true })
  dnfProdCode: number | null;

  @Column({ name: 'CODPRODEMBALAGEM', type: 'number', precision: 6, scale: 0, nullable: true })
  packagingProdCode: number | null;

  @Column({ name: 'CODPRODENGRADADO', type: 'number', precision: 6, scale: 0, nullable: true })
  crateProdCode: number | null;

  @Column({ name: 'CODPRODFORNEC', type: 'varchar2', length: 20, nullable: true })
  supplierProdCode: string | null;

  @Column({ name: 'CODPRODMASTER', type: 'number', precision: 6, scale: 0, nullable: true })
  masterProdCode: number | null;

  @Column({ name: 'CODPRODPRINC', type: 'number', precision: 6, scale: 0, nullable: true })
  mainProdCode: number | null;

  @Column({ name: 'CODPRODRELEV', type: 'number', precision: 6, scale: 0, nullable: true })
  relevantProdCode: number | null;

  @Column({ name: 'CODPRODSIMILAR', type: 'number', precision: 6, scale: 0, nullable: true })
  similarProdCode: number | null;

  @Column({ name: 'CODPRODSINTEGRA', type: 'varchar2', length: 14, nullable: true })
  sintegraProdCode: string | null;

  @Column({ name: 'CODRISCO', type: 'varchar2', length: 1, nullable: true })
  riskCode: string | null;

  @Column({ name: 'CODROTINAULTALTCOM', type: 'number', precision: 5, scale: 0, nullable: true })
  lastCommUpdateRoutineCode: number | null;

  @Column({ name: 'CODROTINAULTALTCOMTAB', type: 'number', precision: 5, scale: 0, nullable: true })
  lastTabCommUpdateRoutineCode: number | null;

  @Column({ name: 'CODROTINAULTALTER', type: 'number', precision: 5, scale: 0, nullable: true })
  lastUpdateRoutineCode: number | null;

  @Column({ name: 'CODSALMED', type: 'number', precision: 5, scale: 0, nullable: true })
  salMedCode: number | null;

  @Column({ name: 'CODSAZONALIDADEMED', type: 'number', precision: 2, scale: 0, nullable: true })
  medSeasonalityCode: number | null;

  @Column({ name: 'CODSEC', type: 'number', precision: 6, scale: 0, nullable: true })
  sectionCode: number | null;

  @Column({ name: 'CODSECAOWEB', type: 'number', precision: 10, scale: 0, nullable: true })
  webSectionCode: number | null;

  @Column({ name: 'CODSITTRIBPISCOFINS', type: 'number', precision: 4, scale: 0, nullable: true })
  pisCofinsTaxSitCode: number | null;

  @Column({ name: 'CODSITTRIBPISCOFINSDEV', type: 'number', precision: 4, scale: 0, nullable: true })
  pisCofinsDevTaxSitCode: number | null;

  @Column({ name: 'CODSITTRIBST', type: 'number', precision: 4, scale: 0, nullable: true })
  stTaxSitCode: number | null;

  @Column({ name: 'CODSUBCATEGORIA', type: 'number', precision: 10, scale: 0, nullable: true })
  subCategoryCode: number | null;

  @Column({ name: 'CODSUBCATEGORIAWEB', type: 'number', precision: 10, scale: 0, nullable: true })
  webSubCategoryCode: number | null;

  @Column({ name: 'CODSUBMARCA', type: 'number', precision: 6, scale: 0, nullable: true })
  subBrandCode: number | null;

  @Column({ name: 'CODTABLIT', type: 'number', precision: 4, scale: 0, nullable: true })
  literageTabCode: number | null;

  @Column({ name: 'CODTIPOESTRUTURA', type: 'number', precision: 4, scale: 0, nullable: true })
  structureTypeCode: number | null;

  @Column({ name: 'CODTIPOESTRUTURAPUL', type: 'number', precision: 4, scale: 0, nullable: true })
  pulStructureTypeCode: number | null;

  @Column({ name: 'CODTIPORECEIT', type: 'number', precision: 4, scale: 0, nullable: true })
  revenueTypeCode: number | null;

  @Column({ name: 'CODTIPOUSOMED', type: 'number', precision: 2, scale: 0, nullable: true })
  medUseTypeCode: number | null;

  @Column({ name: 'CODTRIBPISCOFINS', type: 'varchar2', length: 1, nullable: true })
  pisCofinsTaxCode: string | null;

  @Column({ name: 'CODUNIDMEDIDANF', type: 'number', precision: 4, scale: 0, nullable: true })
  nfUnitMeasureCode: number | null;

  @Column({ name: 'CODUSUULTALTCOM', type: 'number', precision: 5, scale: 0, nullable: true })
  lastCommUpdateUserCode: number | null;

  @Column({ name: 'CODUSUULTALTCOMTAB', type: 'number', precision: 5, scale: 0, nullable: true })
  lastTabCommUpdateUserCode: number | null;

  @Column({ name: 'CODVASILHAME', type: 'number', precision: 6, scale: 0, nullable: true })
  containerCode: number | null;

  @Column({ name: 'COFINSRETIDO', type: 'varchar2', length: 1, nullable: true })
  retainedCofins: string | null;

  @Column({ name: 'COL95', type: 'varchar2', length: 100, nullable: true })
  col95: string | null;

  @Column({ name: 'COLUNAGRADE', type: 'varchar2', length: 1, nullable: true })
  gridColumn: string | null;

  @Column({ name: 'COMISSAOFIXA', type: 'varchar2', length: 1, nullable: true })
  fixedCommission: string | null;

  @Column({ name: 'COMISSAOPORLUCRATIVIDADE', type: 'varchar2', length: 1, nullable: true })
  profitabilityCommission: string | null;

  @Column({ name: 'COMISSAOSERVICOFUNCIONARIO', type: 'number', precision: 5, scale: 2, nullable: true })
  employeeServiceCommission: number | null;

  @Column({ name: 'COMISSAOSERVICOPRESTADO', type: 'number', precision: 5, scale: 2, nullable: true })
  renderedServiceCommission: number | null;

  @Column({ name: 'COMODATO', type: 'varchar2', length: 1, nullable: true })
  lending: string | null;

  @Column({ name: 'COMPRACONSIGNADO', type: 'varchar2', length: 1, nullable: true })
  consignmentPurchase: string | null;

  @Column({ name: 'COMPRIMENTOARM', type: 'number', precision: 10, scale: 6, nullable: true })
  storageLength: number | null;

  @Column({ name: 'COMPRIMENTOM3', type: 'number', precision: 10, scale: 6, nullable: true })
  lengthM3: number | null;

  @Column({ name: 'CONCENTRACAO', type: 'number', precision: 8, scale: 2, nullable: true })
  concentration: number | null;

  @Column({ name: 'CONCILIAIMPORTACAO', type: 'varchar2', length: 1, nullable: true })
  reconcileImport: string | null;

  @Column({ name: 'CONFAZ', type: 'varchar2', length: 20, nullable: true })
  confaz: string | null;

  @Column({ name: 'CONFERENOCHECKOUT', type: 'varchar2', length: 1, nullable: true })
  checkAtCheckout: string | null;

  @Column({ name: 'CONSIDERARICMSANTECIPCUSTO', type: 'varchar2', length: 1, nullable: true })
  considerIcmsAdvCost: string | null;

  @Column({ name: 'CONSIDERARICMSANTECIPCUSTOCONT', type: 'varchar2', length: 1, nullable: true })
  considerIcmsAdvCostCont: string | null;

  @Column({ name: 'CONSIISUSPENSOBASEICMS', type: 'varchar2', length: 1, nullable: true })
  consIiSuspendedIcmsBase: string | null;

  @Column({ name: 'CONSIPISUSPENSOBASEICMS', type: 'varchar2', length: 1, nullable: true })
  consIpiSuspendedIcmsBase: string | null;

  @Column({ name: 'CONTMICROBIANA', type: 'varchar2', length: 100, nullable: true })
  microbialCount: string | null;

  @Column({ name: 'CONTROLADOIBAMA', type: 'varchar2', length: 1, nullable: true })
  ibamaControlled: string | null;

  @Column({ name: 'CONTROLANUMSERIA', type: 'varchar2', length: 1, nullable: true })
  controlSerialNum: string | null;

  @Column({ name: 'CONTROLANUMSERIE', type: 'varchar2', length: 1, nullable: true })
  controlSerialNumber: string | null;

  @Column({ name: 'CONTROLAPATRIMONIO', type: 'varchar2', length: 1, nullable: true })
  controlAsset: string | null;

  @Column({ name: 'CONTROLAVALIDADEDOLOTE', type: 'varchar2', length: 1, nullable: true })
  controlBatchValidity: string | null;

  @Column({ name: 'CONVENIOISENCAOICMSMED', type: 'varchar2', length: 20, nullable: true })
  medIcmsExemptionAgrmt: string | null;

  @Column({ name: 'CORREDOR', type: 'number', precision: 4, scale: 0, nullable: true })
  aisle: number | null;

  @Column({ name: 'CSLLRETIDO', type: 'varchar2', length: 1, nullable: true })
  retainedCsll: string | null;

  @Column({ name: 'CUSTOFORNEC', type: 'number', precision: 18, scale: 6, nullable: true })
  supplierCost: number | null;

  @Column({ name: 'CUSTOFORNECSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  supplierCostNoSt: number | null;

  @Column({ name: 'CUSTOPROXIMACOMPRA', type: 'number', precision: 18, scale: 6, nullable: true })
  nextPurchaseCost: number | null;

  @Column({ name: 'CUSTOPROXIMACOMPRASEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  nextPurchaseCostNoSt: number | null;

  @Column({ name: 'CUSTOREP', type: 'number', precision: 18, scale: 6, nullable: true })
  repCost: number | null;

  @Column({ name: 'CUSTOREPANT', type: 'number', precision: 18, scale: 6, nullable: true })
  prevRepCost: number | null;

  @Column({ name: 'CUSTOREPANT2', type: 'number', precision: 18, scale: 6, nullable: true })
  prevRepCost2: number | null;

  @Column({ name: 'CUSTOREPANT3', type: 'number', precision: 18, scale: 6, nullable: true })
  prevRepCost3: number | null;

  @Column({ name: 'CUSTOREPMC', type: 'number', precision: 18, scale: 6, nullable: true })
  repCostMc: number | null;

  @Column({ name: 'CUSTOREPTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  repCostTab: number | null;

  @Column({ name: 'CUSTOREPTABANT', type: 'number', precision: 18, scale: 6, nullable: true })
  prevRepCostTab: number | null;

  @Column({ name: 'CUSTOREPZFM', type: 'number', precision: 18, scale: 6, nullable: true })
  repCostZfm: number | null;

  @Column({ name: 'CUSTOREPZFMANT', type: 'number', precision: 18, scale: 6, nullable: true })
  prevRepCostZfm: number | null;

  @Column({ name: 'CUSTOREPZFMTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  repCostZfmTab: number | null;

  @Column({ name: 'DADOSTECNICOS', type: 'varchar2', length: 4000, nullable: true })
  technicalData: string | null;

  @Column({ name: 'DATAVOCOLLECT', type: 'date', nullable: true })
  vocollectDate: Date | null;

  @Column({ name: 'DENOMINACAOCOMUNBRASILEIRA', type: 'varchar2', length: 255, nullable: true })
  brazilianCommonDenom: string | null;

  @Column({ name: 'DENSIDADE', type: 'varchar2', length: 100, nullable: true })
  density: string | null;

  @Column({ name: 'DEPOSITO', type: 'varchar2', length: 20, nullable: true })
  warehouse: string | null;

  @Column({ name: 'DEPOSITOCX', type: 'varchar2', length: 20, nullable: true })
  warehouseBox: string | null;

  @Column({ name: 'DESCANP', type: 'varchar2', length: 60, nullable: true })
  descAnp: string | null;

  @Column({ name: 'DESCPAPEL', type: 'varchar2', length: 60, nullable: true })
  descPaper: string | null;

  @Column({ name: 'DESCRICAO', type: 'varchar2', length: 40, nullable: true })
  description: string | null;

  @Column({ name: 'DESCRICAO1', type: 'varchar2', length: 40, nullable: true })
  description1: string | null;

  @Column({ name: 'DESCRICAO2', type: 'varchar2', length: 40, nullable: true })
  description2: string | null;

  @Column({ name: 'DESCRICAO3', type: 'varchar2', length: 40, nullable: true })
  description3: string | null;

  @Column({ name: 'DESCRICAO4', type: 'varchar2', length: 40, nullable: true })
  description4: string | null;

  @Column({ name: 'DESCRICAO5', type: 'varchar2', length: 40, nullable: true })
  description5: string | null;

  @Column({ name: 'DESCRICAO6', type: 'varchar2', length: 40, nullable: true })
  description6: string | null;

  @Column({ name: 'DESCRICAO7', type: 'varchar2', length: 40, nullable: true })
  description7: string | null;

  @Column({ name: 'DESCRICAODINAMICA', type: 'varchar2', length: 1, nullable: true })
  dynamicDescription: string | null;

  @Column({ name: 'DESINTEGRACAO', type: 'varchar2', length: 100, nullable: true })
  disintegration: string | null;

  @Column({ name: 'DESTAQUEFICHATECNICA', type: 'varchar2', length: 1, nullable: true })
  techSheetHighlight: string | null;

  @Column({ name: 'DIAMETROEXTERNO', type: 'number', precision: 10, scale: 4, nullable: true })
  outerDiameter: number | null;

  @Column({ name: 'DIAMETROINTERNO', type: 'number', precision: 10, scale: 4, nullable: true })
  innerDiameter: number | null;

  @Column({ name: 'DIASCONSECENT', type: 'number', precision: 8, scale: 0, nullable: true })
  consecEntryDays: number | null;

  @Column({ name: 'DIRASSINATURA', type: 'varchar2', length: 60, nullable: true })
  signatureDir: string | null;

  @Column({ name: 'DIRETORIOFOTOS', type: 'varchar2', length: 200, nullable: true })
  photosDir: string | null;

  @Column({ name: 'DIRFOTOPROD', type: 'varchar2', length: 255, nullable: true })
  prodPhotoDir: string | null;

  @Column({ name: 'DISSOLUCAO', type: 'varchar2', length: 100, nullable: true })
  dissolution: string | null;

  @Column({ name: 'DOSEAMENTO', type: 'varchar2', length: 100, nullable: true })
  dosage: string | null;

  @Column({ name: 'DSCPRODANTUTICAD', type: 'varchar2', length: 40, nullable: true })
  prevProdDescCad: string | null;

  @Column({ name: 'DTALTCUSTOFORNEC', type: 'date', nullable: true })
  supplierCostUpdateDate: Date | null;

  @Column({ name: 'DTALTERC5', type: 'date', nullable: true })
  c5UpdateDate: Date | null;

  @Column({ name: 'DTCADASTRO', type: 'date', nullable: true })
  registrationDate: Date | null;

  @Column({ name: 'DTDOLAR', type: 'date', nullable: true })
  dollarDate: Date | null;

  @Column({ name: 'DTEXCLUSAO', type: 'date', nullable: true })
  exclusionDate: Date | null;

  @Column({ name: 'DTEXCLUSAOSOFITVIEW', type: 'date', nullable: true })
  sofitviewExclusionDate: Date | null;

  @Column({ name: 'DTEXPORTACAOWMS', type: 'date', nullable: true })
  wmsExportDate: Date | null;

  @Column({ name: 'DTFINUTICODPRODANTUTICAD', type: 'date', nullable: true })
  endUsePrevProdCodeDate: Date | null;

  @Column({ name: 'DTIMPORTACAOWMS', type: 'date', nullable: true })
  wmsImportDate: Date | null;

  @Column({ name: 'DTIMPORTINTEGRACAO', type: 'date', nullable: true })
  integrationImportDate: Date | null;

  @Column({ name: 'DTINICODPRODANTUTICAD', type: 'date', nullable: true })
  startPrevProdCodeDate: Date | null;

  @Column({ name: 'DTINICONTLOTE', type: 'date', nullable: true })
  startBatchCountDate: Date | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsUpdateDate: Date | null;

  @Column({ name: 'DTPRIMOVNOVCODPROD', type: 'date', nullable: true })
  firstMovNewProdCodeDate: Date | null;

  @Column({ name: 'DTPROXEXPURGO', type: 'date', nullable: true })
  nextPurgeDate: Date | null;

  @Column({ name: 'DTULTALTCAD', type: 'date', nullable: true })
  lastCadUpdateDate: Date | null;

  @Column({ name: 'DTULTALTCOM', type: 'date', nullable: true })
  lastCommUpdateDate: Date | null;

  @Column({ name: 'DTULTALTCUSTOREP', type: 'date', nullable: true })
  lastRepCostUpdateDate: Date | null;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  lastUpdateDate: Date | null;

  @Column({ name: 'DTULTALTERSOFITVIEW', type: 'date', nullable: true })
  sofitviewLastUpdateDate: Date | null;

  @Column({ name: 'DTULTALTERSRVPRC', type: 'date', nullable: true })
  srvPrcLastUpdateDate: Date | null;

  @Column({ name: 'DTULTATUPCOMPRA', type: 'date', nullable: true })
  lastPurchaseUpdateDate: Date | null;

  @Column({ name: 'DTULTEXPURGO', type: 'date', nullable: true })
  lastPurgeDate: Date | null;

  @Column({ name: 'DTVENC', type: 'date', nullable: true })
  dueDate: Date | null;

  @Column({ name: 'DTVIGENCIAPOLITICA', type: 'date', nullable: true })
  policyEffectDate: Date | null;

  @Column({ name: 'DV', type: 'number', precision: 1, scale: 0, nullable: true })
  dv: number | null;

  @Column({ name: 'EFICIENCIAOPERACIONAL', type: 'number', precision: 8, scale: 2, nullable: true })
  operationalEfficiency: number | null;

  @Column({ name: 'EMBALAGEM', type: 'varchar2', length: 12, nullable: true })
  packaging: string | null;

  @Column({ name: 'EMBALAGEMCT', type: 'varchar2', length: 12, nullable: true })
  packagingCt: string | null;

  @Column({ name: 'EMBALAGEMMASTER', type: 'varchar2', length: 12, nullable: true })
  masterPackaging: string | null;

  @Column({ name: 'EMBVENDAECOMMERCEUNILEVER', type: 'varchar2', length: 1, nullable: true })
  unileverEcommerceSalesPack: string | null;

  @Column({ name: 'ENDERECAMENTOCUBAGEM', type: 'varchar2', length: 1, nullable: true })
  cubageaddressing: string | null;

  @Column({ name: 'ENVIAECOMMERCE', type: 'varchar2', length: 1, nullable: true })
  sendEcommerce: string | null;

  @Column({ name: 'ENVIAINFTECNICANFE', type: 'varchar2', length: 1, nullable: true })
  sendTechInfoNfe: string | null;

  @Column({ name: 'ENVIARFORCAVENDAS', type: 'varchar2', length: 1, nullable: true })
  sendSalesForce: string | null;

  @Column({ name: 'ENVIASNGPC', type: 'varchar2', length: 1, nullable: true })
  sendSngpc: string | null;

  @Column({ name: 'ESPECIFICOATIVIDADEPR', type: 'varchar2', length: 1, nullable: true })
  specificActivityPr: string | null;

  @Column({ name: 'ESTFAUREAUS', type: 'varchar2', length: 100, nullable: true })
  staphAureus: string | null;

  @Column({ name: 'ESTOQUEPORDTVALIDADE', type: 'varchar2', length: 1, nullable: true })
  stockByValidityDate: string | null;

  @Column({ name: 'ESTOQUEPORLOTE', type: 'varchar2', length: 1, nullable: true })
  stockByBatch: string | null;

  @Column({ name: 'EXIBESEMESTOQUEECOMMERCE', type: 'varchar2', length: 1, nullable: true })
  showOutOfStockEcommerce: string | null;

  @Column({ name: 'EXPORTABALANCA', type: 'varchar2', length: 1, nullable: true })
  exportScale: string | null;

  @Column({ name: 'EXTIPI', type: 'varchar2', length: 4, nullable: true })
  exTipi: string | null;

  @Column({ name: 'EX_ANALISEDESC', type: 'varchar2', length: 100, nullable: true })
  exAnalysisDesc: string | null;

  @Column({ name: 'EX_BOLORESLEVEDURAS', type: 'varchar2', length: 100, nullable: true })
  exMoldsYeasts: string | null;

  @Column({ name: 'EX_COL95', type: 'varchar2', length: 100, nullable: true })
  exCol95: string | null;

  @Column({ name: 'EX_CONTMICROBIANA', type: 'varchar2', length: 100, nullable: true })
  exMicrobialCount: string | null;

  @Column({ name: 'EX_DENSIDADE', type: 'varchar2', length: 100, nullable: true })
  exDensity: string | null;

  @Column({ name: 'EX_DESINTEGRACAO', type: 'varchar2', length: 100, nullable: true })
  exDisintegration: string | null;

  @Column({ name: 'EX_DISSOLUCAO', type: 'varchar2', length: 100, nullable: true })
  exDissolution: string | null;

  @Column({ name: 'EX_DOSEAMENTO', type: 'varchar2', length: 100, nullable: true })
  exDosage: string | null;

  @Column({ name: 'EX_ESTFAUREAUS', type: 'varchar2', length: 100, nullable: true })
  exStaphAureus: string | null;

  @Column({ name: 'EX_FRIABILIDADE', type: 'varchar2', length: 100, nullable: true })
  exFriability: string | null;

  @Column({ name: 'EX_IDENTIFICACAO', type: 'varchar2', length: 100, nullable: true })
  exIdentification: string | null;

  @Column({ name: 'EX_IMPUREZA', type: 'varchar2', length: 100, nullable: true })
  exImpurity: string | null;

  @Column({ name: 'EX_LIPIDEO', type: 'varchar2', length: 100, nullable: true })
  exLipid: string | null;

  @Column({ name: 'EX_MOFADO', type: 'varchar2', length: 100, nullable: true })
  exMoldy: string | null;

  @Column({ name: 'EX_PESQPATOGENOS', type: 'varchar2', length: 100, nullable: true })
  exPathogenSearch: string | null;

  @Column({ name: 'EX_PH', type: 'varchar2', length: 100, nullable: true })
  exPh: string | null;

  @Column({ name: 'EX_PROTEINA', type: 'varchar2', length: 100, nullable: true })
  exProtein: string | null;

  @Column({ name: 'EX_SALMONELA', type: 'varchar2', length: 100, nullable: true })
  exSalmonella: string | null;

  @Column({ name: 'EX_TOTDEFEITO', type: 'varchar2', length: 100, nullable: true })
  exTotalDefect: string | null;

  @Column({ name: 'EX_UMIDADE', type: 'varchar2', length: 100, nullable: true })
  exHumidity: string | null;

  @Column({ name: 'EX_UNIFORMIDADE', type: 'varchar2', length: 100, nullable: true })
  exUniformity: string | null;

  @Column({ name: 'EX_VLCALORICO', type: 'varchar2', length: 100, nullable: true })
  exCaloricValue: string | null;

  @Column({ name: 'EX_VOLPESMED', type: 'varchar2', length: 100, nullable: true })
  exAvgWeightVol: string | null;

  @Column({ name: 'FARMACIAPOPULAR', type: 'varchar2', length: 1, nullable: true })
  popularPharmacy: string | null;

  @Column({ name: 'FATCONVPRODENGRAD', type: 'number', precision: 12, scale: 6, nullable: true })
  crateProdConvFactor: number | null;

  @Column({ name: 'FATORCONVDNF', type: 'number', precision: 12, scale: 6, nullable: true })
  dnfConvFactor: number | null;

  @Column({ name: 'FATORCONVERSAOBIONEXO', type: 'number', precision: 12, scale: 6, nullable: true })
  bionexoConvFactor: number | null;

  @Column({ name: 'FATORCONVERSAOKG', type: 'number', precision: 12, scale: 6, nullable: true })
  kgConvFactor: number | null;

  @Column({ name: 'FATORCONVERSAONESTLE', type: 'number', precision: 10, scale: 4, nullable: true })
  nestleConvFactor: number | null;

  @Column({ name: 'FATORCONVTRIB', type: 'number', precision: 12, scale: 6, nullable: true })
  taxConvFactor: number | null;

  @Column({ name: 'FATORCONVTRIBEX', type: 'number', precision: 12, scale: 6, nullable: true })
  taxConvFactorEx: number | null;

  @Column({ name: 'FATORTRANSF', type: 'number', precision: 12, scale: 6, nullable: true })
  transferFactor: number | null;

  @Column({ name: 'FATORUNFARM', type: 'number', precision: 12, scale: 6, nullable: true })
  pharmUnitFactor: number | null;

  @Column({ name: 'FLAG0', type: 'number', precision: 10, scale: 0, nullable: true })
  flag0: number | null;

  @Column({ name: 'FLAG1', type: 'number', precision: 1, scale: 0, nullable: true })
  flag1: number | null;

  @Column({ name: 'FLAG2', type: 'number', precision: 1, scale: 0, nullable: true })
  flag2: number | null;

  @Column({ name: 'FLAGS', type: 'number', precision: 10, scale: 0, nullable: true })
  flags: number | null;

  @Column({ name: 'FOLHAROSTO', type: 'varchar2', length: 255, nullable: true })
  coverSheet: string | null;

  @Column({ name: 'FORMAESTERILIZACAO', type: 'varchar2', length: 1, nullable: true })
  sterilizationForm: string | null;

  @Column({ name: 'FRACAOSEPARACAO', type: 'number', precision: 6, scale: 0, nullable: true })
  separationFraction: number | null;

  @Column({ name: 'FRACIONADO', type: 'varchar2', length: 1, nullable: true })
  fractionated: string | null;

  @Column({ name: 'FRETEESPECIAL', type: 'varchar2', length: 1, nullable: true })
  specialFreight: string | null;

  @Column({ name: 'FRIABILIDADE', type: 'varchar2', length: 100, nullable: true })
  friability: string | null;

  @Column({ name: 'FUNDAPIANO', type: 'varchar2', length: 1, nullable: true })
  fundapiano: string | null;

  @Column({ name: 'GERABASEPISCOFINSSEMALIQ', type: 'varchar2', length: 1, nullable: true })
  genPisCofinsBaseNoRate: string | null;

  @Column({ name: 'GERAICMSLIVROFISCALDEVFORNEC', type: 'varchar2', length: 1, nullable: true })
  genIcmsSupplierDevBook: string | null;

  @Column({ name: 'GERAICMSLIVROFISCALENT', type: 'varchar2', length: 1, nullable: true })
  genIcmsEntryBook: string | null;

  @Column({ name: 'GERAOSAUTOMATIC', type: 'varchar2', length: 1, nullable: true })
  genOsAutomatic: string | null;

  @Column({ name: 'GRAMATURA', type: 'varchar2', length: 10, nullable: true })
  grammage: string | null;

  @Column({ name: 'GRAMATURALICIT', type: 'varchar2', length: 20, nullable: true })
  licitGrammage: string | null;

  @Column({ name: 'GRUPOFATURAMENTO', type: 'varchar2', length: 2, nullable: true })
  billingGroup: string | null;

  @Column({ name: 'GTINCODAUXILIAR', type: 'number', precision: 14, scale: 0, nullable: true })
  gtinAuxCode: number | null;

  @Column({ name: 'GTINCODAUXILIAR2', type: 'number', precision: 14, scale: 0, nullable: true })
  gtinAuxCode2: number | null;

  @Column({ name: 'GTINCODAUXILIARTRIB', type: 'number', precision: 14, scale: 0, nullable: true })
  gtinTaxAuxCode: number | null;

  @Column({ name: 'ICMSRESSARC', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsReimb: number | null;

  @Column({ name: 'IDDESTAQUE', type: 'number', precision: 10, scale: 0, nullable: true })
  highlightId: number | null;

  @Column({ name: 'IDEMBALAGEM', type: 'number', precision: 10, scale: 0, nullable: true })
  packagingId: number | null;

  @Column({ name: 'IDENTIFICACAO', type: 'varchar2', length: 100, nullable: true })
  identification: string | null;

  @Column({ name: 'IDINTEGRACAOCIASHOP', type: 'varchar2', length: 20, nullable: true })
  ciashopIntegId: string | null;

  @Column({ name: 'IDINTEGRACAOMYFROTA', type: 'number', precision: 10, scale: 0, nullable: true })
  myfrotaIntegId: number | null;

  @Column({ name: 'IDSOFITVIEW', type: 'number', precision: 10, scale: 0, nullable: true })
  sofitviewId: number | null;

  @Column({ name: 'IECTEREF', type: 'varchar2', length: 12, nullable: true })
  iecteref: string | null;

  @Column({ name: 'IMPORTADO', type: 'varchar2', length: 1, nullable: true })
  imported: string | null;

  @Column({ name: 'IMPUREZA', type: 'varchar2', length: 100, nullable: true })
  impurity: string | null;

  @Column({ name: 'IMUNETRIB', type: 'varchar2', length: 1, nullable: true })
  immuneTax: string | null;

  @Column({ name: 'INCIDENCIACPRB', type: 'varchar2', length: 1, nullable: true })
  cprbIncidence: string | null;

  @Column({ name: 'INDUZLOTE', type: 'varchar2', length: 1, nullable: true })
  induceBatch: string | null;

  @Column({ name: 'INFORMACOESTECNICAS', type: 'clob', nullable: true })
  technicalInfo: string | null;

  @Column({ name: 'INVENTARIOPARCIAL', type: 'varchar2', length: 1, nullable: true })
  partialInventory: string | null;

  @Column({ name: 'IPIPORVALOR', type: 'varchar2', length: 1, nullable: true })
  ipiByValue: string | null;

  @Column({ name: 'IRRETIDO', type: 'varchar2', length: 1, nullable: true })
  retainedIr: string | null;

  @Column({ name: 'ISENTOREGMS', type: 'varchar2', length: 1, nullable: true })
  exemptRegMs: string | null;

  @Column({ name: 'ISENTOSTCOZINHAINDUSTRIAL', type: 'varchar2', length: 1, nullable: true })
  exemptStIndKitchen: string | null;

  @Column({ name: 'ISENTOTCIF', type: 'varchar2', length: 1, nullable: true })
  exemptTcif: string | null;

  @Column({ name: 'IVARESSARC', type: 'number', precision: 18, scale: 6, nullable: true })
  ivaReimb: number | null;

  @Column({ name: 'LARGURAARM', type: 'number', precision: 10, scale: 6, nullable: true })
  storageWidth: number | null;

  @Column({ name: 'LARGURAM3', type: 'number', precision: 10, scale: 6, nullable: true })
  widthM3: number | null;

  @Column({ name: 'LASTROPAL', type: 'number', precision: 10, scale: 4, nullable: true })
  palletBallast: number | null;

  @Column({ name: 'LETRAPAGINA', type: 'varchar2', length: 1, nullable: true })
  pageLetter: string | null;

  @Column({ name: 'LICITCONVENIOISENCAOICMS', type: 'varchar2', length: 20, nullable: true })
  licitIcmsExemptionAgrmt: string | null;

  @Column({ name: 'LICITPERCDESONERACAP', type: 'number', precision: 6, scale: 2, nullable: true })
  licitExemptsCapPerc: number | null;

  @Column({ name: 'LICITPERCDESONERAICM', type: 'number', precision: 6, scale: 2, nullable: true })
  licitExemptsIcmPerc: number | null;

  @Column({ name: 'LICITUSARCAP', type: 'varchar2', length: 1, nullable: true })
  licitUseCap: string | null;

  @Column({ name: 'LICITUSARDESONERAICM', type: 'varchar2', length: 1, nullable: true })
  licitEseexemptsIcm: string | null;

  @Column({ name: 'LINHAPROD', type: 'varchar2', length: 150, nullable: true })
  prodLine: string | null;

  @Column({ name: 'LINKFABRICANTE', type: 'varchar2', length: 255, nullable: true })
  manufacturerLink: string | null;

  @Column({ name: 'LINKID', type: 'varchar2', length: 255, nullable: true })
  linkId: string | null;

  @Column({ name: 'LIPIDEO', type: 'varchar2', length: 100, nullable: true })
  lipid: string | null;

  @Column({ name: 'LITRAGEM', type: 'number', precision: 12, scale: 6, nullable: true })
  literage: number | null;

  @Column({ name: 'LOTEINCCOMPRA', type: 'varchar2', length: 1, nullable: true })
  purchaseIncBatch: string | null;

  @Column({ name: 'LOTEMINCOMPRA', type: 'number', precision: 12, scale: 4, nullable: true })
  minPurchaseBatch: number | null;

  @Column({ name: 'LOTEPRODUCAO', type: 'number', precision: 10, scale: 2, nullable: true })
  productionBatch: number | null;

  @Column({ name: 'MARCA', type: 'varchar2', length: 30, nullable: true })
  brand: string | null;

  @Column({ name: 'MARGEMMIN', type: 'number', precision: 8, scale: 2, nullable: true })
  minMargin: number | null;

  @Column({ name: 'MEDCODFUNCLIBVENDA', type: 'number', precision: 8, scale: 0, nullable: true })
  medReleaseSaleFuncCode: number | null;

  @Column({ name: 'MEDDTLIBVENDA', type: 'date', nullable: true })
  medReleaseSaleDate: Date | null;

  @Column({ name: 'MEDICAMENTOHOSPITALAR', type: 'varchar2', length: 1, nullable: true })
  hospitalMedicine: string | null;

  @Column({ name: 'MEXFPGC', type: 'number', precision: 18, scale: 6, nullable: true })
  mexFpgc: number | null;

  @Column({ name: 'MEXIEPS', type: 'number', precision: 18, scale: 6, nullable: true })
  mexIeps: number | null;

  @Column({ name: 'MEXIVA', type: 'number', precision: 18, scale: 6, nullable: true })
  mexIva: number | null;

  @Column({ name: 'MODBCST', type: 'varchar2', length: 1, nullable: true })
  bcstMod: string | null;

  @Column({ name: 'MODBCSTGUIA', type: 'varchar2', length: 1, nullable: true })
  bcstGuideMod: string | null;

  @Column({ name: 'MODULO', type: 'number', precision: 4, scale: 0, nullable: true })
  module: number | null;

  @Column({ name: 'MODULO2', type: 'number', precision: 4, scale: 0, nullable: true })
  module2: number | null;

  @Column({ name: 'MODULOCT', type: 'number', precision: 4, scale: 0, nullable: true })
  moduleCt: number | null;

  @Column({ name: 'MODULOCX', type: 'number', precision: 4, scale: 0, nullable: true })
  moduleBox: number | null;

  @Column({ name: 'MOEDA', type: 'varchar2', length: 1, nullable: true })
  currency: string | null;

  @Column({ name: 'MOFADO', type: 'varchar2', length: 100, nullable: true })
  moldy: string | null;

  @Column({ name: 'MULTIPLO', type: 'number', precision: 8, scale: 2, nullable: true })
  multiple: number | null;

  @Column({ name: 'MULTIPLO2', type: 'number', precision: 8, scale: 2, nullable: true })
  multiple2: number | null;

  @Column({ name: 'MULTIPLOCOMPRAS', type: 'number', precision: 8, scale: 2, nullable: true })
  purchaseMultiple: number | null;

  @Column({ name: 'MXSPJENVIAECOMMERCE', type: 'varchar2', length: 1, nullable: true })
  mxspjSendEcommerce: string | null;

  @Column({ name: 'MXSPJESTOQUEMINIMO', type: 'number', precision: 12, scale: 6, nullable: true })
  mxspjMinStock: number | null;

  @Column({ name: 'MYFROTA', type: 'varchar2', length: 1, nullable: true })
  myfrota: string | null;

  @Column({ name: 'NATUREZAPRODUTO', type: 'varchar2', length: 1, nullable: true })
  productNature: string | null;

  @Column({ name: 'NBM', type: 'varchar2', length: 12, nullable: true })
  nbm: string | null;

  @Column({ name: 'NIVEL', type: 'number', precision: 6, scale: 0, nullable: true })
  level: number | null;

  @Column({ name: 'NIVELCX', type: 'number', precision: 6, scale: 0, nullable: true })
  levelBox: number | null;

  @Column({ name: 'NOMECOMERCIAL', type: 'varchar2', length: 40, nullable: true })
  commercialName: string | null;

  @Column({ name: 'NOMEECOMMERCE', type: 'varchar2', length: 150, nullable: true })
  ecommerceName: string | null;

  @Column({ name: 'NORMAFORNECEDOR', type: 'number', precision: 10, scale: 4, nullable: true })
  supplierNorm: number | null;

  @Column({ name: 'NORMAPALETE', type: 'varchar2', length: 2, nullable: true })
  palletNorm: string | null;

  @Column({ name: 'NUMCASASDECREDUCAOICMS', type: 'number', precision: 2, scale: 0, nullable: true })
  icmsRedDecPlaces: number | null;

  @Column({ name: 'NUMDIASMAXVENDA', type: 'number', precision: 6, scale: 0, nullable: true })
  maxSaleDaysNum: number | null;

  @Column({ name: 'NUMDIASVALIDADEMIN', type: 'number', precision: 6, scale: 0, nullable: true })
  minValidityDaysNum: number | null;

  @Column({ name: 'NUMERO', type: 'number', precision: 4, scale: 0, nullable: true })
  number: number | null;

  @Column({ name: 'NUMERO2', type: 'number', precision: 4, scale: 0, nullable: true })
  number2: number | null;

  @Column({ name: 'NUMEROCT', type: 'number', precision: 4, scale: 0, nullable: true })
  numberCt: number | null;

  @Column({ name: 'NUMEROCX', type: 'number', precision: 4, scale: 0, nullable: true })
  numberBox: number | null;

  @Column({ name: 'NUMEROSSERIECONTROLADOS', type: 'number', precision: 5, scale: 0, nullable: true })
  controlledSerialNumbers: number | null;

  @Column({ name: 'NUMLISTAINVENTROT', type: 'number', precision: 10, scale: 0, nullable: true })
  rotInventoryListNum: number | null;

  @Column({ name: 'NUMLOTE', type: 'varchar2', length: 20, nullable: true })
  batchNum: string | null;

  @Column({ name: 'NUMORIGINAL', type: 'varchar2', length: 20, nullable: true })
  originalNum: string | null;

  @Column({ name: 'NUMPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  pageNum: number | null;

  @Column({ name: 'NUMREGAGRMAP', type: 'varchar2', length: 20, nullable: true })
  agrMapRegNum: string | null;

  @Column({ name: 'NUMSEQATU', type: 'number', precision: 10, scale: 0, nullable: true })
  updateSeqNum: number | null;

  @Column({ name: 'NUMSEQINVENTROT', type: 'number', precision: 10, scale: 0, nullable: true })
  rotInventorySeqNum: number | null;

  @Column({ name: 'NUMSERVICO', type: 'varchar2', length: 20, nullable: true })
  serviceNum: string | null;

  @Column({ name: 'NUMULTEXPURGO', type: 'number', precision: 10, scale: 0, nullable: true })
  lastPurgeNum: number | null;

  @Column({ name: 'OBRIGAPREENCCONTRATO', type: 'varchar2', length: 1, nullable: true })
  mandatoryContractFill: string | null;

  @Column({ name: 'OBS', type: 'varchar2', length: 40, nullable: true })
  observation: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', length: 40, nullable: true })
  observation2: string | null;

  @Column({ name: 'OBSCONTXCAMPO', type: 'number', precision: 4, scale: 0, nullable: true })
  obsContXField: number | null;

  @Column({ name: 'OBSCONTXTEXTO', type: 'varchar2', length: 40, nullable: true })
  obsContXText: string | null;

  @Column({ name: 'OBSFISCOXCAMPO', type: 'number', precision: 4, scale: 0, nullable: true })
  obsFiscXField: number | null;

  @Column({ name: 'OBSFISCOXTEXTO', type: 'varchar2', length: 40, nullable: true })
  obsFiscXText: string | null;

  @Column({ name: 'OSCOMODATO', type: 'number', precision: 10, scale: 0, nullable: true })
  lendingOs: number | null;

  @Column({ name: 'PAISORIGEM', type: 'number', precision: 5, scale: 0, nullable: true })
  countryOrigin: number | null;

  @Column({ name: 'PASSELIVRE', type: 'varchar2', length: 80, nullable: true })
  freePass: string | null;

  @Column({ name: 'PCKROTATIVO', type: 'varchar2', length: 1, nullable: true })
  rotatingPck: string | null;

  @Column({ name: 'PCOMEXT1', type: 'varchar2', length: 1, nullable: true })
  pcomExt1: string | null;

  @Column({ name: 'PCOMINT1', type: 'varchar2', length: 1, nullable: true })
  pcomInt1: string | null;

  @Column({ name: 'PCOMPROF1', type: 'varchar2', length: 1, nullable: true })
  pcomProf1: string | null;

  @Column({ name: 'PCOMREP1', type: 'varchar2', length: 1, nullable: true })
  pcomRep1: string | null;

  @Column({ name: 'PCOMTLMKT', type: 'number', precision: 5, scale: 2, nullable: true })
  pcomTlmkt: number | null;

  @Column({ name: 'PERACRESCIMOIPI', type: 'number', precision: 6, scale: 2, nullable: true })
  ipiIncreasePerc: number | null;

  @Column({ name: 'PERCACRES', type: 'number', precision: 5, scale: 2, nullable: true })
  additionPerc: number | null;

  @Column({ name: 'PERCALIQCREDICMSDIFEREST', type: 'number', precision: 6, scale: 2, nullable: true })
  stateDeferIcmsCreditRatePerc: number | null;

  @Column({ name: 'PERCALIQCREDICMSDIFERINTER', type: 'number', precision: 6, scale: 2, nullable: true })
  interstateDeferIcmsCreditRatePerc: number | null;

  @Column({ name: 'PERCALIQEXT', type: 'number', precision: 6, scale: 2, nullable: true })
  extRatePerc: number | null;

  @Column({ name: 'PERCALIQEXTBCR', type: 'number', precision: 6, scale: 2, nullable: true })
  extRateBcrPerc: number | null;

  @Column({ name: 'PERCALIQEXTGUIA', type: 'number', precision: 5, scale: 2, nullable: true })
  guideExtRatePerc: number | null;

  @Column({ name: 'PERCALIQEXTICMANTECIP', type: 'number', precision: 6, scale: 2, nullable: true })
  advIcmsExtRatePerc: number | null;

  @Column({ name: 'PERCALIQINT', type: 'number', precision: 6, scale: 2, nullable: true })
  intRatePerc: number | null;

  @Column({ name: 'PERCALIQINTBCR', type: 'number', precision: 6, scale: 2, nullable: true })
  intRateBcrPerc: number | null;

  @Column({ name: 'PERCALIQINTICMANTECIP', type: 'number', precision: 6, scale: 2, nullable: true })
  advIcmsIntRatePerc: number | null;

  @Column({ name: 'PERCBASEREDENT', type: 'number', precision: 6, scale: 2, nullable: true })
  entryRedBasePerc: number | null;

  @Column({ name: 'PERCBON', type: 'number', precision: 7, scale: 4, nullable: true })
  bonusPerc: number | null;

  @Column({ name: 'PERCBONIFIC', type: 'number', precision: 5, scale: 2, nullable: true })
  bonusPerc2: number | null;

  @Column({ name: 'PERCBONIFICTAB', type: 'number', precision: 5, scale: 2, nullable: true })
  tabBonusPerc: number | null;

  @Column({ name: 'PERCBONIFICVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  saleBonusPerc: number | null;

  @Column({ name: 'PERCBONOUTRAS', type: 'number', precision: 5, scale: 2, nullable: true })
  otherBonusPerc: number | null;

  @Column({ name: 'PERCBONOUTRASTAB', type: 'number', precision: 5, scale: 2, nullable: true })
  otherBonusTabPerc: number | null;

  @Column({ name: 'PERCBONTAB', type: 'number', precision: 7, scale: 4, nullable: true })
  tabBonusPerc2: number | null;

  @Column({ name: 'PERCCARGATRIBMEDIA', type: 'number', precision: 6, scale: 2, nullable: true })
  avgTaxLoadPerc: number | null;

  @Column({ name: 'PERCCARGATRIBMEDIAICMSANTECIP', type: 'number', precision: 6, scale: 2, nullable: true })
  advIcmsAvgTaxLoadPerc: number | null;

  @Column({ name: 'PERCCOMMOT', type: 'number', precision: 5, scale: 2, nullable: true })
  driverCommPerc: number | null;

  @Column({ name: 'PERCCREDICMPRESUMIDO', type: 'number', precision: 5, scale: 2, nullable: true })
  presumedIcmsCreditPerc: number | null;

  @Column({ name: 'PERCCSLL', type: 'number', precision: 6, scale: 2, nullable: true })
  csllPerc: number | null;

  @Column({ name: 'PERCDESC', type: 'number', precision: 5, scale: 2, nullable: true })
  discountPerc: number | null;

  @Column({ name: 'PERCDESC1', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc1: number | null;

  @Column({ name: 'PERCDESC10', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc10: number | null;

  @Column({ name: 'PERCDESC10TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc10Tab: number | null;

  @Column({ name: 'PERCDESC1TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc1Tab: number | null;

  @Column({ name: 'PERCDESC2', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc2: number | null;

  @Column({ name: 'PERCDESC2TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc2Tab: number | null;

  @Column({ name: 'PERCDESC3', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc3: number | null;

  @Column({ name: 'PERCDESC3TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc3Tab: number | null;

  @Column({ name: 'PERCDESC4', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc4: number | null;

  @Column({ name: 'PERCDESC4TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc4Tab: number | null;

  @Column({ name: 'PERCDESC5', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc5: number | null;

  @Column({ name: 'PERCDESC5TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc5Tab: number | null;

  @Column({ name: 'PERCDESC6', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc6: number | null;

  @Column({ name: 'PERCDESC6TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc6Tab: number | null;

  @Column({ name: 'PERCDESC7', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc7: number | null;

  @Column({ name: 'PERCDESC7TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc7Tab: number | null;

  @Column({ name: 'PERCDESC8', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc8: number | null;

  @Column({ name: 'PERCDESC8TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc8Tab: number | null;

  @Column({ name: 'PERCDESC9', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc9: number | null;

  @Column({ name: 'PERCDESC9TAB', type: 'number', precision: 6, scale: 2, nullable: true })
  discountPerc9Tab: number | null;

  @Column({ name: 'PERCDESCCAIXAFECHADA', type: 'number', precision: 5, scale: 2, nullable: true })
  closedBoxDiscountPerc: number | null;

  @Column({ name: 'PERCDESCICMS', type: 'number', precision: 5, scale: 2, nullable: true })
  icmsDiscountPerc: number | null;

  @Column({ name: 'PERCDESCICMSDIF', type: 'number', precision: 5, scale: 2, nullable: true })
  diffIcmsDiscountPerc: number | null;

  @Column({ name: 'PERCDESPADICIONAL', type: 'number', precision: 9, scale: 6, nullable: true })
  additionalExpensePerc: number | null;

  @Column({ name: 'PERCDESPDENTRONF', type: 'number', precision: 5, scale: 2, nullable: true })
  insideNfExpensePerc: number | null;

  @Column({ name: 'PERCDESPFIN', type: 'number', precision: 5, scale: 2, nullable: true })
  finExpensePerc: number | null;

  @Column({ name: 'PERCDESPFORANF', type: 'number', precision: 5, scale: 2, nullable: true })
  outsideNfExpensePerc: number | null;

  @Column({ name: 'PERCDIFALIQUOTAS', type: 'number', precision: 5, scale: 2, nullable: true })
  rateDiffPerc: number | null;

  @Column({ name: 'PERCDIFERENCAKGFRIO', type: 'number', precision: 5, scale: 2, nullable: true })
  coldKgDiffPerc: number | null;

  @Column({ name: 'PERCENTUALCPRB', type: 'number', precision: 6, scale: 2, nullable: true })
  cprbPercentage: number | null;

  @Column({ name: 'PERCENTUALINCIDENCIA', type: 'number', precision: 8, scale: 2, nullable: true })
  incidencePercentage: number | null;

  @Column({ name: 'PERCENTUALISS', type: 'number', precision: 12, scale: 6, nullable: true })
  issPercentage: number | null;

  @Column({ name: 'PERCFECP', type: 'number', precision: 6, scale: 2, nullable: true })
  fecpPerc: number | null;

  @Column({ name: 'PERCFRETE', type: 'number', precision: 5, scale: 2, nullable: true })
  freightPerc: number | null;

  @Column({ name: 'PERCFRETEFOB', type: 'number', precision: 5, scale: 2, nullable: true })
  fobFreightPerc: number | null;

  @Column({ name: 'PERCFUNCEP', type: 'number', precision: 6, scale: 2, nullable: true })
  funcepPerc: number | null;

  @Column({ name: 'PERCICMRED', type: 'number', precision: 5, scale: 2, nullable: true })
  redIcmPerc: number | null;

  @Column({ name: 'PERCICMSBASEICMSANTECIPADO', type: 'number', precision: 6, scale: 2, nullable: true })
  advIcmsBaseIcmsPerc: number | null;

  @Column({ name: 'PERCICMSDESONERACAO', type: 'number', precision: 8, scale: 4, nullable: true })
  exemptionIcmsPerc: number | null;

  @Column({ name: 'PERCICMSDIFERIDO', type: 'number', precision: 8, scale: 4, nullable: true })
  deferredIcmsPerc: number | null;

  @Column({ name: 'PERCICMSFRETEFOBICMSANTECIP', type: 'number', precision: 5, scale: 2, nullable: true })
  advIcmsFobFreightIcmsPerc: number | null;

  @Column({ name: 'PERCICMSFRETEFOBST', type: 'number', precision: 5, scale: 2, nullable: true })
  stFobFreightIcmsPerc: number | null;

  @Column({ name: 'PERCICMSFRETEFOBSTBCR', type: 'number', precision: 5, scale: 2, nullable: true })
  bcrStFobFreightIcmsPerc: number | null;

  @Column({ name: 'PERCIISUSPENSO', type: 'number', precision: 6, scale: 2, nullable: true })
  suspendedIiPerc: number | null;

  @Column({ name: 'PERCIMPORTACAO', type: 'number', precision: 6, scale: 2, nullable: true })
  importPerc: number | null;

  @Column({ name: 'PERCIMPPRODUTORURAL', type: 'number', precision: 6, scale: 2, nullable: true })
  ruralProdTaxPerc: number | null;

  @Column({ name: 'PERCIPI', type: 'number', precision: 6, scale: 2, nullable: true })
  ipiPerc: number | null;

  @Column({ name: 'PERCIPISUSPENSO', type: 'number', precision: 6, scale: 2, nullable: true })
  suspendedIpiPerc: number | null;

  @Column({ name: 'PERCIPIVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  salesIpiPerc: number | null;

  @Column({ name: 'PERCIPIVENDATAB', type: 'number', precision: 5, scale: 2, nullable: true })
  salesIpiTabPerc: number | null;

  @Column({ name: 'PERCIVA', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaPerc: number | null;

  @Column({ name: 'PERCIVA2', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaPerc2: number | null;

  @Column({ name: 'PERCIVABCR', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaBcrPerc: number | null;

  @Column({ name: 'PERCIVAICMANTECIP', type: 'number', precision: 8, scale: 4, nullable: true })
  advIcmIvaPerc: number | null;

  @Column({ name: 'PERCMVAORIG', type: 'number', precision: 8, scale: 4, nullable: true })
  originalMvaPerc: number | null;

  @Column({ name: 'PERCMVAORIGICMSANTECIP', type: 'number', precision: 8, scale: 4, nullable: true })
  advIcmsOriginalMvaPerc: number | null;

  @Column({ name: 'PERCOFINS', type: 'number', precision: 6, scale: 2, nullable: true })
  cofinsPerc: number | null;

  @Column({ name: 'PERCOFINSCALCDI', type: 'number', precision: 6, scale: 2, nullable: true })
  diCalcCofinsPerc: number | null;

  @Column({ name: 'PERCOFINSIMP', type: 'number', precision: 6, scale: 2, nullable: true })
  impCofinsPerc: number | null;

  @Column({ name: 'PERCOFINS_SERVICO', type: 'number', precision: 18, scale: 6, nullable: true })
  serviceCofinsPerc: number | null;

  @Column({ name: 'PERCOUTRASDESP', type: 'number', precision: 5, scale: 2, nullable: true })
  otherExpPerc: number | null;

  @Column({ name: 'PERCPERDAKG', type: 'number', precision: 14, scale: 6, nullable: true })
  kgLossPerc: number | null;

  @Column({ name: 'PERCPRODEIC', type: 'number', precision: 8, scale: 4, nullable: true })
  prodeicPerc: number | null;

  @Column({ name: 'PERCQUEBRAPRODUCAO', type: 'number', precision: 6, scale: 2, nullable: true })
  productionBreakPerc: number | null;

  @Column({ name: 'PERCREDICMS', type: 'number', precision: 6, scale: 2, nullable: true })
  icmsCreditPerc: number | null;

  @Column({ name: 'PERCREDPFAB', type: 'number', precision: 5, scale: 2, nullable: true })
  pFabCreditPerc: number | null;

  @Column({ name: 'PERCREDPMC', type: 'number', precision: 5, scale: 2, nullable: true })
  pmcCreditPerc: number | null;

  @Column({ name: 'PERCREDPMPF', type: 'number', precision: 5, scale: 2, nullable: true })
  pmpfCreditPerc: number | null;

  @Column({ name: 'PERCSEGURO', type: 'number', precision: 10, scale: 4, nullable: true })
  insurancePerc: number | null;

  @Column({ name: 'PERCST', type: 'number', precision: 5, scale: 2, nullable: true })
  stPerc: number | null;

  @Column({ name: 'PERCSUFRAMA', type: 'number', precision: 6, scale: 2, nullable: true })
  suframaPerc: number | null;

  @Column({ name: 'PERCTOLERANCIAVAL', type: 'number', precision: 5, scale: 2, nullable: true })
  valTolerancePerc: number | null;

  @Column({ name: 'PERCVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  salesPerc: number | null;

  @Column({ name: 'PERICM', type: 'number', precision: 5, scale: 2, nullable: true })
  icmPerc: number | null;

  @Column({ name: 'PERICMFRETE', type: 'number', precision: 5, scale: 2, nullable: true })
  freightIcmPerc: number | null;

  @Column({ name: 'PERICMSANTECIPADO', type: 'number', precision: 5, scale: 2, nullable: true })
  advIcmsPerc: number | null;

  @Column({ name: 'PERINDENIZ', type: 'number', precision: 5, scale: 2, nullable: true })
  indemnityPerc: number | null;

  @Column({ name: 'PERMITEMULTIPLICACAOPDV', type: 'varchar2', length: 1, nullable: true })
  allowPdvMultiplication: string | null;

  @Column({ name: 'PERMITEPRODUCAO', type: 'varchar2', length: 1, nullable: true })
  allowProduction: string | null;

  @Column({ name: 'PERMITIRBROKERTV5', type: 'varchar2', length: 1, nullable: true })
  allowBrokerTv5: string | null;

  @Column({ name: 'PERPIS', type: 'number', precision: 6, scale: 2, nullable: true })
  pisPerc: number | null;

  @Column({ name: 'PERPISCALCDI', type: 'number', precision: 6, scale: 2, nullable: true })
  diCalcPisPerc: number | null;

  @Column({ name: 'PERPISIMP', type: 'number', precision: 6, scale: 2, nullable: true })
  impPisPerc: number | null;

  @Column({ name: 'PERPIS_SERVICO', type: 'number', precision: 18, scale: 6, nullable: true })
  servicePisPerc: number | null;

  @Column({ name: 'PESOBRUTO', type: 'number', precision: 12, scale: 6, nullable: true })
  grossWeight: number | null;

  @Column({ name: 'PESOBRUTOFRETE', type: 'number', precision: 12, scale: 6, nullable: true })
  freightGrossWeight: number | null;

  @Column({ name: 'PESOBRUTOMASTER', type: 'number', precision: 12, scale: 6, nullable: true })
  masterGrossWeight: number | null;

  @Column({ name: 'PESOEMBALAGEM', type: 'number', precision: 12, scale: 6, nullable: true })
  packagingWeight: number | null;

  @Column({ name: 'PESOLIQ', type: 'number', precision: 12, scale: 6, nullable: true })
  netWeight: number | null;

  @Column({ name: 'PESOLIQDI', type: 'number', precision: 12, scale: 6, nullable: true })
  diNetWeight: number | null;

  @Column({ name: 'PESOLIQMASTER', type: 'number', precision: 12, scale: 6, nullable: true })
  masterNetWeight: number | null;

  @Column({ name: 'PESOMAXIMO', type: 'number', precision: 12, scale: 6, nullable: true })
  maxWeight: number | null;

  @Column({ name: 'PESOMINIMO', type: 'number', precision: 12, scale: 6, nullable: true })
  minWeight: number | null;

  @Column({ name: 'PESOPALETE', type: 'number', precision: 10, scale: 4, nullable: true })
  palletWeight: number | null;

  @Column({ name: 'PESOPECA', type: 'number', precision: 12, scale: 6, nullable: true })
  pieceWeight: number | null;

  @Column({ name: 'PESOVARIAVEL', type: 'varchar2', length: 1, nullable: true })
  variableWeight: string | null;

  @Column({ name: 'PESQPATOGENOS', type: 'varchar2', length: 100, nullable: true })
  pathogenSearch: string | null;

  @Column({ name: 'PGLI', type: 'number', precision: 12, scale: 6, nullable: true })
  pgli: number | null;

  @Column({ name: 'PGLN', type: 'number', precision: 12, scale: 6, nullable: true })
  pgln: number | null;

  @Column({ name: 'PGLP', type: 'number', precision: 12, scale: 6, nullable: true })
  pglp: number | null;

  @Column({ name: 'PGNI', type: 'number', precision: 12, scale: 6, nullable: true })
  pgni: number | null;

  @Column({ name: 'PGNN', type: 'number', precision: 12, scale: 6, nullable: true })
  pgnn: number | null;

  @Column({ name: 'PH', type: 'varchar2', length: 100, nullable: true })
  ph: string | null;

  @Column({ name: 'PISCOFINSRETIDO', type: 'varchar2', length: 1, nullable: true })
  retainedPisCofins: string | null;

  @Column({ name: 'PISRETIDO', type: 'varchar2', length: 1, nullable: true })
  retainedPis: string | null;

  @Column({ name: 'PMPFMEDICAMENTO', type: 'number', precision: 18, scale: 6, nullable: true })
  medicinePmpf: number | null;

  @Column({ name: 'PONTOREPOSICAO', type: 'number', precision: 10, scale: 2, nullable: true })
  reorderPoint: number | null;

  @Column({ name: 'PONTOREPOSICAOAL', type: 'number', precision: 10, scale: 2, nullable: true })
  reorderPointAl: number | null;

  @Column({ name: 'PONTOREPOSICAOCX', type: 'number', precision: 10, scale: 2, nullable: true })
  reorderPointBox: number | null;

  @Column({ name: 'PONTOREPOSICAOPA', type: 'number', precision: 10, scale: 2, nullable: true })
  reorderPointPa: number | null;

  @Column({ name: 'PRAZO', type: 'number', precision: 4, scale: 0, nullable: true })
  term: number | null;

  @Column({ name: 'PRAZOENTR', type: 'number', precision: 4, scale: 0, nullable: true })
  deliveryTerm: number | null;

  @Column({ name: 'PRAZOEXPURGO', type: 'number', precision: 5, scale: 0, nullable: true })
  purgeTerm: number | null;

  @Column({ name: 'PRAZOGARANTIA', type: 'number', precision: 4, scale: 0, nullable: true })
  warrantyTerm: number | null;

  @Column({ name: 'PRAZOMAXINDENIZACAO', type: 'number', precision: 10, scale: 0, nullable: true })
  maxIndemnityTerm: number | null;

  @Column({ name: 'PRAZOMAXVALIDADE', type: 'number', precision: 5, scale: 0, nullable: true })
  maxValidityTerm: number | null;

  @Column({ name: 'PRAZOMAXVENDA', type: 'number', precision: 5, scale: 0, nullable: true })
  maxSaleTerm: number | null;

  @Column({ name: 'PRAZOMEDIOPRODUCAO', type: 'number', precision: 8, scale: 2, nullable: true })
  avgProductionTerm: number | null;

  @Column({ name: 'PRAZOMEDIOVENDA', type: 'number', precision: 4, scale: 0, nullable: true })
  avgSaleTerm: number | null;

  @Column({ name: 'PRAZOMINVALIDADE', type: 'number', precision: 4, scale: 0, nullable: true })
  minValidityTerm: number | null;

  @Column({ name: 'PRAZOVAL', type: 'number', precision: 5, scale: 0, nullable: true })
  validityTerm: number | null;

  @Column({ name: 'PRECIFICACAOAUTOMATICA', type: 'varchar2', length: 1, nullable: true })
  autoPricing: string | null;

  @Column({ name: 'PRECIFICESTRANGEIRA', type: 'varchar2', length: 1, nullable: true })
  foreignPricing: string | null;

  @Column({ name: 'PRECOFABRICA', type: 'number', precision: 18, scale: 6, nullable: true })
  factoryPrice: number | null;

  @Column({ name: 'PRECOFIXO', type: 'varchar2', length: 1, nullable: true })
  fixedPrice: string | null;

  @Column({ name: 'PRECOMAXCONSUM', type: 'number', precision: 18, scale: 6, nullable: true })
  maxConsumerPrice: number | null;

  @Column({ name: 'PRECOMAXCONSUMTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  tabMaxConsumerPrice: number | null;

  @Column({ name: 'PRECOMAXCONSUMTABANT', type: 'number', precision: 18, scale: 6, nullable: true })
  prevTabMaxConsumerPrice: number | null;

  @Column({ name: 'PRECOMAXCONSUMZFM', type: 'number', precision: 18, scale: 6, nullable: true })
  zfmMaxConsumerPrice: number | null;

  @Column({ name: 'PRECOMAXCONSUMZFMANT', type: 'number', precision: 18, scale: 6, nullable: true })
  prevZfmMaxConsumerPrice: number | null;

  @Column({ name: 'PRECOMAXCONSUMZFMTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  tabZfmMaxConsumerPrice: number | null;

  @Column({ name: 'PREDIO', type: 'varchar2', length: 3, nullable: true })
  building: string | null;

  @Column({ name: 'PREDIOCX', type: 'varchar2', length: 3, nullable: true })
  buildingBox: string | null;

  @Column({ name: 'PREDOMINANCIA', type: 'varchar2', length: 20, nullable: true })
  predominance: string | null;

  @Column({ name: 'PREFIXOLOTE', type: 'varchar2', length: 20, nullable: true })
  batchPrefix: string | null;

  @Column({ name: 'PRINCIPIOATIVO', type: 'varchar2', length: 200, nullable: true })
  activePrinciple: string | null;

  @Column({ name: 'PRODUSAENGRADADO', type: 'varchar2', length: 1, nullable: true })
  prodUseCrate: string | null;

  @Column({ name: 'PROTEINA', type: 'varchar2', length: 100, nullable: true })
  protein: string | null;

  @Column({ name: 'PROXNUMLOTE', type: 'varchar2', length: 20, nullable: true })
  nextBatchNum: string | null;

  @Column({ name: 'PSICOTROPICO', type: 'varchar2', length: 1, nullable: true })
  psychotropic: string | null;

  @Column({ name: 'PTABELAFORNEC', type: 'number', precision: 18, scale: 6, nullable: true })
  supplierPriceTable: number | null;

  @Column({ name: 'PVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice: number | null;

  @Column({ name: 'QTDEMAXSEPARPEDIDO', type: 'number', precision: 6, scale: 0, nullable: true })
  maxSepQtyOrder: number | null;

  @Column({ name: 'QTDMAXSEPARARPEDIDO', type: 'number', precision: 6, scale: 0, nullable: true })
  maxSepQtyOrder2: number | null;

  @Column({ name: 'QTMAXGONDULA', type: 'number', precision: 10, scale: 2, nullable: true })
  maxGondolaQty: number | null;

  @Column({ name: 'QTMETROS', type: 'number', precision: 8, scale: 2, nullable: true })
  metersQty: number | null;

  @Column({ name: 'QTMINGONDULA', type: 'number', precision: 10, scale: 2, nullable: true })
  minGondolaQty: number | null;

  @Column({ name: 'QTMINIMAATACADO', type: 'number', precision: 12, scale: 6, nullable: true })
  minWholesaleQty: number | null;

  @Column({ name: 'QTMINIMAATACADOF', type: 'number', precision: 12, scale: 6, nullable: true })
  minWholesaleQtyF: number | null;

  @Column({ name: 'QTMINPRODUZIR', type: 'number', precision: 16, scale: 6, nullable: true })
  minProduceQty: number | null;

  @Column({ name: 'QTMINSUGCOMPRA', type: 'number', precision: 12, scale: 6, nullable: true })
  minSugPurchaseQty: number | null;

  @Column({ name: 'QTPONTOPEDIDO', type: 'number', precision: 12, scale: 6, nullable: true })
  orderPointQty: number | null;

  @Column({ name: 'QTPRODUZIR', type: 'number', precision: 16, scale: 6, nullable: true })
  produceQty: number | null;

  @Column({ name: 'QTPULMAOREGULADOR', type: 'number', precision: 12, scale: 6, nullable: true })
  regulatorBufferQty: number | null;

  @Column({ name: 'QTTOTPAL', type: 'number', precision: 12, scale: 6, nullable: true })
  totalPalletQty: number | null;

  @Column({ name: 'QTTOTPALFRAC', type: 'number', precision: 12, scale: 6, nullable: true })
  totalFracPalletQty: number | null;

  @Column({ name: 'QTUNIT', type: 'number', precision: 8, scale: 0, nullable: true })
  unitQty: number | null;

  @Column({ name: 'QTUNITCT', type: 'number', precision: 8, scale: 0, nullable: true })
  unitQtyCt: number | null;

  @Column({ name: 'QTUNITCX', type: 'number', precision: 8, scale: 0, nullable: true })
  unitQtyBox: number | null;

  @Column({ name: 'RECMINARM', type: 'number', precision: 3, scale: 0, nullable: true })
  minStorageRec: number | null;

  @Column({ name: 'REDBASEALIQEXT', type: 'number', precision: 6, scale: 2, nullable: true })
  extRateBaseRed: number | null;

  @Column({ name: 'REDBASEALIQEXTBCR', type: 'number', precision: 6, scale: 2, nullable: true })
  extRateBaseRedBcr: number | null;

  @Column({ name: 'REDBASEALIQEXTICMSANTECIP', type: 'number', precision: 6, scale: 2, nullable: true })
  advIcmsExtRateBaseRed: number | null;

  @Column({ name: 'REDBASEIVA', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaBaseRed: number | null;

  @Column({ name: 'REDBASEIVABCR', type: 'number', precision: 8, scale: 4, nullable: true })
  ivaBaseRedBcr: number | null;

  @Column({ name: 'REDBASEIVAICMSANTECIP', type: 'number', precision: 8, scale: 4, nullable: true })
  advIcmsIvaBaseRed: number | null;

  @Column({ name: 'REGISTROMSMED', type: 'varchar2', length: 100, nullable: true })
  msMedRegistry: string | null;

  @Column({ name: 'REGISTROPECA', type: 'number', precision: 12, scale: 2, nullable: true })
  partRegistry: number | null;

  @Column({ name: 'REGMS', type: 'varchar2', length: 20, nullable: true })
  regMs: string | null;

  @Column({ name: 'RESTRICAOBLOCADO', type: 'varchar2', length: 1, nullable: true })
  blockedRestriction: string | null;

  @Column({ name: 'RESTRICAOTRANSP', type: 'varchar2', length: 1, nullable: true })
  transportRestriction: string | null;

  @Column({ name: 'RESTRINGECOTACAO', type: 'varchar2', length: 1, nullable: true })
  restrictQuotation: string | null;

  @Column({ name: 'RETINOICO', type: 'varchar2', length: 1, nullable: true })
  retinoic: string | null;

  @Column({ name: 'REVENDA', type: 'varchar2', length: 1, nullable: true })
  resale: string | null;

  @Column({ name: 'ROTINALANC', type: 'number', precision: 8, scale: 0, nullable: true })
  launchRoutine: number | null;

  @Column({ name: 'RUA', type: 'number', precision: 4, scale: 0, nullable: true })
  street: number | null;

  @Column({ name: 'RUA2', type: 'number', precision: 4, scale: 0, nullable: true })
  street2: number | null;

  @Column({ name: 'RUACT', type: 'number', precision: 4, scale: 0, nullable: true })
  streetCt: number | null;

  @Column({ name: 'RUACX', type: 'number', precision: 4, scale: 0, nullable: true })
  streetBox: number | null;

  @Column({ name: 'SALMONELA', type: 'varchar2', length: 100, nullable: true })
  salmonella: string | null;

  @Column({ name: 'SEQPAGINA', type: 'number', precision: 4, scale: 0, nullable: true })
  pageSeq: number | null;

  @Column({ name: 'SEQTABPRECO', type: 'number', precision: 3, scale: 0, nullable: true })
  priceTabSeq: number | null;

  @Column({ name: 'SIMPRO', type: 'varchar2', length: 1, nullable: true })
  simpro: string | null;

  @Column({ name: 'SITTRIBUT', type: 'number', precision: 4, scale: 0, nullable: true })
  taxSit: number | null;

  @Column({ name: 'SITTRIBUTBENEFICENTRADA', type: 'number', precision: 4, scale: 0, nullable: true })
  entryBenefitTaxSit: number | null;

  @Column({ name: 'SITTRIBUTBENEFICRETORNO', type: 'number', precision: 4, scale: 0, nullable: true })
  returnBenefitTaxSit: number | null;

  @Column({ name: 'SITTRIBUTBENEFICSAIDA', type: 'number', precision: 4, scale: 0, nullable: true })
  exitBenefitTaxSit: number | null;

  @Column({ name: 'SITTRIBUTDEV', type: 'number', precision: 4, scale: 0, nullable: true })
  devTaxSit: number | null;

  @Column({ name: 'SITTRIBUTDEVFORNEC', type: 'number', precision: 4, scale: 0, nullable: true })
  supplierDevTaxSit: number | null;

  @Column({ name: 'SITTRIBUTENT', type: 'number', precision: 4, scale: 0, nullable: true })
  entryTaxSit: number | null;

  @Column({ name: 'SITTRIBUTENTFUT', type: 'number', precision: 4, scale: 0, nullable: true })
  futureEntryTaxSit: number | null;

  @Column({ name: 'SITTRIBUT_SERVICO', type: 'number', precision: 4, scale: 0, nullable: true })
  serviceTaxSit: number | null;

  @Column({ name: 'SOMENTETV3', type: 'varchar2', length: 1, nullable: true })
  onlyTv3: string | null;

  @Column({ name: 'STATUS', type: 'varchar2', length: 1, nullable: true })
  status: string | null;

  @Column({ name: 'STATUSSUCATA', type: 'varchar2', length: 1, nullable: true })
  scrapStatus: string | null;

  @Column({ name: 'SUBSTANCIA', type: 'varchar2', length: 40, nullable: true })
  substance: string | null;

  @Column({ name: 'SUBTITULOECOMMERCE', type: 'varchar2', length: 600, nullable: true })
  ecommerceSubtitle: string | null;

  @Column({ name: 'SUGVENDA', type: 'varchar2', length: 1, nullable: true })
  sugSale: string | null;

  @Column({ name: 'TAMANHOLOTEFAB', type: 'number', precision: 16, scale: 6, nullable: true })
  manufBatchSize: number | null;

  @Column({ name: 'TAMANHOPECA', type: 'number', precision: 12, scale: 6, nullable: true })
  pieceSize: number | null;

  @Column({ name: 'TARAPORPECA', type: 'varchar2', length: 1, nullable: true })
  tarePerPiece: string | null;

  @Column({ name: 'TEMPOSERVICO', type: 'number', precision: 5, scale: 1, nullable: true })
  serviceTime: number | null;

  @Column({ name: 'TEMREPOS', type: 'varchar2', length: 1, nullable: true })
  hasRepo: string | null;

  @Column({ name: 'TIPOALTURAPALETE', type: 'varchar2', length: 1, nullable: true })
  palletHeightType: string | null;

  @Column({ name: 'TIPOARM', type: 'varchar2', length: 1, nullable: true })
  storageType: string | null;

  @Column({ name: 'TIPOCALCST', type: 'varchar2', length: 1, nullable: true })
  stCalcType: string | null;

  @Column({ name: 'TIPOCARGA', type: 'varchar2', length: 1, nullable: true })
  loadType: string | null;

  @Column({ name: 'TIPOCOMISSAO', type: 'varchar2', length: 1, nullable: true })
  commissionType: string | null;

  @Column({ name: 'TIPOCUSTOTRANSF', type: 'varchar2', length: 1, nullable: true })
  transferCostType: string | null;

  @Column({ name: 'TIPODESCARGA', type: 'varchar2', length: 1, nullable: true })
  unloadingType: string | null;

  @Column({ name: 'TIPOEMBALAGE', type: 'varchar2', length: 1, nullable: true })
  packagingType: string | null;

  @Column({ name: 'TIPOEMBALAGEMNESTLE', type: 'varchar2', length: 1, nullable: true })
  nestlePackagingType: string | null;

  @Column({ name: 'TIPOEMBARQUEIMP', type: 'varchar2', length: 1, nullable: true })
  impShipmentType: string | null;

  @Column({ name: 'TIPOESTOQUE', type: 'number', precision: 2, scale: 0, nullable: true })
  stockType: number | null;

  @Column({ name: 'TIPOINTEGRACAOB2B', type: 'varchar2', length: 2, nullable: true })
  b2bIntegType: string | null;

  @Column({ name: 'TIPOMEDICAMENTO', type: 'varchar2', length: 1, nullable: true })
  medicineType: string | null;

  @Column({ name: 'TIPOMERC', type: 'varchar2', length: 2, nullable: true })
  goodsType: string | null;

  @Column({ name: 'TIPOMP', type: 'varchar2', length: 1, nullable: true })
  rawMaterialType: string | null;

  @Column({ name: 'TIPONORMA', type: 'varchar2', length: 1, nullable: true })
  normType: string | null;

  @Column({ name: 'TIPOPAL', type: 'varchar2', length: 2, nullable: true })
  palletType: string | null;

  @Column({ name: 'TIPOPALPUL', type: 'varchar2', length: 2, nullable: true })
  pulPalletType: string | null;

  @Column({ name: 'TIPOPISCOFINSRETIDO', type: 'varchar2', length: 1, nullable: true })
  retainedPisCofinsType: string | null;

  @Column({ name: 'TIPOPROD', type: 'varchar2', length: 1, nullable: true })
  prodType: string | null;

  @Column({ name: 'TIPORESTRICAO', type: 'varchar2', length: 2, nullable: true })
  restrictionType: string | null;

  @Column({ name: 'TIPORESTRICAOMED', type: 'number', precision: 10, scale: 0, nullable: true })
  medRestrictionType: number | null;

  @Column({ name: 'TIPOSERVICOVINCULADORECEITA', type: 'varchar2', length: 100, nullable: true })
  revenueLinkedServiceType: string | null;

  @Column({ name: 'TIPOSUGCOMPRA', type: 'varchar2', length: 1, nullable: true })
  sugPurchaseType: string | null;

  @Column({ name: 'TIPOTRIBUTMEDIC', type: 'number', precision: 1, scale: 0, nullable: true })
  medTaxType: number | null;

  @Column({ name: 'TIPOVOLUMEDESCARGA', type: 'varchar2', length: 1, nullable: true })
  unloadingVolumeType: string | null;

  @Column({ name: 'TITULOECOMMERCE', type: 'varchar2', length: 150, nullable: true })
  ecommerceTitle: string | null;

  @Column({ name: 'TOTDEFEITO', type: 'varchar2', length: 100, nullable: true })
  totalDefect: string | null;

  @Column({ name: 'TRIBFEDERAL', type: 'varchar2', length: 1, nullable: true })
  federalTax: string | null;

  @Column({ name: 'UMIDADE', type: 'varchar2', length: 100, nullable: true })
  humidity: string | null;

  @Column({ name: 'UMIDADEANALISE', type: 'number', precision: 8, scale: 2, nullable: true })
  humidityAnalysis: number | null;

  @Column({ name: 'UNDPOREMBALAGEM', type: 'number', precision: 12, scale: 6, nullable: true })
  unitPerPacking: number | null;

  @Column({ name: 'UNIDADE', type: 'varchar2', length: 4, nullable: true })
  unit: string | null;

  @Column({ name: 'UNIDADECT', type: 'varchar2', length: 4, nullable: true })
  unitCt: string | null;

  @Column({ name: 'UNIDADEMASTER', type: 'varchar2', length: 4, nullable: true })
  masterUnit: string | null;

  @Column({ name: 'UNIDADEPADRAO', type: 'varchar2', length: 4, nullable: true })
  standardUnit: string | null;

  @Column({ name: 'UNIDADETRIB', type: 'varchar2', length: 4, nullable: true })
  taxUnit: string | null;

  @Column({ name: 'UNIDADETRIBEX', type: 'varchar2', length: 4, nullable: true })
  taxUnitEx: string | null;

  @Column({ name: 'UNIFORMIDADE', type: 'varchar2', length: 100, nullable: true })
  uniformity: string | null;

  @Column({ name: 'USAALIQCREDICMSDIFER', type: 'varchar2', length: 1, nullable: true })
  useDeferIcmsCreditRate: string | null;

  @Column({ name: 'USABASEREDICMSPRESUMIDO', type: 'varchar2', length: 1, nullable: true })
  usePresumedIcmsRedBase: string | null;

  @Column({ name: 'USABASESTNOFCP', type: 'varchar2', length: 1, nullable: true })
  useStBaseInFcp: string | null;

  @Column({ name: 'USACLASSIFICACAO', type: 'varchar2', length: 1, nullable: true })
  useClassification: string | null;

  @Column({ name: 'USACODAGREGACAO', type: 'varchar2', length: 1, nullable: true })
  useAggregationCode: string | null;

  @Column({ name: 'USACROSS', type: 'varchar2', length: 1, nullable: true })
  useCross: string | null;

  @Column({ name: 'USAECOMMERCEUNILEVER', type: 'varchar2', length: 1, nullable: true })
  useUnileverEcommerce: string | null;

  @Column({ name: 'USAICMSDESONERACAO', type: 'varchar2', length: 1, nullable: true })
  useIcmsExemption: string | null;

  @Column({ name: 'USALICENCAIMPORTACAO', type: 'varchar2', length: 1, nullable: true })
  useImportLicense: string | null;

  @Column({ name: 'USAMAIORVALORPARACALCULOICMS', type: 'varchar2', length: 1, nullable: true })
  useHigherValueForIcmsCalc: string | null;

  @Column({ name: 'USAMAIORVALORPARACALCULOIPI', type: 'varchar2', length: 1, nullable: true })
  useHigherValueForIpiCalc: string | null;

  @Column({ name: 'USAPFABBASEST', type: 'varchar2', length: 1, nullable: true })
  usePfabStBase: string | null;

  @Column({ name: 'USAPISCOFINSLIT', type: 'varchar2', length: 1, nullable: true })
  usePisCofinsLit: string | null;

  @Column({ name: 'USAPISCOFINSLITIMP', type: 'varchar2', length: 1, nullable: true })
  usePisCofinsLitImp: string | null;

  @Column({ name: 'USAPMCBASEST', type: 'varchar2', length: 1, nullable: true })
  usePmcStBase: string | null;

  @Column({ name: 'USAPMPFBASEST', type: 'varchar2', length: 1, nullable: true })
  usePmpfStBase: string | null;

  @Column({ name: 'USAPULMAOREGULADOR', type: 'varchar2', length: 1, nullable: true })
  useRegulatorBuffer: string | null;

  @Column({ name: 'USAWMS', type: 'varchar2', length: 1, nullable: true })
  useWms: string | null;

  @Column({ name: 'USOPROLONGADOSNGPC', type: 'varchar2', length: 1, nullable: true })
  sngpcProlongedUse: string | null;

  @Column({ name: 'UTILIZACREDREDPISCOFINS', type: 'varchar2', length: 1, nullable: true })
  useRedPisCofinsCredit: string | null;

  @Column({ name: 'UTILIZAINTEGRACAOKIBON', type: 'varchar2', length: 1, nullable: true })
  useKibonIntegration: string | null;

  @Column({ name: 'UTILIZAMULTIPLICADOR', type: 'varchar2', length: 1, nullable: true })
  useMultiplier: string | null;

  @Column({ name: 'UTILIZAPRECOFABRICA', type: 'varchar2', length: 1, nullable: true })
  useFactoryPrice: string | null;

  @Column({ name: 'UTILIZAPRECOMAXCONSUMIDOR', type: 'varchar2', length: 1, nullable: true })
  useMaxConsumerPrice: string | null;

  @Column({ name: 'UTILIZARVASILHAME', type: 'varchar2', length: 1, nullable: true })
  useContainer: string | null;

  @Column({ name: 'UTILIZASELO', type: 'varchar2', length: 1, nullable: true })
  useSeal: string | null;

  @Column({ name: 'VALIDARLOTE', type: 'varchar2', length: 1, nullable: true })
  validateBatch: string | null;

  @Column({ name: 'VALORCOFINSLITRAGEM', type: 'number', precision: 18, scale: 6, nullable: true })
  cofinsLiterageValue: number | null;

  @Column({ name: 'VALORPISLITRAGEM', type: 'number', precision: 18, scale: 6, nullable: true })
  pisLiterageValue: number | null;

  @Column({ name: 'VALORTARAPORPECA', type: 'number', precision: 12, scale: 6, nullable: true })
  tarePerPieceValue: number | null;

  @Column({ name: 'VELOCIDADEESP', type: 'number', precision: 12, scale: 6, nullable: true })
  speedEsp: number | null;

  @Column({ name: 'VELOCIDADEOPERACIONAL', type: 'number', precision: 12, scale: 6, nullable: true })
  operationalSpeed: number | null;

  @Column({ name: 'VENDADIRETA', type: 'varchar2', length: 1, nullable: true })
  directSale: string | null;

  @Column({ name: 'VERBADINPORPERC', type: 'varchar2', length: 1, nullable: true })
  moneyAllowanceByPerc: string | null;

  @Column({ name: 'VERIFCDESCCAIXAFECHADA', type: 'varchar2', length: 1, nullable: true })
  checkClosedBoxDiscount: string | null;

  @Column({ name: 'VERIFCRAMOATIVCALCST', type: 'varchar2', length: 1, nullable: true })
  checkActivityBranchStCalc: string | null;

  @Column({ name: 'VERSANALISE', type: 'varchar2', length: 100, nullable: true })
  analysisVersion: string | null;

  @Column({ name: 'VLADICIONALBCICMSANTECIP', type: 'number', precision: 18, scale: 6, nullable: true })
  advIcmsBcAddValue: number | null;

  @Column({ name: 'VLADICIONALBCST', type: 'number', precision: 18, scale: 6, nullable: true })
  bcstAddValue: number | null;

  @Column({ name: 'VLADICIONALBCSTBCR', type: 'number', precision: 18, scale: 6, nullable: true })
  bcstBcrAddValue: number | null;

  @Column({ name: 'VLBONIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  bonusValue: number | null;

  @Column({ name: 'VLBONIFICTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  tabBonusValue: number | null;

  @Column({ name: 'VLCALORICO', type: 'varchar2', length: 100, nullable: true })
  caloricValue: string | null;

  @Column({ name: 'VLCOFINSLIT', type: 'number', precision: 18, scale: 6, nullable: true })
  cofinsLitValue: number | null;

  @Column({ name: 'VLCOFINSLITIMP', type: 'number', precision: 18, scale: 6, nullable: true })
  impCofinsLitValue: number | null;

  @Column({ name: 'VLDIFALIQUOTAS', type: 'number', precision: 18, scale: 6, nullable: true })
  rateDiffValue: number | null;

  @Column({ name: 'VLFRETE', type: 'number', precision: 18, scale: 6, nullable: true })
  freightValue: number | null;

  @Column({ name: 'VLFRETEPORKG', type: 'number', precision: 18, scale: 6, nullable: true })
  freightPerKgValue: number | null;

  @Column({ name: 'VLICMSANTECIPADO', type: 'number', precision: 18, scale: 6, nullable: true })
  advIcmsValue: number | null;

  @Column({ name: 'VLIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiValue: number | null;

  @Column({ name: 'VLIPILITRAGEM', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiLiterageValue: number | null;

  @Column({ name: 'VLIPIPAUTATV10', type: 'number', precision: 18, scale: 6, nullable: true })
  tv10IpiPautaValue: number | null;

  @Column({ name: 'VLIPIPAUTATV10TAB', type: 'number', precision: 18, scale: 6, nullable: true })
  tv10TabIpiPautaValue: number | null;

  @Column({ name: 'VLIPIPESO', type: 'number', precision: 18, scale: 6, nullable: true })
  weightIpiValue: number | null;

  @Column({ name: 'VLIPIPORKG', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiPerKgValue: number | null;

  @Column({ name: 'VLIPIPORKGVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  salesIpiPerKgValue: number | null;

  @Column({ name: 'VLIPIPORKGVENDATAB', type: 'number', precision: 18, scale: 6, nullable: true })
  salesTabIpiPerKgValue: number | null;

  @Column({ name: 'VLIPISUSPENSO', type: 'number', precision: 18, scale: 6, nullable: true })
  suspendedIpiValue: number | null;

  @Column({ name: 'VLMAODEOBRA', type: 'number', precision: 18, scale: 6, nullable: true })
  laborValue: number | null;

  @Column({ name: 'VLPAUTA', type: 'number', precision: 18, scale: 6, nullable: true })
  pautaValue: number | null;

  @Column({ name: 'VLPAUTABCR', type: 'number', precision: 18, scale: 6, nullable: true })
  pautaBcrValue: number | null;

  @Column({ name: 'VLPAUTAICMS', type: 'number', precision: 18, scale: 6, nullable: true })
  icmsPautaValue: number | null;

  @Column({ name: 'VLPAUTAICMSANTEC', type: 'number', precision: 18, scale: 6, nullable: true })
  advIcmsPautaValue: number | null;

  @Column({ name: 'VLPAUTAIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiPautaValue: number | null;

  @Column({ name: 'VLPAUTAIPIVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  salesIpiPautaValue: number | null;

  @Column({ name: 'VLPAUTAIPIVENDATAB', type: 'number', precision: 18, scale: 6, nullable: true })
  salesTabIpiPautaValue: number | null;

  @Column({ name: 'VLPAUTAPISCOFINS', type: 'number', precision: 18, scale: 6, nullable: true })
  pisCofinsPautaValue: number | null;

  @Column({ name: 'VLPAUTAPISCOFINSIMP', type: 'number', precision: 18, scale: 6, nullable: true })
  impPisCofinsPautaValue: number | null;

  @Column({ name: 'VLPISLIT', type: 'number', precision: 18, scale: 6, nullable: true })
  pisLitValue: number | null;

  @Column({ name: 'VLPISLITIMP', type: 'number', precision: 18, scale: 6, nullable: true })
  impPisLitValue: number | null;

  @Column({ name: 'VLRAPLICINT', type: 'number', precision: 18, scale: 6, nullable: true })
  intApplicValue: number | null;

  @Column({ name: 'VLVENDATEMP', type: 'number', precision: 18, scale: 6, nullable: true })
  tempSaleValue: number | null;

  @Column({ name: 'VOLPESMED', type: 'varchar2', length: 100, nullable: true })
  avgWeightVol: string | null;

  @Column({ name: 'VOLUME', type: 'number', precision: 2, scale: 0, nullable: true })
  volume: number | null;

  @Column({ name: 'VOLUMEARM', type: 'number', precision: 10, scale: 6, nullable: true })
  storageVolume: number | null;

  @Column({ name: 'VOLUMEREC', type: 'number', precision: 3, scale: 0, nullable: true })
  recVolume: number | null;

  @Column({ name: 'VPART', type: 'number', precision: 14, scale: 2, nullable: true })
  partValue: number | null;

}
