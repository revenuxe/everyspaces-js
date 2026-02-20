import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Tv, Sofa, Lamp, Frame } from "lucide-react";
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

import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";

const livingStyles = [
  { title: "Modern Living Room", description: "Sleek furniture with smart home integration", image: livingImage },
  { title: "Classic Living Room", description: "Timeless elegance with rich wood tones", image: bedroomImage },
  { title: "Minimalist Space", description: "Clean lines, neutral palette, maximum calm", image: wardrobeImage },
  { title: "Contemporary Style", description: "Bold colors with artistic accents", image: livingImage },
  { title: "Scandinavian Design", description: "Cozy hygge with natural materials", image: bedroomImage },
  { title: "Luxury Lounge", description: "Premium finishes with statement pieces", image: wardrobeImage },
];

const livingFeatures = [
  { icon: Tv, title: "TV Unit Design", description: "Custom entertainment units with cable management and display storage" },
  { icon: Sofa, title: "Seating Layout", description: "Optimal furniture placement for conversation and comfort" },
  { icon: Lamp, title: "Lighting Design", description: "Ambient, task, and accent lighting for every mood" },
  { icon: Frame, title: "Wall Treatments", description: "Feature walls, paneling, and art placement" },
];

// AEO-optimized FAQs
const livingRoomFAQs = [
  {
    question: "What is the cost of living room interior design in Bangalore?",
    answer: "Living room interior design in Bangalore costs ₹1-2.5 lakh depending on size and finishes. At Intorza, packages include TV unit, false ceiling, feature wall, and lighting. Basic packages start from ₹80,000."
  },
  {
    question: "What is included in living room interior design?",
    answer: "Intorza's living room design includes custom TV unit with storage, false ceiling with LED lighting, feature wall or wall paneling, sofa layout planning, curtain selection, and complete color consultation."
  },
  {
    question: "How to make a small living room look bigger?",
    answer: "Intorza uses light colors, mirrors, minimal furniture, wall-mounted TV units, and smart lighting to make small living rooms appear larger. Multi-functional furniture and vertical storage also help maximize space."
  },
  {
    question: "What TV unit designs are trending in Bangalore?",
    answer: "Popular TV unit designs in Bangalore include floating wall-mounted units, floor-to-ceiling entertainment walls, minimalist designs with hidden storage, and units with integrated LED backlighting. Intorza offers all these styles."
  }
];

const ServiceLivingRoom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Living Room" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Living Room Design Page Form",
        source_page: "/services/living-room",
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

  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Living Room Interior Design Bangalore",
      "Expert living room designers in Bangalore offering TV units, false ceilings, feature walls, and smart lighting solutions.",
      "https://intorza.com/services/living-room",
      "https://intorza.com/service-living-room.jpg",
      "80000-300000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["TV Unit Design", "False Ceiling", "Feature Wall", "Ambient Lighting", "Wall Paneling"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Living Room", url: "https://intorza.com/services/living-room" }
    ]),
    createFAQSchema(livingRoomFAQs, 'services/living-room'),
    createProductSchema({
      name: "Living Room Interior Design",
      description: "Complete living room design in Bangalore including TV unit, false ceiling, feature wall, and lighting. 10-year warranty included.",
      image: "https://intorza.com/service-living-room.jpg",
      url: "https://intorza.com/services/living-room",
      priceRange: "80000-300000",
      category: "Home Improvement > Living Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Living Room Interior Design Bangalore | TV Unit & False Ceiling | Intorza</title>
        <meta name="description" content="Best living room designers in Bangalore. TV units, false ceilings, feature walls from ₹80K. 10-year warranty, free design consultation!" />
        <meta name="keywords" content="living room interior design bangalore, TV unit design, living room false ceiling, modern living room, feature wall design bangalore" />
        <link rel="canonical" href="https://intorza.com/services/living-room" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Living Room Interior Design Bangalore | TV Unit & False Ceiling - Intorza" />
        <meta property="og:description" content="Premium living room interiors from ₹80K. TV units, false ceiling, feature walls. 10-year warranty!" />
        <meta property="og:url" content="https://intorza.com/services/living-room" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Living Room" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={livingImage} alt="Smart Living Room Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Smart Living Room Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Create the heart of your home with Intorza's expert designers
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Living Room Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Living Room, Living + Dining)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Living Room Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Living Room Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {livingStyles.map((item, index) => (
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
              {livingFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="living-room" />
        <RelatedLocalities currentSlug="hsr-layout" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Transform Your Living Room?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza today for a free design consultation</p>
            <a href="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ServiceLivingRoom;
