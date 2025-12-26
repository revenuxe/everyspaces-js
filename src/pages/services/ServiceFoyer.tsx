import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, DoorOpen, Sparkles, Frame, Lamp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { 
  StructuredData, 
  createServiceSchema, 
  createBreadcrumbSchema,
  createFAQSchema,
  createProductSchema
} from "@/components/StructuredData";

import villaImage from "@/assets/service-villa.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";

const foyerStyles = [
  { title: "Grand Entrance", description: "Statement foyer with double-height ceiling", image: villaImage },
  { title: "Modern Minimalist", description: "Clean lines with floating console", image: livingImage },
  { title: "Classic Elegance", description: "Traditional with ornate mirror and console", image: bedroomImage },
  { title: "Compact Foyer", description: "Smart solutions for apartment entrances", image: villaImage },
  { title: "Rustic Charm", description: "Wooden elements with warm lighting", image: livingImage },
  { title: "Contemporary Chic", description: "Bold art pieces with designer furniture", image: bedroomImage },
];

const foyerFeatures = [
  { icon: DoorOpen, title: "Shoe Cabinet", description: "Custom shoe storage with pull-out drawers and ventilation" },
  { icon: Frame, title: "Feature Wall", description: "Statement walls with stone, wood paneling, or artwork" },
  { icon: Lamp, title: "Chandelier & Lighting", description: "Dramatic pendant lights and ambient wall sconces" },
  { icon: Sparkles, title: "Console & Mirror", description: "Designer consoles with decorative mirrors" },
];

// AEO-optimized FAQs
const foyerFAQs = [
  {
    question: "What is the cost of foyer design in Bangalore?",
    answer: "Foyer design in Bangalore costs ₹30,000 to ₹1.5 lakh depending on size and design. At Intorza, basic foyer setups start from ₹30,000, feature walls from ₹50,000, and grand entrances with chandelier from ₹1 lakh."
  },
  {
    question: "What should be included in a foyer design?",
    answer: "A well-designed foyer includes shoe cabinet, console table, mirror, feature wall or art, statement lighting, and a coat/umbrella stand. Intorza customizes foyer elements based on your entrance size and style."
  },
  {
    question: "How to design a small apartment entrance?",
    answer: "For small entrances, Intorza uses wall-mounted shoe cabinets, slim consoles, mirrors to create depth, and vertical storage. We maximize function without cluttering the space. Starting from ₹30,000."
  },
  {
    question: "Can you design a Vastu-compliant entrance?",
    answer: "Yes, Intorza designs Vastu-compliant entrances with proper placement of mirrors, lighting, and decor. We avoid sharp corners, use auspicious elements, and ensure positive energy flow."
  }
];

const ServiceFoyer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Foyer Design" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "Foyer Design Page Form", source_page: "/services/foyer-entrance", data: formData });
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
      "Foyer & Entrance Design Bangalore",
      "Make stunning first impressions with Intorza's foyer designs. Shoe cabinets, console tables, feature walls, and statement lighting in Bangalore.",
      "https://intorza.com/services/foyer-entrance",
      "https://intorza.com/service-foyer.jpg",
      "30000-150000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Shoe Cabinet", "Console Table", "Feature Wall", "Statement Lighting", "Mirror"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Foyer & Entrance", url: "https://intorza.com/services/foyer-entrance" }
    ]),
    createFAQSchema(foyerFAQs, 'services/foyer-entrance'),
    createProductSchema({
      name: "Foyer & Entrance Interior",
      description: "Entrance and foyer design in Bangalore with shoe cabinets, consoles, feature walls, and chandeliers.",
      image: "https://intorza.com/service-foyer.jpg",
      url: "https://intorza.com/services/foyer-entrance",
      priceRange: "30000-150000",
      category: "Home Improvement > Entryway"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Foyer & Entrance Design Bangalore | Entryway Interior | Intorza</title>
        <meta name="description" content="Best foyer designers in Bangalore. Shoe cabinets from ₹30K, console tables, feature walls. Make stunning first impressions. Free quote!" />
        <meta name="keywords" content="foyer design bangalore, entrance interior, shoe cabinet design, console table, entryway design, entrance decor" />
        <link rel="canonical" href="https://intorza.com/services/foyer-entrance" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Foyer & Entrance Design Bangalore - Intorza" />
        <meta property="og:description" content="Entrance makeovers from ₹30K. Shoe cabinets, feature walls, chandeliers. Free consultation!" />
        <meta property="og:url" content="https://intorza.com/services/foyer-entrance" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Foyer & Entrance" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={villaImage} alt="Foyer Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Foyer & Entrance Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Make stunning first impressions with Intorza's entryway designs
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Foyer Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all">
                    <option value="Foyer Design">Complete Foyer</option>
                    <option value="Shoe Cabinet">Shoe Cabinet Only</option>
                    <option value="Feature Wall">Feature Wall</option>
                    <option value="Console + Mirror">Console + Mirror</option>
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Foyer Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Foyer Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {foyerStyles.map((item, index) => (
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
              {foyerFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="foyer-entrance" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Transform Your Entrance?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free foyer design consultation</p>
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

export default ServiceFoyer;
