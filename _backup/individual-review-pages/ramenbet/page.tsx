import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewRamenbet } from "@/content/reviews/ramenbet";

export default function Page() {
  return <ReviewDetailTemplate content={reviewRamenbet} />;
}
