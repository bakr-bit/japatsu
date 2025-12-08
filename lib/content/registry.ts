import type { BaseContent, ContentMeta, ContentStatus } from "@/lib/types";

/**
 * Generic content registry interface.
 * Provides type-safe access to content collections.
 */
export interface ContentRegistry<T extends BaseContent> {
  /** Get content by slug */
  getBySlug(slug: string): T | undefined;

  /** Get all content items */
  getAll(): T[];

  /** Get all slugs */
  getAllSlugs(): string[];

  /** Get content by status */
  getByStatus(status: ContentStatus): T[];

  /** Get content by tag */
  getByTag(tag: string): T[];

  /** Query content with partial metadata filter */
  query(filter: Partial<ContentMeta>): T[];

  /** Get count of items */
  count(): number;
}

/**
 * Creates a content registry from a content map.
 * Provides querying and filtering capabilities.
 */
export function createContentRegistry<T extends BaseContent>(
  contentMap: Record<string, T>
): ContentRegistry<T> {
  const items = Object.values(contentMap);

  return {
    getBySlug(slug: string): T | undefined {
      return contentMap[slug];
    },

    getAll(): T[] {
      return items;
    },

    getAllSlugs(): string[] {
      return Object.keys(contentMap);
    },

    getByStatus(status: ContentStatus): T[] {
      return items.filter((item) => item.meta.status === status);
    },

    getByTag(tag: string): T[] {
      return items.filter((item) => item.meta.tags?.includes(tag));
    },

    query(filter: Partial<ContentMeta>): T[] {
      return items.filter((item) => {
        return Object.entries(filter).every(([key, value]) => {
          const metaKey = key as keyof ContentMeta;
          return item.meta[metaKey] === value;
        });
      });
    },

    count(): number {
      return items.length;
    },
  };
}

/**
 * Utility to extract slug from file path.
 * Converts "./reviews/stake.tsx" -> "stake"
 */
export function extractSlugFromPath(path: string): string {
  const match = path.match(/\/([^/]+)\.(ts|tsx)$/);
  return match?.[1] ?? path;
}

/**
 * Builds a content map from glob imports.
 * Works with Vite/Next.js import.meta.glob pattern.
 */
export function buildContentMap<T extends BaseContent>(
  modules: Record<string, { default?: T } | T>
): Record<string, T> {
  const contentMap: Record<string, T> = {};

  for (const [path, module] of Object.entries(modules)) {
    const slug = extractSlugFromPath(path);
    // Handle both default exports and direct exports
    const content = (module as { default?: T }).default ?? (module as T);

    if (content && typeof content === "object" && "meta" in content) {
      contentMap[slug] = content;
    }
  }

  return contentMap;
}
