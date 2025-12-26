import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Lightbulb, Layers, Monitor } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { 
  StructuredData, 
  createServiceSchema, 
  createBreadcrumbSchema,
  createFAQSchema,
  createProductSchema
} from "@/components/StructuredData";

import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";

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
    question: "What is the cost of study table design in Bangalore?",
    answer: "Study table design in Bangalore costs ₹15,000 to ₹60,000 depending on size and features. At Intorza, basic study tables start from ₹15,000, L-shaped units from ₹25,000, and complete study room setups from ₹50,000."
  },
  {
    question: "What is the ideal study table height?",
    answer: "Ideal study table height is 28-30 inches for adults and 22-26 inches for children. Intorza designs ergonomic study tables with adjustable heights for growing children and proper monitor placement for adults."
  },
  {
    question: "How to design a study corner in bedroom?",
    answer: "For bedroom study corners, Intorza uses wall-mounted desks, floating shelves, and integrated lighting. We ensure proper ventilation, natural light access, and minimal distractions. Starting from ₹15,000."
  },
  {
    question: "What lighting is best for study room?",
    answer: "Intorza recommends 4000-5000K neutral white LED lights for study rooms. We design layered lighting with overhead lights, focused task lamps, and ambient lighting to reduce eye strain and boost concentration."
  }
];

const ServiceStudyRoom = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", projectType: "Study Room" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({ form_name: "Study Room Design Page Form", source_page: "/services/study-room", data: formData });
      if (error) throw error;
      navigate("/thank-you");
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // AEO schemas
  const aeoSchemas = [
    createServiceSchema(
      "Study Room Design Bangalore",
      "Ergonomic study room and study table designs in Bangalore. Kids study stations, bookshelves, and focused learning spaces with proper lighting.",
      "https://intorza.com/services/study-room",
      "https://intorza.com/service-study-room.jpg",
      "15000-100000",
      {
        areaServed: ["Bangalore", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield"],
        features: ["Study Table", "Bookshelf", "Task Lighting", "Cable Management", "Ergonomic Design"]
      }
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://intorza.com" },
      { name: "Services", url: "https://intorza.com/services" },
      { name: "Study Room", url: "https://intorza.com/services/study-room" }
    ]),
    createFAQSchema(studyRoomFAQs, 'services/study-room'),
    createProductSchema({
      name: "Study Room & Table Design",
      description: "Ergonomic study room designs in Bangalore with study tables, bookshelves, and proper lighting for focused learning.",
      image: "https://intorza.com/service-study-room.jpg",
      url: "https://intorza.com/services/study-room",
      priceRange: "15000-100000",
      category: "Home Improvement > Study Room"
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Study Room Design Bangalore | Study Table Interior | Intorza</title>
        <meta name="description" content="Best study room designers in Bangalore. Study tables from ₹15K. Kids study stations, bookshelves, ergonomic designs. Free consultation!" />
        <meta name="keywords" content="study room design bangalore, study table design, kids study room, bookshelf design, learning space interior, study corner" />
        <link rel="canonical" href="https://intorza.com/services/study-room" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Study Room Design Bangalore | Study Table - Intorza" />
        <meta property="og:description" content="Study tables from ₹15K. Ergonomic designs, bookshelves, task lighting. Free consultation!" />
        <meta property="og:url" content="https://intorza.com/services/study-room" />
      </Helmet>
      <StructuredData data={aeoSchemas} />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Study Room" }]} />
      
      <main className="pb-24">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pt-24">
          <div className="absolute inset-0 z-0">
            <img src={bedroomImage} alt="Study Room Design Bangalore" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container px-4">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 animate-fade-up">
                Study Room Design
                <span className="block text-secondary mt-2">in Bangalore</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-up delay-200">
                Focused learning environments designed by Intorza experts
              </p>
            </div>
            <div className="max-w-sm mx-auto animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-5 shadow-elevated">
                <h2 className="font-display text-lg text-foreground text-center mb-4">Get Free Study Room Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required pattern="[0-9]{10}" className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all" />
                  <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-sm focus:border-secondary transition-all">
                    <option value="Study Room">Study Room</option>
                    <option value="Study Corner">Study Corner</option>
                    <option value="Kids Study">Kids Study Area</option>
                    <option value="Library Room">Home Library</option>
                  </select>
                  <button type="submit" disabled={isSubmitting} className="w-full btn-terracotta py-4 rounded-2xl text-secondary-foreground font-semibold">
                    {isSubmitting ? "Submitting..." : "Get Free Quote"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">Study Styles</span>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">Choose Your Study Room Style</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {studyStyles.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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

        <FAQSection />

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Ready to Create the Perfect Study Space?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">Contact Intorza for a free study room design consultation</p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold shadow-lg">
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
