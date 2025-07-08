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
exports.SimulacaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SimulacaoService = class SimulacaoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criarSimulacao(empresaId, tipo, linhas) {
        const simulacao = await this.prisma.simulacao.create({
            data: {
                empresaId,
                tipo,
                status: 'rascunho',
            },
        });
        for (const linha of linhas) {
            await this.prisma.linhaSimulacao.create({
                data: {
                    simulacaoId: simulacao.id,
                    produtoId: linha.produtoId,
                    origemUF: linha.origemUF,
                    destinoUF: linha.destinoUF,
                    valorUnitario: linha.valorUnitario,
                    quantidade: linha.quantidade,
                    tipoOperacao: linha.tipoOperacao,
                    resultadoTributario: {},
                    resultadoViabilidade: {},
                },
            });
        }
        return simulacao;
    }
    async findAll() {
        return this.prisma.simulacao.findMany({
            include: {
                empresa: true,
                linhas: {
                    include: {
                        produto: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return this.prisma.simulacao.findUnique({
            where: { id },
            include: {
                empresa: true,
                linhas: {
                    include: {
                        produto: true,
                    },
                },
            },
        });
    }
};
exports.SimulacaoService = SimulacaoService;
exports.SimulacaoService = SimulacaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SimulacaoService);
//# sourceMappingURL=simulacao.service.js.map