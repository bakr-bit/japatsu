import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewCasumo } from "@/content/reviews/casumo";

export default function Page() {
  return <ReviewDetailTemplate content={reviewCasumo} />;
}
