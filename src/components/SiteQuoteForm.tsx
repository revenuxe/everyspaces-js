"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

function getProjectType(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments.at(-1) || "Home Interior";
  return lastSegment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function SiteQuoteForm() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const { toast } = useToast();
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const projectType = getProjectType(pathname);
  const [data, setData] = useState({ name: "", mobile: "", email: "", projectType });
  const excluded = pathname === "/" || pathname.startsWith("/admin") || pathname.startsWith("/studio") || pathname === "/thank-you";

  useEffect(() => {
    if (excluded) return;
    const hero = document.querySelector("main > section");
    if (!hero) return;
    const host = document.createElement("div");
    host.dataset.quoteForm = "after-hero";
    hero.appendChild(host);
    setTarget(host);
    return () => { host.remove(); setTarget(null); };
  }, [pathname, excluded]);

  useEffect(() => {
    setData((current) => ({ ...current, projectType }));
  }, [projectType]);

  if (excluded || !target) return null;
  const service = projectType;
  const update = (field: keyof typeof data, value: string) => setData((current) => ({ ...current, [field]: value }));
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setSubmitting(true);
    try {
      const { error } = await (supabase.from("leads") as any).insert({ form_name: `${service} Quote Form`, source_page: pathname, data: { ...data, service, enquiry_page: pathname } });
      if (error) throw error;
      router.push("/thank-you");
    } catch (error) {
      console.error("Quote form error:", error);
      toast({ title: "Unable to submit", description: "Please try again or contact us on WhatsApp.", variant: "destructive" });
    } finally { setSubmitting(false); }
  };

  return createPortal(<section className="relative z-20 w-full flex-none bg-transparent px-4 py-10 md:absolute md:right-[7%] md:top-1/2 md:w-[27rem] md:-translate-y-1/2 md:p-0"><div className="mx-auto max-w-5xl rounded-3xl bg-white p-5 shadow-elevated md:p-6"><div className="mb-5 text-center"><p className="text-xs font-semibold uppercase tracking-[.18em] text-secondary">Start your project</p><h2 className="!mt-2 !text-2xl font-semibold text-primary">Get a quote for your home</h2><p className="mt-2 text-sm text-muted-foreground">Tell us about your space and we’ll call you back.</p></div><form onSubmit={submit} className="grid grid-cols-2 gap-3"><input required value={data.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" className="premium-input" /><input required type="tel" pattern="[0-9]{10}" value={data.mobile} onChange={(event) => update("mobile", event.target.value)} placeholder="Mobile number" className="premium-input" /><input required type="email" value={data.email} onChange={(event) => update("email", event.target.value)} placeholder="Email address" className="premium-input" /><input required value={data.projectType} onChange={(event) => update("projectType", event.target.value)} placeholder="Project type" className="premium-input" /><button type="submit" disabled={submitting} className="btn-terracotta col-span-2 w-full rounded-xl py-3.5 font-semibold text-secondary-foreground disabled:opacity-50">{submitting ? "Submitting..." : "Get a Quote"}</button></form><p className="mt-4 text-center text-xs text-muted-foreground">No spam — we’ll only contact you about your project.</p></div></section>, target);
}
