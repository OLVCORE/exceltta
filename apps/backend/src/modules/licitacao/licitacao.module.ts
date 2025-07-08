import { Module } from '@nestjs/common';
import { LicitacaoService } from './licitacao.service';
import { LicitacaoController } from './licitacao.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [LicitacaoController],
  providers: [LicitacaoService, PrismaService],
  exports: [LicitacaoService]
})
export class LicitacaoModule {} 