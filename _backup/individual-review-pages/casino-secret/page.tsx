import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewCasinoSecret } from "@/content/reviews/casino-secret";

export default function Page() {
  return <ReviewDetailTemplate content={reviewCasinoSecret} />;
}
