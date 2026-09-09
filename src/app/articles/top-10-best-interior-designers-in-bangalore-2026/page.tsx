import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero-interior.jpg";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";
import { absoluteUrl } from "@/lib/site-url";
import { shortlistArticle as article, shortlist, shortlistFAQs } from "@/content/bangalore-shortlist";
import { Section, ConsultationLink, ComparisonLeadForm } from "@/components/blog/ComparisonSections";
import { ShortlistMethodology, ShortlistDecisionGuide } from "@/components/blog/ShortlistGuide";
import { PreBookingChecklist } from "@/components/blog/PlanningGuide";
import BlogInteractions from "@/components/blog/BlogInteractions";
import "../journal.css";

export const metadata: Metadata = {
  title: { absolute: "Top 10 Interior Designers in Bangalore (2026) | EverySpaces" },
  description: article.description,
  alternates: { canonical: article.path },
  openGraph: { type: "article", title: article.title, description: article.description, url: article.path, modifiedTime: article.checkedAt, images: [{ url: absoluteUrl(heroImage.src), width: heroImage.width, height: heroImage.height }] },
  twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [absoluteUrl(heroImage.src)] },
};

const navigation = [["shortlist", "The 10 companies"], ["methodology", "Our criteria"], ["profiles", "Company profiles"], ["choose", "How to choose"], ["budget", "Budget"], ["checklist", "Checklist"], ["faq", "FAQ"]];

export default function BangaloreShortlistPage() {
  return <main className="journal"><BlogInteractions />
    <StructuredData data={[
      { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, dateModified: article.checkedAt, mainEntityOfPage: absoluteUrl(article.path), image: absoluteUrl(heroImage.src), author: { "@type": "Organization", name: "EverySpaces", url: absoluteUrl("/") }, publisher: { "@type": "Organization", name: "EverySpaces", url: absoluteUrl("/") } },
      createBreadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Blog", url: absoluteUrl("/articles") }, { name: "Bangalore interior designer shortlist", url: absoluteUrl(article.path) }]),
      { "@context": "https://schema.org", "@type": "ItemList", name: "Bangalore interior designers: alphabetical editorial shortlist", itemListOrder: "https://schema.org/ItemListUnordered", numberOfItems: shortlist.length, itemListElement: shortlist.map(company => ({ "@type": "ListItem", name: company.name, url: absoluteUrl(`${article.path}#${company.id}`) })) },
    ]} />
    <section data-quote-form="disabled" className="comparison-hero relative isolate overflow-hidden bg-primary py-14 text-white md:py-20">
      <Image src={heroImage} alt="Contemporary living room with warm finishes and layered seating" fill priority sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071f2b]/95 to-[#071f2b]/75" />
      <div className="journal-container grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]"><div>
        <Link href="/articles" className="mb-8 inline-flex min-h-11 items-center text-sm text-white/85">← Back to Blog</Link><p className="text-xs font-semibold uppercase tracking-[.15em] text-white/85">The homeowner’s shortlist · 2026</p>
        <h1 className="comparison-hero-title hero-display mt-5 text-[2.25rem] leading-[1.12] sm:text-5xl xl:text-[3.45rem]">Top 10 Interior Designers in Bangalore (2026): Find the Right Fit for Your Home</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/85">Ten companies to explore, the differences worth understanding and the questions that help you choose. A practical guide to services, design approaches and planning your home.</p>
        <p className="mt-6 text-xs leading-6 text-white/75">Updated September 2026 · By EverySpaces · Bangalore</p>
        <div className="comparison-hero-actions mt-7"><a href="#shortlist" className="journal-button">Explore the 10 ↓</a><ConsultationLink><span className="sm:hidden">Free Consultation</span><span className="hidden sm:inline">Get a Free Consultation</span></ConsultationLink></div><p className="mt-4 text-xs leading-6 text-white/80">Start with your home, your priorities and a conversation.</p>
      </div><ComparisonLeadForm sourcePage={article.path} formPrefix="Bangalore Top 10" /></div>
    </section>
    <div className="journal-container py-12"><div className="journal-prose mx-auto"><aside className="mb-7 rounded-2xl border border-primary/15 p-5 text-sm leading-7"><strong>Publisher disclosure.</strong> EverySpaces publishes this guide and is one of the companies included. “Top 10” means our editorial shortlist, not an independently verified ranking. Companies appear alphabetically. Public descriptions were checked on 9 September 2026; confirm current services and terms directly.</aside><p>Searching for the best interior designers in Bangalore produces plenty of lists. The harder question is which team is right for your floor plan, your budget and the way you want to live.</p><p>A showroom can help you discover finishes. A portfolio can help you describe a style. But choosing a team also means understanding its scope, how decisions become drawings and who takes responsibility when work reaches your site. This guide gives you a useful starting point for that conversation.</p></div></div>
    <nav className="journal-jump" aria-label="Article contents"><div className="journal-container">{navigation.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></nav>
    <article>
      <Section id="shortlist" title="The Bangalore shortlist, at a glance" eyebrow="Alphabetical order · no numerical ranking"><p className="journal-intro">Use these published areas of focus to decide which profiles to read first. Suitability is our editorial view, not a promise of performance or an exclusive specialisation.</p><div className="grid gap-4 md:grid-cols-2">{shortlist.map(company => <a href={`#${company.id}`} key={company.id} className={`journal-card block ${company.id === "everyspaces" ? "!border-secondary/40 !bg-secondary/5" : ""}`}><p className="journal-eyebrow">{company.id === "everyspaces" ? "The publisher · our approach" : "Explore the profile"}</p><h3 className="my-3 font-serif text-2xl">{company.name}</h3><p className="text-sm leading-7">{company.focus}</p><span className="mt-4 inline-block text-sm font-semibold">What to know →</span></a>)}</div></Section>
      <ShortlistMethodology />
      <div id="profiles" className="scroll-mt-40">{shortlist.map(company => <Section key={company.id} id={company.id} title={company.name} eyebrow={company.id === "everyspaces" ? "Our approach · publisher profile" : "Company profile"}><div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]"><div className="journal-prose"><h3>Published services and design approach</h3><p>{company.overview}</p><a className="journal-source" href={company.source} target="_blank" rel="noopener noreferrer">{company.name} official source · checked {article.checkedAt} ↗</a><h3>Who may want to explore it</h3><p>{company.suited} This is our interpretation of the published offering. The proposal and the people assigned to your project should determine your final decision.</p><h3>Before you choose</h3><p>{company.advice}</p></div><aside className="journal-card self-start !bg-[#eeece8]"><p className="journal-eyebrow">Take this to your consultation</p><p className="mt-5 font-serif text-2xl leading-relaxed">“{company.question}”</p><p className="mt-5 text-sm leading-7">Ask for the answer in writing alongside the quotation. Confirm pricing, material specifications, revision limits, delivery conditions and warranty coverage for your own project.</p>{company.id === "everyspaces" && <div className="mt-6"><ConsultationLink>Discuss Your Home</ConsultationLink></div>}</aside></div></Section>)}</div>
      <ShortlistDecisionGuide /><PreBookingChecklist />
      <Section id="faq" title="Frequently asked questions"><div className="mx-auto max-w-3xl divide-y divide-primary/15 border-y border-primary/15">{shortlistFAQs.map(([question, answer]) => <details key={question} className="py-5"><summary className="cursor-pointer py-2 pr-5 text-lg font-medium">{question}</summary><p className="pb-3 pt-4 leading-8 text-muted-foreground">{answer}</p></details>)}</div></Section>
      <Section id="consultation" title="A better shortlist starts with your home" eyebrow="The next step"><div className="grid items-center gap-10 lg:grid-cols-2"><div className="journal-prose"><p className="!text-xl">You do not need to meet ten companies. Pick a few relevant teams, give them the same brief and compare the answers that matter to you.</p><p>If you want a personal design conversation and project guidance in Bangalore, include EverySpaces. Bring your floor plan, a few references and the questions you want answered. Then decide when the design, scope and working relationship feel right.</p><p><Link className="underline" href="/portfolio">See our projects</Link> or explore <Link className="underline" href="/services/modular-kitchen">modular kitchens</Link> and <Link className="underline" href="/services/wardrobe-design">wardrobes</Link> before the conversation.</p></div><ComparisonLeadForm final sourcePage={article.path} formPrefix="Bangalore Top 10" /></div></Section>
      <Section id="sources" title="Sources and editorial notes"><p className="journal-intro">The official pages below support the company descriptions. They are self-published sources, not independent quality assessments. We have omitted unverified ratings, fixed prices and universal delivery guarantees. Recheck the current written terms before booking.</p><ul className="grid gap-3 md:grid-cols-2">{shortlist.map(company => <li key={company.id}><a href={company.source} target="_blank" rel="noopener noreferrer" className="journal-card block text-sm"><strong>{company.name} official website ↗</strong><span className="mt-2 block text-muted-foreground">Checked {article.checkedAt}</span></a></li>)}</ul><p className="journal-intro mt-7">EverySpaces descriptions also reflect the process and services published on this website. To suggest a factual correction, <Link className="underline" href="/contact">contact our team</Link> with the relevant official source.</p></Section>
    </article>
  </main>;
}
