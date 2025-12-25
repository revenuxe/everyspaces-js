import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Flame, Shield, Heart } from "lucide-react";
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

import poojaImage from "@/assets/service-pooja-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";

const poojaStyles = [
  { title: "Traditional Wooden", description: "Classic teak or rosewood with intricate carvings", image: poojaImage },
  { title: "Modern Minimalist", description: "Clean lines with brass and marble accents", image: bedroomImage },
  { title: "Temple Style", description: "Elaborate mandapam-inspired designs", image: wardrobeImage },
  { title: "Wall-Mounted Unit", description: "Space-saving design for compact homes", image: poojaImage },
  { title: "Corner Pooja Unit", description: "Utilizes corner space elegantly", image: bedroomImage },
  { title: "Walk-in Pooja Room", description: "Dedicated sacred space for devotees", image: wardrobeImage },
];

const poojaFeatures = [
  { icon: Sparkles, title: "Sacred Materials", description: "Teak, rosewood, brass, and marble with traditional craftsmanship" },
  { icon: Flame, title: "Lamp & Diya Space", description: "Dedicated areas for oil lamps, diyas, and agarbatti holders" },
  { icon: Shield, title: "Storage Solutions", description: "Hidden compartments for puja items and religious books" },
  { icon: Heart, title: "Vastu Compliant", description: "Designs following Vastu principles for positive energy" },
];

// AEO-optimized FAQs
const poojaRoomFAQs = [
  {
    question: "What is the cost of pooja room design in Bangalore?",
    answer: "Pooja room design in Bangalore costs ₹30,000 to ₹2 lakh depending on size and materials. At Intorza, wall-mounted units start from ₹30,000, standalone mandirs from ₹60,000, and walk-in pooja rooms from ₹1.5 lakh."
  },
  {
    question: "Which direction is best for pooja room as per Vastu?",
    answer: "As per Vastu, northeast (Ishaan corner) is ideal for pooja rooms. East and north directions are also auspicious. Intorza's designers ensure all pooja room designs follow Vastu principles for positive energy flow."
  },
  {
    question: "What materials are used for pooja room design?",
    answer: "Intorza uses teak wood, rosewood, or sheesham for traditional mandirs. Modern designs feature marble, brass, corian, and lacquer finishes. We also offer CNC-carved MDF for intricate patterns at affordable prices."
  },
  {
    question: "Can you design a pooja unit for small apartments?",
    answer: "Yes, Intorza specializes in compact pooja solutions. Wall-mounted units, corner mandirs, and foldable pooja cabinets are perfect for small apartments. Starting from ₹30,000 with full Vastu compliance."
  }
];

const ServicePoojaRoom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Pooja Room" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "Pooja Room Design Page Form", source_page: "/services/pooja-room", data: formData });
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
      "Pooja Room Design Bangalore",
      "Traditional and modern pooja room designs in Bangalore. Wooden mandirs, wall-mounted units, and walk-in pooja rooms with Vastu compliance.",
      "https://intorza.com/services/pooja-room",
      "https://intorza.com/service-pooja-room.jpg",
      "30000-200000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Wooden Mandir", "Wall-Mounted Unit", "Vastu Compliant", "Traditional Carving", "Marble Finish"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Pooja Room", url: "https://intorza.com/services/pooja-room" }
    ]),
    createFAQSchema(poojaRoomFAQs),
    createProductSchema({
      name: "Pooja Room Interior Design",
      description: "Traditional and modern pooja room designs in Bangalore. Teak wood mandirs, brass accents, and Vastu-compliant layouts.",
      image: "https://intorza.com/service-pooja-room.jpg",
      url: "https://intorza.com/services/pooja-room",
      priceRange: "30000-200000",
      category: "Home Improvement > Pooja Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pooja Room Design Bangalore | Mandir Interior | Vastu | Intorza</title>
        <meta name="description" content="Best pooja room designers in Bangalore. Traditional wooden mandirs from ₹30K. Vastu-compliant designs, teak/rosewood options. Free design consultation!" />
        <meta name="keywords" content="pooja room design bangalore, mandir design, pooja unit, wooden pooja room, vastu pooja room, temple design home" />
        <link rel="canonical" href="https://intorza.com/services/pooja-room" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Pooja Room Design Bangalore | Vastu Compliant - Intorza" />
        <meta property="og:description" content="Traditional mandirs from ₹30K. Teak, rosewood, Vastu-compliant designs. Free consultation!" />
        <meta property="og:url" content="https://intorza.com/services/pooja-room" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={poojaImage} alt="Pooja Room Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Pooja Room Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Create sacred spaces with traditional craftsmanship by Intorza
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Pooja Room Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all">
                    <option value="Pooja Room">Pooja Room</option>
                    <option value="Wall Mounted">Wall Mounted Unit</option>
                    <option value="Temple Style">Temple Style Mandir</option>
                    <option value="Custom Design">Custom Design</option>
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Pooja Room Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Pooja Room Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {poojaStyles.map((item, index) => (
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
              {poojaFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="pooja-room" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Create Your Sacred Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free pooja room design consultation</p>
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

export default ServicePoojaRoom;
