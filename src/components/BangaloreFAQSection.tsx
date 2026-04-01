import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const bangaloreFaqs = [
  {
    question: "What is the average cost of a 2BHK interior design in Hyderabad in 2025?",
    answer:
      "In 2025, a complete 2BHK interior design in Hyderabad costs between ₹6 lakhs to ₹15 lakhs depending on materials, finishes, and scope. Economy packages with laminate finishes start at ₹6-8 lakhs, mid-range with acrylic and premium laminates cost ₹8-12 lakhs, and luxury with lacquer glass and Italian finishes go up to ₹15 lakhs+. At EverySpaces, our most popular 2BHK package starts at ₹8 lakhs including modular kitchen, 2 wardrobes, TV unit, and false ceiling.",
  },
  {
    question: "Which areas in Hyderabad have the highest demand for interior design?",
    answer:
      "Gachibowli, Kondapur, and HITEC City lead in demand due to massive IT-driven residential development. In established premium zones, Jubilee Hills, Banjara Hills, and Financial District see high renovation demand. North Hyderabad areas like Kompally and Secunderabad are also emerging hotspots with new apartment communities.",
  },
  {
    question: "How do I choose the right interior designer in Hyderabad?",
    answer:
      "Look for: (1) Portfolio with Hyderabad-specific projects similar to your home type, (2) In-house manufacturing — not just design outsourcing, (3) Clear warranty terms in writing (EverySpaces offers 10-year hardware warranty), (4) GHMC and society approval handling, (5) Transparent pricing with no hidden costs, (6) Real Google reviews from Hyderabad homeowners. Always visit their factory or showroom before finalizing.",
  },
  {
    question: "What modular kitchen layout works best for Hyderabad apartments?",
    answer:
      "Most Hyderabad apartments have compact kitchens (50-80 sq ft), making L-shaped and parallel layouts the most practical. L-shaped kitchens maximize corner space and work well in 2BHK/3BHK apartments across Kondapur and Nallagandla. Parallel kitchens suit narrow galley-style kitchens common in older Begumpet and Himayatnagar buildings. For larger villa kitchens in Jubilee Hills or Kokapet, U-shaped or island layouts are ideal.",
  },
  {
    question: "What materials are best suited for Hyderabad's climate?",
    answer:
      "Hyderabad's moderate climate with monsoon humidity requires: BWR (Boiling Water Resistant) grade plywood for all cabinetry, marine plywood for kitchen base units, moisture-resistant MDF for decorative panels, and powder-coated or stainless steel hardware. Avoid particle board in kitchen areas. For countertops, granite from Hyderabad's local quarries offers the best value, while quartz is premium. EverySpaces exclusively uses BWR plywood with Hettich/Hafele hardware.",
  },
  {
    question: "Can EverySpaces handle interior design for apartments in gated communities?",
    answer:
      "Yes, we regularly work in Hyderabad's top gated communities including Prestige, Brigade, Sobha, Salarpuria, and Puravankara properties. We handle society permissions, freight elevator booking, material entry passes, and noise restriction compliance. Our project managers coordinate with building management throughout the project so you don't face any hassle.",
  },
  {
    question: "Do you offer EMI or financing options for interior design in Hyderabad?",
    answer:
      "Yes! We offer flexible payment options: 50-40-10 milestone-based payments (50% advance, 40% on installation start, 10% on completion), and EMI options through our banking partners with 0% interest for up to 12 months. This makes premium interior design accessible for young professionals and new homeowners in Hyderabad.",
  },
  {
    question: "How long does a full home interior project take in Hyderabad?",
    answer:
      "Timeline varies by scope: Modular kitchen only takes 15-20 working days, a 2BHK full home interior takes 45-55 days, and a 3BHK or villa takes 60-90 days. Hyderabad-specific factors like society working hour restrictions (typically 9 AM-6 PM), freight elevator availability, and monsoon season can affect timelines. We provide a detailed project schedule upfront and assign a dedicated project manager for daily updates.",
  },
];

const BangaloreFAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">
            Hyderabad Interior Design FAQs
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            Common Questions About Interior Design in Hyderabad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Specific answers for Hyderabad homeowners — costs, timelines, materials, and locality-wise insights
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
            Ready to start your Hyderabad home interior project?
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

