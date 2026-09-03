import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { step: "01", title: "A conversation", description: "We begin with the rhythms of your life, your home, and what you want it to become." },
  { step: "02", title: "A clear direction", description: "Your designer shapes the concept, materials, and layout into one coherent point of view.", payment: "5% design start" },
  { step: "03", title: "Every detail resolved", description: "We finalise drawings, finishes, costs, and timelines before anything moves into production." },
  { step: "04", title: "Made and installed", description: "Our craftspeople bring the design to life with a dedicated project lead throughout.", payment: "60% execution" },
  { step: "05", title: "Ready to live in", description: "A final walkthrough, a considered handover, and a home made entirely for you." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-[#eeece8] py-16 md:py-24">
    <div className="container px-4">
      <div className="grid gap-5 border-b border-primary/15 pb-8 md:grid-cols-[1fr_1fr] md:items-end md:pb-10">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-secondary">The EverySpaces process</p><h2 className="mt-3 font-display text-4xl text-primary md:text-6xl">Designed with<br />a clear process.</h2></div>
        <p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end md:text-base">A well-made home should feel effortless. We keep every step visible, calm, and personally guided.</p>
      </div>

      <div className="mt-3 divide-y divide-primary/15 border-b border-primary/15">
        {steps.map((step) => <article key={step.step} className="group grid gap-3 py-6 transition-colors md:grid-cols-[92px_1.1fr_1fr_150px] md:items-center md:gap-6 md:py-7">
          <span className="text-xs tracking-[.16em] text-secondary">{step.step}</span>
          <h3 className="font-serif text-2xl text-primary md:text-3xl">{step.title}</h3>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{step.description}</p>
          <span className="text-[10px] uppercase tracking-[.13em] text-primary/50 md:text-right">{step.payment ?? ""}</span>
        </article>)}
      </div>

      <div className="mt-9"><Link href="/contact" className="group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Begin your project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div>
    </div>
  </section>
);

export default HowItWorksSection;
