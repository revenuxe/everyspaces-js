import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";

const Hebbal = () => {
  return (
    <LocalityPageTemplate
      localityName="Hebbal"
      slug="hebbal"
      projectCount="24+ Projects"
      heroImage={gallery8}
      galleryImages={[gallery2, gallery3, gallery4, gallery5, gallery6, gallery9, gallery10, gallery8]}
      description="Expert interior designers in Hebbal, Bangalore. North Bangalore specialists with premium villa interiors."
    />
  );
};

export default Hebbal;
