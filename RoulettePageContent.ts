/**
 * Type definitions for Roulette Page Content
 *
 * This structure handles comprehensive roulette guides with detailed
 * educational content, tables, betting methods, and strategies.
 */

export type RouletteHero = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  imageUrl?: string;
};

export type RouletteIntroduction = {
  heading: string;
  paragraphs: string[];
  callouts?: RouletteCallout[];
};

export type RouletteCallout = {
  emoji?: string;
  heading?: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  text?: string;
};

export type RouletteTableOfContentsItem = {
  text: string;
  url: string;
};

export type RouletteRTPTable = {
  heading: string;
  description?: string[];
  table: {
    columns: string[];
    rows: string[][];
  };
  callout?: RouletteCallout;
};

export type RouletteRecommendedCasino = {
  rank?: string;
  name: string;
  bonus: string;
  features?: string[];
  ctaText?: string;
  ctaUrl?: string;
};

export type RouletteRecommendedCasinos = {
  heading: string;
  description?: string[];
  casinos: RouletteRecommendedCasino[];
};

export type RouletteBettingMethod = {
  name: string;
  description: string;
  payout?: string;
  probability?: string;
  details?: string[];
};

export type RouletteBettingMethods = {
  heading: string;
  introduction?: string[];
  insideBets?: {
    heading: string;
    description?: string[];
    methods: RouletteBettingMethod[];
  };
  outsideBets?: {
    heading: string;
    description?: string[];
    methods: RouletteBettingMethod[];
  };
  table?: {
    heading?: string;
    columns: string[];
    rows: string[][];
  };
  callout?: RouletteCallout;
};

export type RouletteStrategyItem = {
  number?: number;
  heading: string;
  description: string;
  paragraphs?: string[];
  bullets?: string[];
  pros?: string[];
  cons?: string[];
  example?: {
    heading?: string;
    content: string;
    steps?: string[];
  };
  table?: {
    columns: string[];
    rows: string[][];
  };
  callout?: RouletteCallout;
};

export type RouletteStrategy = {
  heading: string;
  introduction?: string[];
  strategies: RouletteStrategyItem[];
  summary?: {
    heading: string;
    paragraphs: string[];
  };
};

export type RouletteComparison = {
  heading: string;
  introduction?: string[];
  table: {
    columns: string[];
    rows: string[][];
  };
  points?: string[];
  conclusion?: string[];
};

export type RouletteHowToPlay = {
  heading: string;
  introduction?: string[];
  steps: Array<{
    number: number;
    heading: string;
    description: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
  conclusion?: string[];
  callout?: RouletteCallout;
};

export type RouletteVariant = {
  name: string;
  description: string;
  features?: string[];
  houseEdge?: string;
};

export type RouletteVariants = {
  heading: string;
  introduction?: string[];
  variants: RouletteVariant[];
};

export type RouletteTipsSection = {
  heading: string;
  introduction?: string[];
  tips: Array<{
    number: number;
    heading: string;
    description: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};

export type RouletteFAQItem = {
  question: string;
  answer: string;
};

export type RouletteAuthor = {
  name: string;
  nameJapanese?: string;
  role: string;
  avatarUrl: string;
  bio: string;
  authorPageUrl?: string;
  expertise?: string[];
};

export type RouletteSummary = {
  heading: string;
  paragraphs: string[];
};

export type RoulettePageContent = {
  // Hero section with main title
  hero: RouletteHero;

  // Introduction/Overview
  introduction?: RouletteIntroduction;

  // Table of contents
  tableOfContents?: RouletteTableOfContentsItem[];

  // RTP/Payout/House Edge tables (can have multiple)
  rtpTables?: RouletteRTPTable[];

  // Recommended casinos
  recommendedCasinos?: RouletteRecommendedCasinos;

  // Betting methods (Inside and Outside bets)
  bettingMethods?: RouletteBettingMethods;

  // How to play section
  howToPlay?: RouletteHowToPlay;

  // Basic strategy section
  basicStrategy?: RouletteStrategy;

  // Advanced strategy section
  advancedStrategy?: RouletteStrategy;

  // Comparison tables (American vs French, etc.)
  comparison?: RouletteComparison;

  // Variants section
  variants?: RouletteVariants;

  // Tips section
  tips?: RouletteTipsSection;

  // Flexible long-form sections for manual content
  longformSections?: Array<{
    heading: string;
    anchorId?: string;
    markdown: string;
  }>;

  // Summary/Conclusion
  summary?: RouletteSummary;

  // FAQ section (NO character fields per user request)
  faq?: RouletteFAQItem[];

  // Author information
  author?: RouletteAuthor;

  // Cookie/consent notice
  notice?: {
    heading?: string;
    content: string;
    buttons?: Array<{
      text: string;
      action: string;
    }>;
  };

  // Breadcrumbs
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;

  // Additional metadata
  metadata?: {
    category?: string;
    tags?: string[];
    publishDate?: string;
    lastModified?: string;
    locale?: string;
  };
};
