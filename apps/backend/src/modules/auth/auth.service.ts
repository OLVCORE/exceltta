import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, senha: string) {
    const user = await this.usuarioService.findByEmail(email);
    if (user && await bcrypt.compare(senha, user.senha)) {
      // Não retornar a senha!
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(dto: { email: string, senha: string }) {
    const user = await this.usuarioService.findByEmail(dto.email);
    if (!user || !(await bcrypt.compare(dto.senha, user.senha))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const payload = { sub: user.id, email: user.email, papel: user.papel, empresaId: user.empresaId };
    return {
      access_token: this.jwtService.sign(payload),
      nome: user.nome,
      email: user.email,
      papel: user.papel,
      empresaId: user.empresaId
    };
  }
} 