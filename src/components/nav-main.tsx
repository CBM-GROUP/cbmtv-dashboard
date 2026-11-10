"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { useAuth } from "@/features/auth/context";
import { navData, type NavItem } from "@/layouts/nav-config-dashboard";
import { visibleItem, isActive, containsActive } from "@/lib/dashboard-navigation";
import {
  SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar,
} from "@/components/ui/sidebar";

function NavigationItem({ item, location, expanded, toggle, closeMobile, depth = 0 }: {
  item: NavItem; location: string; expanded: Set<string>; toggle: (path: string) => void;
  closeMobile: () => void; depth?: number;
}) {
  const children = item.children ?? [];
  const active = containsActive(item, location);
  const button = children.length ? (
    <SidebarMenuButton type="button" tooltip={item.title} isActive={active}
      aria-expanded={expanded.has(item.path)} aria-label={item.title}
      onClick={() => toggle(item.path)}>
      {item.icon}<span>{item.title}</span><ChevronDown aria-hidden="true" className={`ml-auto transition-transform ${expanded.has(item.path) ? "rotate-180" : ""}`} />
    </SidebarMenuButton>
  ) : (
    <SidebarMenuButton tooltip={item.title} isActive={isActive(item, location)}
      render={<Link href={item.path} onClick={closeMobile} />}>
      {item.icon}<span>{item.title}</span>
    </SidebarMenuButton>
  );
  if (depth === 0) return <SidebarMenuItem key={item.path}>{button}
    {children.length > 0 && expanded.has(item.path) && <SidebarMenuSub>{children.map(child =>
      <NavigationItem key={child.path} item={child} location={location} expanded={expanded} toggle={toggle} closeMobile={closeMobile} depth={1} />
    )}</SidebarMenuSub>}
  </SidebarMenuItem>;
  return <SidebarMenuSubItem key={item.path}>
    {children.length ? <><button type="button" aria-expanded={expanded.has(item.path)}
      onClick={() => toggle(item.path)} className="flex h-7 w-full items-center gap-2 rounded-md px-2 text-sm hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:outline-sidebar-ring">
      <span>{item.title}</span><ChevronDown aria-hidden="true" className={`ml-auto size-4 transition-transform ${expanded.has(item.path) ? "rotate-180" : ""}`} />
    </button>{expanded.has(item.path) && <SidebarMenuSub>{children.map(child =>
      <NavigationItem key={child.path} item={child} location={location} expanded={expanded} toggle={toggle} closeMobile={closeMobile} depth={depth + 1} />
    )}</SidebarMenuSub>}</> :
      <SidebarMenuSubButton isActive={isActive(item, location)} render={<Link href={item.path} onClick={closeMobile} />}>{item.title}</SidebarMenuSubButton>}
  </SidebarMenuSubItem>;
}

export function NavMain() {
  const pathname = usePathname();
  const { user } = useAuth()!;
  const { isMobile, setOpenMobile, state, setOpen } = useSidebar();
  const [hash, setHash] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const location = pathname + hash;
  const items = useMemo(() => navData.map(item => visibleItem(item, user)).filter((item): item is NavItem => item !== null), [user]);

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);
  useEffect(() => {
    const open: string[] = [];
    const walk = (item: NavItem) => {
      if (item.children?.length && containsActive(item, location)) open.push(item.path);
      item.children?.forEach(walk);
    };
    items.forEach(walk);
    if (open.length) setExpanded(previous => new Set([...previous, ...open]));
  }, [location, items]);
  const toggle = (path: string) => {
    if (!isMobile && state === "collapsed") setOpen(true);
    setExpanded(previous => {
      const next = new Set(previous);
      if (next.has(path)) next.delete(path); else next.add(path);
      return next;
    });
  };
  const closeMobile = () => { if (isMobile) setOpenMobile(false); };
  return <SidebarGroup><SidebarGroupLabel>Management</SidebarGroupLabel><SidebarMenu>
    {items.map(item => <NavigationItem key={item.path} item={item} location={location} expanded={expanded} toggle={toggle} closeMobile={closeMobile} />)}
  </SidebarMenu></SidebarGroup>;
}
