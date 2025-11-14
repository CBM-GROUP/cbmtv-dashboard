import type { ReactNode } from 'react';

import { useEffect } from 'react';

import { useRouter } from '@/hooks';

import { useAuth } from './context';

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth()!;
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-in');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <section className="flex items-center justify-center w-screen h-screen">
        <div>Loading...</div>
      </section>
    );
  }

  return <>{children}</>;
};

export const GuestGuard = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth()!;
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <section className="flex items-center justify-center w-screen h-screen">
        <div>Loading...</div>
      </section>
    );
  }

  return <>{children}</>;
};

export const AdminGuard = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth()!;
  const router = useRouter();

  useEffect(() => {
    if (!loading && user?.role !== 'admin') {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <section className="flex items-center justify-center w-screen h-screen">
        <div>Loading...</div>
      </section>
    );
  }

  return <>{children}</>;
};
