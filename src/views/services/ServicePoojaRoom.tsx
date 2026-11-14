"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Sparkles, Flame, Shield, Heart } from "lucide-react";
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

import poojaImage from "@/assets/service-pooja-room.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const poojaStyles = [
  { title: "Traditional Wooden", description: "Classic teak or rosewood with intricate carvings", image: poojaImage },
  { title: "Modern Minimalist", description: "Clean lines with brass and marble accents", image: bedroomImage },
  { title: "Temple Style", description: "Elaborate mandapam-inspired designs", image: wardrobeImage },
  { title: "Wall-Mounted Unit", description: "Space-saving design for compact homes", image: poojaImage },
  { title: "Corner Pooja Unit", description: "Utilizes corner space elegantly", image: bedroomImage },
  { title: "Walk-in Pooja Room", description: "Dedicated sacred space for devotees", image: wardrobeImage },
];

const poojaFeatures = [
  { icon: Sparkles, title: "Sacred Materials", description: "Teak, rosewood, brass, and marble with traditional craftsmanship" },
  { icon: Flame, title: "Lamp & Diya Space", description: "Dedicated areas for oil lamps, diyas, and agarbatti holders" },
  { icon: Shield, title: "Storage Solutions", description: "Hidden compartments for puja items and religious books" },
  { icon: Heart, title: "Vastu Compliant", description: "Designs following Vastu principles for positive energy" },
];

// AEO-optimized FAQs
const poojaRoomFAQs = [
  {
    question: "What is the cost of pooja room design ?",
    answer: "Pooja room design  costs ₹30,000 to ₹2 lakh depending on size and materials. At EverySpaces, wall-mounted units start from ₹30,000, standalone mandirs from ₹60,000, and walk-in pooja rooms from ₹1.5 lakh."
  },
  {
    question: "Which direction is best for pooja room as per Vastu?",
    answer: "As per Vastu, northeast (Ishaan corner) is ideal for pooja rooms. East and north directions are also auspicious. EverySpaces's designers ensure all pooja room designs follow Vastu principles for positive energy flow."
  },
  {
    question: "What materials are used for pooja room design?",
    answer: "EverySpaces uses teak wood, rosewood, or sheesham for traditional mandirs. Modern designs feature marble, brass, corian, and lacquer finishes. We also offer CNC-carved MDF for intricate patterns at affordable prices."
  },
  {
    question: "Can you design a pooja unit for small apartments?",
    answer: "Yes, EverySpaces specializes in compact pooja solutions. Wall-mounted units, corner mandirs, and foldable pooja cabinets are perfect for small apartments. Starting from ₹30,000 with full Vastu compliance."
  }
];

const ServicePoojaRoom = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Pooja Room Design",
      "Traditional and modern pooja room designs . Wooden mandirs, wall-mounted units, and walk-in pooja rooms with Vastu compliance.",
      "https://everyspaces.com/services/pooja-room",
      poojaImage,
      "30000-200000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Wooden Mandir", "Wall-Mounted Unit", "Vastu Compliant", "Traditional Carving", "Marble Finish"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Pooja Room", url: "https://everyspaces.com/services/pooja-room" }
    ]),
    createFAQSchema(poojaRoomFAQs, 'services/pooja-room'),
    createProductSchema({
      name: "Pooja Room Interior Design",
      description: "Traditional and modern pooja room designs . Teak wood mandirs, brass accents, and Vastu-compliant layouts.",
      image: poojaImage,
      url: "https://everyspaces.com/services/pooja-room",
      priceRange: "30000-200000",
      category: "Home Improvement > Pooja Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Pooja Room" }]} />
      
      <main className="pb-24">
        <ServiceHero title={"Pooja Room Design"} description={"Create sacred spaces with traditional craftsmanship by EverySpaces"} image={poojaImage} formName={"Pooja Room Design Page Form"} />

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Pooja Room Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Pooja Room Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {poojaStyles.map((item, index) => (
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
              {poojaFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="pooja-room" />
        <RelatedLocalities currentSlug="basavanagudi" />

        <FAQSection faqs={poojaRoomFAQs} />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Create Your Sacred Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free pooja room design consultation</p>
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

export default ServicePoojaRoom;


