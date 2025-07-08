import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SimulacaoService {
  constructor(private prisma: PrismaService) {}

  async criarSimulacao(empresaId: string, tipo: string, linhas: any[]) {
    const simulacao = await this.prisma.simulacao.create({
      data: {
        empresaId,
        tipo,
        status: 'rascunho',
      },
    });

    // Criar linhas da simulação
    for (const linha of linhas) {
      await this.prisma.linhaSimulacao.create({
        data: {
          simulacaoId: simulacao.id,
          produtoId: linha.produtoId,
          origemUF: linha.origemUF,
          destinoUF: linha.destinoUF,
          valorUnitario: linha.valorUnitario,
          quantidade: linha.quantidade,
          tipoOperacao: linha.tipoOperacao,
          resultadoTributario: {},
          resultadoViabilidade: {},
        },
      });
    }

    return simulacao;
  }

  async findAll() {
    return this.prisma.simulacao.findMany({
      include: {
        empresa: true,
        linhas: {
          include: {
            produto: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.simulacao.findUnique({
      where: { id },
      include: {
        empresa: true,
        linhas: {
          include: {
            produto: true,
          },
        },
      },
    });
  }
} 