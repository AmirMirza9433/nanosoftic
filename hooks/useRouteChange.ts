"use client";

import { usePathname } from "next/navigation";

/**
 * Hook that forces re-render on route change.
 * Use this to reset Framer Motion states when navigating back.
 */
export function useRouteChange() {
  const pathname = usePathname();
  return pathname;
}
