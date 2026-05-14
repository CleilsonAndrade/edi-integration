import { ApiProperty } from "@nestjs/swagger";

export class ServiceUnavailableResponse {
  @ApiProperty({
    description: 'Status code HTTP.',
    example: 503,
  })
  statusCode!: number;

  @ApiProperty({
    description: 'Detailed error message.',
    example: 'Service Unavailable: The server is temporarily unable to handle the request.',
  })
  message!: string;

  @ApiProperty({
    description: 'HTTP error type.',
    example: 'Service Unavailable',
  })
  error!: string;
}