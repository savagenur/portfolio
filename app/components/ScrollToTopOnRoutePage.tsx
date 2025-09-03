// app/_components/ScrollToTopOnRouteChange.tsx
"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    // next tick so layout is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [pathname, search?.toString()]);

  return null;
}
