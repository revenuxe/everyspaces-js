import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import bhk2Image from "@/assets/service-2bhk.jpg";
import villaImage from "@/assets/service-villa.jpg";
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import { imgSrc } from "@/lib/utils";

const bestServices = [
  {
    id: 1,
    title: "2 BHK Interiors",
    description: "Complete home transformation with smart space planning.",
    image: bhk2Image,
    link: "/services/2bhk-interiors",
  },
  {
    id: 2,
    title: "3 BHK Interiors",
    description: "Premium designs for spacious modern living.",
    image: villaImage,
    link: "/services/3bhk-interiors",
  },
  {
    id: 3,
    title: "Modular Kitchen",
    description: "Functional elegance for culinary enthusiasts.",
    image: kitchenImage,
    link: "/services/modular-kitchen",
  },
  {
    id: 4,
    title: "Villa Interiors",
    description: "Luxurious designs for your dream villa.",
    image: villaImage,
    link: "/services/villa-interiors",
  },
  {
    id: 5,
    title: "Full Home Design",
    description: "End-to-end interior solutions under one roof.",
    image: bedroomImage,
    link: "/services/full-home-design",
  },
];

const BestServices = () => {
  const pathname = usePathname() ?? "";
  const isBangalore = pathname.startsWith("/bangalore");
  const serviceBasePath = isBangalore ? "/bangalore/services" : "/services";
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;

    const updateFromScroll = () => {
      rafId = 0;
      const scrollPos = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const itemWidth =
        containerWidth < 768
          ? containerWidth * 0.75
          : containerWidth < 1024
            ? containerWidth * 0.4
            : containerWidth * 0.3;

      const newIndex = Math.round(scrollPos / (itemWidth + 32));
      setActiveIndex((prev) => {
        const next = Math.min(Math.max(newIndex, 0), bestServices.length - 1);
        return prev === next ? prev : next;
      });

    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateFromScroll);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const containerWidth = container.clientWidth;
    const itemWidth = containerWidth < 768 ? containerWidth * 0.75 : 
                      containerWidth < 1024 ? containerWidth * 0.40 : containerWidth * 0.30;
    const gap = 32;
    container.scrollTo({
      left: index * (itemWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container px-4 mb-7 md:mb-9">
        <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-secondary mb-3">Selected projects</p>
        <h2 className="font-display text-3xl md:text-5xl text-primary tracking-[-0.045em]">Spaces with a point of view.</h2>
        <p className="text-muted-foreground mt-3 max-w-md font-body">Made for real lives, then refined down to the smallest detail.</p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-5 md:gap-6 px-4 md:px-8 py-3 cursor-grab select-none"
        style={{ 
          scrollPaddingLeft: '1rem',
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {bestServices.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <a
              key={service.id}
              href={`${serviceBasePath}/${service.link.split("/").pop()}`}
              onClick={(e) => {
                if (isDragging) {
                  e.preventDefault();
                  return;
                }
              }}
              className={`flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] max-w-md snap-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isActive ? "scale-100" : "md:scale-100 scale-[0.92]"
              }`}
            >
              <div className="overflow-hidden rounded-[22px] border border-primary/10 bg-card shadow-soft group">
                <div className="relative h-[190px] overflow-hidden md:h-[240px]">
                  <img
                    src={imgSrc(service.image)}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
                <div className="relative min-h-[150px] p-5 md:p-6"><h3 className="font-serif text-[22px] text-primary md:text-2xl">{service.title}</h3><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />Bangalore</p><p className="mt-3 text-sm leading-6 text-primary/75 line-clamp-2">{service.description}</p><ArrowUpRight className="absolute right-5 top-6 h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-0.5 mt-5">
        {bestServices.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-6 flex items-center rounded-full px-1.5 transition-all duration-300 ${
              index === activeIndex
                ? "h-[3px] w-8 bg-primary"
                : "h-px w-4 bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BestServices;
