import LocalityPageTemplate from "./LocalityPageTemplate";
import heroImage from "@/assets/locality-hsr.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";

const HSRLayout = () => {
  return (
    <LocalityPageTemplate
      localityName="HSR Layout"
      slug="hsr-layout"
      projectCount="52+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24]}
      description="Best interior designers in HSR Layout, Bangalore. Contemporary home interiors, modular kitchens & space-saving solutions."
    />
  );
};

export default HSRLayout;
