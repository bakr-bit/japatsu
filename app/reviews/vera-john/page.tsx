import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewVeraJohn } from "@/content/reviews/vera-john";

export default function Page() {
  return <ReviewDetailTemplate content={reviewVeraJohn} />;
}
