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
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";

const galleryImages = [
  { id: 1, src: gallery1, title: "Modern Kitchen", category: "Kitchen" },
  { id: 2, src: gallery2, title: "Premium Kitchen Design", category: "Kitchen" },
  { id: 3, src: gallery3, title: "Minimalist Kitchen", category: "Kitchen" },
  { id: 4, src: gallery4, title: "Spacious Kitchen", category: "Kitchen" },
  { id: 5, src: gallery5, title: "Luxury Kitchen", category: "Kitchen" },
  { id: 6, src: gallery6, title: "TV Unit Design", category: "Living" },
  { id: 7, src: gallery7, title: "Grand Living Space", category: "Living" },
  { id: 8, src: gallery8, title: "Storage Cabinet", category: "Storage" },
  { id: 9, src: gallery9, title: "Wall Art & Decor", category: "Decor" },
  { id: 10, src: gallery10, title: "Room Partition", category: "Living" },
  { id: 11, src: gallery11, title: "Wood Panel TV Unit", category: "Living" },
  { id: 12, src: gallery12, title: "Dark Fluted Wall", category: "Living" },
  { id: 13, src: gallery13, title: "Marble Accent Wall", category: "Living" },
  { id: 14, src: gallery14, title: "Golden Marble TV", category: "Living" },
  { id: 15, src: gallery15, title: "Grey Striped Wall", category: "Living" },
  { id: 16, src: gallery16, title: "Curved TV Unit", category: "Living" },
  { id: 17, src: gallery17, title: "Cozy Fireplace", category: "Living" },
  { id: 18, src: gallery18, title: "Modern Wardrobe", category: "Bedroom" },
  { id: 19, src: gallery19, title: "Sliding Wardrobe", category: "Bedroom" },
  { id: 20, src: gallery20, title: "Teal Wardrobe", category: "Bedroom" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-background">
      <div className="container px-2 md:px-4">
        <div className="text-center mb-8 md:mb-12 px-2">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary tracking-[-0.025em]">
            Design Gallery
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto font-body text-sm md:text-base">
            Explore our stunning collection of completed interior projects
          </p>
        </div>

        {/* Masonry Grid - No gaps */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0.5 auto-rows-[100px] md:auto-rows-[160px] lg:auto-rows-[200px]">
          {/* Large item - spans 2 columns and 2 rows */}
          <div 
            className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(galleryImages[0])}
          >
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] md:text-xs text-secondary font-medium">{galleryImages[0].category}</span>
              <h3 className="text-xs md:text-base font-display text-primary-foreground">{galleryImages[0].title}</h3>
            </div>
            <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-3 h-3 md:w-4 md:h-4 text-secondary-foreground" />
            </div>
          </div>

          {/* Regular items */}
          {[1, 2].map((idx) => (
            <div 
              key={idx}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(galleryImages[idx])}
            >
              <img 
                src={galleryImages[idx].src} 
                alt={galleryImages[idx].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Tall item - spans 2 rows */}
          <div 
            className="row-span-2 relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(galleryImages[3])}
          >
            <img 
              src={galleryImages[3].src} 
              alt={galleryImages[3].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 w-6 h-6 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-3 h-3 text-secondary-foreground" />
            </div>
          </div>

          {/* Wide item - spans 2 columns */}
          <div 
            className="col-span-2 relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(galleryImages[4])}
          >
            <img 
              src={galleryImages[4].src} 
              alt={galleryImages[4].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* More regular items */}
          {[5, 6, 7, 8].map((idx) => (
            <div 
              key={idx}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(galleryImages[idx])}
            >
              <img 
                src={galleryImages[idx].src} 
                alt={galleryImages[idx].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Large item */}
          <div 
            className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(galleryImages[9])}
          >
            <img 
              src={galleryImages[9].src} 
              alt={galleryImages[9].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] md:text-xs text-secondary font-medium">{galleryImages[9].category}</span>
              <h3 className="text-xs md:text-base font-display text-primary-foreground">{galleryImages[9].title}</h3>
            </div>
          </div>

          {/* Regular items */}
          {[10, 11, 12].map((idx) => (
            <div 
              key={idx}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(galleryImages[idx])}
            >
              <img 
                src={galleryImages[idx].src} 
                alt={galleryImages[idx].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Tall item */}
          <div 
            className="row-span-2 relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(galleryImages[13])}
          >
            <img 
              src={galleryImages[13].src} 
              alt={galleryImages[13].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Wide item */}
          <div 
            className="col-span-2 relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(galleryImages[14])}
          >
            <img 
              src={galleryImages[14].src} 
              alt={galleryImages[14].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* More items */}
          {[15, 16, 17, 18, 19].map((idx) => (
            <div 
              key={idx}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(galleryImages[idx])}
            >
              <img 
                src={galleryImages[idx].src} 
                alt={galleryImages[idx].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-10">
          <button className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25">
            View All Projects
          </button>
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
              src={selectedImage.src} 
              alt={selectedImage.title}
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
