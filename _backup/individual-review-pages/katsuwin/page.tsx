import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewKatsuwin } from "@/content/reviews/katsuwin";

export default function Page() {
  return <ReviewDetailTemplate content={reviewKatsuwin} />;
}
