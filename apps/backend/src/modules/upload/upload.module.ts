import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { IAService } from './ia/ia.service';

@Module({
  controllers: [UploadController],
  providers: [UploadService, PrismaService, IAService],
  exports: [UploadService]
})
export class UploadModule {} 