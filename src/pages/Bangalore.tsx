import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import BangaloreHeroSection from "@/components/BangaloreHeroSection";
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

const Bangalore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Interior Designers in Bangalore | Top-Rated Home Interiors | Intorza</title>
        <meta
          name="description"
          content="Looking for interior designers in Bangalore? Intorza offers premium modular kitchens, wardrobes & home interiors with 10-year warranty, 45-day delivery!"
        />
        <meta
          name="keywords"
          content="interior designers in Bangalore, home interiors Bangalore, modular kitchen Bangalore, wardrobe designers Bangalore, best interior designers Bangalore, affordable interior design Bangalore"
        />
        <link rel="canonical" href="https://intorza.com/bangalore" />
      </Helmet>
      <Header />
      <main>
        <BangaloreHeroSection />
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

export default Bangalore;
