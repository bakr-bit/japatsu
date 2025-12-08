import { generateReviewSchema } from "@/lib/seo";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

interface ReviewSchemaProps {
  review: ReviewPageContent;
  slug: string;
}

export default function ReviewSchema({ review, slug }: ReviewSchemaProps) {
  const schemas = generateReviewSchema(review, slug);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0)
          }}
        />
      ))}
    </>
  );
}