"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-interior.jpg";

type HeroSectionProps = {
  locationLabel?: string;
  sourcePage?: string;
  formName?: string;
  headingPrefix?: string;
  description?: string;
};

const HeroSection = ({
  locationLabel = "Bangalore",
  sourcePage = "/",
  formName = "Homepage Quote Form",
  headingPrefix = "Best Interior Designer",
  description = "Full home interiors, 2BHK and 3BHK designs, modular kitchens, wardrobes, and more.",
}: HeroSectionProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", projectType: "" });
  const update = (key: keyof typeof formData, value: string) => setFormData((current) => ({ ...current, [key]: value }));

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setIsSubmitting(true);
    try {
      const { error } = await (supabase.from("leads") as any).insert({ form_name: formName, source_page: sourcePage, data: formData });
      if (error) throw error;
      router.push("/thank-you");
    } catch (error) {
      console.error("Homepage quote form error:", error);
      toast({ title: "Unable to submit", description: "Please try again or contact us on WhatsApp.", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  return <>
    <section className="relative overflow-hidden bg-[#0d3b4f] pt-[92px] text-white md:pt-[76px]">
      <div className="absolute inset-0"><Image src={heroImage} alt="Contemporary home interior by EverySpaces" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#0d3b4f]/75 via-[#0d3b4f]/55 to-[#0d3b4f]/20" /><div className="absolute inset-0 bg-[#0d3b4f]/25" /></div>
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-secondary/20 blur-[110px]" />
      <div className="relative mx-auto grid min-h-[555px] max-w-7xl items-center px-5 py-14 md:min-h-[590px] md:grid-cols-[1.08fr_.92fr] md:px-10"><div className="max-w-2xl">
        <h1 className="hero-display max-w-[820px] text-[3.45rem] leading-[.98] sm:text-6xl md:text-[3.5rem]"><span className="block md:whitespace-nowrap">{headingPrefix}</span><span className="block md:whitespace-nowrap">in {locationLabel}</span></h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">{description}</p>
        <div className="mt-8 flex flex-nowrap items-center gap-4"><Link href="/contact" className="group inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-[14px] bg-secondary px-5 py-4 text-sm font-semibold text-secondary-foreground shadow-[0_10px_22px_-12px_rgb(209_101_66_/_72%)] transition-all duration-300 hover:-translate-y-1 md:px-6">Start your project <ArrowUpRight className="h-4 w-4" /></Link><Link href="/portfolio" className="group inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold text-white">Explore our work <ArrowRight className="h-4 w-4" /></Link></div>
      </div><div className="hidden w-[25rem] justify-self-end rounded-3xl border border-white/20 bg-white/95 p-6 text-foreground shadow-elevated backdrop-blur-md md:block"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Start your project</p><h2 className="!mt-2 !text-2xl font-semibold leading-tight text-primary md:!text-3xl">Get a quote for your home</h2><p className="mb-5 mt-3 text-sm leading-6 text-muted-foreground">Tell us about your space and we’ll call you back.</p><form onSubmit={submit} className="grid grid-cols-2 gap-3"><input required value={formData.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" className="premium-input" /><input required type="tel" pattern="[0-9]{10}" value={formData.mobile} onChange={(event) => update("mobile", event.target.value)} placeholder="Mobile number" className="premium-input" /><input required type="email" value={formData.email} onChange={(event) => update("email", event.target.value)} placeholder="Email address" className="premium-input" /><input required value={formData.projectType} onChange={(event) => update("projectType", event.target.value)} placeholder="Project type" className="premium-input" /><button type="submit" disabled={isSubmitting} className="btn-terracotta col-span-2 w-full rounded-xl py-3.5 font-semibold text-secondary-foreground disabled:opacity-50">{isSubmitting ? "Submitting..." : "Get a Quote"}</button></form><p className="mt-4 text-center text-xs text-muted-foreground">No spam — we’ll only contact you about your project.</p></div></div>
    </section>
    <section className="relative z-10 hidden overflow-hidden bg-[#0d3b4f] px-4 py-10">
      <Image src={heroImage} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-[#0d3b4f]/85" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/20 bg-card/95 p-5 shadow-elevated backdrop-blur-sm md:p-8">
        <div className="mb-6 text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Start your project</p><h2 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">Get a quote for your home</h2></div>
        <form onSubmit={submit} className="grid grid-cols-2 gap-3 md:gap-4">
          <input required value={formData.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" className="premium-input" />
          <input required type="tel" pattern="[0-9]{10}" title="Please enter a 10-digit phone number" value={formData.mobile} onChange={(event) => update("mobile", event.target.value)} placeholder="Mobile number" className="premium-input" />
          <input required type="email" value={formData.email} onChange={(event) => update("email", event.target.value)} placeholder="Email address" className="premium-input" />
          <input required value={formData.projectType} onChange={(event) => update("projectType", event.target.value)} placeholder="Project type (e.g. 2BHK, Villa)" className="premium-input" />
          <button type="submit" disabled={isSubmitting} className="btn-terracotta col-span-2 w-full rounded-xl py-3.5 font-semibold text-secondary-foreground disabled:cursor-not-allowed disabled:opacity-50">{isSubmitting ? "Submitting..." : "Get a Quote"}</button>
        </form><p className="mt-4 text-center text-xs text-muted-foreground">No spam — we’ll only contact you about your project.</p>
      </div>
    </section>
  </>;
};

export default HeroSection;
