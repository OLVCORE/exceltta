import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SimulacaoService } from './simulacao.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('simulacoes')
@UseGuards(JwtAuthGuard)
export class SimulacaoController {
  constructor(private readonly simulacaoService: SimulacaoService) {}

  @Post()
  async criarSimulacao(@Body() body: { empresaId: string; tipo: string; linhas: any[] }) {
    return this.simulacaoService.criarSimulacao(body.empresaId, body.tipo, body.linhas);
  }

  @Get()
  findAll() {
    return this.simulacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simulacaoService.findOne(id);
  }
} 