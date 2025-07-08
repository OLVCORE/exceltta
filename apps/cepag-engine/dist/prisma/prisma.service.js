"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
let PrismaService = class PrismaService {
    constructor() {
        this.empresa = {
            create: async (data) => (Object.assign({ id: '1' }, data.data)),
            findMany: async (options) => [],
            findUnique: async (options) => null,
            update: async (data) => (Object.assign({ id: data.where.id }, data.data)),
            delete: async (options) => ({ id: '1' }),
        };
        this.usuario = {
            create: async (data) => (Object.assign({ id: '1' }, data.data)),
            findMany: async (options) => [],
            findUnique: async (options) => null,
            update: async (data) => (Object.assign({ id: data.where.id }, data.data)),
            delete: async (options) => ({ id: '1' }),
        };
        this.simulacao = {
            create: async (data) => (Object.assign({ id: '1' }, data.data)),
            findMany: async (options) => [],
            findUnique: async (options) => null,
        };
        this.linhaSimulacao = {
            create: async (data) => (Object.assign({ id: '1' }, data.data)),
        };
        this.documento = {
            create: async (data) => (Object.assign({ id: '1' }, data.data)),
        };
    }
    async $connect() {
        console.log('Mock Prisma connected');
    }
    async $disconnect() {
        console.log('Mock Prisma disconnected');
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map