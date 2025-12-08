import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewParimatch } from "@/content/reviews/parimatch";

export default function Page() {
  return <ReviewDetailTemplate content={reviewParimatch} />;
}
