import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPEDC',
})
export class PcpedcEntity {
  @PrimaryColumn({ name: 'NUMPED', type: 'number', precision: 10, scale: 0, })
  orderId: number;

  @Column({ name: 'DATA', type: 'date', nullable: true, default: true, })
  orderDate: Date;

  @Column({ name: 'VLTOTAL', type: 'number', precision: 10, scale: 3, })
  orderValueTotal: number;

  @Column({ name: 'CODCLI', type: 'number', precision: 6, scale: 0, nullable: true, })
  codCostumer: number;

  @Column({ name: 'CODUSUR', type: 'number', precision: 4, scale: 0 })
  codSeller: number;

  @Column({ name: 'DTENTREGA', type: 'date', nullable: true, })
  dtDelivery: Date;

  @Column({ name: 'VALORTABELA', type: 'number', precision: 16, scale: 3, nullable: true, })
  valueTable: number;

  @Column({ name: 'CODFILIAL', type: 'varchar2', length: 2, nullable: true, })
  codBranch: string;

  @Column({ name: 'VLDESCONTO', type: 'number', precision: 16, scale: 3, default: null, nullable: true, })
  valueDiscount: number;

  @Column({ name: 'TIPOVENDA', type: 'varchar2', length: 2, nullable: true, })
  orderType: string;

  @Column({ name: 'OBS', type: 'varchar2', length: 25, nullable: true, })
  obs: string;

  @Column({ name: 'VLCUSTOREAL', type: 'number', precision: 14, scale: 2, nullable: true, })
  valueCostReal: number;

  @Column({ name: 'VLCUSTOFIN', type: 'number', precision: 14, scale: 2, nullable: true, })
  valueCostFinance: number;

  @Column({ name: 'VLFRETE', type: 'number', precision: 16, scale: 3, nullable: true, })
  valueFreight: number;

  @Column({ name: 'VLOUTRASDESP', type: 'number', precision: 16, scale: 3, nullable: true, })
  valueOtherExpenses: number;

  @Column({ name: 'TOTPESO', type: 'number', precision: 16, scale: 3, nullable: true, })
  totalWeight: number;

  @Column({ name: 'TOTPESO', type: 'number', precision: 18, scale: 6, nullable: true, })
  totalVolume: number;

  @Column({ name: 'CODPRACA', type: 'number', precision: 4, scale: 0, nullable: true, })
  codSquare: number;

  @Column({ name: 'NUMITENS', type: 'number', precision: 4, scale: 0, nullable: true, })
  numItens: number;

  @Column({ name: 'CODEMITENTE', type: 'number', precision: 8, scale: 0, nullable: true, })
  codIssuer: number;

  @Column({ name: 'DTCANCEL', type: 'date', nullable: true, })
  dtCancel: Date;

  @Column({ name: 'POSICAO', type: 'varchar2', length: 2, nullable: true, })
  orderStatus: string;

  @Column({ name: 'VLATEND', type: 'number', precision: 16, scale: 3, nullable: true })
  valueAttend: number;

  @Column({ name: 'OPERACAO', type: 'varchar2', length: 1, nullable: true, })
  typeOperation: string;

  @Column({ name: 'NUMCAR', type: 'number', precision: 8, scale: 0, nullable: true, })
  numberCharger: number;

  @Column({ name: 'CODCOB', type: 'varchar2', length: 4, nullable: true, })
  codCharge: string;

  @Column({ name: 'HORA', type: "number", precision: 2, scale: 0, nullable: true, })
  emissionHour: number;

  @Column({ name: 'MINUTO', type: 'number', precision: 2, scale: 0, nullable: true, })
  emissionMinute: number;

  @Column({ name: 'NUMSQENTREGA', type: "number", precision: 20, scale: 0, nullable: true, })
  numIssueDelivery: number;

  @Column({ name: 'CUSTOENTREGA', type: 'number', precision: 14, scale: 2, nullable: true, })
  costDelivery: number;

  @Column({ name: 'CODSUPERVISOR', type: 'varchar2', precision: 4, scale: 0, nullable: true, })
  codSupervisor: string;

  @Column({ name: 'CAMPANHA', type: 'varchar2', length: 2, nullable: true, })
  campaign: string;

  @Column({ name: 'NUMPEDCLI', type: "varchar2", length: 15 })
  numOrderClient: string;

  @Column({ name: 'CONDVENDA', type: 'number', precision: 5, scale: 0, nullable: true })
  codSale: number;

  @Column({ name: 'PERCVENDA', type: "number", precision: 5, scale: 2, nullable: true, })
  percentualSale: number;

  @Column({ name: 'OBS1', type: "varchar2", length: 50, nullable: true, })
  obs1: string;

  @Column({ name: 'OBS2', type: "varchar2", length: 50, nullable: true, })
  ob2: string;

  @Column({ name: 'PERDESC', type: 'number', precision: 18, scale: 6, nullable: true, })
  percentualDiscount: number;

  @Column({ name: 'NEGOCIADO', type: "varchar2", length: 1, nullable: true, })
  negotiated: string;

  @Column({ name: 'CODPLPAG', type: "number", precision: 4, scale: 0, nullable: true })
  codPaymentPlan: number;

  @Column({ name: 'CODFUNCCANCEL', type: "number", precision: 8, scale: 0, })
  codEmployeeCancel: number;

  @Column({ name: 'NUMTRANSVENDA', type: "number", precision: 10, scale: 0, nullable: true, })
  salesTransactionNumber: number;

  @Column({ name: 'MONTANDO', type: 'varchar2', length: 1, nullable: true, })
  assembling: string;

  @Column({ name: 'NUMPEDRCA', type: 'number', precision: 10, scale: 2, nullable: true, })
  numOrderSeller: number;

  @Column({ name: 'FRETEDESPACHO', type: 'varchar2', length: 1, nullable: true, })
  shipping: string;

  @Column({ name: 'FRETEREDESPACHO', type: 'varchar2', length: 1, nullable: true, })
  shippingReDispatch: string;

  @Column({ name: 'CODFORNECFRETE', type: 'number', precision: 6, scale: 0, nullable: true, })
  supplierCodeShipping: number;

  @Column({ name: 'TIPOCARGA', type: 'varchar2', length: 1, nullable: true, })
  typeCharge: string;

  @Column({ name: 'PRAZO1', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline1: number;

  @Column({ name: 'PRAZO2', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline2: number;

  @Column({ name: 'PRAZO3', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline3: number;

  @Column({ name: 'PRAZO4', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline4: number;

  @Column({ name: 'PRAZO5', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline5: number;

  @Column({ name: 'PRAZO6', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline6: number;

  @Column({ name: 'PRAZO7', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline7: number;

  @Column({ name: 'PRAZO8', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline8: number;

  @Column({ name: 'PRAZO9', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline9: number;

  @Column({ name: 'PRAZO10', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline10: number;

  @Column({ name: 'PRAZO11', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline11: number;

  @Column({ name: 'PRAZO12', type: 'number', precision: 4, scale: 0, nullable: true, })
  deadline12: number;

  @Column({ name: 'PRAZOMEDIO', type: 'number', precision: 4, scale: 0, nullable: true, })
  mediumTerm: number;

  @Column({ name: 'OBSENTREGA1', type: 'varchar2', length: 75, nullable: true })
  obsDelivery1: string;

  @Column({ name: 'OBS2ENTREGA', type: 'varchar2', length: 75, nullable: true, })
  obsDelivery2: string;

  @Column({ name: 'OBS3ENTREGA', type: 'varchar2', length: 75, nullable: true, })
  obsDelivery: string;

  @Column({ name: 'CODEPTO', type: 'number', precision: 6, scale: 0, nullable: true, })
  codDepartment: number;

  @Column({ name: 'TIPOEMBALAGEM', type: 'varchar2', length: 1, nullable: true, })
  typePackaging: string;

  @Column({ name: 'DTLIBERA', type: 'date', nullable: true })
  dateRelease: Date;

  @Column({ name: 'CODMOTORISTA', type: 'number', precision: 8, scale: 0, nullable: true, })
  codDriver: number;

  @Column({ name: 'CODFILIALNF', type: "varchar2", length: 2, nullable: true, })
  codBranchBilling: string;

  @Column({ name: 'DTNFTRANSF', type: 'date', nullable: true, })
  dateInvoiceTransfer: Date;

  @Column({ name: 'NUMNFTRANSF', type: 'number', precision: 10, scale: 0, nullable: true, })
  numInvoiceTransfer: number;

  @Column({ name: 'NUMCUPOM', type: 'number', precision: 10, scale: 0, nullable: true, })
  numReceiptFiscal: number;

  @Column({ name: 'SERIEECF', type: 'varchar2', length: 2, nullable: true })
  serieECF: string;

  @Column({ name: 'CODMOTBLOQUEIO', type: 'number', precision: 8, scale: 0, nullable: true, })
  codReasonBlock: number;

  @Column({ name: 'CODMOTCANCEL', type: 'number', precision: 6, scale: 0, nullable: true, })
  codReasonCancellation: number; set

  @Column({ name: 'TIPOOPER', type: 'varchar2', length: 1, nullable: true, })
  typeOperationFiscal: string;

  @Column({ name: 'CODDISTRIB', type: "varchar2", length: 4, nullable: true, })
  codDistribution: string;

  @Column({ name: 'NUMVIASMAPASEP', type: 'number', precision: 2, scale: 0 })
  numRoadsMapSeparation: number;

  @Column({ name: 'NUMVOLUME', type: "number", precision: 8, scale: 0, nullable: true, })
  numVolumes: number;

  @Column({ name: 'NUMSEQENTR', type: "number", precision: 4, scale: 0, nullable: true, })
  sequentialNumberEntry: number;

  @Column({ name: 'CODFUNCCX', type: 'number', precision: 8, scale: 0, nullable: true, })
  employeeCodeCashier: number;

  @Column({ name: 'NUMCAIXA', type: 'number', precision: 4, scale: 0, nullable: true, })
  cashRegisterNumber: number;

  @Column({ name: 'NUMNOTA', type: "number", precision: 10, scale: 0, nullable: true, })
  invoiceNumberInvoiced: number;

  @Column({ name: 'VLCUSTOREP', type: 'number', precision: 14, scale: 2, nullable: true, })
  valueCostReplacement: number;

  @Column({ name: 'VLCUSTOCONT', type: 'number', precision: 14, scale: 2, nullable: true, })
  valueCostAccounting: number;

  @Column({ name: 'VLDESCNEG', type: 'number', precision: 12, scale: 2, nullable: true, })
  valueNegotiatedDiscount: number;

  @Column({ name: 'PERCDESCCANAL', type: 'number', precision: 8, scale: 2, nullable: true, })
  percentageDiscountChannel: number;

  @Column({ name: 'PERCDESCABC', type: "number", precision: 8, scale: 2, nullable: true, })
  percentageDiscountABC: number;

  @Column({ name: 'PERCDESCCLI', type: 'number', precision: 8, scale: 2, nullable: true, })
  percentageDiscountClient: number;

  @Column({ name: 'PERCDESCNEG', type: 'number', precision: 8, scale: 2, nullable: true, })
  percentageDiscountNegotiated: number;

  @Column({ name: 'NUMNOTAMANIF', type: 'number', precision: 10, scale: 0, nullable: true, })
  numInvoiceManifest: number;
}