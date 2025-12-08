import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewEldoah } from "@/content/reviews/eldoah";

export default function Page() {
  return <ReviewDetailTemplate content={reviewEldoah} />;
}
