import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  data: object | object[];
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  const jsonLd = Array.isArray(data) ? data : [data];
  
  return (
    <Helmet>
      {jsonLd.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

// Organization schema for the company
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Intorza",
  "url": "https://intorza.com",
  "logo": "https://intorza.com/logo.png",
  "description": "Best Interior Designers in Bangalore offering modular kitchens, wardrobes & full home interiors with 10-year warranty.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HBR Layout",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560045",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9886579923",
    "contactType": "customer service",
    "areaServed": "Bangalore",
    "availableLanguage": ["English", "Hindi", "Kannada"]
  },
  "sameAs": [
    "https://www.instagram.com/intorza",
    "https://www.facebook.com/intorza"
  ]
};

// Local Business schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  "name": "Intorza Interior Design",
  "image": "https://intorza.com/logo.png",
  "url": "https://intorza.com",
  "telephone": "+91-9886579923",
  "email": "intorza.com@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HBR Layout",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560045",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.0297",
    "longitude": "77.61235"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "₹₹₹",
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Intorza",
  "url": "https://intorza.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://intorza.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Service schema generator
export const createServiceSchema = (
  name: string,
  description: string,
  url: string,
  image?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "url": url,
  "image": image,
  "provider": {
    "@type": "InteriorDesignBusiness",
    "name": "Intorza Interior Design",
    "url": "https://intorza.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },
  "serviceType": "Interior Design"
});

// Article schema generator
export const createArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author || "Intorza Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Intorza",
    "logo": {
      "@type": "ImageObject",
      "url": "https://intorza.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// Breadcrumb schema generator
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ schema generator
export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Image Gallery schema
export const createImageGallerySchema = (images: { url: string; name: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Intorza Interior Design Portfolio",
  "description": "Completed interior design projects by Intorza in Bangalore",
  "image": images.map((img) => ({
    "@type": "ImageObject",
    "url": img.url,
    "name": img.name
  }))
});

export default StructuredData;
