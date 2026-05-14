import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Client from 'ftp';

export interface FTPFile {
  name: string;
  size: number;
  date: Date;
  path: string;
}

@Injectable()
export class FTPService {
  private readonly logger = new Logger(FTPService.name);
  private client!: Client;

  constructor(private configService: ConfigService) { }

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client = new Client();

      this.client.on('ready', () => {
        this.logger.log('✓ Conectado ao FTP');
        resolve();
      });

      this.client.on('error', (err) => {
        this.logger.error('Erro na conexão FTP:', err);
        reject(err);
      });

      this.client.connect({
        host: this.configService.getOrThrow<string>('FTP_HOST'),
        port: this.configService.get<number>('FTP_PORT', 21),
        user: this.configService.getOrThrow<string>('FTP_USER'),
        password: this.configService.getOrThrow<string>('FTP_PASSWORD'),
        secure: this.configService.get<boolean>('FTP_SECURE') === true,
        secureOptions: { rejectUnauthorized: false },
      });
    });
  }

  async listFiles(remotePath: string): Promise<FTPFile[]> {
    return new Promise((resolve, reject) => {
      this.client.list(remotePath, (err, list) => {
        if (err) {
          this.logger.error(`Erro ao listar arquivos em ${remotePath}:`, err);
          reject(err);
          return;
        }

        const files = list
          .filter(item => {
            const isEdiFile = item.type === '-' && item.name.endsWith('.edi');

            // Só exibe o log se o item passar na validação
            if (isEdiFile) {
              this.logger.debug(`Arquivo EDI encontrado: ${item.name}`);
            }

            return isEdiFile;
          })
          .map(item => ({
            name: item.name,
            size: item.size,
            date: item.date,
            path: `${remotePath}/${item.name}`,
          }));

        if (files.length > 0) {
          // Extrai apenas os nomes para o log
          const fileNames = files.map(f => f.name);
        }

        resolve(files);
      });
    });
  }

  async downloadFile(remotePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.get(remotePath, (err, stream) => {
        if (err) {
          this.logger.error(`Erro ao baixar arquivo ${remotePath}:`, err);
          reject(err);
          return;
        }

        const chunks: Buffer[] = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
        stream.on('error', reject);
      });
    });
  }

  async moveFile(oldPath: string, newPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.rename(oldPath, newPath, (err) => {
        if (err) {
          this.logger.error(`Erro ao mover ${oldPath} para ${newPath}:`, err);
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  disconnect(): void {
    if (this.client) {
      this.client.end();
      this.logger.log('Desconectado do FTP');
    }
  }
}