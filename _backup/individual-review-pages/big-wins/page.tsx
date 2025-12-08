import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBigWins } from "@/content/reviews/big-wins";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBigWins} />;
}
