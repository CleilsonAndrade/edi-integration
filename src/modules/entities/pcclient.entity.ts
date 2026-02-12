import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCCLIENT' })
export class PcclientEntity {

  @Column({ name: 'ACEITACHTERCEIROS', type: 'varchar2', nullable: true, length: 1 })
  acceptsChterceincomeTaxOs: string | null;

  @Column({ name: 'ACEITAINSERIRPRODUTOAUT', type: 'varchar2', nullable: true, length: 1 })
  acceptsInserincomeTaxProductUtoauth: string | null;

  @Column({ name: 'ACEITAPEDMONTPATHFIND', type: 'varchar2', nullable: true, length: 1 })
  acceptsPedmontypeathFind: string | null;

  @Column({ name: 'ACEITASIMILAR', type: 'varchar2', nullable: true, length: 1 })
  acceptsYesIlar: string | null;

  @Column({ name: 'ACEITATROCANEGATIVA', type: 'varchar2', nullable: true, length: 1 })
  acceptsExchangeNegactiveA: string | null;

  @Column({ name: 'ACEITAVENDAFRACAO', type: 'varchar2', nullable: true, length: 1 })
  acceptsSalesAfracao: string | null;

  @Column({ name: 'ACIONAMENTOCLIENTE', type: 'nvarchar2', nullable: true, length: 4 })
  acionamdeliveryOclientName: string | null;

  @Column({ name: 'AGREGARIPIBASEICMS', type: 'varchar2', nullable: true, length: 1 })
  agencyRegistryAripiBaseicms: string | null;

  @Column({ name: 'AGREGARVALORSTDESCFIN', type: 'varchar2', nullable: true, length: 1 })
  agencyRegistryArvalueOrstDiscountFin: string | null;

  @Column({ name: 'ALIQICMS1', type: 'number', nullable: true, precision: 8, scale: 4 })
  rateIcms1: number | null;

  @Column({ name: 'ANALISECRED', type: 'varchar2', nullable: true, length: 1 })
  analysisCredit: string | null;

  @Column({ name: 'ANVISA', type: 'varchar2', nullable: true, length: 1 })
  anvisa: string | null;

  @Column({ name: 'APLICADESCNF', type: 'varchar2', nullable: true, length: 1 })
  aplicadiscountInvoice: string | null;

  @Column({ name: 'APLICREDBASEICMSTRANSP', type: 'varchar2', nullable: true, length: 1 })
  aplicreditBaseicmsCarrier: string | null;

  @Column({ name: 'AREALOJAM2', type: 'number', nullable: true, precision: 8, scale: 0 })
  areaStoreSqMeters: number | null;

  @Column({ name: 'ATENDEDOMINGO', type: 'varchar2', nullable: true, length: 1 })
  ataddressEdominuteGo: string | null;

  @Column({ name: 'ATENDEQUARTA', type: 'varchar2', nullable: true, length: 1 })
  ataddressEquarta: string | null;

  @Column({ name: 'ATENDEQUINTA', type: 'varchar2', nullable: true, length: 1 })
  ataddressEquinternationalA: string | null;

  @Column({ name: 'ATENDESABADO', type: 'varchar2', nullable: true, length: 1 })
  ataddressEsabado: string | null;

  @Column({ name: 'ATENDESEGUNDA', type: 'varchar2', nullable: true, length: 1 })
  ataddressEsegunda: string | null;

  @Column({ name: 'ATENDESEXTA', type: 'varchar2', nullable: true, length: 1 })
  ataddressEsforeignA: string | null;

  @Column({ name: 'ATENDETERCA', type: 'varchar2', nullable: true, length: 1 })
  ataddressEterepresentative: string | null;

  @Column({ name: 'ATUALIZASALDOCCDESCFIN', type: 'varchar2', nullable: true, length: 1 })
  currentAlizasaldocheckingAccountDiscountFin: string | null;

  @Column({ name: 'AUX_QTDIASVENCLIMCRED', type: 'number', nullable: true, precision: 4, scale: 0 })
  aux_QuantityIasexpirationCreditLimit: number | null;

  @Column({ name: 'BAIRROCOB', type: 'varchar2', nullable: true, length: 40 })
  neighborhoodBilling: string | null;

  @Column({ name: 'BAIRROCOM', type: 'varchar2', nullable: true, length: 40 })
  neighborhoodCommercial: string | null;

  @Column({ name: 'BAIRROENT', type: 'varchar2', nullable: true, length: 40 })
  neighborhoodDelivery: string | null;

  @Column({ name: 'BLOQREMCOB', type: 'varchar2', nullable: true, length: 1 })
  blockSenderBilling: string | null;

  @Column({ name: 'BLOQUEIO', type: 'varchar2', nullable: true, length: 1 })
  blockUeio: string | null;

  @Column({ name: 'BLOQUEIODATACHEQ', type: 'varchar2', nullable: true, length: 1 })
  blockUeiodateCheq: string | null;

  @Column({ name: 'BLOQUEIODEFINITIVO', type: 'varchar2', nullable: true, length: 1 })
  blockUeiodefinitivo: string | null;

  @Column({ name: 'BLOQUEIOINATIVIDADE', type: 'varchar2', nullable: true, length: 1 })
  blockUeioinactiveIdAde: string | null;

  @Column({ name: 'BLOQUEIOSEFAZ', type: 'varchar2', nullable: true, length: 1 })
  blockUeiosefaz: string | null;

  @Column({ name: 'BLOQUEIOSEFAZPED', type: 'varchar2', nullable: true, length: 1 })
  blockUeiosefazped: string | null;

  @Column({ name: 'BLOQVENDAPF', type: 'varchar2', nullable: true, length: 1 })
  blockSalesApf: string | null;

  @Column({ name: 'CACEX', type: 'varchar2', nullable: true, length: 15 })
  cacex: string | null;

  @Column({ name: 'CAIXAPOSTAL', type: 'number', nullable: true, precision: 5, scale: 0 })
  caixapostAl: number | null;

  @Column({ name: 'CAIXARETORNAVELWMS', type: 'varchar2', nullable: true, length: 1 })
  caixaretentionOrnavelwms: string | null;

  @Column({ name: 'CALCULAST', type: 'varchar2', nullable: true, length: 1 })
  calculatesUlast: string | null;

  @Column({ name: 'CAPITALSOCIAL', type: 'number', nullable: true, precision: 14, scale: 2 })
  capitalsocial: number | null;

  @Column({ name: 'CARGO', type: 'varchar2', nullable: true, length: 30 })
  cargO: string | null;

  @Column({ name: 'CARGOCONJUGE', type: 'varchar2', nullable: true, length: 30 })
  cargOspouse: string | null;

  @Column({ name: 'CEPCOB', type: 'varchar2', nullable: true, length: 9 })
  zipCodeBilling: string | null;

  @Column({ name: 'CEPCOM', type: 'varchar2', nullable: true, length: 9 })
  zipCodeCommercial: string | null;

  @Column({ name: 'CEPCXPOSTAL', type: 'number', nullable: true, precision: 8, scale: 0 })
  zipCodeCxpostAl: number | null;

  @Column({ name: 'CEPENT', type: 'varchar2', nullable: true, length: 9 })
  zipCodeDelivery: string | null;

  @Column({ name: 'CEPRECEBEDORENDENT', type: 'number', nullable: true, precision: 8, scale: 0 })
  zipCodeRecebedoraddressDelivery: number | null;

  @Column({ name: 'CGCENT', type: 'varchar2', nullable: true, length: 18 })
  taxIdDelivery: string | null;

  @Column({ name: 'CGCENTREGA', type: 'varchar2', nullable: true, length: 18 })
  taxIdInputEga: string | null;

  @Column({ name: 'CGEENTAUX', type: 'varchar2', nullable: true, length: 18 })
  cgedeliveryAux: string | null;

  @Column({ name: 'CHAVEPIX', type: 'varchar2', nullable: true, length: 100 })
  keyPix: string | null;

  @Column({ name: 'CHECKINAPP', type: 'date', nullable: true })
  checkinapp: Date | null;

  @Column({ name: 'CLASSECOMERCIAL', type: 'varchar2', nullable: true, length: 1 })
  classCommercialerchandiseIal: string | null;

  @Column({ name: 'CLASSEMC', type: 'varchar2', nullable: true, length: 1 })
  classMc: string | null;

  @Column({ name: 'CLASSEVENDA', type: 'varchar2', nullable: true, length: 1 })
  classSalesA: string | null;

  @Column({ name: 'CLIATACADO', type: 'varchar2', nullable: true, length: 1 })
  clientAtacado: string | null;

  @Column({ name: 'CLICRM', type: 'varchar2', nullable: true, length: 1 })
  clientCrm: string | null;

  @Column({ name: 'CLIENTE', type: 'varchar2', nullable: true, length: 60 })
  name: string | null;

  @Column({ name: 'CLIENTE2', type: 'varchar2', nullable: true, length: 100 })
  clientName2: string | null;

  @Column({ name: 'CLIENTEDAN', type: 'varchar2', nullable: true, length: 1 })
  clientNameDan: string | null;

  @Column({ name: 'CLIENTEELETRO', type: 'varchar2', nullable: true, length: 1 })
  clientNameEletro: string | null;

  @Column({ name: 'CLIENTEFONTEST', type: 'varchar2', nullable: true, length: 1 })
  clientNameFontstate: string | null;

  @Column({ name: 'CLIENTEMAISNEGOCIOS', type: 'varchar2', nullable: true, length: 1 })
  clientNameMaisnegocios: string | null;

  @Column({ name: 'CLIENTEMONITORADO', type: 'varchar2', nullable: true, length: 1 })
  clientNameMonitorado: string | null;

  @Column({ name: 'CLIENTPROTESTO', type: 'varchar2', nullable: true, length: 1 })
  clientDeliveryProtstateO: string | null;

  @Column({ name: 'CLIEXCLUSIVO_DMS', type: 'varchar2', nullable: true, length: 5 })
  clientExclusivo_Dms: string | null;

  @Column({ name: 'CLIMEIOPTANTESN', type: 'varchar2', nullable: true, length: 1 })
  climitEioptypereviousEsn: string | null;

  @Column({ name: 'CNPJCISP', type: 'varchar2', nullable: true, length: 8 })
  cnpjCisp: string | null;

  @Column({ name: 'CODATV1', type: 'number', nullable: true, precision: 6, scale: 0 })
  idAtv1: number | null;

  @Column({ name: 'CODBAIRROCOB', type: 'number', nullable: true, precision: 6, scale: 0 })
  idNeighborhoodBilling: number | null;

  @Column({ name: 'CODBAIRROCOM', type: 'number', nullable: true, precision: 6, scale: 0 })
  idNeighborhoodCommercial: number | null;

  @Column({ name: 'CODBAIRRODELIV', type: 'number', nullable: true, precision: 6, scale: 0 })
  idNeighborhoodDeliv: number | null;

  @Column({ name: 'CODBAIRROENT', type: 'number', nullable: true, precision: 6, scale: 0 })
  idNeighborhoodDelivery: number | null;

  @Column({ name: 'CODBANDEIRA_DMS', type: 'varchar2', nullable: true, length: 20 })
  idBandeincomeTaxA_Dms: string | null;

  @Column({ name: 'CODBARRA', type: 'number', nullable: true, precision: 14, scale: 0 })
  idBarra: number | null;

  @Column({ name: 'CODBARRACOB', type: 'number', nullable: true, precision: 14, scale: 0 })
  idBarrabilling: number | null;

  @Column({ name: 'CODBARRAENT', type: 'number', nullable: true, precision: 14, scale: 0 })
  idBarradelivery: number | null;

  @Column({ name: 'CODCAMINHOENTREGAMED', type: 'number', nullable: true, precision: 4, scale: 0 })
  idPathInputEgaavg: number | null;

  @Column({ name: 'CODCANAL', type: 'number', nullable: true, precision: 6, scale: 0 })
  idCanal: number | null;

  @Column({ name: 'CODCANAL_DMS', type: 'varchar2', nullable: true, length: 50 })
  idCanal_Dms: string | null;

  @Column({ name: 'CODCIDADE', type: 'number', nullable: true, precision: 6, scale: 0 })
  idCityAde: number | null;

  @Column({ name: 'CODCIDADECOM', type: 'number', nullable: true, precision: 6, scale: 0 })
  idCityAdecommercial: number | null;

  @Column({ name: 'CODCLASSE_DMS', type: 'varchar2', nullable: true, length: 30 })
  idClass_Dms: string | null;

  @PrimaryColumn({ name: 'CODCLI', type: 'number' })
  customerId: number;

  @Column({ name: 'CODCLIINT', type: 'number', nullable: true, precision: 10, scale: 0 })
  idClientInternational: number | null;

  @Column({ name: 'CODCLIPALM', type: 'number', nullable: true, precision: 6, scale: 0 })
  idClientPalm: number | null;

  @Column({ name: 'CODCLIPRINC', type: 'number', nullable: true, precision: 6, scale: 0 })
  idClientPrinc: number | null;

  @Column({ name: 'CODCLIWEB', type: 'number', nullable: true, precision: 15, scale: 0 })
  idClientWeb: number | null;

  @Column({ name: 'CODCNAE', type: 'varchar2', nullable: true, length: 60 })
  idCnae: string | null;

  @Column({ name: 'CODCNES', type: 'varchar2', nullable: true, length: 10 })
  idCnes: string | null;

  @Column({ name: 'CODCOB', type: 'varchar2', nullable: true, length: 4 })
  idBilling: string | null;

  @Column({ name: 'CODCOBTV1', type: 'varchar2', nullable: true, length: 4 })
  idBillingTv1: string | null;

  @Column({ name: 'CODCOBTV3', type: 'varchar2', nullable: true, length: 4 })
  idBillingTv3: string | null;

  @Column({ name: 'CODCONDCOMERCIAL', type: 'varchar2', nullable: true, length: 20 })
  idConditionCommercialerchandiseIal: string | null;

  @Column({ name: 'CODCONDICAOVENDA', type: 'number', nullable: true, precision: 6, scale: 0 })
  idConditionIcaosalesA: number | null;

  @Column({ name: 'CODCONTAB', type: 'varchar2', nullable: true, length: 12 })
  idContab: string | null;

  @Column({ name: 'CODFILIALESTOQUE', type: 'varchar2', nullable: true, length: 1 })
  idBranchStock: string | null;

  @Column({ name: 'CODFILIALNF', type: 'varchar2', nullable: true, length: 2 })
  idBranchInvoice: string | null;

  @Column({ name: 'CODFORNECFRETE', type: 'number', nullable: true, precision: 6, scale: 0 })
  idSupplierFretentionE: number | null;

  @Column({ name: 'CODFUNCANALISECRED', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeAnalysisCredit: number | null;

  @Column({ name: 'CODFUNCCAD', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeCad: number | null;

  @Column({ name: 'CODFUNCCADASTRO', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeCadastRo: number | null;

  @Column({ name: 'CODFUNCLANCPOTENCIALLIMCRED', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeLancpotencialcreditLimit: number | null;

  @Column({ name: 'CODFUNCULTALTER', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeLastAlter: number | null;

  @Column({ name: 'CODFUNCULTALTER1203', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeLastAlter1203: number | null;

  @Column({ name: 'CODFUNCULTALTERCLIESP', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeLastAlterclientEsp: number | null;

  @Column({ name: 'CODFUNCULTCONTATOCOB', type: 'number', nullable: true, precision: 8, scale: 0 })
  idEmployeeLastContatobilling: number | null;

  @Column({ name: 'CODGLN', type: 'number', nullable: true, precision: 13, scale: 0 })
  idGln: number | null;

  @Column({ name: 'CODGRUPOCLICOMISSMED', type: 'number', nullable: true, precision: 6, scale: 0 })
  idGroupClientCommercialIssAvg: number | null;

  @Column({ name: 'CODGRUPOCOMERCIALMED', type: 'number', nullable: true, precision: 4, scale: 0 })
  idGroupCommercialerchandiseIalavg: number | null;

  @Column({ name: 'CODGRUPO_DMS', type: 'varchar2', nullable: true, length: 40 })
  idGroup_Dms: string | null;

  @Column({ name: 'CODHIST', type: 'number', nullable: true, precision: 6, scale: 0 })
  idHist: number | null;

  @Column({ name: 'CODHOLDIN_DMS', type: 'varchar2', nullable: true, length: 20 })
  idHolcash_Dms: string | null;

  @Column({ name: 'CODMOTIVO_DMS', type: 'varchar2', nullable: true, length: 3 })
  idReason_Dms: string | null;

  @Column({ name: 'CODMUNICIPIO', type: 'number', nullable: true, precision: 10, scale: 0 })
  idMunicipalityIpiO: number | null;

  @Column({ name: 'CODNILSEN', type: 'varchar2', nullable: true, length: 4 })
  idNilsen: string | null;

  @Column({ name: 'CODPAIS', type: 'number', nullable: true, precision: 6, scale: 0 })
  idCountry: number | null;

  @Column({ name: 'CODPAISRECEBEDORENDENT', type: 'number', nullable: true, precision: 6, scale: 0 })
  idCountryRecebedoraddressDelivery: number | null;

  @Column({ name: 'CODPLPAG', type: 'number', nullable: true, precision: 4, scale: 0 })
  idPlpayment: number | null;

  @Column({ name: 'CODPLPAG2', type: 'number', nullable: true, precision: 4, scale: 0 })
  idPlpayment2: number | null;

  @Column({ name: 'CODPLPAGAGRUPAUTOMATIC', type: 'number', nullable: true, precision: 4, scale: 0 })
  idPlpaymentAgencyRupauthOmatic: number | null;

  @Column({ name: 'CODPLPAGETICO', type: 'number', nullable: true, precision: 4, scale: 0 })
  idPlpaymentEtico: number | null;

  @Column({ name: 'CODPLPAGGENERICO', type: 'number', nullable: true, precision: 4, scale: 0 })
  idPlpaymentGenerico: number | null;

  @Column({ name: 'CODPLPAGPADRAO', type: 'number', nullable: true, precision: 4, scale: 0 })
  idPlpaymentPadrao: number | null;

  @Column({ name: 'CODPRACA', type: 'number', nullable: true, precision: 6, scale: 0 })
  idRegion: number | null;

  @Column({ name: 'CODPRACACOB', type: 'number', nullable: true, precision: 6, scale: 0 })
  idRegionBilling: number | null;

  @Column({ name: 'CODPROFISSIONAL', type: 'number', nullable: true, precision: 6, scale: 0 })
  idProfissIonal: number | null;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', nullable: true, precision: 9, scale: 0 })
  idPromocaoavg: number | null;

  @Column({ name: 'CODREDE', type: 'number', nullable: true, precision: 4, scale: 0 })
  idRede: number | null;

  @Column({ name: 'CODROTAINSERVIVEL', type: 'number', nullable: true, precision: 6, scale: 0 })
  idRouteInservivel: number | null;

  @Column({ name: 'CODROTINAALT', type: 'varchar2', nullable: true, length: 40 })
  idRotinaalt: string | null;

  @Column({ name: 'CODSEGMENTACAO_DMS', type: 'varchar2', nullable: true, length: 50 })
  idSegmdeliveryAcao_Dms: string | null;

  @Column({ name: 'CODSTATUSCOB', type: 'number', nullable: true, precision: 4, scale: 0 })
  idStCurrentSbilling: number | null;

  @Column({ name: 'CODSUFRAMA', type: 'varchar2', nullable: true, length: 30 })
  idSstateRama: string | null;

  @Column({ name: 'CODTIPOCHAVEPIX', type: 'varchar2', nullable: true, length: 2 })
  idTypeKeyPix: string | null;

  @Column({ name: 'CODTIPONEGOCIO_DMS', type: 'varchar2', nullable: true, length: 50 })
  idTypeNegocio_Dms: string | null;

  @Column({ name: 'CODTIPOVENDA_DMS', type: 'varchar2', nullable: true, length: 20 })
  idTypeSalesA_Dms: string | null;

  @Column({ name: 'CODUSUR1', type: 'number', nullable: true, precision: 4, scale: 0 })
  idUser1: number | null;

  @Column({ name: 'CODUSUR2', type: 'number', nullable: true, precision: 4, scale: 0 })
  idUser2: number | null;

  @Column({ name: 'CODUSUR3', type: 'number', nullable: true, precision: 4, scale: 0 })
  idUser3: number | null;

  @Column({ name: 'CODUSURECOMMERCE', type: 'number', nullable: true, precision: 4, scale: 0 })
  idUserEcommercialMerchandiseE: number | null;

  @Column({ name: 'COMPLEMENTOCOB', type: 'varchar2', nullable: true, length: 80 })
  complementLemdeliveryObilling: string | null;

  @Column({ name: 'COMPLEMENTOCOM', type: 'varchar2', nullable: true, length: 80 })
  complementLemdeliveryOcommercial: string | null;

  @Column({ name: 'COMPLEMENTOENT', type: 'varchar2', nullable: true, length: 80 })
  complementLemdeliveryOdelivery: string | null;

  @Column({ name: 'CONDVENDA1', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA1: string | null;

  @Column({ name: 'CONDVENDA10', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA10: string | null;

  @Column({ name: 'CONDVENDA11', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA11: string | null;

  @Column({ name: 'CONDVENDA12', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA12: string | null;

  @Column({ name: 'CONDVENDA13', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA13: string | null;

  @Column({ name: 'CONDVENDA14', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA14: string | null;

  @Column({ name: 'CONDVENDA2', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA2: string | null;

  @Column({ name: 'CONDVENDA20', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA20: string | null;

  @Column({ name: 'CONDVENDA3', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA3: string | null;

  @Column({ name: 'CONDVENDA4', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA4: string | null;

  @Column({ name: 'CONDVENDA5', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA5: string | null;

  @Column({ name: 'CONDVENDA6', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA6: string | null;

  @Column({ name: 'CONDVENDA7', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA7: string | null;

  @Column({ name: 'CONDVENDA8', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA8: string | null;

  @Column({ name: 'CONDVENDA9', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA9: string | null;

  @Column({ name: 'CONDVENDA98', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA98: string | null;

  @Column({ name: 'CONDVENDA99', type: 'varchar2', nullable: true, length: 1 })
  conditionSalesA99: string | null;

  @Column({ name: 'CONSUMIDORFINAL', type: 'varchar2', nullable: true, length: 1 })
  consumidOrfinal: string | null;

  @Column({ name: 'CONTAGEMESTOQUE', type: 'varchar2', nullable: true, length: 1 })
  contagencyEmstock: string | null;

  @Column({ name: 'CONTRIBUINTE', type: 'varchar2', nullable: true, length: 1 })
  contributeUinternationalE: string | null;

  @Column({ name: 'COZINHAINDUSTRIAL', type: 'varchar2', nullable: true, length: 1 })
  cozinhaindustRial: string | null;

  @Column({ name: 'CPFCONJUGE', type: 'varchar2', nullable: true, length: 15 })
  cpfSpouse: string | null;

  @Column({ name: 'CRF', type: 'varchar2', nullable: true, length: 30 })
  crf: string | null;

  @Column({ name: 'CRF_AUX', type: 'varchar2', nullable: true, length: 30 })
  crf_Aux: string | null;

  @Column({ name: 'DATACOLETA', type: 'date', nullable: true })
  dateColeta: Date | null;

  @Column({ name: 'DATACONSULTASINTEGRA', type: 'date', nullable: true })
  dateConslastAsinternationalEgra: Date | null;

  @Column({ name: 'DATAHORACONSULTAMAISNEGOCIOS', type: 'date', nullable: true })
  dateHourConslastAmaisnegocios: Date | null;

  @Column({ name: 'DDDINTERNACIONAL', type: 'number', nullable: true, precision: 3, scale: 0 })
  dddinternationalErnationalIonal: number | null;

  @Column({ name: 'DESCONSVALIDASEFAZ', type: 'varchar2', nullable: true, length: 1 })
  discountOnsvalidatesSefaz: string | null;

  @Column({ name: 'DESCPRODUTO', type: 'varchar2', nullable: true, length: 1 })
  discountProductUto: string | null;

  @Column({ name: 'DESTACAFRETE', type: 'varchar2', nullable: true, length: 1 })
  destinationAcafretentionE: string | null;

  @Column({ name: 'DIAFATURAR', type: 'number', nullable: true, precision: 2, scale: 0 })
  dayFcurrentRar: number | null;

  @Column({ name: 'DIAFECHACONVENIO', type: 'number', nullable: true, precision: 2, scale: 0 })
  dayFechaagreementEnio: number | null;

  @Column({ name: 'DIALIMITFATU', type: 'number', nullable: true, precision: 2, scale: 0 })
  dayLimitItfcurrent: number | null;

  @Column({ name: 'DIASEMANA', type: 'varchar2', nullable: true, length: 10 })
  daySemana: string | null;

  @Column({ name: 'DIGAGENCIA1', type: 'varchar2', nullable: true, length: 2 })
  digagencyEncia1: string | null;

  @Column({ name: 'DIGAGENCIA1_AUX', type: 'varchar2', nullable: true, length: 2 })
  digagencyEncia1_Aux: string | null;

  @Column({ name: 'DIGAGENCIA2', type: 'varchar2', nullable: true, length: 1 })
  digagencyEncia2: string | null;

  @Column({ name: 'DIRETORIOCLIENTE', type: 'varchar2', nullable: true, length: 100 })
  directoryetentionOrioclientName: string | null;

  @Column({ name: 'DIRETORIOCONTRATO', type: 'varchar2', nullable: true, length: 100 })
  directoryetentionOriocontrato: string | null;

  @Column({ name: 'DTABERTCC1', type: 'date', nullable: true })
  dateAbertcheckingAccount1: Date | null;

  @Column({ name: 'DTABERTCC2', type: 'date', nullable: true })
  dateAbertcheckingAccount2: Date | null;

  @Column({ name: 'DTADMISSAO', type: 'date', nullable: true })
  dateAdmissAo: Date | null;

  @Column({ name: 'DTADMISSAOCONJUGE', type: 'date', nullable: true })
  dateAdmissAospouse: Date | null;

  @Column({ name: 'DTALTDADOSBANCARIOS', type: 'date', nullable: true })
  dateAltdadosbancarios: Date | null;

  @Column({ name: 'DTALTERC5', type: 'date', nullable: true })
  dateAlterc5: Date | null;

  @Column({ name: 'DTBLOQ', type: 'date', nullable: true })
  dateBlock: Date | null;

  @Column({ name: 'DTCADASTRO', type: 'date', nullable: true })
  dateCadastRo: Date | null;

  @Column({ name: 'DTCAPITALSOCIAL', type: 'date', nullable: true })
  dateCapitalsocial: Date | null;

  @Column({ name: 'DTCLASSIFICAESTRELA', type: 'date', nullable: true })
  dateClassSificastateRela: Date | null;

  @Column({ name: 'DTCLASSIFICAGRUPO', type: 'date', nullable: true })
  dateClassSificagencyroup: Date | null;

  @Column({ name: 'DTDESBLOQUEIO', type: 'date', nullable: true })
  dateDesblockUeio: Date | null;

  @Column({ name: 'DTENQUADRAMENTOMICROEMPRESA', type: 'date', nullable: true })
  dateEnquadramdeliveryOmicroempresa: Date | null;

  @Column({ name: 'DTEXCLUSAO', type: 'date', nullable: true })
  dateExclusesO: Date | null;

  @Column({ name: 'DTEXCLUSAOSOFITVIEW', type: 'date', nullable: true })
  dateExclusesOsofitvstateRegistrationW: Date | null;

  @Column({ name: 'DTIMPORTINTEGRACAO', type: 'date', nullable: true })
  dateImportOrtinternationalEgracao: Date | null;

  @Column({ name: 'DTINIVISTORIA', type: 'date', nullable: true })
  dateInivistOria: Date | null;

  @Column({ name: 'DTLANCPOTENCIALLIMCRED', type: 'date', nullable: true })
  dateLancpotencialcreditLimit: Date | null;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  dateMxsalter: Date | null;

  @Column({ name: 'DTNASC', type: 'date', nullable: true })
  dateNasc: Date | null;

  @Column({ name: 'DTNASCCONJ', type: 'date', nullable: true })
  dateNascheckingAccountOnj: Date | null;

  @Column({ name: 'DTPRIMCOMPRA', type: 'date', nullable: true })
  dateFirstComplementRa: Date | null;

  @Column({ name: 'DTPROXCONTATOCOB', type: 'date', nullable: true })
  dateNextContatobilling: Date | null;

  @Column({ name: 'DTPROXDESDAGENDADO', type: 'date', nullable: true })
  dateNextDesdagencyAddressAdo: Date | null;

  @Column({ name: 'DTPROXVISTORIA', type: 'date', nullable: true })
  dateNextVistOria: Date | null;

  @Column({ name: 'DTREGLIM', type: 'date', nullable: true })
  dateRegistryLimit: Date | null;

  @Column({ name: 'DTSERASAGERENCIE', type: 'date', nullable: true })
  dateSerasamanagerEncstateRegistration: Date | null;

  @Column({ name: 'DTSYNCPATHFIND', type: 'date', nullable: true })
  dateSyncpathFind: Date | null;

  @Column({ name: 'DTULTAGRUPAMENTO', type: 'date', nullable: true })
  dateLastAgencyRupamdeliveryO: Date | null;

  @Column({ name: 'DTULTALTER', type: 'date', nullable: true })
  dateLastAlter: Date | null;

  @Column({ name: 'DTULTALTER1203', type: 'date', nullable: true })
  dateLastAlter1203: Date | null;

  @Column({ name: 'DTULTALTERCLASSE', type: 'date', nullable: true })
  dateLastAlterclass: Date | null;

  @Column({ name: 'DTULTALTERCLIESP', type: 'date', nullable: true })
  dateLastAlterclientEsp: Date | null;

  @Column({ name: 'DTULTALTERSOFITVIEW', type: 'date', nullable: true })
  dateLastAltersofitvstateRegistrationW: Date | null;

  @Column({ name: 'DTULTALTERSRVPRC', type: 'date', nullable: true })
  dateLastAltersrvprc: Date | null;

  @Column({ name: 'DTULTCOMP', type: 'date', nullable: true })
  dateLastComplement: Date | null;

  @Column({ name: 'DTULTCOMPNESTLE', type: 'date', nullable: true })
  dateLastComplementNstateLe: Date | null;

  @Column({ name: 'DTULTCONSULTASCI', type: 'date', nullable: true })
  dateLastConslastAsci: Date | null;

  @Column({ name: 'DTULTCONSULTASERASA', type: 'date', nullable: true })
  dateLastConslastAserasa: Date | null;

  @Column({ name: 'DTULTCONSULTASINTEGRA', type: 'date', nullable: true })
  dateLastConslastAsinternationalEgra: Date | null;

  @Column({ name: 'DTULTCONTATOCOB', type: 'date', nullable: true })
  dateLastContatobilling: Date | null;

  @Column({ name: 'DTULTVISITA', type: 'date', nullable: true })
  dateLastVistatusA: Date | null;

  @Column({ name: 'DTVALIDADECONV', type: 'date', nullable: true })
  dateValidatesDeagreement: Date | null;

  @Column({ name: 'DTVALIDADEIBAMA', type: 'date', nullable: true })
  dateValidatesDeibama: Date | null;

  @Column({ name: 'DTVALIDASEFAZ', type: 'date', nullable: true })
  dateValidatesSefaz: Date | null;

  @Column({ name: 'DTVENCALVARA', type: 'date', nullable: true })
  dateExpirationLicense: Date | null;

  @Column({ name: 'DTVENCALVARAANVISA', type: 'date', nullable: true })
  dateExpirationLicenseAnvisa: Date | null;

  @Column({ name: 'DTVENCALVARAFUNC', type: 'date', nullable: true })
  dateExpirationLicenseEmployee: Date | null;

  @Column({ name: 'DTVENCALVARARETINOICO', type: 'date', nullable: true })
  dateExpirationLicenseRetentionInoico: Date | null;

  @Column({ name: 'DTVENCALVARASUS', type: 'date', nullable: true })
  dateExpirationLicenseSus: Date | null;

  @Column({ name: 'DTVENCCRF', type: 'date', nullable: true })
  dateExpirationCrf: Date | null;

  @Column({ name: 'DTVENCLIMCRED', type: 'date', nullable: true })
  dateExpirationCreditLimit: Date | null;

  @Column({ name: 'DTVENCPRAZOADICIONAL', type: 'date', nullable: true })
  dateExpirationTermAdicional: Date | null;

  @Column({ name: 'DTVENCSUFRAMA', type: 'date', nullable: true })
  dateExpirationSstateRama: Date | null;

  @Column({ name: 'EANCOBRANCA', type: 'number', nullable: true, precision: 14, scale: 0 })
  eanbillingRanca: number | null;

  @Column({ name: 'EANENTREGA', type: 'number', nullable: true, precision: 14, scale: 0 })
  eaninputEga: number | null;

  @Column({ name: 'EDOCOB', type: 'varchar2', nullable: true, length: 3 })
  edobilling: string | null;

  @Column({ name: 'EDOCOM', type: 'varchar2', nullable: true, length: 3 })
  edocommercial: string | null;

  @Column({ name: 'EDOENT', type: 'varchar2', nullable: true, length: 3 })
  edodelivery: string | null;

  @Column({ name: 'EMAIL', type: 'varchar2', nullable: true, length: 100 })
  email: string | null;

  @Column({ name: 'EMAILCOB', type: 'varchar2', nullable: true, length: 100 })
  emailBilling: string | null;

  @Column({ name: 'EMAILNFE', type: 'varchar2', nullable: true, length: 100 })
  emailNfe: string | null;

  @Column({ name: 'EMAILNFE_AUX', type: 'varchar2', nullable: true, length: 3500 })
  emailNfe_Aux: string | null;

  @Column({ name: 'EMAILRECEBEDORENDENT', type: 'varchar2', nullable: true, length: 60 })
  emailRecebedoraddressDelivery: string | null;

  @Column({ name: 'EMITEDAE', type: 'varchar2', nullable: true, length: 1 })
  emitedae: string | null;

  @Column({ name: 'EMITEDUP', type: 'varchar2', nullable: true, length: 1 })
  emiteduplicate: string | null;

  @Column({ name: 'EMITENTECH', type: 'varchar2', nullable: true, length: 40 })
  emitdeliveryEch: string | null;

  @Column({ name: 'EMITENTECH2', type: 'varchar2', nullable: true, length: 40 })
  emitdeliveryEch2: string | null;

  @Column({ name: 'EMITEPVENDANFSEMDESC', type: 'varchar2', nullable: true, length: 1 })
  emitepsalesAinvoiceSemdiscount: string | null;

  @Column({ name: 'EMPFIXA', type: 'varchar2', nullable: true, length: 1 })
  empfixa: string | null;

  @Column({ name: 'EMPRESA', type: 'varchar2', nullable: true, length: 40 })
  empresa: string | null;

  @Column({ name: 'EMPRESACONJUGE', type: 'varchar2', nullable: true, length: 40 })
  empresaspouse: string | null;

  @Column({ name: 'EMPRESACONVENIADA', type: 'varchar2', nullable: true, length: 1 })
  empresaagreementEniada: string | null;

  @Column({ name: 'ENDERCOB', type: 'varchar2', nullable: true, length: 40 })
  addressBilling: string | null;

  @Column({ name: 'ENDERCOM', type: 'varchar2', nullable: true, length: 40 })
  addressCommercial: string | null;

  @Column({ name: 'ENDERCONJUGE', type: 'varchar2', nullable: true, length: 40 })
  addressSpouse: string | null;

  @Column({ name: 'ENDEREMPR', type: 'varchar2', nullable: true, length: 40 })
  addressEmpr: string | null;

  @Column({ name: 'ENDERENT', type: 'varchar2', nullable: true, length: 40 })
  addressDelivery: string | null;

  @Column({ name: 'ENVIADADOSSERASA', type: 'varchar2', nullable: true, length: 1 })
  enviadadosserasa: string | null;

  @Column({ name: 'ENVIAFORCAVENDAS', type: 'varchar2', nullable: true, length: 1 })
  enviaforepresentativeSalesAs: string | null;

  @Column({ name: 'ENVIARCADINTEGRA_DMS', type: 'varchar2', nullable: true, length: 1 })
  enviarepresentativeDinternationalEgra_Dms: string | null;

  @Column({ name: 'ENVIONFEEMAILCOM', type: 'varchar2', nullable: true, length: 1 })
  envionfeEmailCommercial: string | null;

  @Column({ name: 'ENVIOPDFNFE', type: 'varchar2', nullable: true, length: 1 })
  enviopdfnfe: string | null;

  @Column({ name: 'ESTCOB', type: 'varchar2', nullable: true, length: 2 })
  stateBilling: string | null;

  @Column({ name: 'ESTCOM', type: 'varchar2', nullable: true, length: 2 })
  stateCommercial: string | null;

  @Column({ name: 'ESTCONJUGE', type: 'varchar2', nullable: true, length: 2 })
  stateSpouse: string | null;

  @Column({ name: 'ESTEMPR', type: 'varchar2', nullable: true, length: 2 })
  stateEmpr: string | null;

  @Column({ name: 'ESTENT', type: 'varchar2', nullable: true, length: 2 })
  stateDelivery: string | null;

  @Column({ name: 'EXPORTARDADOSIMS', type: 'varchar2', nullable: true, length: 1 })
  dispatcherOrtardadoyesS: string | null;

  @Column({ name: 'FAIXASORTIMENTO', type: 'varchar2', nullable: true, length: 50 })
  faixasortimdeliveryO: string | null;

  @Column({ name: 'FANTASIA', type: 'varchar2', nullable: true, length: 40 })
  tradeName: string | null;

  @Column({ name: 'FAXCLI', type: 'varchar2', nullable: true, length: 15 })
  faxclient: string | null;

  @Column({ name: 'FAXCOM', type: 'varchar2', nullable: true, length: 15 })
  faxcommercial: string | null;

  @Column({ name: 'FILIACAOMAE', type: 'varchar2', nullable: true, length: 40 })
  filiacaomother: string | null;

  @Column({ name: 'FILIACAOMAECONJ', type: 'varchar2', nullable: true, length: 40 })
  filiacaomotherConj: string | null;

  @Column({ name: 'FILIACAOPAI', type: 'varchar2', nullable: true, length: 40 })
  filiacaofather: string | null;

  @Column({ name: 'FILIACAOPAICONJ', type: 'varchar2', nullable: true, length: 40 })
  filiacaofatherConj: string | null;

  @Column({ name: 'FOCO', type: 'varchar2', nullable: true, length: 1 })
  foco: string | null;

  @Column({ name: 'FONERECEBEDORENDENT', type: 'number', nullable: true, precision: 14, scale: 0 })
  fonerecebedoraddressDelivery: number | null;

  @Column({ name: 'FORCACLIPJ', type: 'char', nullable: true, length: 1 })
  forepresentativeClientPj: string | null;

  @Column({ name: 'FORCECLIPF', type: 'char', nullable: true, length: 1 })
  forceclientPf: string | null;

  @Column({ name: 'FOTOGRAFIASUCESSO', type: 'varchar2', nullable: true, length: 1 })
  photoGrafiasucesso: string | null;

  @Column({ name: 'FREQDIAVISITA', type: 'number', nullable: true, precision: 4, scale: 0 })
  freqdayVistatusA: number | null;

  @Column({ name: 'FREQVISITA', type: 'number', nullable: true, precision: 1, scale: 0 })
  freqvistatusA: number | null;

  @Column({ name: 'FREQVISITA_DMS', type: 'varchar2', nullable: true, length: 10 })
  freqvistatusA_Dms: string | null;

  @Column({ name: 'FRETEDESPACHO', type: 'varchar2', nullable: true, length: 1 })
  fretentionEdespacho: string | null;

  @Column({ name: 'GERAGRPRETTRIB', type: 'varchar2', nullable: true, length: 1 })
  generatesGroupRetentionTribute: string | null;

  @Column({ name: 'GERARCREDITODEVCLI', type: 'varchar2', nullable: true, length: 1 })
  generateCreditItoreturnClient: string | null;

  @Column({ name: 'GERATITULOST', type: 'varchar2', nullable: true, length: 1 })
  generatesTitulost: string | null;

  @Column({ name: 'GERENCIAMENTO', type: 'varchar2', nullable: true, length: 1 })
  managerEnciamdeliveryO: string | null;

  @Column({ name: 'GRUPORAMOATIVI', type: 'varchar2', nullable: true, length: 2 })
  groupRamoactiveI: string | null;

  @Column({ name: 'HORACADASTRO', type: 'date', nullable: true })
  hourCadastRo: Date | null;

  @Column({ name: 'HORAPROXCONTATO', type: 'number', nullable: true, precision: 2, scale: 0 })
  hourNextContato: number | null;

  @Column({ name: 'HORARIORECEB', type: 'varchar2', nullable: true, length: 5 })
  hourRioreceb: string | null;

  @Column({ name: 'ICMSANTECIP', type: 'varchar2', nullable: true, length: 1 })
  icmsPreviousEcip: string | null;

  @Column({ name: 'IDENTIFICESTRANG', type: 'varchar2', nullable: true, length: 20 })
  idDeliveryIficstateRang: string | null;

  @Column({ name: 'IDENTVALERIODOCE', type: 'varchar2', nullable: true, length: 40 })
  idDeliveryValueEriodoce: string | null;

  @Column({ name: 'IDINTEGRACAOMYFROTA', type: 'raw', nullable: true, length: 16 })
  idInternationalEgracaomyfroute: string | null;

  @Column({ name: 'IDSOFITVIEW', type: 'varchar2', nullable: true, length: 10 })
  idSofitvstateRegistrationW: string | null;

  @Column({ name: 'IEENT', type: 'varchar2', nullable: true, length: 15 })
  stateRegistrationDelivery: string | null;

  @Column({ name: 'IEPS', type: 'number', nullable: true, precision: 8, scale: 4 })
  stateRegistrationPs: number | null;

  @Column({ name: 'IERECEBEDORENDENT', type: 'number', nullable: true, precision: 14, scale: 0 })
  stateRegistrationRecebedoraddressDelivery: number | null;

  @Column({ name: 'IEST', type: 'varchar2', nullable: true, length: 15 })
  istate: string | null;

  @Column({ name: 'IMENT', type: 'varchar2', nullable: true, length: 15 })
  imdelivery: string | null;

  @Column({ name: 'IMPORTADOCRM', type: 'varchar2', nullable: true, length: 1 })
  importOrtadocrm: string | null;

  @Column({ name: 'INCIDENCIACPRB', type: 'varchar2', nullable: true, length: 1 })
  leviesNciacprb: string | null;

  @Column({ name: 'INCLUINOARQSCI', type: 'varchar2', nullable: true, length: 1 })
  incluinofileSci: string | null;

  @Column({ name: 'INICIOATIV', type: 'date', nullable: true })
  inicioactive: Date | null;

  @Column({ name: 'INSCESTADUAL', type: 'varchar2', nullable: true, length: 20 })
  stateRegistrationAdual: string | null;

  @Column({ name: 'INVESTIMENTO', type: 'varchar2', nullable: true, length: 1 })
  invstateImdeliveryO: string | null;

  @Column({ name: 'ISENCAOSUFRAMA', type: 'varchar2', nullable: true, length: 1 })
  isencaosstateRama: string | null;

  @Column({ name: 'ISENTAJUROS', type: 'varchar2', nullable: true, length: 1 })
  isdeliveryAjuros: string | null;

  @Column({ name: 'ISENTODIFALIQUOTAS', type: 'varchar2', nullable: true, length: 1 })
  exemptDifrateUotas: string | null;

  @Column({ name: 'ISENTOICMS', type: 'varchar2', nullable: true, length: 1 })
  exemptIcms: string | null;

  @Column({ name: 'ISENTOIPI', type: 'varchar2', nullable: true, length: 1 })
  exemptIpi: string | null;

  @Column({ name: 'ISENTOTXBOLETO', type: 'varchar2', nullable: true, length: 1 })
  exemptTxboletoEto: string | null;

  @Column({ name: 'ISENTOTXENTREGA', type: 'varchar2', nullable: true, length: 1 })
  exemptTxinputEga: string | null;

  @Column({ name: 'IVA', type: 'number', nullable: true, precision: 8, scale: 4 })
  iva: number | null;

  @Column({ name: 'IVAFONTE', type: 'number', nullable: true, precision: 8, scale: 4 })
  ivafonte: number | null;

  @Column({ name: 'LATITUDE', type: 'varchar2', nullable: true, length: 20 })
  latitudeItude: string | null;

  @Column({ name: 'LIMCRED', type: 'number', nullable: true, precision: 12, scale: 2 })
  creditLimit: number | null;

  @Column({ name: 'LIMCREDCPF', type: 'number', nullable: true, precision: 14, scale: 2 })
  creditLimitCpf: number | null;

  @Column({ name: 'LIMITEAUTORI', type: 'varchar2', nullable: true, length: 40 })
  limitIteauthOri: string | null;

  @Column({ name: 'LIMITECREDSUPPLI', type: 'number', nullable: true, precision: 12, scale: 2 })
  limitItecreditSuppli: number | null;

  @Column({ name: 'LIMITELIBERADOMAISNEG', type: 'number', nullable: true, precision: 22, scale: 6 })
  limitIphoneIberadomaisneg: number | null;

  @Column({ name: 'LISTAPLPAG', type: 'varchar2', nullable: true, length: 20 })
  listAplpayment: string | null;

  @Column({ name: 'LONGITUDE', type: 'varchar2', nullable: true, length: 20 })
  longitudeItude: string | null;

  @Column({ name: 'MEDCODFUNCLIBTRIBUT', type: 'number', nullable: true, precision: 8, scale: 0 })
  avgCodemployeeLibtributeUt: number | null;

  @Column({ name: 'MEDDTLIBTRIBUT', type: 'date', nullable: true })
  avgDateLibtributeUt: Date | null;

  @Column({ name: 'MELDTABERTCC1', type: 'date', nullable: true })
  meldateAbertcheckingAccount1: Date | null;

  @Column({ name: 'MELDTABERTCC2', type: 'date', nullable: true })
  meldateAbertcheckingAccount2: Date | null;

  @Column({ name: 'MELDTABERTCC3', type: 'date', nullable: true })
  meldateAbertcheckingAccount3: Date | null;

  @Column({ name: 'MICROEMPRESA', type: 'varchar2', nullable: true, length: 2 })
  microempresa: string | null;

  @Column({ name: 'MINUTOPROXCONTATO', type: 'number', nullable: true, precision: 2, scale: 0 })
  minuteUtonextContato: number | null;

  @Column({ name: 'MOTIVOBLOQ', type: 'clob', nullable: true, length: 4000 })
  reasonBlock: string | null;

  @Column({ name: 'MOTIVOEXCLUSAO', type: 'varchar2', nullable: true, length: 40 })
  reasonExclusesO: string | null;

  @Column({ name: 'MSROTATRANSPORTADORA', type: 'varchar2', nullable: true, length: 14 })
  msrouteCarrierOrtadora: string | null;

  @Column({ name: 'MS_TRANSP_SECC', type: 'varchar2', nullable: true, length: 1 })
  ms_Carrier_SecheckingAccount: string | null;

  @Column({ name: 'MUNICCOB', type: 'varchar2', nullable: true, length: 15 })
  municipalityBilling: string | null;

  @Column({ name: 'MUNICCOB2', type: 'varchar2', nullable: true, length: 100 })
  municipalityBilling2: string | null;

  @Column({ name: 'MUNICCOM', type: 'varchar2', nullable: true, length: 15 })
  municipalityCommercial: string | null;

  @Column({ name: 'MUNICCOM2', type: 'varchar2', nullable: true, length: 100 })
  municipalityCommercial2: string | null;

  @Column({ name: 'MUNICCONJUGE', type: 'varchar2', nullable: true, length: 15 })
  municipalitySpouse: string | null;

  @Column({ name: 'MUNICEMPR', type: 'varchar2', nullable: true, length: 15 })
  municipalityEmpr: string | null;

  @Column({ name: 'MUNICENT', type: 'varchar2', nullable: true, length: 15 })
  municipalityDelivery: string | null;

  @Column({ name: 'MUNICENT2', type: 'varchar2', nullable: true, length: 100 })
  municipalityDelivery2: string | null;

  @Column({ name: 'NILPLPAGSOBREPOEPLPAGDISTRIB', type: 'varchar2', nullable: true, length: 1 })
  nilplpaymentSobrepresentativeOeplpaymentDistribute: string | null;

  @Column({ name: 'NOMECONJUGE', type: 'varchar2', nullable: true, length: 40 })
  nomonthpouse: string | null;

  @Column({ name: 'NOMEFARMACEUTICO', type: 'varchar2', nullable: true, length: 40 })
  nomefarmaceutico: string | null;

  @Column({ name: 'NOTIFICACAOTGI', type: 'varchar2', nullable: true, length: 2 })
  notificacaotgi: string | null;

  @Column({ name: 'NUMAGENCIA1', type: 'number', nullable: true, precision: 6, scale: 0 })
  numberAgencyEncia1: number | null;

  @Column({ name: 'NUMAGENCIA2', type: 'number', nullable: true, precision: 6, scale: 0 })
  numberAgencyEncia2: number | null;

  @Column({ name: 'NUMALVARA', type: 'varchar2', nullable: true, length: 30 })
  numberLicense: string | null;

  @Column({ name: 'NUMALVARAANVISA', type: 'varchar2', nullable: true, length: 20 })
  numberLicenseAnvisa: string | null;

  @Column({ name: 'NUMALVARAESPEC', type: 'varchar2', nullable: true, length: 30 })
  numberLicenseEspec: string | null;

  @Column({ name: 'NUMALVARAFUNC', type: 'varchar2', nullable: true, length: 30 })
  numberLicenseEmployee: string | null;

  @Column({ name: 'NUMALVARARETINOICO', type: 'varchar2', nullable: true, length: 30 })
  numberLicenseRetentionInoico: string | null;

  @Column({ name: 'NUMALVARASUS', type: 'varchar2', nullable: true, length: 30 })
  numberLicenseSus: string | null;

  @Column({ name: 'NUMBANCO1', type: 'number', nullable: true, precision: 3, scale: 0 })
  numberBank1: number | null;

  @Column({ name: 'NUMBANCO2', type: 'number', nullable: true, precision: 3, scale: 0 })
  numberBank2: number | null;

  @Column({ name: 'NUMCARTAOFIDELIDADE', type: 'varchar2', nullable: true, length: 20 })
  numberCardFidElidAde: string | null;

  @Column({ name: 'NUMCCORRENTE1', type: 'varchar2', nullable: true, length: 15 })
  numberCheckingAccountOrrdeliveryE1: string | null;

  @Column({ name: 'NUMCCORRENTE2', type: 'varchar2', nullable: true, length: 15 })
  numberCheckingAccountOrrdeliveryE2: string | null;

  @Column({ name: 'NUMCONCESSAO', type: 'varchar2', nullable: true, length: 12 })
  numberConcessao: string | null;

  @Column({ name: 'NUMCRF', type: 'varchar2', nullable: true, length: 20 })
  numberCrf: string | null;

  @Column({ name: 'NUMCRM', type: 'varchar2', nullable: true, length: 10 })
  numberCrm: string | null;

  @Column({ name: 'NUMDIASPROTESTO', type: 'number', nullable: true, precision: 2, scale: 0 })
  numberDaySprotstateO: number | null;

  @Column({ name: 'NUMEROCOB', type: 'varchar2', nullable: true, length: 6 })
  numberErobilling: string | null;

  @Column({ name: 'NUMEROCOM', type: 'varchar2', nullable: true, length: 6 })
  numberErocommercial: string | null;

  @Column({ name: 'NUMEROENT', type: 'varchar2', nullable: true, length: 6 })
  numberErodelivery: string | null;

  @Column({ name: 'NUMREGIAOCLI', type: 'number', nullable: true, precision: 4, scale: 0 })
  numberRegistryIaoclient: number | null;

  @Column({ name: 'NUMREGISTROIMUNE', type: 'varchar2', nullable: true, length: 20 })
  numberRegistryIstRoimunicipalityE: string | null;

  @Column({ name: 'NUMSEQ', type: 'number', nullable: true, precision: 10, scale: 0 })
  numberSequence: number | null;

  @Column({ name: 'NUMSEQATU', type: 'number', nullable: true })
  numberSequenceCurrent: number | null;

  @Column({ name: 'NUMSEQROTARCA', type: 'number', nullable: true, precision: 4, scale: 0 })
  numberSequenceRouteRepresentative: number | null;

  @Column({ name: 'NUMTARE', type: 'varchar2', nullable: true, length: 20 })
  numberTare: string | null;

  @Column({ name: 'NUMTRANSVENDADESC', type: 'number', nullable: true, precision: 12, scale: 0 })
  numberTransportSalesAdiscount: number | null;

  @Column({ name: 'OBS', type: 'varchar2', nullable: true, length: 40 })
  observation: string | null;

  @Column({ name: 'OBS2', type: 'varchar2', nullable: true, length: 40 })
  observation2: string | null;

  @Column({ name: 'OBS3', type: 'varchar2', nullable: true, length: 60 })
  observation3: string | null;

  @Column({ name: 'OBS4', type: 'varchar2', nullable: true, length: 60 })
  observation4: string | null;

  @Column({ name: 'OBS5', type: 'varchar2', nullable: true, length: 60 })
  observation5: string | null;

  @Column({ name: 'OBSCALLCENTER', type: 'varchar2', nullable: true, length: 4000 })
  observationCallcdeliveryEr: string | null;

  @Column({ name: 'OBSCREDITO', type: 'varchar2', nullable: true, length: 30 })
  observationCreditIto: string | null;

  @Column({ name: 'OBSENTREGA1', type: 'varchar2', nullable: true, length: 75 })
  observationInputEga1: string | null;

  @Column({ name: 'OBSENTREGA2', type: 'varchar2', nullable: true, length: 75 })
  observationInputEga2: string | null;

  @Column({ name: 'OBSENTREGA3', type: 'varchar2', nullable: true, length: 75 })
  observationInputEga3: string | null;

  @Column({ name: 'OBSENTREGA4', type: 'varchar2', nullable: true, length: 75 })
  observationInputEga4: string | null;

  @Column({ name: 'OBSERVACAO', type: 'varchar2', nullable: true, length: 2000 })
  observationErvacao: string | null;

  @Column({ name: 'OBSGERENCIAL1', type: 'varchar2', nullable: true, length: 80 })
  observationManagerEncial1: string | null;

  @Column({ name: 'OBSGERENCIAL2', type: 'varchar2', nullable: true, length: 80 })
  observationManagerEncial2: string | null;

  @Column({ name: 'OBSGERENCIAL3', type: 'varchar2', nullable: true, length: 80 })
  observationManagerEncial3: string | null;

  @Column({ name: 'OBSRECEPCAO', type: 'varchar2', nullable: true, length: 4000 })
  observationRezipCodeCao: string | null;

  @Column({ name: 'OBSSUFRAMA', type: 'varchar2', nullable: true, length: 80 })
  observationSstateRama: string | null;

  @Column({ name: 'OBSTESOURARIA', type: 'varchar2', nullable: true, length: 4000 })
  observationTesouraria: string | null;

  @Column({ name: 'OBS_ADIC', type: 'clob', nullable: true, length: 4000 })
  observation_Adic: string | null;

  @Column({ name: 'ORGAOPUB', type: 'varchar2', nullable: true, length: 1 })
  orgAopub: string | null;

  @Column({ name: 'ORGAOPUBFEDERAL', type: 'varchar2', nullable: true, length: 1 })
  orgAopubfederal: string | null;

  @Column({ name: 'ORGAOPUBMUNICIPAL', type: 'varchar2', nullable: true, length: 1 })
  orgAopubmunicipalityIpal: string | null;

  @Column({ name: 'ORGAORG', type: 'varchar2', nullable: true, length: 10 })
  orgAorg: string | null;

  @Column({ name: 'ORGAORGCONJ', type: 'varchar2', nullable: true, length: 4 })
  orgAorgConj: string | null;

  @Column({ name: 'ORIGEMPRECO', type: 'varchar2', nullable: true, length: 1 })
  originEmprice: string | null;

  @Column({ name: 'PAGCHEQUEMORADIA', type: 'varchar2', nullable: true, length: 1 })
  paymentCheckMoraday: string | null;

  @Column({ name: 'PAISENT', type: 'varchar2', nullable: true, length: 18 })
  countryDelivery: string | null;

  @Column({ name: 'PARAIBASIM', type: 'varchar2', nullable: true, length: 1 })
  paraibayes: string | null;

  @Column({ name: 'PARTICIPAFARMACIAPOPULAR', type: 'varchar2', nullable: true, length: 1 })
  participafarmaciapopular: string | null;

  @Column({ name: 'PARTICIPAFUNCEP', type: 'varchar2', nullable: true, length: 1 })
  participaemployeeEp: string | null;

  @Column({ name: 'PDVINVESTIMENTO', type: 'varchar2', nullable: true, length: 1 })
  pdvinvstateImdeliveryO: string | null;

  @Column({ name: 'PERACRESTRANSF', type: 'number', nullable: true, precision: 4, scale: 2 })
  percentageAcrstateransportF: number | null;

  @Column({ name: 'PERBASEVEND', type: 'number', nullable: true, precision: 5, scale: 2 })
  percentageBasesales: number | null;

  @Column({ name: 'PERCBASEVENDQT', type: 'number', nullable: true, precision: 5, scale: 2 })
  percentageBasesalesQuantity: number | null;

  @Column({ name: 'PERCBONIFIC', type: 'number', nullable: true, precision: 5, scale: 2 })
  percentageBonific: number | null;

  @Column({ name: 'PERCFRETEAUTON', type: 'number', nullable: true, precision: 6, scale: 2 })
  percentageFretentionEauthOn: number | null;

  @Column({ name: 'PERCOMCLI', type: 'number', nullable: true, precision: 5, scale: 2 })
  percentageOmclient: number | null;

  @Column({ name: 'PERCOMFILIALBROKER', type: 'number', nullable: true, precision: 8, scale: 4 })
  percentageOmbranchBrokEr: number | null;

  @Column({ name: 'PERCREDICMS', type: 'number', nullable: true, precision: 18, scale: 6 })
  percentageRedicms: number | null;

  @Column({ name: 'PERCREDORGAOPUB', type: 'number', nullable: true, precision: 12, scale: 4 })
  percentageRedorgAopub: number | null;

  @Column({ name: 'PERCTOLVALIDADEPRODWMS', type: 'number', nullable: true, precision: 10, scale: 4 })
  percentageTolvalidatesDeproductWms: number | null;

  @Column({ name: 'PERDESC', type: 'number', nullable: true, precision: 6, scale: 2 })
  percentageDiscount: number | null;

  @Column({ name: 'PERDESC2', type: 'number', nullable: true, precision: 6, scale: 2 })
  percentageDiscount2: number | null;

  @Column({ name: 'PERDESC3', type: 'number', nullable: true, precision: 6, scale: 2 })
  percentageDiscount3: number | null;

  @Column({ name: 'PERDESC4', type: 'number', nullable: true, precision: 6, scale: 2 })
  percentageDiscount4: number | null;

  @Column({ name: 'PERDESC5', type: 'number', nullable: true, precision: 6, scale: 2 })
  percentageDiscount5: number | null;

  @Column({ name: 'PERDESCFIN', type: 'number', nullable: true, precision: 4, scale: 2 })
  percentageDiscountFin: number | null;

  @Column({ name: 'PERDESCISENTOICMS', type: 'number', nullable: true, precision: 4, scale: 2 })
  percentageDiscountExemptIcms: number | null;

  @Column({ name: 'PERDESMAXPONDERADO', type: 'number', nullable: true, precision: 18, scale: 6 })
  percentageDesmaxPonderado: number | null;

  @Column({ name: 'PERFRETEBROKER', type: 'number', nullable: true, precision: 8, scale: 4 })
  percentageFretentionEbrokEr: number | null;

  @Column({ name: 'PERIODICIDADEAGRUP', type: 'number', nullable: true, precision: 4, scale: 0 })
  percentageIodicityAdeagencyRup: number | null;

  @Column({ name: 'PERIODVISTORIA', type: 'number', nullable: true, precision: 9, scale: 0 })
  percentageIodvistOria: number | null;

  @Column({ name: 'PERMINVALIDADE', type: 'number', nullable: true, precision: 7, scale: 4 })
  percentageMinuteValidatesDe: number | null;

  @Column({ name: 'PERMITEAGRUPAMENTO', type: 'varchar2', nullable: true, length: 1 })
  percentageMiteagencyRupamdeliveryO: string | null;

  @Column({ name: 'PERMITEALTERCOBRANCACR', type: 'varchar2', nullable: true, length: 1 })
  percentageMitealterbillingRancacr: string | null;

  @Column({ name: 'PERMITEFATURARAPRAZOMAISNEG', type: 'varchar2', nullable: true, length: 1 })
  percentageMitefcurrentRaratermMaisneg: string | null;

  @Column({ name: 'PERMITIRAGRUPARTITULO', type: 'varchar2', nullable: true, length: 1 })
  percentageMitincomeTaxAgencyRupartitulo: string | null;

  @Column({ name: 'PISCOFINSCUMULATIVO', type: 'varchar2', nullable: true, length: 1 })
  pisCofinsCumulactive: string | null;

  @Column({ name: 'PLPAGNEG', type: 'varchar2', nullable: true, length: 1 })
  plpaymentNeg: string | null;

  @Column({ name: 'PLPAGNEG2', type: 'varchar2', nullable: true, length: 1 })
  plpaymentNeg2: string | null;

  @Column({ name: 'PONTOREFER', type: 'varchar2', nullable: true, length: 40 })
  pontoreferenceEr: string | null;

  @Column({ name: 'POSSUIBENFFISCAL', type: 'varchar2', nullable: true, length: 1 })
  possuibeinvoiceFiscal: string | null;

  @Column({ name: 'PRAZOADICIONAL', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAdicional: number | null;

  @Column({ name: 'PRAZOADICIONAL2', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAdicional2: number | null;

  @Column({ name: 'PRAZOADICIONAL3', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAdicional3: number | null;

  @Column({ name: 'PRAZOADICIONAL4', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAdicional4: number | null;

  @Column({ name: 'PRAZOADICIONAL5', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAdicional5: number | null;

  @Column({ name: 'PRAZOADICIONAL6', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAdicional6: number | null;

  @Column({ name: 'PRAZOADICIONAL7', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAdicional7: number | null;

  @Column({ name: 'PRAZOENTREGACARCACA', type: 'number', nullable: true, precision: 3, scale: 0 })
  termInputEgacarepresentativeCa: number | null;

  @Column({ name: 'PRAZOMAXVALIDADE', type: 'number', nullable: true, precision: 6, scale: 0 })
  termMaxValidatesDe: number | null;

  @Column({ name: 'PRAZOMEDIOPLPAG', type: 'number', nullable: true, precision: 4, scale: 0 })
  termAvgIoplpayment: number | null;

  @Column({ name: 'PRAZOSERASAGERENCIE', type: 'number', nullable: true, precision: 3, scale: 0 })
  termSerasamanagerEncstateRegistration: number | null;

  @Column({ name: 'PRAZOVALIDADE', type: 'number', nullable: true, precision: 4, scale: 0 })
  termValidatesDe: number | null;

  @Column({ name: 'PRAZOVENCST', type: 'number', nullable: true, precision: 3, scale: 0 })
  termExpirationSt: number | null;

  @Column({ name: 'PRECOUTILIZADONFE', type: 'varchar2', nullable: true, length: 2 })
  priceUsesDonfe: string | null;

  @Column({ name: 'PREDIOPROPRIO', type: 'varchar2', nullable: true, length: 1 })
  predioproprio: string | null;

  @Column({ name: 'PROXNUMSEQEND', type: 'number', nullable: true, precision: 8, scale: 0 })
  nextNumberSequenceAddress: number | null;

  @Column({ name: 'QTCHECKOUT', type: 'number', nullable: true, precision: 8, scale: 0 })
  quantityCheckout: number | null;

  @Column({ name: 'QTDDIASAPLICDESCFIN', type: 'number', nullable: true, precision: 4, scale: 0 })
  quantityDaySaplicdiscountFin: number | null;

  @Column({ name: 'QTDEPARCIMPOSTOS', type: 'number', nullable: true, precision: 2, scale: 0 })
  quantityEparctaxS: number | null;

  @Column({ name: 'QTDIASAVENCERPRODUTO', type: 'number', nullable: true, precision: 4, scale: 0 })
  quantityIasaexpirationErproductUto: number | null;

  @Column({ name: 'QTDIASCARENCIACONV', type: 'number', nullable: true, precision: 2, scale: 0 })
  quantityIascarenciaagreement: number | null;

  @Column({ name: 'QTDIASVENCLIMCRED', type: 'number', nullable: true, precision: 4, scale: 0 })
  quantityIasexpirationCreditLimit: number | null;

  @Column({ name: 'QTESTRELA', type: 'number', nullable: true, precision: 2, scale: 0 })
  quantityStateRela: number | null;

  @Column({ name: 'RATEARSTPARCELAS', type: 'varchar2', nullable: true, length: 1 })
  ratearstypeArcellPhoneAs: string | null;

  @Column({ name: 'RATINGSCI', type: 'varchar2', nullable: true, length: 2 })
  ratingsci: string | null;

  @Column({ name: 'RATINGSCI1', type: 'varchar2', nullable: true, length: 2 })
  ratingsci1: string | null;

  @Column({ name: 'RATINGSCI2', type: 'varchar2', nullable: true, length: 2 })
  ratingsci2: string | null;

  @Column({ name: 'RAZAORECEBEDORENDENT', type: 'varchar2', nullable: true, length: 60 })
  razaorecebedoraddressDelivery: string | null;

  @Column({ name: 'RECEBERBOLETOPOREMAIL', type: 'varchar2', nullable: true, length: 1 })
  receberboletoEtoporemail: string | null;

  @Column({ name: 'REGISTROIBAMA', type: 'varchar2', nullable: true, length: 30 })
  registryIstRoibama: string | null;

  @Column({ name: 'REGJUNTACOMERCIAL', type: 'varchar2', nullable: true, length: 15 })
  registryJuntacommercialerchandiseIal: string | null;

  @Column({ name: 'RENDAMENSAL', type: 'number', nullable: true, precision: 14, scale: 2 })
  raddressAmensal: number | null;

  @Column({ name: 'RENDAMENSALCONJUGE', type: 'number', nullable: true, precision: 14, scale: 2 })
  raddressAmensalspouse: number | null;

  @Column({ name: 'REPASSE', type: 'varchar2', nullable: true, length: 1 })
  representativeAsse: string | null;

  @Column({ name: 'RESSARCIMENTOST', type: 'varchar2', nullable: true, length: 1 })
  ressarcimdeliveryOst: string | null;

  @Column({ name: 'RETECAOCOFINSORGPUB', type: 'varchar2', nullable: true, length: 1 })
  retentionEcaocofinsOrgPub: string | null;

  @Column({ name: 'RETECAOCSORGPUB', type: 'varchar2', nullable: true, length: 1 })
  retentionEcaocsorgPub: string | null;

  @Column({ name: 'RETECAOICMSSTORGPUB', type: 'varchar2', nullable: true, length: 1 })
  retentionEcaoicmsStOrgPub: string | null;

  @Column({ name: 'RETECAOIRORGPUB', type: 'varchar2', nullable: true, length: 1 })
  retentionEcaoincomeTaxOrgPub: string | null;

  @Column({ name: 'RETECAOOUTDEDORGPUB', type: 'varchar2', nullable: true, length: 1 })
  retentionEcaooutdedorgPub: string | null;

  @Column({ name: 'RETECAOPISORGPUB', type: 'varchar2', nullable: true, length: 1 })
  retentionEcaopisOrgPub: string | null;

  @Column({ name: 'RETENCAOISS', type: 'varchar2', nullable: true, length: 1 })
  retentionEncaoiss: string | null;

  @Column({ name: 'RFC', type: 'varchar2', nullable: true, length: 20 })
  rfc: string | null;

  @Column({ name: 'RG', type: 'varchar2', nullable: true, length: 20 })
  rg: string | null;

  @Column({ name: 'RGCONJ', type: 'varchar2', nullable: true, length: 20 })
  rgConj: string | null;

  @Column({ name: 'RIOLOG', type: 'varchar2', nullable: true, length: 1 })
  riolog: string | null;

  @Column({ name: 'ROTEIROMASTERFOODS', type: 'varchar2', nullable: true, length: 20 })
  roteincomeTaxOmastErfoods: string | null;

  @Column({ name: 'SACADOELETRONICO', type: 'varchar2', nullable: true, length: 1 })
  sacadoeletronico: string | null;

  @Column({ name: 'SALDOLIMCREDBROKER', type: 'number', nullable: true, precision: 18, scale: 6 })
  saldocreditLimitBrokEr: number | null;

  @Column({ name: 'SENHACONVECF', type: 'nvarchar2', nullable: true, length: 50 })
  passwordAgreementEcf: string | null;

  @Column({ name: 'SENHA_WEB', type: 'varchar2', nullable: true, length: 18 })
  password_Web: string | null;

  @Column({ name: 'SERASAGERENCIE', type: 'varchar2', nullable: true, length: 1 })
  serasamanagerEncstateRegistration: string | null;

  @Column({ name: 'SEXO', type: 'varchar2', nullable: true, length: 1 })
  sexo: string | null;

  @Column({ name: 'SIGLADEC', type: 'varchar2', nullable: true, length: 5 })
  sigladec: string | null;

  @Column({ name: 'SIMPLESNACIONAL', type: 'varchar2', nullable: true, length: 1 })
  simportLesnationalIonal: string | null;

  @Column({ name: 'SITE', type: 'varchar2', nullable: true, length: 80 })
  website: string | null;

  @Column({ name: 'SITUACAOECOMMERCEUNILEVER', type: 'varchar2', nullable: true, length: 3 })
  statusUacaoecommercialMerchandiseEunilever: string | null;

  @Column({ name: 'STATUSCONSULTASINTEGRA', type: 'varchar2', nullable: true, length: 1 })
  stCurrentSconslastAsinternationalEgra: string | null;

  @Column({ name: 'STATUSMAISNEG', type: 'varchar2', nullable: true, length: 1 })
  stCurrentSmaisneg: string | null;

  @Column({ name: 'SULFRAMA', type: 'varchar2', nullable: true, length: 15 })
  sulframa: string | null;

  @Column({ name: 'SUPRIMIDO', type: 'varchar2', nullable: true, length: 1 })
  sstateirstIdO: string | null;

  @Column({ name: 'SUS', type: 'varchar2', nullable: true, length: 1 })
  sus: string | null;

  @Column({ name: 'TAXABOLETONF', type: 'varchar2', nullable: true, length: 1 })
  taxaboletoEtoinvoice: string | null;

  @Column({ name: 'TELCELENT', type: 'varchar2', nullable: true, length: 13 })
  phoneCellPhoneDelivery: string | null;

  @Column({ name: 'TELCOB', type: 'varchar2', nullable: true, length: 13 })
  phoneBilling: string | null;

  @Column({ name: 'TELCOM', type: 'varchar2', nullable: true, length: 13 })
  phoneCommercial: string | null;

  @Column({ name: 'TELCONJUGE', type: 'varchar2', nullable: true, length: 13 })
  phoneSpouse: string | null;

  @Column({ name: 'TELEMPR', type: 'varchar2', nullable: true, length: 13 })
  phoneEmpr: string | null;

  @Column({ name: 'TELENT', type: 'varchar2', nullable: true, length: 13 })
  phoneDelivery: string | null;

  @Column({ name: 'TELENT1', type: 'varchar2', nullable: true, length: 13 })
  phoneDelivery1: string | null;

  @Column({ name: 'TIPOATIVCLI', type: 'varchar2', nullable: true, length: 1 })
  typeActiveClient: string | null;

  @Column({ name: 'TIPOCLIMED', type: 'varchar2', nullable: true, length: 2 })
  typeClimitEd: string | null;

  @Column({ name: 'TIPOCONVERSAOTV4', type: 'varchar2', nullable: true, length: 2 })
  typeAgreementErsaotv4: string | null;

  @Column({ name: 'TIPOCUSTOMANIF', type: 'varchar2', nullable: true, length: 2 })
  typeCostManif: string | null;

  @Column({ name: 'TIPOCUSTOTRANSF', type: 'varchar2', nullable: true, length: 1 })
  typeCostTransportF: string | null;

  @Column({ name: 'TIPOCUSTOTRANSFTV9', type: 'varchar2', nullable: true, length: 2 })
  typeCostTransportFtv9: string | null;

  @Column({ name: 'TIPOCUSTOTRANSF_FILIAIS', type: 'varchar2', nullable: true, length: 1 })
  typeCostTransportF_Filiais: string | null;

  @Column({ name: 'TIPOCUSTOTRANSF_FILIALVIRTUAL', type: 'varchar2', nullable: true, length: 1 })
  typeCostTransportF_BranchVincomeTaxTual: string | null;

  @Column({ name: 'TIPODESCISENCAO', type: 'varchar2', nullable: true, length: 1 })
  typeDiscountIsencao: string | null;

  @Column({ name: 'TIPODIAUTILROTA', type: 'varchar2', nullable: true, length: 1 })
  typeDayuthIlroute: string | null;

  @Column({ name: 'TIPODOCUMENTO', type: 'varchar2', nullable: true, length: 1 })
  typeDocumdeliveryO: string | null;

  @Column({ name: 'TIPODOCUMENTOENTREGAFUTURA', type: 'varchar2', nullable: true, length: 1 })
  typeDocumdeliveryOinputEgafutura: string | null;

  @Column({ name: 'TIPOEMPRESA', type: 'varchar2', nullable: true, length: 4 })
  typeEmpresa: string | null;

  @Column({ name: 'TIPOFJ', type: 'varchar2', nullable: true, length: 1 })
  typeFj: string | null;

  @Column({ name: 'TIPOORGAOPUB', type: 'varchar2', nullable: true, length: 2 })
  typeOrgAopub: string | null;

  @Column({ name: 'TIPOSEGURO', type: 'varchar2', nullable: true, length: 1 })
  typeSeguro: string | null;

  @Column({ name: 'TIPOTRATAMENTODESCFIN', type: 'varchar2', nullable: true, length: 2 })
  typeTratamdeliveryOdiscountFin: string | null;

  @Column({ name: 'TIPOULTALTER', type: 'varchar2', nullable: true, length: 1 })
  typeLastAlter: string | null;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', nullable: true, length: 1 })
  typeSalesA: string | null;

  @Column({ name: 'TPCOMUNICADOSERASA', type: 'varchar2', nullable: true, length: 1 })
  typeCommercialunicipalityAdoserasa: string | null;

  @Column({ name: 'TURNOENTREGA', type: 'varchar2', nullable: true, length: 5 })
  turnoinputEga: string | null;

  @Column({ name: 'TV10USACUSTOPRODUTO', type: 'varchar2', nullable: true, length: 1 })
  tv10UsesCostProductUto: string | null;

  @Column({ name: 'TV1OBRIGATORIOTV5', type: 'varchar2', nullable: true, length: 1 })
  tv1MandatoryAtoriotv5: string | null;

  @Column({ name: 'UFRG', type: 'varchar2', nullable: true, length: 2 })
  stateRg: string | null;

  @Column({ name: 'ULTCODPLPAG', type: 'number', nullable: true, precision: 4, scale: 0 })
  lastCodplpayment: number | null;

  @Column({ name: 'USABKCNPJCODCLIPRINC', type: 'varchar2', nullable: true, length: 1 })
  usesBkcnpjCustomerIdPrinc: string | null;

  @Column({ name: 'USACMVDIFERENCIADO', type: 'varchar2', nullable: true, length: 1 })
  usesCmvdiferenciado: string | null;

  @Column({ name: 'USACRECLIFAT', type: 'varchar2', nullable: true, length: 1 })
  usesCreclientInvoice: string | null;

  @Column({ name: 'USACROSS', type: 'varchar2', nullable: true, length: 1 })
  usesCross: string | null;

  @Column({ name: 'USADEBCREDRCA', type: 'varchar2', nullable: true, length: 1 })
  usesDebcreditRepresentative: string | null;

  @Column({ name: 'USADESCFINSEPARADODESCCOM', type: 'varchar2', nullable: true, length: 1 })
  usesDiscountFinseparadodiscountCommercial: string | null;

  @Column({ name: 'USADESCONTOICMS', type: 'varchar2', nullable: true, length: 1 })
  usesDiscountOntoicms: string | null;

  @Column({ name: 'USAIVAFONTEDIFERENCIADO', type: 'varchar2', nullable: true, length: 1 })
  usesIvafontediferenciado: string | null;

  @Column({ name: 'USAREGIMEESPISENREDICMS', type: 'varchar2', nullable: true, length: 1 })
  usesRegistryImeespisEnredicms: string | null;

  @Column({ name: 'USAREGIMEESPISENSTFONTE', type: 'varchar2', nullable: true, length: 1 })
  usesRegistryImeespisEnstFonte: string | null;

  @Column({ name: 'USASEGURO', type: 'varchar2', nullable: true, length: 1 })
  usesSeguro: string | null;

  @Column({ name: 'USATDE', type: 'varchar2', nullable: true, length: 1 })
  usesTde: string | null;

  @Column({ name: 'USAVENDAEXPORTACAO', type: 'varchar2', nullable: true, length: 1 })
  usesSalesAdispatcherOrtacao: string | null;

  @Column({ name: 'USAVLMINVENDABK', type: 'varchar2', nullable: true, length: 1 })
  usesValueMinuteSalesAbk: string | null;

  @Column({ name: 'UTILIZACALCULOSTMT', type: 'varchar2', nullable: true, length: 1 })
  usesCalculatesUlostMt: string | null;

  @Column({ name: 'UTILIZAIESIMPLIFICADA', type: 'varchar2', nullable: true, length: 1 })
  usesStateRegistrationSimportLificada: string | null;

  @Column({ name: 'UTILIZAPEDCLINFE', type: 'varchar2', nullable: true, length: 1 })
  usesPedclientNfe: string | null;

  @Column({ name: 'UTILIZAPLPAGMEDICAMENTO', type: 'varchar2', nullable: true, length: 1 })
  usesPlpaymentAvgIcamdeliveryO: string | null;

  @Column({ name: 'UTILIZAPRAZOMEDIOPLPAG', type: 'varchar2', nullable: true, length: 1 })
  usesTermAvgIoplpayment: string | null;

  @Column({ name: 'UTILIZATXDIFENTREGA', type: 'varchar2', nullable: true, length: 1 })
  usesTxdifinputEga: string | null;

  @Column({ name: 'VALIDAMAXVENDAPF', type: 'varchar2', nullable: true, length: 1 })
  valueIdAmaxSalesApf: string | null;

  @Column({ name: 'VALIDARCAMPANHABRINDE', type: 'varchar2', nullable: true, length: 1 })
  valueIdArepresentativeMpanhabrinde: string | null;

  @Column({ name: 'VALIDARLIMBONIFIC', type: 'varchar2', nullable: true, length: 1 })
  valueIdArlimitBonific: string | null;

  @Column({ name: 'VALIDARMULTIPLOVENDA', type: 'varchar2', nullable: true, length: 1 })
  valueIdArmlastIplosalesA: string | null;

  @Column({ name: 'VALORALUGUEL', type: 'number', nullable: true, precision: 14, scale: 2 })
  valueOraluguel: number | null;

  @Column({ name: 'VALPESOVARMAPAWMS', type: 'char', nullable: true, length: 1 })
  valuePesovarmapawms: string | null;

  @Column({ name: 'VENDALOCESTRANG', type: 'varchar2', nullable: true, length: 1 })
  salesAlocstateRang: string | null;

  @Column({ name: 'VIP', type: 'varchar2', nullable: true, length: 1 })
  vip: string | null;

  @Column({ name: 'VLESTOQUE', type: 'number', nullable: true, precision: 14, scale: 2 })
  valueStock: number | null;

  @Column({ name: 'VLFRETE', type: 'number', nullable: true, precision: 16, scale: 3 })
  valueFretentionE: number | null;

  @Column({ name: 'VLLIMCREDBROKER', type: 'number', nullable: true, precision: 18, scale: 6 })
  valueCreditLimitBrokEr: number | null;

  @Column({ name: 'VLMAXCOBFRETE', type: 'number', nullable: true, precision: 12, scale: 2 })
  valueMaxBillingFretentionE: number | null;

  @Column({ name: 'VLMEDIACOMPRAMESFORNEC', type: 'number', nullable: true, precision: 14, scale: 2 })
  valueAvgayComplementRamonthSupplier: number | null;

  @Column({ name: 'VLMINIMOST', type: 'number', nullable: true, precision: 18, scale: 6 })
  valueMinSt: number | null;

  @Column({ name: 'VLOUTRASRENDAS', type: 'number', nullable: true, precision: 14, scale: 2 })
  valueOutrasraddressAs: number | null;

  @Column({ name: 'VLPOTENCIALLIMCRED', type: 'number', nullable: true, precision: 14, scale: 2 })
  valuePotencialcreditLimit: number | null;

  @Column({ name: 'ZONA', type: 'number', nullable: true, precision: 4, scale: 0 })
  zona: number | null;
}
