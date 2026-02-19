import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HealthCheckResult, HttpHealthIndicator, HealthCheckService as TerminusHealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { FtpHealthIndicator } from './ftp.health';

@Injectable()
export class AppHealthService {
  constructor(
    private health: TerminusHealthCheckService,
    private db: TypeOrmHealthIndicator,
    private http: HttpHealthIndicator,
    private config: ConfigService,
    private ftpHealth: FtpHealthIndicator,
  ) { }

  async checkDb(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.db.pingCheck('database', {
        timeout: 1500,
      })
    ])
  }

  async checkDependencies(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.db.pingCheck('database', {
        timeout: 1500,
      }),

      // Verificação do FTP
      () => this.ftpHealth.isHealthy('ftp_server', {
        host: this.config.get<string>('FTP_HOST'), // Pegando dados do .env via ConfigService
        user: this.config.get<string>('FTP_USER'),
        password: this.config.get<string>('FTP_PASSWORD'),
        port: this.config.get<number>('FTP_PORT') || 21,
        connTimeout: 3000 // Timeout para a conexão não travar o healthcheck
      })
    ])
  }
}