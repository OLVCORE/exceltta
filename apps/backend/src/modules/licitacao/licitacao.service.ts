import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LicitacaoService {
  constructor(private prisma: PrismaService) {}
  // Métodos reais de análise de órgãos, editais, CEPAG
} 