import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuração de CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'],
    credentials: true,
  });
  
  // Prefixo global da API
  app.setGlobalPrefix('api');
  
  const port = process.env.PORT || 3003;
  await app.listen(port);
  
  console.log(`🚀 Exceltta Backend rodando na porta ${port}`);
  console.log(`API disponível em: http://localhost:${port}/api`);
}
bootstrap(); 