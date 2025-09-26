import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBettilt } from "@/content/reviews/bettiilt";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBettilt} />;
}
