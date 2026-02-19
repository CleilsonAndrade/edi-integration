import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { InternalServerErrorResponse } from "src/common/dto/internal-server-error.dto";
import { ServiceUnavailableResponse } from "src/common/dto/service-unavailable.dto";
import { AppHealthService } from "./app-health.service";
import { AppHealthResponseDto } from "./dto/app-health.response";

@ApiTags('Health')
@Controller('health')
export class AppHealthController {
  constructor(private readonly healthService: AppHealthService) { }

  @Get()
  @ApiOperation({
    summary: 'Requisition to get checking service heath status, including database and external server status.'
  })
  @ApiResponse({
    status: 200,
    description: 'Health check successful.',
    type: AppHealthResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
    type: InternalServerErrorResponse,
  })
  @ApiResponse({
    status: 503,
    description: 'Service Unavailable.',
    type: ServiceUnavailableResponse,
  })
  async healthCheck() {
    const result = await this.healthService.checkDependencies();

    return {
      status: result.status,
      timestamp: new Date().toISOString(),
      service: 'edi-integration',
      checks: result.info,
    }
  }
}