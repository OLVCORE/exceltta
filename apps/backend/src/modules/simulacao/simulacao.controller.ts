import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SimulacaoService } from './simulacao.service';
import { CriarSimulacaoDto } from './dto/criar-simulacao.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('simulacao')
export class SimulacaoController {
  constructor(private readonly simulacaoService: SimulacaoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async criarSimulacao(@Body() dto: CriarSimulacaoDto) {
    return this.simulacaoService.criarSimulacao(dto);
  }
} 