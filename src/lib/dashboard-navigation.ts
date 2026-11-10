import type { NavItem } from '@/layouts/nav-config-dashboard';

export type NavigationUser = { is_superuser?: boolean; dashboard_permissions?: string[] } | null;

export function visibleItem(item: NavItem, user: NavigationUser): NavItem | null {
  const children = item.children?.map(child => visibleItem(child, user)).filter((child): child is NavItem => child !== null);
  if (item.permission && !user?.is_superuser && !user?.dashboard_permissions?.includes(item.permission) && !children?.length) return null;
  return { ...item, children };
}

export function isActive(item: NavItem, location: string): boolean {
  const [path, hash] = item.path.split('#');
  const [current, currentHash] = location.split('#');
  if (path !== current) return false;
  return hash ? hash === currentHash : !currentHash;
}

export function containsActive(item: NavItem, location: string): boolean {
  return isActive(item, location) || Boolean(item.children?.some(child => containsActive(child, location)));
}
