import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthModule } from './modules/auth/auth.module';
import { UploadModule } from './modules/upload/upload.module';
import { TributarioModule } from './modules/tributario/tributario.module';
import { SimulacaoModule } from './modules/simulacao/simulacao.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmpresaModule,
    UsuarioModule,
    AuthModule,
    UploadModule,
    TributarioModule,
    SimulacaoModule,
  ],
  providers: [PrismaService],
})
export class AppModule {} 