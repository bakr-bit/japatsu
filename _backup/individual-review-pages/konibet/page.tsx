import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewKonibet } from "@/content/reviews/konibet";

export default function Page() {
  return <ReviewDetailTemplate content={reviewKonibet} />;
}
