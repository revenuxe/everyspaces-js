import { ArrowRight, MapPin } from "lucide-react";

// All localities data
const allLocalities = [
  { slug: "indiranagar", name: "Jubilee Hills" },
  { slug: "koramangala", name: "Gachibowli" },
  { slug: "hsr-layout", name: "Kondapur" },
  { slug: "whitefield", name: "Madhapur" },
  { slug: "jayanagar", name: "Himayatnagar" },
  { slug: "jp-nagar", name: "Nallagandla" },
  { slug: "btm-layout", name: "Ameerpet" },
  { slug: "electronic-city", name: "HITEC City" },
  { slug: "marathahalli", name: "Nanakramguda" },
  { slug: "sarjapur-road", name: "Narsingi" },
  { slug: "bellandur", name: "Financial District" },
  { slug: "hebbal", name: "Kokapet" },
  { slug: "yelahanka", name: "Kompally" },
  { slug: "malleshwaram", name: "Secunderabad" },
  { slug: "rajajinagar", name: "Miyapur" },
  { slug: "basavanagudi", name: "Abids" },
  { slug: "banashankari", name: "Uppal" },
  { slug: "vijayanagar", name: "Kukatpally" },
  { slug: "sadashivanagar", name: "Banjara Hills" },
  { slug: "rt-nagar", name: "Manikonda" },
  { slug: "hbr-layout", name: "Begumpet" },
];

interface RelatedLocalitiesProps {
  currentSlug: string;
}

const RelatedLocalities = ({ currentSlug }: RelatedLocalitiesProps) => {
  // Get nearby localities, excluding current
  const relatedLocalities = allLocalities
    .filter((loc) => loc.slug !== currentSlug)
    .slice(0, 6);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
            We Also Serve Nearby Areas
          </h2>
          <p className="text-muted-foreground font-body">
            Explore our interior design services in other Hyderabad localities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {relatedLocalities.map((locality) => (
            <a
              key={locality.slug}
              href={`https://everyspaces.com/hyderabad/${locality.slug}`}
              className="group flex items-center gap-3 p-4 bg-card rounded-2xl border border-border/50 hover:border-secondary/50 hover:shadow-soft transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm md:text-base text-primary group-hover:text-secondary transition-colors">
                  {locality.name}
                </h3>
                <p className="text-xs text-muted-foreground">Interior Design</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://everyspaces.com/hyderabad"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
          >
            View All Hyderabad Localities <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedLocalities;

