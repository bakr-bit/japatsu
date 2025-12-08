import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBetRebels } from "@/content/reviews/betrebels";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBetRebels} />;
}
