import type { Metadata } from "next";
import type { BaseContent, SeoMeta, ContentMeta } from "@/lib/types";

/**
 * Generates Next.js Metadata from content.
 */
export function generateContentMetadata(
  content: BaseContent,
  baseUrl: string = "https://casinotsu.com"
): Metadata {
  const { meta, seo } = content;

  return {
    title: seo?.metaTitle ?? meta.title,
    description: seo?.metaDescription ?? meta.description,
    alternates: {
      canonical: seo?.canonicalUrl ?? `${baseUrl}/${content.type}/${meta.slug}`,
    },
    openGraph: {
      title: seo?.metaTitle ?? meta.title,
      description: seo?.metaDescription ?? meta.description,
      images: seo?.ogImage ? [{ url: seo.ogImage }] : undefined,
      type: "article",
      locale: "ja_JP",
    },
    robots: seo?.noIndex ? { index: false, follow: true } : undefined,
  };
}

/**
 * Generates Schema.org WebPage structured data.
 */
export function generateWebPageSchema(content: BaseContent): object {
  const { meta, seo } = content;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo?.metaTitle ?? meta.title,
    description: seo?.metaDescription ?? meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt,
    inLanguage: "ja-JP",
  };
}

/**
 * Generates Schema.org Review structured data for review content.
 */
export function generateReviewSchema(
  content: BaseContent & {
    hero?: { score?: number; scoreMax?: number };
  },
  itemReviewed?: { name: string; type?: string }
): object {
  const { meta, hero } = content;

  return {
    "@context": "https://schema.org",
    "@type": "Review",
    name: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt,
    author: {
      "@type": "Organization",
      name: "CasinoTsu",
    },
    reviewRating: hero?.score
      ? {
          "@type": "Rating",
          ratingValue: hero.score,
          bestRating: hero.scoreMax ?? 5,
          worstRating: 0,
        }
      : undefined,
    itemReviewed: itemReviewed
      ? {
          "@type": itemReviewed.type ?? "Organization",
          name: itemReviewed.name,
        }
      : undefined,
  };
}

/**
 * Generates Schema.org FAQPage structured data.
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org BreadcrumbList structured data.
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
