import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Layers, Lightbulb, Palette, Sparkles } from "lucide-react";
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

import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";

const ceilingStyles = [
  { title: "Peripheral Cove", description: "Classic cove lighting around room edges", image: livingImage },
  { title: "Coffered Ceiling", description: "Elegant grid pattern with depth", image: bedroomImage },
  { title: "Tray Ceiling", description: "Recessed center with ambient lighting", image: wardrobeImage },
  { title: "POP Designs", description: "Intricate plaster of paris patterns", image: livingImage },
  { title: "Wooden Ceiling", description: "Warm wooden beams and panels", image: bedroomImage },
  { title: "Stretch Ceiling", description: "Modern printed or glossy finishes", image: wardrobeImage },
];

const ceilingFeatures = [
  { icon: Layers, title: "Multi-Level Designs", description: "Layered ceilings creating depth and visual interest" },
  { icon: Lightbulb, title: "Integrated Lighting", description: "Cove lights, spotlights, and chandeliers built in" },
  { icon: Palette, title: "Premium Finishes", description: "POP, gypsum, MDF, or wooden panel options" },
  { icon: Sparkles, title: "AC Integration", description: "Concealed AC ducts and vents for clean look" },
];

// AEO-optimized FAQs
const falseCeilingFAQs = [
  {
    question: "What is the cost of false ceiling in Bangalore?",
    answer: "False ceiling in Bangalore costs ₹65-150 per sq ft depending on material and design. At Intorza, basic POP ceilings start from ₹65/sq ft, gypsum from ₹85/sq ft, and designer ceilings with cove lighting from ₹120/sq ft."
  },
  {
    question: "Which is better - POP or gypsum false ceiling?",
    answer: "Gypsum is faster to install, fire-resistant, and crack-resistant. POP allows more intricate designs and is cheaper. Intorza recommends gypsum for living rooms and bedrooms, POP for decorative areas."
  },
  {
    question: "How long does false ceiling installation take?",
    answer: "False ceiling installation takes 3-7 days depending on room size and design complexity. Simple peripheral designs take 3-4 days, while designer multi-level ceilings with lighting take 5-7 days."
  },
  {
    question: "What is the ideal false ceiling height?",
    answer: "Minimum 8 feet room height is needed for false ceiling. Intorza recommends dropping 6-9 inches for cove lighting areas. For AC integration, 12-15 inches drop is required in specific zones."
  }
];

const ServiceFalseCeiling = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "False Ceiling" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "False Ceiling Design Page Form", source_page: "/services/false-ceiling", data: formData });
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
      "False Ceiling Design Bangalore",
      "Artistic false ceiling designs in Bangalore. POP, gypsum, wooden ceilings with cove lighting, multi-level designs, and AC integration.",
      "https://intorza.in/services/false-ceiling",
      "https://intorza.in/service-false-ceiling.jpg",
      "50000-200000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["POP Ceiling", "Gypsum Ceiling", "Cove Lighting", "Multi-Level Design", "AC Integration"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.in" },
      { name: "Services", url: "https://intorza.in/services" },
      { name: "False Ceiling", url: "https://intorza.in/services/false-ceiling" }
    ]),
    createFAQSchema(falseCeilingFAQs, 'services/false-ceiling'),
    createProductSchema({
      name: "False Ceiling Design",
      description: "Designer false ceilings in Bangalore with POP, gypsum, cove lighting, and AC integration. 3-7 day installation.",
      image: "https://intorza.in/service-false-ceiling.jpg",
      url: "https://intorza.in/services/false-ceiling",
      priceRange: "50000-200000",
      category: "Home Improvement > Ceiling"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>False Ceiling Design Bangalore | POP & Gypsum Ceiling | Intorza</title>
        <meta name="description" content="Best false ceiling designers in Bangalore. POP from ₹65/sq ft, gypsum, cove lighting. Artistic ceiling designs. 3-7 day installation. Free quote!" />
        <meta name="keywords" content="false ceiling design bangalore, POP ceiling, gypsum ceiling, cove lighting ceiling, living room ceiling, bedroom ceiling" />
        <link rel="canonical" href="https://intorza.in/services/false-ceiling" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="False Ceiling Design Bangalore | POP & Gypsum - Intorza" />
        <meta property="og:description" content="False ceilings from ₹65/sq ft. POP, gypsum, cove lighting. 3-7 day installation!" />
        <meta property="og:url" content="https://intorza.in/services/false-ceiling" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "False Ceiling" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={livingImage} alt="False Ceiling Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                False Ceiling Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Artistic ceiling designs with ambient lighting by Intorza
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Ceiling Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Full Home, Living Room)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Ceiling Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Ceiling Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {ceilingStyles.map((item, index) => (
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
              {ceilingFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="false-ceiling" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Elevate Your Ceilings?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free false ceiling design consultation</p>
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

export default ServiceFalseCeiling;
