import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";

const JPNagar = () => {
  return (
    <LocalityPageTemplate
      localityName="JP Nagar"
      slug="jp-nagar"
      projectCount="35+ Projects"
      heroImage={gallery1}
      galleryImages={[gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery1]}
      description="Trusted interior designers in JP Nagar, Bangalore. Affordable home interiors, modular solutions & quality craftsmanship."
    />
  );
};

export default JPNagar;
