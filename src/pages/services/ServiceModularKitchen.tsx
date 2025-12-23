import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";

import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Modular Kitchen Design in Bangalore | Best Kitchen Interiors | Intorza</title>
        <meta
          name="description"
          content="Best modular kitchen designers in Bangalore. L-shaped, U-shaped, island kitchens with premium materials. 10-year warranty. Get free quote!"
        />
        <meta
          name="keywords"
          content="modular kitchen bangalore, modular kitchen design, kitchen interior design bangalore, l shaped kitchen, u shaped kitchen, island kitchen bangalore"
        />
        <link rel="canonical" href="https://intorza.com/services/modular-kitchen" />
      </Helmet>
      <Header />
      
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
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm"
                  >
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="L-Shaped Kitchen">L-Shaped Kitchen</option>
                    <option value="U-Shaped Kitchen">U-Shaped Kitchen</option>
                    <option value="Island Kitchen">Island Kitchen</option>
                    <option value="Parallel Kitchen">Parallel Kitchen</option>
                  </select>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
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
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <FAQSection />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your Dream Kitchen?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation with our kitchen design experts</p>
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

export default ServiceModularKitchen;
