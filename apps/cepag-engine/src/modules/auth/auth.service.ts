import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioService.findByEmail(email);
    if (usuario && await bcrypt.compare(senha, usuario.senha)) {
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const usuario = await this.validateUser(loginDto.email, loginDto.senha);
    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { email: usuario.email, sub: usuario.id, papel: usuario.papel };
    return {
      access_token: this.jwtService.sign(payload),
      usuario,
    };
  }
} 