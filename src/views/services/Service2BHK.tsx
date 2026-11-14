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

import bhk2Image from "@/assets/service-2bhk.jpg";
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";
import tvUnitImage from "@/assets/service-tv-unit.jpg";

const designElements = [
  {
    title: "Modular Kitchen",
    description: "Space-saving L-shaped or U-shaped kitchen with premium finish",
    image: kitchenImage,
  },
  {
    title: "Master Bedroom",
    description: "Elegant bed design with wardrobe and study area",
    image: bedroomImage,
  },
  {
    title: "Living Room",
    description: "TV unit, sofa set arrangement and accent walls",
    image: livingImage,
  },
  {
    title: "Wardrobe Design",
    description: "Sliding wardrobes with loft and smart storage",
    image: wardrobeImage,
  },
  {
    title: "TV Unit",
    description: "Modern entertainment unit with display shelves",
    image: tvUnitImage,
  },
  {
    title: "Kids Room",
    description: "Fun and functional space for your little ones",
    image: bhk2Image,
  },
];

const whyChooseUs = [
  {
    title: "Expert Designers",
    description: "Dedicated team of interior designers with 10+ years experience in 2BHK homes",
  },
  {
    title: "Premium Materials",
    description: "BWR grade plywood, soft-close fittings, and branded hardware",
  },
  {
    title: "On-Time Delivery",
    description: "We guarantee delivery within the committed timeline",
  },
  {
    title: "After-Sales Support",
    description: "Dedicated support team for any post-installation needs",
  },
];

// AEO-optimized FAQs
const bhk2FAQs = [
  {
    question: "What is the cost of 2 BHK interior design ?",
    answer: "2 BHK interior design  costs ₹4-12 lakh for complete interiors. At EverySpaces, basic packages start from ₹4 lakh (kitchen + wardrobes), standard from ₹6 lakh (adds living room), and premium from ₹8 lakh (full home with false ceiling)."
  },
  {
    question: "What is included in 2 BHK interior package?",
    answer: "EverySpaces's 2 BHK package includes modular kitchen, 2 wardrobes, TV unit, shoe rack, and basic false ceiling. Premium packages add bedroom designs, living room interiors, study tables, and complete painting."
  },
  {
    question: "How long does 2 BHK interior design take?",
    answer: "Complete 2 BHK interior design takes 45-60 working days from design approval. This includes manufacturing at our facility, site preparation, and professional installation with quality checks."
  },
  {
    question: "Can I customize the 2 BHK interior package?",
    answer: "Yes, EverySpaces offers fully customizable 2 BHK packages. You can choose specific rooms, materials, finishes, and hardware. Our designers help optimize the budget while meeting your requirements."
  }
];

const Service2BHK = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "2 BHK Interior Design",
      "Complete 2 BHK interior design packages  starting ₹4 lakh. Includes modular kitchen, wardrobes, TV unit, and living room with 10-year warranty.",
      "https://everyspaces.com/services/2bhk-interiors",
      bhk2Image,
      "400000-1200000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Modular Kitchen", "Wardrobes", "TV Unit", "False Ceiling", "Living Room", "Bedroom Design"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "2 BHK Interiors", url: "https://everyspaces.com/services/2bhk-interiors" }
    ]),
    createFAQSchema(bhk2FAQs, 'services/2bhk-interiors'),
    createProductSchema({
      name: "2 BHK Complete Interior Package",
      description: "Complete 2 BHK interior design  including kitchen, wardrobes, TV unit, and living room. 45-60 day delivery with 10-year warranty.",
      image: bhk2Image,
      url: "https://everyspaces.com/services/2bhk-interiors",
      priceRange: "400000-1200000",
      category: "Home Improvement > Complete Home Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "2 BHK Interiors" }]} />
      
      <main className="pb-24">
        {/* Hero Section - Same as Homepage */}
        <ServiceHero title={"2 BHK Interior Design"} description={"Transform your 2 BHK into a stunning home with expert designers"} image={bhk2Image} formName={"2BHK Interior Page Form"} />

        {/* Design Elements for 2BHK */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Complete 2 BHK Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Design Elements for Your 2 BHK
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Every corner of your home designed with precision and style
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Why Choose EverySpaces for Your 2 BHK?
              </h2>
              <p className="text-muted-foreground font-body">
                Trusted by hundreds of homeowners 
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/50 transition-colors"
                >
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Our 2 BHK Projects 
              </h2>
              <p className="text-muted-foreground font-body">
                Real homes transformed by our expert team
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designElements.map((img, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] rounded-2xl overflow-hidden group"
                >
                  <img
                    src={imgSrc(img.image)}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentSlug="2bhk-interiors" />
        <RelatedLocalities currentSlug="koramangala" />

        {/* FAQ */}
        <FAQSection faqs={bhk2FAQs} />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Ready to Design Your 2 BHK?
            </h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">
              Get a free consultation and personalized design ideas
            </p>
            <Link
              href="/contact"
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


