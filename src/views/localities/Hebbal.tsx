"use client";

import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const Hebbal = () => {
  const seo = {
    metaTitle: "Interior Designers in Hebbal | Villa & Apartment Interiors Bangalore",
    metaDescription: "Expert interior designers in Hebbal, Bangalore. 24+ projects including premium villas. North Bangalore specialists with luxury villa interiors & modern apartments. 10-year warranty!",
    keywords: [
      "interior designers hebbal",
      "best interior designers in hebbal bangalore",
      "home interiors hebbal",
      "modular kitchen hebbal",
      "villa interior design hebbal",
      "apartment interior hebbal",
      "home renovation hebbal bangalore",
      "interior decorators hebbal",
      "north bangalore interiors hebbal",
      "luxury villa design hebbal"
    ],
    ogTitle: "Interior Designers in Hebbal | EverySpaces - Villa & Apartment Specialists",
    ogDescription: "Hebbal interior experts. 24+ projects, villa specialists. North Bangalore leaders. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Hebbal?",
        answer: "Interior design in Hebbal costs ₹1,600 to ₹3,500 per sq ft. Villa interiors start from ₹12 lakhs, apartments from ₹8 lakhs. EverySpaces has completed 24+ projects in Hebbal with premium materials and 10-year warranty."
      },
      {
        question: "Do you specialize in Hebbal villa interiors?",
        answer: "Yes! Hebbal has many premium villas and independent houses. We specialize in large-format villa interiors including grand living rooms, customized modular kitchens, walk-in wardrobes, and outdoor living spaces."
      },
      {
        question: "Which areas near Hebbal do you serve?",
        answer: "We serve Hebbal, Kempapura, Nagawara, Manyata Tech Park area, Bellary Road, and surrounding areas. Our portfolio includes villas near Hebbal Lake, apartments in Embassy Manyata, and gated communities."
      },
      {
        question: "Can you design interiors near Manyata Tech Park?",
        answer: "Absolutely! We have extensive experience in the Manyata Tech Park belt. We design modern apartments and penthouses for tech professionals, incorporating home offices, contemporary aesthetics, and smart home features."
      }
    ],
    nearbyAreas: ["Kempapura", "Nagawara", "Manyata Tech Park", "Bellary Road", "Yelahanka", "Sahakara Nagar"],
    specialties: ["Villa Interior", "Large Format Design", "Premium Kitchen", "Grand Living Room", "Outdoor Living"],
    lifestyleDescription: "Hebbal is North Bangalore's premium gateway, known for the scenic Hebbal Lake, proximity to the international airport, and the sprawling Manyata Tech Park. The area features a mix of luxury villas, premium apartments, and penthouse residences that demand sophisticated interiors with grand proportions.",
    landmarks: [
      { name: "Hebbal Lake", description: "The serene lake provides stunning views for premium apartments. We design panoramic living rooms with large windows and nature-inspired palettes to complement the lakeside setting.", type: "nature" as const },
      { name: "Manyata Tech Park", description: "One of Asia's largest tech parks drives demand for modern, smart homes. Residents want home offices, entertainment zones, and contemporary aesthetics.", type: "lifestyle" as const },
      { name: "Bellary Road Villa Corridor", description: "Premium villas along Bellary Road offer expansive spaces ideal for grand entrance foyers, double-height living rooms, and landscaped outdoor areas.", type: "residential" as const },
      { name: "Hebbal Flyover & Airport Road", description: "The strategic location near the airport makes Hebbal popular with frequent travelers who appreciate organized, low-maintenance luxury interiors.", type: "landmark" as const }
    ],
    designTips: [
      { title: "Design Grand Villa Entrances", description: "Hebbal villas have spacious foyers. Create dramatic first impressions with statement lighting, feature walls in stone or wood, and elegant console tables." },
      { title: "Maximize Lake Views with Open Layouts", description: "For lake-facing apartments, use open-plan living-dining areas, glass railings on balconies, and strategically placed mirrors to extend visual depth." },
      { title: "Create Outdoor Living Spaces", description: "Hebbal's pleasant climate makes outdoor areas valuable. Design covered patios, landscaped terraces, and poolside lounges for villas." },
      { title: "Plan Airport-Ready Wardrobes", description: "For frequent travelers, design walk-in closets with dedicated luggage storage, garment bags section, and organized accessory drawers for easy packing." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Hebbal"
      slug="hebbal"
      projectCount="24+ Projects"
      heroImage={gallery8}
      galleryImages={[gallery2, gallery3, gallery4, gallery5, gallery6, gallery9, gallery10, gallery8]}
      description="Expert interior designers in Hebbal, Bangalore. North Bangalore specialists with premium villa interiors."
      seo={seo}
    />
  );
};

export default Hebbal;
