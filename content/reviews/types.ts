export type ReviewStatus = "active" | "retired";

export type ReviewSummary = {
  slug: string;
  name: string;
  title: string;
  subheading?: string;
  description?: string;
  summary: string;
  rating?: number;
  ratingMax?: number;
  bonusHighlight?: string;
  playHref?: string;
  image?: string;
  status?: ReviewStatus;
};
