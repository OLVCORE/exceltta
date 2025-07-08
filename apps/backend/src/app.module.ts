import { Module } from '@nestjs/common';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthModule } from './modules/auth/auth.module';
import { UploadModule } from './modules/upload/upload.module';
import { TributarioModule } from './modules/tributario/tributario.module';
import { SimulacaoModule } from './modules/simulacao/simulacao.module';
import { FornecedorModule } from './modules/fornecedor/fornecedor.module';
import { LicitacaoModule } from './modules/licitacao/licitacao.module';
// Importe os outros módulos conforme forem criados

@Module({
  imports: [
    EmpresaModule,
    UsuarioModule,
    AuthModule,
    UploadModule,
    TributarioModule,
    SimulacaoModule,
    FornecedorModule,
    LicitacaoModule
  ],
})
export class AppModule {} 