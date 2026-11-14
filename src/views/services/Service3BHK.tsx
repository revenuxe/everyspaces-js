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
    title: "Spacious Living Room",
    description: "Grand living spaces with premium entertainment units",
    image: livingImage,
  },
  {
    title: "Master Bedroom Suite",
    description: "Luxurious master bedroom with walk-in wardrobe",
    image: bedroomImage,
  },
  {
    title: "Modular Kitchen",
    description: "Island kitchen or parallel kitchen with pantry",
    image: kitchenImage,
  },
  {
    title: "Kids & Guest Rooms",
    description: "Thoughtfully designed rooms for family and guests",
    image: wardrobeImage,
  },
  {
    title: "Home Theatre",
    description: "Dedicated entertainment zone with acoustic design",
    image: tvUnitImage,
  },
  {
    title: "Study & Office",
    description: "Productive workspace integrated into your home",
    image: villaImage,
  },
];

const whyChooseUs = [
  {
    title: "Spacious Layouts",
    description: "Expert planning to maximize the potential of larger 3BHK spaces",
  },
  {
    title: "Premium Finishes",
    description: "High-end materials and imported fittings for luxury feel",
  },
  {
    title: "Custom Solutions",
    description: "Tailored designs based on your family's unique lifestyle",
  },
  {
    title: "End-to-End Service",
    description: "From concept to completion, we handle everything",
  },
];

// AEO-optimized FAQs
const bhk3FAQs = [
  {
    question: "What is the cost of 3 BHK interior design ?",
    answer: "3 BHK interior design  costs ₹8-20 lakh for complete interiors. At EverySpaces, basic packages start from ₹8 lakh, premium from ₹12 lakh with false ceiling, and luxury from ₹18 lakh with home theatre and walk-in closets."
  },
  {
    question: "What is included in 3 BHK interior package?",
    answer: "EverySpaces's 3 BHK package includes modular kitchen, 3 wardrobes, TV unit, shoe rack, crockery unit, false ceiling, and study table. Premium packages add home theatre setup, walk-in closet, pooja room, and complete painting."
  },
  {
    question: "How long does 3 BHK interior design take?",
    answer: "Complete 3 BHK interior design takes 60-75 working days from design approval. Premium designs with home theatre and extensive woodwork may take 75-90 days. We ensure timely delivery with dedicated project managers."
  },
  {
    question: "Do you design home theatre for 3 BHK apartments?",
    answer: "Yes, EverySpaces designs home theatre setups for 3 BHK apartments with acoustic paneling, projection systems, comfortable seating, and ambient lighting. We optimize spare rooms or living areas for the best cinematic experience."
  }
];

const Service3BHK = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "3 BHK Interior Design",
      "Premium 3 BHK interior design packages  starting ₹8 lakh. Includes modular kitchen, wardrobes, TV unit, home theatre, and walk-in closets with 10-year warranty.",
      "https://everyspaces.com/services/3bhk-interiors",
      villaImage,
      "800000-2000000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Modular Kitchen", "Walk-in Closet", "Home Theatre", "False Ceiling", "Premium Finishes"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "3 BHK Interiors", url: "https://everyspaces.com/services/3bhk-interiors" }
    ]),
    createFAQSchema(bhk3FAQs, 'services/3bhk-interiors'),
    createProductSchema({
      name: "3 BHK Premium Interior Package",
      description: "Complete 3 BHK interior design  with kitchen, wardrobes, home theatre, and luxury finishes. 60-75 day delivery with 10-year warranty.",
      image: villaImage,
      url: "https://everyspaces.com/services/3bhk-interiors",
      priceRange: "800000-2000000",
      category: "Home Improvement > Complete Home Interior"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "3 BHK Interiors" }]} />
      
      <main className="pb-24">
        {/* Hero Section */}
        <ServiceHero title={"3 BHK Interior Design"} description={"Premium interiors for spacious homes with luxury finishes"} image={villaImage} formName={"3BHK Interior Page Form"} />

        {/* Design Elements */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Complete 3 BHK Solutions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Design Elements for Your 3 BHK
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Spacious living designed with luxury and functionality
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Why Choose EverySpaces for Your 3 BHK?</h2>
              <p className="text-muted-foreground font-body">Premium designs for discerning homeowners</p>
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
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Our 3 BHK Projects </h2>
              <p className="text-muted-foreground font-body">Premium homes transformed by our expert team</p>
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

        <RelatedServices currentSlug="3bhk-interiors" />
        <RelatedLocalities currentSlug="whitefield" />

        <FAQSection faqs={bhk3FAQs} />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Design Your 3 BHK?</h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">Get a free consultation and personalized design ideas</p>
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

export default Service3BHK;


