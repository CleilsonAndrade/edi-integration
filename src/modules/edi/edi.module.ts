

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { EDIController } from './edi.controller';
import { EDI850Parser } from './parsers/edi850.parser';
import { EDIService } from './services/edi.service';
import { FTPService } from './services/ftp.service';
import { EDITask } from './tasks/edi.task';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    ConfigModule,
    ScheduleModule.forRoot(),
    AuthModule,
  ],
  controllers: [EDIController],
  providers: [EDIService, FTPService, EDI850Parser, EDITask],
  exports: [EDIService],
})
export class EDIModule { }