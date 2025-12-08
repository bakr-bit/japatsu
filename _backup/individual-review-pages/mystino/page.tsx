import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewMystino } from "@/content/reviews/mystino";

export default function Page() {
  return <ReviewDetailTemplate content={reviewMystino} />;
}
