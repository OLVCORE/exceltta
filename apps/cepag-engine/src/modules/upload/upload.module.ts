import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [UploadController],
  providers: [UploadService, PrismaService],
  exports: [UploadService],
})
export class UploadModule {} 