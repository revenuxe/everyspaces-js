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

import bhk2Image from "@/assets/service-2bhk.jpg";
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";
import tvUnitImage from "@/assets/service-tv-unit.jpg";

const designElements = [
  {
    title: "Modular Kitchen",
    description: "Space-saving L-shaped or U-shaped kitchen with premium finish",
    image: kitchenImage,
  },
  {
    title: "Master Bedroom",
    description: "Elegant bed design with wardrobe and study area",
    image: bedroomImage,
  },
  {
    title: "Living Room",
    description: "TV unit, sofa set arrangement and accent walls",
    image: livingImage,
  },
  {
    title: "Wardrobe Design",
    description: "Sliding wardrobes with loft and smart storage",
    image: wardrobeImage,
  },
  {
    title: "TV Unit",
    description: "Modern entertainment unit with display shelves",
    image: tvUnitImage,
  },
  {
    title: "Kids Room",
    description: "Fun and functional space for your little ones",
    image: bhk2Image,
  },
];

const whyChooseUs = [
  {
    title: "Expert Designers",
    description: "Dedicated team of interior designers with 10+ years experience in 2BHK homes",
  },
  {
    title: "Premium Materials",
    description: "BWR grade plywood, soft-close fittings, and branded hardware",
  },
  {
    title: "On-Time Delivery",
    description: "We guarantee delivery within the committed timeline",
  },
  {
    title: "After-Sales Support",
    description: "Dedicated support team for any post-installation needs",
  },
];

// AEO-optimized FAQs
const bhk2FAQs = [
  {
    question: "What is the cost of 2 BHK interior design in Hyderabad?",
    answer: "2 BHK interior design in Hyderabad costs â‚¹4-12 lakh for complete interiors. At EverySpaces, basic packages start from â‚¹4 lakh (kitchen + wardrobes), standard from â‚¹6 lakh (adds living room), and premium from â‚¹8 lakh (full home with false ceiling)."
  },
  {
    question: "What is included in 2 BHK interior package?",
    answer: "EverySpaces's 2 BHK package includes modular kitchen, 2 wardrobes, TV unit, shoe rack, and basic false ceiling. Premium packages add bedroom designs, living room interiors, study tables, and complete painting."
  },
  {
    question: "How long does 2 BHK interior design take?",
    answer: "Complete 2 BHK interior design takes 45-60 working days from design approval. This includes manufacturing at our facility, site preparation, and professional installation with quality checks."
  },
  {
    question: "Can I customize the 2 BHK interior package?",
    answer: "Yes, EverySpaces offers fully customizable 2 BHK packages. You can choose specific rooms, materials, finishes, and hardware. Our designers help optimize the budget while meeting your requirements."
  }
];

const Service2BHK = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectType: "2 BHK",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "2BHK Interior Page Form",
        source_page: "/services/2bhk-interiors",
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
      "2 BHK Interior Design Hyderabad",
      "Complete 2 BHK interior design packages in Hyderabad starting â‚¹4 lakh. Includes modular kitchen, wardrobes, TV unit, and living room with 10-year warranty.",
      "https://everyspaces.com/services/2bhk-interiors",
      "https://everyspaces.com/service-2bhk.jpg",
      "400000-1200000",
      {
        areaServed: ["Hyderabad", "Gachibowli", "Jubilee Hills", "Madhapur", "Kondapur", "Banjara Hills", "HITEC City", "Kokapet"],
        features: ["Modular Kitchen", "Wardrobes", "TV Unit", "False Ceiling", "Living Room", "Bedroom Design"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "2 BHK Interiors", url: "https://everyspaces.com/services/2bhk-interiors" }
    ]),
    createFAQSchema(bhk2FAQs, 'services/2bhk-interiors'),
    createProductSchema({
      name: "2 BHK Complete Interior Package",
      description: "Complete 2 BHK interior design in Hyderabad including kitchen, wardrobes, TV unit, and living room. 45-60 day delivery with 10-year warranty.",
      image: "https://everyspaces.com/service-2bhk.jpg",
      url: "https://everyspaces.com/services/2bhk-interiors",
      priceRange: "400000-1200000",
      category: "Home Improvement > Complete Home Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "2 BHK Interiors" }]} />
      
      <main className="pb-24">
        {/* Hero Section - Same as Homepage */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img
              src={imgSrc(bhk2Image)}
              alt="2 BHK Interior Design Hyderabad"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] will-change-transform"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 animate-fade-up tracking-[-0.03em] md:leading-[1.2]">
                2 BHK Interior Design
                <span className="block text-secondary tracking-[-0.02em] md:mt-2">in Hyderabad</span>
              </h1>
              <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Transform your 2 BHK into a stunning home with expert designers
              </p>
            </div>

            {/* Floating Lead Card */}
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
                  Get Free Design Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit phone number"
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Project Type (e.g., 2 BHK Full Home, Kitchen Only)"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-terracotta py-4 rounded-2xl text-secondary-foreground font-semibold font-body text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Design Quote"}
                  </button>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-4 font-body">
                  No spam. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Elements for 2BHK */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Complete 2 BHK Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Design Elements for Your 2 BHK
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Every corner of your home designed with precision and style
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {designElements.map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img
                    src={imgSrc(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base md:text-lg text-primary-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-xs md:text-sm font-body line-clamp-2">
                      {item.description}
                    </p>
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Why Choose EverySpaces for Your 2 BHK?
              </h2>
              <p className="text-muted-foreground font-body">
                Trusted by hundreds of homeowners in Hyderabad
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/50 transition-colors"
                >
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Our 2 BHK Projects in Hyderabad
              </h2>
              <p className="text-muted-foreground font-body">
                Real homes transformed by our expert team
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designElements.map((img, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] rounded-2xl overflow-hidden group"
                >
                  <img
                    src={imgSrc(img.image)}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="2bhk-interiors" />
        <RelatedLocalities currentSlug="koramangala" />

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Ready to Design Your 2 BHK?
            </h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">
              Get a free consultation and personalized design ideas
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Service2BHK;

