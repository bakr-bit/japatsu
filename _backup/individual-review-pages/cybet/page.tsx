import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewCybet } from "@/content/reviews/cybet";

export default function Page() {
  return <ReviewDetailTemplate content={reviewCybet} />;
}
