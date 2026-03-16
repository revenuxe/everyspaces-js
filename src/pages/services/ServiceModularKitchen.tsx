import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
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
  createProductSchema,
  createQASchema
} from "@/components/StructuredData";

import kitchenImage from "@/assets/service-modular-kitchen.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";

const kitchenTypes = [
  {
    title: "L-Shaped Kitchen",
    description: "Perfect for compact spaces with efficient work triangle",
    image: kitchenImage,
  },
  {
    title: "U-Shaped Kitchen",
    description: "Maximum storage and counter space for serious cooks",
    image: bedroomImage,
  },
  {
    title: "Parallel Kitchen",
    description: "Ideal for narrow spaces with dual workspace",
    image: livingImage,
  },
  {
    title: "Island Kitchen",
    description: "Modern open kitchen with central island",
    image: wardrobeImage,
  },
  {
    title: "Straight Kitchen",
    description: "Single wall kitchen for studio apartments",
    image: kitchenImage,
  },
  {
    title: "G-Shaped Kitchen",
    description: "Extended U-shape with additional counter",
    image: bedroomImage,
  },
];

const kitchenFeatures = [
  {
    title: "Premium Materials",
    description: "BWR plywood, acrylic finish, and granite countertops",
  },
  {
    title: "Smart Storage",
    description: "Corner units, pull-outs, and tall units for maximum space",
  },
  {
    title: "Quality Hardware",
    description: "Hettich/Hafele soft-close hinges and channels",
  },
  {
    title: "Appliance Ready",
    description: "Provisions for chimney, hob, oven and dishwasher",
  },
];

const ServiceModularKitchen = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectType: "Modular Kitchen",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Modular Kitchen Page Form",
        source_page: "/services/modular-kitchen",
        data: {
          name: formData.name,
          mobile: formData.mobile,
          projectType: formData.projectType,
        },
      });

      if (error) throw error;
      navigate("/thank-you");
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

  // AEO-optimized FAQs specific to modular kitchens
  const modularKitchenFAQs = [
    {
      question: "What is the cost of modular kitchen in Bangalore?",
      answer: "Modular kitchen cost in Bangalore ranges from ₹1.5 lakh to ₹8 lakh depending on size, materials, and finishes. At EverySpaces, L-shaped kitchens start from ₹2.5 lakh, U-shaped from ₹3.5 lakh, and island kitchens from ₹5 lakh. All prices include Hettich/Hafele hardware with 10-year warranty."
    },
    {
      question: "How long does modular kitchen installation take?",
      answer: "Modular kitchen installation at EverySpaces takes 15-20 working days from design approval. This includes manufacturing at our in-house facility and professional installation. Complex island kitchens may take 25-30 days."
    },
    {
      question: "Which is the best modular kitchen brand in Bangalore?",
      answer: "EverySpaces is rated among the best modular kitchen brands in Bangalore with 500+ installations, 4.8/5 rating, and 10-year warranty. We use premium materials like BWR plywood, acrylic/lacquer finishes, and Hettich/Hafele hardware for durability."
    },
    {
      question: "What materials are used in EverySpaces modular kitchens?",
      answer: "EverySpaces modular kitchens use BWR (Boiling Water Resistant) plywood from Century/Greenply, acrylic or laminate finishes, granite/quartz countertops, and Hettich/Hafele soft-close hardware. All materials come with manufacturer warranty."
    }
  ];

  // AEO schemas for this page
  const aeoSchemas = [
    createServiceSchema(
      "Modular Kitchen Design Bangalore",
      "Best modular kitchen designers in Bangalore offering L-shaped, U-shaped, parallel, and island kitchens with Hettich hardware, 10-year warranty, and 45-day delivery.",
      "https://everyspaces.com/services/modular-kitchen",
      "https://everyspaces.com/service-modular-kitchen.jpg",
      "150000-800000",
      {
        timeRequired: "P20D",
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["L-Shaped Kitchen", "U-Shaped Kitchen", "Island Kitchen", "Parallel Kitchen", "Soft-close hardware", "10-year warranty"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Modular Kitchen", url: "https://everyspaces.com/services/modular-kitchen" }
    ]),
    createFAQSchema(modularKitchenFAQs, 'services/modular-kitchen'),
    createProductSchema({
      name: "Modular Kitchen Design",
      description: "Premium modular kitchen design and installation in Bangalore with L-shaped, U-shaped, and island layouts. Includes Hettich/Hafele hardware, granite countertops, and 10-year warranty.",
      image: "https://everyspaces.com/service-modular-kitchen.jpg",
      url: "https://everyspaces.com/services/modular-kitchen",
      priceRange: "150000-800000",
      category: "Home Improvement > Kitchen"
    }),
    createQASchema(
      "What is the best modular kitchen design for small kitchen in Bangalore?",
      "For small kitchens in Bangalore, L-shaped or straight modular kitchen designs work best. EverySpaces specializes in space-saving solutions with corner units, tall units, and pull-out storage. Starting from ₹2.5 lakh with 10-year warranty.",
      "https://everyspaces.com/services/modular-kitchen"
    )
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Modular Kitchen Design Bangalore | L-Shape, U-Shape, Island | EverySpaces</title>
        <meta
          name="description"
          content="Best modular kitchen designers in Bangalore. L-shaped, U-shaped & island kitchens with Hettich hardware. Starting ₹2.5 lakh. 10-year warranty, 45-day delivery!"
        />
        <meta
          name="keywords"
          content="modular kitchen bangalore, modular kitchen design, kitchen interior design bangalore, l shaped kitchen, u shaped kitchen, island kitchen bangalore, modular kitchen cost bangalore"
        />
        <link rel="canonical" href="https://everyspaces.com/services/modular-kitchen" />
        
        {/* AEO meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EverySpaces Interior Design" />
        <meta property="og:title" content="Best Modular Kitchen Design in Bangalore | L-Shape, U-Shape, Island - EverySpaces" />
        <meta property="og:description" content="Premium modular kitchens from ₹2.5 lakh. Hettich hardware, 10-year warranty, 45-day delivery. 500+ kitchens installed in Bangalore." />
        <meta property="og:url" content="https://everyspaces.com/services/modular-kitchen" />
        <meta property="og:image" content="https://everyspaces.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Modular Kitchen Design Bangalore | EverySpaces" />
        <meta name="twitter:description" content="Premium modular kitchens from ₹2.5 lakh. Hettich hardware, 10-year warranty, 45-day delivery." />
        <meta name="twitter:image" content="https://everyspaces.com/og-image.jpg" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Modular Kitchen" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img
              src={kitchenImage}
              alt="Modular Kitchen Design Bangalore"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] will-change-transform"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 animate-fade-up tracking-[-0.03em] md:leading-[1.2]">
                Modular Kitchen Design
                <span className="block text-secondary tracking-[-0.02em] md:mt-2">in Bangalore</span>
              </h1>
              <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Smart, stylish kitchens designed for the modern Bangalore home
              </p>
            </div>

            {/* Floating Lead Card */}
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
                  Get Free Kitchen Design Quote
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
                    placeholder="Kitchen Type (e.g., L-Shaped, U-Shaped, Island)"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-terracotta py-4 rounded-2xl text-secondary-foreground font-semibold font-body text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Kitchen Quote"}
                  </button>
                </form>
                <p className="text-center text-xs text-muted-foreground mt-4 font-body">
                  🔒 No spam. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen Types */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Kitchen Layouts
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Choose Your Kitchen Style
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                We design every type of modular kitchen to suit your space
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {kitchenTypes.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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

        {/* Features */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">What Makes Our Kitchens Special?</h2>
              <p className="text-muted-foreground font-body">Premium quality in every detail</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kitchenFeatures.map((item, index) => (
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Our Kitchen Projects</h2>
              <p className="text-muted-foreground font-body">Beautiful kitchens delivered across Bangalore</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {kitchenTypes.map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img src={img.image} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/portfolio" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="modular-kitchen" />
        <RelatedLocalities currentSlug="koramangala" />

        <FAQSection />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your Dream Kitchen?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation with our kitchen design experts</p>
            <a href="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ServiceModularKitchen;
