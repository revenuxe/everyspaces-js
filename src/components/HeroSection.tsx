import { useState } from "react";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    projectType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'm ${formData.name}. I'm interested in interior design for my ${formData.projectType}. Please contact me at ${formData.whatsapp}.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Interior"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 animate-fade-up tracking-[-0.03em]">
            Design Your Dream
            <span className="block text-secondary tracking-[-0.02em]">Living Space</span>
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
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Project Type (e.g., 2BHK, Villa)"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-terracotta py-3.5 rounded-2xl text-secondary-foreground font-semibold font-body"
              >
                Get My Free Design
              </button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-3 font-body">
              No spam. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
