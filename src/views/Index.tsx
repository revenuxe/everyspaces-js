"use client";

import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedPartnersSection from "@/components/TrustedPartnersSection";
import ActionGrid from "@/components/ActionGrid";
import BestServices from "@/components/BestServices";
import ServicesCarousel from "@/components/ServicesCarousel";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ExploreBangaloreCTA from "@/components/ExploreBangaloreCTA";
import BangaloreLocalitiesSection from "@/components/BangaloreLocalitiesSection";
import Footer from "@/components/Footer";
import { 
  StructuredData, 
  organizationSchema, 
  websiteSchema,
  homePageSchema,
  howToInteriorDesignSchema,
  professionalServiceSchema,
  commonFAQs,
  createFAQSchema,
  allServicesItemList,
} from "@/components/StructuredData";

const Index = () => {
  // Combine all AEO-optimized schemas for maximum AI discoverability
  // Only include FAQPage on home page to avoid duplicates across site
  const aeoSchemas = [
    organizationSchema,
    websiteSchema,
    homePageSchema,
    howToInteriorDesignSchema,
    professionalServiceSchema,
    createFAQSchema(commonFAQs, 'home'),
    allServicesItemList
  ];

  return (
    <div>
      <StructuredData data={aeoSchemas} />
      <Header />
      <main className="minimal-home">
        <HeroSection />
        <TrustedPartnersSection />
        <BestServices />
        <ServicesCarousel />
        <ActionGrid />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ExploreBangaloreCTA />
        <BangaloreLocalitiesSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
