import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";

const ElectronicCity = () => {
  return (
    <LocalityPageTemplate
      localityName="Electronic City"
      slug="electronic-city"
      projectCount="26+ Projects"
      heroImage={gallery4}
      galleryImages={[gallery27, gallery1, gallery2, gallery3, gallery5, gallery6, gallery7, gallery4]}
      description="Expert interior designers in Electronic City, Bangalore. Tech park area specialists with smart home solutions."
    />
  );
};

export default ElectronicCity;
