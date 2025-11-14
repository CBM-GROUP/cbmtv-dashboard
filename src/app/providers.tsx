"use client";

import { AuthProvider } from "@/features/auth/context";
import { ThemeProvider } from "@/theme/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
}
