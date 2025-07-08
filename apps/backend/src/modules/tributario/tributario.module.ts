import { Module } from '@nestjs/common';
import { TributarioService } from './tributario.service';
import { TributarioController } from './tributario.controller';

@Module({
  controllers: [TributarioController],
  providers: [TributarioService],
  exports: [TributarioService]
})
export class TributarioModule {} 