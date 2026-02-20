import { Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import type { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { ForbiddenResponse } from 'src/common/dto/forbidden.dto';
import { InternalServerErrorResponse } from 'src/common/dto/internal-server-error.dto';
import { NotFoundResponse } from 'src/common/dto/not-found.dto';
import { UnauthorizedResponse } from 'src/common/dto/unauthorized.dto';
import { Roles } from '../../auth/decorators/roles.decorator';
import { EdiProcessResultDto } from './dto/edi-import-result.dto';
import { EDITask } from './tasks/edi.task';

@Controller('edi')
@ApiTags('EDI')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('BearerAuth')
export class EDIController {
  constructor(
    private ediTask: EDITask,
  ) { }

  @Post('process')
  @HttpCode(HttpStatus.MULTI_STATUS)
  @Roles('DESENVOLVIMENTO', '16')
  @ApiOperation({
    summary: 'Process FTP EDI files manually.',
    description:
      'Trigger the EDI processing task manually. This endpoint is protected and requires appropriate permissions.',
  })
  @ApiResponse({
    status: 207,
    description: 'Processing completed', type: EdiProcessResultDto
  })
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
  async triggerProcessing(@CurrentUser() user: JwtPayload): Promise<EdiProcessResultDto> {
    const { registration } = user;
    const executedById = registration;

    return await this.ediTask.runManually(executedById);
  }
}