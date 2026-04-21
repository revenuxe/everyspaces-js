"use client";

import Header from "@/components/Header";
import HyderabadHeroSection from "@/components/HyderabadHeroSection";
import ActionGrid from "@/components/ActionGrid";
import BestServices from "@/components/BestServices";
import ServicesCarousel from "@/components/ServicesCarousel";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocalitiesSection from "@/components/LocalitiesSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import {
  StructuredData,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  howToInteriorDesignSchema,
  professionalServiceSchema,
  commonFAQs,
  createFAQSchema,
} from "@/components/StructuredData";

const Hyderabad = () => {
  const citySchemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    howToInteriorDesignSchema,
    professionalServiceSchema,
    createFAQSchema(commonFAQs, "hyderabad-city"),
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={citySchemas} />
      <Header />
      <main>
        <HyderabadHeroSection />
        <ActionGrid />
        <BestServices />
        <ServicesCarousel />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <LocalitiesSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Hyderabad;
