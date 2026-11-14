"use client";

import BottomNav from "@/components/BottomNav";
import HomePageSections from "@/components/HomePageSections";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
        <HomePageSections />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
