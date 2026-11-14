"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import RelatedLocalities from "@/components/RelatedLocalities";
import ServiceDetailCard from "@/components/ServiceDetailCard";
import { 
  StructuredData, 
  createServiceSchema, 
  createBreadcrumbSchema,
  createFAQSchema,
  createProductSchema
} from "@/components/StructuredData";

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
  const pathname = usePathname() ?? "";
  const kitchenLayoutsBasePath = "/services/modular-kitchen";


  // AEO-optimized FAQs specific to modular kitchens
  const modularKitchenFAQs = [
    {
      question: "What is the cost of modular kitchen ?",
      answer: "Modular kitchen cost  ranges from ₹1.5 lakh to ₹8 lakh depending on size, materials, and finishes. At EverySpaces, L-shaped kitchens start from ₹2.5 lakh, U-shaped from ₹3.5 lakh, and island kitchens from ₹5 lakh. All prices include Hettich/Hafele hardware with 10-year warranty."
    },
    {
      question: "How long does modular kitchen installation take?",
      answer: "Modular kitchen installation at EverySpaces takes 15-20 working days from design approval. This includes manufacturing at our in-house facility and professional installation. Complex island kitchens may take 25-30 days."
    },
    {
      question: "Which is the best modular kitchen brand ?",
      answer: "EverySpaces is rated among the best modular kitchen brands  with 500+ installations, 4.8/5 rating, and 10-year warranty. We use premium materials like BWR plywood, acrylic/lacquer finishes, and Hettich/Hafele hardware for durability."
    },
    {
      question: "What materials are used in EverySpaces modular kitchens?",
      answer: "EverySpaces modular kitchens use BWR (Boiling Water Resistant) plywood from Century/Greenply, acrylic or laminate finishes, granite/quartz countertops, and Hettich/Hafele soft-close hardware. All materials come with manufacturer warranty."
    }
  ];

  // AEO schemas for this page
  const aeoSchemas = [
    createServiceSchema(
      "Modular Kitchen Design",
      "Best modular kitchen designers  offering L-shaped, U-shaped, parallel, and island kitchens with Hettich hardware, 10-year warranty, and 45-day delivery.",
      "https://everyspaces.com/services/modular-kitchen",
      kitchenImage,
      "150000-800000",
      {
        timeRequired: "P20D",
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["L-Shaped Kitchen", "U-Shaped Kitchen", "Island Kitchen", "Parallel Kitchen", "Soft-close hardware", "10-year warranty"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Modular Kitchen", url: "https://everyspaces.com/services/modular-kitchen" }
    ]),
    createFAQSchema(modularKitchenFAQs, 'services/modular-kitchen'),
    createProductSchema({
      name: "Modular Kitchen Design",
      description: "Premium modular kitchen design and installation  with L-shaped, U-shaped, and island layouts. Includes Hettich/Hafele hardware, granite countertops, and 10-year warranty.",
      image: kitchenImage,
      url: "https://everyspaces.com/services/modular-kitchen",
      priceRange: "150000-800000",
      category: "Home Improvement > Kitchen"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Modular Kitchen" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <ServiceHero title={"Modular Kitchen Design"} description={"Smart, stylish kitchens designed for the modern home"} image={kitchenImage} formName={"Modular Kitchen Page Form"} />

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
              {kitchenTypes.map((item) => <ServiceDetailCard key={item.title} {...item} href={`${kitchenLayoutsBasePath}/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} />)}
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
              <p className="text-muted-foreground font-body">Beautiful kitchens delivered across</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {kitchenTypes.map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img src={imgSrc(img.image)} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/portfolio" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="modular-kitchen" />
        <RelatedLocalities currentSlug="koramangala" />

        <FAQSection faqs={modularKitchenFAQs} />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your Dream Kitchen?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation with our kitchen design experts</p>
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

export default ServiceModularKitchen;


