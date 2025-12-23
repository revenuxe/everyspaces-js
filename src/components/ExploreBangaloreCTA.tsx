import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import iLoveBangaloreImage from "@/assets/i-love-bangalore.webp";

const ExploreBangaloreCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4">
        <Link
          to="/bangalore"
          className="group flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 border border-border/50"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 h-48 md:h-64 overflow-hidden">
            <img
              src={iLoveBangaloreImage}
              alt="I Love Bangalore"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">
                Explore Bengaluru
              </h3>
              <p className="text-muted-foreground font-body text-sm md:text-base">
                Discover our stunning interior projects across the city
              </p>
            </div>

            {/* Orange Arrow Button */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/90 transition-all duration-300 shadow-md">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-secondary-foreground group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ExploreBangaloreCTA;
