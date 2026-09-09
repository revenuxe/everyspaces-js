import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero-interior.jpg";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";
import { absoluteUrl } from "@/lib/site-url";
import { companies, comparison } from "@/content/interior-comparison";
import { ComparisonLeadForm, ConsultationLink, QuickAnswer, CompanyComparisonTable, MethodologySection, CompanyReviewSection, QuoteComparisonCTA, SourcesSection, Section } from "@/components/blog/ComparisonSections";
import { EverySpacesDifference, PricingExplainer, MaterialsGuide, ProjectTimeline, WhoShouldChooseWhat, BangaloreGuide, PreBookingChecklist, FinalVerdict, ComparisonFAQ } from "@/components/blog/PlanningGuide";
import "../journal.css";
import BlogInteractions from "@/components/blog/BlogInteractions";

export const metadata: Metadata = {
  title: { absolute: "HomeLane vs DesignCafe vs Truww vs Livspace | EverySpaces" },
  description: comparison.description,
  alternates: { canonical: comparison.path },
  openGraph: { type: "article", title: comparison.title, description: comparison.description, url: comparison.path, modifiedTime: comparison.updated, images: [{ url: absoluteUrl(heroImage.src), width: heroImage.width, height: heroImage.height }] },
  twitter: { card: "summary_large_image", title: comparison.title, description: comparison.description, images: [absoluteUrl(heroImage.src)] },
};

const navigation = [["quick-answer", "Quick Answer"], ["compare", "Compare"], ...companies.map(c => [c.id, c.name]), ["pricing", "Pricing"], ["materials", "Materials"], ["timeline", "Timeline"], ["how-to-choose", "How to Choose"], ["faq", "FAQ"]];

export default function InteriorComparisonPage() {
  return <main className="journal">
    <BlogInteractions />
    <StructuredData data={[
      { "@context": "https://schema.org", "@type": "BlogPosting", headline: comparison.title, description: comparison.description, dateModified: comparison.updated, mainEntityOfPage: absoluteUrl(comparison.path), image: absoluteUrl(heroImage.src), author: { "@type": "Organization", name: "EverySpaces", url: absoluteUrl("/") }, publisher: { "@type": "Organization", name: "EverySpaces", url: absoluteUrl("/") } },
      createBreadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Blog", url: absoluteUrl("/articles") }, { name: "Bangalore interior comparison", url: absoluteUrl(comparison.path) }]),
    ]} />
    <section data-quote-form="disabled" className="comparison-hero relative isolate overflow-hidden bg-primary py-14 text-white md:py-20">
      <Image src={heroImage} alt="Contemporary EverySpaces living room with warm natural finishes" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071f2b]/95 to-[#071f2b]/75" />
      <div className="journal-container grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div><Link href="/articles" className="mb-8 inline-flex min-h-11 items-center text-sm text-white/85">← Back to Blog</Link><p className="text-xs font-semibold uppercase tracking-[.15em] text-white/85">Interior design guide · Bangalore</p>
          <h1 className="comparison-hero-title hero-display mt-5 text-[2.25rem] leading-[1.12] sm:text-5xl xl:text-[3.45rem]">HomeLane vs DesignCafe vs Truww vs Livspace: Which Is Best for Your Bangalore Home?</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/85">A simple, side-by-side look at five interior design options — from pricing and materials to customisation, timelines and project support — so you can choose with confidence.</p>
          <p className="mt-6 text-xs leading-6 text-white/75">Updated September 2026 · Approx. 18 min read · Bangalore</p>
          <div className="comparison-hero-actions mt-7"><a href="#compare" className="journal-button">Compare All 5 ↓</a><ConsultationLink><span className="sm:hidden">Free Consultation</span><span className="hidden sm:inline">Get a Free Consultation</span></ConsultationLink></div><p className="mt-4 text-xs leading-6 text-white/80">No pressure. Just discuss your home, budget and ideas with a designer.</p>
        </div><ComparisonLeadForm />
      </div>
    </section>
    <div className="journal-container py-12 md:py-16"><div className="journal-prose mx-auto">
      <aside className="mb-9 rounded-2xl border border-primary/15 p-5 text-sm leading-7"><strong>Editorial disclosure.</strong> This comparison is published by EverySpaces. We are one of the companies included, so naturally we have a point of view. We’ve tried to keep factual comparisons based on publicly available information. Prices, policies and timelines can change, so always confirm them directly before making a decision.</aside>
      <p>Choosing an interior company in Bangalore can get confusing very quickly.</p><p>One company talks about faster delivery. Another shows thousands of designs. Another promises more customisation. And after looking at five websites, everything can start sounding the same.</p><p>So instead of telling you that one company is perfect for everyone, let’s make the decision simpler.</p><p>We’ll compare HomeLane, DesignCafe, Truww, Livspace and EverySpaces on the things that actually matter when your own money and home are involved. Start with the overview, then use the materials guide and checklist to turn a consultation into a useful conversation.</p>
    </div></div>
    <nav className="journal-jump" aria-label="Article contents"><div className="journal-container">{navigation.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></nav>
    <article><QuickAnswer /><CompanyComparisonTable /><MethodologySection />{companies.slice(0, 4).map(company => <CompanyReviewSection key={company.id} company={company} />)}<EverySpacesDifference /><PricingExplainer /><QuoteComparisonCTA /><MaterialsGuide /><ProjectTimeline /><WhoShouldChooseWhat /><BangaloreGuide /><PreBookingChecklist /><FinalVerdict />
      <Section id="consultation" title="Not Sure Who to Choose?" eyebrow="Let’s talk about your home"><div className="grid items-center gap-10 lg:grid-cols-2"><div className="journal-prose"><p className="!text-xl">Tell us about your home, budget and ideas. We’ll help you understand what your project actually needs before you make a decision.</p><p>Bring your floor plan, reference images or an existing quotation. Start with the questions you want answered.</p></div><ComparisonLeadForm final /></div></Section>
      <ComparisonFAQ /><SourcesSection />
    </article>
  </main>;
}
