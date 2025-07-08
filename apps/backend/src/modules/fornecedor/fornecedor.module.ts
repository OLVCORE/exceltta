import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorController } from './fornecedor.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [FornecedorController],
  providers: [FornecedorService, PrismaService],
  exports: [FornecedorService]
})
export class FornecedorModule {} 