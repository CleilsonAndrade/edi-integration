import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'PCCONSUM',
})
export class PcconsumEntity {
  @PrimaryColumn({ name: 'PROXNUMLANC', type: 'number', precision: 8, scale: 0 })
  nextIssueRelease: number;

  @Column({ name: 'TX', type: 'number', precision: 8, scale: 6, nullable: true })
  rate: number | null;

  @Column({ name: 'DTPROXATU', type: 'date', nullable: true })
  nextUpdateDate: Date | null;

  @Column({ name: 'CODCONTFOR', type: 'number', precision: 10, scale: 0, nullable: true })
  supplierAccountCode: number | null;

  @Column({ name: 'HISTFOR', type: 'varchar2', length: 40, nullable: true })
  supplierHistory: string | null;

  @Column({ name: 'CODCONTFRE', type: 'number', precision: 10, scale: 0, nullable: true })
  freightAccountCode: number | null;

  @Column({ name: 'HISTFRE', type: 'varchar2', length: 40, nullable: true })
  freightHistory: string | null;

  @Column({ name: 'CODCONTOUT', type: 'number', precision: 10, scale: 0, nullable: true })
  otherAccountCode: number | null;

  @Column({ name: 'HISTOUT', type: 'varchar2', length: 40, nullable: true })
  otherHistory: string | null;

  @Column({ name: 'CODCONTCLI', type: 'number', precision: 10, scale: 0, nullable: true })
  clientAccountCode: number | null;

  @Column({ name: 'SUGVENDA', type: 'number', precision: 2, scale: 0, nullable: true })
  salesSuggestion: number | null;

  @Column({ name: 'TXVENDA', type: 'number', precision: 8, scale: 6, nullable: true })
  salesRate: number | null;

  @Column({ name: 'NUMDIASATU', type: 'number', precision: 2, scale: 0, nullable: true })
  updateDays: number | null;

  @Column({ name: 'PROXNUMTROCA', type: 'number', precision: 6, scale: 0, nullable: true })
  nextExchangeNumber: number | null;

  @Column({ name: 'PROXNUMPED', type: 'number', precision: 8, scale: 0, nullable: true })
  nextOrderNumber: number | null;

  @Column({ name: 'PROXNUMORC', type: 'number', precision: 10, scale: 0, nullable: true })
  nextBudgetNumber: number | null;

  @Column({ name: 'CGC', type: 'varchar2', length: 20, nullable: true })
  cnpj: string | null;

  @Column({ name: 'IE', type: 'varchar2', length: 20, nullable: true })
  stateRegistration: string | null;

  @Column({ name: 'ENDERECO', type: 'varchar2', length: 40, nullable: true })
  address: string | null;

  @Column({ name: 'TELEFONE', type: 'varchar2', length: 13, nullable: true })
  phone: string | null;

  @Column({ name: 'FAX', type: 'varchar2', length: 13, nullable: true })
  fax: string | null;

  @Column({ name: 'CIDADE', type: 'varchar2', length: 15, nullable: true })
  city: string | null;

  @Column({ name: 'ESTADO', type: 'varchar2', length: 2, nullable: true })
  state: string | null;

  @Column({ name: 'CEP', type: 'varchar2', length: 9, nullable: true })
  zipCode: string | null;

  @Column({ name: 'TAXA0', type: 'number', precision: 8, scale: 4, nullable: true })
  rate0: number | null;

  @Column({ name: 'TAXA7', type: 'number', precision: 8, scale: 4, nullable: true })
  rate7: number | null;

  @Column({ name: 'TAXA14', type: 'number', precision: 8, scale: 4, nullable: true })
  rate14: number | null;

  @Column({ name: 'TAXA21', type: 'number', precision: 8, scale: 4, nullable: true })
  rate21: number | null;

  @Column({ name: 'TAXA28', type: 'number', precision: 8, scale: 4, nullable: true })
  rate28: number | null;

  @Column({ name: 'PROXNUMCAR', type: 'number', precision: 8, scale: 0, nullable: true })
  nextLoadNumber: number | null;

  @Column({ name: 'PROXNUMCLI', type: 'number', precision: 6, scale: 0, nullable: true })
  nextClientNumber: number | null;

  @Column({ name: 'VLDIFERENCA', type: 'number', precision: 10, scale: 2, nullable: true })
  differenceValue: number | null;

  @Column({ name: 'PROXNUMBONUS', type: 'number', precision: 10, scale: 0, nullable: true })
  nextBonusNumber: number | null;

  @Column({ name: 'TAXA35', type: 'number', precision: 8, scale: 4, nullable: true })
  rate35: number | null;

  @Column({ name: 'PROXNUMVALE', type: 'number', precision: 6, scale: 0, nullable: true })
  nextVoucherNumber: number | null;

  @Column({ name: 'PERCJUROSMORA', type: 'number', precision: 8, scale: 4, nullable: true, default: '0' })
  defaultInterestLegacyPerc: number | null;

  @Column({ name: 'PROXNUMPEDTLMK', type: 'number', precision: 8, scale: 0, nullable: true })
  nextTlmkOrderNumber: number | null;

  @Column({ name: 'PROXNUMBORDERO', type: 'number', precision: 10, scale: 0, nullable: true })
  nextBorderoNumber: number | null;

  @Column({ name: 'PROXNUMTRANS', type: 'number', precision: 10, scale: 0, nullable: true })
  nextTransferNumber: number | null;

  @Column({ name: 'PROXNUMVERBA', type: 'number', precision: 8, scale: 0, nullable: true })
  nextFundNumber: number | null;

  @Column({ name: 'PROXNUMTRANSVENDA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextSaleTransferNumber: number | null;

  @Column({ name: 'EMPRESA', type: 'varchar2', length: 40, nullable: true })
  company: string | null;

  @Column({ name: 'IPTABPRECO', type: 'varchar2', length: 15, nullable: true })
  ipPriceTable: string | null;

  @Column({ name: 'VALOR_FRETE_PADRAO', type: 'number', precision: 10, scale: 2, nullable: true })
  standardFreightValue: number | null;

  @Column({ name: 'ACEITADESCTMK', type: 'varchar2', length: 1, nullable: true })
  acceptTmkDiscount: string | null;

  @Column({ name: 'DIRWINTHOR', type: 'varchar2', length: 40, nullable: true })
  winthorDir: string | null;

  @Column({ name: 'DIRWINTHORREMOTO', type: 'varchar2', length: 40, nullable: true })
  remoteWinthorDir: string | null;

  @Column({ name: 'PROXNUMTRANSENT', type: 'number', precision: 10, scale: 0, nullable: true })
  nextEntryTransferNumber: number | null;

  @Column({ name: 'PROXNUMNEG', type: 'number', precision: 10, scale: 0, nullable: true })
  nextNegotiationNumber: number | null;

  @Column({ name: 'TAXA42', type: 'number', precision: 8, scale: 4, nullable: true })
  rate42: number | null;

  @Column({ name: 'CODCONTANTPAG', type: 'number', precision: 10, scale: 0, nullable: true })
  ntPayAccountCode: number | null;

  @Column({ name: 'CODCONTRECJUR', type: 'number', precision: 10, scale: 0, nullable: true })
  legalRecAccountCode: number | null;

  @Column({ name: 'CODCONTPAGJUR', type: 'number', precision: 10, scale: 0, nullable: true })
  legalPayAccountCode: number | null;

  @Column({ name: 'CODCONTAJUSTEEST', type: 'number', precision: 10, scale: 0, nullable: true })
  stockAdjustmentAccountCode: number | null;

  @Column({ name: 'DTVENCTT', type: 'date', nullable: true })
  dueDateTt: Date | null;

  @Column({ name: 'DTVENCTK', type: 'date', nullable: true })
  dueDateTk: Date | null;

  @Column({ name: 'NUMORDABAS', type: 'number', precision: 10, scale: 0, nullable: true })
  supplyOrderNumber: number | null;

  @Column({ name: 'PERCAPANHA', type: 'number', precision: 6, scale: 2, nullable: true })
  pickingPerc: number | null;

  @Column({ name: 'VOLUMETRANSF', type: 'number', precision: 6, scale: 2, nullable: true })
  transferVolume: number | null;

  @Column({ name: 'PESOTRANSF', type: 'number', precision: 6, scale: 2, nullable: true })
  transferWeight: number | null;

  @Column({ name: 'ENTREGA_FUTURA', type: 'varchar2', length: 1, nullable: true })
  futureDelivery: string | null;

  @Column({ name: 'USADVPRODUTO', type: 'varchar2', length: 1, nullable: true })
  useProductDv: string | null;

  @Column({ name: 'MARGEMMIN', type: 'number', precision: 4, scale: 2, nullable: true })
  minMargin: number | null;

  @Column({ name: 'CALCJUROSDESD', type: 'varchar2', length: 1, nullable: true })
  calcSplitInterest: string | null;

  @Column({ name: 'LEITURACH', type: 'varchar2', length: 1, nullable: true })
  checkReading: string | null;

  @Column({ name: 'CODSETORMOTORISTA', type: 'number', precision: 6, scale: 0, nullable: true })
  driverSectorCode: number | null;

  @Column({ name: 'CODSETORCOMPRADOR', type: 'number', precision: 6, scale: 0, nullable: true })
  buyerSectorCode: number | null;

  @Column({ name: 'LIMCREDINICIAL', type: 'number', precision: 15, scale: 2, nullable: true })
  initialCreditLimit: number | null;

  @Column({ name: 'USUARIOLOGON', type: 'varchar2', length: 10, nullable: true })
  logonUser: string | null;

  @Column({ name: 'SENHALOGON', type: 'varchar2', length: 32, nullable: true })
  logonPassword: string | null;

  @Column({ name: 'CODCONTEMPREST', type: 'number', precision: 10, scale: 0, nullable: true })
  loanAccountCode: number | null;

  @Column({ name: 'CODSETOREXPED', type: 'number', precision: 6, scale: 0, nullable: true })
  shippingSectorCode: number | null;

  @Column({ name: 'CODCONTALP', type: 'number', precision: 10, scale: 0, nullable: true })
  lpAccountCode: number | null;

  @Column({ name: 'MARGEMPREV', type: 'number', precision: 6, scale: 2, nullable: true })
  prevMargin: number | null;

  @Column({ name: 'VLMINTARIFABANC', type: 'number', precision: 18, scale: 6, nullable: true })
  minBankFeeValue: number | null;

  @Column({ name: 'VLTARIFA', type: 'number', precision: 8, scale: 2, nullable: true })
  feeValue: number | null;

  @Column({ name: 'CODCLICONSUMIDOR', type: 'number', precision: 10, scale: 0, nullable: true })
  consumerClientCode: number | null;

  @Column({ name: 'NUMAUTOMATICFOR', type: 'varchar2', length: 1, nullable: true })
  autoSupplierNumber: string | null;

  @Column({ name: 'NUMAUTOMATICPROD', type: 'varchar2', length: 1, nullable: true })
  autoProductNumber: string | null;

  @Column({ name: 'PROXNUMFORNEC', type: 'number', precision: 6, scale: 0, nullable: true })
  nextSupplierNumber: number | null;

  @Column({ name: 'PROXNUMPRODUT', type: 'number', precision: 6, scale: 0, nullable: true })
  nextProductNumber: number | null;

  @Column({ name: 'PRAZOENTREGA', type: 'number', precision: 4, scale: 0, nullable: true })
  deliveryTerm: number | null;

  @Column({ name: 'TEMREPOS', type: 'number', precision: 4, scale: 0, nullable: true })
  replenishmentTime: number | null;

  @Column({ name: 'CGCCLIEXCLUSIVO', type: 'varchar2', length: 1, nullable: true })
  exclusiveClientCnpj: string | null;

  @Column({ name: 'NUMDIASBLOQAUTOMATIC', type: 'number', precision: 4, scale: 0, nullable: true })
  autoBlockDays: number | null;

  @Column({ name: 'NUMDIASMINDESPPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  minPayExpenseDays: number | null;

  @Column({ name: 'IMPCARTACOBJUROS', type: 'varchar2', length: 1, nullable: true })
  printInterestCollectionLetter: string | null;

  @Column({ name: 'RATEIODESCBAIXACR', type: 'varchar2', length: 1, nullable: true })
  rateDiscountCrWriteOff: string | null;

  @Column({ name: 'PERMITIRDESDDEVCLI', type: 'varchar2', length: 1, nullable: true })
  allowClientReturnSplit: string | null;

  @Column({ name: 'PROXNUMTRANSVENDOR', type: 'number', precision: 8, scale: 0, nullable: true })
  nextVendorTransferNumber: number | null;

  @Column({ name: 'TXVENDORCLI', type: 'number', precision: 32, scale: 18, nullable: true })
  clientVendorRate: number | null;

  @Column({ name: 'CALCCREDICMS', type: 'varchar2', length: 1, nullable: true })
  calcIcmsCredit: string | null;

  @Column({ name: 'PERBASEVEND', type: 'number', precision: 6, scale: 2, nullable: true })
  salesBasePerc: number | null;

  @Column({ name: 'IMPQTBONUS', type: 'varchar2', length: 1, nullable: true })
  printBonusQty: string | null;

  @Column({ name: 'NUMDIASCLIINATIV', type: 'number', precision: 4, scale: 0, nullable: true })
  inactiveClientDays: number | null;

  @Column({ name: 'INDESPELHO', type: 'varchar2', length: 1, nullable: true })
  mirrorIndex: string | null;

  @Column({ name: 'NUMCASASDECCUSTO', type: 'number', precision: 2, scale: 0, nullable: true })
  costDecimalPlaces: number | null;

  @Column({ name: 'CODCONTAREQMP', type: 'number', precision: 10, scale: 0, nullable: true })
  reqMpAccountCode: number | null;

  @Column({ name: 'COLUNAFLUXOCXCR1', type: 'varchar2', length: 8, nullable: true })
  cashFlowColCr1: string | null;

  @Column({ name: 'COLUNAFLUXOCXCR2', type: 'varchar2', length: 8, nullable: true })
  cashFlowColCr2: string | null;

  @Column({ name: 'COLUNAFLUXOCXCR3', type: 'varchar2', length: 8, nullable: true })
  cashFlowColCr3: string | null;

  @Column({ name: 'COLUNAFLUXOCXCR4', type: 'varchar2', length: 8, nullable: true })
  cashFlowColCr4: string | null;

  @Column({ name: 'COLUNAFLUXOCXCR5', type: 'varchar2', length: 8, nullable: true })
  cashFlowColCr5: string | null;

  @Column({ name: 'CODCONTDEVCLI', type: 'number', precision: 10, scale: 0, nullable: true })
  clientReturnAccountCode: number | null;

  @Column({ name: 'CODCONTDEBV', type: 'number', precision: 10, scale: 0, nullable: true })
  debvAccountCode: number | null;

  @Column({ name: 'AVISAFALTAEST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  warnStockShortage: string | null;

  @Column({ name: 'PERMITIRDIVNFDUPLIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowDuplicateNfSplit: string | null;

  @Column({ name: 'DTPROXFECHAMES', type: 'date', nullable: true })
  nextMonthCloseDate: Date | null;

  @Column({ name: 'DTVENCANTDESD', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  dueDateAntSplit: string | null;

  @Column({ name: 'INCDUPJUROSDESD', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  incDupInterestSplit: string | null;

  @Column({ name: 'PEDVENDADEPTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  deptSalesOrder: string | null;

  @Column({ name: 'DESCVENDA', type: 'varchar2', length: 1, nullable: true, default: 'P' })
  salesDiscount: string | null;

  @Column({ name: 'ACEITAVENDASEMEST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptNoStockSale: string | null;

  @Column({ name: 'CODCONTDESCCONC', type: 'number', precision: 10, scale: 0, nullable: true })
  grantedDiscountAccountCode: number | null;

  @Column({ name: 'BLOQVENDATP1TPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockSaleTp1Tpf: string | null;

  @Column({ name: 'NUMAUTOMATICCLI', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  autoClientNumber: string | null;

  @Column({ name: 'CODCONTICMSANTECIP', type: 'number', precision: 10, scale: 0, nullable: true })
  anticipatedIcmsAccountCode: number | null;

  @Column({ name: 'ACEITAVENDAALTUSUR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptSaleUserAlteration: string | null;

  @Column({ name: 'TIPOEMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'C' })
  packagingType: string | null;

  @Column({ name: 'EMITEPEDIDOVENDA', type: 'varchar2', length: 2, nullable: true, default: 'S' })
  emitSalesOrder: string | null;

  @Column({ name: 'SOMAICMSANTECIPDUPLIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sumAnticipatedIcmsDuplicate: string | null;

  @Column({ name: 'ACEITAVENDABLOQ', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptBlockedSale: string | null;

  @Column({ name: 'NUMCASASDECESTOQUE', type: 'number', precision: 2, scale: 0, nullable: true })
  stockDecimalPlaces: number | null;

  @Column({ name: 'UTILIZAORCVENDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useSalesBudget: string | null;

  @Column({ name: 'PROXNUMTRANSCRFOR', type: 'number', precision: 8, scale: 0, nullable: true })
  nextCrForTransferNumber: number | null;

  @Column({ name: 'PROXNUMAPLIC', type: 'number', precision: 8, scale: 0, nullable: true })
  nextApplicationNumber: number | null;

  @Column({ name: 'NUMVIASMAPASEP', type: 'number', precision: 2, scale: 0, nullable: true, default: 2 })
  separationMapCopies: number | null;

  @Column({ name: 'CODCONTAREBAIXACUSTO', type: 'number', precision: 10, scale: 0, nullable: true })
  costReductionRecAccountCode: number | null;

  @Column({ name: 'NUMCASASDECVENDA', type: 'number', precision: 2, scale: 0, nullable: true, default: 2 })
  salesDecimalPlaces: number | null;

  @Column({ name: 'NUMDIASUTEISSEMANA', type: 'number', precision: 4, scale: 0, nullable: true, default: 5 })
  businessDaysPerWeek: number | null;

  @Column({ name: 'TIPOCALCGIRODIA', type: 'varchar2', length: 1, nullable: true, default: 'A' })
  dailyTurnoverCalcType: string | null;

  @Column({ name: 'NUMDIASUTEISTRIMESTRE', type: 'number', precision: 4, scale: 0, nullable: true, default: 66 })
  businessDaysPerQuarter: number | null;

  @Column({ name: 'PERCMAXDESCCR', type: 'number', precision: 5, scale: 2, nullable: true, default: 50 })
  maxDiscountPercCr: number | null;

  @Column({ name: 'TIPOCUSTOTRANSF', type: 'varchar2', length: 1, nullable: true, default: 'F' })
  transferCostType: string | null;

  @Column({ name: 'INDICECUSTOTRANSF', type: 'number', precision: 8, scale: 4, nullable: true, default: 1 })
  transferCostIndex: number | null;

  @Column({ name: 'TAXATABPR', type: 'varchar2', length: 1, nullable: true, default: 'P' })
  priceTableRate: string | null;

  @Column({ name: 'VLPESODESCARGA', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadWeightValue: number | null;

  @Column({ name: 'VLVOLDESCARGA', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadVolumeValue: number | null;

  @Column({ name: 'CODCONTARECDESCARGA', type: 'number', precision: 10, scale: 0, nullable: true })
  unloadRecAccountCode: number | null;

  @Column({ name: 'PROXNUMCUSTODIA', type: 'number', precision: 6, scale: 0, nullable: true, default: 1 })
  nextDailyCostNumber: number | null;

  @Column({ name: 'VLMAXTARIFABANC', type: 'number', precision: 18, scale: 6, nullable: true, default: 0 })
  maxBankFeeValue: number | null;

  @Column({ name: 'DTPROCESSAMENTO', type: 'date', nullable: true })
  processingDate: Date | null;

  @Column({ name: 'PROXNUMCONHEC', type: 'number', precision: 8, scale: 0, nullable: true, default: 1 })
  nextKnowledgeNumber: number | null;

  @Column({ name: 'MONTANDO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  assembling: string | null;

  @Column({ name: 'USANUMCARVENDABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useCounterSalesLoadNumber: string | null;

  @Column({ name: 'SOMATARIFABANCDUPLIC', type: 'varchar2', length: 1, nullable: true })
  sumDuplicateBankFee: string | null;

  @Column({ name: 'CODCONTARESTCLI', type: 'number', precision: 10, scale: 0, nullable: true })
  clientRestitutionAccountCode: number | null;

  @Column({ name: 'USACREDRCA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useRcaCredit: string | null;

  @Column({ name: 'BLOQPRAZOMDVENDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockAvgSalesTerm: string | null;

  @Column({ name: 'SOMATARIFABANCNF', type: 'varchar2', length: 1, nullable: true })
  sumNfBankFee: string | null;

  @Column({ name: 'VLMINVENDA', type: 'number', precision: 12, scale: 2, nullable: true })
  minSalesValue: number | null;

  @Column({ name: 'NUMDIASBLOQCHP', type: 'number', precision: 2, scale: 0, nullable: true })
  chpBlockDays: number | null;

  @Column({ name: 'PERMAXVENDA', type: 'number', precision: 18, scale: 6, nullable: true, default: '50' })
  maxSalesPerc: number | null;

  @Column({ name: 'PERMITEDESCCR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowCrDiscount: string | null;

  @Column({ name: 'CODCONTADESCCR', type: 'number', precision: 10, scale: 0, nullable: true, default: '0' })
  crDiscountAccountCode: number | null;

  @Column({ name: 'PERMAXDESCVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  maxSalesDiscountPerc: number | null;

  @Column({ name: 'PERCMAXLIBESTOQUE', type: 'number', precision: 12, scale: 4, nullable: true })
  maxStockReleasePerc: number | null;

  @Column({ name: 'SALTARPAGINARUA', type: 'varchar2', length: 1, nullable: true })
  skipStreetPage: string | null;

  @Column({ name: 'UTILIZAEMBMASTER', type: 'varchar2', length: 1, nullable: true })
  useMasterPackaging: string | null;

  @Column({ name: 'ORDEMMAPA', type: 'number', precision: 2, scale: 0, nullable: true })
  mapOrder: number | null;

  @Column({ name: 'FORMMAPA', type: 'number', precision: 2, scale: 0, nullable: true })
  mapForm: number | null;

  @Column({ name: 'TIPORELMAPA', type: 'varchar2', length: 1, nullable: true })
  mapReportType: string | null;

  @Column({ name: 'PERMITEALTCODCOBVENDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowSalesCobCodeChange: string | null;

  @Column({ name: 'PROXNUMINVENTROT', type: 'number', precision: 8, scale: 0, nullable: true, default: '1' })
  nextRotInventoryNumber: number | null;

  @Column({ name: 'PROXNUMMANIF', type: 'number', precision: 8, scale: 0, nullable: true, default: 1 })
  nextManifestNumber: number | null;

  @Column({ name: 'QTMAXUNIDADEPF', type: 'number', precision: 4, scale: 0, nullable: true })
  maxPfUnitQty: number | null;

  @Column({ name: 'VLBLOQCHD3', type: 'number', precision: 12, scale: 2, nullable: true, default: '400' })
  blockChd3Value: number | null;

  @Column({ name: 'CODSETORCALLCENTER', type: 'number', precision: 6, scale: 0, nullable: true })
  callCenterSectorCode: number | null;

  @Column({ name: 'CODCOBINICIAL', type: 'varchar2', length: 4, nullable: true, default: 'CH' })
  initialCobCode: string | null;

  @Column({ name: 'EMITINDOMAPA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  emittingMap: string | null;

  @Column({ name: 'VLPESODESCARGAPAL', type: 'number', precision: 10, scale: 2, nullable: true })
  palletUnloadWeightValue: number | null;

  @Column({ name: 'VLVOLUMEDESCARGAFD', type: 'number', precision: 10, scale: 2, nullable: true })
  fdUnloadVolumeValue: number | null;

  @Column({ name: 'CODSETORDIRETORIA', type: 'number', precision: 4, scale: 2, nullable: true })
  directorateSectorCode: number | null;

  @Column({ name: 'NUMDIASMAXDESD1210', type: 'number', precision: 4, scale: 0, nullable: true, default: '60' })
  maxSplitDays1210: number | null;

  @Column({ name: 'NUMDIASMAXDESD402', type: 'number', precision: 4, scale: 0, nullable: true, default: '15' })
  maxSplitDays402: number | null;

  @Column({ name: 'VLMINVENDABK', type: 'number', precision: 12, scale: 2, nullable: true })
  minBkSalesValue: number | null;

  @Column({ name: 'TXIOF', type: 'number', precision: 12, scale: 4, nullable: true })
  iofRate: number | null;

  @Column({ name: 'CODFILIALCX', type: 'varchar2', length: 2, nullable: true, default: '1' })
  boxBranchCode: string | null;

  @Column({ name: 'PERMITECOMPRAFORNECBLOQ', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowBlockedSupplierPurchase: string | null;

  @Column({ name: 'USACOMISSAOPORCLIENTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useClientCommission: string | null;

  @Column({ name: 'USACOMISSAOPORRCA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useRcaCommission: string | null;

  @Column({ name: 'USANUMNFDEVCLI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useClientReturnNfNumber: string | null;

  @Column({ name: 'USACRECLIVENDABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useCounterSalesClientCredit: string | null;

  @Column({ name: 'GERARCRECLIDEVCLI', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  generateClientReturnCredit: string | null;

  @Column({ name: 'ZERALIMCREDBLOQAUTOMATIC', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  resetAutoBlockCreditLimit: string | null;

  @Column({ name: 'MUDACOBCLIENTE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  changeClientCob: string | null;

  @Column({ name: 'PERDESCMEDIOVENDA', type: 'number', precision: 5, scale: 2, nullable: true })
  avgSalesDiscountPerc: number | null;

  @Column({ name: 'CODHISTADICOMIS', type: 'number', precision: 4, scale: 0, nullable: true })
  commissionAdvHistoryCode: number | null;

  @Column({ name: 'CODHISTFECHCOMIS', type: 'number', precision: 4, scale: 0, nullable: true })
  commissionCloseHistoryCode: number | null;

  @Column({ name: 'CODHISTFECHCOMISNEG', type: 'number', precision: 4, scale: 0, nullable: true })
  negCommissionCloseHistoryCode: number | null;

  @Column({ name: 'LIMCREDINICIALPF', type: 'number', precision: 15, scale: 2, nullable: true })
  pfInitialCreditLimit: number | null;

  @Column({ name: 'REBAIXACUSTOULTENT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  reduceLastEntryCost: string | null;

  @Column({ name: 'USADESCPORQUANT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useQuantityDiscount: string | null;

  @Column({ name: 'NUMREGIAOPADRAO', type: 'number', precision: 4, scale: 0, nullable: true, default: '1' })
  defaultRegionNumber: number | null;

  @Column({ name: 'PERDESCMAXBALCAO', type: 'number', precision: 5, scale: 2, nullable: true })
  maxCounterDiscountPerc: number | null;

  @Column({ name: 'CODCONTAADIANTFOR', type: 'number', precision: 10, scale: 0, nullable: true, default: '0' })
  supplierAdvanceAccountCode: number | null;

  @Column({ name: 'PERMAXPCOMPRA', type: 'number', precision: 5, scale: 2, nullable: true, default: '0' })
  maxPurchasePerc: number | null;

  @Column({ name: 'NUMDIASMAXCANCNFSAIDA', type: 'number', precision: 3, scale: 0, nullable: true, default: '0' })
  maxExitNfCancelDays: number | null;

  @Column({ name: 'NUMDIASMAXCANCNFENT', type: 'number', precision: 2, scale: 0, nullable: true, default: '0' })
  maxEntryNfCancelDays: number | null;

  @Column({ name: 'CODSETOROPERCX', type: 'number', precision: 6, scale: 0, nullable: true })
  operCxSectorCode: number | null;

  @Column({ name: 'CODSETORFISCALCX', type: 'number', precision: 6, scale: 0, nullable: true })
  fiscalCxSectorCode: number | null;

  @Column({ name: 'CAMINHODIR', type: 'varchar2', length: 30, nullable: true })
  dirPath: string | null;

  @Column({ name: 'CONSOLIDANDO', type: 'varchar2', length: 1, nullable: true })
  consolidating: string | null;

  @Column({ name: 'PERLIMVENDAPF', type: 'number', precision: 8, scale: 4, nullable: true })
  pfSalesLimitPerc: number | null;

  @Column({ name: 'PERVENDAPF', type: 'number', precision: 8, scale: 4, nullable: true })
  pfSalesPerc: number | null;

  @Column({ name: 'EXIBIRPVENDA', type: 'varchar2', length: 1, nullable: true, default: 'B' })
  showSalesPrice: string | null;

  @Column({ name: 'USAICMSANTECIPPVENDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useAnticipatedIcmsSalesPrice: string | null;

  @Column({ name: 'CODCONTACOMISSAO', type: 'number', precision: 10, scale: 0, nullable: true, default: '2001001' })
  commissionAccountCode: number | null;

  @Column({ name: 'USAESTOQUEDEPFECHADO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useClosedDepotStock: string | null;

  @Column({ name: 'PRAZOVALIDADEPEDBALCAO', type: 'number', precision: 4, scale: 0, nullable: true, default: '7' })
  counterOrderValidityTerm: number | null;

  @Column({ name: 'VALIDAPRECOMINIMO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateMinPrice: string | null;

  @Column({ name: 'NUMDIASALTDTENTREGA', type: 'number', precision: 4, scale: 0, nullable: true, default: '15' })
  deliveryDateChangeDays: number | null;

  @Column({ name: 'GERACONTASPAGARDEVCLI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateClientReturnPayable: string | null;

  @Column({ name: 'BLOQPEDLIMCRED', type: 'varchar2', length: 1, nullable: true })
  blockCreditLimitOrder: string | null;

  @Column({ name: 'PROXNUMRCA', type: 'number', precision: 8, scale: 0, nullable: true })
  nextRcaNumber: number | null;

  @Column({ name: 'CODCONTAGUIAST', type: 'number', precision: 10, scale: 0, nullable: true, default: '0' })
  stGuideAccountCode: number | null;

  @Column({ name: 'PROXNUMINDENIZ', type: 'number', precision: 10, scale: 0, nullable: true, default: '1' })
  nextIndemnityNumber: number | null;

  @Column({ name: 'LIBERARPEDIDOPENDENTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  releasePendingOrder: string | null;

  @Column({ name: 'VERIFICALIMCREDCODCOBD', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  checkCreditLimitCobDCode: string | null;

  @Column({ name: 'ABATEFRETEVENDABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  slaughterCounterSalesFreight: string | null;

  @Column({ name: 'VLMAXVENDATLMKCODCOBD', type: 'number', precision: 12, scale: 2, nullable: true })
  maxTlmkSalesValueCobDCode: number | null;

  @Column({ name: 'PERMAXDIFENTRADA', type: 'number', precision: 5, scale: 2, nullable: true })
  maxEntryDiffPerc: number | null;

  @Column({ name: 'PERMINDIFENTRADA', type: 'number', precision: 5, scale: 2, nullable: true })
  minEntryDiffPerc: number | null;

  @Column({ name: 'VLMAXVENDA', type: 'number', precision: 16, scale: 3, nullable: true, default: '0' })
  maxSalesValue: number | null;

  @Column({ name: 'IMPRESSAOAUTOMATICA', type: 'varchar2', length: 1, nullable: true })
  automaticPrinting: string | null;

  @Column({ name: 'CONDVENDA1', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  salesCondition1: string | null;

  @Column({ name: 'CONDVENDA2', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition2: string | null;

  @Column({ name: 'CONDVENDA3', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition3: string | null;

  @Column({ name: 'CONDVENDA4', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition4: string | null;

  @Column({ name: 'CONDVENDA5', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition5: string | null;

  @Column({ name: 'CONDVENDA6', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition6: string | null;

  @Column({ name: 'REBAIXACUSTOCOMDESCFIN', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  reduceCostWithFinDiscount: string | null;

  @Column({ name: 'USAVALORMEDIOENTRADA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useAvgEntryValue: string | null;

  @Column({ name: 'PROXNUMSIMULACAOPCP', type: 'number', precision: 10, scale: 0, nullable: true, default: '1' })
  nextPcpSimulationNumber: number | null;

  @Column({ name: 'PROXNUMTIRA', type: 'number', precision: 8, scale: 0, nullable: true, default: '1' })
  nextStripNumber: number | null;

  @Column({ name: 'PROXNUMOP', type: 'number', precision: 8, scale: 0, nullable: true, default: '1' })
  nextOpNumber: number | null;

  @Column({ name: 'CODCONTACOMISSAO3', type: 'number', precision: 10, scale: 0, nullable: true })
  commissionAccountCode3: number | null;

  @Column({ name: 'PERDESCPROM', type: 'number', precision: 5, scale: 2, nullable: true })
  promotionalDiscountPerc: number | null;

  @Column({ name: 'NDIASEXPIRASENHA', type: 'number', precision: 4, scale: 0, nullable: true })
  passwordExpiryDays: number | null;

  @Column({ name: 'MENSAGEM1NF', type: 'varchar2', length: 80, nullable: true })
  nfMessage1: string | null;

  @Column({ name: 'MENSAGEM2NF', type: 'varchar2', length: 80, nullable: true })
  nfMessage2: string | null;

  @Column({ name: 'PROXNUMPCP', type: 'number', precision: 10, scale: 0, nullable: true })
  nextPcpNumber: number | null;

  @Column({ name: 'PROXNUMOPI', type: 'number', precision: 10, scale: 0, nullable: true })
  nextOpiNumber: number | null;

  @Column({ name: 'PERCMINJUROSMORA', type: 'number', precision: 8, scale: 4, nullable: true, default: '0' })
  minDefaultInterestPerc: number | null;

  @Column({ name: 'PERCMAXJUROSMORA', type: 'number', precision: 8, scale: 4, nullable: true, default: '0' })
  maxDefaultInterestPerc: number | null;

  @Column({ name: 'IMPORTANDOPEDIDOS', type: 'varchar2', length: 1, nullable: true })
  importingOrders: string | null;

  @Column({ name: 'SOMADESCCLIDESCPROD', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sumClientProdDiscount: string | null;

  @Column({ name: 'PRAZOADICIONALMAX', type: 'number', precision: 5, scale: 0, nullable: true, default: '99999' })
  maxAdditionalTerm: number | null;

  @Column({ name: 'EXPORTANDODADOS', type: 'varchar2', length: 1, nullable: true })
  exportingData: string | null;

  @Column({ name: 'USACATEGORIA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useCategory: string | null;

  @Column({ name: 'PROXNUMTRANSOP', type: 'number', precision: 10, scale: 0, nullable: true, default: '1' })
  nextOpTransferNumber: number | null;

  @Column({ name: 'PERMITEINICIAROPSEMMP', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowStartOpWithoutMp: string | null;

  @Column({ name: 'PROXNUMRPA', type: 'number', precision: 8, scale: 0, nullable: true, default: '1' })
  nextRpaNumber: number | null;

  @Column({ name: 'VLMAXVENDAPF', type: 'number', precision: 16, scale: 3, nullable: true, default: '0' })
  maxPfSalesValue: number | null;

  @Column({ name: 'PROXNUMCONTRATO', type: 'number', precision: 6, scale: 0, nullable: true })
  nextContractNumber: number | null;

  @Column({ name: 'BAIXAMPNAENTPA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  writeOffMpOnPaEntry: string | null;

  @Column({ name: 'MUDACOBCLIENTEDIAS', type: 'number', precision: 4, scale: 0, nullable: true, default: '10' })
  changeClientCobDays: number | null;

  @Column({ name: 'ACEITABKTV3', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptBkTv3: string | null;

  @Column({ name: 'ALTERARCONTAAJUSTEEST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  changeStockAdjustAccount: string | null;

  @Column({ name: 'AREADEAPANHA', type: 'varchar2', length: 1, nullable: true, default: 'P' })
  pickingArea: string | null;

  @Column({ name: 'CONDVENDA7', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition7: string | null;

  @Column({ name: 'CONDVENDA8', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition8: string | null;

  @Column({ name: 'CONDVENDA9', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition9: string | null;

  @Column({ name: 'CONDVENDA10', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition10: string | null;

  @Column({ name: 'CONDVENDA11', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition11: string | null;

  @Column({ name: 'CONDVENDA12', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition12: string | null;

  @Column({ name: 'CONDVENDA13', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition13: string | null;

  @Column({ name: 'CONDVENDA14', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition14: string | null;

  @Column({ name: 'CALCSTPF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  calcStPf: string | null;

  @Column({ name: 'UTILIZAPERCBASEREDPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePfRedBasePerc: string | null;

  @Column({ name: 'CODCONTAPRODUCAO', type: 'number', precision: 10, scale: 0, nullable: true })
  productionAccountCode: number | null;

  @Column({ name: 'CODCONTAQUALIDADE', type: 'number', precision: 10, scale: 0, nullable: true })
  qualityAccountCode: number | null;

  @Column({ name: 'NUMVIASFICHACP', type: 'number', precision: 4, scale: 0, nullable: true, default: '99' })
  cpSheetCopies: number | null;

  @Column({ name: 'PERCTOLERANCIAINTEIRO', type: 'number', precision: 6, scale: 3, nullable: true })
  integerTolerancePerc: number | null;

  @Column({ name: 'PERCTOLERANCIAQUEBRADO', type: 'number', precision: 6, scale: 3, nullable: true })
  decimalTolerancePerc: number | null;

  @Column({ name: 'PERCTOLERANCIAIMPUREZA', type: 'number', precision: 6, scale: 3, nullable: true })
  impurityTolerancePerc: number | null;

  @Column({ name: 'PERCTOLERANCIAVERMELHO', type: 'number', precision: 6, scale: 3, nullable: true })
  redTolerancePerc: number | null;

  @Column({ name: 'PERCTOLERANCIAUMIDADE', type: 'number', precision: 6, scale: 3, nullable: true })
  humidityTolerancePerc: number | null;

  @Column({ name: 'CONSIDERACMVDEVOLUCAO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  considerReturnCmv: string | null;

  @Column({ name: 'TIPOCUSTOAJUSTE', type: 'varchar2', length: 1, nullable: true, default: 'F' })
  adjustCostType: string | null;

  @Column({ name: 'CODCONTAMANUTCUSTO', type: 'number', precision: 10, scale: 0, nullable: true })
  costMaintAccountCode: number | null;

  @Column({ name: 'PRAZOMINVALIDADE', type: 'number', precision: 5, scale: 2, nullable: true })
  minValidityTerm: number | null;

  @Column({ name: 'PRAZOMAXVALIDADE', type: 'number', precision: 5, scale: 2, nullable: true })
  maxValidityTerm: number | null;

  @Column({ name: 'VALIDADVCODBARRA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateBarcodeDv: string | null;

  @Column({ name: 'DESDOBRARCADIFERENTE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  splitDifferentRca: string | null;

  @Column({ name: 'CALCCREDPISCOFINS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcPisCofinsCredit: string | null;

  @Column({ name: 'TIPOCALCST', type: 'varchar2', length: 2, nullable: true, default: 'T2' })
  stCalcType: string | null;

  @Column({ name: 'TIPOBAIXACOBMAG', type: 'number', precision: 2, scale: 0, nullable: true, default: '2' })
  magCobWriteOffType: number | null;

  @Column({ name: 'NUMDIASMAXFATURA', type: 'number', precision: 4, scale: 0, nullable: true })
  maxInvoiceDays: number | null;

  @Column({ name: 'NUMCUSTODIAAUTOMATIC', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  autoDailyCostNum: string | null;

  @Column({ name: 'DIRIMPORTACAOFV', type: 'varchar2', length: 100, nullable: true, default: '/sistema/winthor/palmtop' })
  fvImportDir: string | null;

  @Column({ name: 'DIREXPORTACAOFV', type: 'varchar2', length: 100, nullable: true, default: 'P:\\palmtop\\enviar' })
  fvExportDir: string | null;

  @Column({ name: 'PRECOPOREMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  priceByPackaging: string | null;

  @Column({ name: 'UTILIZAAUTORCPAGAR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useApAuthor: string | null;

  @Column({ name: 'USAPRZADICIONALVENDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useAdditionalSalesTerm: string | null;

  @Column({ name: 'PROXNUMLOTE', type: 'number', precision: 6, scale: 0, nullable: true })
  nextLotNumber: number | null;

  @Column({ name: 'PROXNUMLOTEMP', type: 'number', precision: 6, scale: 0, nullable: true })
  nextMpLotNumber: number | null;

  @Column({ name: 'PROXNUMLOTEEM', type: 'number', precision: 6, scale: 0, nullable: true })
  nextEmLotNumber: number | null;

  @Column({ name: 'ACRESCIMOPFCOMIE', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  pfIncreaseWithIe: string | null;

  @Column({ name: 'PERMITEPEDCOMPRAUNIDMASTER', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowMasterUnitPurchaseOrder: string | null;

  @Column({ name: 'PERMITEALTPLPAGVENDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowSalesPayPlanChange: string | null;

  @Column({ name: 'VALIDAPVENDABONIFIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateBonusSalesPrice: string | null;

  @Column({ name: 'PERMITEALTDTVENCENTMERC', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowMercEntryDueDateChange: string | null;

  @Column({ name: 'CALCULACUSTOENTPA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  calcPaEntryCost: string | null;

  @Column({ name: 'NUMCASASDECINVENTARIO', type: 'number', precision: 2, scale: 0, nullable: true })
  inventoryDecimalPlaces: number | null;

  @Column({ name: 'CODPLPAGINICIAL', type: 'number', precision: 4, scale: 0, nullable: true })
  initialPayPlanCode: number | null;

  @Column({ name: 'CODCONTAPERDAESTOQUE', type: 'number', precision: 10, scale: 0, nullable: true })
  stockLossAccountCode: number | null;

  @Column({ name: 'BONIFICALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  bonusChangeRcaDebCred: string | null;

  @Column({ name: 'USANFCOMPLEMENTARBK', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useBkComplementaryNf: string | null;

  @Column({ name: 'CODFILIALFV', type: 'varchar2', length: 2, nullable: true })
  fvBranchCode: string | null;

  @Column({ name: 'PERMITEPEDCOMPRAMULTIPLO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowMultiplePurchaseOrder: string | null;

  @Column({ name: 'CONDVENDA20', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  salesCondition20: string | null;

  @Column({ name: 'VLPALETEDESCARG', type: 'number', precision: 10, scale: 2, nullable: true })
  unloadPalletValue: number | null;

  @Column({ name: 'ALTERARFILIALENTPA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  changePaEntryBranch: string | null;

  @Column({ name: 'BLOQUEARENTPA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  blockPaEntry: string | null;

  @Column({ name: 'PROXNUMORDEMTRANSF', type: 'number', precision: 6, scale: 0, nullable: true, default: '1' })
  nextTransferOrderNumber: number | null;

  @Column({ name: 'BLOQUEIO', type: 'varchar2', length: 1, nullable: true })
  blocking: string | null;

  @Column({ name: 'PERMITEDEVOLREQNORMAL', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowNormalReqReturn: string | null;

  @Column({ name: 'BLOQESTOQUETRANSF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  blockTransferStock: string | null;

  @Column({ name: 'USATRIBUTACAOPORUF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useTaxByState: string | null;

  @Column({ name: 'GERANFTIPO8', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  generateNfType8: string | null;

  @Column({ name: 'PEREXCEDELIMCRED', type: 'number', precision: 6, scale: 2, nullable: true, default: '0' })
  creditLimitExceedPerc: number | null;

  @Column({ name: 'GERARNUMLOTEAUTOMATICPA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  autoPaLotNumberGen: string | null;

  @Column({ name: 'IMPRIMIRESPELHOENTMERC', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  printMercEntryMirror: string | null;

  @Column({ name: 'DIRARQUIVOINTEGRACAO', type: 'varchar2', length: 80, nullable: true })
  integrationFileDir: string | null;

  @Column({ name: 'CODSETOREMBALADOR', type: 'number', precision: 6, scale: 0, nullable: true })
  packerSectorCode: number | null;

  @Column({ name: 'CODFISCALOUTRASDESP', type: 'number', precision: 4, scale: 0, nullable: true })
  otherExpensesFiscalCode: number | null;

  @Column({ name: 'CODFISCALINTEROUTRASDESP', type: 'number', precision: 4, scale: 0, nullable: true })
  otherExpensesInterFiscalCode: number | null;

  @Column({ name: 'ALIQICMOUTRASDESP', type: 'number', precision: 4, scale: 2, nullable: true })
  otherExpensesIcmsRate: number | null;

  @Column({ name: 'ALIQICMINTEROUTRASDESP', type: 'number', precision: 4, scale: 2, nullable: true })
  otherExpensesInterIcmsRate: number | null;

  @Column({ name: 'USACOMISSAOPORLINHAPROD', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useProdLineCommission: string | null;

  @Column({ name: 'USADESCPORLINHAPROD', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useProdLineDiscount: string | null;

  @Column({ name: 'SOMAQTPEDVENDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  sumSalesOrderQty: string | null;

  @Column({ name: 'USAWMS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useWms: string | null;

  @Column({ name: 'USAMAPSEPRUA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useStreetSepMap: string | null;

  @Column({ name: 'USAOUTRASMOEDAS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useOtherCurrencies: string | null;

  @Column({ name: 'SOMENTECODBARRASCONFPED', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  onlyBarcodeOrderConf: string | null;

  @Column({ name: 'SOMENTECODBARRASBONUS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  onlyBarcodeBonus: string | null;

  @Column({ name: 'TIPOGERACAODADOSPCAUXPRO', type: 'varchar2', length: 1, nullable: true, default: 'V' })
  pcAuxProDataGenType: string | null;

  @Column({ name: 'CONTROLAEDICAOPEDIDOCOMPRA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  controlPurchaseOrderEdit: string | null;

  @Column({ name: 'PRAZOEDICAOPEDIDOCOMPRA', type: 'number', precision: 3, scale: 0, nullable: true })
  purchaseOrderEditTerm: number | null;

  @Column({ name: 'PROXNUMPESQUISA', type: 'number', precision: 10, scale: 0, nullable: true })
  nextSearchNumber: number | null;

  @Column({ name: 'ATUALIZACONDCOMPEDCOMPRA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  updatePurchaseOrderPayCond: string | null;

  @Column({ name: 'PROXNUMTRANSWMS', type: 'number', precision: 10, scale: 0, nullable: true, default: '1' })
  nextWmsTransferNumber: number | null;

  @Column({ name: 'ACEITAVENDABALCAOESTNEG', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptNegStockCounterSale: string | null;

  @Column({ name: 'UTILIZAGUIAPROPRIANFENT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useOwnGuideEntryNf: string | null;

  @Column({ name: 'BLOQF6PEDVENDABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockF6CounterSalesOrder: string | null;

  @Column({ name: 'UTILIZAPERCFINPRECOPROM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePromPriceFinPerc: string | null;

  @Column({ name: 'PERGUNTARSOMAQTPEDVENDA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  askSumSalesOrderQty: string | null;

  @Column({ name: 'PROXCODPRACA', type: 'number', precision: 4, scale: 0, nullable: true })
  nextSquareCode: number | null;

  @Column({ name: 'CODPRACAAUTOMATIC', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  autoSquareCode: string | null;

  @Column({ name: 'PROXCODUSUR', type: 'number', precision: 4, scale: 0, nullable: true })
  nextUserCode: number | null;

  @Column({ name: 'CODUSURAUTOMATIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  autoUserCode: string | null;

  @Column({ name: 'CODSETORDIRETORIO', type: 'number', precision: 6, scale: 0, nullable: true })
  directorySectorCode: number | null;

  @Column({ name: 'PROXNUMLOTECUSTODIA', type: 'number', precision: 8, scale: 0, nullable: true, default: '1' })
  nextDailyCostLotNumber: number | null;

  @Column({ name: 'INFNUMVERBAPEDBONIFIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  infBonusOrderFundNumber: string | null;

  @Column({ name: 'QTDEMINIMAUSOASTERISCO936', type: 'number', precision: 6, scale: 0, nullable: true, default: '1' })
  minQtyUseAsterisk936: number | null;

  @Column({ name: 'UTILIZACONTROLELOTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useLotControl: string | null;

  @Column({ name: 'PERMITEPLPAGTOSUPERIOR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowSuperiorPayPlan: string | null;

  @Column({ name: 'PERMITEVARIOSPEDIDOSORCAMENTO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowMultipleBudgetOrders: string | null;

  @Column({ name: 'UTILIZAPCUSURFORNEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePcUsurSupplier: string | null;

  @Column({ name: 'TIPOCALCIPI', type: 'varchar2', length: 2, nullable: true, default: 'A2' })
  ipiCalcType: string | null;

  @Column({ name: 'USACONTROLEEMISSAONF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useNfEmissionControl: string | null;

  @Column({ name: 'NUMDIASMAXEMISSAONF', type: 'number', precision: 3, scale: 0, nullable: true })
  maxNfEmissionDays: number | null;

  @Column({ name: 'CHECKOUTMAPAEMITIDO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkoutEmittedMap: string | null;

  @Column({ name: 'PERMAXRODAPE', type: 'number', precision: 5, scale: 2, nullable: true })
  maxFooterPerc: number | null;

  @Column({ name: 'TEMPOMAXCANCEL', type: 'varchar2', length: 5, nullable: true })
  maxCancelTime: string | null;

  @Column({ name: 'VALORSANGRIA1', type: 'number', precision: 12, scale: 2, nullable: true })
  bleedValue1: number | null;

  @Column({ name: 'VALORSANGRIA2', type: 'number', precision: 12, scale: 2, nullable: true })
  bleedValue2: number | null;

  @Column({ name: 'DEFINIRLOTEOP', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  defineOpLot: string | null;

  @Column({ name: 'DVOBRIGATORIO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  mandatoryDv: string | null;

  @Column({ name: 'LIBERAESTFECHBONUS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  releaseBonusCloseStock: string | null;

  @Column({ name: 'CUSTOINDUSTRIA', type: 'varchar2', length: 2, nullable: true, default: 'F' })
  industryCost: string | null;

  @Column({ name: 'PROXNUMTRANSAVULSA', type: 'number', precision: 10, scale: 0, nullable: true, default: '1' })
  nextSingleTransferNumber: number | null;

  @Column({ name: 'TIPONUMNFENTRADA', type: 'varchar2', length: 1, nullable: true, default: '1' })
  entryNfNumberType: string | null;

  @Column({ name: 'BLOQDESPVLRORC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockOrcValExpense: string | null;

  @Column({ name: 'ATUALIZACUSTOULTENTRANSF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  updateLastTransferEntryCost: string | null;

  @Column({ name: 'VERIFICARCLIENTESREDE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkNetworkClients: string | null;

  @Column({ name: 'USARDESCONTOVENDACODBARRA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBarcodeSalesDiscount: string | null;

  @Column({ name: 'VLMAXPEDIDOPF', type: 'number', precision: 18, scale: 2, nullable: true })
  maxPfOrderValue: number | null;

  @Column({ name: 'UTILIZAFILIALREGIAOCX', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBoxRegionBranch: string | null;

  @Column({ name: 'RESTRINGENUMITENSNF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  restrictNfItemsNum: string | null;

  @Column({ name: 'VERIFICARLIMVENDAPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkPfSalesLimit: string | null;

  @Column({ name: 'ACEITAVENDAPF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  acceptPfSale: string | null;

  @Column({ name: 'VERIFICAESTOQUECONT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkContStock: string | null;

  @Column({ name: 'MOSTRARPVENDASEMST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  showSalesPriceWithoutSt: string | null;

  @Column({ name: 'TIPOENDERECAMENTO', type: 'varchar2', length: 1, nullable: true, default: 'E' })
  addressingType: string | null;

  @Column({ name: 'INICIAROPSEMEM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  startOpWithoutEm: string | null;

  @Column({ name: 'CODCONTADESPESAPRODUCAO', type: 'number', precision: 10, scale: 0, nullable: true })
  prodExpenseAccountCode: number | null;

  @Column({ name: 'CODCONTADESENVOLVIMENTO', type: 'number', precision: 10, scale: 0, nullable: true })
  developmentAccountCode: number | null;

  @Column({ name: 'CODCONTAAMOSTRAS', type: 'number', precision: 10, scale: 0, nullable: true })
  samplesAccountCode: number | null;

  @Column({ name: 'NUMDIASMAXEMISSAOCP', type: 'number', precision: 4, scale: 0, nullable: true, default: '15' })
  maxCpEmissionDays: number | null;

  @Column({ name: 'TIPOMAPAWMSVENDABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'P' })
  counterSalesWmsMapType: string | null;

  @Column({ name: 'INSERIRREDUCAOZ', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  insertZReduction: string | null;

  @Column({ name: 'NUMDIASALTERALIVRO', type: 'number', precision: 3, scale: 0, nullable: true, default: '45' })
  bookAlterationDays: number | null;

  @Column({ name: 'LIMPAROBSNFDEVOL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  clearReturnNfObs: string | null;

  @Column({ name: 'REDUCAOBCISENTA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  exemptBcReduction: string | null;

  @Column({ name: 'LIMITEARREDONDAMENTO', type: 'number', precision: 6, scale: 2, nullable: true, default: '0.03' })
  roundingLimit: number | null;

  @Column({ name: 'SIGLAESPECIE', type: 'varchar2', length: 3, nullable: true, default: 'CF' })
  speciesAcronym: string | null;

  @Column({ name: 'SIGLASERIE', type: 'varchar2', length: 3, nullable: true, default: 'ECF' })
  seriesAcronym: string | null;

  @Column({ name: 'CODCONTABILCF', type: 'varchar2', length: 10, nullable: true, default: '1' })
  cfAccountingCode: string | null;

  @Column({ name: 'INSERIRMAPA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  insertMap: string | null;

  @Column({ name: 'INSERIRCUPOM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  insertCoupon: string | null;

  @Column({ name: 'NUMDIASMAXCANCBORDERO', type: 'number', precision: 3, scale: 0, nullable: true, default: '7' })
  maxBorderoCancelDays: number | null;

  @Column({ name: 'NUMDIASPAGTORETRO', type: 'number', precision: 3, scale: 0, nullable: true, default: '0' })
  retroPayDays: number | null;

  @Column({ name: 'PROXNUMLOTEREAGENTE', type: 'number', precision: 6, scale: 0, nullable: true })
  nextReagentLotNumber: number | null;

  @Column({ name: 'CONSIDERAISENTOSCOMOPF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  considerExemptAsPf: string | null;

  @Column({ name: 'UTILIZAVENDAPOREMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePackagingSale: string | null;

  @Column({ name: 'APLICAACRESCPFTV3', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  applyPfIncreaseTv3: string | null;

  @Column({ name: 'APLICATXFIMAUTORIZACAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  applyEndAuthRate: string | null;

  @Column({ name: 'BASECREDDEBRCAAUTORI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  authRcaCredDebBase: string | null;

  @Column({ name: 'TARJAMAGNETICAOBRIGATORIA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  mandatoryMagneticStripe: string | null;

  @Column({ name: 'LIMPARBASECALCENTRADA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  clearEntryCalcBase: string | null;

  @Column({ name: 'BLOQLIBPEDMARGEMNEG', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockNegMarginOrderRelease: string | null;

  @Column({ name: 'BLOQLIBPEDCOMDESCONTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockDiscountOrderRelease: string | null;

  @Column({ name: 'AUTENTICARDOC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  authDoc: string | null;

  @Column({ name: 'VERIFICAMARGEMLIBPEDIDO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkOrderReleaseMargin: string | null;

  @Column({ name: 'PRAZOFATALMED', type: 'number', precision: 4, scale: 0, nullable: true, default: '0' })
  avgFatalTerm: number | null;

  @Column({ name: 'TIPOALIQOUTRASDESP', type: 'varchar2', length: 1, nullable: true, default: 'P' })
  otherExpensesRateType: string | null;

  @Column({ name: 'NUMDIASMAXACERTARCARGA', type: 'number', precision: 4, scale: 0, nullable: true })
  maxLoadFixDays: number | null;

  @Column({ name: 'ABATEFRETEPRECOMINIMO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  abateMinPriceFreight: string | null;

  @Column({ name: 'VLMINVENDATV3', type: 'number', precision: 22, scale: 6, nullable: true })
  minSalesValueTv3: number | null;

  @Column({ name: 'DIVIDEPRZADICIONALPARCELAS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  splitAdditionalTermInstallments: string | null;

  @Column({ name: 'SOMACOMISSAOCMV', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  sumCmvCommission: string | null;

  @Column({ name: 'CODMOTVISITAPADRAOCALLCENTER', type: 'number', precision: 6, scale: 0, nullable: true })
  callCenterDefaultVisitReasonCode: number | null;

  @Column({ name: 'TIPOENTREGAPADRAOCALLCENTER', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  callCenterDefaultDeliveryType: string | null;

  @Column({ name: 'TIPOPERIODOGIRODIA', type: 'varchar2', length: 1, nullable: true, default: 'T' })
  dailyTurnoverPeriodType: string | null;

  @Column({ name: 'CALCULARSTCOMIPI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcStWithIpi: string | null;

  @Column({ name: 'TIPOVALORGIRODIA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  dailyTurnoverValueType: string | null;

  @Column({ name: 'SOMADESPFINITEMCF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sumFinExpenseCfItem: string | null;

  @Column({ name: 'CFOP5929ISENTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  exemptCfop5929: string | null;

  @Column({ name: 'IECLIEXCLUSIVA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  exclusiveClientIe: string | null;

  @Column({ name: 'PERCICMFRETE', type: 'number', precision: 4, scale: 2, nullable: true })
  freightIcmsPerc: number | null;

  @Column({ name: 'CODFISCALFRETE', type: 'number', precision: 6, scale: 0, nullable: true })
  freightFiscalCode: number | null;

  @Column({ name: 'PERCICMINTERFRETE', type: 'number', precision: 4, scale: 2, nullable: true })
  interFreightIcmsPerc: number | null;

  @Column({ name: 'CODFISCALINTERFRETE', type: 'number', precision: 6, scale: 0, nullable: true })
  interFreightFiscalCode: number | null;

  @Column({ name: 'COBRARVLTARIFAPARC1', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  chargeFeeValueInst1: string | null;

  @Column({ name: 'GRAVAROBSCLIENTENOPEDIDO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  saveClientObsOnOrder: string | null;

  @Column({ name: 'SOMAVLTARIFAITENSNF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  sumFeeValueNfItems: string | null;

  @Column({ name: 'RESTRINGENUMVIASNF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  restrictNfCopiesNum: string | null;

  @Column({ name: 'TIPOABASPREV', type: 'varchar2', length: 2, nullable: true, default: 'CP' })
  prevSupplyType: string | null;

  @Column({ name: 'PERCACRESCIMOCUSTOREAL', type: 'number', precision: 10, scale: 6, nullable: true, default: '0' })
  realCostIncreasePerc: number | null;

  @Column({ name: 'PERCACRESCIMOCUSTOFIN', type: 'number', precision: 10, scale: 6, nullable: true, default: '0' })
  finCostIncreasePerc: number | null;

  @Column({ name: 'NUMDIASPAGCHQCANCEL', type: 'number', precision: 3, scale: 0, nullable: true, default: '7' })
  cancelCheckPayDays: number | null;

  @Column({ name: 'VERLANCTOBCOCHQ', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  checkBankEntryCheck: string | null;

  @Column({ name: 'ATUALIZACLIULTALTER1203', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  updateClientLastAlter1203: string | null;

  @Column({ name: 'CODCONTAPERDA', type: 'number', precision: 10, scale: 0, nullable: true })
  lossAccountCode: number | null;

  @Column({ name: 'CODCONTARESTRCA', type: 'number', precision: 10, scale: 0, nullable: true, default: '40020' })
  rcaRestitutionAccountCode: number | null;

  @Column({ name: 'PERMITEVENDAECF402', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowEcfSale402: string | null;

  @Column({ name: 'PCKABASTECIDO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  pckSupplied: string | null;

  @Column({ name: 'FAIXAINITEOR', type: 'number', precision: 6, scale: 2, nullable: true, default: '90' })
  startContentRange: number | null;

  @Column({ name: 'FAIXAFIMTEOR', type: 'number', precision: 6, scale: 2, nullable: true, default: '120' })
  endContentRange: number | null;

  @Column({ name: 'CHECARDIASUTEISTITPGNLIB', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkBusinessDaysTitlePayLib: string | null;

  @Column({ name: 'USACONVERSAOEMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePackagingConversion: string | null;

  @Column({ name: 'DTULTIMAGERACAOSERASA', type: 'date', nullable: true })
  lastSerasaGenerationDate: Date | null;

  @Column({ name: 'SEGMENTOSERASA', type: 'number', precision: 3, scale: 0, nullable: true, default: '0' })
  serasaSegment: number | null;

  @Column({ name: 'PRAZOVALIDADEORCAMENTO', type: 'number', precision: 4, scale: 0, nullable: true, default: '30' })
  budgetValidityTerm: number | null;

  @Column({ name: 'PERCMAXDESCDESD', type: 'number', precision: 5, scale: 2, nullable: true, default: '99' })
  maxSplitDiscountPerc: number | null;

  @Column({ name: 'VERIFICAPESOMAXPALETE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkMaxPalletWeight: string | null;

  @Column({ name: 'PESOMAXPALETE', type: 'number', precision: 10, scale: 2, nullable: true, default: '0' })
  maxPalletWeight: number | null;

  @Column({ name: 'BLOQUEARENDINVENT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockInventoryAddress: string | null;

  @Column({ name: 'BLOQUEAPRODENT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockEntryProduct: string | null;

  @Column({ name: 'TIPOVLMINVENDABK', type: 'varchar2', length: 2, nullable: true, default: 'VP' })
  bkMinSalesValueType: string | null;

  @Column({ name: 'DEPOSITOVIRTUAL', type: 'number', precision: 3, scale: 0, nullable: true, default: '99' })
  virtualDepot: number | null;

  @Column({ name: 'ATUALIZARPCPRODUTBONIFIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  updatePcProdutBonus: string | null;

  @Column({ name: 'PERMITIRDESDTITVENCSEMJUROS', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowSplitTitleDueNoInterest: string | null;

  @Column({ name: 'UTILIZALIBERACAOPEDCOMPRA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePurchaseOrderRelease: string | null;

  @Column({ name: 'USAPERCDIFQTENT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useEntryQtyDiffPerc: string | null;

  @Column({ name: 'PERCDIFQTENT', type: 'number', precision: 3, scale: 0, nullable: true })
  entryQtyDiffPerc: number | null;

  @Column({ name: 'MAXPRZMEDIODESDCP', type: 'number', precision: 3, scale: 0, nullable: true, default: '5' })
  maxAvgSplitTermCp: number | null;

  @Column({ name: 'BLOQITENSCORTE936', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockCutItems936: string | null;

  @Column({ name: 'CODCONTAVERBAFORNEC', type: 'number', precision: 10, scale: 0, nullable: true })
  supplierFundAccountCode: number | null;

  @Column({ name: 'UTILIZACHECKOUT936', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useCheckout936: string | null;

  @Column({ name: 'VERIFICANIVELVENDA402', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkSalesLevel402: string | null;

  @Column({ name: 'NUMDIASMAXPRORROG', type: 'number', precision: 4, scale: 0, nullable: true })
  maxExtensionDays: number | null;

  @Column({ name: 'VLMINCANCITEMCUPOM', type: 'number', precision: 18, scale: 6, nullable: true })
  minCouponItemCancelValue: number | null;

  @Column({ name: 'VLMINCANCCUPOM', type: 'number', precision: 18, scale: 6, nullable: true })
  minCouponCancelValue: number | null;

  @Column({ name: 'VALIDARUFFILIAL', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  validateBranchUf: string | null;

  @Column({ name: 'GERAPARCELAMENTOTEF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateTefInstallment: string | null;

  @Column({ name: 'MANTEMNOSSONUMBCO402', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  keepOurBankNumber402: string | null;

  @Column({ name: 'REPLICARPRECOPOREMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  replicatePackagingPrice: string | null;

  @Column({ name: 'PERMITECODBARRADUPLICADO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowDuplicateBarcode: string | null;

  @Column({ name: 'PEDIDOCOMPRAPORPALETE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  purchaseOrderByPallet: string | null;

  @Column({ name: 'FECHABONUSEMRECIBODESC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  closeBonusOnDescReceipt: string | null;

  @Column({ name: 'NUMMAXNFTRANSF', type: 'number', precision: 3, scale: 0, nullable: true })
  maxTransferNfNumber: number | null;

  @Column({ name: 'PERMITECRDEVFORNEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowSupplierReturnCr: string | null;

  @Column({ name: 'CONTROLAPRODUTIVSEP', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  controlSepProductivity: string | null;

  @Column({ name: 'PROXNUMBORDEROCR', type: 'number', precision: 10, scale: 0, nullable: true })
  nextCrBorderoNumber: number | null;

  @Column({ name: 'INCLUIDESPRODAPENF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  includeProdExpenseNf: string | null;

  @Column({ name: 'PERMAXINDENIZPEDIDO', type: 'number', precision: 8, scale: 4, nullable: true, default: '50' })
  maxOrderIndemnityPerc: number | null;

  @Column({ name: 'VALIDAESTOQUEMAPASEP', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  validateMapSepStock: string | null;

  @Column({ name: 'DESBLOQUEARPRODFIMOS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  unlockOrderServiceEndProduct: string | null;

  @Column({ name: 'LANCARDESPVENDORAUTOMATICO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  autoVendorExpenseEntry: string | null;

  @Column({ name: 'CALCULAGIROTRANSF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  calcTransferTurnover: string | null;

  @Column({ name: 'USATECLADOGERTEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useGertecKeyboard: string | null;

  @Column({ name: 'DTEXPIRACAOWINTHOR', type: 'date', nullable: true })
  winthorExpirationDate: Date | null;

  @Column({ name: 'ABATERIMPOSTOSCOMISSAORCA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  slaughterRcaCommissionTaxes: string | null;

  @Column({ name: 'AUTENTICARACERTOCX', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  authCxSettle: string | null;

  @Column({ name: 'IMPRIMEDESCONTOCF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  printCfDiscount: string | null;

  @Column({ name: 'TIPOTAXAVENDOR', type: 'varchar2', length: 1, nullable: true, default: 'M' })
  vendorRateType: string | null;

  @Column({ name: 'SEPARACAOFLOWRACK', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  flowRackSeparation: string | null;

  @Column({ name: 'NUMITENSOS', type: 'number', precision: 4, scale: 0, nullable: true, default: '9999' })
  orderServiceItemsNumber: number | null;

  @Column({ name: 'FTP_IP', type: 'varchar2', length: 40, nullable: true })
  ftpIp: string | null;

  @Column({ name: 'FTP_PORTA', type: 'number', precision: 6, scale: 0, nullable: true })
  ftpPort: number | null;

  @Column({ name: 'FTP_CONEXAOPASSIVA', type: 'varchar2', length: 1, nullable: true })
  ftpPassiveConnection: string | null;

  @Column({ name: 'MANTEMNOSSONUMBCO1210', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  keepOurBankNumber1210: string | null;

  @Column({ name: 'CALCFRETEPORITEM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcFreightByItem: string | null;

  @Column({ name: 'CONSIDERARICMSANTECIPCUSTO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  considerAnticipatedIcmsCost: string | null;

  @Column({ name: 'USANEGFORNEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useSupplierNeg: string | null;

  @Column({ name: 'TIPOCALCSULFRAMA', type: 'varchar2', length: 2, nullable: true, default: 'A2' })
  suframaCalcType: string | null;

  @Column({ name: 'ACEITACNPJEXCLUSIVOFORNEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptExclusiveSupplierCnpj: string | null;

  @Column({ name: 'LIBERAESTENTMERC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  releaseMercEntryStock: string | null;

  @Column({ name: 'CODFISCALDEVOUTRASDESP', type: 'number', precision: 8, scale: 0, nullable: true })
  returnOtherExpensesFiscalCode: number | null;

  @Column({ name: 'CODFISCALINTERDEVOUTRASDESP', type: 'number', precision: 8, scale: 0, nullable: true })
  returnOtherExpensesInterFiscalCode: number | null;

  @Column({ name: 'UTILIZABOLETOPREIMPR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePrePrintedBoleto: string | null;

  @Column({ name: 'VERIFICADATAHORAECF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkEcfDateTime: string | null;

  @Column({ name: 'UTILIZAQTFRACIONADACONF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useFractionalQtyConf: string | null;

  @Column({ name: 'SOMACOMPRAPREVFLUXOCX', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  sumPrevPurchaseCashFlow: string | null;

  @Column({ name: 'OBTERPREFERENCIACLIECF', type: 'varchar2', length: 1, nullable: true })
  getEcfClientPref: string | null;

  @Column({ name: 'TIPOAPLICREPASSE', type: 'varchar2', length: 2, nullable: true, default: 'DL' })
  transferApplyType: string | null;

  @Column({ name: 'PERMAXDESCITEMCF', type: 'number', precision: 5, scale: 2, nullable: true })
  maxCfItemDiscountPerc: number | null;

  @Column({ name: 'CALCIOFVENDORCOMPOSTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcCompositeVendorIof: string | null;

  @Column({ name: 'GERARDADOSREDUCAOZ', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  generateZReductionData: string | null;

  @Column({ name: 'VERIFICAPICKINGARM', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  checkWarehousePicking: string | null;

  @Column({ name: 'VALIDANUMSERIEEQUIPECF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateEcfSerial: string | null;

  @Column({ name: 'DEDUZIRAVARIAESTCOMDEVCLI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  deductDamageStockWithClientReturn: string | null;

  @Column({ name: 'ALTERARPRECOPLPAGAMENTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  changePayPlanPrice: string | null;

  @Column({ name: 'DTVIRADAWMS', type: 'date', nullable: true })
  wmsTurnDate: Date | null;

  @Column({ name: 'PRAZOMAXDTENTREGA', type: 'number', precision: 3, scale: 0, nullable: true, default: '60' })
  maxDeliveryDateTerm: number | null;

  @Column({ name: 'COMISSAORCATIPOVENDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  rcaCommissionSalesType: string | null;

  @Column({ name: 'EXPEDEPALETEFECHADODIRETOBOX', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  shipClosedPalletDirectBox: string | null;

  @Column({ name: 'USACONTROLEFORNECPEDCOMPRA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useSupplierPurchaseOrderControl: string | null;

  @Column({ name: 'ENDERECACOMBONUSABERTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  addressWithOpenBonus: string | null;

  @Column({ name: 'PESOSUPPALETE', type: 'number', precision: 4, scale: 0, nullable: true, default: '600' })
  palletSupWeight: number | null;

  @Column({ name: 'TIPOTXBOLETO', type: 'varchar2', length: 1, nullable: true, default: 'P' })
  boletoTaxType: string | null;

  @Column({ name: 'UTILIZAREMBUNITSINTEGRA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useUnitEmbSintegra: string | null;

  @Column({ name: 'EXIGEDTVALIDADEBONUSRM', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  requireRmBonusExpDate: string | null;

  @Column({ name: 'USAREDUCAOCOMISSAORCA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useRcaCommissionReduction: string | null;

  @Column({ name: 'BLOQDEVCLI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockClientReturn: string | null;

  @Column({ name: 'QTDEGERLIVRO', type: 'number', precision: 2, scale: 0, nullable: true, default: '60' })
  bookGenQty: number | null;

  @Column({ name: 'GRAVAPCMENSALTCADCLI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  savePcMensaltCadCli: string | null;

  @Column({ name: 'ENVIAMENSRCALIBEST', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sendRcaMsgStockRelease: string | null;

  @Column({ name: 'USACHAVETRIPLAPCPEDI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePcPediTripleKey: string | null;

  @Column({ name: 'ABATERDESCFINCOMISSAORCA', type: 'varchar2', length: 1, nullable: true })
  slaughterRcaCommissionFinDiscount: string | null;

  @Column({ name: 'TIPOAPLICINDICE', type: 'varchar2', length: 2, nullable: true, default: 'IQ' })
  indexApplyType: string | null;

  @Column({ name: 'APLICAREPASSEPERCBONIFIC', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  applyTransferBonusPerc: string | null;

  @Column({ name: 'ACEITADESCFLEXPRODMONITORADO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptMonitoredProdFlexDiscount: string | null;

  @Column({ name: 'VERIFPERMISSAOCOBRNODESDOBR402', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkCobPermSplit402: string | null;

  @Column({ name: 'DIROP', type: 'varchar2', length: 3, nullable: true })
  opDir: string | null;

  @Column({ name: 'ABATERIMPOSTOSDESCFIN', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  slaughterFinDiscountTaxes: string | null;

  @Column({ name: 'USATRIBENTPORUF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useEntryTaxByUf: string | null;

  @Column({ name: 'SOMAIMPOSTOSTRANSF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sumTransferTaxes: string | null;

  @Column({ name: 'CODCONTASOBRAACERTO', type: 'number', precision: 10, scale: 0, nullable: true })
  settleSurplusAccountCode: number | null;

  @Column({ name: 'APENASMIUDEZACHEKOUTCARREG', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  onlySmallItemsCheckoutLoad: string | null;

  @Column({ name: 'NUMDIASCADCLIBLOQCHDV', type: 'number', precision: 4, scale: 0, nullable: true, default: '0' })
  blockChdvClientCadDays: number | null;

  @Column({ name: 'NUMDIASCHDVBLOQCLI', type: 'number', precision: 4, scale: 0, nullable: true, default: '0' })
  blockClientChdvDays: number | null;

  @Column({ name: 'QTCHDVBLOQCLI', type: 'number', precision: 4, scale: 0, nullable: true, default: '0' })
  blockClientChdvQty: number | null;

  @Column({ name: 'RESTRINGENUMVIASPU', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  restrictSpuCopiesNum: string | null;

  @Column({ name: 'VALIDARVLMINVENDAAPOSCORTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateMinSalesValueAfterCut: string | null;

  @Column({ name: 'CODCONTAREBAIXACMV', type: 'number', precision: 10, scale: 0, nullable: true })
  cmvReductionAccountCode: number | null;

  @Column({ name: 'ALTERARNUMSEQPEDIDO', type: 'varchar2', length: 2, nullable: true, default: 'N' })
  changeOrderSeqNumber: string | null;

  @Column({ name: 'TIPOORDENACAONFSAIDA', type: 'varchar2', length: 2, nullable: true, default: 'SE' })
  exitNfOrderType: string | null;

  @Column({ name: 'PERCACRESCIMOBALCAO', type: 'number', precision: 10, scale: 6, nullable: true })
  counterIncreasePerc: number | null;

  @Column({ name: 'USARMOVIMENTAHORIZONTAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useHorizontalMovement: string | null;

  @Column({ name: 'VALIDAVLMINVENDABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateCounterMinSalesValue: string | null;

  @Column({ name: 'USABCRENT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useEntBcr: string | null;

  @Column({ name: 'FAZERINSERTPCEMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  insertPcEmbalagem: string | null;

  @Column({ name: 'VALIDARIECONSUMIDORFINAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateFinalConsumerIe: string | null;

  @Column({ name: 'ACEITADESCPRECOFIXO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptFixedPriceDiscount: string | null;

  @Column({ name: 'TROCAALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  exchangeChangeRcaDebCred: string | null;

  @Column({ name: 'CONTALANCPERDA', type: 'number', precision: 10, scale: 0, nullable: true })
  lossEntryAccount: number | null;

  @Column({ name: 'GERARBRINDEPEDBONIFIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateBonusOrderGift: string | null;

  @Column({ name: 'BLOQAPLICPERCMANUTINV', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  blockInvMaintPercApp: string | null;

  @Column({ name: 'GERANUMLOTEAUTOMATICO', type: 'char', length: 1, nullable: true, default: 'N' })
  autoLotNumberGen: string | null;

  @Column({ name: 'UPDATEAUTMENU', type: 'varchar2', length: 31, nullable: true, default: 'Todas rotinas est?o autorizadas' })
  autoMenuUpdate: string | null;

  @Column({ name: 'MERCADOALVO', type: 'varchar2', length: 6, nullable: true, default: 'PKN9IQ' })
  targetMarket: string | null;

  @Column({ name: 'CODCONTASOBRACAIXA', type: 'number', precision: 10, scale: 0, nullable: true })
  cashSurplusAccountCode: number | null;

  @Column({ name: 'TIPOMASCARAENDERWMS', type: 'number', precision: 2, scale: 0, nullable: true })
  wmsAddressMaskType: number | null;

  @Column({ name: 'ATUALIZAESTCONTCONVEMBALAGEM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  updateConvEmbStockCont: string | null;

  @Column({ name: 'ACEITAPFCONTRIBUINTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptContributorPf: string | null;

  @Column({ name: 'UTILIZARATEIODESPESAS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useExpenseApportionment: string | null;

  @Column({ name: 'VERIFICADESCFINBAIXACM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkCmWriteOffFinDiscount: string | null;

  @Column({ name: 'ORDEMAVALIACAOCOMISSAORCA', type: 'number', precision: 2, scale: 0, nullable: true, default: '1' })
  rcaCommissionEvalOrder: number | null;

  @Column({ name: 'PERMITIRDESCRODAPECHECKOUT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  allowCheckoutFooterDiscount: string | null;

  @Column({ name: 'PERMAXRODAPECHECKOUT', type: 'number', precision: 8, scale: 4, nullable: true, default: '0' })
  maxCheckoutFooterPerc: number | null;

  @Column({ name: 'USARTRIBUTACAOTRANSFTV10', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useTv10TransferTax: string | null;

  @Column({ name: 'GERAVALERCADEVMANIF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generateRcaVoucherReturnManifest: string | null;

  @Column({ name: 'USASALDOCONTACORRENTEDESCFIN', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useFinDiscountCheckingAccountBalance: string | null;

  @Column({ name: 'BLOQFORNECVERBASVENCIDAS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockSupplierExpiredFunds: string | null;

  @Column({ name: 'DIASBLOQFORNECVERBASVENCIDAS', type: 'number', precision: 4, scale: 0, nullable: true, default: '9999' })
  blockSupplierExpiredFundsDays: number | null;

  @Column({ name: 'USADTDESBLOQUEIOBLOQCLIINATIV', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useInactiveClientUnblockDate: string | null;

  @Column({ name: 'USAPTABELACOMOBASE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePriceTableAsBase: string | null;

  @Column({ name: 'PROCNUMLISTA', type: 'number', precision: 6, scale: 0, nullable: true })
  listProcNumber: number | null;

  @Column({ name: 'TEMPMENFLOW', type: 'number', precision: 10, scale: 0, nullable: true })
  flowTempMen: number | null;

  @Column({ name: 'GERARTROCOCOBDIN', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  generateDinCobChange: string | null;

  @Column({ name: 'INFORMARECEBEDORVENDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  informSalesReceiver: string | null;

  @Column({ name: 'GRAVARCOTACAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  saveQuotation: string | null;

  @Column({ name: 'CODCONTABENEFIC', type: 'number', precision: 10, scale: 0, nullable: true, default: '0' })
  beneficiaryAccountCode: number | null;

  @Column({ name: 'MAXDIASSEMVENDA', type: 'number', precision: 6, scale: 0, nullable: true, default: '0' })
  maxDaysWithoutSale: number | null;

  @Column({ name: 'USATROCACOMPRECOVENDA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useExchangeWithSalesPrice: string | null;

  @Column({ name: 'CODCONTPAGDIARIA', type: 'number', precision: 10, scale: 0, nullable: true })
  dailyPaymentAccountCode: number | null;

  @Column({ name: 'NUMDIASMAXVENDACLIINADIMPLENTE', type: 'number', precision: 6, scale: 0, nullable: true, default: '0' })
  maxDefaulterClientSalesDays: number | null;

  @Column({ name: 'USACESTABASICACF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useCfBasicBasket: string | null;

  @Column({ name: 'USARENDERFORNEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useSupplierYield: string | null;

  @Column({ name: 'APLICARINDICECMV', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  applyCmvIndex: string | null;

  @Column({ name: 'CODCONTACUSTOSCARTORIO', type: 'number', precision: 10, scale: 0, nullable: true, default: '0' })
  notaryCostAccountCode: number | null;

  @Column({ name: 'BLOQUEIAVENDAESTPENDENTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockPendingStockSale: string | null;

  @Column({ name: 'PROXNUMCODBARRALOTE', type: 'number', precision: 8, scale: 0, nullable: true })
  nextLotBarcodeNumber: number | null;

  @Column({ name: 'BLOQCONSISTENUMMAPA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockMapNumConsistency: string | null;

  @Column({ name: 'USAPRODFRACUNITARIO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useUnitFracProd: string | null;

  @Column({ name: 'ATUALIZAENT1122', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  updateEntry1122: string | null;

  @Column({ name: 'PERCICMFRETEENT', type: 'number', precision: 4, scale: 2, nullable: true })
  entryFreightIcmsPerc: number | null;

  @Column({ name: 'CODFISCALFRETEENT', type: 'number', precision: 6, scale: 0, nullable: true })
  entryFreightFiscalCode: number | null;

  @Column({ name: 'PERCICMINTERFRETEENT', type: 'number', precision: 4, scale: 2, nullable: true })
  entryInterFreightIcmsPerc: number | null;

  @Column({ name: 'CODFISCALINTERFRETEENT', type: 'number', precision: 6, scale: 0, nullable: true })
  entryInterFreightFiscalCode: number | null;

  @Column({ name: 'PERCLANCCREDCLI', type: 'number', precision: 8, scale: 4, nullable: true })
  clientCreditEntryPerc: number | null;

  @Column({ name: 'BLOQUEARPEDBONIFIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockBonusOrder: string | null;

  @Column({ name: 'USAPRECIFMENORMARGEMM', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useLowerMarginPricing: string | null;

  @Column({ name: 'TIPOCUSTO1322', type: 'varchar2', length: 1, nullable: true, default: 'C' })
  costType1322: string | null;

  @Column({ name: 'PEDIDOPORDISTRIB', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  distribOrder: string | null;

  @Column({ name: 'USACONTROLEDERECIBOS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useReceiptControl: string | null;

  @Column({ name: 'NUMDIASMAXBAIXARECIBO', type: 'number', precision: 3, scale: 0, nullable: true, default: '0' })
  maxReceiptWriteOffDays: number | null;

  @Column({ name: 'NUMMAXTITULOSPORRECIBO', type: 'number', precision: 3, scale: 0, nullable: true, default: '0' })
  maxTitlesPerReceipt: number | null;

  @Column({ name: 'FATURAFILIALBROKER', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  brokerBranchInvoice: string | null;

  @Column({ name: 'PERBASEREDOUTRASDESP', type: 'number', precision: 8, scale: 4, nullable: true })
  otherExpensesRedBasePerc: number | null;

  @Column({ name: 'GERARPCAUXLANCONTASORCAM', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generatePcAuxLancBudgetAccounts: string | null;

  @Column({ name: 'TIPOCALCDESCARGAPAL', type: 'varchar2', length: 1, nullable: true, default: 'T' })
  palletUnloadCalcType: string | null;

  @Column({ name: 'GERARPCLANCICMSANTECIP', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  generatePcLancAnticipatedIcms: string | null;

  @Column({ name: 'TRATARRESTRICAOACRESCIMO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  handleIncreaseRestriction: string | null;

  @Column({ name: 'TRAVAVENDAPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  lockPfSales: string | null;

  @Column({ name: 'USARSENHAEXPIRADA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useExpiredPassword: string | null;

  @Column({ name: 'DTATUALIZACAOBD', type: 'date', nullable: true })
  dbUpdateDate: Date | null;

  @Column({ name: 'UTILIZAENDPORFILIAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useAddressByBranch: string | null;

  @Column({ name: 'VERIFICAPEDBONIFICENTNORMAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkBonusOrderNormalEntry: string | null;

  @Column({ name: 'NAOUSAENDERECOMISTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  noMixedAddress: string | null;

  @Column({ name: 'ABASTCORRETIVOAUTOMAT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  autoCorrectiveSupply: string | null;

  @Column({ name: 'NAOUSARPICKINGCX', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  noBoxPicking: string | null;

  @Column({ name: 'USASEPARACAOCXFECHADA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useClosedCxSeparation: string | null;

  @Column({ name: 'DESDCARTAOFECHCARGA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  splitCardLoadClose: string | null;

  @Column({ name: 'PERMAXDESCAUTOR', type: 'number', precision: 18, scale: 6, nullable: true })
  maxAuthorDiscountPerc: number | null;

  @Column({ name: 'VLREMONTEDESCARGA', type: 'number', precision: 12, scale: 6, nullable: true })
  unloadRemountValue: number | null;

  @Column({ name: 'PADRAOCALLCENTER', type: 'varchar2', length: 1, nullable: true })
  callCenterPattern: string | null;

  @Column({ name: 'DESBLOQCLIBXTITULO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  unblockClientTitleWriteOff: string | null;

  @Column({ name: 'ENDERECOAPANHAFILIAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  branchPickingAddress: string | null;

  @Column({ name: 'PROXNUMLOTESA', type: 'number', precision: 8, scale: 0, nullable: true })
  nextSaLotNumber: number | null;

  @Column({ name: 'VERIFICARENDEROCUPADO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  checkOccupiedAddress: string | null;

  @Column({ name: 'AGREGARSTPRODSINTEGRA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  aggregateStProdSintegra: string | null;

  @Column({ name: 'ACEITADESDCONSUMIDOROUTROSCLI', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptSplitConsumerOtherClients: string | null;

  @Column({ name: 'FECHACARREGAUTVENDABALCAO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  autoLoadCloseCounterSale: string | null;

  @Column({ name: 'USACANCELAMENTOAUTOMATICOECF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useEcfAutoCancellation: string | null;

  @Column({ name: 'UTILIZACONTROLEMEDICAMENTOS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useMedicineControl: string | null;

  @Column({ name: 'QTMESESCLASSGRUPOCARTAO', type: 'number', precision: 2, scale: 0, nullable: true })
  cardGroupClassMonthsQty: number | null;

  @Column({ name: 'BIOMETRIAPARTICIPASORTEIOBIRO', type: 'varchar2', length: 1, nullable: true })
  biometricParticipateBiroDraw: string | null;

  @Column({ name: 'CARTAOPARTICIPASORTEIOBIRO', type: 'varchar2', length: 1, nullable: true })
  cardParticipateBiroDraw: string | null;

  @Column({ name: 'CREDENCIALPARTICIPASORTEIOBIRO', type: 'varchar2', length: 1, nullable: true })
  credentialParticipateBiroDraw: string | null;

  @Column({ name: 'VALIDARESTRICOESVENDAPORRCA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateRcaSalesRestrictions: string | null;

  @Column({ name: 'DTVALIDASEFAZ', type: 'date', nullable: true })
  sefazValidDate: Date | null;

  @Column({ name: 'CODCONTAVERBACMV', type: 'number', precision: 10, scale: 0, nullable: true, default: '0' })
  cmvFundAccountCode: number | null;

  @Column({ name: 'NUMCASASDECPRODUCAO', type: 'number', precision: 2, scale: 0, nullable: true, default: '6' })
  productionDecimalPlaces: number | null;

  @Column({ name: 'GERARPCFRETE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generatePcFreight: string | null;

  @Column({ name: 'LANCARSTAPENASPARC1', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  entryStOnlyInst1: string | null;

  @Column({ name: 'CODCOBRANCADESCFINANCEIRO', type: 'varchar2', length: 4, nullable: true })
  finDiscountCobCode: string | null;

  @Column({ name: 'CALCICMSFOMEZERO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  calcFomeZeroIcms: string | null;

  @Column({ name: 'VOLUMEPALETE', type: 'number', precision: 16, scale: 6, nullable: true })
  palletVolume: number | null;

  @Column({ name: 'ENVIARMSGRCACORTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sendRcaCutMsg: string | null;

  @Column({ name: 'QTMESESCLASSESTRELAS', type: 'number', precision: 2, scale: 0, nullable: true })
  starClassMonthsQty: number | null;

  @Column({ name: 'QTMESESGRUPOS', type: 'number', precision: 2, scale: 0, nullable: true })
  groupsMonthsQty: number | null;

  @Column({ name: 'CONSQTRESERVREBAIXACUSTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  consQtyReservedCostReduction: string | null;

  @Column({ name: 'CODCONTASOBRAMERC', type: 'number', precision: 10, scale: 0, nullable: true })
  mercSurplusAccountCode: number | null;

  @Column({ name: 'HABILITARLANCTODADOSFROTA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  enableFleetDataEntry: string | null;

  @Column({ name: 'VALORMAXFALTACAIXA', type: 'number', precision: 12, scale: 2, nullable: true })
  maxCashShortageValue: number | null;

  @Column({ name: 'CODCONTAFALTACAIXA', type: 'number', precision: 10, scale: 0, nullable: true })
  cashShortageAccountCode: number | null;

  @Column({ name: 'VERCOBRANCABLOQCLI504_16_17', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkCobBlockClient504_16_17: string | null;

  @Column({ name: 'NUMDIASMINVENDABK', type: 'number', precision: 2, scale: 0, nullable: true, default: '7' })
  minBkSalesDays: number | null;

  @Column({ name: 'DIRIMPORTACAOFV2', type: 'varchar2', length: 100, nullable: true, default: '/sistema/winthor/palmtop' })
  fvImportDir2: string | null;

  @Column({ name: 'USAFECHAMENTOCXCEGO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useBlindCxClosing: string | null;

  @Column({ name: 'CODCONTATRANSFTV10', type: 'number', precision: 10, scale: 0, nullable: true })
  tv10TransferAccountCode: number | null;

  @Column({ name: 'INCLUIRCOMISSAOSUGPVENDACMV', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  includeCommissionSugSalesPriceCmv: string | null;

  @Column({ name: 'USACOMISSAOECF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useEcfCommission: string | null;

  @Column({ name: 'VALIDARESTOQUEAUTOSERVICO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  validateSelfServiceStock: string | null;

  @Column({ name: 'CONSISTECNPJFORNEC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkSupplierCnpj: string | null;

  @Column({ name: 'USACRECLIVENDATLMKT', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useTlmktSalesClientCredit: string | null;

  @Column({ name: 'USACOMISSAOPORCLASSE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useClassCommission: string | null;

  @Column({ name: 'CLASSECOMISPADRAO', type: 'varchar2', length: 2, nullable: true })
  defaultClassCommission: string | null;

  @Column({ name: 'CODCONTACAMBIAL', type: 'number', precision: 10, scale: 0, nullable: true })
  exchangeAccountCode: number | null;

  @Column({ name: 'SEMPREATUALIZAQTESTCONVEMB', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  alwaysUpdateStockQtyConvEmb: string | null;

  @Column({ name: 'IPNFE', type: 'varchar2', length: 15, nullable: true })
  nfeIp: string | null;

  @Column({ name: 'PORTANFE', type: 'number', precision: 10, scale: 0, nullable: true })
  nfePort: number | null;

  @Column({ name: 'PROXNUMLOTENFE', type: 'number', precision: 10, scale: 0, nullable: true })
  nextNfeLotNumber: number | null;

  @Column({ name: 'LANCARVALECOMODESPESANA1268', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  entryVoucherAsExpense1268: string | null;

  @Column({ name: 'CALCSTFONTEPF', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  calcStSourcePf: string | null;

  @Column({ name: 'PERMITEVENDAPRODUTOPV', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  allowPvProductSale: string | null;

  @Column({ name: 'NUMMAXPARCENT', type: 'number', precision: 8, scale: 0, nullable: true, default: '6' })
  maxEntryInstallmentsNum: number | null;

  @Column({ name: 'VIASDANFE', type: 'number', precision: 2, scale: 0, nullable: true })
  danfeCopies: number | null;

  @Column({ name: 'QTDEPARCELASIMPOSTOSFRETE', type: 'number', precision: 2, scale: 0, nullable: true, default: '1' })
  freightTaxesInstallmentsQty: number | null;

  @Column({ name: 'LANCARFRETEXPARCELAS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  entryFreightXInstallments: string | null;

  @Column({ name: 'BAIXARDNICOMLANCAMENTO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  writeOffDniWithEntry: string | null;

  @Column({ name: 'PERCCSRF', type: 'number', precision: 6, scale: 2, nullable: true })
  csrfPerc: number | null;

  @Column({ name: 'VALORMINIMOCSRF', type: 'number', precision: 16, scale: 4, nullable: true })
  minCsrfValue: number | null;

  @Column({ name: 'VALORMINIMOIRRF', type: 'number', precision: 16, scale: 4, nullable: true })
  minIrrfValue: number | null;

  @Column({ name: 'PERCINSS', type: 'number', precision: 6, scale: 2, nullable: true })
  inssPerc: number | null;

  @Column({ name: 'VALORMINIMOINSS', type: 'number', precision: 16, scale: 4, nullable: true })
  minInssValue: number | null;

  @Column({ name: 'QTMESESCREDCIAP', type: 'number', precision: 4, scale: 0, nullable: true, default: '48' })
  ciapCreditMonthsQty: number | null;

  @Column({ name: 'SOMATXBOLETO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  sumBoletoTax: string | null;

  @Column({ name: 'SEPARARPRODCOMRESTRICAOTRANSP', type: 'varchar2', length: 1, nullable: true })
  separateProdWithTransportRestriction: string | null;

  @Column({ name: 'ROTINA2562EMUSO', type: 'number', precision: 1, scale: 0, nullable: true })
  routine2562InUse: number | null;

  @Column({ name: 'FRETENAOTRIBCOMOOUTRAS', type: 'varchar2', length: 1, nullable: true })
  freightNotTaxedAsOthers: string | null;

  @Column({ name: 'INCLUIRCOMISSAOCMVVENDA', type: 'varchar2', length: 1, nullable: true })
  includeSalesCmvCommission: string | null;

  @Column({ name: 'ACERTOCARGAFILIALDIFERENTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  diffBranchLoadSettle: string | null;

  @Column({ name: 'CODCONTAREBAIXACMVAAPURAR', type: 'number', precision: 10, scale: 0, nullable: true })
  cmvReductionToCalculateAccountCode: number | null;

  @Column({ name: 'NUMDIASMAXDESDCPAGAR', type: 'number', precision: 4, scale: 0, nullable: true })
  maxPayableSplitDays: number | null;

  @Column({ name: 'GERANDOMAPA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  generatingMap: string | null;

  @Column({ name: 'NAOUSARPCCRECLICONSFINAL', type: 'varchar2', length: 1, nullable: true })
  noPccrecliFinalConsumer: string | null;

  @Column({ name: 'PASTA_RELATORIO', type: 'varchar2', length: 60, nullable: true, default: 'P:\\MOD-025\\' })
  reportFolder: string | null;

  @Column({ name: 'FILIALPADRAO', type: 'varchar2', length: 2, nullable: true })
  defaultBranch: string | null;

  @Column({ name: 'CODCONTAADIANTFOROUTROS', type: 'number', precision: 10, scale: 0, nullable: true })
  otherSupplierAdvanceAccountCode: number | null;

  @Column({ name: 'BROKERALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  brokerChangeRcaDebCred: string | null;

  @Column({ name: 'CRMALTDEBCREDRCA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  crmChangeRcaDebCred: string | null;

  @Column({ name: 'TIPOMOVCCRCA', type: 'varchar2', length: 2, nullable: true, default: 'VV' })
  rcaCcMovType: string | null;

  @Column({ name: 'USACREDCLITODASFILIAIS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useAllBranchesClientCredit: string | null;

  @Column({ name: 'UTILIZACONTROLECAIXA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useCashControl: string | null;

  @Column({ name: 'BLOQHISTORICOFIN', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockFinHistory: string | null;

  @Column({ name: 'NUMDIASDESBLOQCHD1', type: 'number', precision: 4, scale: 0, nullable: true })
  unblockChd1Days: number | null;

  @Column({ name: 'TRIBUTAFRETERATEADO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  taxApportionedFreight: string | null;

  @Column({ name: 'USACONTROLETIPOVERBA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useFundTypeControl: string | null;

  @Column({ name: 'USALIMCREDCPF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useCpfCreditLimit: string | null;

  @Column({ name: 'BLOQCLIAUT', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  autoBlockClient: string | null;

  @Column({ name: 'ACEITAACRESCIMOPRECOFIXO', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  acceptFixedPriceIncrease: string | null;

  @Column({ name: 'USAPOSICAOCPAGAR', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePayablePosition: string | null;

  @Column({ name: 'VLMINVENDABNF', type: 'number', precision: 12, scale: 2, nullable: true })
  minBnfSalesValue: number | null;

  @Column({ name: 'VLMAXVENDABNF', type: 'number', precision: 12, scale: 2, nullable: true })
  maxBnfSalesValue: number | null;

  @Column({ name: 'ACEITADESCBALCAORESERVA', type: 'varchar2', length: 1, nullable: true })
  acceptReserveCounterDiscount: string | null;

  @Column({ name: 'CLIIBGEOBRG', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  mandatoryClientIbge: string | null;

  @Column({ name: 'CLIIPIOBRG', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  mandatoryClientIpi: string | null;

  @Column({ name: 'USAPISCOFINSPORFILIAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePisCofinsByBranch: string | null;

  @Column({ name: 'NAOGRAVARSALDOESTOQUEINVENTROT', type: 'varchar2', length: 1, nullable: true })
  noSaveRotInventoryStockBalance: string | null;

  @Column({ name: 'ULTNUMDATACHEQ', type: 'date', nullable: true })
  lastCheckDateNum: Date | null;

  @Column({ name: 'DTINICIONFP', type: 'date', nullable: true })
  nfpStartDate: Date | null;

  @Column({ name: 'CONSEDERACESSOPROPRIO530', type: 'varchar2', length: 1, nullable: true })
  grantOwnAccess530: string | null;

  @Column({ name: 'TIPOINTEGRACAO', type: 'varchar2', length: 1, nullable: true })
  integrationType: string | null;

  @Column({ name: 'CODCONTADESPOS', type: 'number', precision: 10, scale: 0, nullable: true })
  orderServiceExpenseAccountCode: number | null;

  @Column({ name: 'SITUACAOINICIALBLOQUEIO', type: 'varchar2', length: 1, nullable: true })
  initialBlockStatus: string | null;

  @Column({ name: 'CODCONTDESPORDEMSERVICO', type: 'number', precision: 10, scale: 0, nullable: true })
  serviceOrderExpenseAccountCode: number | null;

  @Column({ name: 'CODPLPAGAUTOMATIC', type: 'varchar2', length: 1, nullable: true })
  autoPayPlanCode: string | null;

  @Column({ name: 'PROXCODPLPAG', type: 'number', precision: 4, scale: 0, nullable: true })
  nextPayPlanCode: number | null;

  @Column({ name: 'CONFERINDOCARGAPEDIDO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  checkingOrderLoad: string | null;

  @Column({ name: 'TIMERMSGAGENDA', type: 'number', precision: 3, scale: 0, nullable: true })
  agendaMsgTimer: number | null;

  @Column({ name: 'USAMARCAPRODUTOS', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useProductBrand: string | null;

  @Column({ name: 'CODCONTAGNRE', type: 'number', precision: 10, scale: 0, nullable: true })
  gnreAccountCode: number | null;

  @Column({ name: 'USARREDUCAOICMSABATRANSF', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useTransferAbatementIcmsReduction: string | null;

  @Column({ name: 'USAVENDABALCAOCLIFILIALVIRTUAL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  useVirtualBranchClientCounterSale: string | null;

  @Column({ name: 'CODCONTADEVCLI', type: 'number', precision: 10, scale: 0, nullable: true })
  clientReturnAccountCode2: number | null;

  @Column({ name: 'ACEITADESCPRECOFIXOCESTA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  acceptBasketFixedPriceDiscount: string | null;

  @Column({ name: 'NUMDIASVENCTITULOCOBINT', type: 'number', precision: 6, scale: 0, nullable: true })
  internalCobTitleDueDays: number | null;

  @Column({ name: 'NUMDIASVENCTITULOCOBEXT', type: 'number', precision: 6, scale: 0, nullable: true })
  externalCobTitleDueDays: number | null;

  @Column({ name: 'CODSETORCOBRANCA', type: 'number', precision: 6, scale: 0, nullable: true })
  collectionSectorCode: number | null;

  @Column({ name: 'USAPOLITICADESENHA', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  usePasswordPolicy: string | null;

  @Column({ name: 'BLOQCLIENTEEXCDEVOL', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  blockClientExcReturn: string | null;

  @Column({ name: 'PERCEXCESSODEVOL', type: 'number', precision: 7, scale: 4, nullable: true })
  returnExcessPerc: number | null;

  @Column({ name: 'DIASANALISEDEVOL', type: 'number', precision: 4, scale: 0, nullable: true })
  returnAnalysisDays: number | null;

  @Column({ name: 'USAVENDEDORNATROCA', type: 'varchar2', length: 1, nullable: true, default: 'S' })
  useSellerOnExchange: string | null;

  @Column({ name: 'OSRESERVANAEXECUCAO', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  orderServiceReserveOnExecution: string | null;

  @Column({ name: 'BLOQCODCLIPRINC', type: 'varchar2', length: 1, nullable: true })
  blockMainClientCode: string | null;

  @Column({ name: 'PROXNUMLOTENFEDPEC', type: 'number', precision: 10, scale: 0, nullable: true })
  nextNfeDpecLotNumber: number | null;

  @Column({ name: 'RESTRINGIRCONFERENCIALOTE', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  restrictLotConference: string | null;

  @Column({ name: 'TIPOTITULOSECF402', type: 'varchar2', length: 1, nullable: true, default: '1' })
  ecfTitleType402: string | null;

  @Column({ name: 'TIPOTITULOSECF409', type: 'varchar2', length: 1, nullable: true, default: '1' })
  ecfTitleType409: string | null;

  @Column({ name: 'CODCLIPC', type: 'number', precision: 6, scale: 0, nullable: true })
  pcClientCode: number | null;

  @Column({ name: 'TXIOFCOMPLEMENTAR', type: 'number', precision: 12, scale: 4, nullable: true })
  complementaryIofRate: number | null;

  @Column({ name: 'HASHSISTEMA', type: 'varchar2', length: 40, nullable: true })
  systemHash: string | null;

  @Column({ name: 'USAFLUIG', type: 'varchar2', length: 1, nullable: true })
  useFluig: string | null;

  @Column({ name: 'PRO1CNUMLISTA', type: 'number', precision: 6, scale: 0, nullable: true })
  pro1cListNumber: number | null;

  @Column({ name: 'AUTOMATIC', type: 'varchar2', length: 1, nullable: true, default: 'N' })
  automatic: string | null;

  @Column({ name: 'VLTARIFABOLEPIX', type: 'number', precision: 8, scale: 2, nullable: true })
  bolepixFeeValue: number | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  maxAlterDate: Date | null;
}