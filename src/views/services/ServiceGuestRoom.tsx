"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Bed, Shirt, Sparkles, Heart } from "lucide-react";
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

const guestRoomStyles = [
  { title: "Comfortable Classic", description: "Warm, welcoming traditional design", image: wardrobeImage },
  { title: "Modern Minimalist", description: "Clean, clutter-free guest space", image: bedroomImage },
  { title: "Multi-Purpose Room", description: "Guest + study + storage combo", image: livingImage },
  { title: "Luxury Suite", description: "Hotel-like experience for guests", image: wardrobeImage },
  { title: "Compact Guest Room", description: "Smart solutions for small spaces", image: bedroomImage },
  { title: "Sofa-Cum-Bed Design", description: "Convertible furniture for dual use", image: livingImage },
];

const guestRoomFeatures = [
  { icon: Bed, title: "Comfortable Beds", description: "Queen or twin beds with premium mattress options" },
  { icon: Shirt, title: "Guest Wardrobe", description: "Compact wardrobe with hangers and storage" },
  { icon: Sparkles, title: "Cozy Ambiance", description: "Warm lighting and comfortable furnishings" },
  { icon: Heart, title: "Thoughtful Details", description: "Nightstands, mirrors, and charging points" },
];

// AEO-optimized FAQs
const guestRoomFAQs = [
  {
    question: "What is the cost of guest room design ?",
    answer: "Guest room design  costs ₹60,000 to ₹1.5 lakh including bed, wardrobe, and basic decor. At EverySpaces, basic setups start from ₹60,000, comfortable suites from ₹90,000, and luxury guest rooms from ₹1.2 lakh."
  },
  {
    question: "How to design a multi-purpose guest room?",
    answer: "EverySpaces designs multi-purpose rooms with sofa-cum-beds, murphy beds, or folding beds combined with study tables and storage. This maximizes utility when guests aren't staying. Starting from ₹70,000."
  },
  {
    question: "What furniture is essential for a guest room?",
    answer: "Essential guest room furniture includes comfortable bed, nightstand, compact wardrobe, mirror, task lamp, and charging points. EverySpaces adds luggage rack, towel stand, and amenity tray for hotel-like experience."
  },
  {
    question: "Can you design a small guest room?",
    answer: "Yes, EverySpaces specializes in compact guest rooms. We use wall beds, sofa-cum-beds, wall-mounted storage, and space-saving furniture to create comfortable guest spaces even in small areas."
  }
];

const ServiceGuestRoom = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Guest Room Design",
      "Comfortable guest room designs . Hotel-like guest suites, multi-purpose rooms, and sofa-cum-bed designs for visitors.",
      "https://everyspaces.com/services/guest-room",
      wardrobeImage,
      "60000-150000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Guest Bed", "Compact Wardrobe", "Sofa-Cum-Bed", "Multi-Purpose Room", "Cozy Ambiance"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Guest Room", url: "https://everyspaces.com/services/guest-room" }
    ]),
    createFAQSchema(guestRoomFAQs, 'services/guest-room'),
    createProductSchema({
      name: "Guest Room Interior Design",
      description: "Welcoming guest room designs  with comfortable beds, compact wardrobes, and thoughtful amenities.",
      image: wardrobeImage,
      url: "https://everyspaces.com/services/guest-room",
      priceRange: "60000-150000",
      category: "Home Improvement > Guest Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Guest Room" }]} />
      
      <main className="pb-24">
        <ServiceHero title={"Guest Room Design"} description={"Create welcoming spaces for your visitors with EverySpaces"} image={wardrobeImage} formName={"Guest Room Design Page Form"} />

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Guest Room Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Guest Room Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {guestRoomStyles.map((item, index) => (
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
              {guestRoomFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="guest-room" />
        <RelatedLocalities currentSlug="malleshwaram" />

        <FAQSection faqs={guestRoomFAQs} />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Welcome Your Guests in Style?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free guest room design consultation</p>
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

export default ServiceGuestRoom;


