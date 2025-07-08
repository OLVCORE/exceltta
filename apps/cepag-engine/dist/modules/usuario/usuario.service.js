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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcryptjs");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUsuarioDto) {
        const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, 10);
        return this.prisma.usuario.create({
            data: Object.assign(Object.assign({}, createUsuarioDto), { senha: hashedPassword }),
        });
    }
    async findAll() {
        return this.prisma.usuario.findMany({
            include: {
                empresa: true,
            },
        });
    }
    async findOne(id) {
        return this.prisma.usuario.findUnique({
            where: { id },
            include: {
                empresa: true,
            },
        });
    }
    async findByEmail(email) {
        return this.prisma.usuario.findUnique({
            where: { email },
            include: {
                empresa: true,
            },
        });
    }
    async update(id, updateUsuarioDto) {
        const updateData = Object.assign({}, updateUsuarioDto);
        if (updateData.senha) {
            updateData.senha = await bcrypt.hash(updateData.senha, 10);
        }
        return this.prisma.usuario.update({
            where: { id },
            data: updateData,
        });
    }
    async remove(id) {
        return this.prisma.usuario.delete({
            where: { id },
        });
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map