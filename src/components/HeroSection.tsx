import { useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    apartmentType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message
    const message = `Hi! I'm ${formData.name}. I'm interested in interior design for my ${formData.apartmentType}. Please contact me at ${formData.whatsapp}.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container px-4 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 animate-fade-up">
            Design Your Dream
            <span className="block text-secondary">Living Space</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200">
            Premium interior design solutions for Bengaluru's most discerning homeowners
          </p>
        </div>

        {/* Floating Lead Card */}
        <div className="max-w-md mx-auto animate-fade-up delay-300">
          <div className="glass-card rounded-3xl p-6 md:p-8 shadow-elevated">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary text-center mb-6">
              Get Your Free Design Consultation
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                />
              </div>
              
              <div className="relative">
                <select
                  value={formData.apartmentType}
                  onChange={(e) => setFormData({ ...formData, apartmentType: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-2xl text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                >
                  <option value="" disabled>Select Apartment Type</option>
                  <option value="2BHK">2 BHK</option>
                  <option value="3BHK">3 BHK</option>
                  <option value="Villa">Villa</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              </div>
              
              <button
                type="submit"
                className="w-full btn-terracotta py-4 rounded-2xl text-secondary-foreground font-semibold text-lg"
              >
                Get My Free Design
              </button>
            </form>
            
            <p className="text-center text-xs text-muted-foreground mt-4">
              No spam. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
