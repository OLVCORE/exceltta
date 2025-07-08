import { Module } from '@nestjs/common';
import { TributarioService } from './tributario.service';
import { TributarioController } from './tributario.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [TributarioController],
  providers: [TributarioService, PrismaService],
  exports: [TributarioService],
})
export class TributarioModule {} 