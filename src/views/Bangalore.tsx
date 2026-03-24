"use client";

import Header from "@/components/Header";
import BangaloreHeroSection from "@/components/BangaloreHeroSection";
import ActionGrid from "@/components/ActionGrid";
import BangaloreContentSection from "@/components/BangaloreContentSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BangaloreFAQSection from "@/components/BangaloreFAQSection";
import LocalitiesSection from "@/components/LocalitiesSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { StructuredData, localBusinessSchema, createFAQSchema } from "@/components/StructuredData";

const bangaloreFaqsForSchema = [
  { question: "What is the average cost of a 2BHK interior design in Bangalore in 2025?", answer: "In 2025, a complete 2BHK interior design in Bangalore costs between ₹6 lakhs to ₹15 lakhs depending on materials, finishes, and scope. At EverySpaces, our most popular 2BHK package starts at ₹8 lakhs." },
  { question: "Which areas in Bangalore have the highest demand for interior design?", answer: "Whitefield, Sarjapur Road, and Electronic City lead in demand. Koramangala, Indiranagar, and HSR Layout see high renovation demand. EverySpaces has completed 500+ projects across all these localities." },
  { question: "How do I choose the right interior designer in Bangalore?", answer: "Look for Bangalore-specific portfolio, in-house manufacturing, written warranty (EverySpaces offers 10-year), BBMP approval handling, transparent pricing, and real Google reviews." },
  { question: "What modular kitchen layout works best for Bangalore apartments?", answer: "L-shaped and parallel layouts work best for compact Bangalore apartments (50-80 sq ft kitchens). U-shaped or island layouts suit larger villa kitchens." },
  { question: "What materials are best suited for Bangalore's climate?", answer: "BWR grade plywood, marine plywood for kitchen bases, moisture-resistant MDF, and powder-coated hardware. EverySpaces exclusively uses BWR plywood with Hettich/Hafele hardware." },
  { question: "Can EverySpaces handle interior design for apartments in gated communities?", answer: "Yes, we work in Prestige, Brigade, Sobha, Salarpuria, and Puravankara properties. We handle society permissions, freight elevator booking, and compliance." },
  { question: "Do you offer EMI or financing options for interior design in Bangalore?", answer: "Yes, we offer 50-40-10 milestone payments and 0% EMI for up to 12 months through banking partners." },
  { question: "How long does a full home interior project take in Bangalore?", answer: "Modular kitchen 15-20 days, 2BHK full interior 45-55 days, 3BHK/villa 60-90 days. We assign a dedicated project manager for daily updates." },
];

const bangaloreLocalBusinessSchema = {
  ...localBusinessSchema,
  "@type": "InteriorDesignBusiness",
  "name": "EverySpaces Interior Design - Bangalore",
  "url": "https://everyspaces.com/bangalore",
  "areaServed": [
    { "@type": "City", "name": "Bangalore" },
    { "@type": "Place", "name": "Koramangala" },
    { "@type": "Place", "name": "Indiranagar" },
    { "@type": "Place", "name": "HSR Layout" },
    { "@type": "Place", "name": "Whitefield" },
    { "@type": "Place", "name": "Electronic City" },
    { "@type": "Place", "name": "Sarjapur Road" },
    { "@type": "Place", "name": "Jayanagar" },
    { "@type": "Place", "name": "JP Nagar" }
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
        <BangaloreContentSection />
        <ServicesCarousel />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <BangaloreFAQSection />
        <LocalitiesSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Bangalore;
