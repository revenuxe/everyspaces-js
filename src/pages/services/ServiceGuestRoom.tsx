import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Bed, Shirt, Sparkles, Heart } from "lucide-react";
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

import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";

const guestRoomStyles = [
  { title: "Comfortable Classic", description: "Warm, welcoming traditional design", image: wardrobeImage },
  { title: "Modern Minimalist", description: "Clean, clutter-free guest space", image: bedroomImage },
  { title: "Multi-Purpose Room", description: "Guest + study + storage combo", image: livingImage },
  { title: "Luxury Suite", description: "Hotel-like experience for guests", image: wardrobeImage },
  { title: "Compact Guest Room", description: "Smart solutions for small spaces", image: bedroomImage },
  { title: "Sofa-Cum-Bed Design", description: "Convertible furniture for dual use", image: livingImage },
];

const guestRoomFeatures = [
  { icon: Bed, title: "Comfortable Beds", description: "Queen or twin beds with premium mattress options" },
  { icon: Shirt, title: "Guest Wardrobe", description: "Compact wardrobe with hangers and storage" },
  { icon: Sparkles, title: "Cozy Ambiance", description: "Warm lighting and comfortable furnishings" },
  { icon: Heart, title: "Thoughtful Details", description: "Nightstands, mirrors, and charging points" },
];

// AEO-optimized FAQs
const guestRoomFAQs = [
  {
    question: "What is the cost of guest room design in Bangalore?",
    answer: "Guest room design in Bangalore costs ₹60,000 to ₹1.5 lakh including bed, wardrobe, and basic decor. At Intorza, basic setups start from ₹60,000, comfortable suites from ₹90,000, and luxury guest rooms from ₹1.2 lakh."
  },
  {
    question: "How to design a multi-purpose guest room?",
    answer: "Intorza designs multi-purpose rooms with sofa-cum-beds, murphy beds, or folding beds combined with study tables and storage. This maximizes utility when guests aren't staying. Starting from ₹70,000."
  },
  {
    question: "What furniture is essential for a guest room?",
    answer: "Essential guest room furniture includes comfortable bed, nightstand, compact wardrobe, mirror, task lamp, and charging points. Intorza adds luggage rack, towel stand, and amenity tray for hotel-like experience."
  },
  {
    question: "Can you design a small guest room?",
    answer: "Yes, Intorza specializes in compact guest rooms. We use wall beds, sofa-cum-beds, wall-mounted storage, and space-saving furniture to create comfortable guest spaces even in small areas."
  }
];

const ServiceGuestRoom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Guest Room" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "Guest Room Design Page Form", source_page: "/services/guest-room", data: formData });
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
      "Guest Room Design Bangalore",
      "Comfortable guest room designs in Bangalore. Hotel-like guest suites, multi-purpose rooms, and sofa-cum-bed designs for visitors.",
      "https://intorza.com/services/guest-room",
      "https://intorza.com/service-guest-room.jpg",
      "60000-150000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Guest Bed", "Compact Wardrobe", "Sofa-Cum-Bed", "Multi-Purpose Room", "Cozy Ambiance"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Guest Room", url: "https://intorza.com/services/guest-room" }
    ]),
    createFAQSchema(guestRoomFAQs, 'services/guest-room'),
    createProductSchema({
      name: "Guest Room Interior Design",
      description: "Welcoming guest room designs in Bangalore with comfortable beds, compact wardrobes, and thoughtful amenities.",
      image: "https://intorza.com/service-guest-room.jpg",
      url: "https://intorza.com/services/guest-room",
      priceRange: "60000-150000",
      category: "Home Improvement > Guest Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Guest Room Interior Design Bangalore | Guest Bedroom | Intorza</title>
        <meta name="description" content="Best guest room designers in Bangalore. Comfortable suites from ₹60K. Sofa-cum-bed designs, multi-purpose rooms. Free consultation!" />
        <meta name="keywords" content="guest room design bangalore, guest bedroom interior, spare room design, sofa cum bed design, guest room furniture, multi-purpose room" />
        <link rel="canonical" href="https://intorza.com/services/guest-room" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Guest Room Design Bangalore | Comfortable Suites - Intorza" />
        <meta property="og:description" content="Guest rooms from ₹60K. Sofa-cum-beds, multi-purpose designs. Free consultation!" />
        <meta property="og:url" content="https://intorza.com/services/guest-room" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Guest Room" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={wardrobeImage} alt="Guest Room Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Guest Room Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Create welcoming spaces for your visitors with Intorza
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Guest Room Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Guest Room, Multi-Purpose)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Guest Room Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Guest Room Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {guestRoomStyles.map((item, index) => (
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
              {guestRoomFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="guest-room" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Welcome Your Guests in Style?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free guest room design consultation</p>
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

export default ServiceGuestRoom;
