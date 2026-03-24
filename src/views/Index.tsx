"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ActionGrid from "@/components/ActionGrid";
import BestServices from "@/components/BestServices";
import ServicesCarousel from "@/components/ServicesCarousel";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ExploreBangaloreCTA from "@/components/ExploreBangaloreCTA";
import LocalitiesSection from "@/components/LocalitiesSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { 
  StructuredData, 
  organizationSchema, 
  localBusinessSchema, 
  websiteSchema,
  homePageSchema,
  howToInteriorDesignSchema,
  professionalServiceSchema,
  commonFAQs,
  createFAQSchema,
  allServicesItemList,
  allLocalitiesItemList
} from "@/components/StructuredData";

const Index = () => {
  // Combine all AEO-optimized schemas for maximum AI discoverability
  // Only include FAQPage on home page to avoid duplicates across site
  const aeoSchemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    homePageSchema,
    howToInteriorDesignSchema,
    professionalServiceSchema,
    createFAQSchema(commonFAQs, 'home'),
    allServicesItemList,
    allLocalitiesItemList
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <main>
        <HeroSection />
        <ActionGrid />
        <BestServices />
        <ServicesCarousel />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ExploreBangaloreCTA />
        <LocalitiesSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
