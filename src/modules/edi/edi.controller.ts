import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EdiProcessResultDto } from './dto/edi-import-result.dto';
import { EDITask } from './tasks/edi.task';

@ApiTags('EDI')
@Controller('edi')
export class EDIController {
  constructor(private ediTask: EDITask) { }

  @Post('process')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Processar arquivos EDI do FTP manualmente' })
  @ApiResponse({ status: 200, description: 'Processamento concluído', type: EdiProcessResultDto })
  async triggerProcessing(): Promise<EdiProcessResultDto> {
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