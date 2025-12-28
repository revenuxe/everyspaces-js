import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";

const SarjapurRoad = () => {
  return (
    <LocalityPageTemplate
      localityName="Sarjapur Road"
      slug="sarjapur-road"
      projectCount="42+ Projects"
      heroImage={gallery5}
      galleryImages={[gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery5]}
      description="Leading interior designers on Sarjapur Road, Bangalore. New apartment specialists with contemporary designs."
    />
  );
};

export default SarjapurRoad;
