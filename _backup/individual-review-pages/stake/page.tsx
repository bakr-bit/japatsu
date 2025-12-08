import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewStake } from "@/content/reviews/stake";

export default function Page() {
  return <ReviewDetailTemplate content={reviewStake} />;
}
