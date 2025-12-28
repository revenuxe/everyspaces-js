import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";

const Marathahalli = () => {
  const seo = {
    metaTitle: "Interior Designers in Marathahalli | Budget-Friendly Home Interiors Bangalore",
    metaDescription: "Budget-friendly interior designers in Marathahalli, Bangalore. 33+ projects near ORR. Modern modular kitchens, compact wardrobes & smart storage solutions. Starting ₹7 lakhs. 10-year warranty!",
    keywords: [
      "interior designers marathahalli",
      "best interior designers in marathahalli bangalore",
      "home interiors marathahalli",
      "modular kitchen marathahalli",
      "budget interior design marathahalli",
      "apartment interior marathahalli",
      "home renovation marathahalli orr",
      "interior decorators marathahalli bangalore",
      "affordable interiors marathahalli",
      "marathahalli home design"
    ],
    ogTitle: "Interior Designers in Marathahalli | Intorza - Budget-Friendly Quality",
    ogDescription: "Marathahalli interior experts. 33+ projects, budget-friendly from ₹7 lakhs. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Marathahalli?",
        answer: "Interior design in Marathahalli ranges from ₹1,300 to ₹2,500 per sq ft. Intorza offers budget-friendly packages starting ₹7 lakhs for 2BHK. We've completed 33+ projects near Marathahalli ORR with quality materials and 10-year warranty."
      },
      {
        question: "Do you design compact apartments in Marathahalli?",
        answer: "Yes! Marathahalli has many compact apartments for IT professionals. We specialize in space-saving solutions - Murphy beds, sliding wardrobes, multifunctional furniture, and smart storage that maximize every square foot."
      },
      {
        question: "Which areas near Marathahalli do you serve?",
        answer: "We serve Marathahalli, Brookefield, Kundalahalli, AECS Layout, Varthur, and surrounding areas. Our portfolio includes apartments in SNN Raj, Prestige, Nitesh, and various builders near ORR and HAL Airport Road."
      },
      {
        question: "Can you design bachelor-friendly interiors in Marathahalli?",
        answer: "Absolutely! Many Marathahalli clients are working professionals seeking modern, low-maintenance interiors. We design easy-to-clean surfaces, modular systems, home offices, and contemporary aesthetics suited for bachelor and young couple lifestyles."
      }
    ],
    nearbyAreas: ["Brookefield", "Kundalahalli", "AECS Layout", "Varthur", "Bellandur", "HAL Airport Road"],
    specialties: ["Compact Design", "Smart Storage", "Modular Kitchen", "Home Office", "Bachelor Pad Interior"]
  };

  return (
    <LocalityPageTemplate
      localityName="Marathahalli"
      slug="marathahalli"
      projectCount="33+ Projects"
      heroImage={gallery3}
      galleryImages={[gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery3]}
      description="Affordable interior designers in Marathahalli, Bangalore. IT corridor specialists with modern apartment solutions."
      seo={seo}
    />
  );
};

export default Marathahalli;
