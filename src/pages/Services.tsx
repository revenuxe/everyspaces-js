import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { 
  StructuredData, 
  createBreadcrumbSchema,
  professionalServiceSchema,
  createFAQSchema
} from "@/components/StructuredData";

// Service images
import kitchenImage from "@/assets/service-modular-kitchen.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import tvUnitImage from "@/assets/service-tv-unit.jpg?webp";
import poojaImage from "@/assets/service-pooja-room.jpg?webp";
import villaImage from "@/assets/service-villa.jpg?webp";
import bhk2Image from "@/assets/service-2bhk.jpg?webp";

const services = [
  { id: 1, title: "Modular Kitchen", description: "Smart storage & modern designs for your culinary space.", image: kitchenImage, link: "/services/modular-kitchen" },
  { id: 2, title: "Wardrobe Design", description: "Custom wardrobes maximizing every inch of space.", image: wardrobeImage, link: "/services/wardrobe-design" },
  { id: 3, title: "Living Room", description: "Elegant designs for memorable family moments.", image: livingImage, link: "/services/living-room" },
  { id: 4, title: "Bedroom Interiors", description: "Cozy retreats with smart storage solutions.", image: bedroomImage, link: "/services/bedroom-design" },
  { id: 5, title: "2 BHK Interiors", description: "Complete transformation for compact homes.", image: bhk2Image, link: "/services/2bhk-interiors" },
  { id: 6, title: "3 BHK Interiors", description: "Premium designs for spacious living.", image: villaImage, link: "/services/3bhk-interiors" },
  { id: 7, title: "Villa Interiors", description: "Luxurious designs for your dream villa.", image: villaImage, link: "/services/villa-interiors" },
  { id: 8, title: "Full Home Design", description: "End-to-end interior solutions under one roof.", image: bhk2Image, link: "/services/full-home-design" },
  { id: 9, title: "Home Office", description: "Productivity-focused workspaces for professionals.", image: bedroomImage, link: "/services/home-office" },
  { id: 10, title: "Kids Room", description: "Playful yet functional spaces for little ones.", image: wardrobeImage, link: "/services/kids-room" },
  { id: 11, title: "Dining Space", description: "Elegant settings for family gatherings.", image: livingImage, link: "/services/dining-room" },
  { id: 12, title: "Bathroom Design", description: "Spa-inspired designs with premium fixtures.", image: kitchenImage, link: "/services/bathroom-design" },
  { id: 13, title: "Pooja Room", description: "Sacred spaces with traditional craftsmanship.", image: poojaImage, link: "/services/pooja-room" },
  { id: 14, title: "Foyer & Entrance", description: "Make stunning first impressions.", image: villaImage, link: "/services/foyer-entrance" },
  { id: 15, title: "TV Unit Design", description: "Modern entertainment centers with smart storage.", image: tvUnitImage, link: "/services/tv-unit" },
  { id: 16, title: "False Ceiling", description: "Artistic ceiling designs with ambient lighting.", image: livingImage, link: "/services/false-ceiling" },
  { id: 17, title: "Crockery Unit", description: "Stylish display units for your precious collection.", image: kitchenImage, link: "/services/crockery-unit" },
  { id: 18, title: "Study Room", description: "Focused learning environments for students.", image: bedroomImage, link: "/services/study-room" },
  { id: 19, title: "Guest Room", description: "Comfortable spaces for your visitors.", image: wardrobeImage, link: "/services/guest-room" },
  { id: 20, title: "Balcony Design", description: "Transform outdoor spaces into relaxing retreats.", image: bhk2Image, link: "/services/balcony-design" },
];

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://intorza.in/services#itemlist",
  "name": "Interior Design Services by Intorza Bangalore",
  "description": "Comprehensive list of 20+ interior design services offered by Intorza in Bangalore including modular kitchens, wardrobes, living rooms, bedrooms, and complete home interiors.",
  "numberOfItems": services.length,
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "url": `https://intorza.in${service.link}`,
      "provider": {
        "@type": "Organization",
        "name": "Intorza",
        "@id": "https://intorza.in/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Bangalore"
      }
    }
  }))
};

// AEO-optimized FAQs for services page
const servicesFAQs = [
  {
    question: "What interior design services does Intorza offer in Bangalore?",
    answer: "Intorza offers 20+ interior design services in Bangalore including modular kitchen design, wardrobe design, living room interiors, bedroom design, 2BHK/3BHK packages, villa interiors, TV units, false ceiling, pooja room, study room, kids room, home office, and complete full home interior solutions."
  },
  {
    question: "Which interior design service is most popular in Bangalore?",
    answer: "Modular kitchen design and complete home interior packages are the most popular services at Intorza Bangalore. 2BHK and 3BHK apartment interior packages are also in high demand, offering end-to-end solutions with 10-year warranty."
  }
];

const Services = () => {
  // Combine all AEO schemas
  const aeoSchemas = [
    servicesListSchema,
    professionalServiceSchema,
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.in" },
      { name: "Services", url: "https://intorza.in/services" }
    ]),
    createFAQSchema(servicesFAQs, 'services')
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>All Interior Design Services in Bangalore | 20+ Categories | Intorza</title>
        <meta
          name="description"
          content="Explore 20+ interior design services by Intorza Bangalore. Modular kitchen, wardrobe, living room, bedroom, 2BHK, 3BHK, villa interiors & more. Free consultation!"
        />
        <meta name="keywords" content="interior design services bangalore, home interior services, modular kitchen service, wardrobe design service, full home interior bangalore" />
        <link rel="canonical" href="https://intorza.in/services" />
        
        {/* AEO meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="20+ Interior Design Services in Bangalore - Intorza" />
        <meta property="og:description" content="Complete interior design services: modular kitchen, wardrobe, living room, bedroom, 2BHK, 3BHK, villa. 10-year warranty, free consultation!" />
        <meta property="og:url" content="https://intorza.in/services" />
        <meta property="og:type" content="website" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
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
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-foreground/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 pr-14 md:pr-20 pb-10 md:pb-12">
                      <h3 className="font-display text-sm md:text-lg lg:text-xl text-primary-foreground mb-0.5 md:mb-1 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-primary-foreground/85 text-xs md:text-sm font-body line-clamp-2 hidden md:block">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="absolute bottom-4 right-3 md:bottom-5 md:right-5 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
