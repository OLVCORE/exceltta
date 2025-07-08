import { TributarioService } from './tributario.service';
export declare class TributarioController {
    private readonly tributarioService;
    constructor(tributarioService: TributarioService);
    calcularTributos(body: {
        produto: any;
        origemUF: string;
        destinoUF: string;
    }): Promise<{
        icms: number;
        pis: number;
        cofins: number;
        total: number;
    }>;
}
