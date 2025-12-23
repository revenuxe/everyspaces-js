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
        <title>Interior Designers in Bangalore | Best Home Interiors | Intorza</title>
        <meta
          name="description"
          content="Looking for interior designers in Bangalore? Intorza offers premium modular kitchens, wardrobes & home interiors with 10-year warranty, 45-day delivery & easy EMI. Get free quote!"
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
        
        {/* Bangalore-specific Trust Section */}
        <section className="py-12 bg-muted/30">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <p className="font-display text-3xl md:text-4xl text-secondary mb-1">500+</p>
                <p className="text-sm text-muted-foreground font-body">Homes in Bangalore</p>
              </div>
              <div className="p-4">
                <p className="font-display text-3xl md:text-4xl text-secondary mb-1">4.9★</p>
                <p className="text-sm text-muted-foreground font-body">Google Rating</p>
              </div>
              <div className="p-4">
                <p className="font-display text-3xl md:text-4xl text-secondary mb-1">10 Yr</p>
                <p className="text-sm text-muted-foreground font-body">Warranty</p>
              </div>
              <div className="p-4">
                <p className="font-display text-3xl md:text-4xl text-secondary mb-1">45</p>
                <p className="text-sm text-muted-foreground font-body">Days Delivery</p>
              </div>
            </div>
          </div>
        </section>
        
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
