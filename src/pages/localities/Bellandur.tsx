import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";

const Bellandur = () => {
  const seo = {
    metaTitle: "Interior Designers in Bellandur | Premium Apartment Interiors Bangalore",
    metaDescription: "Premium interior designers in Bellandur, Bangalore. 31+ projects in luxury apartments. Modern modular kitchens, designer wardrobes & upscale living spaces. 10-year warranty!",
    keywords: [
      "interior designers bellandur",
      "best interior designers in bellandur bangalore",
      "home interiors bellandur",
      "modular kitchen bellandur",
      "luxury apartment interior bellandur",
      "apartment interior bellandur",
      "home renovation bellandur bangalore",
      "interior decorators bellandur",
      "premium home design bellandur",
      "bellandur interior solutions"
    ],
    ogTitle: "Interior Designers in Bellandur | Intorza - Premium Apartment Interiors",
    ogDescription: "Bellandur interior experts. 31+ premium projects. Luxury apartment specialists. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Bellandur?",
        answer: "Interior design in Bellandur costs ₹1,800 to ₹3,500 per sq ft for premium apartments. Intorza offers packages from ₹9 lakhs for 2BHK in Bellandur. We've completed 31+ projects with luxury finishes and 10-year warranty."
      },
      {
        question: "Do you design luxury apartments in Bellandur?",
        answer: "Yes! Bellandur has many premium apartments. We've designed interiors in Prestige Lakeside Habitat, RMZ Galleria, Salarpuria Serenity, and other upscale residences. Our designs feature premium materials, Italian finishes, and luxury hardware."
      },
      {
        question: "Which areas near Bellandur do you cover?",
        answer: "We serve Bellandur, Devarabisanahalli, Outer Ring Road, Marathahalli, Varthur, and surrounding areas. Our portfolio includes premium apartments, penthouses, and gated community villas in the Bellandur belt."
      },
      {
        question: "Can you design lake-view apartments in Bellandur?",
        answer: "Absolutely! We specialize in designing apartments with lake views, maximizing the scenic advantage. We use large windows, open layouts, and outdoor-indoor flow designs to enhance Bellandur Lake views from your living spaces."
      }
    ],
    nearbyAreas: ["Devarabisanahalli", "Varthur", "Marathahalli", "Outer Ring Road", "Sarjapur Road", "Kadubeesanahalli"],
    specialties: ["Luxury Interiors", "Premium Finishes", "Designer Kitchen", "Walk-in Wardrobe", "Lake View Design"]
  };

  return (
    <LocalityPageTemplate
      localityName="Bellandur"
      slug="bellandur"
      projectCount="31+ Projects"
      heroImage={gallery6}
      galleryImages={[gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery6]}
      description="Premium interior designers in Bellandur, Bangalore. Luxury apartment interiors & villa design specialists."
      seo={seo}
    />
  );
};

export default Bellandur;
