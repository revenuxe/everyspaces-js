import Link from "next/link";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import { imgSrc } from "@/lib/utils";

const galleryImages = [
  { id: 1, src: gallery1, title: "Modern Kitchen", category: "Kitchen" },
  { id: 2, src: gallery2, title: "Premium Kitchen", category: "Kitchen" },
  { id: 3, src: gallery3, title: "Minimalist Kitchen", category: "Kitchen" },
  { id: 4, src: gallery4, title: "Spacious Kitchen", category: "Kitchen" },
  { id: 5, src: gallery5, title: "Luxury Kitchen", category: "Kitchen" },
  { id: 6, src: gallery6, title: "TV Unit Design", category: "Living" },
  { id: 7, src: gallery7, title: "Grand Living Space", category: "Living" },
  { id: 8, src: gallery8, title: "Storage Cabinet", category: "Storage" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const GalleryItem = ({ image, className = "" }: { image: typeof galleryImages[0], className?: string }) => (
    <div 
      className={`relative group cursor-pointer overflow-hidden rounded-md md:rounded-lg ${className}`}
      onClick={() => setSelectedImage(image)}
    >
      <img 
        src={imgSrc(image.src)} 
        alt={image.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md md:rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[10px] md:text-xs text-secondary font-medium">{image.category}</span>
        <h3 className="text-xs md:text-sm font-display text-primary-foreground truncate">{image.title}</h3>
      </div>
      <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-5 h-5 md:w-7 md:h-7 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-secondary-foreground" />
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-12 md:py-20 bg-background">
      <div className="container px-2 md:px-4">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 px-2">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary font-semibold text-sm rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary tracking-[-0.025em]">
            Design Gallery
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto font-body text-sm md:text-base">
            Explore our stunning collection of completed interior projects
          </p>
        </div>

        {/* Masonry Grid - 8 images only */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-1.5 auto-rows-[80px] md:auto-rows-[120px] lg:auto-rows-[140px]">
          <GalleryItem image={galleryImages[0]} className="col-span-2 row-span-2" />
          <GalleryItem image={galleryImages[1]} />
          <GalleryItem image={galleryImages[2]} className="row-span-2" />
          <GalleryItem image={galleryImages[3]} />
          <GalleryItem image={galleryImages[4]} />
          <GalleryItem image={galleryImages[5]} />
          <GalleryItem image={galleryImages[6]} />
          <GalleryItem image={galleryImages[7]} />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-10">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-secondary/20 hover:bg-secondary/40 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
          </button>
          <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-xl md:rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img 
              src={imgSrc(selectedImage.src)} 
              alt={selectedImage.title}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <span className="text-xs text-secondary font-medium">{selectedImage.category}</span>
            <h3 className="text-base md:text-xl font-display text-primary-foreground">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
