import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PcclientEntity } from '../entities/pcclient.entity';
import { PcconsumEntity } from '../entities/pcconsum.entity';
import { PcemprEntity } from '../entities/pcempr.entity';
import { PcfilialEntity } from '../entities/pcfilial.entity';
import { PcfornecEntity } from '../entities/pcfornec.entity';
import { PcpedcEntity } from '../entities/pcpedc.entity';
import { PcpediEntity } from '../entities/pcpedi.entity';
import { PcplpagEntity } from '../entities/pcplpag.entity';
import { PcpracaEntity } from '../entities/pcpraca.entity';
import { PcprodutEntity } from '../entities/pcprodut.entity';
import { PctabprEntity } from '../entities/pctabpr.entity';
import { PcusuariEntity } from '../entities/pcusuari.entity';
import { EDIController } from './edi.controller';
import { EDI850Parser } from './parsers/edi850.parser';
import { EDIService } from './services/edi.service';
import { FTPService } from './services/ftp.service';
import { EDITask } from './tasks/edi.task';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      PcfilialEntity,
      PcclientEntity,
      PcconsumEntity,
      PcemprEntity,
      PcfornecEntity,
      PcpedcEntity,
      PcpediEntity,
      PcusuariEntity,
      PcpracaEntity,
      PcprodutEntity,
      PcplpagEntity,
      PctabprEntity,
    ], 'winthor_conn'),
  ],
  controllers: [EDIController],
  providers: [EDIService, FTPService, EDI850Parser, EDITask,],
  exports: [EDIService],
})
export class EDIModule { }