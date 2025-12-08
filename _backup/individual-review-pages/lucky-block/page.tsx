import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewLuckyBlock } from "@/content/reviews/lucky-block";

export default function Page() {
  return <ReviewDetailTemplate content={reviewLuckyBlock} />;
}
