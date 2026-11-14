"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Layers, Lightbulb, Palette, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import RelatedLocalities from "@/components/RelatedLocalities";
import { 
  StructuredData, 
  createServiceSchema, 
  createBreadcrumbSchema,
  createFAQSchema,
  createProductSchema
} from "@/components/StructuredData";

import livingImage from "@/assets/service-living-room.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const ceilingStyles = [
  { title: "Peripheral Cove", description: "Classic cove lighting around room edges", image: livingImage },
  { title: "Coffered Ceiling", description: "Elegant grid pattern with depth", image: bedroomImage },
  { title: "Tray Ceiling", description: "Recessed center with ambient lighting", image: wardrobeImage },
  { title: "POP Designs", description: "Intricate plaster of paris patterns", image: livingImage },
  { title: "Wooden Ceiling", description: "Warm wooden beams and panels", image: bedroomImage },
  { title: "Stretch Ceiling", description: "Modern printed or glossy finishes", image: wardrobeImage },
];

const ceilingFeatures = [
  { icon: Layers, title: "Multi-Level Designs", description: "Layered ceilings creating depth and visual interest" },
  { icon: Lightbulb, title: "Integrated Lighting", description: "Cove lights, spotlights, and chandeliers built in" },
  { icon: Palette, title: "Premium Finishes", description: "POP, gypsum, MDF, or wooden panel options" },
  { icon: Sparkles, title: "AC Integration", description: "Concealed AC ducts and vents for clean look" },
];

// AEO-optimized FAQs
const falseCeilingFAQs = [
  {
    question: "What is the cost of false ceiling ?",
    answer: "False ceiling  costs ₹65-150 per sq ft depending on material and design. At EverySpaces, basic POP ceilings start from ₹65/sq ft, gypsum from ₹85/sq ft, and designer ceilings with cove lighting from ₹120/sq ft."
  },
  {
    question: "Which is better - POP or gypsum false ceiling?",
    answer: "Gypsum is faster to install, fire-resistant, and crack-resistant. POP allows more intricate designs and is cheaper. EverySpaces recommends gypsum for living rooms and bedrooms, POP for decorative areas."
  },
  {
    question: "How long does false ceiling installation take?",
    answer: "False ceiling installation takes 3-7 days depending on room size and design complexity. Simple peripheral designs take 3-4 days, while designer multi-level ceilings with lighting take 5-7 days."
  },
  {
    question: "What is the ideal false ceiling height?",
    answer: "Minimum 8 feet room height is needed for false ceiling. EverySpaces recommends dropping 6-9 inches for cove lighting areas. For AC integration, 12-15 inches drop is required in specific zones."
  }
];

const ServiceFalseCeiling = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "False Ceiling Design",
      "Artistic false ceiling designs . POP, gypsum, wooden ceilings with cove lighting, multi-level designs, and AC integration.",
      "https://everyspaces.com/services/false-ceiling",
      livingImage,
      "50000-200000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["POP Ceiling", "Gypsum Ceiling", "Cove Lighting", "Multi-Level Design", "AC Integration"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "False Ceiling", url: "https://everyspaces.com/services/false-ceiling" }
    ]),
    createFAQSchema(falseCeilingFAQs, 'services/false-ceiling'),
    createProductSchema({
      name: "False Ceiling Design",
      description: "Designer false ceilings  with POP, gypsum, cove lighting, and AC integration. 3-7 day installation.",
      image: livingImage,
      url: "https://everyspaces.com/services/false-ceiling",
      priceRange: "50000-200000",
      category: "Home Improvement > Ceiling"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "False Ceiling" }]} />
      
      <main className="pb-24">
        <ServiceHero title={"False Ceiling Design"} description={"Artistic ceiling designs with ambient lighting by EverySpaces"} image={livingImage} formName={"False Ceiling Design Page Form"} />

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Ceiling Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Ceiling Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {ceilingStyles.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={imgSrc(item.image)} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/70 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base md:text-lg text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/90 text-xs md:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary text-center mb-10">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ceilingFeatures.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="false-ceiling" />
        <RelatedLocalities currentSlug="bellandur" />

        <FAQSection faqs={falseCeilingFAQs} />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Elevate Your Ceilings?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free false ceiling design consultation</p>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ServiceFalseCeiling;


