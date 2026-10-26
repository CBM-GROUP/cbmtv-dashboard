"use client";

import { AuthProvider } from "@/features/auth/context";
import { ThemeProvider } from "@/theme/theme-provider";
import { UploadProvider } from "@/components/upload/upload-manager";
import { UploadTray } from "@/components/upload/upload-tray";
import { PendingCreations } from "@/components/upload/pending-creations";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {/* Above the router content, so an upload survives closing a dialog or
            moving to another page. */}
        <UploadProvider>
          {children}
          <UploadTray />
          <PendingCreations />
        </UploadProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
