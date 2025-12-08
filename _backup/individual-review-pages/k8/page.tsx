import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewK8 } from "@/content/reviews/k8";

export default function Page() {
  return <ReviewDetailTemplate content={reviewK8} />;
}
