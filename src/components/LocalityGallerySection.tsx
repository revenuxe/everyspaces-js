interface LocalityGallerySectionProps {
  localityName: string;
  images: string[];
}

const LocalityGallerySection = ({ localityName, images }: LocalityGallerySectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-2">
            Projects in {localityName}
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Explore our completed interior design projects in {localityName}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Interior design project ${index + 1} in ${localityName}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalityGallerySection;
