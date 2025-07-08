import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UploadDocumentoDto } from './dto/upload-documento.dto';
import { IAService } from './ia/ia.service';
import { Express } from 'express';
import { extname } from 'path';

@Injectable()
export class UploadService {
  constructor(
    private prisma: PrismaService,
    private iaService: IAService
  ) {}

  async uploadDocumento(
    empresaId: string,
    file: Express.Multer.File,
    dto: UploadDocumentoDto
  ) {
    if (!file) throw new BadRequestException('Arquivo não enviado');
    // Salvar arquivo (pode ser local, S3, etc.)
    const arquivoUrl = `/uploads/${file.filename}`;
    // Criar registro do documento
    const documento = await this.prisma.documento.create({
      data: {
        empresaId,
        tipo: dto.tipo,
        arquivoUrl,
        status: 'processando'
      }
    });
    // Chamar IA para extração/classificação
    const produtos = await this.iaService.extrairProdutos(file.path, dto.tipo);
    // Atualizar documento com produtos extraídos
    await this.prisma.documento.update({
      where: { id: documento.id },
      data: {
        status: 'extraido',
        produtosExtraidos: produtos
      }
    });
    return { documentoId: documento.id, produtos };
  }
} 