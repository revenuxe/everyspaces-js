import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";

import bhk2Image from "@/assets/service-2bhk.jpg";
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const inclusions = [
  "Modular Kitchen with Chimney",
  "2 Wardrobes with Loft",
  "TV Unit with Back Panel",
  "Shoe Rack & Foyer Unit",
  "False Ceiling with Lights",
  "Electrical & Plumbing Work",
  "Complete Painting",
  "Crockery Unit",
];

const packages = [
  {
    name: "Essential",
    price: "3.5",
    features: ["Basic Modular Kitchen", "2 Wardrobes", "TV Unit", "Basic False Ceiling"],
  },
  {
    name: "Premium",
    price: "5.5",
    features: ["Premium Kitchen with Chimney", "3 Wardrobes with Loft", "TV Unit + Back Panel", "Designer False Ceiling", "Foyer Unit"],
    popular: true,
  },
  {
    name: "Luxury",
    price: "8+",
    features: ["Luxury Kitchen with Appliances", "Walk-in Wardrobes", "Full Entertainment Unit", "Designer Ceilings All Rooms", "Complete Furnishing"],
  },
];

const galleryImages = [
  { src: bhk2Image, alt: "2BHK Living Room Interior Bangalore" },
  { src: kitchenImage, alt: "2BHK Modular Kitchen Design" },
  { src: bedroomImage, alt: "2BHK Bedroom Interior" },
  { src: livingImage, alt: "2BHK Hall Interior Design" },
  { src: wardrobeImage, alt: "2BHK Wardrobe Design" },
  { src: bhk2Image, alt: "2BHK Complete Home Interior" },
];

const Service2BHK = () => {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>2 BHK Interior Design in Bangalore | Starting ₹3.5 Lakhs | Intorza</title>
        <meta
          name="description"
          content="Best 2 BHK interior designers in Bangalore. Complete home interiors starting ₹3.5 lakhs with modular kitchen, wardrobes, false ceiling. 10-year warranty. Get free quote!"
        />
        <meta
          name="keywords"
          content="2 bhk interior design bangalore, 2bhk interior cost bangalore, 2 bhk home interior design, affordable 2bhk interiors, 2bhk flat interior design bangalore"
        />
        <link rel="canonical" href="https://intorza.com/services/2bhk-interiors" />
      </Helmet>
      <Header />
      
      <main className="pb-24">
        {/* Hero Section - Same as Homepage */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img
              src={bhk2Image}
              alt="2 BHK Interior Design Bangalore"
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
                <span className="block text-secondary tracking-[-0.02em] md:mt-2">in Bangalore</span>
              </h1>
              <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Complete home interiors starting ₹3.5 Lakhs • 10-Year Warranty • 45-Day Delivery
              </p>
            </div>

            {/* Floating Lead Card */}
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
                  Get Free Quote for Your 2 BHK
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
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    >
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="2 BHK - Full Home">2 BHK Full Home Design</option>
                      <option value="2 BHK - Kitchen Only">Kitchen Only</option>
                      <option value="2 BHK - Bedroom Only">Bedroom Only</option>
                    </select>
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
                  🔒 No spam. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                What's Included in 2 BHK Package
              </h2>
              <p className="text-muted-foreground font-body">
                Complete home transformation with everything you need
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {inclusions.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                2 BHK Interior Packages
              </h2>
              <p className="text-muted-foreground font-body">
                Choose the package that fits your budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`relative p-6 rounded-2xl border-2 transition-all ${
                    pkg.popular 
                      ? "bg-card border-secondary shadow-glow" 
                      : "bg-card border-border/50 hover:border-secondary/50"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl text-primary mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="font-display text-3xl text-secondary">₹{pkg.price}</span>
                    <span className="text-muted-foreground text-sm"> Lakhs</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                      pkg.popular
                        ? "btn-terracotta text-secondary-foreground"
                        : "bg-muted text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    Get Quote
                  </Link>
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
                2 BHK Interior Design Gallery
              </h2>
              <p className="text-muted-foreground font-body">
                Real projects delivered in Bangalore
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] rounded-2xl overflow-hidden group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Ready to Design Your 2 BHK?
            </h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">
              Get a free consultation and detailed quote within 24 hours
            </p>
            <Link
              to="/contact"
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
