import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEmpresaDto: CreateEmpresaDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<any>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
