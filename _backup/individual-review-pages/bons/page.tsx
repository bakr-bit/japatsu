import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBons } from "@/content/reviews/bons";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBons} />;
}
