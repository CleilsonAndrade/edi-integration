import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDC',
})
export class PcpedcEntity {
  @PrimaryColumn({ name: 'NUMPED', type: 'number', precision: 10, scale: 0 })
  orderId: number;

  @Column({ name: 'ALIQICMSFRETENF', type: 'number', nullable: true })
  aliqicmsfretenf: number;

  @Column({ name: 'AGRUPAMENTO', type: 'varchar2', nullable: true })
  agrupamento: string;

  @Column({ name: 'ALTAPOSMAPASEP', type: 'varchar2', nullable: true })
  altaposmapasep: string;

  @Column({ name: 'AMBIENTENFCE', type: 'varchar2', nullable: true })
  ambientenfce: string;

  @Column({ name: 'ASSINATURA', type: 'varchar2', nullable: true })
  assinatura: string;

  @Column({ name: 'BAIXAESTCLI', type: 'varchar2', nullable: true })
  baixaestcli: string;

  @Column({ name: 'BASEICMSFRETENF', type: 'varchar2', nullable: true })
  baseicmsfretenf: string;

  @Column({ name: 'BLOQCOMERCIAL', type: 'varchar2', nullable: true })
  bloqcomercial: string;

  @Column({ name: 'BLOQFINANCEIRO', type: 'varchar2', nullable: true })
  bloqfinanceiro: string;

  @Column({ name: 'BLOQUEIOEDICAO', type: 'varchar2', nullable: true })
  bloqueioedicao: string;

  @Column({ name: 'BLOQUEIOFATURAMENTO', type: 'varchar2', nullable: true })
  bloqueiofaturamento: string;

  @Column({ name: 'BLOQUEIOSALDOCCDESCFIN', type: 'varchar2', nullable: true })
  bloqueiosaldoccdescfin: string;

  @Column({ name: 'BLOQUEIOSUPPLIER', type: 'varchar2', nullable: true })
  bloqueiosupplier: string;

  @Column({ name: 'BONIFICALTDEBCREDRCA', type: 'varchar2', nullable: true })
  bonificaltdebcredrca: string;

  @Column({ name: 'BRINDE', type: 'varchar2', nullable: true })
  brinde: string;

  @Column({ name: 'BROKER', type: 'varchar2', nullable: true })
  broker: string;

  @Column({ name: 'BROKERALTDEBCREDRCA', type: 'varchar2', nullable: true })
  brokeraltdebcredrca: string;

  @Column({ name: 'C', type: 'number', nullable: true })
  c: number;

  @Column({ name: 'CAMPANHA', type: 'varchar2', nullable: true })
  campanha: string;

  @Column({ name: 'CARTAODOTZ', type: 'varchar2', nullable: true })
  cartaodotz: string;

  @Column({ name: 'CFOPBNFDEGUSTA', type: 'varchar2', nullable: true })
  cfopbnfdegusta: string;

  @Column({ name: 'CGCFRETE', type: 'varchar2', nullable: true })
  cgcfrete: string;

  @Column({ name: 'CHAVENFCE', type: 'varchar2', nullable: true })
  chavenfce: string;

  @Column({ name: 'CHAVENFE', type: 'varchar2', nullable: true })
  chavenfe: string;

  @Column({ name: 'CHAVESAT', type: 'varchar2', nullable: true })
  chavesat: string;

  @Column({ name: 'CNPJINTERMEDIADOR', type: 'varchar2', nullable: true })
  cnpjintermediador: string;

  @Column({ name: 'CODADMCARTAO', type: 'number', nullable: true })
  codadmcartao: number;

  @Column({ name: 'CODATENDIMENTO', type: 'number', nullable: true })
  codatendimento: number;

  @Column({ name: 'CODAUTORIZACAO', type: 'number', nullable: true })
  codautorizacao: number;

  @Column({ name: 'CODAUTORIZACAOTEF', type: 'number', nullable: true })
  codautorizacaotef: number;

  @Column({ name: 'CODAUTORIZACAOTEF1', type: 'number', nullable: true })
  codautorizacaotef1: number;

  @Column({ name: 'CODAUTORIZACAOTEFWEB', type: 'number', nullable: true })
  codautorizacaotefweb: number;

  @Column({ name: 'CODBANCOCM', type: 'number', nullable: true })
  codbancocm: number;

  @Column({ name: 'CODBANDEIRATEF', type: 'number', nullable: true })
  codbandeiratef: number;

  @Column({ name: 'CODBNF', type: 'number', nullable: true })
  codbnf: number;

  @Column({ name: 'CODBREX', type: 'number', nullable: true })
  codbrex: number;

  @Column({ name: 'CODCLI', type: 'number', nullable: true })
  codcli: number;

  @Column({ name: 'CODCLICONSIGNACAO', type: 'number', nullable: true })
  codcliconsignacao: number;

  @Column({ name: 'CODCLINF', type: 'number', nullable: true })
  codclinf: number;

  @Column({ name: 'CODCLIRECEBEDOR', type: 'number', nullable: true })
  codclirecebedor: number;

  @Column({ name: 'CODCLITV8', type: 'number', nullable: true })
  codclitv8: number;

  @Column({ name: 'CODCOB', type: 'number', nullable: true })
  codcob: number;

  @Column({ name: 'CODCONDICAOVENDA', type: 'number', nullable: true })
  codcondicaovenda: number;

  @Column({ name: 'CODCONTATO', type: 'number', nullable: true })
  codcontato: number;

  @Column({ name: 'CODCONTRATO', type: 'number', nullable: true })
  codcontrato: number;

  @Column({ name: 'CODDISP', type: 'number', nullable: true })
  coddisp: number;

  @Column({ name: 'CODDISTRIB', type: 'number', nullable: true })
  coddistrib: number;

  @Column({ name: 'CODEDITAL', type: 'number', nullable: true })
  codedital: number;

  @Column({ name: 'CODEMITENTE', type: 'number', nullable: true })
  codemitente: number;

  @Column({ name: 'CODENDENT', type: 'number', nullable: true })
  codendent: number;

  @Column({ name: 'CODENDENTCLI', type: 'number', nullable: true })
  codendentcli: number;

  @Column({ name: 'CODEPTO', type: 'number', nullable: true })
  codepto: number;

  @Column({ name: 'CODESTABELECIMENTO', type: 'number', nullable: true })
  codestabelecimento: number;

  @Column({ name: 'CODFILIAL', type: 'number', nullable: true })
  codfilial: number;

  @Column({ name: 'CODFILIALNF', type: 'number', nullable: true })
  codfilialnf: number;

  @Column({ name: 'CODFORNECBONIFIC', type: 'number', nullable: true })
  codfornecbonific: number;

  @Column({ name: 'CODFORNECFRETE', type: 'number', nullable: true })
  codfornecfrete: number;

  @Column({ name: 'CODFORNECREDESPACHO', type: 'number', nullable: true })
  codfornecredespacho: number;

  @Column({ name: 'CODFORNECVDIRETO', type: 'number', nullable: true })
  codfornecvdireto: number;

  @Column({ name: 'CODFRETE', type: 'number', nullable: true })
  codfrete: number;

  @Column({ name: 'CODFUNCCALCFRETE', type: 'number', nullable: true })
  codfunccalcfrete: number;

  @Column({ name: 'CODFUNCCANCEL', type: 'number', nullable: true })
  codfunccancel: number;

  @Column({ name: 'CODFUNCCONF', type: 'number', nullable: true })
  codfuncconf: number;

  @Column({ name: 'CODFUNCCONFGARANTIA', type: 'number', nullable: true })
  codfuncconfgarantia: number;

  @Column({ name: 'CODFUNCCX', type: 'number', nullable: true })
  codfunccx: number;

  @Column({ name: 'CODFUNCEMBALADOR', type: 'number', nullable: true })
  codfuncembalador: number;

  @Column({ name: 'CODFUNCEMISSAOMAPA', type: 'number', nullable: true })
  codfuncemissaomapa: number;

  @Column({ name: 'CODFUNCEXPARQOL', type: 'number', nullable: true })
  codfuncexparqol: number;

  @Column({ name: 'CODFUNCEXPINTWMS', type: 'number', nullable: true })
  codfuncexpintwms: number;

  @Column({ name: 'CODFUNCIMPINTWMS', type: 'number', nullable: true })
  codfuncimpintwms: number;

  @Column({ name: 'CODFUNCLIBDESC', type: 'number', nullable: true })
  codfunclibdesc: number;

  @Column({ name: 'CODFUNCLIBERA', type: 'number', nullable: true })
  codfunclibera: number;

  @Column({ name: 'CODFUNCLIBERA2', type: 'number', nullable: true })
  codfunclibera2: number;

  @Column({ name: 'CODFUNCLIBERADTENTREGA', type: 'number', nullable: true })
  codfuncliberadtentrega: number;

  @Column({ name: 'CODFUNCLIBEROURET', type: 'number', nullable: true })
  codfuncliberouret: number;

  @Column({ name: 'CODFUNCPROTOCOLO', type: 'number', nullable: true })
  codfuncprotocolo: number;

  @Column({ name: 'CODFUNCSEP', type: 'number', nullable: true })
  codfuncsep: number;

  @Column({ name: 'CODGERENTE', type: 'number', nullable: true })
  codgerente: number;

  @Column({ name: 'CODIGORASTREIOFRETEVENDA', type: 'number', nullable: true })
  codigorastreiofretevenda: number;

  @Column({ name: 'CODIGOSAZONALIDADE', type: 'number', nullable: true })
  codigosazonalidade: number;

  @Column({ name: 'CODMOEDAESTRANGEIRA', type: 'number', nullable: true })
  codmoedaestrangeira: number;

  @Column({ name: 'CODMOEDAESTRANGEIRAORIGINAL', type: 'number', nullable: true })
  codmoedaestrangeiraoriginal: number;

  @Column({ name: 'CODMOTBLOQUEIO', type: 'number', nullable: true })
  codmotbloqueio: number;

  @Column({ name: 'CODMOTCANCEL', type: 'number', nullable: true })
  codmotcancel: number;

  @Column({ name: 'CODMOTIVO', type: 'number', nullable: true })
  codmotivo: number;

  @Column({ name: 'CODMOTIVO2', type: 'number', nullable: true })
  codmotivo2: number;

  @Column({ name: 'CODMOTORISTA', type: 'number', nullable: true })
  codmotorista: number;

  @Column({ name: 'CODPLPAG', type: 'number', nullable: true })
  codplpag: number;

  @Column({ name: 'CODPLPAGANT', type: 'number', nullable: true })
  codplpagant: number;

  @Column({ name: 'CODPLPAGETICO', type: 'number', nullable: true })
  codplpagetico: number;

  @Column({ name: 'CODPLPAGGENERICO', type: 'number', nullable: true })
  codplpaggenerico: number;

  @Column({ name: 'CODPOSTAGEM', type: 'number', nullable: true })
  codpostagem: number;

  @Column({ name: 'CODPRACA', type: 'number', nullable: true })
  codpraca: number;

  @Column({ name: 'CODPRACADESTINO', type: 'number', nullable: true })
  codpracadestino: number;

  @Column({ name: 'CODPROFISSIONAL', type: 'number', nullable: true })
  codprofissional: number;

  @Column({ name: 'CODPROMOCAOMED', type: 'number', nullable: true })
  codpromocaomed: number;

  @Column({ name: 'CODRETORNOSAT', type: 'number', nullable: true })
  codretornosat: number;

  @Column({ name: 'CODSEFAZSAT', type: 'number', nullable: true })
  codsefazsat: number;

  @Column({ name: 'CODSTATUSSAT', type: 'number', nullable: true })
  codstatussat: number;

  @Column({ name: 'CODSUPERVISOR', type: 'number', nullable: true })
  codsupervisor: number;

  @Column({ name: 'CODSUPERVISOR2', type: 'number', nullable: true })
  codsupervisor2: number;

  @Column({ name: 'CODSUPERVISOR3', type: 'number', nullable: true })
  codsupervisor3: number;

  @Column({ name: 'CODTRANSP', type: 'number', nullable: true })
  codtransp: number;

  @Column({ name: 'CODUNIDADEEXECUTORA', type: 'number', nullable: true })
  codunidadeexecutora: number;

  @Column({ name: 'CODUSUR', type: 'number', nullable: true })
  codusur: number;

  @Column({ name: 'CODUSUR2', type: 'number', nullable: true })
  codusur2: number;

  @Column({ name: 'CODUSUR3', type: 'number', nullable: true })
  codusur3: number;

  @Column({ name: 'CODUSUR4', type: 'number', nullable: true })
  codusur4: number;

  @Column({ name: 'CODVEICULO', type: 'number', nullable: true })
  codveiculo: number;

  @Column({ name: 'CODVISITA', type: 'number', nullable: true })
  codvisita: number;

  @Column({ name: 'COLETAFRETE', type: 'varchar2', nullable: true })
  coletafrete: string;

  @Column({ name: 'COLUNAFRETE', type: 'varchar2', nullable: true })
  colunafrete: string;

  @Column({ name: 'CONCILIAIMPORTACAO', type: 'varchar2', nullable: true })
  conciliaimportacao: string;

  @Column({ name: 'CONDFINANC', type: 'varchar2', nullable: true })
  condfinanc: string;

  @Column({ name: 'CONDVENDA', type: 'varchar2', nullable: true })
  condvenda: string;

  @Column({ name: 'CONFERINDOPEDIDO', type: 'varchar2', nullable: true })
  conferindopedido: string;

  @Column({ name: 'CONSUMIUNUMNFE', type: 'varchar2', nullable: true })
  consumiunumnfe: string;

  @Column({ name: 'CONTAORDEM', type: 'varchar2', nullable: true })
  contaordem: string;

  @Column({ name: 'CONTINGENCIATV14', type: 'varchar2', nullable: true })
  contingenciatv14: string;

  @Column({ name: 'COPIAIDENTICAPEDDUP', type: 'varchar2', nullable: true })
  copiaidenticapeddup: string;

  @Column({ name: 'CRMALTDEBCREDRCA', type: 'varchar2', nullable: true })
  crmaltdebcredrca: string;

  @Column({ name: 'CUSTOBONIFICACAO', type: 'varchar2', nullable: true })
  custobonificacao: string;

  @Column({ name: 'CUSTOENTREGA', type: 'varchar2', nullable: true })
  custoentrega: string;

  @Column({ name: 'DATA', type: 'date', nullable: true })
  data: Date;

  @Column({ name: 'DATAEFETIVAENTREGACIASHOP', type: 'date', nullable: true })
  dataefetivaentregaciashop: Date;

  @Column({ name: 'DATAEMPENHO', type: 'date', nullable: true })
  dataempenho: Date;

  @Column({ name: 'DATAEXPARQOL', type: 'date', nullable: true })
  dataexparqol: Date;

  @Column({ name: 'DATAEXPEDICAO', type: 'date', nullable: true })
  dataexpedicao: Date;

  @Column({ name: 'DATAHORAEMISSAOSAT', type: 'date', nullable: true })
  datahoraemissaosat: Date;

  @Column({ name: 'DATAHORAPROCESSAMENTO', type: 'date', nullable: true })
  datahoraprocessamento: Date;

  @Column({ name: 'DATALIBEROURET', type: 'date', nullable: true })
  dataliberouret: Date;

  @Column({ name: 'DATAPEDCLI', type: 'date', nullable: true })
  datapedcli: Date;

  @Column({ name: 'DATAPROTOCOLO', type: 'date', nullable: true })
  dataprotocolo: Date;

  @Column({ name: 'DATARETORNO', type: 'date', nullable: true })
  dataretorno: Date;

  @Column({ name: 'DATASAIDA', type: 'date', nullable: true })
  datasaida: Date;

  @Column({ name: 'DATAULTIMASITUACAOCFAT', type: 'date', nullable: true })
  dataultimasituacaocfat: Date;

  @Column({ name: 'DERRUBADACARGA', type: 'varchar2', nullable: true })
  derrubadacarga: string;

  @Column({ name: 'DESCINTERMEDIADOR', type: 'varchar2', nullable: true })
  descintermediador: string;

  @Column({ name: 'DESFEZKITCANC', type: 'varchar2', nullable: true })
  desfezkitcanc: string;

  @Column({ name: 'DESTACARICMSDEVSIMBOLICA', type: 'varchar2', nullable: true })
  destacaricmsdevsimbolica: string;

  @Column({ name: 'DEVSIMBOLICA', type: 'varchar2', nullable: true })
  devsimbolica: string;

  @Column({ name: 'DOCEMISSAO', type: 'varchar2', nullable: true })
  docemissao: string;

  @Column({ name: 'DTABERTURAPEDPALM', type: 'date', nullable: true })
  dtaberturapedpalm: Date;

  @Column({ name: 'DTAGENDAENTREGA', type: 'date', nullable: true })
  dtagendaentrega: Date;

  @Column({ name: 'DTAHORAENTRADACONTIGENCIA', type: 'date', nullable: true })
  dtahoraentradacontigencia: Date;

  @Column({ name: 'DTCALCFRETE', type: 'date', nullable: true })
  dtcalcfrete: Date;

  @Column({ name: 'DTCANCEL', type: 'date', nullable: true })
  dtcancel: Date;

  @Column({ name: 'DTCHEGADACLIENTE', type: 'date', nullable: true })
  dtchegadacliente: Date;

  @Column({ name: 'DTCONFGARANTIA', type: 'date', nullable: true })
  dtconfgarantia: Date;

  @Column({ name: 'DTEMISSAOMAPA', type: 'date', nullable: true })
  dtemissaomapa: Date;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true })
  dtentrega: Date;

  @Column({ name: 'DTEXPORTACAO', type: 'date', nullable: true })
  dtexportacao: Date;

  @Column({ name: 'DTEXPORTACAOSERVINT', type: 'date', nullable: true })
  dtexportacaoservint: Date;

  @Column({ name: 'DTEXPORTACAOWMS', type: 'date', nullable: true })
  dtexportacaowms: Date;

  @Column({ name: 'DTEXPORTADO', type: 'date', nullable: true })
  dtexportado: Date;

  @Column({ name: 'DTFAT', type: 'date', nullable: true })
  dtfat: Date;

  @Column({ name: 'DTFECHAMENTOPEDPALM', type: 'date', nullable: true })
  dtfechamentopedpalm: Date;

  @Column({ name: 'DTFIMDIGITACAOPEDIDO', type: 'date', nullable: true })
  dtfimdigitacaopedido: Date;

  @Column({ name: 'DTFINALCHECKOUT', type: 'date', nullable: true })
  dtfinalcheckout: Date;

  @Column({ name: 'DTFINALPEND', type: 'date', nullable: true })
  dtfinalpend: Date;

  @Column({ name: 'DTFINALSEP', type: 'date', nullable: true })
  dtfinalsep: Date;

  @Column({ name: 'DTIMPORTACAO', type: 'date', nullable: true })
  dtimportacao: Date;

  @Column({ name: 'DTIMPORTACAOSERVPRINC', type: 'date', nullable: true })
  dtimportacaoservprinc: Date;

  @Column({ name: 'DTIMPORTACAOWMS', type: 'date', nullable: true })
  dtimportacaowms: Date;

  @Column({ name: 'DTIMPORTADO', type: 'date', nullable: true })
  dtimportado: Date;

  @Column({ name: 'DTINICIALCHECKOUT', type: 'date', nullable: true })
  dtinicialcheckout: Date;

  @Column({ name: 'DTINICIALPEND', type: 'date', nullable: true })
  dtinicialpend: Date;

  @Column({ name: 'DTINICIALSEP', type: 'date', nullable: true })
  dtinicialsep: Date;

  @Column({ name: 'DTINICIODIGITACAOPEDIDO', type: 'date', nullable: true })
  dtiniciodigitacaopedido: Date;

  @Column({ name: 'DTINITRANSACAODIG', type: 'date', nullable: true })
  dtinitransacaodig: Date;

  @Column({ name: 'DTITERACAOTRANSACAODIG', type: 'date', nullable: true })
  dtiteracaotransacaodig: Date;

  @Column({ name: 'DTLIBERA', type: 'date', nullable: true })
  dtlibera: Date;

  @Column({ name: 'DTLIBERA2', type: 'date', nullable: true })
  dtlibera2: Date;

  @Column({ name: 'DTLIMITEFAT', type: 'date', nullable: true })
  dtlimitefat: Date;

  @Column({ name: 'DTMOVIMENTOCX', type: 'date', nullable: true })
  dtmovimentocx: Date;

  @Column({ name: 'DTMXSALTER', type: 'date', nullable: true })
  dtmxsalter: Date;

  @Column({ name: 'DTNFTRANSF', type: 'date', nullable: true })
  dtnftransf: Date;

  @Column({ name: 'DTNSU', type: 'date', nullable: true })
  dtnsu: Date;

  @Column({ name: 'DTVALIDADE', type: 'date', nullable: true })
  dtvalidade: Date;

  @Column({ name: 'DTVENC1', type: 'date', nullable: true })
  dtvenc1: Date;

  @Column({ name: 'DTVENC2', type: 'date', nullable: true })
  dtvenc2: Date;

  @Column({ name: 'DTVENC3', type: 'date', nullable: true })
  dtvenc3: Date;

  @Column({ name: 'DTWMS', type: 'date', nullable: true })
  dtwms: Date;

  @Column({ name: 'EANCOBRANCA', type: 'varchar2', nullable: true })
  eancobranca: string;

  @Column({ name: 'EANCOBRANCAFATURA', type: 'varchar2', nullable: true })
  eancobrancafatura: string;

  @Column({ name: 'EANCOMPRADOR', type: 'varchar2', nullable: true })
  eancomprador: string;

  @Column({ name: 'EANENTREGA', type: 'varchar2', nullable: true })
  eanentrega: string;

  @Column({ name: 'EANLOCALENTREGA', type: 'varchar2', nullable: true })
  eanlocalentrega: string;

  @Column({ name: 'EMITIRCUPOMFISCAL', type: 'varchar2', nullable: true })
  emitircupomfiscal: string;

  @Column({ name: 'ENVIADOCOMPRA', type: 'varchar2', nullable: true })
  enviadocompra: string;

  @Column({ name: 'ENVIADOVENDA', type: 'varchar2', nullable: true })
  enviadovenda: string;

  @Column({ name: 'ESC_IDCOTACAOFRETE', type: 'varchar2', nullable: true })
  escIdcotacaofrete: string;

  @Column({ name: 'ESPECIEMANIF', type: 'varchar2', nullable: true })
  especiemanif: string;

  @Column({ name: 'ESPECIEVOLUME', type: 'varchar2', nullable: true })
  especievolume: string;

  @Column({ name: 'EXPORTACRM', type: 'varchar2', nullable: true })
  exportacrm: string;

  @Column({ name: 'EXPORTADO', type: 'varchar2', nullable: true })
  exportado: string;

  @Column({ name: 'EXPORTADOSERVINT', type: 'varchar2', nullable: true })
  exportadoservint: string;

  @Column({ name: 'FORNECENTREGA', type: 'varchar2', nullable: true })
  fornecentrega: string;

  @Column({ name: 'FRETEDESPACHO', type: 'varchar2', nullable: true })
  fretedespacho: string;

  @Column({ name: 'FRETEREDESPACHO', type: 'varchar2', nullable: true })
  freteredespacho: string;

  @Column({ name: 'GERACP', type: 'varchar2', nullable: true })
  geracp: string;

  @Column({ name: 'GERANDOWMS', type: 'varchar2', nullable: true })
  gerandowms: string;

  @Column({ name: 'GERARCONTROLEDEENTREGA', type: 'varchar2', nullable: true })
  gerarcontroledeentrega: string;

  @Column({ name: 'GERARDADOSNFPAULISTA', type: 'varchar2', nullable: true })
  gerardadosnfpaulista: string;

  @Column({ name: 'HORA', type: 'number', nullable: true })
  hora: number;

  @Column({ name: 'HORAEMISSAO', type: 'number', nullable: true })
  horaemissao: number;

  @Column({ name: 'HORAEMISSAOMAPA', type: 'number', nullable: true })
  horaemissaomapa: number;

  @Column({ name: 'HORAFAT', type: 'number', nullable: true })
  horafat: number;

  @Column({ name: 'HORAFINALSEP', type: 'number', nullable: true })
  horafinalsep: number;

  @Column({ name: 'HORAINICIALSEP', type: 'number', nullable: true })
  horainicialsep: number;

  @Column({ name: 'HORALIBERA', type: 'number', nullable: true })
  horalibera: number;

  @Column({ name: 'HORAPROTOCOLO', type: 'number', nullable: true })
  horaprotocolo: number;

  @Column({ name: 'IDAGRUPAMENTO', type: 'varchar2', nullable: true })
  idagrupamento: string;

  @Column({ name: 'IDPARCEIRO', type: 'varchar2', nullable: true })
  idparceiro: string;

  @Column({ name: 'IDREMESSAWEB', type: 'varchar2', nullable: true })
  idremessaweb: string;

  @Column({ name: 'IDTIPOPRESENCA', type: 'varchar2', nullable: true })
  idtipopresenca: string;

  @Column({ name: 'IEFRETE', type: 'varchar2', nullable: true })
  iefrete: string;

  @Column({ name: 'IMPORTACUPOM', type: 'varchar2', nullable: true })
  importacupom: string;

  @Column({ name: 'IMPORTADO', type: 'varchar2', nullable: true })
  importado: string;

  @Column({ name: 'IMPORTADOSERVPRINC', type: 'varchar2', nullable: true })
  importadoservprinc: string;

  @Column({ name: 'INDICADORACRESCIMO', type: 'varchar2', nullable: true })
  indicadoracrescimo: string;

  @Column({ name: 'INDICADORDESCONTO', type: 'varchar2', nullable: true })
  indicadordesconto: string;

  @Column({ name: 'INTEGRADORA', type: 'varchar2', nullable: true })
  integradora: string;

  @Column({ name: 'JSONTPD_PAGAMENTO', type: 'varchar2', nullable: true })
  jsontpdPagamento: string;

  @Column({ name: 'JUSTIFICATIVACONTIGENCIA', type: 'varchar2', nullable: true })
  justificativacontigencia: string;

  @Column({ name: 'LATITUDE', type: 'varchar2', nullable: true })
  latitude: string;

  @Column({ name: 'LIBERA_RETAGUARDA', type: 'varchar2', nullable: true })
  liberaRetaguarda: string;

  @Column({ name: 'LOCALDESEMBARACO', type: 'varchar2', nullable: true })
  localdesembaraco: string;

  @Column({ name: 'LOCALIZACAOPEDIDO', type: 'varchar2', nullable: true })
  localizacaopedido: string;

  @Column({ name: 'LOG', type: 'varchar2', nullable: true })
  log: string;

  @Column({ name: 'LOG1', type: 'varchar2', nullable: true })
  log1: string;

  @Column({ name: 'LOG2', type: 'varchar2', nullable: true })
  log2: string;

  @Column({ name: 'LOG3', type: 'varchar2', nullable: true })
  log3: string;

  @Column({ name: 'LOG4', type: 'varchar2', nullable: true })
  log4: string;

  @Column({ name: 'LONGITUDE', type: 'varchar2', nullable: true })
  longitude: string;

  @Column({ name: 'MARCAVOLUME', type: 'varchar2', nullable: true })
  marcavolume: string;

  @Column({ name: 'MATERIALDECONSTRUCAO', type: 'varchar2', nullable: true })
  materialdeconstrucao: string;

  @Column({ name: 'MELDATAEMISSAOPED', type: 'date', nullable: true })
  meldataemissaoped: Date;

  @Column({ name: 'MENSAGEM', type: 'varchar2', nullable: true })
  mensagem: string;

  @Column({ name: 'MINUTO', type: 'number', nullable: true })
  minuto: number;

  @Column({ name: 'MINUTOEMISSAOMAPA', type: 'number', nullable: true })
  minutoemissaomapa: number;

  @Column({ name: 'MINUTOFAT', type: 'number', nullable: true })
  minutofat: number;

  @Column({ name: 'MINUTOFINALSEP', type: 'number', nullable: true })
  minutofinalsep: number;

  @Column({ name: 'MINUTOINICIALSEP', type: 'number', nullable: true })
  minutoinicialsep: number;

  @Column({ name: 'MINUTOLIBERA', type: 'number', nullable: true })
  minutolibera: number;

  @Column({ name: 'MINUTOPROTOCOLO', type: 'number', nullable: true })
  minutoprotocolo: number;

  @Column({ name: 'MONTANDO', type: 'varchar2', nullable: true })
  montando: string;

  @Column({ name: 'MOTIVOPOSICAO', type: 'varchar2', nullable: true })
  motivoposicao: string;

  @Column({ name: 'MOTORISTAVEICULO', type: 'varchar2', nullable: true })
  motoristaveiculo: string;

  @Column({ name: 'MULTIPLICADORDUPLIC', type: 'varchar2', nullable: true })
  multiplicadorduplic: string;

  @Column({ name: 'NEGOCIADO', type: 'varchar2', nullable: true })
  negociado: string;

  @Column({ name: 'NOMEARQUIVOFV', type: 'varchar2', nullable: true })
  nomearquivofv: string;

  @Column({ name: 'NSU', type: 'varchar2', nullable: true })
  nsu: string;

  @Column({ name: 'NSUSOCIOTORCEDOR', type: 'varchar2', nullable: true })
  nsusociotorcedor: string;

  @Column({ name: 'NSUTEF', type: 'varchar2', nullable: true })
  nsutef: string;

  @Column({ name: 'NUMCAIXA', type: 'number', nullable: true })
  numcaixa: number;

  @Column({ name: 'NUMCAIXAFISCAL', type: 'number', nullable: true })
  numcaixafiscal: number;

  @Column({ name: 'NUMCAR', type: 'number', nullable: true })
  numcar: number;

  @Column({ name: 'NUMCARANTERIOR', type: 'number', nullable: true })
  numcaranterior: number;

  @Column({ name: 'NUMCARAUX', type: 'number', nullable: true })
  numcaraux: number;

  @Column({ name: 'NUMCARFAB', type: 'number', nullable: true })
  numcarfab: number;

  @Column({ name: 'NUMCARMANIF', type: 'number', nullable: true })
  numcarmanif: number;

  @Column({ name: 'NUMCCF', type: 'number', nullable: true })
  numccf: number;

  @Column({ name: 'NUMCHAVEEXP', type: 'number', nullable: true })
  numchaveexp: number;

  @Column({ name: 'NUMCIRURGIA', type: 'number', nullable: true })
  numcirurgia: number;

  @Column({ name: 'NUMCOLETA', type: 'number', nullable: true })
  numcoleta: number;

  @Column({ name: 'NUMCONTRATOCORREIO', type: 'number', nullable: true })
  numcontratocorreio: number;

  @Column({ name: 'NUMCUPOM', type: 'number', nullable: true })
  numcupom: number;

  @Column({ name: 'NUMDRAWBACK', type: 'number', nullable: true })
  numdrawback: number;

  @Column({ name: 'NUMECF', type: 'number', nullable: true })
  numecf: number;

  @Column({ name: 'NUMEMPENHO', type: 'number', nullable: true })
  numempenho: number;

  @Column({ name: 'NUMFECHAMENTOMOVCX', type: 'number', nullable: true })
  numfechamentomovcx: number;

  @Column({ name: 'NUMFICHA', type: 'number', nullable: true })
  numficha: number;

  @Column({ name: 'NUMFONTERECURSO', type: 'number', nullable: true })
  numfonterecurso: number;

  @Column({ name: 'NUMFORMULARIO', type: 'number', nullable: true })
  numformulario: number;

  @Column({ name: 'NUMITENS', type: 'number', nullable: true })
  numitens: number;

  @Column({ name: 'NUMLISTA', type: 'number', nullable: true })
  numlista: number;

  @Column({ name: 'NUMLOTEINTWMS', type: 'number', nullable: true })
  numloteintwms: number;

  @Column({ name: 'NUMNFTRANSF', type: 'number', nullable: true })
  numnftransf: number;

  @Column({ name: 'NUMNOTA', type: 'number', nullable: true })
  numnota: number;

  @Column({ name: 'NUMNOTACONSIG', type: 'number', nullable: true })
  numnotaconsig: number;

  @Column({ name: 'NUMNOTAMANIF', type: 'number', nullable: true })
  numnotamanif: number;

  @Column({ name: 'NUMNOTATRANSFDEP', type: 'number', nullable: true })
  numnotatransfdep: number;

  @Column({ name: 'NUMORCA', type: 'number', nullable: true })
  numorca: number;

  @Column({ name: 'NUMORCAFILIAL', type: 'number', nullable: true })
  numorcafilial: number;

  @Column({ name: 'NUMORCAPRINC', type: 'number', nullable: true })
  numorcaprinc: number;

  @Column({ name: 'NUMORDEMCARGA', type: 'number', nullable: true })
  numordemcarga: number;

  @Column({ name: 'NUMOS', type: 'number', nullable: true })
  numos: number;

  @Column({ name: 'NUMPEDAGRUPADO', type: 'number', nullable: true })
  numpedagrupado: number;

  @Column({ name: 'NUMPEDBNF', type: 'number', nullable: true })
  numpedbnf: number;

  @Column({ name: 'NUMPEDBNFTV14', type: 'number', nullable: true })
  numpedbnftv14: number;

  @Column({ name: 'NUMPEDCLI', type: 'number', nullable: true })
  numpedcli: number;

  @Column({ name: 'NUMPEDECF', type: 'number', nullable: true })
  numpedecf: number;

  @Column({ name: 'NUMPEDENTFUT', type: 'number', nullable: true })
  numpedentfut: number;

  @Column({ name: 'NUMPEDHUBE', type: 'number', nullable: true })
  numpedhube: number;

  @Column({ name: 'NUMPEDMKTPLACE', type: 'number', nullable: true })
  numpedmktplace: number;

  @Column({ name: 'NUMPEDORIGEM', type: 'number', nullable: true })
  numpedorigem: number;

  @Column({ name: 'NUMPEDORIGEMFRETE', type: 'number', nullable: true })
  numpedorigemfrete: number;

  @Column({ name: 'NUMPEDRCA', type: 'number', nullable: true })
  numpedrca: number;

  @Column({ name: 'NUMPEDTV1', type: 'number', nullable: true })
  numpedtv1: number;

  @Column({ name: 'NUMPEDTV14', type: 'number', nullable: true })
  numpedtv14: number;

  @Column({ name: 'NUMPEDTV3', type: 'number', nullable: true })
  numpedtv3: number;

  @Column({ name: 'NUMPEDVALE', type: 'number', nullable: true })
  numpedvale: number;

  @Column({ name: 'NUMPEDVANXML', type: 'number', nullable: true })
  numpedvanxml: number;

  @Column({ name: 'NUMPEDWEB', type: 'number', nullable: true })
  numpedweb: number;

  @Column({ name: 'NUMPESO', type: 'number', nullable: true })
  numpeso: number;

  @Column({ name: 'NUMPRECAR', type: 'number', nullable: true })
  numprecar: number;

  @Column({ name: 'NUMPREVENDA', type: 'number', nullable: true })
  numprevenda: number;

  @Column({ name: 'NUMPROCESSO', type: 'number', nullable: true })
  numprocesso: number;

  @Column({ name: 'NUMREGEXP', type: 'number', nullable: true })
  numregexp: number;

  @Column({ name: 'NUMREGIAO', type: 'number', nullable: true })
  numregiao: number;

  @Column({ name: 'NUMSELO', type: 'number', nullable: true })
  numselo: number;

  @Column({ name: 'NUMSEQCORREIO', type: 'number', nullable: true })
  numseqcorreio: number;

  @Column({ name: 'NUMSEQENTR', type: 'number', nullable: true })
  numseqentr: number;

  @Column({ name: 'NUMSEQENTREGA', type: 'number', nullable: true })
  numseqentrega: number;

  @Column({ name: 'NUMSEQENVIO', type: 'number', nullable: true })
  numseqenvio: number;

  @Column({ name: 'NUMSEQMONTAGEM', type: 'number', nullable: true })
  numseqmontagem: number;

  @Column({ name: 'NUMSEQRETORNO1', type: 'number', nullable: true })
  numseqretorno1: number;

  @Column({ name: 'NUMSEQRETORNO2', type: 'number', nullable: true })
  numseqretorno2: number;

  @Column({ name: 'NUMSEQROTA', type: 'number', nullable: true })
  numseqrota: number;

  @Column({ name: 'NUMSERIEEQUIP', type: 'number', nullable: true })
  numserieequip: number;

  @Column({ name: 'NUMSERIESAT', type: 'number', nullable: true })
  numseriesat: number;

  @Column({ name: 'NUMSESSAOSAT', type: 'number', nullable: true })
  numsessaosat: number;

  @Column({ name: 'NUMTABELA', type: 'number', nullable: true })
  numtabela: number;

  @Column({ name: 'NUMTRANSACAOTRANSF', type: 'number', nullable: true })
  numtransacaotransf: number;

  @Column({ name: 'NUMTRANSENTCROSSDOCK', type: 'number', nullable: true })
  numtransentcrossdock: number;

  @Column({ name: 'NUMTRANSENTORIGCONSIG', type: 'number', nullable: true })
  numtransentorigconsig: number;

  @Column({ name: 'NUMTRANSENTORIGTV10', type: 'number', nullable: true })
  numtransentorigtv10: number;

  @Column({ name: 'NUMTRANSVENDA', type: 'number', nullable: true })
  numtransvenda: number;

  @Column({ name: 'NUMTRANSVENDATV13', type: 'number', nullable: true })
  numtransvendatv13: number;

  @Column({ name: 'NUMTRANSWMS', type: 'number', nullable: true })
  numtranswms: number;

  @Column({ name: 'NUMVIASETIQUETA', type: 'number', nullable: true })
  numviasetiqueta: number;

  @Column({ name: 'NUMVIASMAPASEP', type: 'number', nullable: true })
  numviasmapasep: number;

  @Column({ name: 'NUMVIASMAPASEPRI', type: 'number', nullable: true })
  numviasmapasepri: number;

  @Column({ name: 'NUMVIASPEDAGRUPADO', type: 'number', nullable: true })
  numviaspedagrupado: number;

  @Column({ name: 'NUMVIASPEDIDO', type: 'number', nullable: true })
  numviaspedido: number;

  @Column({ name: 'NUMVOLUME', type: 'number', nullable: true })
  numvolume: number;

  @Column({ name: 'NUMVOLUMEAGRUPADO', type: 'number', nullable: true })
  numvolumeagrupado: number;

  @Column({ name: 'OBS', type: 'varchar2', nullable: true })
  obs: string;

  @Column({ name: 'OBS1', type: 'varchar2', nullable: true })
  obs1: string;

  @Column({ name: 'OBS2', type: 'varchar2', nullable: true })
  obs2: string;

  @Column({ name: 'OBSENTREGA1', type: 'varchar2', nullable: true })
  obsentrega1: string;

  @Column({ name: 'OBSENTREGA2', type: 'varchar2', nullable: true })
  obsentrega2: string;

  @Column({ name: 'OBSENTREGA3', type: 'varchar2', nullable: true })
  obsentrega3: string;

  @Column({ name: 'OBSENTREGA4', type: 'varchar2', nullable: true })
  obsentrega4: string;

  @Column({ name: 'OBSFRETENF1', type: 'varchar2', nullable: true })
  obsfretenf1: string;

  @Column({ name: 'OBSFRETENF2', type: 'varchar2', nullable: true })
  obsfretenf2: string;

  @Column({ name: 'OBSFRETENF3', type: 'varchar2', nullable: true })
  obsfretenf3: string;

  @Column({ name: 'OBSNFCE', type: 'varchar2', nullable: true })
  obsnfce: string;

  @Column({ name: 'OPERACAO', type: 'varchar2', nullable: true })
  operacao: string;

  @Column({ name: 'OPERVENDAEXPINDIRETA', type: 'varchar2', nullable: true })
  opervendaexpindireta: string;

  @Column({ name: 'ORDEMCONF', type: 'varchar2', nullable: true })
  ordemconf: string;

  @Column({ name: 'ORDEMSEP', type: 'varchar2', nullable: true })
  ordemsep: string;

  @Column({ name: 'ORIGEMINTEGRACAO', type: 'varchar2', nullable: true })
  origemintegracao: string;

  @Column({ name: 'ORIGEMPED', type: 'varchar2', nullable: true })
  origemped: string;

  @Column({ name: 'PAGAMENTOAPROVADOCIASHOP', type: 'varchar2', nullable: true })
  pagamentoaprovadociashop: string;

  @Column({ name: 'PAGCHEQUEMORADIA', type: 'varchar2', nullable: true })
  pagchequemoradia: string;

  @Column({ name: 'PAGTOANTECIPADO', type: 'varchar2', nullable: true })
  pagtoantecipado: string;

  @Column({ name: 'PEDDUPLICADO', type: 'varchar2', nullable: true })
  pedduplicado: string;

  @Column({ name: 'PEDIDOAVARIA', type: 'varchar2', nullable: true })
  pedidoavaria: string;

  @Column({ name: 'PEDIDOEMBALADO', type: 'varchar2', nullable: true })
  pedidoembalado: string;

  @Column({ name: 'PEDIDOPAGOECOMMERCE', type: 'varchar2', nullable: true })
  pedidopagoecommerce: string;

  @Column({ name: 'PERCCOMPROFISSIONAL', type: 'number', nullable: true })
  perccomprofissional: number;

  @Column({ name: 'PERCDESCABC', type: 'number', nullable: true })
  percdescabc: number;

  @Column({ name: 'PERCDESCCANAL', type: 'number', nullable: true })
  percdesccanal: number;

  @Column({ name: 'PERCDESCCLI', type: 'number', nullable: true })
  percdesccli: number;

  @Column({ name: 'PERCDESCNEG', type: 'number', nullable: true })
  percdescneg: number;

  @Column({ name: 'PERCENTUALSTFRETE', type: 'number', nullable: true })
  percentualstfrete: number;

  @Column({ name: 'PERCFRETE', type: 'number', nullable: true })
  percfrete: number;

  @Column({ name: 'PERCFRETERETIDO', type: 'number', nullable: true })
  percfreteretido: number;

  @Column({ name: 'PERCSALDORESERVARCA', type: 'number', nullable: true })
  percsaldoreservarca: number;

  @Column({ name: 'PERCSTFRETERETIDO', type: 'number', nullable: true })
  percstfreteretido: number;

  @Column({ name: 'PERCVENDA', type: 'number', nullable: true })
  percvenda: number;

  @Column({ name: 'PERDESC', type: 'varchar2', nullable: true })
  perdesc: string;

  @Column({ name: 'PERDESCAVISTA', type: 'varchar2', nullable: true })
  perdescavista: string;

  @Column({ name: 'PERDESCFIN', type: 'varchar2', nullable: true })
  perdescfin: string;

  @Column({ name: 'PERDESCLIB', type: 'varchar2', nullable: true })
  perdesclib: string;

  @Column({ name: 'PERMITEFATURARCOMWMSPEND', type: 'varchar2', nullable: true })
  permitefaturarcomwmspend: string;

  @Column({ name: 'PERMITEPRODSEMDISTRIBUICAO', type: 'varchar2', nullable: true })
  permiteprodsemdistribuicao: string;

  @Column({ name: 'PLACAVEICULO', type: 'varchar2', nullable: true })
  placaveiculo: string;

  @Column({ name: 'PLANOSUPPLI', type: 'varchar2', nullable: true })
  planosuppli: string;

  @Column({ name: 'PLPAGAVISTA', type: 'varchar2', nullable: true })
  plpagavista: string;

  @Column({ name: 'POSICAO', type: 'varchar2', nullable: true })
  posicao: string;

  @Column({ name: 'PRAZO1', type: 'number', nullable: true })
  prazo1: number;

  @Column({ name: 'PRAZO10', type: 'number', nullable: true })
  prazo10: number;

  @Column({ name: 'PRAZO11', type: 'number', nullable: true })
  prazo11: number;

  @Column({ name: 'PRAZO12', type: 'number', nullable: true })
  prazo12: number;

  @Column({ name: 'PRAZO2', type: 'number', nullable: true })
  prazo2: number;

  @Column({ name: 'PRAZO3', type: 'number', nullable: true })
  prazo3: number;

  @Column({ name: 'PRAZO4', type: 'number', nullable: true })
  prazo4: number;

  @Column({ name: 'PRAZO5', type: 'number', nullable: true })
  prazo5: number;

  @Column({ name: 'PRAZO6', type: 'number', nullable: true })
  prazo6: number;

  @Column({ name: 'PRAZO7', type: 'number', nullable: true })
  prazo7: number;

  @Column({ name: 'PRAZO8', type: 'number', nullable: true })
  prazo8: number;

  @Column({ name: 'PRAZO9', type: 'number', nullable: true })
  prazo9: number;

  @Column({ name: 'PRAZOADICIONAL', type: 'number', nullable: true })
  prazoadicional: number;

  @Column({ name: 'PRAZOMEDIO', type: 'number', nullable: true })
  prazomedio: number;

  @Column({ name: 'PRAZOMEDIOPLPAG', type: 'number', nullable: true })
  prazomedioplpag: number;

  @Column({ name: 'PRAZOPONDERADO', type: 'number', nullable: true })
  prazoponderado: number;

  @Column({ name: 'PRECISAOLATLNG', type: 'varchar2', nullable: true })
  precisaolatlng: string;

  @Column({ name: 'PRONTAENTREGA', type: 'varchar2', nullable: true })
  prontaentrega: string;

  @Column({ name: 'PROTOCOLONFCE', type: 'varchar2', nullable: true })
  protocolonfce: string;

  @Column({ name: 'PROTOCOLONFP', type: 'varchar2', nullable: true })
  protocolonfp: string;

  @Column({ name: 'QRCODENFCE', type: 'varchar2', nullable: true })
  qrcodenfce: string;

  @Column({ name: 'QRCODESAT', type: 'varchar2', nullable: true })
  qrcodesat: string;

  @Column({ name: 'QTPALETE', type: 'number', nullable: true })
  qtpalete: number;

  @Column({ name: 'QTPARCELAS', type: 'number', nullable: true })
  qtparcelas: number;

  @Column({ name: 'RECALPRECOALTPLPAG', type: 'varchar2', nullable: true })
  recalprecoaltplpag: string;

  @Column({ name: 'RECARGA', type: 'varchar2', nullable: true })
  recarga: string;

  @Column({ name: 'RESERVAESTOQUETV7', type: 'varchar2', nullable: true })
  reservaestoquetv7: string;

  @Column({ name: 'RESERVARITENSTV7', type: 'varchar2', nullable: true })
  reservaritenstv7: string;

  @Column({ name: 'RESTRICAOTRANSP', type: 'varchar2', nullable: true })
  restricaotransp: string;

  @Column({ name: 'RESTRICAOTRANSPORTE', type: 'varchar2', nullable: true })
  restricaotransporte: string;

  @Column({ name: 'ROTINA', type: 'varchar2', nullable: true })
  rotina: string;

  @Column({ name: 'ROTINALANC', type: 'varchar2', nullable: true })
  rotinalanc: string;

  @Column({ name: 'ROTINALANCULTALT', type: 'varchar2', nullable: true })
  rotinalancultalt: string;

  @Column({ name: 'SERIEECF', type: 'varchar2', nullable: true })
  serieecf: string;

  @Column({ name: 'SERIEMANIF', type: 'varchar2', nullable: true })
  seriemanif: string;

  @Column({ name: 'SISTEMALEGADO', type: 'varchar2', nullable: true })
  sistemalegado: string;

  @Column({ name: 'SITUACAOPROCESSAMENTO', type: 'varchar2', nullable: true })
  situacaoprocessamento: string;

  @Column({ name: 'SITUACAOSAT', type: 'varchar2', nullable: true })
  situacaosat: string;

  @Column({ name: 'SOFTNUMLANC', type: 'varchar2', nullable: true })
  softnumlanc: string;

  @Column({ name: 'STATUSPEDIDOCIASHOP', type: 'varchar2', nullable: true })
  statuspedidociashop: string;

  @Column({ name: 'STATUSTRANSACAODIG', type: 'varchar2', nullable: true })
  statustransacaodig: string;

  @Column({ name: 'SUBSERIE', type: 'varchar2', nullable: true })
  subserie: string;

  @Column({ name: 'TAXACASOMOEDAREAL', type: 'varchar2', nullable: true })
  taxacasomoedareal: string;

  @Column({ name: 'TIB_IDCOTACAO', type: 'varchar2', nullable: true })
  tibIdcotacao: string;

  @Column({ name: 'TIB_ORDEMCOTACAO', type: 'varchar2', nullable: true })
  tibOrdemcotacao: string;

  @Column({ name: 'TIPOCALCVLATEND', type: 'varchar2', nullable: true })
  tipocalcvlatend: string;

  @Column({ name: 'TIPOCARGA', type: 'varchar2', nullable: true })
  tipocarga: string;

  @Column({ name: 'TIPOCFOPTV4', type: 'varchar2', nullable: true })
  tipocfoptv4: string;

  @Column({ name: 'TIPOCONTACORRENTE', type: 'varchar2', nullable: true })
  tipocontacorrente: string;

  @Column({ name: 'TIPODOCUMENTO', type: 'varchar2', nullable: true })
  tipodocumento: string;

  @Column({ name: 'TIPOEMBALAGEM', type: 'varchar2', nullable: true })
  tipoembalagem: string;

  @Column({ name: 'TIPOEMISSAO', type: 'varchar2', nullable: true })
  tipoemissao: string;

  @Column({ name: 'TIPOEXPEDICAOCESTABASICA', type: 'varchar2', nullable: true })
  tipoexpedicaocestabasica: string;

  @Column({ name: 'TIPOFORMULARIONF', type: 'varchar2', nullable: true })
  tipoformularionf: string;

  @Column({ name: 'TIPOFV', type: 'varchar2', nullable: true })
  tipofv: string;

  @Column({ name: 'TIPOMOVCCRCA', type: 'varchar2', nullable: true })
  tipomovccrca: string;

  @Column({ name: 'TIPOOPER', type: 'varchar2', nullable: true })
  tipooper: string;

  @Column({ name: 'TIPOOPERACAOTEF', type: 'varchar2', nullable: true })
  tipooperacaotef: string;

  @Column({ name: 'TIPOPRIORIDADEENTREGA', type: 'varchar2', nullable: true })
  tipoprioridadeentrega: string;

  @Column({ name: 'TIPORETIRADA', type: 'varchar2', nullable: true })
  tiporetirada: string;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', nullable: true })
  tipovenda: string;

  @Column({ name: 'TOTPESO', type: 'number', nullable: true })
  totpeso: number;

  @Column({ name: 'TOTPESOAGRUPADO', type: 'number', nullable: true })
  totpesoagrupado: number;

  @Column({ name: 'TOTPESOLIQ', type: 'number', nullable: true })
  totpesoliq: number;

  @Column({ name: 'TOTPESOLIQAGRUPADO', type: 'number', nullable: true })
  totpesoliqagrupado: number;

  @Column({ name: 'TOTPESOPALETE', type: 'number', nullable: true })
  totpesopalete: number;

  @Column({ name: 'TOTVLBONIFIC', type: 'number', nullable: true })
  totvlbonific: number;

  @Column({ name: 'TOTVLDESCCOM', type: 'number', nullable: true })
  totvldesccom: number;

  @Column({ name: 'TOTVLDESCFIN', type: 'number', nullable: true })
  totvldescfin: number;

  @Column({ name: 'TOTVLDESCFLEX', type: 'number', nullable: true })
  totvldescflex: number;

  @Column({ name: 'TOTVLREDCOMISS', type: 'number', nullable: true })
  totvlredcomiss: number;

  @Column({ name: 'TOTVLREDCOMISSSUP', type: 'number', nullable: true })
  totvlredcomisssup: number;

  @Column({ name: 'TOTVOLUME', type: 'number', nullable: true })
  totvolume: number;

  @Column({ name: 'TOTVOLUMEAGRUPADO', type: 'number', nullable: true })
  totvolumeagrupado: number;

  @Column({ name: 'TRANSPORTADORA', type: 'varchar2', nullable: true })
  transportadora: string;

  @Column({ name: 'TRIBUTAPORREGIAOFILIAL', type: 'varchar2', nullable: true })
  tributaporregiaofilial: string;

  @Column({ name: 'TRIBVENDATRIANGULAR', type: 'varchar2', nullable: true })
  tribvendatriangular: string;

  @Column({ name: 'TROCAALTDEBCREDRCA', type: 'varchar2', nullable: true })
  trocaaltdebcredrca: string;

  @Column({ name: 'TURNOENTREGA', type: 'varchar2', nullable: true })
  turnoentrega: string;

  @Column({ name: 'UFDESEMBARACO', type: 'varchar2', nullable: true })
  ufdesembaraco: string;

  @Column({ name: 'UFFRETE', type: 'varchar2', nullable: true })
  uffrete: string;

  @Column({ name: 'UFVEICULO', type: 'varchar2', nullable: true })
  ufveiculo: string;

  @Column({ name: 'UIDREGISTRO', type: 'varchar2', nullable: true })
  uidregistro: string;

  @Column({ name: 'ULTIMASITUACAOCFAT', type: 'varchar2', nullable: true })
  ultimasituacaocfat: string;

  @Column({ name: 'USACFOPVENDANATV10', type: 'varchar2', nullable: true })
  usacfopvendanatv10: string;

  @Column({ name: 'USACORTECIASHOP', type: 'varchar2', nullable: true })
  usacorteciashop: string;

  @Column({ name: 'USACREDRCA', type: 'varchar2', nullable: true })
  usacredrca: string;

  @Column({ name: 'USACREDRCATIPOBNF', type: 'varchar2', nullable: true })
  usacredrcatipobnf: string;

  @Column({ name: 'USADEBCREDRCA', type: 'varchar2', nullable: true })
  usadebcredrca: string;

  @Column({ name: 'USAINTEGRACAOWMS', type: 'varchar2', nullable: true })
  usaintegracaowms: string;

  @Column({ name: 'USASALDOCONTACORRENTEDESCFIN', type: 'varchar2', nullable: true })
  usasaldocontacorrentedescfin: string;

  @Column({ name: 'UTILIZAVENDAPOREMBALAGEM', type: 'varchar2', nullable: true })
  utilizavendaporembalagem: string;

  @Column({ name: 'VALORDESCFIN', type: 'varchar2', nullable: true })
  valordescfin: string;

  @Column({ name: 'VENDAASSISTIDA', type: 'varchar2', nullable: true })
  vendaassistida: string;

  @Column({ name: 'VENDAASSISTIVA', type: 'varchar2', nullable: true })
  vendaassistiva: string;

  @Column({ name: 'VENDAEXPORTACAO', type: 'varchar2', nullable: true })
  vendaexportacao: string;

  @Column({ name: 'VENDALOCALCLIEX', type: 'varchar2', nullable: true })
  vendalocalcliex: string;

  @Column({ name: 'VENDALOCESTRANG', type: 'varchar2', nullable: true })
  vendalocestrang: string;

  @Column({ name: 'VENDANFSERIED', type: 'varchar2', nullable: true })
  vendanfseried: string;

  @Column({ name: 'VENDATRIANGULAR', type: 'varchar2', nullable: true })
  vendatriangular: string;

  @Column({ name: 'VERSAOFATURAMENTO', type: 'varchar2', nullable: true })
  versaofaturamento: string;

  @Column({ name: 'VERSAOROTINA', type: 'varchar2', nullable: true })
  versaorotina: string;

  @Column({ name: 'VILDTSEPARACOMPLFIM', type: 'varchar2', nullable: true })
  vildtseparacomplfim: string;

  @Column({ name: 'VILDTSEPARACOMPLINI', type: 'varchar2', nullable: true })
  vildtseparacomplini: string;

  @Column({ name: 'VLATEND', type: 'number', nullable: true })
  vlatend: number;

  @Column({ name: 'VLBASESTFRETE', type: 'number', nullable: true })
  vlbasestfrete: number;

  @Column({ name: 'VLBONIFIC', type: 'number', nullable: true })
  vlbonific: number;

  @Column({ name: 'VLCUSTOCONT', type: 'number', nullable: true })
  vlcustocont: number;

  @Column({ name: 'VLCUSTOFIN', type: 'number', nullable: true })
  vlcustofin: number;

  @Column({ name: 'VLCUSTOREAL', type: 'number', nullable: true })
  vlcustoreal: number;

  @Column({ name: 'VLCUSTOREP', type: 'number', nullable: true })
  vlcustorep: number;

  @Column({ name: 'VLDESCABATIMENTO', type: 'number', nullable: true })
  vldescabatimento: number;

  @Column({ name: 'VLDESCNEG', type: 'number', nullable: true })
  vldescneg: number;

  @Column({ name: 'VLDESCONTO', type: 'number', nullable: true })
  vldesconto: number;

  @Column({ name: 'VLDESCONTOCUPOM', type: 'number', nullable: true })
  vldescontocupom: number;

  @Column({ name: 'VLDESCSOCIOTORCEDOR', type: 'number', nullable: true })
  vldescsociotorcedor: number;

  @Column({ name: 'VLENTRADA', type: 'number', nullable: true })
  vlentrada: number;

  @Column({ name: 'VLFRETE', type: 'number', nullable: true })
  vlfrete: number;

  @Column({ name: 'VLFRETEEMPENTREGA', type: 'number', nullable: true })
  vlfreteempentrega: number;

  @Column({ name: 'VLFRETENF', type: 'number', nullable: true })
  vlfretenf: number;

  @Column({ name: 'VLFRETEOUTRASDESP', type: 'number', nullable: true })
  vlfreteoutrasdesp: number;

  @Column({ name: 'VLFRETERETIDO', type: 'number', nullable: true })
  vlfreteretido: number;

  @Column({ name: 'VLFRETETRANSP', type: 'number', nullable: true })
  vlfretetransp: number;

  @Column({ name: 'VLICMSFRETENF', type: 'number', nullable: true })
  vlicmsfretenf: number;

  @Column({ name: 'VLICMSSTFRETE', type: 'number', nullable: true })
  vlicmsstfrete: number;

  @Column({ name: 'VLJUROSPARCELAMENTO', type: 'number', nullable: true })
  vljurosparcelamento: number;

  @Column({ name: 'VLOPERACAOFRETE', type: 'number', nullable: true })
  vloperacaofrete: number;

  @Column({ name: 'VLOUTRASDESP', type: 'number', nullable: true })
  vloutrasdesp: number;

  @Column({ name: 'VLRMOEDAESTRANGEIRA', type: 'number', nullable: true })
  vlrmoedaestrangeira: number;

  @Column({ name: 'VLST', type: 'number', nullable: true })
  vlst: number;

  @Column({ name: 'VLSTFRETERETIDO', type: 'number', nullable: true })
  vlstfreteretido: number;

  @Column({ name: 'VLSUBTOTAL', type: 'number', nullable: true })
  vlsubtotal: number;

  @Column({ name: 'VLTABELA', type: 'number', nullable: true })
  vltabela: number;

  @Column({ name: 'VLTOTAL', type: 'number', nullable: true })
  vltotal: number;

  @Column({ name: 'VLTOTALCOMTROCO', type: 'number', nullable: true })
  vltotalcomtroco: number;

  @Column({ name: 'VLTRIBUTOS', type: 'number', nullable: true })
  vltributos: number;

  @Column({ name: 'VLTXENT', type: 'number', nullable: true })
  vltxent: number;

  @Column({ name: 'VLVERBACMV', type: 'number', nullable: true })
  vlverbacmv: number;

  @Column({ name: 'VLVERBACMVCLI', type: 'number', nullable: true })
  vlverbacmvcli: number;

}
