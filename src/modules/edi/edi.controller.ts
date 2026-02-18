import { Controller, Get, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ForbiddenResponse } from 'src/common/dto/forbidden.dto';
import { InternalServerErrorResponse } from 'src/common/dto/internal-server-error.dto';
import { NotFoundResponse } from 'src/common/dto/not-found.dto';
import { UnauthorizedResponse } from 'src/common/dto/unauthorized.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { EdiProcessResultDto } from './dto/edi-import-result.dto';
import { EDITask } from './tasks/edi.task';

@ApiTags('EDI')
@Controller('edi')
export class EDIController {
  constructor(private ediTask: EDITask) { }

  @Post('process')
  @HttpCode(HttpStatus.OK)
  @Roles('DESENVOLVIMENTO', '16')
  @ApiOperation({ summary: 'Processar arquivos EDI do FTP manualmente' })
  @ApiResponse({ status: 200, description: 'Processamento concluído', type: EdiProcessResultDto })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized (Token not provided or invalid).',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden (User does not have the necessary permissions).',
    type: ForbiddenResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Processing resource not found (e.g. non-existent endpoint or data).',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Server internal error.',
    type: InternalServerErrorResponse,
  })
  async triggerProcessing(@Request() req: any): Promise<EdiProcessResultDto> {
    const { registration } = req.user;
    const executedById = registration;

    return await this.ediTask.runManually();
  }

  @Get('health')
  @ApiOperation({ summary: 'Health check do módulo EDI' })
  healthCheck() {
    return {
      status: 'ok',
      module: 'EDI',
      timestamp: new Date().toISOString()
    };
  }
}