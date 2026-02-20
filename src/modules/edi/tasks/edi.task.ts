

import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EDIService } from '../services/edi.service';

@Injectable()
export class EDITask {
  private readonly logger = new Logger(EDITask.name);

  constructor(
    private ediService: EDIService,
    private configService: ConfigService,
  ) { }

  // ========== OPÇÕES DE AGENDAMENTO ==========

  // OPÇÃO 1: A cada hora (padrão)
  // @Cron(CronExpression.EVERY_HOUR)

  // OPÇÃO 2: Horários específicos (ex: 8h, 12h, 16h, 20h)
  // @Cron('0 8,12,16,20 * * *')

  // OPÇÃO 3: A cada 30 minutos
  // @Cron('*/30 * * * *')

  // OPÇÃO 4: De hora em hora durante horário comercial (8h às 18h)
  // @Cron('0 8-18 * * 1-5')

  // OPÇÃO 5: Configurável via .env
  // EDI_CRON_SCHEDULE
  @Cron(CronExpression.EVERY_HOUR, {
    timeZone: 'America/Sao_Paulo',
  })
  async handleEDIProcessing() {
    const isEnabled = this.configService.get<boolean>('EDI_CRON_ENABLED', true);

    if (!isEnabled) {
      this.logger.debug('Cron desabilitado via configuração');
      return;
    }

    this.logger.log('='.repeat(60));
    this.logger.log(`Iniciando processamento EDI: ${new Date().toISOString()}`);
    this.logger.log('='.repeat(60));

    try {
      const result = await this.ediService.processFromFTP();
      this.logger.log(`Resultado: ${result.sucessos}/${result.totalProcessados} processados com sucesso`);

      if (result.erros > 0) {
        this.logger.warn(`Arquivos com erro: ${result.arquivosComErro.join(', ')}`);
      }
    } catch (error) {
      this.logger.error('Erro no processamento EDI:', error.stack);
    }
  }

  // Processamento manual via endpoint
  async runManually(executedById: number) {
    this.logger.log(`Processamento manual iniciado por usuário ID: ${executedById}`);
    return await this.ediService.processFromFTP();
  }
}