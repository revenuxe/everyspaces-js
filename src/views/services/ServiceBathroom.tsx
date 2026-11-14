"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Droplets, Sparkles, Bath, ShowerHead } from "lucide-react";
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

import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const bathroomStyles = [
  { title: "Spa-Inspired Bathroom", description: "Relaxing retreat with premium fixtures", image: kitchenImage },
  { title: "Modern Minimalist", description: "Clean lines with floating vanities", image: bedroomImage },
  { title: "Classic Elegance", description: "Timeless marble and brass accents", image: wardrobeImage },
  { title: "Industrial Chic", description: "Concrete textures with matte black fixtures", image: kitchenImage },
  { title: "Compact Smart Bath", description: "Space-saving solutions for small bathrooms", image: bedroomImage },
  { title: "Luxury Master Bath", description: "Freestanding tub with walk-in shower", image: wardrobeImage },
];

const bathroomFeatures = [
  { icon: Bath, title: "Premium Fixtures", description: "Top brands like Kohler, Grohe, and American Standard" },
  { icon: Droplets, title: "Waterproofing", description: "Complete waterproofing solutions for long-lasting durability" },
  { icon: ShowerHead, title: "Smart Showers", description: "Rain showers, hand showers, and body jets for spa experience" },
  { icon: Sparkles, title: "Elegant Finishes", description: "Designer tiles, vanities, and mirrors for stunning aesthetics" },
];

// AEO-optimized FAQs
const bathroomFAQs = [
  {
    question: "What is the cost of bathroom renovation ?",
    answer: "Bathroom renovation  costs ₹1-3 lakh for complete makeover. At EverySpaces, basic renovations start from ₹80,000, premium from ₹1.5 lakh with Kohler/Grohe fixtures, and luxury spa bathrooms from ₹2.5 lakh."
  },
  {
    question: "How long does bathroom renovation take?",
    answer: "Complete bathroom renovation takes 10-15 working days including demolition, waterproofing, tiling, and fixture installation. EverySpaces provides dedicated project management for timely completion."
  },
  {
    question: "Which bathroom fixtures are best for?",
    answer: "EverySpaces recommends Kohler, Grohe, American Standard, and Jaquar for durability and after-sales service. We help select fixtures based on your budget, style preference, and water pressure requirements."
  },
  {
    question: "Do you provide waterproofing for bathrooms?",
    answer: "Yes, EverySpaces provides complete waterproofing with Dr. Fixit or FOSROC products. We ensure waterproofing of walls up to 6 feet height and complete floor waterproofing with 10-year leakage warranty."
  }
];

const ServiceBathroom = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Bathroom Design",
      "Spa-inspired bathroom renovation  with premium fixtures from Kohler, Grohe. Complete waterproofing and designer finishes.",
      "https://everyspaces.com/services/bathroom-design",
      kitchenImage,
      "80000-300000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Premium Fixtures", "Waterproofing", "Rain Shower", "Designer Tiles", "Vanity Unit"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Bathroom Design", url: "https://everyspaces.com/services/bathroom-design" }
    ]),
    createFAQSchema(bathroomFAQs, 'services/bathroom-design'),
    createProductSchema({
      name: "Bathroom Renovation",
      description: "Complete bathroom renovation  with Kohler/Grohe fixtures, designer tiles, and waterproofing. 10-15 day completion.",
      image: kitchenImage,
      url: "https://everyspaces.com/services/bathroom-design",
      priceRange: "80000-300000",
      category: "Home Improvement > Bathroom"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Bathroom Design" }]} />
      
      <main className="pb-24">
        <ServiceHero title={"Elegant Bathroom Design"} description={"Transform your bathroom into a spa-like sanctuary with EverySpaces"} image={kitchenImage} formName={"Bathroom Design Page Form"} />

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Bathroom Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Bathroom Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {bathroomStyles.map((item, index) => (
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
              {bathroomFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="bathroom-design" />
        <RelatedLocalities currentSlug="hsr-layout" />

        <FAQSection faqs={bathroomFAQs} />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Upgrade Your Bathroom?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free bathroom design consultation</p>
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

export default ServiceBathroom;


