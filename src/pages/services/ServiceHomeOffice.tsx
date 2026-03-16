import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Monitor, Lightbulb, BookOpen, Wifi } from "lucide-react";
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

import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";

const officeStyles = [
  { title: "Compact Study Corner", description: "Perfect for small spaces and apartments", image: bedroomImage },
  { title: "Dedicated Home Office", description: "Full room transformation for professionals", image: livingImage },
  { title: "Executive Studio", description: "Premium setup for business executives", image: wardrobeImage },
  { title: "Creative Workspace", description: "Inspiring space for designers and artists", image: bedroomImage },
  { title: "Dual Workstation", description: "Perfect for couples working from home", image: livingImage },
  { title: "Standing Desk Setup", description: "Ergonomic design for health-conscious professionals", image: wardrobeImage },
];

const officeFeatures = [
  { icon: Monitor, title: "Ergonomic Design", description: "Proper desk height, monitor placement, and chair recommendations" },
  { icon: Lightbulb, title: "Task Lighting", description: "Optimal lighting to reduce eye strain and boost productivity" },
  { icon: BookOpen, title: "Smart Storage", description: "Filing cabinets, bookshelves, and hidden storage solutions" },
  { icon: Wifi, title: "Tech Integration", description: "Cable management, charging stations, and connectivity solutions" },
];

// AEO-optimized FAQs
const homeOfficeFAQs = [
  {
    question: "What is the cost of home office design in Bangalore?",
    answer: "Home office design in Bangalore costs ₹30,000 to ₹2 lakh depending on size and features. At EverySpaces, compact workstations start from ₹30,000, dedicated rooms from ₹80,000, and executive studios from ₹1.5 lakh."
  },
  {
    question: "How to set up a productive work from home space?",
    answer: "EverySpaces creates productive WFH spaces with ergonomic desks at proper height, adjustable chairs, task lighting, soundproofing options, cable management, and dedicated storage. We ensure distraction-free environments."
  },
  {
    question: "What is the ideal desk size for home office?",
    answer: "For single monitor setups, 4x2 feet desks work well. For dual monitors, we recommend 5x2.5 feet. EverySpaces designs custom desks based on your equipment, work style, and available space."
  },
  {
    question: "Can you design a home office in bedroom?",
    answer: "Yes, EverySpaces specializes in bedroom-office combos with foldable desks, partition screens, and proper zoning. We create focused work areas that can be hidden during non-work hours."
  }
];

const ServiceHomeOffice = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Home Office" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Home Office Design Page Form",
        source_page: "/services/home-office",
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
      "Home Office Design Bangalore",
      "Productivity-focused home office designs in Bangalore. Ergonomic workstations, study rooms, and WFH setups with proper lighting and storage.",
      "https://everyspaces.com/services/home-office",
      "https://everyspaces.com/service-home-office.jpg",
      "30000-200000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Ergonomic Desk", "Task Lighting", "Cable Management", "Standing Desk", "Bookshelves"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Home Office", url: "https://everyspaces.com/services/home-office" }
    ]),
    createFAQSchema(homeOfficeFAQs, 'services/home-office'),
    createProductSchema({
      name: "Home Office Interior Design",
      description: "Professional home office designs in Bangalore with ergonomic furniture, task lighting, and tech integration for productive WFH.",
      image: "https://everyspaces.com/service-home-office.jpg",
      url: "https://everyspaces.com/services/home-office",
      priceRange: "30000-200000",
      category: "Home Improvement > Home Office"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Home Office Design Bangalore | Study Room & WFH Setup | EverySpaces</title>
        <meta name="description" content="Best home office designers in Bangalore. Ergonomic workstations from ₹30K. WFH setups, standing desks, executive studios. Free consultation!" />
        <meta name="keywords" content="home office design bangalore, study room interior, work from home setup, home workspace design, study table design, WFH office" />
        <link rel="canonical" href="https://everyspaces.com/services/home-office" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EverySpaces Interior Design" />
        <meta property="og:title" content="Home Office Design Bangalore | WFH Setup - EverySpaces" />
        <meta property="og:description" content="Home offices from ₹30K. Ergonomic desks, task lighting, storage. Free consultation!" />
        <meta property="og:url" content="https://everyspaces.com/services/home-office" />
        <meta property="og:image" content="https://everyspaces.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Office Design Bangalore | EverySpaces" />
        <meta name="twitter:description" content="Home offices from ₹30K. Ergonomic desks, task lighting, storage. Free consultation!" />
        <meta name="twitter:image" content="https://everyspaces.com/og-image.jpg" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Home Office" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={bedroomImage} alt="Home Office Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Home Office Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Create your perfect productivity space with EverySpaces
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Home Office Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="text" placeholder="Project Type (e.g., Home Office, Study Corner)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
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
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Office Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Workspace Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {officeStyles.map((item, index) => (
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
              {officeFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="home-office" />
        <RelatedLocalities currentSlug="marathahalli" />

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Boost Your Productivity?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free home office design consultation</p>
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

export default ServiceHomeOffice;
