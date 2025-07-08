import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UploadService } from './upload.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('upload')
@UseGuards(JwtAuthGuard)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('documento')
  async uploadDocumento(@Body() body: { empresaId: string; arquivoUrl: string; tipo: string }) {
    return this.uploadService.processarDocumento(body.empresaId, body.arquivoUrl, body.tipo);
  }
} 