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

// Organization schema for the company (enhanced for AEO)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://intorza.com/#organization",
  "name": "Intorza",
  "legalName": "Intorza Interior Design",
  "url": "https://intorza.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://intorza.com/favicon.ico",
    "width": 64,
    "height": 64
  },
  "description": "Intorza is the best interior design company in Bangalore offering modular kitchens, wardrobes, and full home interiors with 10-year warranty. We have completed 500+ projects across Bangalore.",
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
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560045",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9886579923",
      "contactType": "customer service",
      "areaServed": "Bangalore",
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
  "email": "intorza.com@gmail.com",
  "sameAs": [
    "https://www.instagram.com/intorza",
    "https://www.facebook.com/intorza",
    "https://www.youtube.com/@intorza",
    "https://in.pinterest.com/intorza",
    "https://www.linkedin.com/company/intorza"
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
  "@id": "https://intorza.com/#localbusiness",
  "name": "Intorza Interior Design",
  "image": "https://intorza.com/favicon.ico",
  "url": "https://intorza.com",
  "telephone": "+91-9886579923",
  "email": "intorza.com@gmail.com",
  "description": "Best interior designers in Bangalore specializing in modular kitchens, wardrobes, and complete home interiors. 500+ projects completed with 10-year warranty.",
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
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
  "areaServed": [
    {
      "@type": "City",
      "name": "Bangalore"
    }
  ],
  "hasMap": "https://maps.google.com/?q=Intorza+HBR+Layout+Bangalore"
};

// Website schema (enhanced for AEO with Speakable)
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://intorza.com/#website",
  "name": "Intorza - Best Interior Designers in Bangalore",
  "alternateName": "Intorza Interior Design",
  "url": "https://intorza.com",
  "description": "Intorza offers premium interior design services in Bangalore including modular kitchens, wardrobes, and full home interiors with 10-year warranty.",
  "publisher": {
    "@id": "https://intorza.com/#organization"
  },
  "potentialAction": {
    "@type": "ReadAction",
    "target": "https://intorza.com"
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
  "name": "How to Get Interior Design Done in Bangalore with Intorza",
  "description": "Complete guide to getting your home interior designed by Intorza, the best interior designers in Bangalore. From consultation to installation in 45-90 days.",
  "image": "https://intorza.com/how-it-works.jpg",
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
      "text": "Contact Intorza at +91-9886579923 or fill the online form. Our design expert will schedule a free site visit at your convenience.",
      "url": "https://intorza.com/contact",
      "image": "https://intorza.com/step-consultation.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Design Proposal",
      "text": "Receive detailed 3D designs, material options, and transparent cost estimate within 5 working days. Review and request modifications.",
      "url": "https://intorza.com/services",
      "image": "https://intorza.com/step-design.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Approval & Production",
      "text": "Approve final designs and make initial payment. Manufacturing begins at our in-house facility with quality materials.",
      "image": "https://intorza.com/step-production.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Installation",
      "text": "Professional installation team executes the project with dedicated project manager. Modular kitchen takes 15-20 days, full home 45-90 days.",
      "image": "https://intorza.com/step-installation.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Handover with Warranty",
      "text": "Final walkthrough, documentation handover, and 10-year warranty activation. After-sales support for any issues.",
      "image": "https://intorza.com/step-handover.jpg"
    }
  ]
};

// Service schema generator (enhanced for AEO)
export const createServiceSchema = (
  name: string,
  description: string,
  url: string,
  image?: string,
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
  "image": image,
  "provider": {
    "@id": "https://intorza.com/#organization"
  },
  "areaServed": additionalInfo?.areaServed?.map(area => ({
    "@type": "Place",
    "name": area
  })) || {
    "@type": "City",
    "name": "Bangalore"
  },
  "serviceType": "Interior Design",
  "termsOfService": "https://intorza.com/terms",
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
  image?: string;
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
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author || "Intorza Design Team",
    "url": "https://intorza.com/about"
  },
  "publisher": {
    "@id": "https://intorza.com/#organization"
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

// FAQ schema generator (enhanced for AEO) - uses unique ID per page to avoid duplicates
export const createFAQSchema = (faqs: { question: string; answer: string }[], pageId?: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `https://intorza.com/${pageId || ''}#faqpage`,
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Image Gallery schema (enhanced for AEO)
export const createImageGallerySchema = (images: { url: string; name: string; description?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": "https://intorza.com/portfolio#gallery",
  "name": "Intorza Interior Design Portfolio - Completed Projects in Bangalore",
  "description": "View 500+ completed interior design projects by Intorza in Bangalore including modular kitchens, bedrooms, living rooms, and full home interiors.",
  "image": images.map((img) => ({
    "@type": "ImageObject",
    "url": img.url,
    "name": img.name,
    "description": img.description || `${img.name} by Intorza Interior Design Bangalore`
  })),
  "creator": {
    "@id": "https://intorza.com/#organization"
  }
});

// Product schema for specific offerings (AEO for e-commerce style queries)
export const createProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  url: string;
  priceRange: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "url": product.url,
  "category": product.category,
  "brand": {
    "@id": "https://intorza.com/#organization"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": product.priceRange.split("-")[0],
    "highPrice": product.priceRange.split("-")[1] || product.priceRange.split("-")[0],
    "offerCount": "1",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://intorza.com/#organization"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
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
      "@id": "https://intorza.com/#organization"
    },
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer,
      "dateCreated": new Date().toISOString(),
      "upvoteCount": 25,
      "url": url,
      "author": {
        "@type": "Organization",
        "name": "Intorza",
        "@id": "https://intorza.com/#organization"
      }
    }
  }
});

// Professional Service schema (AEO for service queries)
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://intorza.com/#professionalservice",
  "name": "Intorza Interior Design Services",
  "description": "Professional interior design services in Bangalore including modular kitchen design, wardrobe design, living room design, bedroom interiors, and complete home renovations.",
  "url": "https://intorza.com/services",
  "telephone": "+91-9886579923",
  "priceRange": "₹₹₹",
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
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
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
  "@id": "https://intorza.com/#webpage",
  "url": "https://intorza.com",
  "name": "Best Interior Designers in Bangalore | Modular Kitchen & Home Interiors - Intorza",
  "description": "Intorza is Bangalore's top interior design company offering modular kitchens, wardrobes, and complete home interiors. 500+ projects, 10-year warranty, free consultation.",
  "isPartOf": {
    "@id": "https://intorza.com/#website"
  },
  "about": {
    "@id": "https://intorza.com/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://intorza.com/hero-interior.jpg"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://intorza.com"
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
    "@id": "https://intorza.com/#localbusiness"
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
  "@id": "https://intorza.com/contact#contactpage",
  "name": "Contact Intorza - Best Interior Designers in Bangalore",
  "description": "Contact Intorza for free interior design consultation in Bangalore. Call +91-9886579923 or fill our form for modular kitchen, wardrobe, and home interior quotes.",
  "url": "https://intorza.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://intorza.com/#organization"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".contact-info", ".contact-form-heading"]
  }
};

// Define common AEO-optimized FAQs for home page - matches FAQSection content
export const commonFAQs = [
  {
    question: "How much does interior design cost in Bangalore?",
    answer: "Interior design costs in Bangalore typically range from ₹1,500 to ₹3,500 per square foot depending on the scope, materials, and finishes. At Intorza, we offer customized packages starting from ₹8 lakhs for a 2BHK apartment interior design. We provide detailed cost breakdowns and transparent pricing with no hidden charges. Contact us for a free consultation and accurate quote."
  },
  {
    question: "How long does it take to complete home interior design?",
    answer: "A complete home interior design project typically takes 45-90 days depending on the size and complexity. Modular kitchen installation takes 15-20 days, while a full 3BHK apartment interior can take 60-75 days. We use advanced project management and quality materials to ensure timely delivery without compromising on craftsmanship."
  },
  {
    question: "Do you provide modular kitchen designs in Bangalore?",
    answer: "Yes! Intorza specializes in premium modular kitchen designs in Bangalore. We offer L-shaped, U-shaped, parallel, and island kitchen layouts with soft-close mechanisms, durable finishes, and smart storage solutions. Our modular kitchens come with a 10-year warranty on hardware and are customized to fit your space and budget."
  },
  {
    question: "What areas in Bangalore do you serve for interior design?",
    answer: "We provide interior design services across all major areas in Bangalore including Koramangala, Indiranagar, HSR Layout, Whitefield, Electronic City, Marathahalli, Jayanagar, JP Nagar, HBR Layout, Hebbal, Yelahanka, and Sarjapur Road. Our team conducts free site visits for consultation anywhere in Bangalore."
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
    question: "What makes Intorza different from other interior designers in Bangalore?",
    answer: "Intorza stands out with 10+ years of experience, 500+ completed projects, in-house manufacturing facility, transparent pricing, dedicated project managers, and a strong focus on quality materials. We use premium brands like Hettich, Hafele, and Century for all our projects with proper documentation and warranty."
  },
  {
    question: "How do I start my interior design project with Intorza?",
    answer: "Starting is easy! Simply call us at +91 9886579923 or fill out our contact form for a free consultation. Our design expert will visit your site, understand your requirements, and provide a detailed proposal with 3D designs and cost estimate within 5 working days. No commitment required for the initial consultation."
  }
];

export default StructuredData;
