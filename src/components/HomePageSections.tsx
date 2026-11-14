"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TrustedPartnersSection from "@/components/TrustedPartnersSection";
import StudioServices from "@/components/StudioServices";
import GallerySection from "@/components/GallerySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ExploreBangaloreCTA from "@/components/ExploreBangaloreCTA";
import BangaloreLocalitiesSection from "@/components/BangaloreLocalitiesSection";

type HomePageSectionsProps = {
  children?: ReactNode;
  localContent?: ReactNode;
  faqs?: { question: string; answer: string }[];
  locationLabel?: string;
};

export default function HomePageSections({ children, localContent, faqs, locationLabel }: HomePageSectionsProps) {
  return <>
        <TrustedPartnersSection />
        <StudioServices locationLabel={locationLabel} />
        {localContent}
        <GallerySection locationLabel={locationLabel} />
        <HowItWorksSection />
        {children}
        <TestimonialsSection />
        <FAQSection faqs={faqs} cityOverride={locationLabel} />
        <section className="studio-invitation bg-primary text-white">
          <div className="container px-5 md:px-8 md:flex md:items-end md:justify-between md:gap-10">
            <div><p className="text-[11px] uppercase tracking-[.2em] text-white/65">Your next chapter</p><h2 className="mt-5 max-w-2xl text-white">Let’s make room<br />for your ideas.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/75">Tell us about your home, your plans, and what matters to you. We’ll help you find a direction.</p></div>
            <Link href="/contact" data-open-consultation className="mt-8 inline-flex items-center gap-6 rounded-lg bg-secondary px-6 py-4 text-sm font-medium text-white">Book a Free Consultation <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </section>
        <ExploreBangaloreCTA />
        <BangaloreLocalitiesSection />
  </>;
}
