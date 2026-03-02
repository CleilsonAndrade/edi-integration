import { Logger } from "@nestjs/common";
import * as fs from 'fs/promises';
import * as path from "path";

export class FileStorageService {
  private readonly logger = new Logger(FileStorageService.name)

  async saveData(folderName: string, data: any[] | string, isJson: boolean, ext?: string): Promise<string | void> {
    try {
      if (!data || (Array.isArray(data) && data.length === 0)) {
        this.logger.warn(`Nenhum dado para salvar em: ${folderName}`);

        return;
      }

      const timestamp = this.getTimestamp();
      const rootDir = process.cwd();
      const directory = path.join(process.cwd(), 'storage', folderName);

      await fs.mkdir(directory, { recursive: true });

      const fileName = `${folderName}_${timestamp}.${isJson ? 'json' : ext || 'txt'}`;

      const fullPath = path.join(directory, fileName);

      const contentToWrite = isJson
        ? JSON.stringify(data, null, 2)
        : data;

      await fs.writeFile(fullPath, contentToWrite, 'utf-8');

      const displayPath = path.join(path.basename(rootDir), path.relative(rootDir, fullPath));

      this.logger.log(`Arquivo gravado em: ${displayPath}`)

      return fullPath;
    } catch (error) {
      this.logger.error(`Falha ao salvar arquivo em ${folderName}:`, error);
      throw error;
    }
  }

  private getTimestamp(): string {
    const now = new Date();
    const DD = String(now.getDate()).padStart(2, '0');
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const YY = String(now.getFullYear()).slice(-2);
    const HH = String(now.getHours()).padStart(2, '0');
    const Min = String(now.getMinutes()).padStart(2, '0');
    return `${DD}_${MM}_${YY}_${HH}_${Min}`;
  }
}