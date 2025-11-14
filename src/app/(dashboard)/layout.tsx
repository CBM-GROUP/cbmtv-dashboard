
"use client";

import { AuthGuard } from "@/features/auth/guard";
import { DashboardLayout } from "@/layouts/dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
