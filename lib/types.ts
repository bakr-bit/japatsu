import type { ReactNode } from "react";

// =============================================================================
// EXISTING CONTENT ITEM TYPES (preserved for backward compatibility)
// =============================================================================

export interface ContentItem {
  id: string;
  title: string;
  info?: string;
  rating?: number;
  link: string;
  image: string;
  type: 'toplist' | 'banner' | 'sidebar';
}

export interface ToplistContent extends ContentItem {
  type: 'toplist';
  rank?: number;
  bonus?: string;
  spins?: string;
  payments?: unknown[];
  morePayments?: number;
}

export interface BannerContent extends ContentItem {
  type: 'banner';
}

export interface SidebarContent extends ContentItem {
  type: 'sidebar';
}

// =============================================================================
// CONSOLIDATED COMMON TYPES
// =============================================================================

/**
 * Generic FAQ item - replaces ReviewFaq, GameShowFAQItem, BonusFAQItem, etc.
 */
export type FAQItem = {
  question: string;
  answer: string;
};

/**
 * Generic data table - replaces DiceTable, LiveTable, SlotsTable, etc.
 * Supports all table variations with optional title, caption, notes.
 */
export type DataTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
  note?: string;
  headers?: string[];
};

// =============================================================================
// RICH TEXT TYPES (for structured content without markdown)
// =============================================================================

/**
 * Text segment for inline formatting - can be plain string or formatted
 */
export type TextSegment =
  | string
  | { text: string; bold?: boolean; italic?: boolean }
  | { text: string; link: string };

/**
 * Rich paragraph - array of text segments for inline formatting
 * Example: ["Normal text ", { text: "bold text", bold: true }, " more normal"]
 */
export type RichParagraph = TextSegment[];

/**
 * Content table - structured table data (alias for DataTable with required headers)
 */
export type ContentTable = {
  headers: string[];
  rows: string[][];
  caption?: string;
  note?: string;
};

/**
 * Generic CTA button - replaces ReviewCta and similar patterns
 */
export type CTAButton = {
  text: string;
  href: string;
  label?: string;
  badge?: string;
  newTab?: boolean;
};

/**
 * Generic educational/content section - replaces GSection, CSection, PkSection, etc.
 * Supports both plain strings and rich text formatting.
 */
export type ContentSection = {
  heading: string;
  paragraphs?: string[];             // Plain text paragraphs
  richParagraphs?: RichParagraph[];  // Formatted text with inline styles
  bullets?: string[];                // List items
  table?: DataTable;                 // Single table (legacy)
  tables?: ContentTable[];           // Multiple structured tables
  image?: ImageWithCaption;
  subsections?: ContentSubsection[];
};

export type ContentSubsection = {
  subheading: string;
  paragraphs?: string[];
  richParagraphs?: RichParagraph[];
  bullets?: string[];
  table?: DataTable;
  tables?: ContentTable[];
  image?: ImageWithCaption;
};

/**
 * Image with optional caption
 */
export type ImageWithCaption = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

// =============================================================================
// HERO SECTION TYPES
// =============================================================================

/**
 * Base hero section - common fields across all detail pages
 */
export type HeroBase = {
  title: string;
  description?: string;
  lastUpdated?: string;
  imageUrl?: string;
};

/**
 * Hero with rating - for review pages
 */
export type HeroWithRating = HeroBase & {
  score: number;
  scoreMax?: number;
  subheading?: string;
  highlights?: string[];
  watchouts?: string[];
  avatarSrc?: string;
  avatarAlt?: string;
};

// =============================================================================
// CASINO/REVIEW RELATED TYPES
// =============================================================================

/**
 * Base casino info - shared across casino cards and listings
 */
export type CasinoBase = {
  name: string;
  slug?: string;
  description?: string;
  rating?: number;
  ratingMax?: number;
  logo?: string;
  playHref?: string;
  reviewHref?: string;
};

/**
 * Casino with bonus info
 */
export type CasinoWithBonus = CasinoBase & {
  bonusTitle?: string;
  bonusAmount?: string;
  bonusType?: 'welcome' | 'no-deposit' | 'free-spins' | 'cashback' | 'vip';
  wagering?: string;
};

/**
 * Score breakdown for detailed ratings
 */
export type ScoreBreakdown = {
  label: string;
  percent: number;
  note?: string;
};

/**
 * Fact/detail item
 */
export type FactItem = {
  label: string;
  value: ReactNode;
};

// =============================================================================
// PAYMENT RELATED TYPES
// =============================================================================

/**
 * Payment method info
 */
export type PaymentMethod = {
  name: string;
  icon?: string;
  href?: string;
  pageHref?: string;
  badge?: string;
  note?: string;
};

/**
 * Payment limits
 */
export type PaymentLimits = {
  min?: string;
  max?: string;
  processingTime?: string;
  fees?: string;
};

// =============================================================================
// BONUS RELATED TYPES
// =============================================================================

/**
 * Bonus table row
 */
export type BonusTableRow = {
  depositNumber: string;
  percent: string;
  cap: string;
  code?: string;
};

/**
 * Generic offer info
 */
export type OfferItem = {
  title: string;
  description: string;
  highlight?: string;
  code?: string;
  expiry?: string;
};

// =============================================================================
// EDITORIAL/AUTHOR TYPES
// =============================================================================

/**
 * Author info for editorial content
 */
export type AuthorInfo = {
  name: string;
  role?: string;
  avatarSrc?: string;
  profileHref?: string;
  bio?: string;
};

/**
 * Editorial content block
 */
export type EditorialContent = {
  hook: string;
  theGoodStuff: string;
  theHeadsUp: string;
  finalThought: string;
  author?: AuthorInfo;
};

/**
 * Longform section
 */
export type LongformSection = {
  title?: string;
  kicker?: string;
  paragraphs: string[];
};

// =============================================================================
// GAME/SLOT RELATED TYPES
// =============================================================================

/**
 * Game provider info
 */
export type GameProvider = {
  name: string;
  slug?: string;
  logo?: string;
  href?: string;
  gameCount?: number;
};

/**
 * Slot game info
 */
export type SlotGameInfo = {
  name: string;
  provider?: string;
  rtp?: string;
  volatility?: 'low' | 'medium' | 'high';
  maxWin?: string;
  features?: string[];
};

// =============================================================================
// SEO/METADATA TYPES
// =============================================================================

/**
 * SEO metadata for pages
 */
export type SeoMeta = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
};

/**
 * Breadcrumb item
 */
export type BreadcrumbItem = {
  label: string;
  href?: string;
};

// =============================================================================
// CONTENT STATUS TYPES
// =============================================================================

/**
 * Content publication status
 */
export type ContentStatus = 'draft' | 'active' | 'retired';

/**
 * Content type discriminator
 */
export type ContentType =
  | 'review'
  | 'payment'
  | 'bonus'
  | 'slot'
  | 'provider'
  | 'guide'
  | 'offer'
  | 'game-show'
  | 'poker'
  | 'roulette'
  | 'blackjack'
  | 'news';

// =============================================================================
// BASE CONTENT INTERFACE (for content registry)
// =============================================================================

/**
 * Content metadata - shared by all content types
 */
export type ContentMeta = {
  slug: string;
  title: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  status: ContentStatus;
  author?: string;
  tags?: string[];
};

/**
 * Base content interface - all content types extend this
 */
export interface BaseContent {
  meta: ContentMeta;
  seo?: SeoMeta;
  type: ContentType;
}

// =============================================================================
// TYPE ALIASES FOR BACKWARD COMPATIBILITY
// =============================================================================

// These aliases allow gradual migration from template-specific types
export type ReviewFaq = FAQItem;
export type GameShowFAQItem = FAQItem;
export type BonusFAQItem = FAQItem;
export type GuideFAQItem = FAQItem;

export type ReviewCta = CTAButton;
export type BonusCta = CTAButton;

export type GTable = DataTable;
export type CTable = DataTable;
export type PkTable = DataTable;
export type DiceTable = DataTable;
export type LiveTable = DataTable;
export type SlotsTable = DataTable;
export type BacTable = DataTable;
export type BJTable = DataTable;
export type RlTable = DataTable;
export type CrapsTable = DataTable;
export type PontoonTable = DataTable;
export type GuideTable = DataTable;
export type SupportTable = DataTable;
export type ProvidersTable = DataTable;
export type BonusTable = DataTable;
export type BonusRankingsTable = DataTable;

export type GSection = ContentSection;
export type CSection = ContentSection;
export type PkSection = ContentSection;

export type ReviewScoreBreakdown = ScoreBreakdown;
export type ReviewFact = FactItem;
export type ReviewOffer = OfferItem;
export type ReviewEditorial = EditorialContent;
export type ReviewLongformSection = LongformSection;
