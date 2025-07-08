import { PrismaService } from '../../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    findByEmail(email: string): Promise<any>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<any>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
