import type { ReactNode } from 'react';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useRouter } from '@/hooks';

import { hasDashboardAccess, useAuth } from './context';

function requiredSection(pathname: string) {
  if (pathname.startsWith('/channel-list')) return 'channels';
  if (pathname.startsWith('/content-list') || pathname.startsWith('/content/') || pathname.startsWith('/season/')) return 'content';
  if (pathname.startsWith('/advert-list')) return 'adverts';
  if (pathname.startsWith('/settings') || pathname.startsWith('/hero-settings')) return 'settings';
  if (pathname.startsWith('/user-management')) return 'users';
  return null;
}

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth()!;
  const router = useRouter();
  const pathname = usePathname();
  const hasAccess = hasDashboardAccess(user);
  const section = requiredSection(pathname);
  const canOpen = !section || Boolean(user?.is_staff || user?.is_superuser || user?.dashboard_permissions?.includes(section));

  useEffect(() => {
    if (!loading && !hasAccess) {
      router.push('/sign-in');
    } else if (!loading && !canOpen) {
      router.push('/');
    }
  }, [hasAccess, canOpen, loading, router]);

  if (loading || !hasAccess || !canOpen) {
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
    if (!loading && hasDashboardAccess(user)) {
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
    if (!loading && !user?.is_staff && !user?.is_superuser) {
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
