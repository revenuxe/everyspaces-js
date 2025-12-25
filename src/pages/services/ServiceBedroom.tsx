import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Bed, Shield, Sparkles, Palette } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
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

import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";

const bedroomStyles = [
  { title: "Contemporary Bedroom", description: "Clean lines with modern aesthetics", image: bedroomImage },
  { title: "Traditional Bedroom", description: "Classic elegance with rich textures", image: wardrobeImage },
  { title: "Minimalist Bedroom", description: "Simple, clutter-free sanctuary", image: livingImage },
  { title: "Scandinavian Style", description: "Light, airy with natural elements", image: bedroomImage },
  { title: "Industrial Chic", description: "Raw materials with urban appeal", image: wardrobeImage },
  { title: "Bohemian Retreat", description: "Eclectic mix of patterns and colors", image: livingImage },
];

const bedroomFeatures = [
  { icon: Bed, title: "Custom Bed Designs", description: "Platform, storage, or upholstered beds tailored to your style" },
  { icon: Shield, title: "Premium Wardrobes", description: "Sliding, hinged, or walk-in closets with smart organization" },
  { icon: Sparkles, title: "Ambient Lighting", description: "Layered lighting for perfect mood and functionality" },
  { icon: Palette, title: "Color Consultation", description: "Expert color schemes for restful sleep environment" },
];

// AEO-optimized FAQs
const bedroomFAQs = [
  {
    question: "What is the cost of bedroom interior design in Bangalore?",
    answer: "Bedroom interior design in Bangalore costs ₹1.5-3 lakh for a master bedroom including wardrobe, bed design, and false ceiling. At Intorza, bedroom packages start from ₹1.2 lakh with premium finishes and 10-year warranty."
  },
  {
    question: "What is included in bedroom interior design?",
    answer: "Intorza's bedroom interior includes custom bed design with headboard, wardrobe with smart storage, side tables, study table (optional), false ceiling with lights, wall treatments, and complete color consultation."
  },
  {
    question: "How long does bedroom interior design take?",
    answer: "Single bedroom interior design takes 20-25 working days from design approval. This includes manufacturing, painting, and installation. Multiple bedroom projects take 30-45 days."
  },
  {
    question: "Can you design a small bedroom to look bigger?",
    answer: "Yes, Intorza specializes in space optimization for small bedrooms. We use light colors, mirror wardrobes, wall-mounted furniture, and smart storage to maximize space and create an illusion of larger rooms."
  }
];

const ServiceBedroom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Master Bedroom" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Bedroom Design Page Form",
        source_page: "/services/bedroom-design",
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
      "Bedroom Interior Design Bangalore",
      "Expert bedroom designers in Bangalore offering master bedroom, kids room, and guest room interiors with custom wardrobes and ambient lighting.",
      "https://intorza.com/services/bedroom-design",
      "https://intorza.com/service-bedroom.jpg",
      "120000-400000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Master Bedroom", "Kids Room", "Guest Room", "Custom Wardrobe", "False Ceiling", "Ambient Lighting"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Bedroom Design", url: "https://intorza.com/services/bedroom-design" }
    ]),
    createFAQSchema(bedroomFAQs),
    createProductSchema({
      name: "Bedroom Interior Design",
      description: "Complete bedroom interior design in Bangalore including bed design, wardrobe, false ceiling, and ambient lighting. 10-year warranty included.",
      image: "https://intorza.com/service-bedroom.jpg",
      url: "https://intorza.com/services/bedroom-design",
      priceRange: "120000-400000",
      category: "Home Improvement > Bedroom"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bedroom Interior Design Bangalore | Master & Kids Room | Intorza</title>
        <meta name="description" content="Best bedroom designers in Bangalore. Master bedroom from ₹1.2L including wardrobe, bed design, false ceiling. 10-year warranty, free consultation!" />
        <meta name="keywords" content="bedroom interior design bangalore, master bedroom design, bedroom wardrobe design, luxury bedroom interiors, kids room design bangalore" />
        <link rel="canonical" href="https://intorza.com/services/bedroom-design" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Bedroom Interior Design Bangalore | Master & Kids Room - Intorza" />
        <meta property="og:description" content="Premium bedroom interiors from ₹1.2L. Custom wardrobes, bed design, false ceiling. 10-year warranty!" />
        <meta property="og:url" content="https://intorza.com/services/bedroom-design" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={bedroomImage} alt="Luxury Bedroom Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Luxury Bedroom Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Create your perfect sanctuary with Intorza's expert bedroom designers
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Bedroom Design Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all">
                    <option value="Master Bedroom">Master Bedroom</option>
                    <option value="Guest Bedroom">Guest Bedroom</option>
                    <option value="Kids Bedroom">Kids Bedroom</option>
                    <option value="Full Home">Full Home Bedrooms</option>
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Bedroom Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Bedroom Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {bedroomStyles.map((item, index) => (
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
              {bedroomFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="bedroom-design" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your Dream Bedroom?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free bedroom design consultation</p>
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

export default ServiceBedroom;
