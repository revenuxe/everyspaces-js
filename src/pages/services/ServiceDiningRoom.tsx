import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, UtensilsCrossed, Lamp, Frame, Wine } from "lucide-react";
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

import kitchenImage from "@/assets/service-modular-kitchen.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";

const diningStyles = [
  { title: "Open Dining Area", description: "Seamlessly connected to living and kitchen", image: kitchenImage },
  { title: "Formal Dining Room", description: "Dedicated elegant space for special occasions", image: livingImage },
  { title: "Breakfast Nook", description: "Cozy corner for casual family meals", image: bedroomImage },
  { title: "Modern Minimalist", description: "Clean lines with statement dining set", image: kitchenImage },
  { title: "Rustic Charm", description: "Warm wooden elements with farmhouse appeal", image: livingImage },
  { title: "Contemporary Luxury", description: "Premium finishes with designer furniture", image: bedroomImage },
];

const diningFeatures = [
  { icon: UtensilsCrossed, title: "Custom Dining Tables", description: "6, 8, or 10-seater tables designed to fit your space perfectly" },
  { icon: Lamp, title: "Statement Lighting", description: "Chandeliers, pendant lights, and accent lighting for ambiance" },
  { icon: Wine, title: "Bar & Crockery Units", description: "Elegant storage for your fine china and beverage collection" },
  { icon: Frame, title: "Wall Decor", description: "Feature walls, mirrors, and artwork for visual interest" },
];

// AEO-optimized FAQs
const diningRoomFAQs = [
  {
    question: "What is the cost of dining room design in Bangalore?",
    answer: "Dining room design in Bangalore costs ₹50,000 to ₹2 lakh depending on size and fixtures. At Intorza, basic setups start from ₹50,000, with crockery units from ₹80,000, and luxury dining with chandelier from ₹1.5 lakh."
  },
  {
    question: "What size dining table do I need?",
    answer: "For 4-person families, 4x3 feet table works. 6-seater needs 5x3 feet, 8-seater needs 6x3.5 feet. Intorza designs custom dining tables based on your room size and family requirements."
  },
  {
    question: "What lighting is best for dining room?",
    answer: "Intorza recommends warm 2700-3000K lighting for dining rooms. Chandeliers or pendant lights should hang 30-36 inches above table. We add dimmer controls for ambiance during dinner parties."
  },
  {
    question: "Can you design a dining area in living room?",
    answer: "Yes, Intorza specializes in open-plan living-dining designs. We use rugs, lighting, and furniture placement to define zones while maintaining visual flow. Starting from ₹50,000 for dining area."
  }
];

const ServiceDiningRoom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Dining Room" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Dining Room Design Page Form",
        source_page: "/services/dining-room",
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
      "Dining Room Design Bangalore",
      "Elegant dining room designs in Bangalore. Custom dining tables, crockery units, bar cabinets, and statement chandeliers for family gatherings.",
      "https://intorza.in/services/dining-room",
      "https://intorza.in/service-dining-room.jpg",
      "50000-200000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Dining Table", "Crockery Unit", "Chandelier", "Bar Cabinet", "Feature Wall"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.in" },
      { name: "Services", url: "https://intorza.in/services" },
      { name: "Dining Room", url: "https://intorza.in/services/dining-room" }
    ]),
    createFAQSchema(diningRoomFAQs, 'services/dining-room'),
    createProductSchema({
      name: "Dining Room Interior Design",
      description: "Elegant dining room designs in Bangalore with custom tables, crockery units, chandeliers, and bar cabinets.",
      image: "https://intorza.in/service-dining-room.jpg",
      url: "https://intorza.in/services/dining-room",
      priceRange: "50000-200000",
      category: "Home Improvement > Dining Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dining Room Design Bangalore | Crockery Unit & Bar Cabinet | Intorza</title>
        <meta name="description" content="Best dining room designers in Bangalore. Custom tables, crockery units from ₹50K. Chandeliers, bar cabinets. Free consultation!" />
        <meta name="keywords" content="dining room design bangalore, dining table design, crockery unit design, dining room interior, bar cabinet design, chandelier" />
        <link rel="canonical" href="https://intorza.in/services/dining-room" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Dining Room Design Bangalore | Crockery Unit - Intorza" />
        <meta property="og:description" content="Dining rooms from ₹50K. Custom tables, crockery units, chandeliers. Free consultation!" />
        <meta property="og:url" content="https://intorza.in/services/dining-room" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Dining Room" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={kitchenImage} alt="Dining Room Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Dining Room Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Create memorable dining experiences with Intorza's elegant designs
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Dining Room Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Dining Room, Bar Cabinet)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Dining Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Dining Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {diningStyles.map((item, index) => (
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
              {diningFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="dining-room" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your Dining Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free dining room design consultation</p>
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

export default ServiceDiningRoom;
