import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() dto: { nome: string, email: string, senha: string, papel?: string, empresaId: string }) {
    return this.usuarioService.create(dto);
  }

  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    return this.usuarioService.findByEmail(email);
  }
} 