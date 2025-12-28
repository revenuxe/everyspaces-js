import LocalityPageTemplate from "./LocalityPageTemplate";
import heroImage from "@/assets/locality-whitefield.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";

const Whitefield = () => {
  const seo = {
    metaTitle: "Interior Designers in Whitefield | Modern Home Interiors & Villa Design Bangalore",
    metaDescription: "Expert interior designers in Whitefield, Bangalore. 38+ projects in ITPL area. Specialized in tech park apartments, villa interiors & smart home solutions. 10-year warranty. Book free consultation!",
    keywords: [
      "interior designers whitefield",
      "best interior designers in whitefield bangalore",
      "home interiors whitefield",
      "modular kitchen whitefield",
      "villa interior design whitefield",
      "apartment interior whitefield itpl",
      "home renovation whitefield",
      "interior decorators whitefield bangalore",
      "modern interior design whitefield",
      "smart home interiors whitefield"
    ],
    ogTitle: "Interior Designers in Whitefield | Intorza - Villa & Apartment Specialists",
    ogDescription: "Expert Whitefield interior designers. 38+ projects near ITPL. Villa & apartment specialists. Free consultation!",
    faqs: [
      {
        question: "What is the interior design cost in Whitefield, Bangalore?",
        answer: "Interior design in Whitefield ranges from ₹1,800 to ₹3,500 per sq ft. Intorza offers packages starting ₹8 lakhs for 2BHK apartments near ITPL. Villa interiors start from ₹15 lakhs. We've completed 38+ projects in Whitefield with premium materials and 10-year warranty."
      },
      {
        question: "Do you design interiors for Whitefield villas and apartments?",
        answer: "Yes! Intorza specializes in both Whitefield villa interiors and apartment designs. We've worked in Prestige Lakeside Habitat, Brigade Exotica, Sobha Dream Acres, and various ITPL area apartments. Our designs suit both independent villas and modern apartments."
      },
      {
        question: "Can you incorporate smart home features in Whitefield interiors?",
        answer: "Absolutely! We integrate smart home solutions including automated lighting, smart wardrobes, motorized blinds, and connected kitchen appliances. Many Whitefield IT professionals prefer smart home integration, and we partner with leading automation brands."
      },
      {
        question: "How long does interior work take in Whitefield?",
        answer: "Complete home interior in Whitefield takes 45-75 days. Villa interiors may take 60-90 days depending on size. We ensure timely delivery with dedicated project managers and regular updates for all Whitefield projects."
      }
    ],
    nearbyAreas: ["ITPL", "Brookefield", "Kundalahalli", "Mahadevapura", "Hope Farm Junction", "Kadugodi"],
    specialties: ["Villa Interior", "Smart Home Integration", "Modular Kitchen", "Contemporary Design", "Home Office Setup"]
  };

  return (
    <LocalityPageTemplate
      localityName="Whitefield"
      slug="whitefield"
      projectCount="38+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16]}
      description="Expert interior designers in Whitefield, Bangalore. Modern apartment interiors, villa designs & luxury home solutions."
      seo={seo}
    />
  );
};

export default Whitefield;
