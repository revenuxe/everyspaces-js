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
import tvUnitImage from "@/assets/service-tv-unit.jpg";

const designElements = [
  {
    title: "Modular Kitchen",
    description: "Complete kitchen with chimney, hob and smart storage",
    image: kitchenImage,
  },
  {
    title: "All Bedrooms",
    description: "Wardrobes, beds and study units for every room",
    image: bedroomImage,
  },
  {
    title: "Living & Dining",
    description: "TV unit, dining area and accent walls",
    image: livingImage,
  },
  {
    title: "Wardrobes & Storage",
    description: "Sliding wardrobes with lofts throughout",
    image: wardrobeImage,
  },
  {
    title: "False Ceiling",
    description: "Designer ceilings with ambient lighting",
    image: tvUnitImage,
  },
  {
    title: "Foyer & Entrance",
    description: "Shoe rack, console and welcome area",
    image: villaImage,
  },
];

const whyChooseUs = [
  {
    title: "One-Stop Solution",
    description: "Everything from design to execution under one roof",
  },
  {
    title: "Coordinated Design",
    description: "Unified aesthetic across all rooms and spaces",
  },
  {
    title: "Time Efficient",
    description: "Faster completion with single point of contact",
  },
  {
    title: "Cost Effective",
    description: "Better value with complete home packages",
  },
];

// AEO-optimized FAQs
const fullHomeFAQs = [
  {
    question: "What is included in full home interior design?",
    answer: "EverySpaces's full home interior includes modular kitchen, all wardrobes, TV unit, false ceiling, electrical work, painting, flooring consultation, shoe rack, crockery unit, study tables, and soft furnishings. We handle everything from design to installation."
  },
  {
    question: "What is the cost of full home interior ?",
    answer: "Full home interior  costs ₹1,800-3,500 per sq ft. At EverySpaces, 2BHK starts from ₹6 lakh, 3BHK from ₹10 lakh, and villas from ₹25 lakh. Complete packages offer 15-20% savings compared to individual services."
  },
  {
    question: "Why choose full home interior package over individual services?",
    answer: "Full home packages offer coordinated design aesthetic, single point of contact, faster delivery, better pricing, and comprehensive warranty. EverySpaces's packages save 15-20% cost and 30% time compared to separate services."
  },
  {
    question: "How long does full home interior take?",
    answer: "Full home interior takes 45-60 days for 2BHK, 60-75 days for 3BHK, and 90-120 days for villas. EverySpaces's in-house manufacturing and dedicated project management ensure timely delivery."
  }
];

const ServiceFullHome = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Full Home Interior Design",
      "Complete end-to-end home interior design . Kitchen, wardrobes, living room, bedrooms all included in one package with 10-year warranty.",
      "https://everyspaces.com/services/full-home-design",
      livingImage,
      "600000-2500000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Modular Kitchen", "All Wardrobes", "TV Unit", "False Ceiling", "Painting", "Electrical Work"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Full Home Design", url: "https://everyspaces.com/services/full-home-design" }
    ]),
    createFAQSchema(fullHomeFAQs, 'services/full-home-design'),
    createProductSchema({
      name: "Complete Home Interior Package",
      description: "End-to-end home interior design  including kitchen, wardrobes, living room, and all bedrooms. 45-75 day delivery with 10-year warranty.",
      image: livingImage,
      url: "https://everyspaces.com/services/full-home-design",
      priceRange: "600000-2500000",
      category: "Home Improvement > Complete Home Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Full Home Design" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <ServiceHero title={"Full Home Interior Design"} description={"End-to-end interior solutions for your complete home transformation"} image={livingImage} formName={"Full Home Design Page Form"} />

        {/* Design Elements */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Complete Home Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Everything Included in Full Home Design
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                One package, complete transformation
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Why Choose Full Home Design?</h2>
              <p className="text-muted-foreground font-body">The smarter way to design your home</p>
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Our Full Home Projects</h2>
              <p className="text-muted-foreground font-body">Complete homes designed and delivered</p>
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

        <RelatedServices currentSlug="full-home-design" />
        <RelatedLocalities currentSlug="electronic-city" />

        <FAQSection faqs={fullHomeFAQs} />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready for Complete Home Transformation?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation and personalized quote</p>
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

export default ServiceFullHome;


