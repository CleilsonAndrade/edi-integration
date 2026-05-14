import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'PCPRACA',
})
export class PcpracaEntity {
  @PrimaryColumn({ name: 'CODPRACA', type: 'number', precision: 4, scale: 0, nullable: false })
  codSquare?: number;

  @Column({ name: 'PRACA', type: 'varchar2', length: 25, nullable: true })
  square?: string;

  @Column({ name: 'NUMREGIAO', type: 'number', precision: 4, scale: 0, nullable: true, default: null })
  regionNumber?: number;

  @Column({ name: 'NUMREGIAO2', type: 'number', precision: 4, scale: 0, nullable: true, default: null })
  regionNumber2?: number;

  @Column({ name: 'ROTA', type: 'number', precision: 4, scale: 0, nullable: true, default: null })
  routeNumber?: number;

  @Column({ name: 'SEQROTA', type: 'number', precision: 4, scale: 0, nullable: true, default: null })
  routeSequence?: number;

  @Column({ name: 'POPULACAO', type: 'number', precision: 14, scale: 0, nullable: true })
  population?: number;

  @Column({ name: 'PERFRETEPROGRESS', type: 'number', precision: 8, scale: 4, nullable: true, })
  progressPercentage?: number;

  @Column({ name: 'CODPRACAORIG', type: 'number', precision: 6, scale: 0, nullable: true })
  originalSquareCode?: number;

  @Column({ name: 'CODPRACAORIG2', type: 'number', precision: 6, scale: 0, nullable: true })
  originalSquareCode2?: number;

  @Column({ name: 'CODPRACAORIG3', type: 'number', precision: 6, scale: 0, nullable: true })
  originalSquareCode3?: number;

  @Column({ name: 'CODPRACAORIG4', type: 'number', precision: 6, scale: 0, nullable: true })
  originalSquareCode4?: number;

  @Column({ name: 'DISTANCIA', type: 'number', precision: 6, scale: 0, nullable: true })
  distance?: number;

  @Column({ name: 'VLPAUTAFRETE', type: 'number', precision: 12, scale: 2, nullable: true })
  freightValue?: number;

  @Column({ name: 'CODMUNIC', type: 'number', precision: 8, scale: 0, nullable: true })
  municipalCode?: number;

  @Column({ name: 'SITUACAO', type: 'varchar2', length: 1, nullable: true })
  situation?: string;

  @Column({ name: 'DTCADASTRO', type: 'date', nullable: true })
  registrationDate?: Date;

  @Column({ name: 'CEPINICIAL', type: 'varchar2', length: 9, nullable: true })
  initialZipCode?: string;

  @Column({ name: 'CEPFINAL', type: 'varchar2', length: 9, nullable: true })
  finalZipCode?: string;

  @Column({ name: 'PRIORIDADEENTREGA', type: 'varchar2', length: 1, nullable: false, default: 'N' })
  deliveryPriority?: string;

  @Column({ name: 'TIPOPRACA', type: 'varchar2', length: 1, nullable: true })
  squareType?: string;

  @Column({ name: 'OBS', type: 'varchar2', length: 300, nullable: true })
  observation?: string;

  @Column({ name: 'CODPRACAPRINCIPAL', type: 'number', precision: 4, scale: 0, nullable: true })
  mainSquareCode?: number;

  @Column({ name: 'VLMINCARREG', type: 'number', precision: 12, scale: 2, nullable: true })
  minimumLoadingValue?: number;

  @Column({ name: 'PERCMINCARREG', type: 'number', precision: 10, scale: 2, nullable: true })
  minimumLoadingPercentage?: number;
}