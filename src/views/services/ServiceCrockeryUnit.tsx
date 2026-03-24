"use client";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Wine, Sparkles, Layers, Frame } from "lucide-react";
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

import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const crockeryStyles = [
  { title: "Wall-Mounted Display", description: "Elegant glass-front cabinets", image: kitchenImage },
  { title: "Floor-to-Ceiling Unit", description: "Maximized storage with display sections", image: livingImage },
  { title: "Partition Unit", description: "Divides spaces while displaying crockery", image: wardrobeImage },
  { title: "Modern Minimalist", description: "Clean lines with LED lighting", image: kitchenImage },
  { title: "Classic Wooden", description: "Traditional carved wood design", image: livingImage },
  { title: "Bar + Crockery Combo", description: "Entertainment unit with bar section", image: wardrobeImage },
];

const crockeryFeatures = [
  { icon: Wine, title: "Glass Display", description: "Tempered glass shelves with LED backlighting" },
  { icon: Layers, title: "Closed Storage", description: "Hidden drawers for cutlery and everyday items" },
  { icon: Sparkles, title: "Premium Finishes", description: "Lacquer, veneer, or laminate options" },
  { icon: Frame, title: "Mirror Backing", description: "Mirrors to enhance display and depth" },
];

// AEO-optimized FAQs
const crockeryUnitFAQs = [
  {
    question: "What is the cost of crockery unit in Bangalore?",
    answer: "Crockery unit in Bangalore costs ₹40,000 to ₹1.5 lakh depending on size and design. At EverySpaces, wall-mounted units start from ₹40,000, floor units from ₹60,000, and bar+crockery combos from ₹1 lakh."
  },
  {
    question: "What is the ideal size for a crockery unit?",
    answer: "Standard crockery units are 4-6 feet wide and 6-7 feet tall. EverySpaces designs custom units based on your collection size, dining room dimensions, and storage requirements."
  },
  {
    question: "Can crockery unit work as a room divider?",
    answer: "Yes, EverySpaces designs partition crockery units that divide living and dining areas while providing display and storage. Both sides can have glass displays or one side closed storage."
  },
  {
    question: "What lighting is best for crockery units?",
    answer: "EverySpaces recommends warm LED strip lights (2700-3000K) for crockery units. We install lights at multiple levels with mirror backing for sparkling display effect."
  }
];

const ServiceCrockeryUnit = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Crockery Unit" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "Crockery Unit Design Page Form", source_page: "/services/crockery-unit", data: formData });
      if (error) throw error;
      router.push("/thank-you");
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Crockery Unit Design Bangalore",
      "Elegant crockery unit designs in Bangalore. Glass display cabinets, bar units, partition units with LED lighting and mirror backing.",
      "https://everyspaces.com/services/crockery-unit",
      "https://everyspaces.com/service-crockery-unit.jpg",
      "40000-150000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Glass Display", "LED Lighting", "Bar Cabinet", "Mirror Backing", "Partition Unit"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Crockery Unit", url: "https://everyspaces.com/services/crockery-unit" }
    ]),
    createFAQSchema(crockeryUnitFAQs, 'services/crockery-unit'),
    createProductSchema({
      name: "Crockery Unit & Display Cabinet",
      description: "Elegant crockery units in Bangalore with glass displays, LED lighting, and bar sections for fine china and beverages.",
      image: "https://everyspaces.com/service-crockery-unit.jpg",
      url: "https://everyspaces.com/services/crockery-unit",
      priceRange: "40000-150000",
      category: "Home Improvement > Dining Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Crockery Unit" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={imgSrc(kitchenImage)} alt="Crockery Unit Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Crockery Unit Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Stylish display units for your precious collection by EverySpaces
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Crockery Unit Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Crockery Unit, Bar Unit)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Crockery Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Crockery Unit Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {crockeryStyles.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={imgSrc(item.image)} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
              {crockeryFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="crockery-unit" />
        <RelatedLocalities currentSlug="jayanagar" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Display Your Collection?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free crockery unit design consultation</p>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
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

export default ServiceCrockeryUnit;
