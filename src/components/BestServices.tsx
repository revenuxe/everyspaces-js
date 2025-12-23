import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import kitchenImage from "@/assets/service-kitchen.jpg?optimized";
import bedroomImage from "@/assets/service-bedroom.jpg?optimized";
import livingImage from "@/assets/service-living.jpg?optimized";

const bestServices = [
  {
    id: 1,
    title: "2 BHK Interiors",
    description: "Complete home transformation with smart space planning.",
    image: livingImage,
  },
  {
    id: 2,
    title: "3 BHK Interiors",
    description: "Premium designs for spacious modern living.",
    image: bedroomImage,
  },
  {
    id: 3,
    title: "Modular Kitchen",
    description: "Functional elegance for culinary enthusiasts.",
    image: kitchenImage,
  },
  {
    id: 4,
    title: "Villa Interiors",
    description: "Luxurious designs for your dream villa.",
    image: livingImage,
  },
  {
    id: 5,
    title: "Full Home Design",
    description: "End-to-end interior solutions under one roof.",
    image: bedroomImage,
  },
];

const BestServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>(
    new Array(bestServices.length).fill(0)
  );
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

      const offsets = bestServices.map((_, index) => {
        const gap = 32;
        const totalItemWidth = itemWidth + gap;
        const itemCenter = index * totalItemWidth + itemWidth / 2;
        const containerCenter = scrollPos + containerWidth / 2;
        const distance = (itemCenter - containerCenter) / itemWidth;
        return distance * -20;
      });

      setParallaxOffsets(offsets);
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
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4 mb-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary text-center tracking-[-0.025em]">
          Best Services
        </h2>
        <p className="text-center text-muted-foreground mt-2 max-w-md mx-auto font-body">
          Tailored solutions for every home
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-5 md:gap-8 px-4 md:px-8 py-4 cursor-grab select-none"
        style={{ 
          scrollPaddingLeft: '1rem',
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {bestServices.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={service.id}
              onClick={() => !isDragging && scrollToIndex(index)}
              className={`flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] max-w-md snap-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isActive ? "scale-100" : "md:scale-100 scale-[0.92]"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-elevated h-[320px] md:h-[400px] group">
                {/* Parallax Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                    style={{
                      transform: `translateX(${parallaxOffsets[index]}px) scale(1.15)`,
                    }}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm font-body">
                    {service.description}
                  </p>

                  <button className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 hover:bg-secondary rounded-2xl text-secondary-foreground text-sm font-medium transition-colors">
                    Explore
                  </button>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-secondary-foreground" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {bestServices.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-6 bg-secondary"
                : "w-2 bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BestServices;
