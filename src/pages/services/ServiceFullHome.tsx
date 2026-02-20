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
    title: "Modular Kitchen",
    description: "Complete kitchen with chimney, hob and smart storage",
    image: kitchenImage,
  },
  {
    title: "All Bedrooms",
    description: "Wardrobes, beds and study units for every room",
    image: bedroomImage,
  },
  {
    title: "Living & Dining",
    description: "TV unit, dining area and accent walls",
    image: livingImage,
  },
  {
    title: "Wardrobes & Storage",
    description: "Sliding wardrobes with lofts throughout",
    image: wardrobeImage,
  },
  {
    title: "False Ceiling",
    description: "Designer ceilings with ambient lighting",
    image: tvUnitImage,
  },
  {
    title: "Foyer & Entrance",
    description: "Shoe rack, console and welcome area",
    image: villaImage,
  },
];

const whyChooseUs = [
  {
    title: "One-Stop Solution",
    description: "Everything from design to execution under one roof",
  },
  {
    title: "Coordinated Design",
    description: "Unified aesthetic across all rooms and spaces",
  },
  {
    title: "Time Efficient",
    description: "Faster completion with single point of contact",
  },
  {
    title: "Cost Effective",
    description: "Better value with complete home packages",
  },
];

// AEO-optimized FAQs
const fullHomeFAQs = [
  {
    question: "What is included in full home interior design?",
    answer: "Intorza's full home interior includes modular kitchen, all wardrobes, TV unit, false ceiling, electrical work, painting, flooring consultation, shoe rack, crockery unit, study tables, and soft furnishings. We handle everything from design to installation."
  },
  {
    question: "What is the cost of full home interior in Bangalore?",
    answer: "Full home interior in Bangalore costs ₹1,800-3,500 per sq ft. At Intorza, 2BHK starts from ₹6 lakh, 3BHK from ₹10 lakh, and villas from ₹25 lakh. Complete packages offer 15-20% savings compared to individual services."
  },
  {
    question: "Why choose full home interior package over individual services?",
    answer: "Full home packages offer coordinated design aesthetic, single point of contact, faster delivery, better pricing, and comprehensive warranty. Intorza's packages save 15-20% cost and 30% time compared to separate services."
  },
  {
    question: "How long does full home interior take?",
    answer: "Full home interior takes 45-60 days for 2BHK, 60-75 days for 3BHK, and 90-120 days for villas. Intorza's in-house manufacturing and dedicated project management ensure timely delivery."
  }
];

const ServiceFullHome = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectType: "Full Home",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Full Home Design Page Form",
        source_page: "/services/full-home-design",
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
      "Full Home Interior Design Bangalore",
      "Complete end-to-end home interior design in Bangalore. Kitchen, wardrobes, living room, bedrooms all included in one package with 10-year warranty.",
      "https://intorza.com/services/full-home-design",
      "https://intorza.com/service-full-home.jpg",
      "600000-2500000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield", "Electronic City"],
        features: ["Modular Kitchen", "All Wardrobes", "TV Unit", "False Ceiling", "Painting", "Electrical Work"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Full Home Design", url: "https://intorza.com/services/full-home-design" }
    ]),
    createFAQSchema(fullHomeFAQs, 'services/full-home-design'),
    createProductSchema({
      name: "Complete Home Interior Package",
      description: "End-to-end home interior design in Bangalore including kitchen, wardrobes, living room, and all bedrooms. 45-75 day delivery with 10-year warranty.",
      image: "https://intorza.com/service-full-home.jpg",
      url: "https://intorza.com/services/full-home-design",
      priceRange: "600000-2500000",
      category: "Home Improvement > Complete Home Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Full Home Interior Design Bangalore | End-to-End Solutions | Intorza</title>
        <meta
          name="description"
          content="Best full home interior designers in Bangalore. Complete packages from ₹6L for 2BHK. Kitchen, wardrobes, living room included. 45-day delivery, 10-year warranty!"
        />
        <meta
          name="keywords"
          content="full home interior design bangalore, complete home interiors, end to end interior design, home interior packages bangalore, turnkey interior solutions"
        />
        <link rel="canonical" href="https://intorza.com/services/full-home-design" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Full Home Interior Design Bangalore - Intorza" />
        <meta property="og:description" content="Complete home interiors from ₹6L. Kitchen, wardrobes, living room all included. 45-day delivery, 10-year warranty!" />
        <meta property="og:url" content="https://intorza.com/services/full-home-design" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Full Home Design" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img
              src={livingImage}
              alt="Full Home Interior Design Bangalore"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] will-change-transform"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 animate-fade-up tracking-[-0.03em] md:leading-[1.2]">
                Full Home Interior Design
                <span className="block text-secondary tracking-[-0.02em] md:mt-2">in Bangalore</span>
              </h1>
              <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                End-to-end interior solutions for your complete home transformation
              </p>
            </div>

            {/* Floating Lead Card */}
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
                  Get Complete Home Quote
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
                    placeholder="Project Type (e.g., 2BHK, 3BHK, Villa)"
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
                Complete Home Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Everything Included in Full Home Design
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                One package, complete transformation
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Why Choose Full Home Design?</h2>
              <p className="text-muted-foreground font-body">The smarter way to design your home</p>
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Our Full Home Projects</h2>
              <p className="text-muted-foreground font-body">Complete homes designed and delivered</p>
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

        <RelatedServices currentSlug="full-home-design" />
        <RelatedLocalities currentSlug="electronic-city" />

        <FAQSection />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready for Complete Home Transformation?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation and personalized quote</p>
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

export default ServiceFullHome;
