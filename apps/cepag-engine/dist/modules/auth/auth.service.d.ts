import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    validateUser(email: string, senha: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        usuario: any;
    }>;
}
