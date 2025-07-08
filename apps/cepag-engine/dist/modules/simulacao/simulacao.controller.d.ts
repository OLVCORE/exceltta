import { SimulacaoService } from './simulacao.service';
export declare class SimulacaoController {
    private readonly simulacaoService;
    constructor(simulacaoService: SimulacaoService);
    criarSimulacao(body: {
        empresaId: string;
        tipo: string;
        linhas: any[];
    }): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
