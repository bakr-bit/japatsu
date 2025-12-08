import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewDafabet } from "@/content/reviews/dafabet";

export default function Page() {
  return <ReviewDetailTemplate content={reviewDafabet} />;
}
