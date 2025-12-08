import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewShinobibet } from "@/content/reviews/shinobibet";

export default function Page() {
  return <ReviewDetailTemplate content={reviewShinobibet} />;
}
