import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresaController {
    private readonly empresaService;
    constructor(empresaService: EmpresaService);
    create(createEmpresaDto: CreateEmpresaDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<any>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
