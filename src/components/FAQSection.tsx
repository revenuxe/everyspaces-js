import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does interior design cost in Bangalore?",
    answer:
      "Interior design costs in Bangalore typically range from ₹1,500 to ₹3,500 per square foot depending on the scope, materials, and finishes. At EverySpaces, we offer customized packages starting from ₹8 lakhs for a 2BHK apartment interior design. We provide detailed cost breakdowns and transparent pricing with no hidden charges. Contact us for a free consultation and accurate quote.",
  },
  {
    question: "How long does it take to complete home interior design?",
    answer:
      "A complete home interior design project typically takes 45-90 days depending on the size and complexity. Modular kitchen installation takes 15-20 days, while a full 3BHK apartment interior can take 60-75 days. We use advanced project management and quality materials to ensure timely delivery without compromising on craftsmanship.",
  },
  {
    question: "Do you provide modular kitchen designs in Bangalore?",
    answer:
      "Yes! EverySpaces specializes in premium modular kitchen designs in Bangalore. We offer L-shaped, U-shaped, parallel, and island kitchen layouts with soft-close mechanisms, durable finishes, and smart storage solutions. Our modular kitchens come with a 10-year warranty on hardware and are customized to fit your space and budget.",
  },
  {
    question: "What areas in Bangalore do you serve for interior design?",
    answer:
      "We provide interior design services across all major areas in Bangalore including Koramangala, Indiranagar, HSR Layout, Whitefield, Electronic City, Marathahalli, Jayanagar, JP Nagar, HBR Layout, Hebbal, Yelahanka, and Sarjapur Road. Our team conducts free site visits for consultation anywhere in Bangalore.",
  },
  {
    question: "Do you offer 3D visualization before starting the project?",
    answer:
      "Absolutely! We provide detailed 3D visualization and walkthrough for every project before execution. This helps you visualize the final look of your modular kitchen, bedroom interiors, living room design, and wardrobes. You can request changes and approve the design before we begin manufacturing and installation.",
  },
  {
    question: "What is included in your complete home interior package?",
    answer:
      "Our complete home interior package includes modular kitchen, wardrobes, TV units, false ceiling, electrical work, painting, flooring consultation, furniture, and decorative elements. We handle everything from design to installation with dedicated project managers, ensuring a hassle-free experience.",
  },
  {
    question: "Do you provide warranty on interior work?",
    answer:
      "Yes, we provide comprehensive warranty coverage: 10 years on modular kitchen and wardrobe hardware, 5 years on plywood and laminates, and 1 year on overall workmanship. Our after-sales service team ensures quick resolution of any issues post-installation.",
  },
  {
    question: "Can I get interior design for a single room or kitchen only?",
    answer:
      "Yes! We offer flexible interior design services for individual spaces. Whether you need just a modular kitchen design, bedroom renovation, bathroom remodeling, or living room makeover, we can help. Our minimum project value starts from ₹2.5 lakhs for individual room designs.",
  },
  {
    question: "What makes EverySpaces different from other interior designers in Bangalore?",
    answer:
      "EverySpaces stands out with 10+ years of experience, 500+ completed projects, in-house manufacturing facility, transparent pricing, dedicated project managers, and a strong focus on quality materials. We use premium brands like Hettich, Hafele, and Century for all our projects with proper documentation and warranty.",
  },
  {
    question: "How do I start my interior design project with EverySpaces?",
    answer:
      "Starting is easy! Simply call us at +91 9886579923 or fill out our contact form for a free consultation. Our design expert will visit your site, understand your requirements, and provide a detailed proposal with 3D designs and cost estimate within 5 working days. No commitment required for the initial consultation.",
  },
];

const FAQSection = () => {
  // FAQ schema is handled by the parent page's StructuredData component to avoid duplicates
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Find answers to common questions about interior design services, pricing, and process in Bangalore
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-primary hover:text-secondary py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 font-body">
            Still have questions? We're here to help!
          </p>
          <Link
            href="/contact"
            className="inline-flex btn-terracotta px-8 py-3 rounded-2xl font-semibold text-secondary-foreground"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
