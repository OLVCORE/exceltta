import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  // Mock temporário para fazer o projeto rodar
  async $connect() {
    console.log('Mock Prisma connected');
  }

  async $disconnect() {
    console.log('Mock Prisma disconnected');
  }

  // Mock dos métodos principais com parâmetros
  empresa = {
    create: async (data: any) => ({ id: '1', ...data.data }),
    findMany: async (options?: any) => [],
    findUnique: async (options?: any) => null,
    update: async (data: any) => ({ id: data.where.id, ...data.data }),
    delete: async (options?: any) => ({ id: '1' }),
  };

  usuario = {
    create: async (data: any) => ({ id: '1', ...data.data }),
    findMany: async (options?: any) => [],
    findUnique: async (options?: any) => null,
    update: async (data: any) => ({ id: data.where.id, ...data.data }),
    delete: async (options?: any) => ({ id: '1' }),
  };

  simulacao = {
    create: async (data: any) => ({ id: '1', ...data.data }),
    findMany: async (options?: any) => [],
    findUnique: async (options?: any) => null,
  };

  linhaSimulacao = {
    create: async (data: any) => ({ id: '1', ...data.data }),
  };

  documento = {
    create: async (data: any) => ({ id: '1', ...data.data }),
  };
} 