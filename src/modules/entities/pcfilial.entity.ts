import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'PCFILIAL'
})
export class PcfilialEntity {
  @PrimaryColumn({ name: 'CODIGO', type: 'varchar2', length: 2, })
  codeBranch?: string;

  @Column({ name: 'CGC', type: 'varchar2', length: 14, nullable: true, })
  cnpj?: string | null;

  @Column({ name: 'RAZAOSOCIAL', type: 'varchar2', length: 40, nullable: true })
  corporateName?: string | null;

  @Column({ name: 'FANTASIA', type: 'varchar2', length: 25, nullable: true })
  tradeName?: string | null;

  @Column({ name: 'ENDERECO', type: 'varchar2', length: 40, nullable: true })
  address?: string | null;

  @Column({ name: 'NUMERO', type: 'number', precision: 6, scale: 0, nullable: true })
  number?: number | null;

  @Column({ name: 'COMPLEMENTOENDERECO', type: 'varchar2', length: 50, nullable: true })
  complement?: string | null;

  @Column({ name: 'BAIRRO', type: 'varchar2', length: 20, nullable: true })
  neighborhood?: string | null;

  @Column({ name: 'CIDADE', type: 'varchar2', length: 30, nullable: true })
  city?: string | null;

  @Column({ name: 'UF', type: 'varchar2', length: 2, nullable: true })
  state?: string | null;

  @Column({ name: 'CEP', type: 'varchar2', length: 11, nullable: true })
  zipCode?: string | null;

  @Column({ name: 'CODMUN', type: 'number', precision: 10, scale: 0, nullable: true })
  municipalityCode?: number | null;

  @Column({ name: 'CODPAIS', type: 'number', precision: 4, scale: 0, nullable: true })
  countryCode?: number | null;

  @Column({ name: 'NOMEPAIS', type: 'varchar2', length: 40, nullable: true })
  countryName?: string | null;

  @Column({ name: 'TELEFONE', type: 'varchar2', length: 18, nullable: true })
  phone?: string | null;

  @Column({ name: 'FAX', type: 'varchar2', length: 18, nullable: true })
  fax?: string | null;

  @Column({ name: 'EMAIL', type: 'varchar2', length: 100, nullable: true })
  email?: string | null;

  @Column({ name: 'IE', type: 'varchar2', length: 20, nullable: true })
  stateRegistration?: string | null;

  @Column({ name: 'IM', type: 'varchar2', length: 20, nullable: true })
  municipalRegistration?: string | null;

  @Column({ name: 'CODCNAEFISCAL', type: 'number', precision: 7, scale: 0, nullable: true })
  cnaeCode?: number | null;

  @Column({ name: 'CODCNAEFISCAL', type: 'number', precision: 7, scale: 0, nullable: true })
  fiscalCnaeCode?: number | null;

  @Column({ name: 'INDUSTRIA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  isIndustry?: string | null;

  @Column({ name: 'ATACADISTA', type: 'varchar2', length: 1, nullable: true })
  isWholesaler?: string | null;

  @Column({ name: 'DTEXCLUSAO', type: 'date', nullable: true })
  exclusionDate?: Date | null;

  @Column({ name: 'DTREGISTRO', type: 'date', nullable: true })
  registrationDate?: Date | null;

  @Column({ name: 'DTINIATIVIDADE', type: 'date', nullable: true })
  startActivityDate?: Date | null;

  @Column({ name: 'DTFIMATIVIDADE', type: 'date', nullable: true })
  endActivityDate?: Date | null;

  @Column({ name: 'DTCADASTRO', type: 'date', nullable: true })
  creationDate?: Date | null;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  lastUpdateDate?: Date | null;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  clientCode?: number | null;

  @Column({ name: 'CODFORNEC', type: 'number', precision: 6, scale: 0, nullable: true })
  supplierCode?: number | null;

  @Column({ name: 'PROXNUMNOTA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextInvoiceNumber?: number | null;

  @Column({ name: 'NUMPROXVEND', type: 'number', precision: 10, scale: 0, nullable: true })
  nextSaleNumber?: number | null;

  @Column({ name: 'RAZAOTRANSP', type: 'varchar2', length: 40, nullable: true })
  transportCorporateName?: string | null;

  @Column({ name: 'CGCTRANSP', type: 'varchar2', length: 20, nullable: true })
  transportCnpj?: string | null;

  @Column({ name: 'IETRANSP', type: 'varchar2', length: 20, nullable: true })
  transportIe?: string | null;

  @Column({ name: 'ENDTRANSP', type: 'varchar2', length: 40, nullable: true })
  transportAddress?: string | null;

  @Column({ name: 'CIDADETRANSP', type: 'varchar2', length: 20, nullable: true })
  transportCity?: string | null;

  @Column({ name: 'UFTRANSP', type: 'varchar2', length: 2, nullable: true })
  transportState?: string | null;

  @Column({ name: 'CONTATO', type: 'varchar2', length: 30, nullable: true })
  contact?: string | null;

  @Column({ name: 'TAXA0', type: 'number', precision: 8, scale: 4, nullable: true })
  rate0?: number | null;

  @Column({ name: 'TAXA7', type: 'number', precision: 8, scale: 4, nullable: true })
  rate7?: number | null;

  @Column({ name: 'TAXA14', type: 'number', precision: 8, scale: 4, nullable: true })
  rate14?: number | null;

  @Column({ name: 'TAXA21', type: 'number', precision: 8, scale: 4, nullable: true })
  rate21?: number | null;

  @Column({ name: 'TAXA28', type: 'number', precision: 8, scale: 4, nullable: true })
  rate28?: number | null;

  @Column({ name: 'TAXA35', type: 'number', precision: 8, scale: 4, nullable: true })
  rate35?: number | null;

  @Column({ name: 'TAXA42', type: 'number', precision: 8, scale: 4, nullable: true })
  rate42?: number | null;

  @Column({ name: 'CODDOCNF', type: 'number', precision: 8, scale: 0, nullable: true })
  nfDocCode?: number | null;

  @Column({ name: 'CODDOCDEVOL', type: 'number', precision: 8, scale: 0, nullable: true })
  returnDocCode?: number | null;

  @Column({ name: 'CODDOCSR', type: 'number', precision: 8, scale: 0, nullable: true })
  srDocCode?: number | null;

  @Column({ name: 'MENSNF', type: 'varchar2', length: 60, nullable: true })
  nfMessage?: string | null;

  @Column({ name: 'PROXNUMAVERBACAO', type: 'number', precision: 10, scale: 0, nullable: true })
  nextRegistrationNumber?: number | null;

  @Column({ name: 'PROXNUMNFDEVCLI', type: 'number', precision: 10, scale: 0, nullable: true })
  nextClientReturnNfNumber?: number | null;

  @Column({ name: 'NUMSEQENTR', type: 'number', precision: 4, scale: 0, nullable: true, default: '1' })
  entrySequenceNumber?: number | null;

  @Column({ name: 'NUMIDF', type: 'varchar2', length: 30, nullable: true })
  idfNumber?: string | null;

  @Column({ name: 'NUMIDFDEVCLI', type: 'varchar2', length: 30, nullable: true })
  clientReturnIdfNumber?: string | null;

  @Column({ name: 'PROXNUMNOTATRANSF', type: 'number', precision: 10, scale: 0, nullable: true, default: '1' })
  nextTransferInvoiceNumber?: number | null;

  @Column({ name: 'PROXNUMNOTAD', type: 'number', precision: 10, scale: 0, nullable: true })
  nextNoteDNumber?: number | null;

  @Column({ name: 'CODFILIALPREFESTBALCAO', type: 'varchar2', length: 2, nullable: true })
  counterStockPrefBranchCode?: string | null;

  @Column({ name: 'CODFILIALPREFESTTLMK', type: 'varchar2', length: 2, nullable: true })
  telemarketingStockPrefBranchCode?: string | null;

  @Column({ name: 'MONTANDO', type: 'varchar2', length: 1, nullable: true })
  assembling?: string | null;

  @Column({ name: 'NUMERO2', type: 'varchar2', length: 6, nullable: true })
  number2?: string | null;

  @Column({ name: 'EANEMISSOR', type: 'number', precision: 14, scale: 0, nullable: true })
  issuerEan?: number | null;

  @Column({ name: 'CODDOCTRANSF', type: 'number', precision: 8, scale: 0, nullable: true })
  transferDocCode?: number | null;

  @Column({ name: 'NUMREGIAO', type: 'number', precision: 4, scale: 0, nullable: true })
  regionNumber?: number | null;

  @Column({ name: 'CODFILIALPRODUCAO', type: 'varchar2', length: 2, nullable: true })
  productionBranchCode?: string | null;

  @Column({ name: 'USAESTOQUEDEPFECHADO', type: 'varchar2', length: 1, nullable: true })
  useClosedDepotStock?: string | null;

  @Column({ name: 'PROXNUMLOTE', type: 'number', precision: 4, scale: 0, nullable: true, default: '1' })
  nextBatchNumber?: number | null;

  @Column({ name: 'CODGRUPO', type: 'varchar2', length: 2, nullable: true })
  groupCode?: string | null;

  @Column({ name: 'USANUMNFDEVCLI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useClientReturnNfNumber?: string | null;

  @Column({ name: 'CODDOCDEVFORNEC', type: 'number', precision: 8, scale: 0, nullable: true })
  supplierReturnDocCode?: number | null;

  @Column({ name: 'AUTOSERVICO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  selfService?: string | null;

  @Column({ name: 'CAE', type: 'varchar2', length: 30, nullable: true })
  cae?: string | null;

  @Column({ name: 'CODDOCENTRADAMERC', type: 'number', precision: 8, scale: 0, nullable: true })
  merchandiseEntryDocCode?: number | null;

  @Column({ name: 'PERFRETECONHEC', type: 'number', precision: 8, scale: 4, nullable: true })
  freightPercentageKnowledge?: number | null;

  @Column({ name: 'LIMPARBASECALCENTRADA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  clearBaseCalcEntry?: string | null;

  @Column({ name: 'USAWMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useWms?: string | null;

  @Column({ name: 'OPISENTOSICMSALTOCUSTO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  exemptIcmsHighCostOp?: string | null;

  @Column({ name: 'ALIQICMOUTRASDESP', type: 'number', precision: 4, scale: 2, nullable: true })
  icmsRateOtherExpenses?: number | null;

  @Column({ name: 'ALIQICMINTEROUTRASDESP', type: 'number', precision: 4, scale: 2, nullable: true })
  interIcmsRateOtherExpenses?: number | null;

  @Column({ name: 'CODFISCALOUTRASDESP', type: 'number', precision: 4, scale: 0, nullable: true })
  fiscalCodeOtherExpenses?: number | null;

  @Column({ name: 'CODFISCALINTEROUTRASDESP', type: 'number', precision: 4, scale: 0, nullable: true })
  interFiscalCodeOtherExpenses?: number | null;

  @Column({ name: 'ACEITAVENDASEMEST', type: 'varchar2', length: 1, nullable: true })
  acceptSaleWithoutStock?: string | null;

  @Column({ name: 'CALCCREDICMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcIcmsCredit?: string | null;

  @Column({ name: 'CALCCREDPISCOFINS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcPisCofinsCredit?: string | null;

  @Column({ name: 'NUMREGIAOPADRAO', type: 'number', precision: 4, scale: 0, nullable: true })
  defaultRegionNumber?: number | null;

  @Column({ name: 'PERVENDAPF', type: 'number', precision: 8, scale: 4, nullable: true })
  pfSalePercentage?: number | null;

  @Column({ name: 'AREAVENDA', type: 'number', precision: 10, scale: 4, nullable: true })
  salesArea?: number | null;

  @Column({ name: 'CODFISCALDEVOUTRASDESP', type: 'number', precision: 10, scale: 0, nullable: true })
  fiscalCodeReturnOtherExpenses?: number | null;

  @Column({ name: 'CODFISCALINTERDEVOUTRASDESP', type: 'number', precision: 10, scale: 0, nullable: true })
  interFiscalCodeReturnOtherExpenses?: number | null;

  @Column({ name: 'NUMDIASVENCFRETE', type: 'number', precision: 4, scale: 0, nullable: true })
  freightDueDateDays?: number | null;

  @Column({ name: 'CALCCREDIPI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcIpiCredit?: string | null;

  @Column({ name: 'NUMCONTRATOCORREIO', type: 'number', precision: 8, scale: 0, nullable: true })
  postOfficeContractNumber?: number | null;

  @Column({ name: 'VLTARIFA', type: 'number', precision: 8, scale: 2, nullable: true })
  tariffValue?: number | null;

  @Column({ name: 'VLMINTARIFABANC', type: 'number', precision: 18, scale: 6, nullable: true })
  minBankTariffValue?: number | null;

  @Column({ name: 'VLMAXTARIFABANC', type: 'number', precision: 18, scale: 6, nullable: true })
  maxBankTariffValue?: number | null;

  @Column({ name: 'SOMATARIFABANCDUPLIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sumBankTariffDuplicate?: string | null;

  @Column({ name: 'CODDOCNFC', type: 'number', precision: 8, scale: 0, nullable: true })
  nfcDocCode?: number | null;

  @Column({ name: 'PRODPORETAPA', type: 'char', length: 1, nullable: true, default: 'N' })
  productByStage?: string | null;

  @Column({ name: 'PROXNUMORC', type: 'number', precision: 10, scale: 0, nullable: true })
  nextBudgetNumber?: number | null;

  @Column({ name: 'GERARNUMLOTEAUTOMATICPA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateAutoBatchNumberPa?: string | null;

  @Column({ name: 'PROXNUMETAPA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextStageNumber?: number | null;

  @Column({ name: 'IESUBSTTRIB', type: 'varchar2', length: 15, nullable: true })
  ieSubstTrib?: string | null;

  @Column({ name: 'UTILIZAPERCBASEREDOUTRASDESPPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBaseRedPercOtherExpensesPf?: string | null;

  @Column({ name: 'TIPONUMMAPA', type: 'varchar2', length: 1, nullable: true, default: 'D' })
  mapNumberType?: string | null;

  @Column({ name: 'CALCREDPISFRETE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcPisFreightCredit?: string | null;

  @Column({ name: 'CALCREDPISFRETECONT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcPisFreightCreditCont?: string | null;

  @Column({ name: 'BROKER', type: 'varchar2', length: 1, nullable: true })
  broker?: string | null;

  @Column({ name: 'TIPOBROKER', type: 'varchar2', length: 3, nullable: true })
  brokerType?: string | null;

  @Column({ name: 'PROXNUMEROORCAMENTO', type: 'number', precision: 8, scale: 0, nullable: true })
  nextBudgetNumber2?: number | null;

  @Column({ name: 'PERBASEREDOUTRASDESP', type: 'number', precision: 8, scale: 4, nullable: true })
  baseRedPercOtherExpenses?: number | null;

  @Column({ name: 'TIPONUMNFENTRADA', type: 'varchar2', length: 1, nullable: true, default: '1' })
  entryNfNumberType?: string | null;

  @Column({ name: 'PERMITIRVENDAINTERESTADUALPF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowInterstateSalePf?: string | null;

  @Column({ name: 'PERMITIRVENDAESTADUALPFCOMIE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowStateSalePfWithIe?: string | null;

  @Column({ name: 'PERMITIRVENDAESTADUALPFSEMIE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowStateSalePfWithoutIe?: string | null;

  @Column({ name: 'INCLUIRITEMPCEMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  includeItemPcEmbalagem?: string | null;

  @Column({ name: 'ALIQUOTAFRETEEST', type: 'number', precision: 2, scale: 0, nullable: true })
  freightRateState?: number | null;

  @Column({ name: 'USAENDERECOFILIAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBranchAddress?: string | null;

  @Column({ name: 'CODCLICONSUMIDOR', type: 'number', precision: 6, scale: 0, nullable: true })
  consumerClientCode?: number | null;

  @Column({ name: 'PERMITECREDICMCOMST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowIcmCreditWithSt?: string | null;

  @Column({ name: 'CALCCREDICMCUSTOCONT', type: 'char', length: 1, nullable: true, default: 'S' })
  calcIcmCreditCostCont?: string | null;

  @Column({ name: 'CALCCREDPISCUSTOCONT', type: 'char', length: 1, nullable: true, default: 'S' })
  calcPisCreditCostCont?: string | null;

  @Column({ name: 'PERCDESPADM', type: 'number', precision: 10, scale: 4, nullable: true })
  adminExpensePerc?: number | null;

  @Column({ name: 'PERCALTERCUSTOENT', type: 'number', precision: 8, scale: 4, nullable: true })
  entryCostAlterPerc?: number | null;

  @Column({ name: 'PROXNUMTRANSCONHEC', type: 'number', precision: 10, scale: 0, nullable: true })
  nextTransferKnowledgeNumber?: number | null;

  @Column({ name: 'PROXNUMCONHEC', type: 'number', precision: 10, scale: 0, nullable: true })
  nextKnowledgeNumber?: number | null;

  @Column({ name: 'CALCULARCOMISSAOPVENDA1', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcCommissionSalePrice1?: string | null;

  @Column({ name: 'USADISTRIB', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useDistrib?: string | null;

  @Column({ name: 'IPISOMENTEVLCONT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  ipiOnlyValueCont?: string | null;

  @Column({ name: 'USACONTROLELOCALIZACAOVEICULO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useVehicleLocationControl?: string | null;

  @Column({ name: 'PROXNUMPREVENDA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextPreSaleNumber?: number | null;

  @Column({ name: 'PROXNUMORCAFILIAL', type: 'number', precision: 10, scale: 0, nullable: true })
  nextBranchBudgetNumber?: number | null;

  @Column({ name: 'PROXNUMENTMEX', type: 'number', precision: 10, scale: 0, nullable: true })
  nextEntMexNumber?: number | null;

  @Column({ name: 'PROXNSU', type: 'number', precision: 10, scale: 0, nullable: true })
  nextNsu?: number | null;

  @Column({ name: 'GERARNSU', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateNsu?: string | null;

  @Column({ name: 'EXIGIREMISSAOMAPABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  requireCounterMapEmission?: string | null;

  @Column({ name: 'CODDOCSS', type: 'number', precision: 8, scale: 0, nullable: true })
  ssDocCode?: number | null;

  @Column({ name: 'OPERADORLOGISTICO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  logisticOperator?: string | null;

  @Column({ name: 'CONSIDERARICMSANTECIPCUSTO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  considerAdvanceIcmsCost?: string | null;

  @Column({ name: 'CODGRUPOFILIAL', type: 'number', precision: 6, scale: 0, nullable: true })
  branchGroupCode?: number | null;

  @Column({ name: 'CODCONTADOR', type: 'number', precision: 5, scale: 0, nullable: true })
  accountantCode?: number | null;

  @Column({ name: 'CODSOCIO', type: 'number', precision: 5, scale: 0, nullable: true })
  partnerCode?: number | null;

  @Column({ name: 'ATIVIDADE', type: 'varchar2', length: 50, nullable: true })
  activity?: string | null;

  @Column({ name: 'VALORCAPITAL', type: 'number', precision: 18, scale: 2, nullable: true })
  capitalValue?: number | null;

  @Column({ name: 'ORGAO', type: 'varchar2', length: 20, nullable: true })
  organ?: string | null;

  @Column({ name: 'CODREGISTRO', type: 'varchar2', length: 20, nullable: true })
  registrationCode?: string | null;

  @Column({ name: 'CODCONTAENTIMPORTACAO', type: 'number', precision: 10, scale: 0, nullable: true })
  importEntryAccountCode?: number | null;

  @Column({ name: 'CODDOCSE', type: 'number', precision: 6, scale: 0, nullable: true })
  seDocCode?: number | null;

  @Column({ name: 'UTILIZANFE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useNfe?: string | null;

  @Column({ name: 'SERIENFE', type: 'varchar2', length: 3, nullable: true })
  nfeSeries?: string | null;

  @Column({ name: 'SERIENFESCAN', type: 'varchar2', length: 3, nullable: true })
  nfeScanSeries?: string | null;

  @Column({ name: 'TIPODANFE', type: 'varchar2', length: 1, nullable: true })
  danfeType?: string | null;

  @Column({ name: 'PROXNUMNFE', type: 'number', precision: 10, scale: 0, nullable: true })
  nextNfeNumber?: number | null;

  @Column({ name: 'INCLUIFRETEOUTRASDESPBASEST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  includeFreightOtherExpensesBaseSt?: string | null;

  @Column({ name: 'CODCONTAPERCACRESCENT', type: 'number', precision: 10, scale: 0, nullable: true })
  accountPercIncreaseEntCode?: number | null;

  @Column({ name: 'GERABASENORMALQUANDOST', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  generateNormalBaseWhenSt?: string | null;

  @Column({ name: 'VALIDAVLMAXISENCAOSTPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateMaxExemptionStPf?: string | null;

  @Column({ name: 'VLMAXISENCAOSTPF', type: 'number', precision: 12, scale: 2, nullable: true })
  maxExemptionValueStPf?: number | null;

  @Column({ name: 'UTILIZAVENDAPOREMBALAGEM', type: 'varchar2', length: 1, nullable: true })
  useSaleByPackaging?: string | null;

  @Column({ name: 'PRECOPOREMBALAGEM', type: 'varchar2', length: 1, nullable: true })
  priceByPackaging?: string | null;

  @Column({ name: 'VALIDAENDPICKINGPEDCOMPRA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  validateAddressPickingOrderBuy?: string | null;

  @Column({ name: 'USAPVENDAATACCONFQTMULTIPLA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useWholesalePriceConfQtMultiple?: string | null;

  @Column({ name: 'DTUTILIZANFE', type: 'date', nullable: true })
  useNfeDate?: Date | null;

  @Column({ name: 'GERARPEDCONSIGNACAOVASILHAME', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateOrderConsignmentVasilhame?: string | null;

  @Column({ name: 'PRECIFICAAUTOMATICO', type: 'varchar2', length: 1, nullable: true })
  autoPricing?: string | null;

  @Column({ name: 'TIPOPRECIFICACAO', type: 'varchar2', length: 1, nullable: true, default: 'P' })
  pricingType?: string | null;

  @Column({ name: 'USASERVINTERMEDIARIO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useIntermediateService?: string | null;

  @Column({ name: 'USANUMNOTAECF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useEcfNoteNumber?: string | null;

  @Column({ name: 'PROXNUMNOTAECF', type: 'number', precision: 10, scale: 0, nullable: true })
  nextEcfNoteNumber?: number | null;

  @Column({ name: 'PROXNUMTRANSVENDAECF', type: 'number', precision: 10, scale: 0, nullable: true })
  nextTransferSaleEcfNumber?: number | null;

  @Column({ name: 'PROXNUMCARECF', type: 'number', precision: 10, scale: 0, nullable: true })
  nextCarEcfNumber?: number | null;

  @Column({ name: 'PROXNUMTRANSECF', type: 'number', precision: 10, scale: 0, nullable: true })
  nextTransferEcfNumber?: number | null;

  @Column({ name: 'USAPRECOETIQPRODPESADO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePriceTagWeighProduct?: string | null;

  @Column({ name: 'DESTACARIMPOSTOSVENDATV14', type: 'varchar2', length: 1, nullable: true })
  highlightTaxesSaleTv14?: string | null;

  @Column({ name: 'PERMITEAGRUPARBOLETOS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowGroupSlips?: string | null;

  @Column({ name: 'BLOQDEVCLI', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  blockClientReturn?: string | null;

  @Column({ name: 'DTULTATUALIZACAODRVINTER', type: 'date', nullable: true })
  lastUpdateDateDrvInter?: Date | null;

  @Column({ name: 'TIPOAVALIACAOCOMISSAO', type: 'number', precision: 2, scale: 0, nullable: true })
  commissionEvaluationType?: number | null;

  @Column({ name: 'CONSIDERARCOMISSAOZERO', type: 'varchar2', length: 1, nullable: true })
  considerZeroCommission?: string | null;

  @Column({ name: 'LANCARFRETEPESOAUTFAT', type: 'varchar2', length: 1, nullable: true })
  launchFreightWeightAutoInvoice?: string | null;

  @Column({ name: 'BLOQDESDEMITENTEDIF', type: 'varchar2', length: 1, nullable: true })
  blockDifferentIssuer?: string | null;

  @Column({ name: 'CALCESTDISPCOMQTMINAUTOSERV', type: 'varchar2', length: 1, nullable: true })
  calcAvailableStockWithQtMinAutoService?: string | null;

  @Column({ name: 'USAPOLITICADESCVALOR', type: 'varchar2', length: 1, nullable: true })
  useValueDiscountPolicy?: string | null;

  @Column({ name: 'UTILIZAVENDAASSISTIDA', type: 'varchar2', length: 1, nullable: true })
  useAssistedSale?: string | null;

  @Column({ name: 'CODCONTAVENDAENTREGAFUT', type: 'number', precision: 10, scale: 0, nullable: true })
  futureDeliverySaleAccountCode?: number | null;

  @Column({ name: 'USAINTEGRACAOWMS', type: 'varchar2', length: 1, nullable: true })
  useWmsIntegration?: string | null;

  @Column({ name: 'TIPOFRETEAUTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  autoFreightType?: string | null;

  @Column({ name: 'BLOQUEARPEDIDOSABAIXOVLMINIMO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockOrdersBelowMinVal?: string | null;

  @Column({ name: 'ORDEMAGRUPDESD', type: 'varchar2', length: 900, nullable: true })
  groupOrderDesd?: string | null;

  @Column({ name: 'USACONSULTACHEQUE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useCheckConsult?: string | null;

  @Column({ name: 'TIPOIDENTIFICACAOECF', type: 'varchar2', length: 2, nullable: true, default: 'US' })
  ecfIdentificationType?: string | null;

  @Column({ name: 'CONSIDERAMONTAGEMGIROMERC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  considerAssemblyGiroMerc?: string | null;

  @Column({ name: 'MONTACARGAWINTHOR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  winthorLoadBuild?: string | null;

  @Column({ name: 'DEVFORNECESTOQUEAVARIA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  supplierReturnDamageStock?: string | null;

  @Column({ name: 'ALTERAPEDIDORETORNADOWMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  alterOrderReturnedWms?: string | null;

  @Column({ name: 'CANCELAPEDIDORETORNADOWMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  cancelOrderReturnedWms?: string | null;

  @Column({ name: 'CANCELANFENTRADACOMWMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  cancelEntryNfWithWms?: string | null;

  @Column({ name: 'CANCELANFDEVCLICOMWMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  cancelClientReturnNfWithWms?: string | null;

  @Column({ name: 'CANCELANFVENDACOMWMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  cancelSaleNfWithWms?: string | null;

  @Column({ name: 'INTEGRADORAWMS', type: 'number', precision: 3, scale: 0, nullable: true, default: '1' })
  wmsIntegrator?: number | null;

  @Column({ name: 'USUARIOBANCODADOSWMS', type: 'varchar2', length: 40, nullable: true })
  wmsDbUser?: string | null;

  @Column({ name: 'SENHABANCODADOSWMS', type: 'varchar2', length: 40, nullable: true })
  wmsDbPassword?: string | null;

  @Column({ name: 'NOMEBANCODADOSWMS', type: 'varchar2', length: 40, nullable: true })
  wmsDbName?: string | null;

  @Column({ name: 'CONSOLIDADADOS504', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  consolidateData504?: string | null;

  @Column({ name: 'GERARPCHISTEST', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  generatePcHistEst?: string | null;

  @Column({ name: 'INDICECUSTOTRANSF', type: 'number', precision: 8, scale: 4, nullable: true, default: '1' })
  transferCostIndex?: number | null;

  @Column({ name: 'BLOQESTOQUETRANSF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  blockStockTransfer?: string | null;

  @Column({ name: 'ATUALIZACUSTOULTENTRANSF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  updateCostLastEntryTransfer?: string | null;

  @Column({ name: 'PONDCUSNOTATRANSF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  pondCostTransferNote?: string | null;

  @Column({ name: 'PROXNUMOS', type: 'number', precision: 15, scale: 0, nullable: true })
  nextOsNumber?: number | null;

  @Column({ name: 'EXIBIRIMPOSTOSFORANFIMPORTACAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  showTaxesOutsideImportNf?: string | null;

  @Column({ name: 'CODFISCALOPCIONALNFIMPORTACAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  optionalFiscalCodeImportNf?: string | null;

  @Column({ name: 'SITTRIBUTOPCIONALNFIMPORTACAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  optionalTaxSitImportNf?: string | null;

  @Column({ name: 'PESOLIMITEOS', type: 'number', precision: 8, scale: 2, nullable: true, default: '0' })
  osWeightLimit?: number | null;

  @Column({ name: 'QTDMAXITENSOS', type: 'number', precision: 6, scale: 0, nullable: true, default: '0' })
  maxOsItemsQty?: number | null;

  @Column({ name: 'QTDMINITENSMODULOOS', type: 'number', precision: 8, scale: 2, nullable: true, default: '0' })
  minOsItemsQtyModule?: number | null;

  @Column({ name: 'TEMPOSEPPRODOS', type: 'number', precision: 6, scale: 0, nullable: true })
  orderServiceProdSepTime?: number | null;

  @Column({ name: 'TEMPOSEPCAIXAOS', type: 'number', precision: 6, scale: 0, nullable: true })
  orderServiceBoxSepTime?: number | null;

  @Column({ name: 'TEMPOSEPINICIALOS', type: 'number', precision: 6, scale: 0, nullable: true })
  orderServiceInitialSepTime?: number | null;

  @Column({ name: 'DESTACARIMPOSTOSVENDATV13', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  highlightTaxesSaleTv13?: string | null;

  @Column({ name: 'TIPOMONTAGEM', type: 'varchar2', length: 1, nullable: true, default: 'R' })
  assemblyType?: string | null;

  @Column({ name: 'CALCULARIPIVENDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  calcIpiSale?: string | null;

  @Column({ name: 'USAORCAMENTOECF', type: 'varchar2', length: 1, nullable: true })
  useEcfBudget?: string | null;

  @Column({ name: 'VALIDARENDAPANHAAUTOSERVICO', type: 'varchar2', length: 1, nullable: true })
  validateCollectionAddressAutoService?: string | null;

  @Column({ name: 'USADIAUTILFILIAL', type: 'varchar2', length: 1, nullable: true })
  useBusinessDayBranch?: string | null;

  @Column({ name: 'REDUZIRICMSPROPRIOTRANSF', type: 'varchar2', length: 1, nullable: true })
  reduceOwnIcmsTransfer?: string | null;

  @Column({ name: 'NAOGERARCREDITOENTRADATRANSF', type: 'varchar2', length: 1, nullable: true })
  noGenerateCreditEntryTransfer?: string | null;

  @Column({ name: 'IMPEDETIPO14_LIVROFISCAL', type: 'varchar2', length: 1, nullable: true })
  preventType14FiscalBook?: string | null;

  @Column({ name: 'CORTEAUTOMATICOPEDVENDAWMS', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  automaticCutSaleOrderWms?: string | null;

  @Column({ name: 'PRAZOMAXIMPPEDPENDECF', type: 'number', precision: 4, scale: 0, nullable: true, default: '0' })
  maxTermImpPendOrderEcf?: number | null;

  @Column({ name: 'RETIRARDESCNABAIXA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  removeDescOnWriteOff?: string | null;

  @Column({ name: 'SOMAICMSTRANSF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  sumIcmsTransfer?: string | null;

  @Column({ name: 'CODCONTACREDFORNEC', type: 'number', precision: 10, scale: 0, nullable: true })
  supplierCreditAccountCode?: number | null;

  @Column({ name: 'GERAPEDIDOCOMITENSSEMEST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateOrderWithItemsWithoutStock?: string | null;

  @Column({ name: 'CONFERIRSOMENTEPEDACERTADOCX', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkOnlyOrderSettledCash?: string | null;

  @Column({ name: 'MONTARKITAUTOMATICAMENTE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  assembleKitAutomatically?: string | null;

  @Column({ name: 'APLICAPERCVARNAOCONTRIB', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  applyVarPercNonContrib?: string | null;

  @Column({ name: 'APLICAPERCATACNAOCONTRIB', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  applyWholesalePercNonContrib?: string | null;

  @Column({ name: 'UTILIZAORIGEMVENDANF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useSaleOriginNf?: string | null;

  @Column({ name: 'ORIGEMVENDANF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  saleOriginNf?: string | null;

  @Column({ name: 'PROXNUMNOTAORIGVENDA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextNoteOriginSaleNumber?: number | null;

  @Column({ name: 'CODDOCORIGEMNF', type: 'number', precision: 8, scale: 0, nullable: true })
  originNfDocCode?: number | null;

  @Column({ name: 'CLICREPENDENTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  cliCrePending?: string | null;

  @Column({ name: 'PERMITECANCELARNFENTWMS', type: 'varchar2', length: 1, nullable: true })
  allowCancelEntryNfWms?: string | null;

  @Column({ name: 'ARREDVLITENSNFSAIDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  roundValueItemsExitNf?: string | null;

  @Column({ name: 'APROVEITAIPI_PISCOFINS', type: 'varchar2', length: 1, nullable: true })
  useIpiPisCofins?: string | null;

  @Column({ name: 'APROVEITAFRETE_PISCOFINS', type: 'varchar2', length: 1, nullable: true })
  useFreightPisCofins?: string | null;

  @Column({ name: 'APROVEITADESP_PISCOFINS', type: 'varchar2', length: 1, nullable: true })
  useExpensePisCofins?: string | null;

  @Column({ name: 'QTMULTIPLAINICIALECF', type: 'number', precision: 2, scale: 0, nullable: true })
  initialMultipleQtyEcf?: number | null;

  @Column({ name: 'USAINTEGRACAOOPERLOG', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useLogOperIntegration?: string | null;

  @Column({ name: 'CGC_OPERADORLOGISTICO', type: 'varchar2', length: 14, nullable: true })
  logOperatorCnpj?: string | null;

  @Column({ name: 'PERCICMSSIMPLESNAC', type: 'number', precision: 6, scale: 2, nullable: true })
  icmsSimpleNacPerc?: number | null;

  @Column({ name: 'OPTANTESIMPLESNAC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  simpleNacOptant?: string | null;

  @Column({ name: 'RECALCDVPRODUTO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  recalcDvProduct?: string | null;

  @Column({ name: 'USACODBARRAEMBALAGEM', type: 'varchar2', length: 1, nullable: true })
  useBarcodePackaging?: string | null;

  @Column({ name: 'REGRAARREDONDAMENTOECF', type: 'varchar2', length: 1, nullable: true })
  roundingRuleEcf?: string | null;

  @Column({ name: 'CONSIDERAESTPENDSUGCOMPRA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  considerPendingStockBuySuggestion?: string | null;

  @Column({ name: 'CONCEDERDESCISENCAOSTPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  grantDescExemptionStPf?: string | null;

  @Column({ name: 'VALIDARPRECOVENDATV8', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateSalePriceTv8?: string | null;

  @Column({ name: 'VERSAOWMS', type: 'number', precision: 3, scale: 0, nullable: true, default: '12' })
  wmsVersion?: number | null;

  @Column({ name: 'VALIDARPRECOVENDATV20', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateSalePriceTv20?: string | null;

  @Column({ name: 'TIPOEXPORTACAO', type: 'varchar2', length: 1, nullable: true, default: 'D' })
  exportType?: string | null;

  @Column({ name: 'PERCOMFILIALBROKER', type: 'number', precision: 8, scale: 4, nullable: true })
  percComBranchBroker?: number | null;

  @Column({ name: 'PERFRETEBROKER', type: 'number', precision: 8, scale: 4, nullable: true })
  percFreightBroker?: number | null;

  @Column({ name: 'BLOQVENDAPF', type: 'varchar2', length: 1, nullable: true })
  blockSalePf?: string | null;

  @Column({ name: 'PERMITEFATURAR', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowInvoice?: string | null;

  @Column({ name: 'PERCOMRCABROKER', type: 'number', precision: 6, scale: 2, nullable: true })
  percComRcaBroker?: number | null;

  @Column({ name: 'PERCOMMOTBROKER', type: 'number', precision: 6, scale: 2, nullable: true, default: '0' })
  percComDriverBroker?: number | null;

  @Column({ name: 'DIAVENCICMSANTECIP', type: 'number', precision: 2, scale: 0, nullable: true, default: '0' })
  dayDueIcmsAdvance?: number | null;

  @Column({ name: 'ESTORNACUSTODEVFORNEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  reverseCostReturnSupplier?: string | null;

  @Column({ name: 'CONTROLAGARANTIASERVICO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  controlServiceWarranty?: string | null;

  @Column({ name: 'USADADOSEMBALAGEMNFE', type: 'varchar2', length: 1, nullable: true })
  usePackagingDataNfe?: string | null;

  @Column({ name: 'NUMDIASMAXIMOLIBERARPEDIDO', type: 'number', precision: 3, scale: 0, nullable: true })
  maxDaysReleaseOrder?: number | null;

  @Column({ name: 'HRINICIOEXPEDIENTE', type: 'date', nullable: true })
  startWorkTime?: Date | null;

  @Column({ name: 'HRINICIOALMOCO', type: 'date', nullable: true })
  startLunchTime?: Date | null;

  @Column({ name: 'HRFIMALMOCO', type: 'date', nullable: true })
  endLunchTime?: Date | null;

  @Column({ name: 'HRFIMEXPEDIENTE', type: 'date', nullable: true })
  endWorkTime?: Date | null;

  @Column({ name: 'INFORMARPROFISSIONALVENDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  informSaleProfessional?: string | null;

  @Column({ name: 'PERMITIRDESDDIFPROF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowDesdDifProf?: string | null;

  @Column({ name: 'VALIDARDESCFLEXAUTOSERV', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateDescFlexAutoService?: string | null;

  @Column({ name: 'CODDOCSRAUTO', type: 'number', precision: 8, scale: 0, nullable: true })
  srDocCodeAuto?: number | null;

  @Column({ name: 'USACODCLIVENDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useClientCodeSale?: string | null;

  @Column({ name: 'USACONTABIL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useAccounting?: string | null;

  @Column({ name: 'USATRANSPORTADOPADRAONFE', type: 'varchar2', length: 1, nullable: true })
  useStandardTransportNfe?: string | null;

  @Column({ name: 'OSPRODMANUTOBRIG', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  orderServiceProdMaintMandatory?: string | null;

  @Column({ name: 'NUMMAXDIASRETRODTCOMPENSACAO', type: 'number', precision: 3, scale: 0, nullable: true, default: '999' })
  maxDaysRetroCompensationDate?: number | null;

  @Column({ name: 'NUMMAXITENSNFE', type: 'number', precision: 4, scale: 0, nullable: true })
  maxItemsNfe?: number | null;

  @Column({ name: 'USABRINDEECF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useGiftEcf?: string | null;

  @Column({ name: 'HORAINICIALDIGITACAOPED', type: 'date', nullable: true })
  initialTimeTypeOrder?: Date | null;

  @Column({ name: 'HORAFINALDIGITACAOPED', type: 'date', nullable: true })
  finalTimeTypeOrder?: Date | null;

  @Column({ name: 'HORAINICIALIMPORTACAOPED', type: 'date', nullable: true })
  initialTimeImportOrder?: Date | null;

  @Column({ name: 'HORAFINALIMPORTACAOPED', type: 'date', nullable: true })
  finalTimeImportOrder?: Date | null;

  @Column({ name: 'PERCMAXDIFPRODSIMIL', type: 'number', precision: 8, scale: 4, nullable: true })
  maxPercDifProdSimil?: number | null;

  @Column({ name: 'ALTERARCOBBKCHAUTOMATICO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  changeCobBkChAutomatic?: string | null;

  @Column({ name: 'ACEITAVENDAAVISTACLIBLOQ', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptCashSaleBlockedClient?: string | null;

  @Column({ name: 'CODCONTARECARGA', type: 'number', precision: 10, scale: 0, nullable: true })
  rechargeAccountCode?: number | null;

  @Column({ name: 'ORIGEMCUSTOFILIALRETIRA', type: 'varchar2', length: 1, nullable: true, default: 'V' })
  originCostBranchRemove?: string | null;

  @Column({ name: 'UTILIZACONTROLEBIOMETRICO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBiometricControl?: string | null;

  @Column({ name: 'NUMREGIAOBALCAOINTER', type: 'number', precision: 4, scale: 0, nullable: true })
  interCounterRegionNumber?: number | null;

  @Column({ name: 'USAREGIAOFILIALVENDAESTADUAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBranchRegionStateSale?: string | null;

  @Column({ name: 'USAREGIAOFILIALVENDAINTEREST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBranchRegionInterstateSale?: string | null;

  @Column({ name: 'BLOQUEIARISKSCORING', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockRiskScoring?: string | null;

  @Column({ name: 'LIMRISKSCORING', type: 'number', precision: 6, scale: 0, nullable: true })
  limitRiskScoring?: number | null;

  @Column({ name: 'STSOMENTEVLCONT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  stOnlyValueCont?: string | null;

  @Column({ name: 'PROXNUMNOTACOBRANCA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextCollectionNoteNumber?: number | null;

  @Column({ name: 'CODDOCNOTACOBRANCA', type: 'number', precision: 8, scale: 0, nullable: true })
  collectionNoteDocCode?: number | null;

  @Column({ name: 'TRANSFEREVLSTBASESTNATRANSF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  transferStValueBaseStTransfer?: string | null;

  @Column({ name: 'LIBPEDCOMPRASEMDIVERG', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  releasePurchaseOrderWithoutDivergence?: string | null;

  @Column({ name: 'MENSNFIMUNIDADETRIB', type: 'varchar2', length: 300, nullable: true })
  nfMessageTaxImmunity?: string | null;

  @Column({ name: 'UTILIZACREDICMSESTCUSTOCONT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useIcmsCreditEstCostCont?: string | null;

  @Column({ name: 'QTDEMAXDIASVENCVERBAS', type: 'number', precision: 4, scale: 0, nullable: true, default: '0' })
  maxDaysExpiresFunds?: number | null;

  @Column({ name: 'PERBASEREDOUTRASDESPPF', type: 'number', precision: 8, scale: 4, nullable: true })
  baseRedPercOtherExpensesPf?: number | null;

  @Column({ name: 'PERLIMVENDAPF', type: 'number', precision: 8, scale: 4, nullable: true })
  limitSalePercPf?: number | null;

  @Column({ name: 'ENVIACONTASPAGARNFE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  sendAccountsPayableNfe?: string | null;

  @Column({ name: 'ENVIACONTASRECEBERNFE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  sendAccountsReceivableNfe?: string | null;

  @Column({ name: 'AMBIENTE', type: 'varchar2', length: 1, nullable: true, default: 'H' })
  environment?: string | null;

  @Column({ name: 'USAMULTIPLOPORDESCONTO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useMultipleByDiscount?: string | null;

  @Column({ name: 'USAINVENTLOCAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useLocalInventory?: string | null;

  @Column({ name: 'OBRIGACONSFINALDEV', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  mandatoryFinalConsumerReturn?: string | null;

  @Column({ name: 'UTILIZASEQNFENT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useSeqNfEntry?: string | null;

  @Column({ name: 'USAPVENDATRANSF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useSalePriceTransfer?: string | null;

  @Column({ name: 'PERCACRESCIMOBALCAO', type: 'number', precision: 10, scale: 6, nullable: true })
  counterIncreasePercentage?: number | null;

  @Column({ name: 'VLPESODESCARGA', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadWeightValue?: number | null;

  @Column({ name: 'VLVOLDESCARGA', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadVolumeValue?: number | null;

  @Column({ name: 'VLPESODESCARGAPAL', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadWeightPalletValue?: number | null;

  @Column({ name: 'VLVOLUMEDESCARGAFD', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadVolumeFdValue?: number | null;

  @Column({ name: 'VLREMONTEDESCARGA', type: 'number', precision: 12, scale: 6, nullable: true })
  unloadRemountValue?: number | null;

  @Column({ name: 'VLPALETEDESCARG', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadPalletValue?: number | null;

  @Column({ name: 'GRAVARVALORDESCFIN', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  saveFinancialDiscountValue?: string | null;

  @Column({ name: 'TIPOCNPJ', type: 'varchar2', length: 1, nullable: true })
  cnpjType?: string | null;

  @Column({ name: 'CONTROLENFEPORSERIE', type: 'varchar2', length: 2, nullable: true, default: 'N' })
  controlNfeBySeries?: string | null;

  @Column({ name: 'PROXNUMNFEENTRADA', type: 'number', precision: 9, scale: 0, nullable: true })
  nextEntryNfeNumber?: number | null;

  @Column({ name: 'PROXNUMNFESCAN', type: 'number', precision: 9, scale: 0, nullable: true })
  nextScanNfeNumber?: number | null;

  @Column({ name: 'SERIENFEENTRADA', type: 'varchar2', length: 3, nullable: true })
  entryNfeSeries?: string | null;

  @Column({ name: 'PROXNUMNFESCANENTRADA', type: 'number', precision: 9, scale: 0, nullable: true })
  nextScanEntryNfeNumber?: number | null;

  @Column({ name: 'SERIENFESCANENTRADA', type: 'varchar2', length: 3, nullable: true })
  scanEntryNfeSeries?: string | null;

  @Column({ name: 'DTUTILIZACTE', type: 'date', nullable: true })
  useCteDate?: Date | null;

  @Column({ name: 'UTILIZACTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useCte?: string | null;

  @Column({ name: 'USUARIOSERV', type: 'varchar2', length: 40, nullable: true })
  serverUser?: string | null;

  @Column({ name: 'SENHASERV', type: 'varchar2', length: 10, nullable: true })
  serverPassword?: string | null;

  @Column({ name: 'DOMINIOSERV', type: 'varchar2', length: 150, nullable: true })
  serverDomain?: string | null;

  @Column({ name: 'NOMEREMETENTE', type: 'varchar2', length: 150, nullable: true })
  senderName?: string | null;

  @Column({ name: 'EMAILREMETENTE', type: 'varchar2', length: 150, nullable: true })
  senderEmail?: string | null;

  @Column({ name: 'SERVIDORSMTP', type: 'varchar2', length: 150, nullable: true })
  smtpServer?: string | null;

  @Column({ name: 'EMAILRESPOSTA', type: 'varchar2', length: 150, nullable: true })
  replyEmail?: string | null;

  @Column({ name: 'EMAILCOPIARESPOSTA', type: 'varchar2', length: 150, nullable: true })
  replyCopyEmail?: string | null;

  @Column({ name: 'PORTASERV', type: 'number', precision: 5, scale: 0, nullable: true })
  serverPort?: number | null;

  @Column({ name: 'USUARIOPROXY', type: 'varchar2', length: 40, nullable: true })
  proxyUser?: string | null;

  @Column({ name: 'SENHAPROXY', type: 'varchar2', length: 10, nullable: true })
  proxyPassword?: string | null;

  @Column({ name: 'ENDERECOPROXY', type: 'varchar2', length: 150, nullable: true })
  proxyAddress?: string | null;

  @Column({ name: 'PORTAPROXY', type: 'number', precision: 5, scale: 0, nullable: true })
  proxyPort?: number | null;

  @Column({ name: 'SERIENFEREMMANISFESTOSCAN', type: 'varchar2', length: 3, nullable: true })
  nfeRemManifestScanSeries?: string | null;

  @Column({ name: 'PROXNUMNFEREMMANISFESTOSCAN', type: 'number', precision: 9, scale: 0, nullable: true })
  nextNfeRemManifestScanNumber?: number | null;

  @Column({ name: 'SERIENFEDEVMANIFESTOSCAN', type: 'varchar2', length: 3, nullable: true })
  nfeDevManifestScanSeries?: string | null;

  @Column({ name: 'PROXNUMNFEDEVMANISFESTOSCAN', type: 'number', precision: 9, scale: 0, nullable: true })
  nextNfeDevManifestScanNumber?: number | null;

  @Column({ name: 'SERIENFEREMMANISFESTO', type: 'varchar2', length: 3, nullable: true })
  nfeRemManifestSeries?: string | null;

  @Column({ name: 'PROXNUMNFEREMMANISFESTO', type: 'number', precision: 9, scale: 0, nullable: true })
  nextNfeRemManifestNumber?: number | null;

  @Column({ name: 'SERIENFEDEVMANIFESTO', type: 'varchar2', length: 3, nullable: true })
  nfeDevManifestSeries?: string | null;

  @Column({ name: 'PROXNUMNFEDEVMANISFESTO', type: 'number', precision: 9, scale: 0, nullable: true })
  nextNfeDevManifestNumber?: number | null;

  @Column({ name: 'CNPJ_PAF', type: 'varchar2', length: 14, nullable: true })
  pafCnpj?: string | null;

  @Column({ name: 'NOME_PAF', type: 'varchar2', length: 40, nullable: true })
  pafName?: string | null;

  @Column({ name: 'ROTINALANC', type: 'varchar2', length: 48, nullable: true })
  routineLaunch?: string | null;

  @Column({ name: 'CODMD5_PAF', type: 'varchar2', length: 40, nullable: true })
  pafMd5Code?: string | null;

  @Column({ name: 'PROXNUMNFS', type: 'number', precision: 10, scale: 0, nullable: true, default: '0' })
  nextNfsNumber?: number | null;

  @Column({ name: 'SERIENFS', type: 'varchar2', length: 3, nullable: true })
  nfsSeries?: string | null;

  @Column({ name: 'PROXNUMCTE', type: 'number', precision: 10, scale: 0, nullable: true })
  nextCteNumber?: number | null;

  @Column({ name: 'SERIECTE', type: 'varchar2', length: 3, nullable: true })
  cteSeries?: string | null;

  @Column({ name: 'PROXNUMNFEIMPORTACAO', type: 'number', precision: 9, scale: 0, nullable: true })
  nextImportNfeNumber?: number | null;

  @Column({ name: 'SERIENFEIMPORTACAO', type: 'varchar2', length: 3, nullable: true })
  importNfeSeries?: string | null;

  @Column({ name: 'PROXNUMNFESCANIMPORTACAO', type: 'number', precision: 9, scale: 0, nullable: true })
  nextImportNfeScanNumber?: number | null;

  @Column({ name: 'SERIENFESCANIMPORTACAO', type: 'varchar2', length: 3, nullable: true })
  importNfeScanSeries?: string | null;

  @Column({ name: 'DATAHORA_PRIMEIRODOCUMENTO_ECF', type: 'varchar2', length: 19, nullable: true })
  ecfFirstDocDateTime?: string | null;

  @Column({ name: 'TIPOFILIAL', type: 'varchar2', length: 1, nullable: true, default: '1' })
  branchType?: string | null;

  @Column({ name: 'DIASCURVATURA', type: 'number', precision: 6, scale: 0, nullable: true })
  curvatureDays?: number | null;

  @Column({ name: 'PERCEVOLUCAOABC', type: 'number', precision: 6, scale: 0, nullable: true })
  abcEvolutionPerc?: number | null;

  @Column({ name: 'PERCDECLINIOABC', type: 'number', precision: 6, scale: 0, nullable: true })
  abcDeclinePerc?: number | null;

  @Column({ name: 'MIXMINIMO', type: 'number', precision: 6, scale: 0, nullable: true })
  minMix?: number | null;

  @Column({ name: 'MIXMAXIMO', type: 'number', precision: 6, scale: 0, nullable: true })
  maxMix?: number | null;

  @Column({ name: 'QTMAXPEDIDO', type: 'number', precision: 6, scale: 0, nullable: true })
  maxOrderQty?: number | null;

  @Column({ name: 'ARREDONDAQTGIRODIA', type: 'varchar2', length: 1, nullable: true })
  roundGiroDayQty?: string | null;

  @Column({ name: 'PERCPARTICIPACLASSEA', type: 'number', precision: 5, scale: 2, nullable: true })
  classAParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPACLASSEB', type: 'number', precision: 5, scale: 2, nullable: true })
  classBParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEA1', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassA1ParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEB1', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassB1ParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEA2', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassA2ParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEB2', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassB2ParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEA3', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassA3ParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEB3', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassB3ParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEC1', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassC1ParticipationPerc?: number | null;

  @Column({ name: 'PERCPARTICIPASUBCLASSEC2', type: 'number', precision: 5, scale: 2, nullable: true })
  subClassC2ParticipationPerc?: number | null;

  @Column({ name: 'DIASPRAZOTRANSF', type: 'number', precision: 4, scale: 0, nullable: true })
  transfTermDays?: number | null;

  @Column({ name: 'DEPFECHADO', type: 'varchar2', length: 1, nullable: true })
  closedDepo?: string | null;

  @Column({ name: 'CODGLN', type: 'number', precision: 13, scale: 0, nullable: true })
  glnCode?: number | null;

  @Column({ name: 'CODGRUPOLOJA', type: 'number', precision: 6, scale: 0, nullable: true })
  storeGroupCode?: number | null;

  @Column({ name: 'MATRICULASNGPC', type: 'number', precision: 8, scale: 0, nullable: true })
  sngpcRegistration?: number | null;

  @Column({ name: 'MATRICULASNGPCANT', type: 'number', precision: 8, scale: 0, nullable: true })
  oldSngpcRegistration?: number | null;

  @Column({ name: 'DTALTMATRICSNGPC', type: 'date', nullable: true })
  sngpcRegistrationAltDate?: Date | null;

  @Column({ name: 'DIREXPXMLSNGPC', type: 'varchar2', length: 200, nullable: true })
  sngpcXmlExpDir?: string | null;

  @Column({ name: 'NSU', type: 'number', precision: 15, scale: 0, nullable: true })
  nsu?: number | null;

  @Column({ name: 'DTULTCONSULTAMANIF', type: 'date', nullable: true })
  lastManifConsultDate?: Date | null;

  @Column({ name: 'PROXNUMMDFE', type: 'number', precision: 10, scale: 0, nullable: true })
  nextMdfeNumber?: number | null;

  @Column({ name: 'SERIEMDFE', type: 'varchar2', length: 3, nullable: true })
  mdfeSeries?: string | null;

  @Column({ name: 'CONTROLENFEPORROTA', type: 'varchar2', length: 1, nullable: true })
  controlNfeByRoute?: string | null;

  @Column({ name: 'PERCMINDIFPRODSIMIL', type: 'number', precision: 8, scale: 4, nullable: true })
  minPercDifProdSimil?: number | null;

  @Column({ name: 'EMPRESAGRANDEPORTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  largeCompany?: string | null;

  @Column({ name: 'ENDERECOCOMP', type: 'varchar2', length: 60, nullable: true })
  addressComp?: string | null;

  @Column({ name: 'FIID', type: 'varchar2', length: 50, nullable: true })
  fiid?: string | null;

  @Column({ name: 'CODNATUREZAJURIDICA', type: 'number', precision: 4, scale: 0, nullable: true })
  legalNatureCode?: number | null;

  @Column({ name: 'UTILIZAKITABERTO', type: 'varchar2', length: 1, nullable: true })
  useOpenKit?: string | null;

  @Column({ name: 'FILIALCONTRATANTESERASA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  serasaContractorBranch?: string | null;

  @Column({ name: 'CGCAUTORIZAXML', type: 'varchar2', length: 14, nullable: true })
  xmlAuthCnpj?: string | null;

  @Column({ name: 'CONTROLENFEPORSERIEDEPOFECHADO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  controlNfeByClosedDepoSeries?: string | null;

  @Column({ name: 'PROXNUMNOTAREMDEP', type: 'number', precision: 10, scale: 0, nullable: true })
  nextRemDepNoteNumber?: number | null;

  @Column({ name: 'SERIEREMDEP', type: 'varchar2', length: 3, nullable: true })
  remDepSeries?: string | null;

  @Column({ name: 'SEQUENCIACRC', type: 'varchar2', length: 20, nullable: true })
  crcSequence?: string | null;

  @Column({ name: 'DTVALIDADEDHPC', type: 'date', nullable: true })
  dhpcValidityDate?: Date | null;

  @Column({ name: 'USARFWINTHOR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useWinthorRf?: string | null;

  @Column({ name: 'DTVIRADARF', type: 'date', nullable: true })
  rfTurnDate?: Date | null;

  @Column({ name: 'PROXNUMRPS', type: 'number', precision: 10, scale: 0, nullable: true })
  nextRpsNumber?: number | null;

  @Column({ name: 'SERIERPS', type: 'varchar2', length: 3, nullable: true })
  rpsSeries?: string | null;

  @Column({ name: 'CODIGOTSS', type: 'varchar2', length: 20, nullable: true })
  tssCode?: string | null;

  @Column({ name: 'UTILIZATSS', type: 'varchar2', length: 1, nullable: true })
  useTss?: string | null;

  @Column({ name: 'INFOAMBIENTEINTEGRADOTSS', type: 'varchar2', length: 1, nullable: true })
  tssIntegratedEnvInfo?: string | null;

  @Column({ name: 'INFOCERTIFICADOINTEGRADOTSS', type: 'varchar2', length: 1, nullable: true })
  tssIntegratedCertInfo?: string | null;

  @Column({ name: 'SENHACERTIFICADO', type: 'varchar2', length: 50, nullable: true })
  certificatePassword?: string | null;

  @Column({ name: 'CODFILIALENTCUSTO', type: 'varchar2', length: 2, nullable: true })
  costEntryBranchCode?: string | null;

  @Column({ name: 'CODFILIALENTRADA', type: 'varchar2', length: 2, nullable: true })
  entryBranchCode?: string | null;

  @Column({ name: 'IDTOKENCERTIFICADOA1', type: 'varchar2', length: 50, nullable: true })
  idTokenCertificateA1?: string | null;

  @Column({ name: 'TOKENCERTIFICADOA1', type: 'varchar2', length: 50, nullable: true })
  tokenCertificateA1?: string | null;

  @Column({ name: 'VERSAOLAYOUTNFCE', type: 'varchar2', length: 4, nullable: true, default: '3.10' })
  nfceLayoutVersion?: string | null;

  @Column({ name: 'UTILIZARECALCULOSTCHECKOUT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useRecalcStCheckout?: string | null;

  @Column({ name: 'CODIGONACIONALOBRAS', type: 'varchar2', length: 14, nullable: true })
  nationalCodesWorks?: string | null;

  @Column({ name: 'VERSAOQRCODE', type: 'varchar2', length: 4, nullable: true, default: '1.0' })
  qrcodeVersion?: string | null;

  @Column({ name: 'CODFILIALCIASHOP', type: 'number', precision: 22, scale: 0, nullable: true })
  ciashopBranchCode?: number | null;

  @Column({ name: 'CODFILIALRETIRAREPLOJA', type: 'varchar2', length: 2, nullable: true })
  storeReplRemoveBranchCode?: string | null;

  @Column({ name: 'LOJAREALIZAREPOSICAO', type: 'varchar2', length: 1, nullable: true })
  storePerformsRepl?: string | null;

  @Column({ name: 'PROXCODDEPOSITO', type: 'number', precision: 10, scale: 0, nullable: true })
  nextDepositCode?: number | null;

  @Column({ name: 'CONTRATANTESERASA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  serasaContractor?: string | null;

  @Column({ name: 'CODIGORNTRC', type: 'varchar2', length: 30, nullable: true })
  rntrcCode?: string | null;

  @Column({ name: 'PROXNUMNOTAAJUSTE', type: 'number', precision: 10, scale: 0, nullable: true })
  nextAdjustmentNoteNumber?: number | null;

  @Column({ name: 'SERIENFEAJUSTE', type: 'varchar2', length: 3, nullable: true })
  adjustmentNfeSeries?: string | null;

  @Column({ name: 'UTILIZACONCENTRADORPDV', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePdvConcentrator?: string | null;

  @Column({ name: 'UTILIZAPAYMENTHUB', type: 'varchar2', length: 1, nullable: true })
  usePaymentHub?: string | null;

  @Column({ name: 'HUBUSERNAME', type: 'varchar2', length: 50, nullable: true })
  hubUsername?: string | null;

  @Column({ name: 'HUBPASSWORD', type: 'varchar2', length: 50, nullable: true })
  hubPassword?: string | null;

  @Column({ name: 'HUBCLIENTID', type: 'varchar2', length: 100, nullable: true })
  hubClientId?: string | null;

  @Column({ name: 'HUBCLIENTSECRET', type: 'varchar2', length: 100, nullable: true })
  hubClientSecret?: string | null;

  @Column({ name: 'HUBAPI', type: 'varchar2', length: 200, nullable: true })
  hubApi?: string | null;

  @Column({ name: 'HUBTOKEN', type: 'varchar2', length: 200, nullable: true })
  hubToken?: string | null;

  @Column({ name: 'MAXNSUSEFAZ', type: 'number', precision: 15, scale: 0, nullable: true })
  maxNsuSefaz?: number | null;

  @Column({ name: 'STATUSULTCONSULTANSUSEFAZ', type: 'varchar2', length: 4, nullable: true })
  statusLastConsultNsuSefaz?: string | null;

  @Column({ name: 'ESTOQUEHASH', type: 'varchar2', length: 64, nullable: true })
  stockHash?: string | null;

  @Column({ name: 'DTINICIOLICENCAPDV', type: 'date', nullable: true })
  pdvLicenseStartDate?: Date | null;

  @Column({ name: 'HUBNUMCAIXAPADRAO', type: 'number', precision: 4, scale: 0, nullable: true })
  hubDefaultBoxNumber?: number | null;

  @Column({ name: 'IRREGULARIDADECADSEFAZ', type: 'varchar2', length: 3, nullable: true })
  sefazRegIrregularity?: string | null;

  @Column({ name: 'CODFILIALINTEGRACAO', type: 'number', precision: 3, scale: 0, nullable: true })
  integrationBranchCode?: number | null;

  @Column({ name: 'CONTRATOSERASA', type: 'varchar2', length: 1, nullable: true, default: 'T' })
  serasaContract?: string | null;

  @Column({ name: 'RAZAOSOCIALRESPTEC', type: 'varchar2', length: 60, nullable: true })
  techRespCorporateName?: string | null;

  @Column({ name: 'CNPJRESPTEC', type: 'varchar2', length: 14, nullable: true })
  techRespCnpj?: string | null;

  @Column({ name: 'TELEFONERESPTEC', type: 'varchar2', length: 14, nullable: true })
  techRespPhone?: string | null;

  @Column({ name: 'EMAILRESPTEC', type: 'varchar2', length: 60, nullable: true })
  techRespEmail?: string | null;

  @Column({ name: 'DTALTERC5', type: 'timestamp', precision: 6, nullable: true })
  c5ChangeDate?: Date | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsChangeDate?: Date | null;

  @Column({ name: 'STATUSULTCONSULTANSUSEFAZCTE', type: 'varchar2', length: 4, nullable: true })
  statusLastConsultNsuSefazCte?: string | null;

  @Column({ name: 'NSUCTE', type: 'number', precision: 15, scale: 0, nullable: true })
  nsuCte?: number | null;

  @Column({ name: 'MAXNSUSEFAZCTE', type: 'number', precision: 15, scale: 0, nullable: true })
  maxNsuSefazCte?: number | null;

  @Column({ name: 'DTULTCONSULTACTESDESTINADOS', type: 'date', nullable: true })
  lastConsultCteDestDate?: Date | null;
}