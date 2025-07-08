"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let EmpresaService = class EmpresaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEmpresaDto) {
        return this.prisma.empresa.create({
            data: createEmpresaDto,
        });
    }
    async findAll() {
        return this.prisma.empresa.findMany({
            include: {
                usuarios: true,
                simulacoes: true,
            },
        });
    }
    async findOne(id) {
        return this.prisma.empresa.findUnique({
            where: { id },
            include: {
                usuarios: true,
                simulacoes: true,
            },
        });
    }
    async update(id, updateEmpresaDto) {
        return this.prisma.empresa.update({
            where: { id },
            data: updateEmpresaDto,
        });
    }
    async remove(id) {
        return this.prisma.empresa.delete({
            where: { id },
        });
    }
};
exports.EmpresaService = EmpresaService;
exports.EmpresaService = EmpresaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmpresaService);
//# sourceMappingURL=empresa.service.js.map