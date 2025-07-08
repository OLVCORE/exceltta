import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, 10);
    return this.prisma.usuario.create({
      data: {
        ...createUsuarioDto,
        senha: hashedPassword,
      },
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      include: {
        empresa: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: {
        empresa: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
      include: {
        empresa: true,
      },
    });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const updateData: any = { ...updateUsuarioDto };
    
    if (updateData.senha) {
      updateData.senha = await bcrypt.hash(updateData.senha, 10);
    }
    
    return this.prisma.usuario.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: string) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
} 