import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewBetsIo } from "@/content/reviews/bets-io";

export default function Page() {
  return <ReviewDetailTemplate content={reviewBetsIo} />;
}
