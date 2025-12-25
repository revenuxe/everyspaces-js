import { Helmet } from "react-helmet-async";
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
  createFAQSchema
} from "@/components/StructuredData";

const Index = () => {
  // Combine all AEO-optimized schemas for maximum AI discoverability
  const aeoSchemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    homePageSchema,
    howToInteriorDesignSchema,
    professionalServiceSchema,
    createFAQSchema(commonFAQs)
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Intorza | Best Interior Designers in Bangalore | Modular Kitchen & Home Interiors</title>
        <meta
          name="description"
          content="Intorza is Bangalore's top interior design company. Modular kitchens, wardrobes & full home interiors with 10-year warranty. 500+ projects completed. Free consultation!"
        />
        <meta name="keywords" content="best interior designers bangalore, modular kitchen bangalore, wardrobe design bangalore, home interior design bangalore, interior design cost bangalore" />
        <link rel="canonical" href="https://intorza.com/" />
        
        {/* AEO-specific meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Intorza Interior Design" />
        <meta name="publisher" content="Intorza" />
        <meta property="article:publisher" content="https://intorza.com" />
        
        {/* Enhanced Open Graph for AI platforms */}
        <meta property="og:title" content="Best Interior Designers in Bangalore | Modular Kitchen & Home Interiors - Intorza" />
        <meta property="og:description" content="Intorza is Bangalore's top interior design company with 500+ projects and 10-year warranty. Modular kitchens from ₹2.5L, 2BHK interiors from ₹8L. Free consultation!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://intorza.com/" />
        <meta property="og:site_name" content="Intorza" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter/X for AI discovery */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Interior Designers in Bangalore - Intorza" />
        <meta name="twitter:description" content="500+ projects, 10-year warranty. Modular kitchens, wardrobes & complete home interiors. Free consultation!" />
      </Helmet>
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
