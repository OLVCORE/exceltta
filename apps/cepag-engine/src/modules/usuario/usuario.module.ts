import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService],
})
export class UsuarioModule {} 