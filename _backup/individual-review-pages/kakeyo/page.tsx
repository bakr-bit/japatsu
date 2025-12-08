import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewKakeyo } from "@/content/reviews/kakeyo";

export default function Page() {
  return <ReviewDetailTemplate content={reviewKakeyo} />;
}
