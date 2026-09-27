
"use client";

import { GuestGuard } from "@/features/auth/guard";
import { AuthLayout } from "@/layouts/auth";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <GuestGuard>
      {pathname === "/sign-in" ? children : <AuthLayout>{children}</AuthLayout>}
    </GuestGuard>
  );
}
