import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nome: string, email: string, senha: string, papel?: string, empresaId: string }) {
    const hashed = await bcrypt.hash(data.senha, 10);
    return this.prisma.usuario.create({
      data: { ...data, senha: hashed }
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({ where: { email } });
  }
} 