import { ResultadoTributosDto } from '../../tributario/dto/resultado-tributos.dto';

export class ResultadoSimulacaoDto {
  produtos: ResultadoTributosDto[];
  custoTotalProjeto: number;
  margemTotalProjeto: number;
} 