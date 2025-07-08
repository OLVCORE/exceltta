import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<any>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
