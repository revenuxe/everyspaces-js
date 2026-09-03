"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, PhoneCall } from "lucide-react";
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

export default function HeroSection({
  locationLabel = "Bangalore",
  sourcePage = "/",
  formName = "Homepage Quote Form",
  headingPrefix = "Best Interior Designer",
  description = "Full home interiors, 2BHK and 3BHK designs, modular kitchens, wardrobes, and more.",
}: HeroSectionProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", projectType: "" });

  const update = (key: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await (supabase.from("leads") as any).insert({
        form_name: formName,
        source_page: sourcePage,
        data: formData,
      });
      if (error) throw error;
      router.push("/thank-you");
    } catch (error) {
      console.error("Hero quote form error:", error);
      toast({ title: "Unable to submit", description: "Please try again or contact us on WhatsApp.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0d3b4f] pt-[84px] text-white md:pt-[76px]">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Contemporary home interior by EverySpaces" fill priority sizes="100vw" className="origin-top scale-[1.16] object-cover object-top md:scale-100 md:object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,31,43,.85) 0%, rgba(7,31,43,.70) 55%, rgba(7,31,43,.48) 100%)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,43,.32)" }} />
      </div>
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-secondary/20 blur-[110px]" />

      <div className="relative mx-auto grid min-h-[400px] max-w-7xl translate-y-8 items-center px-5 py-8 md:min-h-[590px] md:translate-y-0 md:grid-cols-[1.2fr_.8fr] md:px-10 md:py-12">
        <div className="max-w-3xl">
          <h1 className="hero-display max-w-[680px] text-[2.9rem] leading-[1.02] sm:text-[3.35rem] md:text-[3rem] lg:text-[3.15rem]">
            <span className="block md:whitespace-nowrap">{headingPrefix}</span>
            <span className="block md:whitespace-nowrap">in {locationLabel}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg">{description}</p>
          <div className="hero-cta-row mt-8">
            <Link href="/contact" data-open-consultation className="hero-cta-primary group inline-flex items-center gap-3 whitespace-nowrap bg-secondary py-4 text-sm font-semibold text-secondary-foreground shadow-[0_10px_22px_-12px_rgb(209_101_66_/_72%)] transition-all duration-300 hover:-translate-y-1">
              Book a Free Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="tel:+919886579923" className="hero-cta-secondary group inline-flex items-center gap-2 whitespace-nowrap border border-white/20 bg-black/35 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>

        <div className="hidden w-[25rem] justify-self-end rounded-3xl border border-white/20 bg-white/95 p-6 text-foreground shadow-elevated backdrop-blur-md md:block">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Start your project</p>
          <h2 className="!mt-2 !text-2xl font-semibold leading-tight text-primary md:!text-3xl">Get a quote for your home</h2>
          <p className="mb-5 mt-3 text-sm leading-6 text-muted-foreground">Tell us about your space and we&apos;ll call you back.</p>
          <form onSubmit={submit} className="grid grid-cols-2 gap-3">
            <input required value={formData.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" className="premium-input" />
            <input required type="tel" pattern="[0-9]{10}" value={formData.mobile} onChange={(event) => update("mobile", event.target.value)} placeholder="Mobile number" className="premium-input" />
            <input required type="email" value={formData.email} onChange={(event) => update("email", event.target.value)} placeholder="Email address" className="premium-input" />
            <input required value={formData.projectType} onChange={(event) => update("projectType", event.target.value)} placeholder="Project type" className="premium-input" />
            <button type="submit" disabled={isSubmitting} className="btn-terracotta col-span-2 w-full rounded-xl py-3.5 font-semibold text-secondary-foreground disabled:opacity-50">
              {isSubmitting ? "Submitting..." : "Get a Quote"}
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-muted-foreground">No spam — we&apos;ll only contact you about your project.</p>
        </div>
      </div>
    </section>
  );
}
