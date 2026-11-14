"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
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

import villaImage from "@/assets/service-villa.jpg";
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";
import poojaImage from "@/assets/service-pooja-room.jpg";

const designElements = [
  {
    title: "Grand Living Room",
    description: "Double-height ceilings with statement lighting",
    image: livingImage,
  },
  {
    title: "Luxury Master Suite",
    description: "En-suite bathroom with walk-in closet",
    image: bedroomImage,
  },
  {
    title: "Gourmet Kitchen",
    description: "Island kitchen with butler's pantry",
    image: kitchenImage,
  },
  {
    title: "Private Home Office",
    description: "Dedicated workspace with library",
    image: villaImage,
  },
  {
    title: "Entertainment Zone",
    description: "Home theatre and game room",
    image: wardrobeImage,
  },
  {
    title: "Pooja Room",
    description: "Traditional sacred space with modern design",
    image: poojaImage,
  },
];

const whyChooseUs = [
  {
    title: "Villa Specialists",
    description: "Extensive experience designing luxury villas across",
  },
  {
    title: "Bespoke Design",
    description: "Every element custom-crafted to your preferences",
  },
  {
    title: "Premium Materials",
    description: "Imported finishes and designer furniture options",
  },
  {
    title: "Project Management",
    description: "Dedicated project manager for seamless execution",
  },
];

// AEO-optimized FAQs
const villaFAQs = [
  {
    question: "What is the cost of villa interior design ?",
    answer: "Villa interior design  costs ₹25-75 lakh depending on size and luxury level. At EverySpaces, basic villa packages start from ₹25 lakh for 3000 sq ft, premium from ₹40 lakh, and luxury bespoke designs from ₹60 lakh."
  },
  {
    question: "How long does villa interior design take?",
    answer: "Complete villa interior design takes 90-120 working days. Large villas with extensive customization may take 4-5 months. EverySpaces assigns dedicated project managers for seamless execution."
  },
  {
    question: "Do you design outdoor spaces for villas?",
    answer: "Yes, EverySpaces designs complete villa interiors including outdoor living areas, pool decks, garden gazebos, and landscaping consultation. We create cohesive indoor-outdoor living experiences."
  },
  {
    question: "What luxury finishes do you offer for villas?",
    answer: "EverySpaces offers Italian marble, imported wooden flooring, designer wallpapers, motorized curtains, smart home integration, imported sanitaryware, and custom furniture for luxury villas ."
  }
];

const ServiceVilla = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Villa Interior Design",
      "Luxury villa and bungalow interior design  with bespoke designs, imported finishes, home theatre, and smart home integration.",
      "https://everyspaces.com/services/villa-interiors",
      villaImage,
      "2500000-7500000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Grand Living Room", "Walk-in Closet", "Home Theatre", "Island Kitchen", "Smart Home"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Villa Interiors", url: "https://everyspaces.com/services/villa-interiors" }
    ]),
    createFAQSchema(villaFAQs, 'services/villa-interiors'),
    createProductSchema({
      name: "Luxury Villa Interior Design",
      description: "Complete villa interior design  with bespoke designs, imported finishes, and smart home integration. 90-120 day delivery.",
      image: villaImage,
      url: "https://everyspaces.com/services/villa-interiors",
      priceRange: "2500000-7500000",
      category: "Home Improvement > Luxury Villa Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Villa Interiors" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <ServiceHero title={"Villa Interior Design"} description={"Luxury living spaces crafted for the most discerning homeowners"} image={villaImage} formName={"Villa Interior Page Form"} />

        {/* Design Elements */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Luxury Villa Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Design Elements for Your Villa
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Every space designed to reflect luxury and sophistication
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {designElements.map((item) => <ServiceDetailCard key={item.title} {...item} />)}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Why Choose EverySpaces for Your Villa?</h2>
              <p className="text-muted-foreground font-body">'s trusted luxury villa interior experts</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Our Villa Projects </h2>
              <p className="text-muted-foreground font-body">Luxury homes transformed by our expert team</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designElements.map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img src={imgSrc(img.image)} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="villa-interiors" />
        <RelatedLocalities currentSlug="sadashivanagar" />

        <FAQSection faqs={villaFAQs} />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your Dream Villa?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation with our villa design experts</p>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
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

export default ServiceVilla;


