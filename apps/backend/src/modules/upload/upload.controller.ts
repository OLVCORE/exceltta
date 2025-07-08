import { Controller, Post, UploadedFile, UseInterceptors, Body, Req, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { UploadDocumentoDto } from './dto/upload-documento.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseGuards(JwtAuthGuard)
  @Post('documento')
  @UseInterceptors(FileInterceptor('file'))
  async uploadDocumento(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: UploadDocumentoDto,
    @Req() req: any
  ) {
    // empresaId pode vir do token JWT
    const empresaId = req.user.empresaId;
    return this.uploadService.uploadDocumento(empresaId, file, dto);
  }
} 