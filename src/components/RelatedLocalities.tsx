import { ArrowRight, MapPin } from "lucide-react";

// All localities data
const allLocalities = [
  { slug: "indiranagar", name: "Indiranagar" },
  { slug: "koramangala", name: "Koramangala" },
  { slug: "hsr-layout", name: "HSR Layout" },
  { slug: "whitefield", name: "Whitefield" },
  { slug: "jayanagar", name: "Jayanagar" },
  { slug: "jp-nagar", name: "JP Nagar" },
  { slug: "btm-layout", name: "BTM Layout" },
  { slug: "electronic-city", name: "Electronic City" },
  { slug: "marathahalli", name: "Marathahalli" },
  { slug: "sarjapur-road", name: "Sarjapur Road" },
  { slug: "bellandur", name: "Bellandur" },
  { slug: "hebbal", name: "Hebbal" },
  { slug: "yelahanka", name: "Yelahanka" },
  { slug: "malleshwaram", name: "Malleshwaram" },
  { slug: "rajajinagar", name: "Rajajinagar" },
  { slug: "basavanagudi", name: "Basavanagudi" },
  { slug: "banashankari", name: "Banashankari" },
  { slug: "vijayanagar", name: "Vijayanagar" },
  { slug: "sadashivanagar", name: "Sadashivanagar" },
  { slug: "rt-nagar", name: "RT Nagar" },
  { slug: "hbr-layout", name: "HBR Layout" },
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
            Explore our interior design services in other Bangalore localities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {relatedLocalities.map((locality) => (
            <a
              key={locality.slug}
              href={`https://intorza.com/bangalore/${locality.slug}`}
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
            href="https://intorza.com/bangalore"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
          >
            View All Bangalore Localities <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedLocalities;
