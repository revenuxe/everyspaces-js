import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-interior.jpg";


const HeroSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Hero Contact Form",
        source_page: "/",
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
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury interior design in Bangalore"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] will-change-transform"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 animate-fade-up tracking-[-0.03em] md:leading-[1.2]">
            Design Your Dream
            <span className="block text-secondary tracking-[-0.02em] md:mt-2">Interior Designers in Bengaluru</span>
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
            Premium interior design solutions for Bengaluru's most discerning homeowners
          </p>
        </div>

        {/* Floating Lead Card */}
        <div className="max-w-sm mx-auto animate-fade-up delay-300">
          <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
            <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
              Get Your Free Design Consultation
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
                  placeholder="Project Type (e.g., 2BHK, Villa)"
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
                {isSubmitting ? "Submitting..." : "Get My Free Design"}
              </button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-4 font-body">
              🔒 No spam. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
