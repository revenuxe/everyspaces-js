"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GOOGLE_ADS_ID, trackAdsAction } from "@/lib/google-ads";

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

  if (excluded) return null;
  return <>
    <Script id="google-ads-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function(){dataLayer.push(arguments);};
      gtag('js', new Date());
      gtag('config', '${GOOGLE_ADS_ID}');
    `}</Script>
    <Script id="google-ads-loader" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
  </>;
}
