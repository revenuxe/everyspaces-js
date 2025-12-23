import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ActionGrid from "@/components/ActionGrid";
import ServicesCarousel from "@/components/ServicesCarousel";
import LocalitiesSection from "@/components/LocalitiesSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ActionGrid />
        <ServicesCarousel />
        <LocalitiesSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
