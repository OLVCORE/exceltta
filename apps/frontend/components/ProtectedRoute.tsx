import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user, router]);

  if (!user) return <div>Carregando...</div>;
  return <>{children}</>;
} 