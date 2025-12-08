import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBcGame } from "@/content/reviews/bc-game";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBcGame} />;
}
