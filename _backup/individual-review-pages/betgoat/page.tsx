import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBetgoat } from "@/content/reviews/betgoat";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBetgoat} />;
}
