import { ApiProperty } from '@nestjs/swagger';

export class EdiImportResultDto {
  @ApiProperty({ example: 1234 })
  numped!: number;

  @ApiProperty({ example: '0641024197AOB' })
  numpedfornec!: string;

  @ApiProperty({ example: 8 })
  qtitens!: number;

  @ApiProperty({ example: 210 })
  qtpecas!: number;

  @ApiProperty({ example: 'ALFACOMEX_8ghpmf00j8nq0bab000q9434_20251029040019.edi' })
  arquivo!: string;

  @ApiProperty()
  dtimportacao!: Date;
}

export class EdiProcessResultDto {
  @ApiProperty({ example: 5 })
  totalProcessados!: number;

  @ApiProperty({ example: 4 })
  sucessos!: number;

  @ApiProperty({ example: 1 })
  erros!: number;

  @ApiProperty({ type: [EdiImportResultDto] })
  pedidos!: EdiImportResultDto[];

  @ApiProperty({ type: [String] })
  arquivosComErro!: string[];
}