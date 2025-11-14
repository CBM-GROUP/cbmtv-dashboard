
"use client";

import { GuestGuard } from "@/features/auth/guard";
import { AuthLayout } from "@/layouts/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GuestGuard>
      <AuthLayout>{children}</AuthLayout>
    </GuestGuard>
  );
}
