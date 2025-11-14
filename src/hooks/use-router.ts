import { useMemo } from "react";
import { useRouter as useNextRouter } from "next/navigation";

export function useRouter() {
  const navigate = useNextRouter();

  const router = useMemo(
    () => ({
      back: () => window.history.back(),
      forward: () => window.history.forward(),
      refresh: () => navigate.refresh(),
      push: (href: string) => navigate.push(href),
      replace: (href: string) => navigate.replace(href),
    }),
    [navigate],
  );

  return router;
}
