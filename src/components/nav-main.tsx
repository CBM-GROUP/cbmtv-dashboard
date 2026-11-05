"use client";

import Link from "next/link";
import { Fragment } from "react";
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
        {navData.map((item) => {
          const allowed = !item.permission || user?.is_superuser || user?.dashboard_permissions?.includes(item.permission);
          const children = item.children?.filter((child) => !child.permission || user?.is_superuser || user?.dashboard_permissions?.includes(child.permission));
          if (!allowed || (item.children && !children?.length)) return null;
          return <Fragment key={item.title}>
            <SidebarMenuItem>
              {item.title === 'General' ? <SidebarMenuButton tooltip="General" aria-label="General navigation group">{item.icon}<span>{item.title}</span></SidebarMenuButton> :
                <SidebarMenuButton tooltip={item.title} isActive={pathname === item.path || (item.path !== "/" && pathname.startsWith(`${item.path}/`))} render={<Link href={item.path} onClick={() => isMobile && setOpenMobile(false)} />}>
                  {item.icon}<span>{item.title}</span>
                </SidebarMenuButton>}
            </SidebarMenuItem>
            {children?.map((child) => <SidebarMenuItem key={child.path} className="pl-5 group-data-[collapsible=icon]:hidden">
              <SidebarMenuButton isActive={pathname === child.path || (child.path !== "/" && pathname.startsWith(`${child.path}/`))} render={<Link href={child.path} onClick={() => isMobile && setOpenMobile(false)} />}>
                <span>{child.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>)}
          </Fragment>;
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
