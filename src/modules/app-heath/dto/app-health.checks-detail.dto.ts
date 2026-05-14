import { ApiProperty } from "@nestjs/swagger";

export class AppHealthCheckDetailDto {
  @ApiProperty({
    example: 'up',
    description: 'The status of the component (up, down, unknown)',
    enum: ['up', 'down', 'unknown'],
  })
  status!: 'up' | 'down' | 'unknown';
}