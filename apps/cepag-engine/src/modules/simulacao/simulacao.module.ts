import { Module } from '@nestjs/common';
import { SimulacaoService } from './simulacao.service';
import { SimulacaoController } from './simulacao.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SimulacaoController],
  providers: [SimulacaoService, PrismaService],
  exports: [SimulacaoService],
})
export class SimulacaoModule {} 