import { Injectable } from '@nestjs/common';
import { ProdutoExtraidoDto } from '../dto/produto-extraido.dto';

@Injectable()
export class IAService {
  async extrairProdutos(filePath: string, tipo: string): Promise<ProdutoExtraidoDto[]> {
    // Aqui você integraria com OpenAI, Claude, ou outro serviço de OCR/NLP
    // MOCK: retorna produtos fictícios para teste
    return [
      { descricao: 'Notebook', ncm: '8471.50.10', quantidade: 10, unidade: 'un', valorUnitario: 5000 },
      { descricao: 'Impressora', ncm: '8443.32.99', quantidade: 5, unidade: 'un', valorUnitario: 2000 }
    ];
  }
} 