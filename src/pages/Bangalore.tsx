import { Helmet } from "react-helmet-async";
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
  { question: "What is the average cost of a 2BHK interior design in Bangalore in 2025?", answer: "In 2025, a complete 2BHK interior design in Bangalore costs between ₹6 lakhs to ₹15 lakhs depending on materials, finishes, and scope. At Intorza, our most popular 2BHK package starts at ₹8 lakhs." },
  { question: "Which areas in Bangalore have the highest demand for interior design?", answer: "Whitefield, Sarjapur Road, and Electronic City lead in demand. Koramangala, Indiranagar, and HSR Layout see high renovation demand. Intorza has completed 500+ projects across all these localities." },
  { question: "How do I choose the right interior designer in Bangalore?", answer: "Look for Bangalore-specific portfolio, in-house manufacturing, written warranty (Intorza offers 10-year), BBMP approval handling, transparent pricing, and real Google reviews." },
  { question: "What modular kitchen layout works best for Bangalore apartments?", answer: "L-shaped and parallel layouts work best for compact Bangalore apartments (50-80 sq ft kitchens). U-shaped or island layouts suit larger villa kitchens." },
  { question: "What materials are best suited for Bangalore's climate?", answer: "BWR grade plywood, marine plywood for kitchen bases, moisture-resistant MDF, and powder-coated hardware. Intorza exclusively uses BWR plywood with Hettich/Hafele hardware." },
  { question: "Can Intorza handle interior design for apartments in gated communities?", answer: "Yes, we work in Prestige, Brigade, Sobha, Salarpuria, and Puravankara properties. We handle society permissions, freight elevator booking, and compliance." },
  { question: "Do you offer EMI or financing options for interior design in Bangalore?", answer: "Yes, we offer 50-40-10 milestone payments and 0% EMI for up to 12 months through banking partners." },
  { question: "How long does a full home interior project take in Bangalore?", answer: "Modular kitchen 15-20 days, 2BHK full interior 45-55 days, 3BHK/villa 60-90 days. We assign a dedicated project manager for daily updates." },
];

const bangaloreLocalBusinessSchema = {
  ...localBusinessSchema,
  "@type": "InteriorDesignBusiness",
  "name": "Intorza Interior Design - Bangalore",
  "url": "https://intorza.com/bangalore",
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
      <Helmet>
        <title>Interior Designers in Bangalore | Top-Rated Home Interiors | Intorza</title>
        <meta
          name="description"
          content="Looking for interior designers in Bangalore? Intorza offers premium modular kitchens, wardrobes & home interiors across Whitefield, Koramangala, HSR Layout & more. 500+ projects, 10-year warranty, 45-day delivery!"
        />
        <meta
          name="keywords"
          content="interior designers in Bangalore, home interiors Bangalore, modular kitchen Bangalore, wardrobe designers Bangalore, best interior designers Bangalore, affordable interior design Bangalore, 2BHK interior design cost Bangalore, Bangalore home renovation"
        />
        <link rel="canonical" href="https://intorza.com/bangalore" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Interior Designers in Bangalore | 500+ Projects | Intorza" />
        <meta property="og:description" content="Bangalore's top-rated interior design company. Modular kitchens from ₹2.5L, 2BHK interiors from ₹8L. Free consultation across all Bangalore localities!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://intorza.com/bangalore" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Intorza" />
      </Helmet>
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
