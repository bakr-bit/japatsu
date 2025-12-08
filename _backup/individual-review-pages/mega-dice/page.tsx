import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewMegaDice } from "@/content/reviews/mega-dice";

export default function Page() {
  return <ReviewDetailTemplate content={reviewMegaDice} />;
}
