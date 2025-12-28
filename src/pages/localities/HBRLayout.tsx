import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";

const HBRLayout = () => {
  return (
    <LocalityPageTemplate
      localityName="HBR Layout"
      slug="hbr-layout"
      projectCount="30+ Projects"
      heroImage={gallery17}
      galleryImages={[gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery17]}
      description="Expert interior designers in HBR Layout, Bangalore. Modern apartment interiors & complete home transformation solutions."
    />
  );
};

export default HBRLayout;
