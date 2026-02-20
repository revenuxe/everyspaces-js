import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Palette, Shield, BookOpen, Gamepad2 } from "lucide-react";
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

const kidsRoomStyles = [
  { title: "Adventure Theme", description: "Jungle, space, or ocean-themed rooms for explorers", image: livingImage },
  { title: "Princess/Prince Theme", description: "Fairytale-inspired magical spaces", image: bedroomImage },
  { title: "Sports Theme", description: "For the young athletes and sports enthusiasts", image: wardrobeImage },
  { title: "Minimalist Modern", description: "Clean, adaptable design that grows with your child", image: livingImage },
  { title: "Study-Focused Room", description: "Learning-oriented space with dedicated study area", image: bedroomImage },
  { title: "Shared Sibling Room", description: "Smart space division for brothers and sisters", image: wardrobeImage },
];

const kidsRoomFeatures = [
  { icon: Shield, title: "Child-Safe Design", description: "Rounded edges, non-toxic materials, and secure furniture anchoring" },
  { icon: Palette, title: "Vibrant Colors", description: "Age-appropriate color psychology for happy, stimulating environments" },
  { icon: BookOpen, title: "Study Zone", description: "Proper lighting and ergonomic furniture for homework time" },
  { icon: Gamepad2, title: "Play Area", description: "Dedicated space for toys, games, and creative activities" },
];

// AEO-optimized FAQs
const kidsRoomFAQs = [
  {
    question: "What is the cost of kids room design in Bangalore?",
    answer: "Kids room design in Bangalore costs ₹1-2.5 lakh including wardrobe, bed, study table, and decor. At Intorza, basic packages start from ₹80,000, themed rooms from ₹1.2 lakh, and luxury designs from ₹2 lakh."
  },
  {
    question: "What themes are popular for kids rooms in Bangalore?",
    answer: "Popular kids room themes include space exploration, jungle safari, princess castle, superhero, sports, underwater world, and Montessori-inspired designs. Intorza customizes themes based on your child's interests."
  },
  {
    question: "How to design a shared kids room for siblings?",
    answer: "For shared rooms, Intorza uses bunk beds, L-shaped beds, or twin beds with individual storage and study areas. We create personal zones within the shared space while maximizing floor area for play."
  },
  {
    question: "Are kids room materials safe?",
    answer: "Yes, Intorza uses only child-safe materials: non-toxic paints, rounded furniture edges, anti-tip mounting, soft-close mechanisms, and eco-friendly laminates. All materials are ISI certified and low-VOC."
  }
];

const ServiceKidsRoom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Kids Room" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Kids Room Design Page Form",
        source_page: "/services/kids-room",
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
      "Kids Room Design Bangalore",
      "Fun, safe, and creative kids room designs in Bangalore. Theme rooms, bunk beds, study areas, and playful storage with child-safe materials.",
      "https://intorza.com/services/kids-room",
      "https://intorza.com/service-kids-room.jpg",
      "80000-250000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Theme Room", "Bunk Bed", "Study Table", "Play Area", "Child-Safe Materials"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Kids Room", url: "https://intorza.com/services/kids-room" }
    ]),
    createFAQSchema(kidsRoomFAQs, 'services/kids-room'),
    createProductSchema({
      name: "Kids Room Interior Design",
      description: "Safe and creative kids room designs in Bangalore with themed interiors, bunk beds, and study areas. Non-toxic materials.",
      image: "https://intorza.com/service-kids-room.jpg",
      url: "https://intorza.com/services/kids-room",
      priceRange: "80000-250000",
      category: "Home Improvement > Kids Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kids Room Design Bangalore | Fun & Safe Children Bedroom | Intorza</title>
        <meta name="description" content="Best kids room designers in Bangalore. Theme rooms from ₹80K. Bunk beds, study areas, playful storage. Child-safe materials. Free consultation!" />
        <meta name="keywords" content="kids room design bangalore, children bedroom interior, kids room themes, bunk bed design, kids study room, kids furniture" />
        <link rel="canonical" href="https://intorza.com/services/kids-room" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Kids Room Design Bangalore | Safe & Fun - Intorza" />
        <meta property="og:description" content="Theme rooms from ₹80K. Bunk beds, study areas, child-safe materials. Free consultation!" />
        <meta property="og:url" content="https://intorza.com/services/kids-room" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Kids Room" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={livingImage} alt="Kids Room Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Kids Room Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Create magical, safe spaces for your little ones with Intorza
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Kids Room Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Kids Room, Theme Room)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Room Themes</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Kids Room Theme</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {kidsRoomStyles.map((item, index) => (
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
              {kidsRoomFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="kids-room" />
        <RelatedLocalities currentSlug="banashankari" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Create a Magical Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free kids room design consultation</p>
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

export default ServiceKidsRoom;
