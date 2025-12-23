import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
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
      
      <main className="pt-20 pb-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={bhk2Image}
              alt="2 BHK Interior Design Bangalore"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
          </div>
          
          <div className="container px-4 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                Most Popular Service
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 tracking-[-0.025em]">
                2 BHK Interior Design
                <span className="block text-secondary">in Bangalore</span>
              </h1>
              <p className="text-primary-foreground/90 font-body text-base md:text-lg mb-6">
                Transform your 2 BHK flat into a stunning home with our complete interior packages. 
                Starting at just ₹3.5 Lakhs with 10-year warranty and 45-day delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg"
                >
                  Get Free Quote
                </Link>
                <Link
                  to="/price-calculator"
                  className="px-8 py-4 rounded-2xl bg-primary-foreground/10 text-primary-foreground font-semibold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
                >
                  Calculate Price
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-muted/30 border-y border-border/50">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3">
                <p className="font-display text-2xl md:text-3xl text-secondary">200+</p>
                <p className="text-xs md:text-sm text-muted-foreground">2BHK Projects Done</p>
              </div>
              <div className="p-3">
                <p className="font-display text-2xl md:text-3xl text-secondary">₹3.5L</p>
                <p className="text-xs md:text-sm text-muted-foreground">Starting Price</p>
              </div>
              <div className="p-3">
                <p className="font-display text-2xl md:text-3xl text-secondary">45</p>
                <p className="text-xs md:text-sm text-muted-foreground">Days Delivery</p>
              </div>
              <div className="p-3">
                <p className="font-display text-2xl md:text-3xl text-secondary">10 Yr</p>
                <p className="text-xs md:text-sm text-muted-foreground">Warranty</p>
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
