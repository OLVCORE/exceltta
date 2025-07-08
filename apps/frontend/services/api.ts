import { getToken } from './auth';

export async function uploadDocumento(file: File, tipo: string) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('tipo', tipo);
  const res = await fetch('/api/upload/documento', {
    method: 'POST',
    body: formData,
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return res.json();
}

export async function simularViabilidade(produtos: any[]) {
  const res = await fetch('/api/simulacao', {
    method: 'POST',
    body: JSON.stringify({ produtos }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.json();
} 