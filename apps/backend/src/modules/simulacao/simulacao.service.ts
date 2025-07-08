import { Injectable } from '@nestjs/common';
import { CriarSimulacaoDto } from './dto/criar-simulacao.dto';
import { TributarioService } from '../tributario/tributario.service';
import { ResultadoSimulacaoDto } from './dto/resultado-simulacao.dto';

@Injectable()
export class SimulacaoService {
  constructor(private tributarioService: TributarioService) {}

  async criarSimulacao(dto: CriarSimulacaoDto): Promise<ResultadoSimulacaoDto> {
    const produtosTributados = await this.tributarioService.simularTributos({
      empresaId: dto.empresaId,
      regimeTributario: 'LUCRO_PRESUMIDO', // Exemplo, pode vir do perfil da empresa
      produtos: dto.produtos
    });

    const custoTotalProjeto = produtosTributados.reduce((acc, p) => acc + p.custoTotal, 0);
    const margemTotalProjeto = produtosTributados.reduce((acc, p) => acc + p.margemPotencial, 0);

    return {
      produtos: produtosTributados,
      custoTotalProjeto,
      margemTotalProjeto
    };
  }
} 