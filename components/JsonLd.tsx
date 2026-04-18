export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KARAKAR HOME",
    "url": "https://sandalagaciodakokusu.com.tr",
    "logo": "https://sandalagaciodakokusu.com.tr/logo.png",
    "description": "Sandal ağacı oda kokusu üreticisi ve satıcısı. Premium çubuklu oda kokuları.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenyalı Mah. Edebali Cad. No:13/A",
      "addressLocality": "Pendik",
      "addressRegion": "İstanbul",
      "postalCode": "34903",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-545-181-4040",
      "contactType": "customer service",
      "email": "info@beyazsabunodakokusu.com.tr",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.facebook.com/KARAKARHOME/",
      "https://www.instagram.com/karakarhome",
      "https://x.com/karakarhome",
      "https://www.youtube.com/@KARAKARHOME",
      "https://tr.pinterest.com/karakarhome/"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sandal Ağacı Oda Kokusu 100ml",
    "description": "Doğal sandal ağacı esansıyla hazırlanan 100ml çubuklu oda kokusu. 8-12 hafta kullanım süresi.",
    "brand": {
      "@type": "Brand",
      "name": "KARAKAR HOME"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/",
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KARAKAR HOME"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KARAKAR HOME",
    "image": "https://sandalagaciodakokusu.com.tr/logo.png",
    "@id": "https://sandalagaciodakokusu.com.tr",
    "url": "https://sandalagaciodakokusu.com.tr",
    "telephone": "+90-545-181-4040",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenyalı Mah. Edebali Cad. No:13/A",
      "addressLocality": "Pendik",
      "addressRegion": "İstanbul",
      "postalCode": "34903",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8765432,
      "longitude": 29.2345678
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
