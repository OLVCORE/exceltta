export async function login(email: string, senha: string) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  localStorage.setItem('token', data.access_token);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export function getToken() {
  return localStorage.getItem('token');
}

export function getUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export async function uploadDocumento(file: File, tipo: string) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('tipo', tipo);
  const res = await fetch('/api/upload/documento', {
    method: 'POST',
    body: formData,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return res.json();
}

export async function simularViabilidade(produtos: any[]) {
  const res = await fetch('/api/simulacao', {
    method: 'POST',
    body: JSON.stringify({ produtos }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return res.json();
} 