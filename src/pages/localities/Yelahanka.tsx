import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";

const Yelahanka = () => {
  const seo = {
    metaTitle: "Interior Designers in Yelahanka | Spacious Home Interiors Bangalore",
    metaDescription: "Professional interior designers in Yelahanka, Bangalore. 22+ projects in independent houses & villas. Spacious home designs with modern amenities. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers yelahanka",
      "best interior designers in yelahanka bangalore",
      "home interiors yelahanka",
      "modular kitchen yelahanka",
      "independent house interior yelahanka",
      "villa interior yelahanka",
      "home renovation yelahanka bangalore",
      "interior decorators yelahanka",
      "north bangalore interiors yelahanka",
      "spacious home design yelahanka"
    ],
    ogTitle: "Interior Designers in Yelahanka | Intorza - Spacious Home Specialists",
    ogDescription: "Yelahanka interior experts. 22+ projects, independent house specialists. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Yelahanka?",
        answer: "Interior design in Yelahanka costs ₹1,400 to ₹2,800 per sq ft. Independent house interiors start from ₹10 lakhs, apartments from ₹7.5 lakhs. Intorza has completed 22+ projects in Yelahanka with 10-year warranty."
      },
      {
        question: "Do you design independent houses in Yelahanka?",
        answer: "Yes! Yelahanka has many independent houses and we specialize in their unique requirements - larger kitchens, multiple bedrooms, custom storage, terrace gardens, and outdoor areas. We handle complete home interiors for ground to duplex houses."
      },
      {
        question: "Which areas in Yelahanka do you cover?",
        answer: "We serve Yelahanka Old Town, New Town, Allalsandra, Attur Layout, Kogilu, and surrounding areas. Our portfolio includes independent houses, BDA plots, and apartments in the Yelahanka belt."
      },
      {
        question: "Can you design interiors for Air Force families in Yelahanka?",
        answer: "Absolutely! Yelahanka has a significant Air Force community. We understand their requirements for formal layouts, structured designs, and quick turnaround during postings. We've designed homes for many Air Force families."
      }
    ],
    nearbyAreas: ["Yelahanka New Town", "Yelahanka Old Town", "Allalsandra", "Attur Layout", "Kogilu", "Hebbal"],
    specialties: ["Independent House Design", "Spacious Layouts", "Large Kitchen", "Multiple Bedroom", "Terrace Design"],
    lifestyleDescription: "Yelahanka is North Bangalore's spacious residential haven, known for the Air Force Station, wide tree-lined roads, and abundant independent houses on BDA plots. With excellent airport connectivity and a relaxed, semi-urban atmosphere, Yelahanka offers larger living spaces that allow for expansive, luxurious interior designs.",
    landmarks: [
      { name: "Yelahanka Air Force Station", description: "The prominent Air Force presence lends a disciplined, structured aesthetic to the area. Military families prefer organized, durable interiors with formal layouts.", type: "landmark" as const },
      { name: "Yelahanka New Town BDA Layout", description: "Well-planned BDA plots with independent houses offering spacious rooms perfect for large modular kitchens, multiple bedrooms, and terrace gardens.", type: "residential" as const },
      { name: "Puttenahalli Lake & Green Spaces", description: "Natural lakes and parks create a serene backdrop, inspiring interiors with large windows, natural wood finishes, and outdoor-indoor flow.", type: "nature" as const },
      { name: "International Airport Proximity", description: "Easy airport access makes Yelahanka popular with frequent travelers and NRIs who want globally-inspired interior designs with local craftsmanship.", type: "lifestyle" as const }
    ],
    designTips: [
      { title: "Leverage Spacious Floor Plans", description: "Yelahanka houses have generous room sizes. Create grand living rooms with sectional sofas, large dining areas, and walk-in storage rather than cramming furniture." },
      { title: "Design a Large Family Kitchen", description: "With bigger kitchens, go for U-shaped or island layouts with dedicated pantry, double sink, and breakfast counter for the whole family." },
      { title: "Create Stunning Terrace Gardens", description: "Yelahanka's independent houses often have terraces. Design rooftop gardens with pergolas, seating areas, and container gardens for Bangalore's pleasant climate." },
      { title: "Plan for Multiple Bedrooms", description: "Design each bedroom with a unique theme—master suite with walk-in closet, kids' room with study area, guest room with convertible furniture." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Yelahanka"
      slug="yelahanka"
      projectCount="22+ Projects"
      heroImage={gallery9}
      galleryImages={[gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery9]}
      description="Professional interior designers in Yelahanka, Bangalore. Spacious home designs for independent houses & villas."
      seo={seo}
    />
  );
};

export default Yelahanka;
