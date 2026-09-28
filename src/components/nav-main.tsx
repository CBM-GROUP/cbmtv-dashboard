"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAuth } from "@/features/auth/context";
import { navData } from "@/layouts/nav-config-dashboard";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavMain() {
  const pathname = usePathname();
  const { user } = useAuth()!;
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Management</SidebarGroupLabel>
      <SidebarMenu>
        {navData.filter((item) => !item.adminOnly || user?.role === "admin").map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarMenuButton
              tooltip={item.title}
              isActive={pathname === item.path || (item.path !== "/" && pathname.startsWith(`${item.path}/`))}
              render={<Link href={item.path} onClick={() => isMobile && setOpenMobile(false)} />}
            >
              {item.icon}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
