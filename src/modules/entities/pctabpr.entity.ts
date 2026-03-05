import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCTABPR' })
export class PctabprEntity {
  @Column({ name: 'ATUALIZAR', type: 'varchar2', length: 1, nullable: true })
  update: string | null;

  @Column({ name: 'CALCULARFECPSTVENDA', type: 'varchar2', length: 1, nullable: true })
  calcFecpStSale: string | null;

  @Column({ name: 'CALCULARIPI', type: 'varchar2', length: 1, nullable: true })
  calcIpi: string | null;

  @Column({ name: 'CODFILIALINTEGRACAO', type: 'number', precision: 3, scale: 0, nullable: true })
  integrationBranchCode: number | null;

  @Column({ name: 'CODIGO_CBS', type: 'number', precision: 10, scale: 0, nullable: true })
  cbsCode: number | null;

  @Column({ name: 'CODIGO_IBS', type: 'number', precision: 10, scale: 0, nullable: true })
  ibsCode: number | null;

  @Column({ name: 'CODIGO_IS', type: 'number', precision: 10, scale: 0, nullable: true })
  isCode: number | null;

  @PrimaryColumn({ name: 'CODPROD', type: 'number', precision: 6, scale: 0, nullable: false })
  productCode: number;

  @Column({ name: 'CODST', type: 'number', precision: 4, scale: 0, nullable: true })
  stCode: number | null;

  @Column({ name: 'CODTRIBPISCOFINS', type: 'number', precision: 4, scale: 0, nullable: true })
  pisCofinsTaxCode: number | null;

  @Column({ name: 'COTAITEM', type: 'number', precision: 6, scale: 0, nullable: true })
  itemQuota: number | null;

  @Column({ name: 'COTAITEMTAB', type: 'number', precision: 6, scale: 0, nullable: true })
  itemQuotaTable: number | null;

  @Column({ name: 'CUSTOPRECIFIC', type: 'number', precision: 18, scale: 6, nullable: true })
  specificCost: number | null;

  @Column({ name: 'CUSTOPRECIFICTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  specificCostTable: number | null;

  @Column({ name: 'DESCONTAFRETE', type: 'varchar2', length: 1, nullable: true })
  deductFreight: string | null;

  @Column({ name: 'DTALTERC5', type: 'timestamp', precision: 6, nullable: true })
  c5ChangeDate: Date | null;

  @Column({ name: 'DTEMISSAOETIQ', type: 'date', nullable: true })
  labelIssueDate: Date | null;

  @Column({ name: 'DTFIMVALIDADE', type: 'date', nullable: true })
  expirationEndDate: Date | null;

  @Column({ name: 'DTIMPORTINTEGRACAO', type: 'date', nullable: true })
  integrationImportDate: Date | null;

  @Column({ name: 'DTINICIOPTABELA', type: 'date', nullable: true })
  tablePriceStartDate: Date | null;

  @Column({ name: 'DTINICIOVALIDADE', type: 'date', nullable: true })
  validityStartDate: Date | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  mxsLastChangeDate: Date | null;

  @Column({ name: 'DTULTALTERSRVPRC', type: 'date', nullable: true })
  srvPrcLastChangeDate: Date | null;

  @Column({ name: 'DTULTALTPTABELA', type: 'date', nullable: true })
  tablePriceLastChangeDate: Date | null;

  @Column({ name: 'DTULTALTPTABELAFUTURO', type: 'date', nullable: true })
  futurePriceTableLastChangeDate: Date | null;

  @Column({ name: 'DTULTALTPVENDA', type: 'date', nullable: true })
  salePriceLastChangeDate: Date | null;

  @Column({ name: 'DTULTATUPVENDA', type: 'date', nullable: true })
  salePriceLastUpdateDate: Date | null;

  @Column({ name: 'DTVALPREVISTA', type: 'date', nullable: true })
  expectedExpirationDate: Date | null;

  @Column({ name: 'EXCLUIDO', type: 'varchar2', length: 1, nullable: true })
  deleted: string | null;

  @Column({ name: 'FORMULA', type: 'clob', nullable: true })
  formula: string | null;

  @Column({ name: 'INDICEPRECO', type: 'number', precision: 12, scale: 8, nullable: true })
  priceIndex: number | null;

  @Column({ name: 'MARGEM', type: 'number', precision: 6, scale: 2, nullable: true })
  margin: number | null;

  @Column({ name: 'MARGEM_ESP', type: 'number', precision: 6, scale: 2, nullable: true })
  specialMargin: number | null;

  @Column({ name: 'MATRICULA', type: 'number', precision: 8, scale: 0, nullable: true })
  employeeId: number | null;

  @PrimaryColumn({ name: 'NUMREGIAO', type: 'number', precision: 4, scale: 0, nullable: false })
  regionNumber: number;

  @Column({ name: 'NUMSEQATU', type: 'number', nullable: true })
  currentSequenceNumber: number | null;

  @Column({ name: 'OBS', type: 'varchar2', length: 80, nullable: true })
  observation: string | null;

  @Column({ name: 'PCOMREP1', type: 'number', precision: 6, scale: 2, nullable: true })
  repCommission1: number | null;

  @Column({ name: 'PCOMREP2', type: 'number', precision: 6, scale: 2, nullable: true })
  repCommission2: number | null;

  @Column({ name: 'PCOMREP3', type: 'number', precision: 6, scale: 2, nullable: true })
  repCommission3: number | null;

  @Column({ name: 'PERCACRESCIMOFRETE', type: 'number', precision: 8, scale: 2, nullable: true })
  freightIncreasePercentage: number | null;

  @Column({ name: 'PERCCOM', type: 'number', precision: 10, scale: 2, nullable: true })
  commissionPercentage: number | null;

  @Column({ name: 'PERCCOMGARANTIDA', type: 'number', precision: 10, scale: 2, nullable: true })
  guaranteedCommissionPercentage: number | null;

  @Column({ name: 'PERCCOMGARANTIDATAB', type: 'number', precision: 10, scale: 2, nullable: true })
  guaranteedCommissionPercentageTable: number | null;

  @Column({ name: 'PERCDESCSIMPLESNAC', type: 'number', precision: 18, scale: 6, nullable: true })
  simplesNacionalDiscountPercentage: number | null;

  @Column({ name: 'PERCIPIVENDATAB', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiSalePercentageTable: number | null;

  @Column({ name: 'PERDESCAUTOR', type: 'number', precision: 6, scale: 3, nullable: true })
  authorizedDiscountPercentage: number | null;

  @Column({ name: 'PERDESCAUTORTAB', type: 'number', precision: 6, scale: 3, nullable: true })
  authorizedDiscountPercentageTable: number | null;

  @Column({ name: 'PERDESCFOB', type: 'number', precision: 5, scale: 2, nullable: true })
  fobDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAX', type: 'number', precision: 10, scale: 2, nullable: true })
  maxDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAXAVISTA', type: 'number', precision: 10, scale: 2, nullable: true })
  maxCashDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAXAVISTATAB', type: 'number', precision: 10, scale: 2, nullable: true })
  maxCashDiscountPercentageTable: number | null;

  @Column({ name: 'PERDESCMAXBALCAO', type: 'number', precision: 10, scale: 2, nullable: true })
  maxCounterDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAXESP', type: 'number', precision: 6, scale: 3, nullable: true })
  maxSpecialDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAXIDEAL', type: 'number', precision: 10, scale: 2, nullable: true })
  maxIdealDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAXIDEALTAB', type: 'number', precision: 10, scale: 2, nullable: true })
  maxIdealDiscountPercentageTable: number | null;

  @Column({ name: 'PERDESCMAXPOSSIVEL', type: 'number', precision: 10, scale: 2, nullable: true })
  maxPossibleDiscountPercentage: number | null;

  @Column({ name: 'PERDESCMAXPOSSIVELTAB', type: 'number', precision: 10, scale: 2, nullable: true })
  maxPossibleDiscountPercentageTable: number | null;

  @Column({ name: 'PERDESCMAXTAB', type: 'number', precision: 10, scale: 2, nullable: true })
  maxDiscountPercentageTable: number | null;

  @Column({ name: 'PERDESCMAXTABBALCAO', type: 'number', precision: 10, scale: 2, nullable: true })
  maxCounterDiscountPercentageTable: number | null;

  @Column({ name: 'PFRETE', type: 'number', precision: 10, scale: 4, nullable: true })
  freightPrice: number | null;

  @Column({ name: 'POFERTA', type: 'number', precision: 12, scale: 3, nullable: true })
  offerPrice: number | null;

  @Column({ name: 'POFERTAAUX', type: 'number', precision: 12, scale: 3, nullable: true })
  auxOfferPrice: number | null;

  @Column({ name: 'POFERTATAB', type: 'number', precision: 12, scale: 3, nullable: true })
  offerPriceTable: number | null;

  @Column({ name: 'PRECOANTERIORATAC', type: 'number', precision: 18, scale: 6, nullable: true })
  previousWholesalePrice: number | null;

  @Column({ name: 'PRECOCOMIVA', type: 'varchar2', length: 1, nullable: true })
  priceWithIva: string | null;

  @Column({ name: 'PRECOCOMIVATAB', type: 'varchar2', length: 1, nullable: true })
  priceWithIvaTable: string | null;

  @Column({ name: 'PRECOFAB', type: 'number', precision: 18, scale: 6, nullable: true })
  manufacturerPrice: number | null;

  @Column({ name: 'PRECOMAXCONSUM', type: 'number', precision: 18, scale: 6, nullable: true })
  maxConsumerPrice: number | null;

  @Column({ name: 'PRECOMAXCONSUMTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  maxConsumerPriceTable: number | null;

  @Column({ name: 'PRECOMINIMOTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  minimumTablePrice: number | null;

  @Column({ name: 'PRECOMINIMOTABELA_AUX', type: 'number', precision: 18, scale: 6, nullable: true })
  minimumTablePriceAux: number | null;

  @Column({ name: 'PRECOMINIMOVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  minimumSalePrice: number | null;

  @Column({ name: 'PRECOMINIMOVENDA_AUX', type: 'number', precision: 18, scale: 6, nullable: true })
  minimumSalePriceAux: number | null;

  @Column({ name: 'PRECOREVISTA', type: 'number', precision: 18, scale: 6, nullable: true })
  revisedPrice: number | null;

  @Column({ name: 'PTABELA', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice: number | null;

  @Column({ name: 'PTABELA1', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice1: number | null;

  @Column({ name: 'PTABELA2', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice2: number | null;

  @Column({ name: 'PTABELA3', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice3: number | null;

  @Column({ name: 'PTABELA4', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice4: number | null;

  @Column({ name: 'PTABELA5', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice5: number | null;

  @Column({ name: 'PTABELA6', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice6: number | null;

  @Column({ name: 'PTABELA7', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePrice7: number | null;

  @Column({ name: 'PTABELAATAC', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice: number | null;

  @Column({ name: 'PTABELAATAC1', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice1: number | null;

  @Column({ name: 'PTABELAATAC2', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice2: number | null;

  @Column({ name: 'PTABELAATAC3', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice3: number | null;

  @Column({ name: 'PTABELAATAC4', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice4: number | null;

  @Column({ name: 'PTABELAATAC5', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice5: number | null;

  @Column({ name: 'PTABELAATAC6', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice6: number | null;

  @Column({ name: 'PTABELAATAC7', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePrice7: number | null;

  @Column({ name: 'PTABELAATACSEMIMPOSTO1', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePriceNoTax1: number | null;

  @Column({ name: 'PTABELAATACSEMIMPOSTO2', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePriceNoTax2: number | null;

  @Column({ name: 'PTABELAATACSEMIMPOSTO3', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePriceNoTax3: number | null;

  @Column({ name: 'PTABELAATACSEMIMPOSTO4', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePriceNoTax4: number | null;

  @Column({ name: 'PTABELAATACSEMIMPOSTO5', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePriceNoTax5: number | null;

  @Column({ name: 'PTABELAATACSEMIMPOSTO6', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePriceNoTax6: number | null;

  @Column({ name: 'PTABELAATACSEMIMPOSTO7', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleTablePriceNoTax7: number | null;

  @Column({ name: 'PTABELAFUTURO', type: 'number', precision: 12, scale: 3, nullable: true })
  futurePriceTable: number | null;

  @Column({ name: 'PTABELAMED', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice: number | null;

  @Column({ name: 'PTABELAMED1', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice1: number | null;

  @Column({ name: 'PTABELAMED2', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice2: number | null;

  @Column({ name: 'PTABELAMED3', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice3: number | null;

  @Column({ name: 'PTABELAMED4', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice4: number | null;

  @Column({ name: 'PTABELAMED5', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice5: number | null;

  @Column({ name: 'PTABELAMED6', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice6: number | null;

  @Column({ name: 'PTABELAMED7', type: 'number', precision: 12, scale: 3, nullable: true })
  avgTablePrice7: number | null;

  @Column({ name: 'PTABELASEMIMPOSTO1', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceNoTax1: number | null;

  @Column({ name: 'PTABELASEMIMPOSTO2', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceNoTax2: number | null;

  @Column({ name: 'PTABELASEMIMPOSTO3', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceNoTax3: number | null;

  @Column({ name: 'PTABELASEMIMPOSTO4', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceNoTax4: number | null;

  @Column({ name: 'PTABELASEMIMPOSTO5', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceNoTax5: number | null;

  @Column({ name: 'PTABELASEMIMPOSTO6', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceNoTax6: number | null;

  @Column({ name: 'PTABELASEMIMPOSTO7', type: 'number', precision: 18, scale: 6, nullable: true })
  tablePriceNoTax7: number | null;

  @Column({ name: 'PVENDA', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice: number | null;

  @Column({ name: 'PVENDA1', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice1: number | null;

  @Column({ name: 'PVENDA2', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice2: number | null;

  @Column({ name: 'PVENDA3', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice3: number | null;

  @Column({ name: 'PVENDA4', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice4: number | null;

  @Column({ name: 'PVENDA5', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice5: number | null;

  @Column({ name: 'PVENDA6', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice6: number | null;

  @Column({ name: 'PVENDA7', type: 'number', precision: 18, scale: 6, nullable: true })
  salePrice7: number | null;

  @Column({ name: 'PVENDAATAC', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice: number | null;

  @Column({ name: 'PVENDAATAC1', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice1: number | null;

  @Column({ name: 'PVENDAATAC2', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice2: number | null;

  @Column({ name: 'PVENDAATAC3', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice3: number | null;

  @Column({ name: 'PVENDAATAC4', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice4: number | null;

  @Column({ name: 'PVENDAATAC5', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice5: number | null;

  @Column({ name: 'PVENDAATAC6', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice6: number | null;

  @Column({ name: 'PVENDAATAC7', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePrice7: number | null;

  @Column({ name: 'PVENDAATACSEMIMPOSTO1', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePriceNoTax1: number | null;

  @Column({ name: 'PVENDAATACSEMIMPOSTO2', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePriceNoTax2: number | null;

  @Column({ name: 'PVENDAATACSEMIMPOSTO3', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePriceNoTax3: number | null;

  @Column({ name: 'PVENDAATACSEMIMPOSTO4', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePriceNoTax4: number | null;

  @Column({ name: 'PVENDAATACSEMIMPOSTO5', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePriceNoTax5: number | null;

  @Column({ name: 'PVENDAATACSEMIMPOSTO6', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePriceNoTax6: number | null;

  @Column({ name: 'PVENDAATACSEMIMPOSTO7', type: 'number', precision: 18, scale: 6, nullable: true })
  wholesaleSalePriceNoTax7: number | null;

  @Column({ name: 'PVENDAMED', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice: number | null;

  @Column({ name: 'PVENDAMED1', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice1: number | null;

  @Column({ name: 'PVENDAMED2', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice2: number | null;

  @Column({ name: 'PVENDAMED3', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice3: number | null;

  @Column({ name: 'PVENDAMED4', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice4: number | null;

  @Column({ name: 'PVENDAMED5', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice5: number | null;

  @Column({ name: 'PVENDAMED6', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice6: number | null;

  @Column({ name: 'PVENDAMED7', type: 'number', precision: 12, scale: 3, nullable: true })
  avgSalePrice7: number | null;

  @Column({ name: 'PVENDASEMIMPOSTO1', type: 'number', precision: 18, scale: 6, nullable: true })
  salePriceNoTax1: number | null;

  @Column({ name: 'PVENDASEMIMPOSTO2', type: 'number', precision: 18, scale: 6, nullable: true })
  salePriceNoTax2: number | null;

  @Column({ name: 'PVENDASEMIMPOSTO3', type: 'number', precision: 18, scale: 6, nullable: true })
  salePriceNoTax3: number | null;

  @Column({ name: 'PVENDASEMIMPOSTO4', type: 'number', precision: 18, scale: 6, nullable: true })
  salePriceNoTax4: number | null;

  @Column({ name: 'PVENDASEMIMPOSTO5', type: 'number', precision: 18, scale: 6, nullable: true })
  salePriceNoTax5: number | null;

  @Column({ name: 'PVENDASEMIMPOSTO6', type: 'number', precision: 18, scale: 6, nullable: true })
  salePriceNoTax6: number | null;

  @Column({ name: 'PVENDASEMIMPOSTO7', type: 'number', precision: 18, scale: 6, nullable: true })
  salePriceNoTax7: number | null;

  @Column({ name: 'QTDESCAUTOR', type: 'number', precision: 6, scale: 0, nullable: true })
  authorizedDiscountQty: number | null;

  @Column({ name: 'QTDESCAUTORTAB', type: 'number', precision: 6, scale: 0, nullable: true })
  authorizedDiscountQtyTable: number | null;

  @Column({ name: 'REGPRECIFICADA', type: 'varchar2', length: 1, nullable: true })
  pricedRegulation: string | null;

  @Column({ name: 'REGRAALTERARDESCONTO', type: 'varchar2', length: 1, nullable: true })
  discountChangeRule: string | null;

  @Column({ name: 'ROTINA', type: 'varchar2', length: 40, nullable: true })
  routine: string | null;

  @Column({ name: 'TABELAEMITIDA', type: 'varchar2', length: 1, nullable: true })
  tableIssued: string | null;

  @Column({ name: 'UTILIZAMULTIPLO', type: 'varchar2', length: 1, nullable: true })
  useMultiple: string | null;

  @Column({ name: 'UTILIZARIOLOG', type: 'varchar2', length: 1, nullable: true })
  useRioLog: string | null;

  @Column({ name: 'VLACRESFRETEKG', type: 'number', precision: 12, scale: 6, nullable: true })
  freightIncreasePerKgValue: number | null;

  @Column({ name: 'VLCBS', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsValue: number | null;

  @Column({ name: 'VLCBSTAB', type: 'number', precision: 23, scale: 10, nullable: true })
  cbsValueTable: number | null;

  @Column({ name: 'VLFCPST', type: 'number', precision: 12, scale: 4, nullable: true })
  fcpStValue: number | null;

  @Column({ name: 'VLFCPSTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  fcpStValueTable: number | null;

  @Column({ name: 'VLIBS', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsValue: number | null;

  @Column({ name: 'VLIBSTAB', type: 'number', precision: 23, scale: 10, nullable: true })
  ibsValueTable: number | null;

  @Column({ name: 'VLIPI', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiValue: number | null;

  @Column({ name: 'VLIPIPORKGVENDATAB', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiPerKgSaleValueTable: number | null;

  @Column({ name: 'VLIPITAB', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiValueTable: number | null;

  @Column({ name: 'VLIS', type: 'number', precision: 23, scale: 10, nullable: true })
  isValue: number | null;

  @Column({ name: 'VLISTAB', type: 'number', precision: 23, scale: 10, nullable: true })
  isValueTable: number | null;

  @Column({ name: 'VLPAUTAIPIVENDATAB', type: 'number', precision: 18, scale: 6, nullable: true })
  ipiGuidelineSaleValueTable: number | null;

  @Column({ name: 'VLST', type: 'number', precision: 18, scale: 6, nullable: true })
  stValue: number | null;

  @Column({ name: 'VLSTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  stValueTable: number | null;

  @Column({ name: 'VLULTENTCONTSEMST', type: 'number', precision: 18, scale: 6, nullable: true })
  lastContEntryNoStValue: number | null;

  @Column({ name: 'VLULTENTCONTSEMSTTAB', type: 'number', precision: 18, scale: 6, nullable: true })
  lastContEntryNoStValueTable: number | null;

  @Column({ name: 'VLULTENTMES', type: 'number', precision: 18, scale: 6, nullable: true })
  lastMonthEntryValue: number | null;
}

