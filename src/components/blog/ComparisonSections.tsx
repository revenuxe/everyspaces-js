import Link from "next/link";
import { ArrowUpRight, Check, ClipboardList } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { companies, comparison, comparisonRows, type Claim, type Company } from "@/content/interior-comparison";

export function Section({ id, title, eyebrow, children }: { id: string; title: string; eyebrow?: string; children: React.ReactNode }) {
  return <section id={id} className="journal-section"><div className="journal-container">
    {eyebrow && <p className="journal-eyebrow">{eyebrow}</p>}
    <h2 className="journal-heading">{title}</h2>{children}
  </div></section>;
}

export function ConsultationLink({ children = "Get a Free Consultation" }: { children?: React.ReactNode }) {
  return <Link href="/contact" data-open-consultation className="journal-button">{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>;
}

export function ClaimSource({ claim }: { claim: Claim }) {
  return <a className="journal-source" href={claim.source} target="_blank" rel="noopener noreferrer" title={`Checked ${claim.checkedAt}`}>Official source <ArrowUpRight size={12} aria-hidden="true" /></a>;
}

export function ComparisonLeadForm({ final = false }: { final?: boolean }) {
  return <div className="rounded-3xl border border-primary/10 bg-white p-6 text-primary shadow-elevated sm:p-8">
    <p className="journal-eyebrow">Start your project</p>
    <h2 className="!mt-3 !text-2xl font-semibold">Get a quote for your home</h2>
    <p className="mb-6 mt-3 text-sm leading-6 text-muted-foreground">Tell us a little about your space. We’ll help you understand what may work for your home and budget.</p>
    <QuoteForm sourcePage={comparison.path} formName={`Interior Comparison ${final ? "Final" : "Hero"} Quote Form`} submitLabel={final ? "Book My Free Consultation" : "Get My Free Consultation"} />
    <p className="mt-4 text-center text-xs text-muted-foreground">No pressure. No obligation.</p>
  </div>;
}

export function QuickAnswer() {
  return <Section id="quick-answer" title="The 60-Second Answer" eyebrow="Start with your priorities">
    <p className="journal-intro">Don’t want to read the whole comparison? Start here. These are starting points for a shortlist, not ratings or a promise about your project.</p>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{companies.map(company => <div key={company.id} className={`journal-card ${company.id === "everyspaces" ? "!border-secondary/40 !bg-secondary/5" : ""}`}>
      <p className="journal-eyebrow">{company.id === "everyspaces" ? "Our approach" : "At a glance"}</p>
      <h3 className="mt-3 text-xl font-semibold"><a href={`#${company.id}`}>{company.name}</a></h3>
      <dl className="mt-5 space-y-4 text-sm leading-6"><div><dt className="font-semibold">May suit</dt><dd>{company.suited}</dd></div><div><dt className="font-semibold">What stands out</dt><dd>{company.overview.text}</dd></div><div><dt className="font-semibold">Ask before signing</dt><dd>{company.ask}</dd></div></dl>
      <ClaimSource claim={company.overview} />
    </div>)}</div>
    <div className="mt-8 flex flex-wrap items-center gap-4"><p>Still unsure?</p><ConsultationLink>Talk to an EverySpaces Designer</ConsultationLink></div>
  </Section>;
}

export function CompanyComparisonTable() {
  return <Section id="compare" title="HomeLane vs DesignCafe vs Truww vs Livspace vs EverySpaces" eyebrow="Side by side">
    <p className="journal-intro">Here are the questions we would compare before handing any interior company a booking amount. A missing verification is not a missing service. Ask the company directly.</p>
    <p id="swipe-help" className="mb-3 text-sm text-muted-foreground">Swipe or scroll to compare →</p>
    <div className="journal-table-scroll" role="region" aria-label="Interior company comparison" aria-describedby="swipe-help" tabIndex={0}>
      <table className="journal-table"><caption className="sr-only">Five interior companies: public information checked 9 September 2026. Project-specific details require confirmation.</caption>
        <thead><tr><th scope="col">What to compare</th>{companies.map(c => <th scope="col" key={c.id}>{c.name}</th>)}</tr></thead>
        <tbody>{comparisonRows.map(([key, label]) => <tr key={key}><th scope="row">{label}</th>{companies.map(c => <td key={c.id} className={c.id === "everyspaces" ? "bg-secondary/5" : ""}>{key === "suited" ? c.suited : c.facts[key] ? <>{c.facts[key].text}<ClaimSource claim={c.facts[key]} /></> : <span className="text-muted-foreground">Confirm during consultation</span>}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <p className="mt-4 text-sm text-muted-foreground">Public descriptions checked 9 September 2026. Sources describe each company’s own offering; we have not independently audited delivery or quality.</p>
  </Section>;
}

const criteria = [
  ["Pricing clarity", "Can you understand each line item and see what has been left out? Compare the scope before comparing a discount."],
  ["Customisation", "Ask what can change in dimensions, layout and finish, and which changes affect manufacturing or installation."],
  ["Materials", "Look for named boards, grades, finishes and hardware series. A broad label such as premium does not identify a product."],
  ["Design process", "Find out what you approve, how revisions work and when the drawings become the production instructions."],
  ["Project execution", "Ask who measures the site, coordinates trades and checks the work. Request a named escalation contact."],
  ["Timelines", "Look for a schedule tied to your scope and site readiness. Check the start trigger and the handover definition."],
  ["Warranty and after-sales", "Read what is covered, for how long and by whom. Clarify the process for raising an issue after moving in."],
  ["Bangalore service", "Check whether the team serves your address and can coordinate the practical requirements of your building."],
  ["Communication", "Agree on progress updates, decision records and who can approve changes before work begins."],
];

export function MethodologySection() {
  return <Section id="methodology" title="How We Compared These Interior Companies"><p className="journal-intro">We reviewed public company information and used the same practical questions for all five options. We have not assigned scores, inspected every project or treated advertising claims as guaranteed outcomes.</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{criteria.map(([title, text]) => <div className="journal-card" key={title}><ClipboardList size={20} className="text-secondary" aria-hidden="true" /><h3 className="mb-3 mt-4 font-semibold">{title}</h3><p className="text-sm leading-7">{text}</p></div>)}</div></Section>;
}

export function CompanyReviewSection({ company }: { company: Company }) {
  return <Section id={company.id} title={`${company.name}: Who Is It Best For?`} eyebrow="The company in context">
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]"><div className="journal-prose">
      <h3>What stands out</h3><p>{company.overview.text} <ClaimSource claim={company.overview} /></p>
      <h3>What to understand before choosing</h3><p>{company.understand}</p>
      <h3>Who it may suit</h3><p>{company.suited} Treat this as our editorial interpretation of the offering, then use the consultation to see whether the proposed team understands your priorities.</p>
      <h3>Questions to ask during consultation</h3><p>{company.ask} Request a sample quotation and an example of a completed project with a similar scope. Ask how decisions are recorded so later revisions do not depend on someone remembering a conversation.</p>
    </div><aside className="journal-card self-start !bg-[#eeece8]"><p className="journal-eyebrow">Our take · EverySpaces editorial opinion</p><p className="mt-5 font-serif text-2xl leading-relaxed">{company.take}</p></aside></div>
  </Section>;
}

export function QuoteComparisonCTA() {
  return <Section id="second-opinion" title="Already Have a Quote From Another Interior Company?" eyebrow="Planning your home?">
    <p className="journal-intro">Bring it along. We’ll help you understand the scope, materials and design choices so you can compare like for like.</p>
    <div className="flex flex-wrap items-center gap-5"><ConsultationLink>Get a Second Opinion</ConsultationLink><Link href="/contact" data-open-consultation className="underline underline-offset-4">Talk to a Designer</Link></div>
  </Section>;
}

export function SourcesSection() {
  return <Section id="sources" title="Sources & methodology" eyebrow="A transparent comparison">
    <div className="journal-prose"><p>Company descriptions are based on the official pages below, checked on 9 September 2026. Each factual table entry links to its source. EverySpaces information is based on the services and process published on this website. Recommendations about suitability are editorial opinions, not independently verified performance claims.</p><p>We have deliberately left project-specific pricing, warranty coverage, customisation limits and other unverified details for consultation. Websites can change; ask for the current written terms before paying. This comparison does not use customer ratings, anonymous complaints or paid placements to rank the companies.</p></div>
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">{companies.map(c => <li key={c.id}><a href={c.website} target="_blank" rel="noopener noreferrer" className="journal-card flex items-center justify-between gap-4"><span>{c.name} official website<span className="mt-1 block text-xs text-muted-foreground">Checked {c.overview.checkedAt}</span></span><Check size={16} aria-hidden="true" /></a></li>)}</ul>
  </Section>;
}
