"use client";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, PhoneCall } from "lucide-react";

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

  return (
    <section data-quote-form="inline" className="relative overflow-hidden bg-[#003B29] pt-[84px] text-white md:pt-[76px]">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Contemporary home interior by EverySpaces" fill priority sizes="100vw" className="origin-top scale-[1.16] object-cover object-top md:scale-100 md:object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,39,27,.88) 0%, rgba(0,39,27,.65) 55%, rgba(0,39,27,.22) 100%)" }} />
      </div>
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-secondary/20 blur-[110px]" />

      <div className="relative mx-auto grid min-h-[420px] max-w-7xl items-center gap-8 px-5 py-10 md:min-h-[540px] md:px-10 md:py-12 xl:grid-cols-[1.2fr_.8fr]">
        <div className="min-w-0 max-w-3xl">
          <h1 className="hero-display max-w-[680px] text-[2.9rem] leading-[1.06] sm:text-[3.5rem] lg:text-[4rem]">
            <span className="block">{headingPrefix}</span>
            <span className="block">in {locationLabel}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg">{description}</p>
          <div className="hero-cta-row mt-8">
            <Link href="/contact" data-open-consultation className="hero-cta-primary group inline-flex items-center gap-3 bg-secondary py-4 text-sm font-semibold text-secondary-foreground shadow-[0_10px_22px_-12px_rgb(194_74_8_/_72%)] transition-all duration-300 hover:-translate-y-1">
              <WhatsAppIcon /> Book a Free Consultation
            </Link>
            <a href="tel:+919886579923" className="hero-cta-secondary group inline-flex items-center gap-2 whitespace-nowrap border border-white/20 bg-black/35 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
          </div>
          <Link href="/portfolio" className="mt-7 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm text-white/85 hover:text-white">Explore our work <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="hidden w-full max-w-[25rem] justify-self-end rounded-[12px] border border-white/20 bg-[#FAF8F2] p-8 text-foreground xl:block">
          <h2 className="!mt-2 !text-2xl font-semibold leading-tight text-primary md:!text-3xl">Get a quote for your home</h2>
          <p className="mb-5 mt-3 text-sm leading-6 text-muted-foreground">Tell us about your space and we&apos;ll call you back.</p>
          <QuoteForm sourcePage={sourcePage} formName={formName} />
          <p className="mt-4 text-center text-xs text-muted-foreground">No spam — we&apos;ll only contact you about your project.</p>
        </div>
      </div>
    </section>
  );
}
