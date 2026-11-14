"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, TreePine, Armchair, Sun, Flower } from "lucide-react";
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

import bhk2Image from "@/assets/service-2bhk.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";

const balconyStyles = [
  { title: "Garden Retreat", description: "Lush plants and vertical gardens", image: bhk2Image },
  { title: "Cozy Reading Nook", description: "Comfortable seating with book storage", image: livingImage },
  { title: "Coffee Corner", description: "CafÃ©-style bistro setup", image: bedroomImage },
  { title: "Yoga & Meditation", description: "Serene space for mindfulness", image: bhk2Image },
  { title: "Urban Jungle", description: "Maximum greenery in compact space", image: livingImage },
  { title: "Entertainment Deck", description: "Bar setup with lounge seating", image: bedroomImage },
];

const balconyFeatures = [
  { icon: TreePine, title: "Vertical Gardens", description: "Space-efficient plant walls and hanging planters" },
  { icon: Armchair, title: "Weather-Proof Furniture", description: "Durable outdoor seating and tables" },
  { icon: Sun, title: "Shade Solutions", description: "Pergolas, blinds, and umbrellas for comfort" },
  { icon: Flower, title: "Planter Boxes", description: "Custom planters for herbs, flowers, and shrubs" },
];

// AEO-optimized FAQs
const balconyFAQs = [
  {
    question: "What is the cost of balcony design ?",
    answer: "Balcony design  costs ₹20,000 to ₹1 lakh depending on size and features. At EverySpaces, basic balcony makeovers start from ₹20,000, vertical gardens from ₹35,000, and complete terrace transformations from ₹60,000."
  },
  {
    question: "How to design a small balcony  apartments?",
    answer: "For small balconies, EverySpaces uses vertical gardens, foldable furniture, wall-mounted planters, and compact seating. We maximize space with multi-level planters and hanging elements. Starting from ₹20,000."
  },
  {
    question: "Can you install a vertical garden on my balcony?",
    answer: "Yes, EverySpaces designs and installs vertical gardens for balconies . Options include modular planters, living walls, and hydroponic systems. We also provide plant selection and maintenance guidance."
  },
  {
    question: "What furniture works best for balconies?",
    answer: "Weather-resistant furniture like powder-coated metal, treated wood, and outdoor-grade wicker works best. EverySpaces recommends foldable furniture for small balconies and fixed seating for larger terraces."
  }
];

const ServiceBalcony = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Balcony Design",
      "Transform your balcony into a beautiful outdoor space. Vertical gardens, outdoor seating, terrace design, and weather-proof furniture .",
      "https://everyspaces.com/services/balcony-design",
      bhk2Image,
      "20000-100000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Vertical Garden", "Outdoor Seating", "Pergola", "Planter Boxes", "Weather-Proof Furniture"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Balcony Design", url: "https://everyspaces.com/services/balcony-design" }
    ]),
    createFAQSchema(balconyFAQs, 'services/balcony-design'),
    createProductSchema({
      name: "Balcony & Terrace Design",
      description: "Balcony transformation services  including vertical gardens, outdoor furniture, and terrace makeovers.",
      image: bhk2Image,
      url: "https://everyspaces.com/services/balcony-design",
      priceRange: "20000-100000",
      category: "Home Improvement > Outdoor Living"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Balcony Design" }]} />
      
      <main className="pb-24">
        <ServiceHero title={"Balcony & Terrace Design"} description={"Transform outdoor spaces into relaxing retreats with EverySpaces"} image={bhk2Image} formName={"Balcony Design Page Form"} />

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Balcony Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Balcony Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {balconyStyles.map((item, index) => (
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
              {balconyFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="balcony-design" />
        <RelatedLocalities currentSlug="indiranagar" />

        <FAQSection faqs={balconyFAQs} />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free balcony design consultation</p>
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

export default ServiceBalcony;


