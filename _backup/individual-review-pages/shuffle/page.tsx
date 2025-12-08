import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewShuffle } from "@/content/reviews/shuffle";

export default function Page() {
  return <ReviewDetailTemplate content={reviewShuffle} />;
}
