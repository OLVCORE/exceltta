import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FornecedorService {
  constructor(private prisma: PrismaService) {}
  // Métodos reais de busca/cadastro de fornecedores
} 