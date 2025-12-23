import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

// Service images
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import tvUnitImage from "@/assets/service-tv-unit.jpg";
import poojaImage from "@/assets/service-pooja-room.jpg";
import villaImage from "@/assets/service-villa.jpg";
import bhk2Image from "@/assets/service-2bhk.jpg";

const services = [
  {
    id: 1,
    title: "Modular Kitchen",
    description: "Smart storage & modern designs for your culinary space.",
    image: kitchenImage,
    link: "/services/modular-kitchen",
  },
  {
    id: 2,
    title: "Wardrobe Design",
    description: "Custom wardrobes maximizing every inch of space.",
    image: wardrobeImage,
    link: "/services/wardrobe-design",
  },
  {
    id: 3,
    title: "Living Room",
    description: "Elegant designs for memorable family moments.",
    image: livingImage,
    link: "/services/living-room",
  },
  {
    id: 4,
    title: "Bedroom Interiors",
    description: "Cozy retreats with smart storage solutions.",
    image: bedroomImage,
    link: "/services/bedroom-interiors",
  },
  {
    id: 5,
    title: "2 BHK Interiors",
    description: "Complete transformation for compact homes.",
    image: bhk2Image,
    link: "/services/2bhk-interiors",
  },
  {
    id: 6,
    title: "3 BHK Interiors",
    description: "Premium designs for spacious living.",
    image: villaImage,
    link: "/services/3bhk-interiors",
  },
  {
    id: 7,
    title: "Villa Interiors",
    description: "Luxurious designs for your dream villa.",
    image: villaImage,
    link: "/services/villa-interiors",
  },
  {
    id: 8,
    title: "Full Home Design",
    description: "End-to-end interior solutions under one roof.",
    image: bhk2Image,
    link: "/services/full-home-design",
  },
  {
    id: 9,
    title: "Home Office",
    description: "Productivity-focused workspaces for professionals.",
    image: bedroomImage,
    link: "/services/home-office",
  },
  {
    id: 10,
    title: "Kids Room",
    description: "Playful yet functional spaces for little ones.",
    image: wardrobeImage,
    link: "/services/kids-room",
  },
  {
    id: 11,
    title: "Dining Space",
    description: "Elegant settings for family gatherings.",
    image: livingImage,
    link: "/services/dining-space",
  },
  {
    id: 12,
    title: "Bathroom Design",
    description: "Spa-inspired designs with premium fixtures.",
    image: kitchenImage,
    link: "/services/bathroom-design",
  },
  {
    id: 13,
    title: "Pooja Room",
    description: "Sacred spaces with traditional craftsmanship.",
    image: poojaImage,
    link: "/services/pooja-room",
  },
  {
    id: 14,
    title: "Foyer & Entrance",
    description: "Make stunning first impressions.",
    image: villaImage,
    link: "/services/foyer-entrance",
  },
  {
    id: 15,
    title: "TV Unit Design",
    description: "Modern entertainment centers with smart storage.",
    image: tvUnitImage,
    link: "/services/tv-unit-design",
  },
  {
    id: 16,
    title: "False Ceiling",
    description: "Artistic ceiling designs with ambient lighting.",
    image: livingImage,
    link: "/services/false-ceiling",
  },
  {
    id: 17,
    title: "Crockery Unit",
    description: "Stylish display units for your precious collection.",
    image: kitchenImage,
    link: "/services/crockery-unit",
  },
  {
    id: 18,
    title: "Study Room",
    description: "Focused learning environments for students.",
    image: bedroomImage,
    link: "/services/study-room",
  },
  {
    id: 19,
    title: "Guest Room",
    description: "Comfortable spaces for your visitors.",
    image: wardrobeImage,
    link: "/services/guest-room",
  },
  {
    id: 20,
    title: "Balcony Design",
    description: "Transform outdoor spaces into relaxing retreats.",
    image: bhk2Image,
    link: "/services/balcony-design",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Interior Design Services in Bangalore | Intorza</title>
        <meta
          name="description"
          content="Explore our complete range of interior design services - modular kitchens, wardrobes, living rooms, bedrooms, 2BHK, 3BHK, villa interiors & more. Get free quote!"
        />
        <link rel="canonical" href="https://intorza.com/services" />
      </Helmet>
      <Header />
      
      <main className="pt-20 pb-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4 tracking-[-0.025em]">
              Interior Design Services
            </h1>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Transform every corner of your home with our expert craftsmanship and innovative designs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={service.link}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-card shadow-soft hover:shadow-glow transition-all duration-500"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                      <h3 className="font-display text-sm md:text-lg lg:text-xl text-primary-foreground mb-0.5 md:mb-1 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-xs md:text-sm font-body line-clamp-2 hidden md:block">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-secondary-foreground" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">
              Get a free consultation and quote within 24 hours
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Quote
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

export default Services;
