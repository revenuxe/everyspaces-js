import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";

const SarjapurRoad = () => {
  const seo = {
    metaTitle: "Interior Designers in Sarjapur Road | New Apartment Interiors Bangalore",
    metaDescription: "Professional interior designers in Sarjapur Road, Bangalore. 42+ projects in new apartments. Modern modular kitchens, stylish wardrobes & contemporary living spaces. 10-year warranty!",
    keywords: [
      "interior designers sarjapur road",
      "best interior designers in sarjapur road bangalore",
      "home interiors sarjapur road",
      "modular kitchen sarjapur road",
      "new apartment interior sarjapur road",
      "apartment interior sarjapur road",
      "home renovation sarjapur road bangalore",
      "interior decorators sarjapur road",
      "sarjapur road home design",
      "builder apartment interiors sarjapur"
    ],
    ogTitle: "Interior Designers in Sarjapur Road | Intorza - New Apartment Specialists",
    ogDescription: "Sarjapur Road interior experts. 42+ projects in new apartments. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Sarjapur Road?",
        answer: "Interior design in Sarjapur Road costs ₹1,400 to ₹2,800 per sq ft. Intorza offers packages from ₹7.5 lakhs for 2BHK. We've completed 42+ projects in new Sarjapur Road apartments with modern designs and 10-year warranty."
      },
      {
        question: "Do you work with new apartment handovers in Sarjapur Road?",
        answer: "Yes! Sarjapur Road has many new constructions. We coordinate with builders, start design during handover, and complete interiors quickly. We work with Prestige, Sobha, Brigade, Salarpuria, and other builder apartments in the area."
      },
      {
        question: "Which areas on Sarjapur Road do you cover?",
        answer: "We serve entire Sarjapur Road including Dommasandra, Carmelaram, Harlur, Kasavanahalli, Ambalipura, and ORR Junction areas. Our portfolio includes projects in major apartment complexes and gated communities."
      },
      {
        question: "Can you handle quick turnaround for new Sarjapur apartments?",
        answer: "Absolutely! We offer fast-track interior packages for new apartment handovers. With advance planning, we deliver complete interiors in 45-60 days. Our in-house manufacturing ensures timely delivery without quality compromise."
      }
    ],
    nearbyAreas: ["Dommasandra", "Carmelaram", "Harlur", "Kasavanahalli", "Ambalipura", "Bellandur"],
    specialties: ["New Apartment Design", "Builder Coordination", "Modern Kitchen", "Contemporary Wardrobe", "Quick Turnaround"]
  };

  return (
    <LocalityPageTemplate
      localityName="Sarjapur Road"
      slug="sarjapur-road"
      projectCount="42+ Projects"
      heroImage={gallery5}
      galleryImages={[gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery5]}
      description="Leading interior designers on Sarjapur Road, Bangalore. New apartment specialists with contemporary designs."
      seo={seo}
    />
  );
};

export default SarjapurRoad;
