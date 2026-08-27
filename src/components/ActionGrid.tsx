import Link from "next/link";
import { Calculator, Images, Phone, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { imgSrc } from "@/lib/utils";
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
        <p className="text-[10px] uppercase tracking-[.2em] text-secondary mb-3">Start here</p>
        <h3 className="font-display text-3xl md:text-4xl text-primary mb-7 tracking-[-0.045em]">Plan your home.</h3>

        {/* Mobile: Horizontal scroll with proper snap | Desktop: Grid */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0"
          style={{
            scrollPaddingLeft: "1rem",
            scrollPaddingRight: "1rem",
          }}
        >
          {actionItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-auto snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0"
            >
              <div className="relative overflow-hidden rounded-[22px] border border-primary/10 bg-card shadow-soft hover-lift cursor-pointer group">
                <div className="relative h-[175px] overflow-hidden md:h-[210px]"><img
                  src={imgSrc(item.image)}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                </div><div className="relative min-h-[145px] p-5 pr-12">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 bg-secondary/15">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight className="absolute right-5 top-7 h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
            </Link>
          ))}
        </div>

        {/* Scroll Indicator Dots (Mobile only) */}
        <div className="flex justify-center gap-0.5 mt-5 md:hidden">
          {actionItems.map((_, index) => (
            <div key={index} className={`h-6 flex items-center px-1.5 ${index === 0 ? "w-8" : "w-5"}`}><span className={`block rounded-full ${index === 0 ? "h-[3px] w-8 bg-primary" : "h-px w-5 bg-primary/20"}`} /></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionGrid;
