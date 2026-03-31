import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-interior.jpg";
import { imgSrc } from "@/lib/utils";

const HeroSection = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await (supabase.from("leads") as any).insert({
        form_name: "Hero Contact Form",
        source_page: "/",
        data: {
          name: formData.name,
          mobile: formData.mobile,
          projectType: formData.projectType
        }
      });
      if (error) throw error;
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-start overflow-hidden pt-20 pb-24 md:items-center md:py-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc(heroImage)}
          alt="Luxury interior design in Hyderabad"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] will-change-transform" />
        
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content - Split Layout */}
      <div className="relative z-10 container px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Heading */}
          <div className="text-center md:text-left">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 md:mb-6 animate-fade-up tracking-[-0.03em] md:leading-[1.15]">
              Interior Designers in
              <span className="block tracking-[-0.02em] mt-2 text-primary-foreground">
                Hyderabad
              </span>
            </h1>
            <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-lg animate-fade-up delay-200">
              End to End Interior Solutions, Best{" "}
              <a href="/services" className="underline hover:text-secondary transition-colors">
                Interior Designers
              </a>{" "}
              in{" "}
              <a href="/hyderabad" className="underline hover:text-secondary transition-colors">
                Hyderabad
              </a>
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6 md:mt-8 justify-center md:justify-start animate-fade-up delay-300">
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-bold text-sm text-secondary-foreground">100+</span>
                <span className="text-xs font-body text-muted">Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-bold text-sm text-primary-foreground">10 Yr</span>
                <span className="text-xs font-body text-muted">Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-bold text-sm text-primary-foreground">45 Day</span>
                <span className="text-xs font-body text-muted">Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="max-w-xs md:max-w-lg mx-auto md:ml-auto md:mr-0 w-full animate-fade-up delay-300">
            <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-elevated">
              <h2 className="font-display text-base md:text-2xl text-foreground text-center mb-2.5 md:mb-6 tracking-[-0.02em]">
                Get Free Design Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-2 md:space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 md:px-5 py-2.5 md:py-4 bg-background/60 border border-border rounded-xl md:rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm md:text-base" />
                
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  className="w-full px-3 md:px-5 py-2.5 md:py-4 bg-background/60 border border-border rounded-xl md:rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm md:text-base" />
                
                <input
                  type="text"
                  placeholder="Project Type (e.g., 2BHK)"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  required
                  className="w-full px-3 md:px-5 py-2.5 md:py-4 bg-background/60 border border-border rounded-xl md:rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background transition-all duration-300 font-body text-sm md:text-base" />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-terracotta py-2.5 md:py-4 rounded-xl md:rounded-2xl text-secondary-foreground font-semibold font-body text-sm md:text-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Get My Free Design"}
                </button>
              </form>

              <p className="text-center text-[11px] md:text-sm text-muted-foreground mt-2 md:mt-4 font-body">
                No spam. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
