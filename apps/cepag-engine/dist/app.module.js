"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma/prisma.service");
const empresa_module_1 = require("./modules/empresa/empresa.module");
const usuario_module_1 = require("./modules/usuario/usuario.module");
const auth_module_1 = require("./modules/auth/auth.module");
const upload_module_1 = require("./modules/upload/upload.module");
const tributario_module_1 = require("./modules/tributario/tributario.module");
const simulacao_module_1 = require("./modules/simulacao/simulacao.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            empresa_module_1.EmpresaModule,
            usuario_module_1.UsuarioModule,
            auth_module_1.AuthModule,
            upload_module_1.UploadModule,
            tributario_module_1.TributarioModule,
            simulacao_module_1.SimulacaoModule,
        ],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map