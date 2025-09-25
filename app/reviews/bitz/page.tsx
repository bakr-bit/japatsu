import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBitz } from "@/content/reviews/bitz";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBitz} />;
}
