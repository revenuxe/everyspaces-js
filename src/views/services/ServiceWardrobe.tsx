"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import { ArrowRight, Shirt, DoorOpen, Layers, Sparkles } from "lucide-react";
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

import wardrobeImage from "@/assets/service-wardrobe.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";

const wardrobeTypes = [
  { title: "Sliding Door Wardrobe", description: "Space-saving design for compact rooms", image: wardrobeImage },
  { title: "Hinged Door Wardrobe", description: "Classic style with full door access", image: bedroomImage },
  { title: "Walk-in Closet", description: "Luxury dressing room experience", image: livingImage },
  { title: "Loft Wardrobe", description: "Maximize vertical space utilization", image: wardrobeImage },
  { title: "Corner Wardrobe", description: "Perfect for awkward corner spaces", image: bedroomImage },
  { title: "Built-in Wardrobe", description: "Seamless wall-to-wall integration", image: livingImage },
];

const wardrobeFeatures = [
  { icon: Shirt, title: "Smart Organization", description: "Dedicated zones for shirts, pants, accessories, and more" },
  { icon: DoorOpen, title: "Premium Hardware", description: "Soft-close hinges, telescopic channels, and smooth sliding systems" },
  { icon: Layers, title: "Custom Interiors", description: "Pull-out trays, shoe racks, tie holders, and jewelry compartments" },
  { icon: Sparkles, title: "Quality Finishes", description: "Lacquer, laminate, veneer, or glass finishes to match your style" },
];

// AEO-optimized FAQs
const wardrobeFAQs = [
  {
    question: "What is the cost of wardrobe design ?",
    answer: "Wardrobe design cost  ranges from ₹1,200 to ₹2,500 per sq ft. At EverySpaces, sliding wardrobes start from ₹80,000, hinged wardrobes from ₹70,000, and walk-in closets from ₹2 lakh. All include Hettich/Hafele hardware with 10-year warranty."
  },
  {
    question: "Which wardrobe type is best for small bedrooms?",
    answer: "Sliding door wardrobes are best for small bedrooms as they don't need door swing space. EverySpaces's sliding wardrobes with mirror finishes also make rooms appear larger. Loft wardrobes maximize vertical space in compact rooms."
  },
  {
    question: "How long does wardrobe installation take?",
    answer: "Single wardrobe installation takes 3-5 days, while full home wardrobes take 10-15 days. EverySpaces's in-house manufacturing ensures faster delivery with quality control at every stage."
  },
  {
    question: "What materials are used in EverySpaces wardrobes?",
    answer: "EverySpaces uses BWR plywood from Century/Greenply, premium laminates or lacquer finish, Hettich/Hafele soft-close hardware, and aluminum profiles for sliding systems. All materials come with manufacturer warranty."
  }
];

const ServiceWardrobe = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Wardrobe Design",
      "Custom wardrobe designers  offering sliding wardrobes, walk-in closets, and loft storage with Hettich hardware and 10-year warranty.",
      "https://everyspaces.com/services/wardrobe-design",
      wardrobeImage,
      "70000-500000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Sliding Wardrobe", "Hinged Wardrobe", "Walk-in Closet", "Loft Storage", "Soft-close hardware"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Wardrobe Design", url: "https://everyspaces.com/services/wardrobe-design" }
    ]),
    createFAQSchema(wardrobeFAQs, 'services/wardrobe-design'),
    createProductSchema({
      name: "Custom Wardrobe Design",
      description: "Premium wardrobe design and installation  with sliding, hinged, and walk-in options. Includes Hettich/Hafele hardware and 10-year warranty.",
      image: wardrobeImage,
      url: "https://everyspaces.com/services/wardrobe-design",
      priceRange: "70000-500000",
      category: "Home Improvement > Bedroom Furniture"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Wardrobe Design" }]} />
      
      <main className="pb-24">
        <ServiceHero title={"Custom Wardrobe Design"} description={"Maximize storage with EverySpaces's smart wardrobe solutions"} image={wardrobeImage} formName={"Wardrobe Design Page Form"} />

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Wardrobe Types</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Wardrobe Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {wardrobeTypes.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={imgSrc(item.image)} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/70 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base md:text-lg text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/90 text-xs md:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary text-center mb-10">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wardrobeFeatures.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="wardrobe-design" />
        <RelatedLocalities currentSlug="indiranagar" />

        <FAQSection faqs={wardrobeFAQs} />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Organize Your Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free wardrobe design consultation</p>
            <a href="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ServiceWardrobe;


