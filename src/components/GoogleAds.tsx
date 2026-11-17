"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackAdsAction } from "@/lib/google-ads";

export default function GoogleAds() {
  const pathname = usePathname();
  const excluded = /^\/(admin|studio)(\/|$)/.test(pathname ?? "");

  useEffect(() => {
    if (excluded) return;
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href);
      if (url.protocol === "tel:") trackAdsAction("phone");
      else if (url.protocol === "mailto:") trackAdsAction("email");
      else if (["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname)) trackAdsAction("whatsapp");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [excluded]);

  return null;
}
