import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";

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
    ogTitle: "Interior Designers in Hebbal | Intorza - Villa & Apartment Specialists",
    ogDescription: "Hebbal interior experts. 24+ projects, villa specialists. North Bangalore leaders. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Hebbal?",
        answer: "Interior design in Hebbal costs ₹1,600 to ₹3,500 per sq ft. Villa interiors start from ₹12 lakhs, apartments from ₹8 lakhs. Intorza has completed 24+ projects in Hebbal with premium materials and 10-year warranty."
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
    specialties: ["Villa Interior", "Large Format Design", "Premium Kitchen", "Grand Living Room", "Outdoor Living"]
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
