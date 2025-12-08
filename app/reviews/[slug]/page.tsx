import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import ReviewSchema from "@/components/seo/ReviewSchema";
import { reviewsMap, reviewSlugs, getReviewBySlug } from "@/content/reviews/reviews-map";
import { generateReviewMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all review pages
export async function generateStaticParams() {
  return reviewSlugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each review page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);

  if (!review) {
    return {};
  }

  return generateReviewMetadata(review, slug);
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);

  if (!review) {
    notFound();
  }

  return (
    <>
      <ReviewSchema review={review} slug={slug} />
      <ReviewDetailTemplate content={review} slug={slug} />
    </>
  );
}