import { imgSrc } from "@/lib/utils";
import indiranagarImage from "@/assets/locality-indiranagar.jpg";
import whitefieldImage from "@/assets/locality-whitefield.jpg";
import hsrImage from "@/assets/locality-hsr.jpg";
import koramangalaImage from "@/assets/locality-koramangala.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";

function toHyderabadLocalityHref(name: string): string {
  const normalized = name.toLowerCase().replace(/\s+/g, " ").trim();
  const slug =
    normalized === "hitech city"
      ? "hitec-city"
      : normalized === "financial district"
        ? "financial-district"
        : normalized.replace(/\s+/g, "-");

  const allowed = new Set([
    "jubilee-hills",
    "gachibowli",
    "kondapur",
    "madhapur",
    "himayatnagar",
    "nallagandla",
    "ameerpet",
    "hitec-city",
    "nanakramguda",
    "narsingi",
    "financial-district",
    "kokapet",
    "kompally",
    "secunderabad",
    "miyapur",
    "abids",
    "uppal",
    "kukatpally",
    "banjara-hills",
    "manikonda",
    "begumpet",
  ]);

  return allowed.has(slug) ? `/hyderabad/${slug}` : `/hyderabad?area=${encodeURIComponent(name)}`;
}

const localities = [{
  name: "Gachibowli",
  keyword: "Interior Designers in Gachibowli",
  image: indiranagarImage,
}, {
  name: "Hitech City",
  keyword: "Interior Designers in Hitech City",
  image: whitefieldImage,
}, {
  name: "Kondapur",
  keyword: "Modular Kitchen in Kondapur",
  image: hsrImage,
}, {
  name: "Madhapur",
  keyword: "Home Interiors in Madhapur",
  image: koramangalaImage,
}, {
  name: "Kukatpally",
  keyword: "2BHK Interiors in Kukatpally",
  image: gallery1,
}, {
  name: "Miyapur",
  keyword: "Budget Interiors in Miyapur",
  image: gallery2,
}, {
  name: "Nallagandla",
  keyword: "Premium Interiors in Nallagandla",
  image: gallery3,
}, {
  name: "Manikonda",
  keyword: "Wardrobe Design in Manikonda",
  image: gallery4,
}, {
  name: "Narsingi",
  keyword: "Villa Interiors in Narsingi",
  image: gallery5,
}, {
  name: "Jubilee Hills",
  keyword: "Luxury Interiors in Jubilee Hills",
  image: gallery6,
}, {
  name: "Banjara Hills",
  keyword: "Luxury Home Interiors in Banjara Hills",
  image: gallery7,
}, {
  name: "Begumpet",
  keyword: "Apartment Interiors in Begumpet",
  image: gallery8,
}, {
  name: "Secunderabad",
  keyword: "Interior Designers in Secunderabad",
  image: gallery9,
}, {
  name: "Ameerpet",
  keyword: "Affordable Interiors in Ameerpet",
  image: gallery10,
}, {
  name: "Uppal",
  keyword: "Complete Home Interiors in Uppal",
  image: gallery11,
}, {
  name: "LB Nagar",
  keyword: "3BHK Interiors in LB Nagar",
  image: gallery12,
}, {
  name: "Financial District",
  keyword: "Interior Designers in Financial District",
  image: gallery13,
}, {
  name: "Tellapur",
  keyword: "New Apartment Interiors in Tellapur",
  image: gallery14,
}, {
  name: "Kokapet",
  keyword: "Luxury Apartment Interiors in Kokapet",
  image: gallery15,
}, {
  name: "Bachupally",
  keyword: "Turnkey Interiors in Bachupally",
  image: gallery16,
}, {
  name: "Chandanagar",
  keyword: "Modular Interiors in Chandanagar",
  image: gallery17,
}];
const LocalitiesSection = () => {
  return <section id="localities" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
            Our Reach
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-2">
            Top Localities
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Serving Hyderabad's finest neighborhoods with premium interiors
          </p>
        </div>

        {/* Single line horizontal scroll for all devices */}
        <div
          className="overflow-x-auto scrollbar-hide -mx-4 px-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-6 md:gap-8 pb-4 w-max">
            {localities.map((locality, index) => (
              <a
                key={index}
                href={toHyderabadLocalityHref(locality.name)}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
              >
                {/* Circular Image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-secondary/20 group-hover:border-secondary transition-all duration-500 shadow-soft group-hover:shadow-glow">
                  <img
                    src={imgSrc(locality.image)}
                    alt={locality.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Text */}
                <h3 className="mt-3 font-display text-primary text-sm group-hover:text-secondary transition-colors duration-300">
                  {locality.name}
                </h3>
                <p className="text-xs text-muted-foreground font-body">{locality.keyword}</p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>;
};
export default LocalitiesSection;
