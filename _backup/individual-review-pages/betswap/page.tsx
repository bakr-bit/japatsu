import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBetswap } from "@/content/reviews/betswap";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBetswap} />;
}
