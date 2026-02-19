import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { DatabaseConfigService } from './config/database.config';
import { AppHealthModule } from './modules/app-heath/app-health.module';
import { EDIModule } from './modules/edi/edi.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [], // Set acesso ao FTP EDI
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConfigService,
    }),

    ScheduleModule.forRoot(),

    AppHealthModule,
    EDIModule,
    CommonModule,
  ],
})
export class AppModule { }
