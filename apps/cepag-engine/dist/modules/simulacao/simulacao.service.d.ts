import { PrismaService } from '../../prisma/prisma.service';
export declare class SimulacaoService {
    private prisma;
    constructor(prisma: PrismaService);
    criarSimulacao(empresaId: string, tipo: string, linhas: any[]): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
