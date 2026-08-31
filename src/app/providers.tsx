"use client";

import { AuthProvider } from "@/features/auth/context";
import { ThemeProvider } from "@/theme/theme-provider";
import { UploadProvider } from "@/components/upload/upload-manager";
import { UploadTray } from "@/components/upload/upload-tray";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {/* Above the router content, so an upload survives closing a dialog or
            moving to another page. */}
        <UploadProvider>
          {children}
          <UploadTray />
        </UploadProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
