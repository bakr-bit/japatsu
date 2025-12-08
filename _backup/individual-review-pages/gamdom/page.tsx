import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewGamdom } from "@/content/reviews/gamdom";

export default function Page() {
  return <ReviewDetailTemplate content={reviewGamdom} />;
}
