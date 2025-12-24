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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Intorza | Best Interior Designers in Bangalore | Home Interiors</title>
        <meta
          name="description"
          content="Looking for Interior Designers in Bengaluru? Intorza delivers stunning modular kitchens, wardrobes & full home interiors with 10-year warranty. Book free consultation!"
        />
        <link rel="canonical" href="https://intorza.com/" />
      </Helmet>
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
