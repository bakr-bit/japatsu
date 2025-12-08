import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewCaibo } from "@/content/reviews/caibo";

export default function Page() {
  return <ReviewDetailTemplate content={reviewCaibo} />;
}
