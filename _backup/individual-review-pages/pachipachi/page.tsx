import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewPachiPachi } from "@/content/reviews/pachipachi";

export default function Page() {
  return <ReviewDetailTemplate content={reviewPachiPachi} />;
}
