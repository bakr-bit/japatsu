import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewGohog } from "@/content/reviews/gohog";

export default function Page() {
  return <ReviewDetailTemplate content={reviewGohog} />;
}
