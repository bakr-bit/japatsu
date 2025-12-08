import React from "react";
import { ProvidersPageData } from "@/components/templates/ProvidersTemplate";

/**
 * Generates JSON-LD structured data for game provider pages
 * Following schema.org standards for SoftwareApplication and Organization
 */
export function generateProviderSchema(data: ProvidersPageData, canonicalPath: string): object {
  const baseUrl = "https://casinotsu.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;

  // Extract provider name from title (remove common suffixes)
  const providerName = data.banner?.title || data.title.replace(/（.*?）|\(.*?\)|プロバイダーレビュー|レビュー/g, '').trim();

  // Main organization schema for the game provider
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${fullUrl}#organization`,
    name: providerName,
    description: data.banner?.description || data.intro,
    url: fullUrl,
    logo: data.banner?.avatarSrc ? `${baseUrl}${data.banner.avatarSrc}` : undefined,
    foundingDate: data.featured?.items?.[0]?.founded,
    location: data.featured?.items?.[0]?.hq ? {
      "@type": "Place",
      name: data.featured?.items?.[0]?.hq
    } : undefined,
    sameAs: data.featured?.items?.[0]?.href ? [data.featured.items[0].href] : undefined,
  };

  // Author schema for the review author
  const authorSchema = {
    "@type": "Person",
    "@id": `${baseUrl}/authors/rina-okabe`,
    name: "Rina Okabe",
    description: "6年間で80以上のカジノを実際にプレイして検証した経験豊富な専門家",
    jobTitle: "カジノ専門家・レビュアー",
    affiliation: {
      "@type": "Organization",
      name: "CasinoTsu",
      url: baseUrl
    },
    url: `${baseUrl}/authors/rina-okabe`,
    sameAs: [
      `${baseUrl}/authors/rina-okabe`
    ]
  };

  // Review schema for the provider review
  const reviewSchema = {
    "@type": "Review",
    "@id": `${fullUrl}#review`,
    reviewBody: data.intro || data.banner?.description,
    itemReviewed: {
      "@id": `${fullUrl}#organization`
    },
    author: {
      "@id": `${baseUrl}/authors/rina-okabe`
    },
    publisher: {
      "@type": "Organization",
      name: "CasinoTsu",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    reviewRating: data.hero?.score ? {
      "@type": "Rating",
      ratingValue: data.hero.score,
      bestRating: data.hero.scoreMax || 5,
      worstRating: 1
    } : undefined,
    positiveNotes: data.hero?.highlights || [],
    negativeNotes: data.hero?.watchouts || [],
  };

  // FAQ schema if FAQs exist
  const faqSchema = data.faq && data.faq.length > 0 ? {
    "@type": "FAQPage",
    "@id": `${fullUrl}#faq`,
    mainEntity: data.faq.map(qa => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.a
      }
    }))
  } : null;

  // Website schema for the page itself
  const webPageSchema = {
    "@type": "WebPage",
    "@id": fullUrl,
    url: fullUrl,
    name: data.title,
    description: data.banner?.description || data.intro,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      name: "CasinoTsu",
      url: baseUrl,
      description: "日本のオンラインカジノ情報サイト"
    },
    mainEntity: {
      "@id": `${fullUrl}#organization`
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "プロバイダー",
          item: `${baseUrl}/providers`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: providerName,
          item: fullUrl
        }
      ]
    },
    about: {
      "@id": `${fullUrl}#organization`
    },
    mentions: data.featured?.items?.map((item, index) => ({
      "@type": "Game",
      name: item.name,
      url: item.href || `${fullUrl}#game-${index}`
    })) || []
  };

  // Compile all schemas
  const schemas = [
    webPageSchema,
    organizationSchema,
    authorSchema,
    reviewSchema
  ];

  if (faqSchema) {
    schemas.push(faqSchema);
  }

  // Return as JSON-LD structure
  return {
    "@context": "https://schema.org",
    "@graph": schemas.filter(schema => schema !== null)
  };
}

/**
 * Generates SEO title for provider pages
 */
export function generateProviderTitle(data: ProvidersPageData): string {
  const providerName = data.banner?.title || data.title.replace(/（.*?）|\(.*?\)|プロバイダーレビュー|レビュー/g, '').trim();

  if (data.title.includes('レビュー')) {
    return data.title;
  }

  return `${providerName}プロバイダーレビュー | CasinoTsu`;
}

/**
 * Generates SEO meta description for provider pages
 */
export function generateProviderDescription(data: ProvidersPageData): string {
  const providerName = data.banner?.title || data.title.replace(/（.*?）|\(.*?\)|プロバイダーレビュー|レビュー/g, '').trim();

  // Use banner description if available
  if (data.banner?.description) {
    return data.banner.description.length > 160
      ? data.banner.description.substring(0, 157) + '...'
      : data.banner.description;
  }

  // Use intro if available
  if (data.intro) {
    return data.intro.length > 160
      ? data.intro.substring(0, 157) + '...'
      : data.intro;
  }

  // Generate fallback description
  const features = data.features?.slice(0, 3).join('、') || 'オンラインカジノゲーム';
  const description = `${providerName}のゲーム、${features}について詳しく解説。ライセンス、セキュリティ、おすすめカジノ情報も掲載。`;

  return description.length > 160
    ? description.substring(0, 157) + '...'
    : description;
}

/**
 * Generates the script tag for JSON-LD structured data
 */
export function ProviderSchemaScript({ data, canonicalPath }: { data: ProvidersPageData; canonicalPath: string }) {
  const schema = generateProviderSchema(data, canonicalPath);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0)
      }}
    />
  );
}

/**
 * Generates Next.js metadata object for provider pages
 */
export function generateProviderMetadata(data: ProvidersPageData, canonicalPath: string) {
  const baseUrl = "https://casinotsu.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const title = generateProviderTitle(data);
  const description = generateProviderDescription(data);
  const providerName = data.banner?.title || data.title.replace(/（.*?）|\(.*?\)|プロバイダーレビュー|レビュー/g, '').trim();

  return {
    title,
    description,
    keywords: `${providerName}, オンラインカジノ, スロット, ライブカジノ, カジノゲーム, プロバイダー, レビュー, 評価`,
    robots: "index, follow",
    canonical: fullUrl,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "article",
      siteName: "CasinoTsu",
      images: data.banner?.avatarSrc ? [{
        url: `${baseUrl}${data.banner.avatarSrc}`,
        alt: `${providerName} ロゴ`
      }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.banner?.avatarSrc ? [`${baseUrl}${data.banner.avatarSrc}`] : undefined,
    },
  };
}

/**
 * Generates all SEO meta tags for provider pages (Component version for head injection)
 */
export function ProviderSEOTags({ data, canonicalPath }: { data: ProvidersPageData; canonicalPath: string }) {
  return (
    <>
      {/* JSON-LD Schema */}
      <ProviderSchemaScript data={data} canonicalPath={canonicalPath} />
    </>
  );
}