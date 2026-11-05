"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsGearFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/features/auth/context";

type Destination = { label: string; href: string; permission?: string };

function sectionFor(pathname: string): { name: string; destinations: Destination[] } | null {
  if (pathname.startsWith('/advertising')) return { name: 'Advertising', destinations: [
    { label: 'Manage paid placements', href: '/advertising#placements', permission: 'adverts' },
    { label: 'Manage homepage placement order', href: '/homepage', permission: 'content' },
  ] };
  if (pathname.startsWith('/homepage')) return { name: 'Homepage', destinations: [
    { label: 'Homepage configuration', href: '/homepage', permission: 'content' },
    { label: 'Editorial hero timing', href: '/hero-settings', permission: 'settings' },
  ] };
  if (pathname.startsWith('/content') || pathname.startsWith('/advert-list')) return { name: 'Content', destinations: [
    { label: 'Manage genres', href: '/content/genres', permission: 'content' },
    { label: 'Manage content', href: '/content-list', permission: 'content' },
  ] };
  if (pathname.startsWith('/channel')) return { name: 'Channels', destinations: [
    { label: 'Manage channels', href: '/channel-list', permission: 'channels' },
  ] };
  if (pathname.startsWith('/user-management')) return { name: 'User management', destinations: [
    { label: 'Manage users and roles', href: '/user-management', permission: 'users' },
  ] };
  if (pathname.startsWith('/settings') || pathname.startsWith('/hero-settings')) return { name: 'General', destinations: [
    { label: 'General settings', href: '/settings', permission: 'settings' },
    { label: 'Editorial adverts', href: '/advert-list', permission: 'adverts' },
  ] };
  return null;
}

export function ContextualSettings() {
  const pathname = usePathname();
  const { user } = useAuth()!;
  const section = sectionFor(pathname);
  if (!section) return null;
  const destinations = section.destinations.filter((item) => !item.permission || user?.is_superuser || user?.dashboard_permissions?.includes(item.permission as 'channels' | 'content' | 'adverts' | 'settings' | 'users' | 'analytics'));
  if (!destinations.length) return null;
  return <Sheet>
    <SheetTrigger render={<Button variant="outline" size="sm" aria-label={`${section.name} settings`} className="ml-auto shrink-0" />}><BsGearFill /> <span className="hidden sm:inline">Settings</span></SheetTrigger>
    <SheetContent side="right">
      <SheetHeader><SheetTitle>{section.name} settings</SheetTitle><SheetDescription>Open existing controls for this section.</SheetDescription></SheetHeader>
      <nav aria-label={`${section.name} settings`} className="grid gap-2 px-4">
        {destinations.map((item) => <Button key={item.href} variant="outline" className="justify-start" render={<Link href={item.href} />}>{item.label}</Button>)}
      </nav>
    </SheetContent>
  </Sheet>;
}
