import { MapPin, Award, Clock, Shield, Star, Home } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Homes Designed in Hyderabad" },
  { icon: Star, value: "4.8/5", label: "Average Customer Rating" },
  { icon: Clock, value: "45 Days", label: "Average Project Delivery" },
  { icon: Shield, value: "10 Years", label: "Warranty on Hardware" },
];

const neighborhoods = [
  {
    name: "South Hyderabad",
    areas: ["Jubilee Hills", "Banjara Hills", "Narsingi", "Kokapet", "Financial District", "Gachibowli"],
    description: "Premium apartments and independent houses with a blend of traditional and contemporary styles.",
  },
  {
    name: "East Hyderabad",
    areas: ["Madhapur", "Kondapur", "HITEC City", "Nanakramguda"],
    description: "IT corridor homes demanding modern, space-efficient interior solutions for tech professionals.",
  },
  {
    name: "North Hyderabad",
    areas: ["Kompally", "Secunderabad", "Begumpet", "Manikonda", "Miyapur"],
    description: "Rapidly growing residential hubs with new-age apartments and villa communities.",
  },
  {
    name: "Central & West Hyderabad",
    areas: ["Himayatnagar", "Ameerpet", "Abids", "Kukatpally", "Uppal"],
    description: "Heritage neighborhoods with character homes requiring thoughtful renovation and modern upgrades.",
  },
];

const whyBangalore = [
  {
    icon: MapPin,
    title: "Local Material Sourcing",
    description: "We source from Hyderabad's trusted suppliers — Century and Greenply boards, premium Hettich/Hafele hardware, and local granite/tile partners for cost and quality control.",
  },
  {
    icon: Award,
    title: "Hyderabad Climate Design",
    description: "Our designs account for Hyderabad's moderate climate — optimal ventilation, moisture-resistant materials for monsoons, and natural light maximization year-round.",
  },
  {
    icon: Clock,
    title: "BBMP & Society Approvals",
    description: "We handle all apartment society permissions, GHMC guidelines, and building management coordination so you don't have to worry about compliance.",
  },
  {
    icon: Shield,
    title: "In-House Factory in Hyderabad",
    description: "Our manufacturing unit in Hyderabad ensures faster delivery, quality control, and cost efficiency compared to outsourced production.",
  },
];

const BangaloreContentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-5 md:p-6 text-center border border-border/50 shadow-soft"
            >
              <stat.icon className="w-6 h-6 text-secondary mx-auto mb-3" />
              <p className="font-display text-2xl md:text-3xl text-primary mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-xs md:text-sm font-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why EverySpaces in Hyderabad */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
              Why Hyderabad Homeowners Trust EverySpaces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              We understand Hyderabad's unique housing landscape — from compact IT corridor apartments to spacious Jubilee Hills and Kokapet villas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyBangalore.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Neighborhoods We Serve */}
        <div>
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">
              Our Coverage
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
              Interior Design Across All of Hyderabad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              From Gachibowli to Uppal, we've designed homes in every corner of Hyderabad
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {neighborhoods.map((zone, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft"
              >
                <h3 className="font-display text-lg text-primary mb-2">{zone.name}</h3>
                <p className="text-muted-foreground font-body text-sm mb-3">{zone.description}</p>
                <div className="flex flex-wrap gap-2">
                  {zone.areas.map((area) => (
                    <a
                      key={area}
                      href={`/hyderabad?area=${encodeURIComponent(area)}`}
                      className="text-xs bg-muted px-3 py-1.5 rounded-full text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors font-body"
                    >
                      {area}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BangaloreContentSection;

