import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HealthCheckResult, HttpHealthIndicator, HealthCheckService as TerminusHealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Injectable()
export class AppHealthService {
  constructor(
    private health: TerminusHealthCheckService,
    private db: TypeOrmHealthIndicator,
    private http: HttpHealthIndicator,
    private config: ConfigService,
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
      })
    ])
  }
}