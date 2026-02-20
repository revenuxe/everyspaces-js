import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, TreePine, Armchair, Sun, Flower } from "lucide-react";
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

import bhk2Image from "@/assets/service-2bhk.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";

const balconyStyles = [
  { title: "Garden Retreat", description: "Lush plants and vertical gardens", image: bhk2Image },
  { title: "Cozy Reading Nook", description: "Comfortable seating with book storage", image: livingImage },
  { title: "Coffee Corner", description: "Café-style bistro setup", image: bedroomImage },
  { title: "Yoga & Meditation", description: "Serene space for mindfulness", image: bhk2Image },
  { title: "Urban Jungle", description: "Maximum greenery in compact space", image: livingImage },
  { title: "Entertainment Deck", description: "Bar setup with lounge seating", image: bedroomImage },
];

const balconyFeatures = [
  { icon: TreePine, title: "Vertical Gardens", description: "Space-efficient plant walls and hanging planters" },
  { icon: Armchair, title: "Weather-Proof Furniture", description: "Durable outdoor seating and tables" },
  { icon: Sun, title: "Shade Solutions", description: "Pergolas, blinds, and umbrellas for comfort" },
  { icon: Flower, title: "Planter Boxes", description: "Custom planters for herbs, flowers, and shrubs" },
];

// AEO-optimized FAQs
const balconyFAQs = [
  {
    question: "What is the cost of balcony design in Bangalore?",
    answer: "Balcony design in Bangalore costs ₹20,000 to ₹1 lakh depending on size and features. At Intorza, basic balcony makeovers start from ₹20,000, vertical gardens from ₹35,000, and complete terrace transformations from ₹60,000."
  },
  {
    question: "How to design a small balcony in Bangalore apartments?",
    answer: "For small balconies, Intorza uses vertical gardens, foldable furniture, wall-mounted planters, and compact seating. We maximize space with multi-level planters and hanging elements. Starting from ₹20,000."
  },
  {
    question: "Can you install a vertical garden on my balcony?",
    answer: "Yes, Intorza designs and installs vertical gardens for balconies in Bangalore. Options include modular planters, living walls, and hydroponic systems. We also provide plant selection and maintenance guidance."
  },
  {
    question: "What furniture works best for Bangalore balconies?",
    answer: "Weather-resistant furniture like powder-coated metal, treated wood, and outdoor-grade wicker works best. Intorza recommends foldable furniture for small balconies and fixed seating for larger terraces."
  }
];

const ServiceBalcony = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Balcony Design" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "Balcony Design Page Form", source_page: "/services/balcony-design", data: formData });
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
      "Balcony Design Bangalore",
      "Transform your balcony into a beautiful outdoor space. Vertical gardens, outdoor seating, terrace design, and weather-proof furniture in Bangalore.",
      "https://intorza.com/services/balcony-design",
      "https://intorza.com/service-balcony.jpg",
      "20000-100000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Vertical Garden", "Outdoor Seating", "Pergola", "Planter Boxes", "Weather-Proof Furniture"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Balcony Design", url: "https://intorza.com/services/balcony-design" }
    ]),
    createFAQSchema(balconyFAQs, 'services/balcony-design'),
    createProductSchema({
      name: "Balcony & Terrace Design",
      description: "Balcony transformation services in Bangalore including vertical gardens, outdoor furniture, and terrace makeovers.",
      image: "https://intorza.com/service-balcony.jpg",
      url: "https://intorza.com/services/balcony-design",
      priceRange: "20000-100000",
      category: "Home Improvement > Outdoor Living"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Balcony Design Bangalore | Terrace Garden Interior | Intorza</title>
        <meta name="description" content="Best balcony designers in Bangalore. Vertical gardens from ₹35K, outdoor seating, terrace design. Transform your outdoor space. Free quote!" />
        <meta name="keywords" content="balcony design bangalore, terrace garden, vertical garden bangalore, outdoor seating, balcony furniture, balcony makeover" />
        <link rel="canonical" href="https://intorza.com/services/balcony-design" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Balcony & Terrace Design Bangalore - Intorza" />
        <meta property="og:description" content="Balcony makeovers from ₹20K. Vertical gardens, outdoor furniture, pergolas. Free consultation!" />
        <meta property="og:url" content="https://intorza.com/services/balcony-design" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Balcony Design" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={bhk2Image} alt="Balcony Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Balcony & Terrace Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Transform outdoor spaces into relaxing retreats with Intorza
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Balcony Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Balcony, Terrace Garden)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Balcony Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Balcony Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {balconyStyles.map((item, index) => (
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
              {balconyFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="balcony-design" />
        <RelatedLocalities currentSlug="indiranagar" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free balcony design consultation</p>
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

export default ServiceBalcony;
