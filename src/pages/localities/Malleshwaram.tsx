import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";

const Malleshwaram = () => {
  return (
    <LocalityPageTemplate
      localityName="Malleshwaram"
      slug="malleshwaram"
      projectCount="19+ Projects"
      heroImage={gallery11}
      galleryImages={[gallery25, gallery26, gallery27, gallery1, gallery2, gallery3, gallery4, gallery11]}
      description="Heritage-conscious interior designers in Malleshwaram, Bangalore. Classic designs with modern functionality."
    />
  );
};

export default Malleshwaram;
