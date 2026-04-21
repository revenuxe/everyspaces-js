import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const bangaloreFaqs = [
  {
    question: "What is the average cost of a 2BHK interior design in Bangalore in 2026?",
    answer:
      "In 2026, a complete 2BHK interior design in Bangalore usually ranges from ₹6 lakhs to ₹15 lakhs depending on materials, finishes, and scope. At EverySpaces, popular 2BHK packages start around ₹8 lakhs including modular kitchen, wardrobes, TV unit, and false ceiling.",
  },
  {
    question: "Which areas in Bangalore have the highest demand for interior design?",
    answer:
      "Whitefield, Sarjapur Road, Bellandur, and Electronic City show high demand because of IT-driven residential growth. Koramangala, HSR Layout, and Indiranagar continue to see strong premium renovation demand.",
  },
  {
    question: "How do I choose the right interior designer in Bangalore?",
    answer:
      "Look for: (1) Portfolio with Bangalore projects similar to your home type, (2) In-house manufacturing capability, (3) Clear warranty terms in writing, (4) BBMP and society approval handling, (5) Transparent pricing with no hidden costs, and (6) authentic customer reviews.",
  },
  {
    question: "What modular kitchen layout works best for Bangalore apartments?",
    answer:
      "Most Bangalore apartments have compact kitchens (50-90 sq ft), making L-shaped and parallel layouts very practical. For larger villas and premium homes, U-shaped or island layouts work best.",
  },
  {
    question: "What materials are best suited for Bangalore's climate?",
    answer:
      "Bangalore's weather with seasonal humidity calls for BWR plywood cabinetry, marine plywood for kitchen base units, moisture-resistant MDF for decorative panels, and powder-coated or stainless hardware.",
  },
  {
    question: "Can EverySpaces handle interior design for apartments in gated communities?",
    answer:
      "Yes, we regularly work in Bangalore's top gated communities across Whitefield, Sarjapur, Bellandur, and North Bangalore. We handle society permissions, freight elevator booking, and building compliance.",
  },
  {
    question: "Do you offer EMI or financing options for interior design in Bangalore?",
    answer:
      "Yes. We offer milestone-based payments and EMI options through partner banks to make premium interiors more accessible for Bangalore homeowners.",
  },
  {
    question: "How long does a full home interior project take in Bangalore?",
    answer:
      "Timeline varies by scope: modular kitchen takes 15-20 working days, 2BHK full home takes 45-55 days, and 3BHK/villa projects take 60-90 days. Society permissions and elevator slots can impact schedules.",
  },
];

const BangaloreFAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">
            Bangalore Interior Design FAQs
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            Common Questions About Interior Design in Bangalore
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Specific answers for Bangalore homeowners — costs, timelines, materials, and locality-wise insights
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {bangaloreFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`blr-item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-primary hover:text-secondary py-5 text-base faq-question">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-5 leading-relaxed faq-answer">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 font-body">
            Ready to start your Bangalore home interior project?
          </p>
          <Link
            href="/contact"
            className="inline-flex btn-terracotta px-8 py-3 rounded-2xl font-semibold text-secondary-foreground"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BangaloreFAQSection;

