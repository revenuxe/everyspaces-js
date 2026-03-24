"use client";

import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery27 from "@/assets/gallery-27.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const ElectronicCity = () => {
  const seo = {
    metaTitle: "Interior Designers in Electronic City | Smart Home Interiors Bangalore",
    metaDescription: "Expert interior designers in Electronic City, Bangalore. 26+ projects in Phase 1 & 2. Smart home integration, modern modular kitchens & tech-savvy living spaces. 10-year warranty!",
    keywords: [
      "interior designers electronic city",
      "best interior designers in electronic city bangalore",
      "home interiors electronic city",
      "modular kitchen electronic city",
      "smart home interior electronic city",
      "apartment interior electronic city phase 1",
      "home renovation electronic city phase 2",
      "interior decorators electronic city bangalore",
      "tech park area interiors",
      "electronic city home design"
    ],
    ogTitle: "Interior Designers in Electronic City | EverySpaces - Smart Home Specialists",
    ogDescription: "Electronic City interior experts. 26+ projects, smart home solutions. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Electronic City?",
        answer: "Interior design in Electronic City costs ₹1,400 to ₹2,800 per sq ft. EverySpaces offers packages from ₹7.5 lakhs for 2BHK in Electronic City. We've completed 26+ projects in Phase 1 & 2 with modern designs and 10-year warranty."
      },
      {
        question: "Do you offer smart home integration in Electronic City?",
        answer: "Yes! Electronic City's tech-savvy residents often prefer smart home features. We integrate automated lighting, smart locks, voice-controlled appliances, motorized curtains, and home automation systems into our interior designs."
      },
      {
        question: "Which areas in Electronic City do you cover?",
        answer: "We serve Electronic City Phase 1, Phase 2, Neeladri Nagar, Velankani, Bommasandra, and Hebbagodi. Our portfolio includes apartments in Prestige, Salarpuria, Purva, and independent villas in the area."
      },
      {
        question: "Do you design interiors for Electronic City villas?",
        answer: "Absolutely! We design villa interiors in Electronic City including Velankani, Bommasandra, and surrounding villa communities. Our villa designs include landscaping coordination, outdoor living spaces, and large-format interiors."
      }
    ],
    nearbyAreas: ["Phase 1 Electronic City", "Phase 2 Electronic City", "Bommasandra", "Hebbagodi", "Neeladri Nagar", "HSR Layout"],
    specialties: ["Smart Home Design", "Modern Interiors", "Tech-Savvy Solutions", "Modular Kitchen", "Home Automation Ready"],
    lifestyleDescription: "Electronic City is Bangalore's original IT township, housing Infosys, Wipro, and HCL campuses. Home to thousands of tech professionals, this locality features modern apartments and villa communities that demand smart, tech-integrated interiors with contemporary aesthetics and efficient space utilization.",
    landmarks: [
      { name: "Infosys & Wipro Campus", description: "The iconic tech campuses set the tone for modern, minimalist aesthetics that residents carry into their home interiors.", type: "landmark" as const },
      { name: "Electronic City Flyover & Connectivity", description: "Improved connectivity means more families settling here long-term, investing in premium, permanent home interiors rather than temporary setups.", type: "lifestyle" as const },
      { name: "Neeladri Nagar & Villa Communities", description: "Independent villas and row houses offering spacious layouts perfect for luxury interiors with outdoor living spaces.", type: "residential" as const },
      { name: "Phase 2 Green Belt", description: "The greener Phase 2 area inspires nature-themed interiors with indoor gardens, wooden elements, and biophilic design concepts.", type: "nature" as const }
    ],
    designTips: [
      { title: "Integrate Smart Home Automation", description: "Electronic City residents love tech. Install smart lighting, automated blinds, voice-controlled appliances, and app-managed security for a truly connected home." },
      { title: "Design an Ergonomic Home Office", description: "With hybrid work culture in IT companies, create a dedicated workspace with adjustable desks, proper lighting, and soundproofing for video calls." },
      { title: "Use Modern Minimalist Aesthetics", description: "Clean lines, neutral palettes with accent colors, and clutter-free surfaces resonate with the tech-forward lifestyle of Electronic City residents." },
      { title: "Plan for Growing Families", description: "Many Electronic City residents are young families. Design adaptable kids' rooms, ample storage, and family-friendly kitchen layouts with safety features." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Electronic City"
      slug="electronic-city"
      projectCount="26+ Projects"
      heroImage={gallery4}
      galleryImages={[gallery27, gallery1, gallery2, gallery3, gallery5, gallery6, gallery7, gallery4]}
      description="Expert interior designers in Electronic City, Bangalore. Tech park area specialists with smart home solutions."
      seo={seo}
    />
  );
};

export default ElectronicCity;
