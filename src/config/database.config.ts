import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {

  constructor(
    private readonly configService: ConfigService,
  ) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'winthor_conn',
      type: 'oracle',
      host: this.configService.getOrThrow('DB_HOST'),
      port: this.configService.get('DB_PORT', 1521),
      username: this.configService.getOrThrow('DB_USERNAME'),
      password: this.configService.getOrThrow('DB_PASSWORD'),
      serviceName: this.configService.getOrThrow('DB_SERVICE_NAME'),

      autoLoadEntities: true,

      synchronize: false,

      logging: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],

      extra: {
        poolMin: 2,
        poolMax: 10,
        poolIncrement: 1,
        poolTImeout: 60,
      },

      migrations: [__dirname + '../database/migrations/*{.ts,.js}'],
      migrationsRun: false,
    }
  }
}