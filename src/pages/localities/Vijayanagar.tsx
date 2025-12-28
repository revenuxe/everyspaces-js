import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";

const Vijayanagar = () => {
  return (
    <LocalityPageTemplate
      localityName="Vijayanagar"
      slug="vijayanagar"
      projectCount="20+ Projects"
      heroImage={gallery16}
      galleryImages={[gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery16]}
      description="Trusted interior designers in Vijayanagar, Bangalore. Complete home transformation with modern designs."
    />
  );
};

export default Vijayanagar;
