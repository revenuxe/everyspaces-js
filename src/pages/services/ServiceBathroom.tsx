import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Droplets, Sparkles, Bath, ShowerHead } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";

import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const bathroomStyles = [
  { title: "Spa-Inspired Bathroom", description: "Relaxing retreat with premium fixtures", image: kitchenImage },
  { title: "Modern Minimalist", description: "Clean lines with floating vanities", image: bedroomImage },
  { title: "Classic Elegance", description: "Timeless marble and brass accents", image: wardrobeImage },
  { title: "Industrial Chic", description: "Concrete textures with matte black fixtures", image: kitchenImage },
  { title: "Compact Smart Bath", description: "Space-saving solutions for small bathrooms", image: bedroomImage },
  { title: "Luxury Master Bath", description: "Freestanding tub with walk-in shower", image: wardrobeImage },
];

const bathroomFeatures = [
  { icon: Bath, title: "Premium Fixtures", description: "Top brands like Kohler, Grohe, and American Standard" },
  { icon: Droplets, title: "Waterproofing", description: "Complete waterproofing solutions for long-lasting durability" },
  { icon: ShowerHead, title: "Smart Showers", description: "Rain showers, hand showers, and body jets for spa experience" },
  { icon: Sparkles, title: "Elegant Finishes", description: "Designer tiles, vanities, and mirrors for stunning aesthetics" },
];

const ServiceBathroom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Master Bathroom" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Bathroom Design Page Form",
        source_page: "/services/bathroom-design",
        data: formData,
      });
      if (error) throw error;
      navigate("/thank-you");
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bathroom Design Bangalore | Spa-Inspired Renovation | Intorza</title>
        <meta name="description" content="Transform your bathroom into a spa-like retreat with Intorza Bangalore. Premium fixtures from Kohler & Grohe. Complete bathroom renovation services!" />
        <meta name="keywords" content="bathroom design bangalore, bathroom interior, modern bathroom design, bathroom renovation, spa bathroom" />
        <link rel="canonical" href="https://intorza.com/services/bathroom-design" />
      </Helmet>
      <Header />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={kitchenImage} alt="Elegant Bathroom Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Elegant Bathroom Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Transform your bathroom into a spa-like sanctuary with Intorza
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Bathroom Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all">
                    <option value="Master Bathroom">Master Bathroom</option>
                    <option value="Guest Bathroom">Guest Bathroom</option>
                    <option value="Powder Room">Powder Room</option>
                    <option value="All Bathrooms">All Bathrooms</option>
                  </select>
                  <button type="submit" disabled={isSubmitting} className="w-full btn-terracotta py-4 rounded-2xl text-secondary-foreground font-semibold">
                    {isSubmitting ? "Submitting..." : "Get Free Quote"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Bathroom Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Bathroom Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {bathroomStyles.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/70 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base md:text-lg text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/90 text-xs md:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary text-center mb-10">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bathroomFeatures.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Upgrade Your Bathroom?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free bathroom design consultation</p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ServiceBathroom;
