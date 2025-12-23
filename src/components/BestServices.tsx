import { useRef, useEffect, useState } from "react";
import kitchenImage from "@/assets/service-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living.jpg";

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth * 0.75;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), bestServices.length - 1));

      // Calculate parallax offsets
      const offsets = bestServices.map((_, index) => {
        const itemCenter = index * itemWidth + itemWidth / 2;
        const containerCenter = scrollLeft + container.clientWidth / 2;
        const distance = (itemCenter - containerCenter) / itemWidth;
        return distance * -25;
      });
      setParallaxOffsets(offsets);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const itemWidth = container.clientWidth * 0.75;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4 mb-6">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center">
          Best Services
        </h2>
        <p className="text-center text-muted-foreground mt-2 max-w-md mx-auto">
          Tailored solutions for every home
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 py-4"
        style={{ scrollPaddingLeft: '1rem' }}
      >
        {bestServices.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={service.id}
              onClick={() => scrollToIndex(index)}
              className={`flex-shrink-0 w-[75vw] md:w-[50vw] max-w-lg snap-center cursor-pointer transition-all duration-500 ease-smooth ${
                isActive ? "scale-100 opacity-100" : "scale-[0.88] opacity-60"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-elevated h-[320px] md:h-[400px]">
                {/* Parallax Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{
                      transform: `translateX(${parallaxOffsets[index]}px) scale(1.15)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {service.description}
                  </p>

                  <button className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 hover:bg-secondary rounded-2xl text-secondary-foreground text-sm font-medium transition-colors">
                    Explore
                  </button>
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
