import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async create(createEmpresaDto: CreateEmpresaDto) {
    return this.prisma.empresa.create({
      data: createEmpresaDto,
    });
  }

  async findAll() {
    return this.prisma.empresa.findMany({
      include: {
        usuarios: true,
        simulacoes: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.empresa.findUnique({
      where: { id },
      include: {
        usuarios: true,
        simulacoes: true,
      },
    });
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    return this.prisma.empresa.update({
      where: { id },
      data: updateEmpresaDto,
    });
  }

  async remove(id: string) {
    return this.prisma.empresa.delete({
      where: { id },
    });
  }
} 