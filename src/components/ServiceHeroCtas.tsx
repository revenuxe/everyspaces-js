"use client";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PhoneCall } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ServiceHeroCtas() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const content = document.querySelector<HTMLElement>(".service-hero .container > div:first-child");
    if (!content) return;

    const host = document.createElement("div");
    host.dataset.serviceHeroCtas = "true";
    content.appendChild(host);
    setTarget(host);

    return () => {
      host.remove();
      setTarget(null);
    };
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="hero-cta-row mt-8">
      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hero-cta-primary inline-flex items-center gap-3 bg-secondary py-4 text-sm font-semibold text-secondary-foreground shadow-[0_10px_22px_-12px_rgb(1_55_32_/_32%)] transition-all hover:-translate-y-0.5">
        <WhatsAppIcon /> Book a Free Consultation
      </a>
      <a href="tel:+919886579923" className="hero-cta-secondary inline-flex items-center gap-2 whitespace-nowrap border border-white/20 bg-black/35 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50">
        <PhoneCall className="h-4 w-4" /> Call Now
      </a>
    </div>,
    target,
  );
}
