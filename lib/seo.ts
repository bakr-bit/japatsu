import type { Metadata } from "next";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";
import { getCasinoLogoUrl, getCasinoLogoHighRes } from "./logos";

export function generateReviewMetadata(review: ReviewPageContent, slug: string): Metadata {
  const title = review.hero.title;
  const description = review.hero.description?.slice(0, 160);
  const casinoName = title.split(/[（(]/)[0].trim(); // Extract casino name before parentheses
  const siteName = "CasinoTsu";

  // Generate keywords from casino name and common Japanese casino terms
  const keywords = [
    casinoName,
    `${casinoName} レビュー`,
    `${casinoName} ボーナス`,
    `${casinoName} 入金不要ボーナス`,
    "オンラインカジノ",
    "カジノレビュー",
    "入金不要ボーナス",
    "オンカジ",
    "仮想通貨カジノ",
    "スロット",
    "ライブカジノ"
  ].join(", ");

  // Generate canonical URL
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://casinotsu.com'}/reviews/${slug}`;

  // Get casino logo for Open Graph
  const logoUrl = getCasinoLogoHighRes(slug) || getCasinoLogoUrl(slug);

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Rina Okabe" }],
    creator: "CasinoTsu",
    publisher: "CasinoTsu",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      siteName,
      locale: 'ja_JP',
      url: canonicalUrl,
      images: logoUrl ? [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
          alt: `${casinoName} カジノのロゴ`,
        }
      ] : review.hero.avatarSrc ? [
        {
          url: review.hero.avatarSrc,
          width: 1200,
          height: 630,
          alt: `${casinoName} カジノのロゴ`,
        }
      ] : [
        {
          url: '/og-default.jpg', // fallback image
          width: 1200,
          height: 630,
          alt: `${casinoName} レビュー - CasinoTsu`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@CasinoTsu',
      images: logoUrl ? [logoUrl] : review.hero.avatarSrc ? [review.hero.avatarSrc] : ['/og-default.jpg'],
    },
    verification: {
      // Add your verification codes here if needed
      // google: 'your-google-verification-code',
    },
    other: {
      // Custom meta tags
      'article:author': 'Rina Okabe',
      'article:section': 'オンラインカジノレビュー',
      'article:tag': keywords,
    }
  };
}

// Comprehensive Schema.org JSON-LD generator for casino reviews
export function generateReviewSchema(review: ReviewPageContent, slug: string) {
  const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://casinotsu.com';
  const canonicalUrl = `${siteOrigin}/reviews/${slug}`;
  const casinoName = review.hero.title.split(/[（(]/)[0].trim();
  const author = "Rina Okabe";
  const authorRole = review.editorial?.role || "カジノ専門ライター";

  // Get casino logo for schema
  const logoUrl = getCasinoLogoHighRes(slug) || getCasinoLogoUrl(slug);
  const imageUrl = logoUrl || review.hero.avatarSrc;

  // 1. Organization Schema (CasinoTsu)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteOrigin}#organization`,
    name: "CasinoTsu",
    url: siteOrigin,
    logo: {
      "@type": "ImageObject",
      url: `${siteOrigin}/logo.png`,
    },
    description: "日本のオンラインカジノ専門レビューサイト",
    sameAs: [
      "https://twitter.com/CasinoTsu",
    ]
  };

  // 2. Author Schema
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteOrigin}/authors/${author.toLowerCase().replace(/\s+/g, '-')}#author`,
    name: author,
    jobTitle: authorRole,
    worksFor: {
      "@id": `${siteOrigin}#organization`
    },
    url: review.editorial?.profileHref ? `${siteOrigin}${review.editorial.profileHref}` : `${siteOrigin}/authors/${author.toLowerCase().replace(/\s+/g, '-')}`,
    ...(review.editorial?.avatarSrc && {
      image: {
        "@type": "ImageObject",
        url: review.editorial.avatarSrc
      }
    })
  };

  // 3. Product Schema (Casino being reviewed)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: casinoName,
    description: review.hero.description,
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl
      }
    }),
    brand: {
      "@type": "Brand",
      name: casinoName
    },
    category: "オンラインカジノ",
    ...(review.cta?.href && {
      offers: {
        "@type": "Offer",
        url: review.cta.href,
        availability: "https://schema.org/InStock",
        priceCurrency: "JPY"
      }
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: review.hero.score,
      bestRating: review.hero.scoreMax || 5,
      worstRating: 1,
      ratingCount: 1
    }
  };

  // 4. Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${canonicalUrl}#review`,
    headline: review.hero.title,
    description: review.hero.description,
    author: {
      "@id": `${siteOrigin}/authors/${author.toLowerCase().replace(/\s+/g, '-')}#author`
    },
    publisher: {
      "@id": `${siteOrigin}#organization`
    },
    itemReviewed: {
      "@id": `${canonicalUrl}#product`
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.hero.score,
      bestRating: review.hero.scoreMax || 5,
      worstRating: 1
    },
    datePublished: new Date().toISOString().split('T')[0], // You may want to add actual publish dates to your review data
    dateModified: new Date().toISOString().split('T')[0],
    url: canonicalUrl,
    inLanguage: "ja-JP",
    ...(review.hero.highlights && review.hero.highlights.length > 0 && {
      positiveNotes: review.hero.highlights
    }),
    ...(review.hero.watchouts && review.hero.watchouts.length > 0 && {
      negativeNotes: review.hero.watchouts
    })
  };

  // 5. Article Schema (for editorial content)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: review.hero.title,
    description: review.hero.description,
    author: {
      "@id": `${siteOrigin}/authors/${author.toLowerCase().replace(/\s+/g, '-')}#author`
    },
    publisher: {
      "@id": `${siteOrigin}#organization`
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    url: canonicalUrl,
    inLanguage: "ja-JP",
    mainEntityOfPage: canonicalUrl,
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 630
      }
    }),
    articleSection: "オンラインカジノレビュー",
    keywords: [casinoName, "オンラインカジノ", "レビュー", "ボーナス"].join(", ")
  };

  // 6. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: siteOrigin
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "レビュー",
        item: `${siteOrigin}/reviews`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: casinoName,
        item: canonicalUrl
      }
    ]
  };

  // 7. FAQ Schema (if FAQ exists)
  const faqSchema = review.faq && review.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: review.faq.map((qa, index) => ({
      "@type": "Question",
      "@id": `${canonicalUrl}#faq-${index}`,
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer
      }
    }))
  } : null;

  // Return all schemas as an array
  const schemas = [
    organizationSchema,
    authorSchema,
    productSchema,
    reviewSchema,
    articleSchema,
    breadcrumbSchema
  ];

  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return schemas;
}