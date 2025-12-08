/**
 * Type definitions for Poker Strategy Page Content
 *
 * This structure handles comprehensive poker strategy guides with detailed
 * educational content, tables, character dialogues, and author information.
 */

export type PokerHero = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  imageUrl?: string;
};

export type PokerIntroduction = {
  heading: string;
  paragraphs: string[];
  callouts?: PokerCallout[];
};

export type PokerOfferDetail = {
  label: string;
  value: string;
  note?: string;
};

export type PokerCasinoFeature = {
  heading: string;
  subheading?: string;
  description: string[];
  bullets?: string[];
};

export type PokerOfferSection = {
  heading: string;
  description?: string[];
  casino: {
    name: string;
    slug?: string;
    description: string[];
    imageUrl?: string;
  };
  offerDetails: {
    heading: string;
    table: PokerOfferDetail[];
    bonusCodeInfo?: {
      heading: string;
      steps: string[];
    };
    alternativeOffer?: {
      heading: string;
      description: string[];
    };
  };
  features?: PokerCasinoFeature[];
  warnings?: string[];
};

export type PokerTableOfContentsItem = {
  text: string;
  url: string;
};

export type PokerCallout = {
  emoji?: string;
  heading?: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  character?: string;
  characterName?: string;
  avatarUrl?: string;
  text?: string;
};

export type PokerWhatYoullLearn = {
  heading: string;
  paragraphs: string[];
  featuredCasino?: {
    name: string;
    slug?: string;
    description: string;
    imageUrl?: string;
    cta: {
      text: string;
      href: string;
    };
  };
  beforeStarting?: {
    heading: string;
    items: Array<{
      number: number;
      heading: string;
      paragraphs: string[];
      callout?: PokerCallout;
      bullets?: string[];
    }>;
  };
};

export type PokerPlayStyleType = {
  type: string;
  characteristics: string;
  recommendedFor: string;
};

export type PokerStrategySubsection = {
  subheading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    title?: string;
    columns?: string[];
    rows: string[][];
  };
  callout?: PokerCallout;
  example?: {
    heading?: string;
    content: string;
  };
  points?: {
    heading: string;
    items: string[];
  };
  conclusion?: string;
};

export type PokerStrategySection = {
  heading: string;
  introduction?: string[];
  subsections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    playStyleTypes?: PokerPlayStyleType[];
    table?: {
      title?: string;
      columns?: string[];
      rows: string[][];
    };
    callout?: PokerCallout;
    strategies?: PokerStrategySubsection[];
  }>;
};

export type PokerLevelingTable = {
  heading: string;
  description?: string;
  columns: string[];
  rows: Array<{
    level: string;
    content: string;
  }>;
};

export type PokerHeadsUpStrategy = {
  heading: string;
  introduction?: string[];
  strategies: Array<{
    number: number;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    callout?: PokerCallout;
  }>;
  summary?: {
    heading: string;
    paragraphs: string[];
    cta?: {
      text: string;
      casinoName: string;
      casinoSlug?: string;
      linkUrl?: string;
    };
  };
};

export type PokerMistakeSection = {
  heading: string;
  introduction?: string[];
  subsections: Array<{
    number: number;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    points?: string[];
    examples?: Array<{
      type?: string;
      description: string;
    }>;
    callout?: PokerCallout;
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }>;
};

export type PokerSummary = {
  heading: string;
  paragraphs: string[];
};

export type PokerFAQItem = {
  question: string;
  answer: string;
  character?: "casiko" | "oka-kyoju" | "cocomo" | "kyoju" | "casiko-oka-kyoju";
  characterName?: string;
  avatarUrl?: string;
  secondaryAvatarUrl?: string;
};

export type PokerAuthor = {
  name: string;
  nameJapanese?: string;
  role: string;
  avatarUrl: string;
  bio: string;
  authorPageUrl?: string;
  expertise?: string[];
};

export type PokerPageContent = {
  // Hero section with main title
  hero: PokerHero;

  // Introduction/Overview
  introduction?: PokerIntroduction;

  // Featured offer section (e.g., PokerStars)
  offerSection?: PokerOfferSection;

  // Table of contents
  tableOfContents?: PokerTableOfContentsItem[];

  // What you'll learn section
  whatYoullLearn?: PokerWhatYoullLearn;

  // Basic strategy section
  basicStrategy?: PokerStrategySection;

  // Advanced strategy section
  advancedStrategy?: PokerStrategySection;

  // Leveling table
  leveling?: PokerLevelingTable;

  // Heads-up strategies
  headsUpStrategy?: PokerHeadsUpStrategy;

  // Mistake correction section
  mistakeCorrection?: PokerMistakeSection;

  // Summary/Conclusion
  summary?: PokerSummary;

  // FAQ section
  faq?: PokerFAQItem[];

  // Author information
  author?: PokerAuthor;

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

  // Additional sections for comprehensive poker guides
  recommendedCasinos?: {
    heading: string;
    casinos: Array<{
      name: string;
      bonus: string;
      description: string;
    }>;
  };

  howToPlay?: {
    heading: string;
    introduction: string[];
    rounds: Array<{
      name: string;
      description: string[];
      actions?: string[];
      conclusion?: string;
      specialRule?: {
        heading: string;
        description: string;
      };
    }>;
    callout?: PokerCallout;
  };

  bettingDetails?: {
    heading: string;
    introduction: string[];
    sections: Array<{
      heading: string;
      bullets?: string[];
      paragraphs?: string[];
    }>;
  };

  handRankings?: {
    heading: string;
    introduction: string[];
    ranks: string[];
    link?: {
      text: string;
      href: string;
    };
  };

  winningStrategy?: {
    heading: string;
    introduction: string[];
    strategies: Array<{
      heading: string;
      description: string;
    }>;
  };

  historyAndVariants?: {
    heading: string;
    paragraphs: string[];
    comparison?: {
      heading: string;
      points: string[];
    };
    link?: {
      text: string;
      href: string;
    };
  };
};
