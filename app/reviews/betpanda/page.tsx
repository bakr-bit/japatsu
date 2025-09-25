import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBetpanda } from "@/content/reviews/betpanda";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBetpanda} />;
}
