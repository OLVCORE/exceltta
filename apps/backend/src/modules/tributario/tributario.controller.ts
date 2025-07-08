import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TributarioService } from './tributario.service';
import { SimularTributosDto } from './dto/simular-tributos.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tributario')
export class TributarioController {
  constructor(private readonly tributarioService: TributarioService) {}

  @UseGuards(JwtAuthGuard)
  @Post('simular')
  async simularTributos(@Body() dto: SimularTributosDto) {
    return this.tributarioService.simularTributos(dto);
  }
} 