export class CreateUsuarioDto {
  nome: string;
  email: string;
  senha: string;
  papel?: string; // admin, user, consultor
  empresaId: string;
} 