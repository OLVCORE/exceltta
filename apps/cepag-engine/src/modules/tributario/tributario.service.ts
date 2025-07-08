import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TributarioService {
  constructor(private prisma: PrismaService) {}

  async calcularTributos(produto: any, origemUF: string, destinoUF: string) {
    // Simulação de cálculo tributário
    const icms = produto.valorUnitario * 0.18; // 18% ICMS
    const pis = produto.valorUnitario * 0.0165; // 1.65% PIS
    const cofins = produto.valorUnitario * 0.076; // 7.6% COFINS

    return {
      icms,
      pis,
      cofins,
      total: icms + pis + cofins,
    };
  }
} 