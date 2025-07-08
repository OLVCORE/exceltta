import { ProdutoSimulacaoDto } from '../../tributario/dto/simular-tributos.dto';

export class CriarSimulacaoDto {
  empresaId: string;
  tipo: string; // nacional, importacao, etc.
  produtos: ProdutoSimulacaoDto[];
} 