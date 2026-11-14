"use client";

import ServiceHero from "@/components/ServiceHero";

import { imgSrc } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, Layers, Monitor } from "lucide-react";
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

import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const studyStyles = [
  { title: "Compact Study Corner", description: "Space-saving desk in bedroom corner", image: bedroomImage },
  { title: "Dedicated Study Room", description: "Full room for focused learning", image: livingImage },
  { title: "Built-in Study Unit", description: "Wall-mounted desk with shelves", image: wardrobeImage },
  { title: "L-Shaped Desk Setup", description: "Spacious workspace for multiple activities", image: bedroomImage },
  { title: "Kids Study Station", description: "Fun, colorful design for young learners", image: livingImage },
  { title: "Teen Study Room", description: "Modern setup for teenagers", image: wardrobeImage },
];

const studyFeatures = [
  { icon: BookOpen, title: "Ergonomic Design", description: "Proper desk height and chair positioning for comfort" },
  { icon: Lightbulb, title: "Task Lighting", description: "Optimal lighting to reduce eye strain" },
  { icon: Layers, title: "Smart Storage", description: "Book shelves, file cabinets, and hidden storage" },
  { icon: Monitor, title: "Tech Ready", description: "Cable management and device charging stations" },
];

// AEO-optimized FAQs
const studyRoomFAQs = [
  {
    question: "What is the cost of study table design ?",
    answer: "Study table design  costs ₹15,000 to ₹60,000 depending on size and features. At EverySpaces, basic study tables start from ₹15,000, L-shaped units from ₹25,000, and complete study room setups from ₹50,000."
  },
  {
    question: "What is the ideal study table height?",
    answer: "Ideal study table height is 28-30 inches for adults and 22-26 inches for children. EverySpaces designs ergonomic study tables with adjustable heights for growing children and proper monitor placement for adults."
  },
  {
    question: "How to design a study corner in bedroom?",
    answer: "For bedroom study corners, EverySpaces uses wall-mounted desks, floating shelves, and integrated lighting. We ensure proper ventilation, natural light access, and minimal distractions. Starting from ₹15,000."
  },
  {
    question: "What lighting is best for study room?",
    answer: "EverySpaces recommends 4000-5000K neutral white LED lights for study rooms. We design layered lighting with overhead lights, focused task lamps, and ambient lighting to reduce eye strain and boost concentration."
  }
];

const ServiceStudyRoom = () => {


  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Study Room Design",
      "Ergonomic study room and study table designs . Kids study stations, bookshelves, and focused learning spaces with proper lighting.",
      "https://everyspaces.com/services/study-room",
      bedroomImage,
      "15000-100000",
      {
        areaServed: ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Sarjapur Road", "Bellandur", "Electronic City"],
        features: ["Study Table", "Bookshelf", "Task Lighting", "Cable Management", "Ergonomic Design"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://everyspaces.com" },
      { name: "Services", url: "https://everyspaces.com/services" },
      { name: "Study Room", url: "https://everyspaces.com/services/study-room" }
    ]),
    createFAQSchema(studyRoomFAQs, 'services/study-room'),
    createProductSchema({
      name: "Study Room & Table Design",
      description: "Ergonomic study room designs  with study tables, bookshelves, and proper lighting for focused learning.",
      image: bedroomImage,
      url: "https://everyspaces.com/services/study-room",
      priceRange: "15000-100000",
      category: "Home Improvement > Study Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Study Room" }]} />
      
      <main className="pb-24">
        <ServiceHero title={"Study Room Design"} description={"Focused learning environments designed by EverySpaces experts"} image={bedroomImage} formName={"Study Room Design Page Form"} />

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Study Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Study Room Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {studyStyles.map((item, index) => (
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
              {studyFeatures.map((item, index) => (
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

        <RelatedServices currentSlug="study-room" />
        <RelatedLocalities currentSlug="rajajinagar" />

        <FAQSection faqs={studyRoomFAQs} />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Create the Perfect Study Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact EverySpaces for a free study room design consultation</p>
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

export default ServiceStudyRoom;


