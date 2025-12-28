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
  return (
    <LocalityPageTemplate
      localityName="Whitefield"
      slug="whitefield"
      projectCount="38+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16]}
      description="Expert interior designers in Whitefield, Bangalore. Modern apartment interiors, villa designs & luxury home solutions."
    />
  );
};

export default Whitefield;
