"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulacaoModule = void 0;
const common_1 = require("@nestjs/common");
const simulacao_service_1 = require("./simulacao.service");
const simulacao_controller_1 = require("./simulacao.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let SimulacaoModule = class SimulacaoModule {
};
exports.SimulacaoModule = SimulacaoModule;
exports.SimulacaoModule = SimulacaoModule = __decorate([
    (0, common_1.Module)({
        controllers: [simulacao_controller_1.SimulacaoController],
        providers: [simulacao_service_1.SimulacaoService, prisma_service_1.PrismaService],
        exports: [simulacao_service_1.SimulacaoService],
    })
], SimulacaoModule);
//# sourceMappingURL=simulacao.module.js.map