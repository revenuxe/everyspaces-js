import { useRef, useEffect, useState } from "react";
import kitchenImage from "@/assets/service-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import livingImage from "@/assets/service-living.jpg";

const services = [
  {
    id: 1,
    title: "Modular Kitchens",
    description: "Expertly crafted for Bengaluru's modern culinary lifestyle.",
    image: kitchenImage,
  },
  {
    id: 2,
    title: "Luxury Bedrooms",
    description: "Where serenity meets smart storage solutions.",
    image: bedroomImage,
  },
  {
    id: 3,
    title: "Smart Living Rooms",
    description: "Tech-integrated spaces designed for entertaining.",
    image: livingImage,
  },
  {
    id: 4,
    title: "Elegant Bathrooms",
    description: "Spa-inspired designs with premium fixtures.",
    image: kitchenImage,
  },
  {
    id: 5,
    title: "Home Office",
    description: "Productivity-focused workspaces for the modern professional.",
    image: bedroomImage,
  },
  {
    id: 6,
    title: "Kids Room",
    description: "Playful yet functional spaces for your little ones.",
    image: livingImage,
  },
  {
    id: 7,
    title: "Dining Spaces",
    description: "Elegant settings for memorable family gatherings.",
    image: kitchenImage,
  },
  {
    id: 8,
    title: "Wardrobe Design",
    description: "Custom storage solutions maximizing every inch.",
    image: bedroomImage,
  },
];

const ServicesCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>(
    new Array(services.length).fill(0)
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth * 0.75; // 75vw card width
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), services.length - 1));

      // Calculate parallax offsets
      const offsets = services.map((_, index) => {
        const itemCenter = index * itemWidth + itemWidth / 2;
        const containerCenter = scrollLeft + container.clientWidth / 2;
        const distance = (itemCenter - containerCenter) / itemWidth;
        return distance * -25;
      });
      setParallaxOffsets(offsets);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
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
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center tracking-tight">
          EXPLORE SERVICES
        </h2>
        <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
          Transform your space with our signature design solutions
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6 px-4 py-8"
        style={{ scrollPaddingLeft: '1rem' }}
      >
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={service.id}
              onClick={() => scrollToIndex(index)}
              className={`flex-shrink-0 w-[75vw] md:w-[50vw] max-w-lg snap-center cursor-pointer transition-all duration-500 ease-smooth ${
                isActive ? "scale-100 opacity-100" : "scale-[0.88] opacity-60"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-elevated h-[380px] md:h-[480px]">
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
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm md:text-base">
                    {service.description}
                  </p>

                  <button className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/90 hover:bg-secondary rounded-2xl text-secondary-foreground text-sm font-medium transition-colors">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-xs mx-auto">
        {services.map((_, index) => (
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

export default ServicesCarousel;
