import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  async create(@Body() dto: CreateEmpresaDto) {
    return this.empresaService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.empresaService.findById(id);
  }

  @Get()
  async findAll() {
    return this.empresaService.findAll();
  }
} 