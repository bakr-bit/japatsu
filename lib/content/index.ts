/**
 * Unified Content Access Layer
 *
 * This module provides a centralized way to access all content in the site.
 * Content is loaded from the /content directory and registered automatically.
 *
 * Usage:
 *   import { content } from '@/lib/content';
 *   const review = content.reviews.getBySlug('stake');
 *   const allReviews = content.reviews.getAll();
 */

// Re-export types
export * from "./registry";
export * from "./seo";

// Re-export from main types
export type {
  BaseContent,
  ContentMeta,
  ContentStatus,
  ContentType,
  SeoMeta,
  FAQItem,
  DataTable,
  CTAButton,
} from "@/lib/types";

/**
 * Note: The full content registry implementation requires importing
 * actual content files. For now, this provides the infrastructure.
 *
 * To complete the setup:
 *
 * 1. Migrate content files to use new BaseContent interface
 * 2. Use import.meta.glob or dynamic imports to load content
 * 3. Create registries with createContentRegistry()
 *
 * Example future implementation:
 *
 * ```ts
 * // When content files are migrated:
 * const reviewModules = import.meta.glob('../content/reviews/*.ts', { eager: true });
 * const reviewMap = buildContentMap(reviewModules);
 * export const reviews = createContentRegistry(reviewMap);
 *
 * export const content = {
 *   reviews,
 *   payments: createContentRegistry(paymentMap),
 *   bonuses: createContentRegistry(bonusMap),
 * };
 * ```
 */

// Placeholder until content migration is complete
// This allows the routes to be updated to use the new pattern
// even before all content is migrated

import { createContentRegistry, buildContentMap } from "./registry";
import type { BaseContent, ContentStatus } from "@/lib/types";

// Temporary shim that works with existing REVIEW_SUMMARIES
// This allows gradual migration without breaking existing functionality
export function createReviewRegistryFromSummaries<T extends {
  slug: string;
  status?: string;
  tags?: string[];
}>(summaries: T[]): {
  getBySlug: (slug: string) => T | undefined;
  getAll: () => T[];
  getAllSlugs: () => string[];
  getByStatus: (status: string) => T[];
  getByTag: (tag: string) => T[];
  count: () => number;
} {
  const bySlug = new Map(summaries.map(s => [s.slug, s]));

  return {
    getBySlug: (slug) => bySlug.get(slug),
    getAll: () => summaries,
    getAllSlugs: () => summaries.map(s => s.slug),
    getByStatus: (status) => summaries.filter(s => (s.status ?? 'active') === status),
    getByTag: (tag) => summaries.filter(s => s.tags?.includes(tag)),
    count: () => summaries.length,
  };
}
