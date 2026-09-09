"use client";

import { useEffect } from "react";

// No provider is installed by this page. Emit a local integration event and
// forward to a dataLayer only when the host site has already configured one.
export default function BlogInteractions() {
  useEffect(() => {
    const emit = (action: string, label: string) => {
      const detail = { event: "blog_interaction", action, label, page_path: window.location.pathname };
      window.dispatchEvent(new CustomEvent("everyspaces:blog-interaction", { detail }));
      const host = window as Window & { dataLayer?: Record<string, unknown>[] };
      host.dataLayer?.push(detail);
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("main.journal a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const label = link.textContent?.trim() || href;
      if (link.hasAttribute("data-open-consultation")) emit("consultation", label);
      else if (href === "/price-calculator") emit("price_calculator", label);
      else if (href === "/portfolio") emit("portfolio", label);
      else if (href.startsWith("#")) emit("section_navigation", label);
      else if (href.startsWith("tel:")) emit("phone", label);
    };
    const onLead = (event: Event) => {
      const detail = (event as CustomEvent<{ formName: string }>).detail;
      emit("lead_submission_success", detail.formName);
    };
    document.addEventListener("click", onClick);
    window.addEventListener("everyspaces:lead-submitted", onLead);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("everyspaces:lead-submitted", onLead);
    };
  }, []);
  return null;
}
