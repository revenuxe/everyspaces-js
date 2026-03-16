import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
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

import villaImage from "@/assets/service-villa.jpg?webp";
import kitchenImage from "@/assets/service-modular-kitchen.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";
import tvUnitImage from "@/assets/service-tv-unit.jpg?webp";

const designElements = [
  {
    title: "Spacious Living Room",
    description: "Grand living spaces with premium entertainment units",
    image: livingImage,
  },
  {
    title: "Master Bedroom Suite",
    description: "Luxurious master bedroom with walk-in wardrobe",
    image: bedroomImage,
  },
  {
    title: "Modular Kitchen",
    description: "Island kitchen or parallel kitchen with pantry",
    image: kitchenImage,
  },
  {
    title: "Kids & Guest Rooms",
    description: "Thoughtfully designed rooms for family and guests",
    image: wardrobeImage,
  },
  {
    title: "Home Theatre",
    description: "Dedicated entertainment zone with acoustic design",
    image: tvUnitImage,
  },
  {
    title: "Study & Office",
    description: "Productive workspace integrated into your home",
    image: villaImage,
  },
];

const whyChooseUs = [
  {
    title: "Spacious Layouts",
    description: "Expert planning to maximize the potential of larger 3BHK spaces",
  },
  {
    title: "Premium Finishes",
    description: "High-end materials and imported fittings for luxury feel",
  },
  {
    title: "Custom Solutions",
    description: "Tailored designs based on your family's unique lifestyle",
  },
  {
    title: "End-to-End Service",
    description: "From concept to completion, we handle everything",
  },
];

// AEO-optimized FAQs
const bhk3FAQs = [
  {
    question: "What is the cost of 3 BHK interior design in Bangalore?",
    answer: "3 BHK interior design in Bangalore costs ₹8-20 lakh for complete interiors. At EverySpaces, basic packages start from ₹8 lakh, premium from ₹12 lakh with false ceiling, and luxury from ₹18 lakh with home theatre and walk-in closets."
  },
  {
    question: "What is included in 3 BHK interior package?",
    answer: "EverySpaces's 3 BHK package includes modular kitchen, 3 wardrobes, TV unit, shoe rack, crockery unit, false ceiling, and study table. Premium packages add home theatre setup, walk-in closet, pooja room, and complete painting."
  },
  {
    question: "How long does 3 BHK interior design take?",
    answer: "Complete 3 BHK interior design takes 60-75 working days from design approval. Premium designs with home theatre and extensive woodwork may take 75-90 days. We ensure timely delivery with dedicated project managers."
  },
  {
    question: "Do you design home theatre for 3 BHK apartments?",
    answer: "Yes, EverySpaces designs home theatre setups for 3 BHK apartments with acoustic paneling, projection systems, comfortable seating, and ambient lighting. We optimize spare rooms or living areas for the best cinematic experience."
  }
];

const Service3BHK = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectType: "3 BHK",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "3BHK Interior Page Form",
        source_page: "/services/3bhk-interiors",
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

  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "3 BHK Interior Design Bangalore",
      "Premium 3 BHK interior design packages in Bangalore starting ₹8 lakh. Includes modular kitchen, wardrobes, TV unit, home theatre, and walk-in closets with 10-year warranty.",
      "https://everyspaces.com/services/3bhk-interiors",
      "https://everyspaces.com/service-3bhk.jpg",
      "800000-2000000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Modular Kitchen", "Walk-in Closet", "Home Theatre", "False Ceiling", "Premium Finishes"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "3 BHK Interiors", url: "https://everyspaces.com/services/3bhk-interiors" }
    ]),
    createFAQSchema(bhk3FAQs, 'services/3bhk-interiors'),
    createProductSchema({
      name: "3 BHK Premium Interior Package",
      description: "Complete 3 BHK interior design in Bangalore with kitchen, wardrobes, home theatre, and luxury finishes. 60-75 day delivery with 10-year warranty.",
      image: "https://everyspaces.com/service-3bhk.jpg",
      url: "https://everyspaces.com/services/3bhk-interiors",
      priceRange: "800000-2000000",
      category: "Home Improvement > Complete Home Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>3 BHK Interior Design Bangalore | Premium Packages from ₹8L | EverySpaces</title>
        <meta
          name="description"
          content="Best 3 BHK interior designers in Bangalore. Premium packages from ₹8 lakh including kitchen, wardrobes, home theatre. 60-day delivery, 10-year warranty!"
        />
        <meta
          name="keywords"
          content="3 bhk interior design bangalore, 3bhk interior cost, 3 bhk home interior, premium 3bhk interiors, 3bhk flat interior design bangalore"
        />
        <link rel="canonical" href="https://everyspaces.com/services/3bhk-interiors" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EverySpaces Interior Design" />
        <meta property="og:title" content="3 BHK Interior Design Bangalore | From ₹8 Lakh - EverySpaces" />
        <meta property="og:description" content="Premium 3 BHK interiors from ₹8L. Kitchen, wardrobes, home theatre included. 60-day delivery, 10-year warranty!" />
        <meta property="og:url" content="https://everyspaces.com/services/3bhk-interiors" />
        <meta property="og:image" content="https://everyspaces.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3 BHK Interior Design Bangalore | From ₹8 Lakh - EverySpaces" />
        <meta name="twitter:description" content="Premium 3 BHK interiors from ₹8L. Kitchen, wardrobes, home theatre included. 60-day delivery, 10-year warranty!" />
        <meta name="twitter:image" content="https://everyspaces.com/og-image.jpg" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "3 BHK Interiors" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img
              src={villaImage}
              alt="3 BHK Interior Design Bangalore"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] will-change-transform"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 animate-fade-up tracking-[-0.03em] md:leading-[1.2]">
                3 BHK Interior Design
                <span className="block text-secondary tracking-[-0.02em] md:mt-2">in Bangalore</span>
              </h1>
              <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Premium interiors for spacious homes with luxury finishes
              </p>
            </div>

            {/* Floating Lead Card */}
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
                  Get Free Design Consultation
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
                    placeholder="Project Type (e.g., 3 BHK Full Home, Premium)"
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
                Complete 3 BHK Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Design Elements for Your 3 BHK
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Spacious living designed with luxury and functionality
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {designElements.map((item, index) => (
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

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Why Choose EverySpaces for Your 3 BHK?</h2>
              <p className="text-muted-foreground font-body">Premium designs for discerning homeowners</p>
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Our 3 BHK Projects in Bangalore</h2>
              <p className="text-muted-foreground font-body">Premium homes transformed by our expert team</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designElements.map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img src={img.image} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="3bhk-interiors" />
        <RelatedLocalities currentSlug="whitefield" />

        <FAQSection />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your 3 BHK?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation and personalized design ideas</p>
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

export default Service3BHK;
