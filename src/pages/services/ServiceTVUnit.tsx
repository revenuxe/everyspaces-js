import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Tv, Layers, Lightbulb, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import RelatedLocalities from "@/components/RelatedLocalities";
import { 
  StructuredData, 
  createServiceSchema, 
  createBreadcrumbSchema,
  createFAQSchema,
  createProductSchema
} from "@/components/StructuredData";

import tvUnitImage from "@/assets/service-tv-unit.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";

const tvUnitStyles = [
  { title: "Floating TV Unit", description: "Wall-mounted with hidden storage", image: tvUnitImage },
  { title: "Floor-to-Ceiling Unit", description: "Full wall entertainment center", image: livingImage },
  { title: "Compact TV Unit", description: "Space-saving design for apartments", image: bedroomImage },
  { title: "Backlit Panel", description: "Ambient LED lighting behind TV", image: tvUnitImage },
  { title: "Stone Accent Wall", description: "Premium stone cladding with TV mount", image: livingImage },
  { title: "Wooden Panel", description: "Warm wooden grooves with integrated unit", image: bedroomImage },
];

const tvUnitFeatures = [
  { icon: Tv, title: "Custom Sizing", description: "Designed to fit your TV size and wall dimensions perfectly" },
  { icon: Layers, title: "Cable Management", description: "Hidden channels for cables and power points" },
  { icon: Lightbulb, title: "Ambient Lighting", description: "LED strips and spotlights for perfect ambiance" },
  { icon: BookOpen, title: "Storage & Display", description: "Shelves for speakers, gaming consoles, and decor" },
];

// AEO-optimized FAQs
const tvUnitFAQs = [
  {
    question: "What is the cost of TV unit design in Bangalore?",
    answer: "TV unit design in Bangalore costs ₹25,000 to ₹1.5 lakh depending on size and design. At Intorza, floating units start from ₹25,000, wall-mounted panels from ₹40,000, and floor-to-ceiling entertainment walls from ₹80,000."
  },
  {
    question: "Which TV unit design is trending in Bangalore?",
    answer: "Trending TV unit designs in Bangalore include floating wall-mounted units, backlit stone panels, floor-to-ceiling entertainment walls with LED lighting, and minimalist designs with hidden storage. Intorza offers all these styles."
  },
  {
    question: "What size TV unit do I need?",
    answer: "TV unit width should be 1.5-2 times your TV size. For a 55-inch TV, we recommend 6-7 feet wide units. Intorza designs custom TV units based on your TV size, room dimensions, and storage requirements."
  },
  {
    question: "Can you design a TV unit with a feature wall?",
    answer: "Yes, Intorza specializes in TV units with feature walls including stone cladding, wooden panels, PU finish, textured wallpaper, and backlit panels. Prices start from ₹60,000 for TV unit with feature wall."
  }
];

const ServiceTVUnit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "TV Unit" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "TV Unit Design Page Form", source_page: "/services/tv-unit", data: formData });
      if (error) throw error;
      navigate("/thank-you");
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "TV Unit Design Bangalore",
      "Modern TV unit and entertainment wall designs in Bangalore. Floating units, backlit panels, stone accent walls with LED lighting and cable management.",
      "https://intorza.com/services/tv-unit",
      "https://intorza.com/service-tv-unit.jpg",
      "25000-150000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Floating TV Unit", "Backlit Panel", "Stone Accent Wall", "Cable Management", "LED Lighting"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "TV Unit", url: "https://intorza.com/services/tv-unit" }
    ]),
    createFAQSchema(tvUnitFAQs, 'services/tv-unit'),
    createProductSchema({
      name: "TV Unit & Entertainment Wall",
      description: "Modern TV unit designs in Bangalore with floating units, backlit panels, and feature walls. Includes cable management and LED lighting.",
      image: "https://intorza.com/service-tv-unit.jpg",
      url: "https://intorza.com/services/tv-unit",
      priceRange: "25000-150000",
      category: "Home Improvement > Living Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>TV Unit Design Bangalore | Entertainment Wall | Intorza</title>
        <meta name="description" content="Best TV unit designers in Bangalore. Floating units from ₹25K, backlit panels, stone accent walls. Modern entertainment centers. Free quote!" />
        <meta name="keywords" content="TV unit design bangalore, entertainment unit, floating TV unit, TV wall design, living room TV unit, feature wall design" />
        <link rel="canonical" href="https://intorza.com/services/tv-unit" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Intorza Interior Design" />
        <meta property="og:title" content="TV Unit Design Bangalore | Entertainment Wall - Intorza" />
        <meta property="og:description" content="Modern TV units from ₹25K. Floating units, backlit panels, stone walls. Free consultation!" />
        <meta property="og:url" content="https://intorza.com/services/tv-unit" />
        <meta property="og:image" content="https://intorza.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TV Unit Design Bangalore | Intorza" />
        <meta name="twitter:description" content="Modern TV units from ₹25K. Floating units, backlit panels, stone walls. Free consultation!" />
        <meta name="twitter:image" content="https://intorza.com/og-image.jpg" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "TV Unit" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={tvUnitImage} alt="TV Unit Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                TV Unit Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Modern entertainment centers designed by Intorza experts
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free TV Unit Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., TV Unit, Full Living Room)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">TV Unit Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your TV Unit Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {tvUnitStyles.map((item, index) => (
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
              {tvUnitFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="tv-unit" />
        <RelatedLocalities currentSlug="sarjapur-road" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Upgrade Your Entertainment Area?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free TV unit design consultation</p>
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

export default ServiceTVUnit;
