import { PrismaService } from '../../prisma/prisma.service';
export declare class UploadService {
    private prisma;
    constructor(prisma: PrismaService);
    processarDocumento(empresaId: string, arquivoUrl: string, tipo: string): Promise<any>;
}
