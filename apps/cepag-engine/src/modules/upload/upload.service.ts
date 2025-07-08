import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UploadService {
  constructor(private prisma: PrismaService) {}

  async processarDocumento(empresaId: string, arquivoUrl: string, tipo: string) {
    // Simulação de processamento de documento
    const produtosExtraidos = [
      {
        descricao: 'Produto Exemplo',
        ncm: '12345678',
        unidade: 'UN',
        quantidade: 1,
        valorUnitario: 100.00,
      },
    ];

    return this.prisma.documento.create({
      data: {
        empresaId,
        tipo,
        arquivoUrl,
        status: 'extraido',
        produtosExtraidos: produtosExtraidos,
      },
    });
  }
} 