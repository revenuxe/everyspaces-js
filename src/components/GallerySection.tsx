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
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary tracking-[-0.025em]">
            Design Gallery
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto font-body">
            Explore our stunning collection of completed interior projects
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {/* Large item - spans 2 columns and 2 rows */}
          <div 
            className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[0])}
          >
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs text-secondary font-medium">{galleryImages[0].category}</span>
              <h3 className="text-lg md:text-xl font-display text-primary-foreground">{galleryImages[0].title}</h3>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-5 h-5 text-secondary-foreground" />
            </div>
          </div>

          {/* Regular items */}
          <div 
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[1])}
          >
            <img 
              src={galleryImages[1].src} 
              alt={galleryImages[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-display text-primary-foreground truncate">{galleryImages[1].title}</h3>
            </div>
          </div>

          <div 
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[2])}
          >
            <img 
              src={galleryImages[2].src} 
              alt={galleryImages[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-display text-primary-foreground truncate">{galleryImages[2].title}</h3>
            </div>
          </div>

          {/* Tall item - spans 2 rows */}
          <div 
            className="row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[3])}
          >
            <img 
              src={galleryImages[3].src} 
              alt={galleryImages[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs text-secondary font-medium">{galleryImages[3].category}</span>
              <h3 className="text-sm md:text-base font-display text-primary-foreground">{galleryImages[3].title}</h3>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-4 h-4 text-secondary-foreground" />
            </div>
          </div>

          {/* Wide item - spans 2 columns */}
          <div 
            className="col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[4])}
          >
            <img 
              src={galleryImages[4].src} 
              alt={galleryImages[4].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs text-secondary font-medium">{galleryImages[4].category}</span>
              <h3 className="text-base font-display text-primary-foreground">{galleryImages[4].title}</h3>
            </div>
          </div>

          {/* Regular items continued */}
          <div 
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[5])}
          >
            <img 
              src={galleryImages[5].src} 
              alt={galleryImages[5].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-display text-primary-foreground truncate">{galleryImages[5].title}</h3>
            </div>
          </div>

          <div 
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[6])}
          >
            <img 
              src={galleryImages[6].src} 
              alt={galleryImages[6].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-display text-primary-foreground truncate">{galleryImages[6].title}</h3>
            </div>
          </div>

          <div 
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[7])}
          >
            <img 
              src={galleryImages[7].src} 
              alt={galleryImages[7].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-display text-primary-foreground truncate">{galleryImages[7].title}</h3>
            </div>
          </div>

          {/* Wide item */}
          <div 
            className="col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[8])}
          >
            <img 
              src={galleryImages[8].src} 
              alt={galleryImages[8].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs text-secondary font-medium">{galleryImages[8].category}</span>
              <h3 className="text-base font-display text-primary-foreground">{galleryImages[8].title}</h3>
            </div>
          </div>

          <div 
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(galleryImages[9])}
          >
            <img 
              src={galleryImages[9].src} 
              alt={galleryImages[9].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-display text-primary-foreground truncate">{galleryImages[9].title}</h3>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25">
            View All Projects
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 w-12 h-12 bg-secondary/20 hover:bg-secondary/40 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
          <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <span className="text-xs text-secondary font-medium">{selectedImage.category}</span>
            <h3 className="text-xl font-display text-primary-foreground">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
