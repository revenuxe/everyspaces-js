"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const bangaloreFaqs = [
  { question: "How much does interior design cost in Bangalore?", answer: "Interior design costs in Bangalore usually range from ₹1,500 to ₹3,500 per square foot based on scope, materials, and finish quality. EverySpaces offers customized packages starting from ₹8 lakhs for 2BHK homes." },
  { question: "How long does a full home interior project take in Bangalore?", answer: "Typical timelines are 45–90 days depending on home size and complexity. Modular kitchen projects usually take 15–20 days, while full 3BHK interiors can take 60–75 days." },
  { question: "Do you provide modular kitchen designs in Bangalore?", answer: "Yes. We design L-shaped, U-shaped, parallel, and island modular kitchens for Bangalore apartments and villas, with durable materials and a 10-year hardware warranty." },
  { question: "Which Bangalore areas do you serve for interior design?", answer: "We serve major Bangalore localities including Whitefield, Indiranagar, Koramangala, HSR Layout, Sarjapur Road, Electronic City, Bellandur, Hebbal, and Jayanagar." },
  { question: "Do you offer 3D design before execution?", answer: "Yes. We provide 3D design visualizations and walkthroughs before execution so you can review and finalize layouts, finishes, and design details." },
];

interface FAQSectionProps { faqs?: { question: string; answer: string }[]; cityOverride?: string; }

const FAQSection = ({ faqs: faqsOverride, cityOverride }: FAQSectionProps = {}) => {
  const city = cityOverride ?? "Bangalore";
  const faqs = faqsOverride ?? bangaloreFaqs;
  return <section id="faq" className="py-16 md:py-24 bg-background"><div className="container px-4"><div className="text-center mb-12"><span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">Frequently Asked Questions</span><h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Everything You Need to Know</h2><p className="text-muted-foreground max-w-2xl mx-auto font-body">Find answers to common questions about interior design services, pricing, and process in {city}</p></div><div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"><AccordionTrigger className="text-left font-display text-primary hover:text-secondary py-5 text-base">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground font-body pb-5 leading-relaxed">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div><div className="mt-12 text-center"><p className="text-muted-foreground mb-4 font-body">Still have questions? We&apos;re here to help!</p><Link href="/contact" className="inline-flex btn-terracotta px-8 py-3 rounded-2xl font-semibold text-secondary-foreground">Contact Us Today</Link></div></div></section>;
};

export default FAQSection;
