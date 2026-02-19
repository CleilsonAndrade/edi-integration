import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HttpModule } from '@nestjs/axios';
import { AppHealthController } from './app-health.controller';
import { AppHealthService } from './app-health.service';
import { FtpHealthIndicator } from './ftp.health';


@Module({
  imports: [
    TerminusModule,
    HttpModule,
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppHealthController],
  providers: [AppHealthService, FtpHealthIndicator],
})

export class AppHealthModule { };