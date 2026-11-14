import QuoteForm from "@/components/QuoteForm";
import type { ReactNode } from "react";

export default function HeroQuoteCard({ sourcePage, formName, children }: { sourcePage: string; formName: string; children?: ReactNode }) {
  return (
    <div className="hero-quote-card">
      <h2>Get a quote for your home</h2>
      <p className="hero-quote-card__intro">Tell us about your space and we&apos;ll call you back.</p>
      {children ?? <QuoteForm sourcePage={sourcePage} formName={formName} />}
      <p className="hero-quote-card__privacy">No spam — we&apos;ll only contact you about your project.</p>
    </div>
  );
}
