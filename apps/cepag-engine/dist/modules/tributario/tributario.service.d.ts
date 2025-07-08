import { PrismaService } from '../../prisma/prisma.service';
export declare class TributarioService {
    private prisma;
    constructor(prisma: PrismaService);
    calcularTributos(produto: any, origemUF: string, destinoUF: string): Promise<{
        icms: number;
        pis: number;
        cofins: number;
        total: number;
    }>;
}
