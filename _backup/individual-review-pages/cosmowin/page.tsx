import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewCosmoswin } from "@/content/reviews/cosmowin";

export default function Page() {
  return <ReviewDetailTemplate content={reviewCosmoswin} />;
}
