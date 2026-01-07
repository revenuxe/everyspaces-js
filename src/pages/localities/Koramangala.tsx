import LocalityPageTemplate from "./LocalityPageTemplate";
import heroImage from "@/assets/locality-koramangala.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";

const Koramangala = () => {
  const seo = {
    metaTitle: "Best Interior Designers in Koramangala | Luxury Home Interiors Bangalore",
    metaDescription: "Premium interior designers in Koramangala, Bangalore. 41+ luxury projects across all blocks. Designer modular kitchens, walk-in wardrobes & elegant living spaces. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers koramangala",
      "best interior designers in koramangala bangalore",
      "home interiors koramangala",
      "modular kitchen koramangala",
      "luxury interior design koramangala",
      "apartment interior koramangala",
      "home renovation koramangala",
      "interior decorators koramangala bangalore",
      "designer interiors koramangala",
      "koramangala home makeover"
    ],
    ogTitle: "Best Interior Designers in Koramangala | Intorza - Luxury Home Interiors",
    ogDescription: "Premium Koramangala interior designers. 41+ luxury projects, all blocks covered. Free consultation!",
    faqs: [
      {
        question: "What is the interior design cost in Koramangala, Bangalore?",
        answer: "Interior design in Koramangala typically costs ₹2,000 to ₹4,500 per sq ft for premium finishes. Intorza offers luxury packages from ₹10 lakhs for 2BHK. We've completed 41+ projects across Koramangala 1st to 8th Block with premium materials and 10-year warranty."
      },
      {
        question: "Which Koramangala blocks do you serve?",
        answer: "We serve all Koramangala blocks - 1st Block to 8th Block, including Forum Mall area, Sony World Junction, and 80 Feet Road. Our portfolio includes premium apartments, penthouses, and independent houses across Koramangala."
      },
      {
        question: "Do you design startup offices in Koramangala?",
        answer: "Yes! Besides homes, we design startup offices and co-working spaces in Koramangala. We offer modern, productive workspace designs with ergonomic furniture, collaborative areas, and branding integration tailored for Koramangala's startup culture."
      },
      {
        question: "What interior styles work best for Koramangala homes?",
        answer: "Koramangala residents prefer contemporary, industrial-chic, and minimalist designs. We also create fusion designs blending modern aesthetics with warm Indian elements. Our designs suit the young, urban demographic of Koramangala."
      }
    ],
    nearbyAreas: ["1st-8th Block Koramangala", "Ejipura", "HSR Layout", "BTM Layout", "Madiwala", "Forum Mall Area"],
    specialties: ["Luxury Interior", "Walk-in Wardrobes", "Designer Kitchen", "Living Room Makeover", "Balcony Design"],
    lifestyleDescription: "Koramangala is Bangalore's startup capital and a lifestyle hub, home to India's most innovative companies and a thriving food and nightlife scene. From young founders in compact apartments to established families in spacious villas across 8 blocks, Koramangala demands interiors that are as dynamic and contemporary as its residents.",
    landmarks: [
      {
        name: "Forum Mall & 80 Feet Road",
        description: "The commercial heart of Koramangala with premium high-rises. Apartments here need smart storage solutions and contemporary designs for urban living.",
        type: "lifestyle" as const
      },
      {
        name: "5th & 6th Block Residentials",
        description: "Prime residential blocks with a mix of independent houses and apartments. Popular for families wanting spacious, well-designed interiors.",
        type: "residential" as const
      },
      {
        name: "St. John's Road & 1st Block",
        description: "Tree-lined streets with older, charming properties. We specialize in renovation projects that preserve character while adding modern amenities.",
        type: "landmark" as const
      },
      {
        name: "Koramangala Lake & Parks",
        description: "Green spaces inspire nature-themed interiors. Many clients request indoor gardens, natural materials, and earthy tones reflecting the locality's green pockets.",
        type: "nature" as const
      }
    ],
    designTips: [
      {
        title: "Embrace Open-Plan Living",
        description: "Koramangala's social lifestyle calls for open kitchens and living areas perfect for hosting friends, with a kitchen island doubling as a breakfast bar."
      },
      {
        title: "Invest in Smart Storage",
        description: "Many Koramangala apartments are compact. Maximize space with floor-to-ceiling wardrobes, under-bed storage, and modular furniture that adapts to your needs."
      },
      {
        title: "Design for Dual-Purpose Spaces",
        description: "With work-from-home being common, create rooms that transform—a guest bedroom with a fold-out desk, or a living room corner as a mini office."
      },
      {
        title: "Add Character with Industrial Elements",
        description: "Exposed brick accents, metal fixtures, and concrete finishes resonate with Koramangala's startup vibe while keeping interiors stylish and edgy."
      }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Koramangala"
      slug="koramangala"
      projectCount="41+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery25, gallery26, gallery27, gallery1, gallery2, gallery3, gallery4, gallery5]}
      description="Premium interior designers in Koramangala, Bangalore. Luxury home interiors, designer wardrobes & elegant living spaces."
      seo={seo}
    />
  );
};

export default Koramangala;
