import { ApiProperty } from "@nestjs/swagger";
import { AppHealthCheckDetailDto } from "./app-health.checks-detail.dto";

class ChecksDto {
  @ApiProperty({
    description: 'Database Check.',
    type: AppHealthCheckDetailDto,
  })
  database!: AppHealthCheckDetailDto;

  @ApiProperty({
    description: 'FTP Server',
    type: AppHealthCheckDetailDto,
  })
  ftpServer!: AppHealthCheckDetailDto;
}

export class AppHealthResponseDto {
  @ApiProperty({
    example: 'ok',
    description: 'The general status of the service.',
    enum: ['ok', 'error', 'shutting_down'],
  })
  status!: 'ok' | 'error' | 'shutting_down';

  @ApiProperty({
    example: 'edi-integration',
    description: 'Service name.'
  })
  service!: string;

  @ApiProperty({
    description: 'Details of checked dependencies (e.g., DB, APIs external.)',
    type: ChecksDto,
  })
  checks!: ChecksDto;
}