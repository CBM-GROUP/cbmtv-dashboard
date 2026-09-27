"use client";

import { Fragment } from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { layoutSectionVars } from "../core/css-vars";
import { dashboardLayoutVars } from "./css-vars";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <TooltipProvider>
      <GlobalStyles styles={(theme) => ({ body: { ...layoutSectionVars(theme), ...dashboardLayoutVars(theme) } })} />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  {segments.length ? <BreadcrumbLink render={<Link href="/" />}>Dashboard</BreadcrumbLink> : <BreadcrumbPage>Dashboard</BreadcrumbPage>}
                </BreadcrumbItem>
                {segments.map((segment, index) => {
                  const path = `/${segments.slice(0, index + 1).join("/")}`;
                  const label = segment.replace(/-/g, " ");
                  return (
                    <Fragment key={path}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {index === segments.length - 1 ? <BreadcrumbPage className="capitalize">{label}</BreadcrumbPage> : <BreadcrumbLink render={<Link href={path} />} className="capitalize">{label}</BreadcrumbLink>}
                      </BreadcrumbItem>
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
