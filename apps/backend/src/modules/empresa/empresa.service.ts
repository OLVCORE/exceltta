import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEmpresaDto) {
    return this.prisma.empresa.create({ data });
  }

  async findByCnpj(cnpj: string) {
    return this.prisma.empresa.findUnique({ where: { cnpj } });
  }

  async findById(id: string) {
    return this.prisma.empresa.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prisma.empresa.findMany();
  }
} 