import { Module } from '@nestjs/common';
import { SimulacaoService } from './simulacao.service';
import { SimulacaoController } from './simulacao.controller';
import { TributarioModule } from '../tributario/tributario.module';

@Module({
  imports: [TributarioModule],
  controllers: [SimulacaoController],
  providers: [SimulacaoService],
  exports: [SimulacaoService]
})
export class SimulacaoModule {} 