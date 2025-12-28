import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";

const BTMLayout = () => {
  return (
    <LocalityPageTemplate
      localityName="BTM Layout"
      slug="btm-layout"
      projectCount="29+ Projects"
      heroImage={gallery7}
      galleryImages={[gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery1, gallery7]}
      description="Trusted interior designers in BTM Layout, Bangalore. Budget-friendly home interiors with quality materials."
    />
  );
};

export default BTMLayout;
