"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaModule = void 0;
const common_1 = require("@nestjs/common");
const empresa_service_1 = require("./empresa.service");
const empresa_controller_1 = require("./empresa.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let EmpresaModule = class EmpresaModule {
};
exports.EmpresaModule = EmpresaModule;
exports.EmpresaModule = EmpresaModule = __decorate([
    (0, common_1.Module)({
        controllers: [empresa_controller_1.EmpresaController],
        providers: [empresa_service_1.EmpresaService, prisma_service_1.PrismaService],
        exports: [empresa_service_1.EmpresaService],
    })
], EmpresaModule);
//# sourceMappingURL=empresa.module.js.map