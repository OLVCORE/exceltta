export declare class PrismaService {
    $connect(): Promise<void>;
    $disconnect(): Promise<void>;
    empresa: {
        create: (data: any) => Promise<any>;
        findMany: (options?: any) => Promise<any[]>;
        findUnique: (options?: any) => Promise<any>;
        update: (data: any) => Promise<any>;
        delete: (options?: any) => Promise<{
            id: string;
        }>;
    };
    usuario: {
        create: (data: any) => Promise<any>;
        findMany: (options?: any) => Promise<any[]>;
        findUnique: (options?: any) => Promise<any>;
        update: (data: any) => Promise<any>;
        delete: (options?: any) => Promise<{
            id: string;
        }>;
    };
    simulacao: {
        create: (data: any) => Promise<any>;
        findMany: (options?: any) => Promise<any[]>;
        findUnique: (options?: any) => Promise<any>;
    };
    linhaSimulacao: {
        create: (data: any) => Promise<any>;
    };
    documento: {
        create: (data: any) => Promise<any>;
    };
}
