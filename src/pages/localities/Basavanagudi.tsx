import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";

const Basavanagudi = () => {
  return (
    <LocalityPageTemplate
      localityName="Basavanagudi"
      slug="basavanagudi"
      projectCount="18+ Projects"
      heroImage={gallery13}
      galleryImages={[gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery13]}
      description="Classic interior designers in Basavanagudi, Bangalore. Traditional South Bangalore homes with modern amenities."
    />
  );
};

export default Basavanagudi;
