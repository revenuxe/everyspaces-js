"use client";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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

import villaImage from "@/assets/service-villa.jpg";
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";
import poojaImage from "@/assets/service-pooja-room.jpg";

const designElements = [
  {
    title: "Grand Living Room",
    description: "Double-height ceilings with statement lighting",
    image: livingImage,
  },
  {
    title: "Luxury Master Suite",
    description: "En-suite bathroom with walk-in closet",
    image: bedroomImage,
  },
  {
    title: "Gourmet Kitchen",
    description: "Island kitchen with butler's pantry",
    image: kitchenImage,
  },
  {
    title: "Private Home Office",
    description: "Dedicated workspace with library",
    image: villaImage,
  },
  {
    title: "Entertainment Zone",
    description: "Home theatre and game room",
    image: wardrobeImage,
  },
  {
    title: "Pooja Room",
    description: "Traditional sacred space with modern design",
    image: poojaImage,
  },
];

const whyChooseUs = [
  {
    title: "Villa Specialists",
    description: "Extensive experience designing luxury villas across Bangalore",
  },
  {
    title: "Bespoke Design",
    description: "Every element custom-crafted to your preferences",
  },
  {
    title: "Premium Materials",
    description: "Imported finishes and designer furniture options",
  },
  {
    title: "Project Management",
    description: "Dedicated project manager for seamless execution",
  },
];

// AEO-optimized FAQs
const villaFAQs = [
  {
    question: "What is the cost of villa interior design in Bangalore?",
    answer: "Villa interior design in Bangalore costs ₹25-75 lakh depending on size and luxury level. At EverySpaces, basic villa packages start from ₹25 lakh for 3000 sq ft, premium from ₹40 lakh, and luxury bespoke designs from ₹60 lakh."
  },
  {
    question: "How long does villa interior design take?",
    answer: "Complete villa interior design takes 90-120 working days. Large villas with extensive customization may take 4-5 months. EverySpaces assigns dedicated project managers for seamless execution."
  },
  {
    question: "Do you design outdoor spaces for villas?",
    answer: "Yes, EverySpaces designs complete villa interiors including outdoor living areas, pool decks, garden gazebos, and landscaping consultation. We create cohesive indoor-outdoor living experiences."
  },
  {
    question: "What luxury finishes do you offer for villas?",
    answer: "EverySpaces offers Italian marble, imported wooden flooring, designer wallpapers, motorized curtains, smart home integration, imported sanitaryware, and custom furniture for luxury villas in Bangalore."
  }
];

const ServiceVilla = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectType: "Villa",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Villa Interior Page Form",
        source_page: "/services/villa-interiors",
        data: {
          name: formData.name,
          mobile: formData.mobile,
          projectType: formData.projectType,
        },
      });

      if (error) throw error;
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Villa Interior Design Bangalore",
      "Luxury villa and bungalow interior design in Bangalore with bespoke designs, imported finishes, home theatre, and smart home integration.",
      "https://everyspaces.com/services/villa-interiors",
      "https://everyspaces.com/service-villa.jpg",
      "2500000-7500000",
      {
        areaServed: ["Bangalore", "Whitefield", "Sarjapur Road", "Electronic City", "Yelahanka"],
        features: ["Grand Living Room", "Walk-in Closet", "Home Theatre", "Island Kitchen", "Smart Home"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Villa Interiors", url: "https://everyspaces.com/services/villa-interiors" }
    ]),
    createFAQSchema(villaFAQs, 'services/villa-interiors'),
    createProductSchema({
      name: "Luxury Villa Interior Design",
      description: "Complete villa interior design in Bangalore with bespoke designs, imported finishes, and smart home integration. 90-120 day delivery.",
      image: "https://everyspaces.com/service-villa.jpg",
      url: "https://everyspaces.com/services/villa-interiors",
      priceRange: "2500000-7500000",
      category: "Home Improvement > Luxury Villa Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Villa Interiors" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img
              src={imgSrc(villaImage)}
              alt="Villa Interior Design Bangalore"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] will-change-transform"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 animate-fade-up tracking-[-0.03em] md:leading-[1.2]">
                Villa Interior Design
                <span className="block text-secondary tracking-[-0.02em] md:mt-2">in Bangalore</span>
              </h1>
              <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Luxury living spaces crafted for the most discerning homeowners
              </p>
            </div>

            {/* Floating Lead Card */}
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
                  Get Free Villa Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Project Type (e.g., Villa, Duplex, Bungalow)"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-terracotta py-4 rounded-2xl text-secondary-foreground font-semibold font-body text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Design Quote"}
                  </button>
                </form>
                <p className="text-center text-xs text-muted-foreground mt-4 font-body">
                  🔒 No spam. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Elements */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Luxury Villa Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Design Elements for Your Villa
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Every space designed to reflect luxury and sophistication
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {designElements.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={imgSrc(item.image)} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base md:text-lg text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/90 text-xs md:text-sm font-body line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Why Choose EverySpaces for Your Villa?</h2>
              <p className="text-muted-foreground font-body">Bangalore's trusted luxury villa interior experts</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="font-display text-xl text-secondary">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Our Villa Projects in Bangalore</h2>
              <p className="text-muted-foreground font-body">Luxury homes transformed by our expert team</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designElements.map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img src={imgSrc(img.image)} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="villa-interiors" />
        <RelatedLocalities currentSlug="sadashivanagar" />

        <FAQSection />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your Dream Villa?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation with our villa design experts</p>
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

export default ServiceVilla;
