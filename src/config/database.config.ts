import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'winthor_conn',
      type: 'oracle',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1521,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      serviceName: process.env.DB_SERVICE_NAME,

      entities: [__dirname + '/../**/*.entity{.ts,.js'],

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