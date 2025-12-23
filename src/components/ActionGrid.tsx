import { Calculator, Images, Phone, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import calculatorImage from "@/assets/action-calculator.webp";
import galleryImage from "@/assets/action-gallery.webp";
import materialsImage from "@/assets/action-materials.webp";

const actionItems = [
  {
    icon: Calculator,
    title: "Price Calculator",
    description: "Get instant estimates for your dream home",
    image: calculatorImage,
    link: "/price-calculator",
  },
  {
    icon: Images,
    title: "Design Gallery",
    description: "Explore our stunning projects",
    image: galleryImage,
    link: "/portfolio",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description: "Get free consultation today",
    image: materialsImage,
    link: "/contact",
  },
];

const ActionGrid = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-4">
        <h3 className="font-display text-2xl md:text-3xl text-primary text-center mb-6 tracking-[-0.02em]">
          Quick Actions
        </h3>

        {/* Mobile: Horizontal scroll with proper snap | Desktop: Grid */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0"
          style={{
            scrollPaddingLeft: "1rem",
            scrollPaddingRight: "1rem",
          }}
        >
          {actionItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-auto snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0"
            >
              <div className="relative overflow-hidden rounded-3xl h-[180px] md:h-[200px] hover-lift cursor-pointer group">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-foreground/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5 pr-16 pb-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-secondary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl text-primary-foreground mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/85 font-body line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-secondary-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll Indicator Dots (Mobile only) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {actionItems.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionGrid;