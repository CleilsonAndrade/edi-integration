import { Injectable } from '@nestjs/common';
import { HealthCheckError, HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import Client from 'ftp'; // Importe a biblioteca ftp que você já instalou

@Injectable()
export class FtpHealthIndicator extends HealthIndicator {
  async isHealthy(key: string, ftpConfig: Client.Options): Promise<HealthIndicatorResult> {
    const client = new Client();

    return new Promise((resolve, reject) => {
      // Se conectar com sucesso
      client.on('ready', () => {
        client.end(); // Fecha a conexão para não gerar vazamento de memória
        resolve(this.getStatus(key, true));
      });

      // Se der erro na conexão
      client.on('error', (err) => {
        client.end();
        const result = this.getStatus(key, false, { message: err.message });
        reject(new HealthCheckError('Falha na verificação do FTP', result));
      });

      // Tenta conectar usando as configurações passadas
      client.connect(ftpConfig);
    });
  }
}