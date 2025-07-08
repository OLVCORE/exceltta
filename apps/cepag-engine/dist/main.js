"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'],
        credentials: true,
    });
    app.setGlobalPrefix('api');
    const port = process.env.PORT || 3003;
    await app.listen(port);
    console.log(`🚀 Exceltta Backend rodando na porta ${port}`);
    console.log(`API disponível em: http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map