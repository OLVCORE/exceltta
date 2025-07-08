import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TributarioService } from './tributario.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tributario')
@UseGuards(JwtAuthGuard)
export class TributarioController {
  constructor(private readonly tributarioService: TributarioService) {}

  @Post('calcular')
  async calcularTributos(@Body() body: { produto: any; origemUF: string; destinoUF: string }) {
    return this.tributarioService.calcularTributos(body.produto, body.origemUF, body.destinoUF);
  }
} 