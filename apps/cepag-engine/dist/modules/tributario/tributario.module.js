"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributarioModule = void 0;
const common_1 = require("@nestjs/common");
const tributario_service_1 = require("./tributario.service");
const tributario_controller_1 = require("./tributario.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let TributarioModule = class TributarioModule {
};
exports.TributarioModule = TributarioModule;
exports.TributarioModule = TributarioModule = __decorate([
    (0, common_1.Module)({
        controllers: [tributario_controller_1.TributarioController],
        providers: [tributario_service_1.TributarioService, prisma_service_1.PrismaService],
        exports: [tributario_service_1.TributarioService],
    })
], TributarioModule);
//# sourceMappingURL=tributario.module.js.map