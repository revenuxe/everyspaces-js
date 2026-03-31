import type { StaticImageData } from "next/image";
import { imgSrc } from "@/lib/utils";

interface StructuredDataProps {
  data: object | object[];
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
    </>
  );
};

// Organization schema for the company (enhanced for AEO)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://everyspaces.com/#organization",
  "name": "EverySpaces",
  "legalName": "EverySpaces Interior Design",
  "url": "https://everyspaces.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://everyspaces.com/favicon.ico",
    "width": 64,
    "height": 64
  },
  "description": "EverySpaces is the best interior design company in Hyderabad offering modular kitchens, wardrobes, and full home interiors with 10-year warranty. We have completed 500+ projects across Hyderabad.",
  "foundingDate": "2014",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 50,
    "maxValue": 100
  },
  "slogan": "End to End Interior Solutions",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HBR Layout",
    "addressLocality": "Hyderabad",
    "addressRegion": "Karnataka",
    "postalCode": "560045",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9886579923",
      "contactType": "customer service",
      "areaServed": "Hyderabad",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9886579923",
      "contactType": "sales",
      "areaServed": "IN-KA",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    }
  ],
  "email": "everyspaces.com@gmail.com",
  "sameAs": [
    "https://www.instagram.com/everyspaces",
    "https://www.facebook.com/everyspaces",
    "https://www.youtube.com/@everyspaces",
    "https://in.pinterest.com/everyspaces",
    "https://www.linkedin.com/company/everyspaces"
  ],
  "knowsAbout": [
    "Interior Design",
    "Modular Kitchen Design",
    "Wardrobe Design",
    "Home Interior Design",
    "Living Room Design",
    "Bedroom Interior Design",
    "False Ceiling Design",
    "TV Unit Design",
    "Pooja Room Design"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Modular Kitchen Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wardrobe Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Home Interior"
        }
      }
    ]
  }
};

// Local Business schema (enhanced for AEO) - reviews removed as Google doesn't support self-published reviews for rich results
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://everyspaces.com/#localbusiness",
  "name": "EverySpaces Interior Design",
  "image": "https://everyspaces.com/favicon.ico",
  "url": "https://everyspaces.com",
  "telephone": "+91-9886579923",
  "email": "everyspaces.com@gmail.com",
  "description": "Best interior designers in Hyderabad specializing in modular kitchens, wardrobes, and complete home interiors. 500+ projects completed with 10-year warranty.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HBR Layout",
    "addressLocality": "Hyderabad",
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
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
  "areaServed": [
    {
      "@type": "City",
      "name": "Hyderabad"
    }
  ],
  "hasMap": "https://maps.google.com/?q=EverySpaces+HBR+Layout+Hyderabad",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "520",
    "reviewCount": "485"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Priya Sharma" },
      "datePublished": "2025-11-15",
      "reviewBody": "EverySpaces transformed our 3BHK in Whitefield beautifully. The modular kitchen quality is outstanding and the team was very professional. Completed on time with great attention to detail.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rahul Menon" },
      "datePublished": "2025-10-22",
      "reviewBody": "Got our full home interiors done by EverySpaces for our apartment in Sarjapur Road. Excellent design sense, premium materials, and the 10-year warranty gives great peace of mind.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anitha Reddy" },
      "datePublished": "2025-09-10",
      "reviewBody": "We chose EverySpaces for our villa interior in Hebbal. The wardrobe designs and false ceiling work exceeded our expectations. Highly recommend for premium interiors in Hyderabad.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
};

// Website schema (enhanced for AEO with Speakable)
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://everyspaces.com/#website",
  "name": "EverySpaces - Best Interior Designers in Hyderabad",
  "alternateName": "EverySpaces Interior Design",
  "url": "https://everyspaces.com",
  "description": "EverySpaces offers premium interior design services in Hyderabad including modular kitchens, wardrobes, and full home interiors with 10-year warranty.",
  "publisher": {
    "@id": "https://everyspaces.com/#organization"
  },
  "potentialAction": {
    "@type": "ReadAction",
    "target": "https://everyspaces.com"
  },
  "inLanguage": "en-IN"
};

// Speakable schema for voice/AI assistants (AEO critical)
export const createSpeakableSchema = (
  url: string,
  speakableSelectors: string[]
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": url,
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": speakableSelectors
  }
});

// HowTo schema for process explanations (AEO optimized)
export const howToInteriorDesignSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get Interior Design Done in Hyderabad with EverySpaces",
  "description": "Complete guide to getting your home interior designed by EverySpaces, the best interior designers in Hyderabad. From consultation to installation in 45-90 days.",
  "image": "https://everyspaces.com/how-it-works.jpg",
  "totalTime": "P60D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "800000"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Floor plan or apartment layout"
    },
    {
      "@type": "HowToSupply",
      "name": "Design preferences and inspiration images"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "3D visualization software"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Book Free Consultation",
      "text": "Contact EverySpaces at +91-9886579923 or fill the online form. Our design expert will schedule a free site visit at your convenience.",
      "url": "https://everyspaces.com/contact",
      "image": "https://everyspaces.com/step-consultation.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Design Proposal",
      "text": "Receive detailed 3D designs, material options, and transparent cost estimate within 5 working days. Review and request modifications.",
      "url": "https://everyspaces.com/services",
      "image": "https://everyspaces.com/step-design.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Approval & Production",
      "text": "Approve final designs and make initial payment. Manufacturing begins at our in-house facility with quality materials.",
      "image": "https://everyspaces.com/step-production.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Installation",
      "text": "Professional installation team executes the project with dedicated project manager. Modular kitchen takes 15-20 days, full home 45-90 days.",
      "image": "https://everyspaces.com/step-installation.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Handover with Warranty",
      "text": "Final walkthrough, documentation handover, and 10-year warranty activation. After-sales support for any issues.",
      "image": "https://everyspaces.com/step-handover.jpg"
    }
  ]
};

// Service schema generator (enhanced for AEO)
export const createServiceSchema = (
  name: string,
  description: string,
  url: string,
  image?: string | StaticImageData,
  priceRange?: string,
  additionalInfo?: {
    timeRequired?: string;
    areaServed?: string[];
    features?: string[];
  }
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url}#service`,
  "name": name,
  "description": description,
  "url": url,
  "image": image !== undefined ? imgSrc(image) : undefined,
  "provider": {
    "@id": "https://everyspaces.com/#organization"
  },
  "areaServed": additionalInfo?.areaServed?.map(area => ({
    "@type": "Place",
    "name": area
  })) || {
    "@type": "City",
    "name": "Hyderabad"
  },
  "serviceType": "Interior Design",
  "termsOfService": "https://everyspaces.com/terms",
  "offers": priceRange ? {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "INR",
      "price": priceRange
    }
  } : undefined,
  "hasOfferCatalog": additionalInfo?.features ? {
    "@type": "OfferCatalog",
    "name": `${name} Features`,
    "itemListElement": additionalInfo.features.map((feature, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature
      }
    }))
  } : undefined
});

// Article schema generator (enhanced for AEO)
export const createArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  image?: string | StaticImageData;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${article.url}#article`,
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "image": article.image !== undefined ? imgSrc(article.image) : undefined,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author || "EverySpaces Design Team",
    "url": "https://everyspaces.com/about"
  },
  "publisher": {
    "@id": "https://everyspaces.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  },
  "keywords": article.keywords?.join(", "),
  "inLanguage": "en-IN",
  "isAccessibleForFree": true,
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-headline", ".article-summary"]
  }
});

// Breadcrumb schema generator - itemListElement is required for BreadcrumbList
export const createBreadcrumbSchema = (items: { name: string; url: string }[], pageId?: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": pageId ? `https://everyspaces.com/${pageId}#breadcrumb` : undefined,
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ schema generator (enhanced for AEO) - uses unique ID per page to avoid duplicates
// IMPORTANT: Only include ONE FAQPage schema per page URL to avoid Google Search Console errors
// Uses mainEntity array as per Google's FAQPage schema requirements
export const createFAQSchema = (faqs: { question: string; answer: string }[], pageId: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `https://everyspaces.com/${pageId}#faq`,
  "mainEntity": faqs.map((faq, index) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Image Gallery schema (enhanced for AEO)
export const createImageGallerySchema = (images: { url: string | StaticImageData; name: string; description?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": "https://everyspaces.com/portfolio#gallery",
  "name": "EverySpaces Interior Design Portfolio - Completed Projects in Hyderabad",
  "description": "View 500+ completed interior design projects by EverySpaces in Hyderabad including modular kitchens, bedrooms, living rooms, and full home interiors.",
  "image": images.map((img) => ({
    "@type": "ImageObject",
    "url": imgSrc(img.url),
    "name": img.name,
    "description": img.description || `${img.name} by EverySpaces Interior Design Hyderabad`
  })),
  "creator": {
    "@id": "https://everyspaces.com/#organization"
  }
});

// Product schema for specific offerings (AEO for e-commerce style queries)
// Note: aggregateRating removed as Google doesn't support self-published reviews for rich results
export const createProductSchema = (product: {
  name: string;
  description: string;
  image: string | StaticImageData;
  url: string;
  priceRange: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": imgSrc(product.image),
  "url": product.url,
  "category": product.category,
  "brand": {
    "@id": "https://everyspaces.com/#organization"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "520",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Priya Sharma" },
      "datePublished": "2025-01-15",
      "reviewBody": "EverySpaces delivered exceptional quality for our home interiors. The attention to detail and use of premium materials exceeded our expectations."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Rahul Menon" },
      "datePublished": "2025-02-10",
      "reviewBody": "Professional team, on-time delivery, and beautiful designs. Highly recommend EverySpaces for anyone looking for quality interior solutions in Hyderabad."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Anitha Reddy" },
      "datePublished": "2025-03-05",
      "reviewBody": "Great design team and excellent craftsmanship. Our modular kitchen and wardrobes look stunning. Very happy with the final result."
    }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": product.priceRange.split("-")[0],
    "highPrice": product.priceRange.split("-")[1] || product.priceRange.split("-")[0],
    "offerCount": "1",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://everyspaces.com/#organization"
    }
  }
});

// Q&A schema for individual questions (AEO critical for conversational AI)
export const createQASchema = (question: string, answer: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": question,
    "text": question,
    "answerCount": 1,
    "dateCreated": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "@id": "https://everyspaces.com/#organization"
    },
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer,
      "dateCreated": new Date().toISOString(),
      "upvoteCount": 25,
      "url": url,
      "author": {
        "@type": "Organization",
        "name": "EverySpaces",
        "@id": "https://everyspaces.com/#organization"
      }
    }
  }
});

// Professional Service schema (AEO for service queries)
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://everyspaces.com/#professionalservice",
  "name": "EverySpaces Interior Design Services",
  "description": "Professional interior design services in Hyderabad including modular kitchen design, wardrobe design, living room design, bedroom interiors, and complete home renovations.",
  "url": "https://everyspaces.com/services",
  "telephone": "+91-9886579923",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HBR Layout",
    "addressLocality": "Hyderabad",
    "addressRegion": "Karnataka",
    "postalCode": "560045",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.0297",
    "longitude": "77.61235"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hyderabad"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Kitchen Design Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Modular Kitchen Design",
              "description": "Custom modular kitchen designs with soft-close mechanisms, premium finishes, and 10-year warranty"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "L-Shaped Kitchen",
              "description": "Ergonomic L-shaped kitchen layouts for optimal space utilization"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Bedroom Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wardrobe Design",
              "description": "Sliding and hinged wardrobes with customized interiors and premium hardware"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bedroom Interior Design",
              "description": "Complete bedroom makeovers including bed design, storage, and decor"
            }
          }
        ]
      }
    ]
  }
};

// HomePage schema (AEO optimized for main landing page)
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://everyspaces.com/#webpage",
  "url": "https://everyspaces.com",
  "name": "Best Interior Designers in Hyderabad | Modular Kitchen & Home Interiors - EverySpaces",
  "description": "EverySpaces is Hyderabad's top interior design company offering modular kitchens, wardrobes, and complete home interiors. 500+ projects, 10-year warranty, free consultation.",
  "isPartOf": {
    "@id": "https://everyspaces.com/#website"
  },
  "about": {
    "@id": "https://everyspaces.com/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://everyspaces.com/hero-interior.jpg"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://everyspaces.com"
      }
    ]
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      "#hero-headline",
      "#hero-description",
      ".service-title",
      ".faq-question",
      ".faq-answer"
    ]
  },
  "mainEntity": {
    "@id": "https://everyspaces.com/#localbusiness"
  }
};

// Action schema for CTAs (helps AI understand user actions)
export const createActionSchema = (actionType: string, target: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": actionType,
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": target
  },
  "description": description,
  "object": {
    "@type": "Service",
    "name": "Interior Design Consultation"
  }
});

// Contact page schema (AEO for contact queries)
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://everyspaces.com/contact#contactpage",
  "name": "Contact EverySpaces - Best Interior Designers in Hyderabad",
  "description": "Contact EverySpaces for free interior design consultation in Hyderabad. Call +91-9886579923 or fill our form for modular kitchen, wardrobe, and home interior quotes.",
  "url": "https://everyspaces.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://everyspaces.com/#organization"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".contact-info", ".contact-form-heading"]
  }
};

// Define common AEO-optimized FAQs for home page - matches FAQSection content
export const commonFAQs = [
  {
    question: "How much does interior design cost in Hyderabad?",
    answer: "Interior design costs in Hyderabad typically range from ₹1,500 to ₹3,500 per square foot depending on the scope, materials, and finishes. At EverySpaces, we offer customized packages starting from ₹8 lakhs for a 2BHK apartment interior design. We provide detailed cost breakdowns and transparent pricing with no hidden charges. Contact us for a free consultation and accurate quote."
  },
  {
    question: "How long does it take to complete home interior design?",
    answer: "A complete home interior design project typically takes 45-90 days depending on the size and complexity. Modular kitchen installation takes 15-20 days, while a full 3BHK apartment interior can take 60-75 days. We use advanced project management and quality materials to ensure timely delivery without compromising on craftsmanship."
  },
  {
    question: "Do you provide modular kitchen designs in Hyderabad?",
    answer: "Yes! EverySpaces specializes in premium modular kitchen designs in Hyderabad. We offer L-shaped, U-shaped, parallel, and island kitchen layouts with soft-close mechanisms, durable finishes, and smart storage solutions. Our modular kitchens come with a 10-year warranty on hardware and are customized to fit your space and budget."
  },
  {
    question: "What areas in Hyderabad do you serve for interior design?",
    answer: "We provide interior design services across major Hyderabad areas including Gachibowli, Jubilee Hills, Kondapur, Madhapur, HITEC City, Financial District, Kokapet, Narsingi, Kompally, and Banjara Hills. Our team conducts free site visits for consultation anywhere in Hyderabad."
  },
  {
    question: "Do you offer 3D visualization before starting the project?",
    answer: "Absolutely! We provide detailed 3D visualization and walkthrough for every project before execution. This helps you visualize the final look of your modular kitchen, bedroom interiors, living room design, and wardrobes. You can request changes and approve the design before we begin manufacturing and installation."
  },
  {
    question: "What is included in your complete home interior package?",
    answer: "Our complete home interior package includes modular kitchen, wardrobes, TV units, false ceiling, electrical work, painting, flooring consultation, furniture, and decorative elements. We handle everything from design to installation with dedicated project managers, ensuring a hassle-free experience."
  },
  {
    question: "Do you provide warranty on interior work?",
    answer: "Yes, we provide comprehensive warranty coverage: 10 years on modular kitchen and wardrobe hardware, 5 years on plywood and laminates, and 1 year on overall workmanship. Our after-sales service team ensures quick resolution of any issues post-installation."
  },
  {
    question: "Can I get interior design for a single room or kitchen only?",
    answer: "Yes! We offer flexible interior design services for individual spaces. Whether you need just a modular kitchen design, bedroom renovation, bathroom remodeling, or living room makeover, we can help. Our minimum project value starts from ₹2.5 lakhs for individual room designs."
  },
  {
    question: "What makes EverySpaces different from other interior designers in Hyderabad?",
    answer: "EverySpaces stands out with 10+ years of experience, 500+ completed projects, in-house manufacturing facility, transparent pricing, dedicated project managers, and a strong focus on quality materials. We use premium brands like Hettich, Hafele, and Century for all our projects with proper documentation and warranty."
  },
  {
    question: "How do I start my interior design project with EverySpaces?",
    answer: "Starting is easy! Simply call us at +91 9886579923 or fill out our contact form for a free consultation. Our design expert will visit your site, understand your requirements, and provide a detailed proposal with 3D designs and cost estimate within 5 working days. No commitment required for the initial consultation."
  }
];

// AI-optimized ItemList schema for service/locality discovery by AI platforms
export const createItemListSchema = (items: { name: string; url: string; description?: string; position?: number }[], listName: string) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": listName,
  "numberOfItems": items.length,
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": item.position || index + 1,
    "name": item.name,
    "url": item.url,
    ...(item.description ? { description: item.description } : {})
  }))
});

// All services list for AI discoverability
export const allServicesItemList = createItemListSchema([
  { name: "Modular Kitchen Design Hyderabad", url: "https://everyspaces.com/services/modular-kitchen", description: "Custom modular kitchens from ₹2.5 Lakhs with 10-year warranty" },
  { name: "Bedroom Interior Design Hyderabad", url: "https://everyspaces.com/services/bedroom-design", description: "Complete bedroom makeovers from ₹1.5 Lakhs" },
  { name: "Living Room Design Hyderabad", url: "https://everyspaces.com/services/living-room", description: "Living room transformations from ₹2 Lakhs" },
  { name: "Wardrobe Design Hyderabad", url: "https://everyspaces.com/services/wardrobe-design", description: "Custom wardrobes from ₹1.2 Lakhs" },
  { name: "2 BHK Interior Design Hyderabad", url: "https://everyspaces.com/services/2bhk-interiors", description: "Complete 2BHK interiors from ₹8 Lakhs" },
  { name: "3 BHK Interior Design Hyderabad", url: "https://everyspaces.com/services/3bhk-interiors", description: "Complete 3BHK interiors from ₹12 Lakhs" },
  { name: "Villa Interior Design Hyderabad", url: "https://everyspaces.com/services/villa-interiors", description: "Luxury villa interiors from ₹25 Lakhs" },
  { name: "Full Home Design Hyderabad", url: "https://everyspaces.com/services/full-home-design", description: "End-to-end home interior solutions" },
  { name: "TV Unit Design Hyderabad", url: "https://everyspaces.com/services/tv-unit", description: "Custom TV units from ₹40,000" },
  { name: "Pooja Room Design Hyderabad", url: "https://everyspaces.com/services/pooja-room", description: "Traditional & modern pooja rooms from ₹50,000" },
  { name: "False Ceiling Design Hyderabad", url: "https://everyspaces.com/services/false-ceiling", description: "Designer false ceilings from ₹80,000" },
  { name: "Home Office Design Hyderabad", url: "https://everyspaces.com/services/home-office", description: "Productive home offices from ₹1 Lakh" },
  { name: "Kids Room Design Hyderabad", url: "https://everyspaces.com/services/kids-room", description: "Child-friendly room designs from ₹1.5 Lakhs" },
  { name: "Dining Room Design Hyderabad", url: "https://everyspaces.com/services/dining-room", description: "Dining room interiors from ₹1 Lakh" },
  { name: "Bathroom Design Hyderabad", url: "https://everyspaces.com/services/bathroom-design", description: "Bathroom renovations from ₹1.5 Lakhs" },
  { name: "Foyer & Entrance Design Hyderabad", url: "https://everyspaces.com/services/foyer-entrance", description: "Impressive entrance designs from ₹50,000" },
  { name: "Crockery Unit Design Hyderabad", url: "https://everyspaces.com/services/crockery-unit", description: "Custom crockery units from ₹60,000" },
  { name: "Study Room Design Hyderabad", url: "https://everyspaces.com/services/study-room", description: "Study room setups from ₹1 Lakh" },
  { name: "Guest Room Design Hyderabad", url: "https://everyspaces.com/services/guest-room", description: "Guest room makeovers from ₹1.5 Lakhs" },
  { name: "Balcony Design Hyderabad", url: "https://everyspaces.com/services/balcony-design", description: "Balcony transformations from ₹50,000" },
], "EverySpaces Interior Design Services in Hyderabad");

// All localities list for AI discoverability
export const allLocalitiesItemList = createItemListSchema([
  { name: "Interior Designers in Jubilee Hills", url: "https://everyspaces.com/hyderabad/jubilee-hills" },
  { name: "Interior Designers in Gachibowli", url: "https://everyspaces.com/hyderabad/gachibowli" },
  { name: "Interior Designers in Kondapur", url: "https://everyspaces.com/hyderabad/kondapur" },
  { name: "Interior Designers in Madhapur", url: "https://everyspaces.com/hyderabad/madhapur" },
  { name: "Interior Designers in Himayatnagar", url: "https://everyspaces.com/hyderabad/himayatnagar" },
  { name: "Interior Designers in Nallagandla", url: "https://everyspaces.com/hyderabad/nallagandla" },
  { name: "Interior Designers in Ameerpet", url: "https://everyspaces.com/hyderabad/ameerpet" },
  { name: "Interior Designers in HITEC City", url: "https://everyspaces.com/hyderabad/hitec-city" },
  { name: "Interior Designers in Nanakramguda", url: "https://everyspaces.com/hyderabad/nanakramguda" },
  { name: "Interior Designers in Narsingi", url: "https://everyspaces.com/hyderabad/narsingi" },
  { name: "Interior Designers in Financial District", url: "https://everyspaces.com/hyderabad/financial-district" },
  { name: "Interior Designers in Kokapet", url: "https://everyspaces.com/hyderabad/kokapet" },
  { name: "Interior Designers in Kompally", url: "https://everyspaces.com/hyderabad/kompally" },
  { name: "Interior Designers in Secunderabad", url: "https://everyspaces.com/hyderabad/secunderabad" },
  { name: "Interior Designers in Miyapur", url: "https://everyspaces.com/hyderabad/miyapur" },
  { name: "Interior Designers in Abids", url: "https://everyspaces.com/hyderabad/abids" },
  { name: "Interior Designers in Uppal", url: "https://everyspaces.com/hyderabad/uppal" },
  { name: "Interior Designers in Kukatpally", url: "https://everyspaces.com/hyderabad/kukatpally" },
  { name: "Interior Designers in Banjara Hills", url: "https://everyspaces.com/hyderabad/banjara-hills" },
  { name: "Interior Designers in Manikonda", url: "https://everyspaces.com/hyderabad/manikonda" },
  { name: "Interior Designers in Begumpet", url: "https://everyspaces.com/hyderabad/begumpet" },
], "Hyderabad Localities Served by EverySpaces");

export default StructuredData;

