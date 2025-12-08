import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewPokerStars } from "@/content/reviews/pokerstars";

export default function Page() {
  return <ReviewDetailTemplate content={reviewPokerStars} />;
}
