"use client";

import Header from "@/components/Header";
import BangaloreHeroSection from "@/components/BangaloreHeroSection";
import ActionGrid from "@/components/ActionGrid";
import BestServices from "@/components/BestServices";
import ServicesCarousel from "@/components/ServicesCarousel";
import BangaloreContentSection from "@/components/BangaloreContentSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BangaloreFAQSection from "@/components/BangaloreFAQSection";
import BangaloreLocalitiesSection from "@/components/BangaloreLocalitiesSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { StructuredData, localBusinessSchema, createFAQSchema } from "@/components/StructuredData";

const bangaloreFaqsForSchema = [
  { question: "What is the average cost of a 2BHK interior design in Bangalore?", answer: "A complete 2BHK interior design in Bangalore typically costs between ₹6 lakhs to ₹15 lakhs depending on materials, finishes, and scope. At EverySpaces, popular 2BHK packages start around ₹8 lakhs." },
  { question: "Which areas in Bangalore have the highest demand for interior design?", answer: "Whitefield, Sarjapur Road, Bellandur, Electronic City, and HSR Layout see strong demand because of new residential growth and IT corridor expansion." },
  { question: "How do I choose the right interior designer in Bangalore?", answer: "Look for Bangalore-specific portfolio, in-house manufacturing, written warranty, BBMP/society process handling, transparent pricing, and verified customer reviews." },
  { question: "What modular kitchen layout works best for Bangalore apartments?", answer: "L-shaped and parallel layouts work best for compact Bangalore apartments, while U-shaped or island layouts suit larger homes and villas." },
  { question: "What materials are best suited for Bangalore's climate?", answer: "BWR grade plywood, marine plywood for kitchen bases, moisture-resistant MDF, and powder-coated hardware are ideal for long-term durability." },
  { question: "Can EverySpaces handle interior design for apartments in gated communities?", answer: "Yes, we work in Prestige, Brigade, Sobha, Salarpuria, and Puravankara properties. We handle society permissions, freight elevator booking, and compliance." },
  { question: "Do you offer EMI or financing options for interior design in Bangalore?", answer: "Yes, we offer milestone-based payments and EMI options through banking partners." },
  { question: "How long does a full home interior project take in Bangalore?", answer: "Modular kitchen 15-20 days, 2BHK full interior 45-55 days, 3BHK/villa 60-90 days with dedicated project management." },
];

const bangaloreLocalBusinessSchema = {
  ...localBusinessSchema,
  "@type": "InteriorDesignBusiness",
  "name": "EverySpaces Interior Design - Bangalore",
  "url": "https://everyspaces.com/bangalore",
  "areaServed": [
    { "@type": "City", "name": "Bangalore" },
    { "@type": "Place", "name": "Whitefield" },
    { "@type": "Place", "name": "Indiranagar" },
    { "@type": "Place", "name": "Koramangala" },
    { "@type": "Place", "name": "HSR Layout" },
    { "@type": "Place", "name": "Sarjapur Road" },
    { "@type": "Place", "name": "Electronic City" },
    { "@type": "Place", "name": "Hebbal" },
    { "@type": "Place", "name": "Jayanagar" }
  ]
};

const Bangalore = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={[bangaloreLocalBusinessSchema, createFAQSchema(bangaloreFaqsForSchema, 'bangalore')]} />
      <Header />
      <main>
        <BangaloreHeroSection />
        <ActionGrid />
        <BestServices />
        <ServicesCarousel />
        <BangaloreContentSection />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <BangaloreFAQSection />
        <BangaloreLocalitiesSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Bangalore;

