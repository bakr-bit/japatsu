import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewMintIo } from "@/content/reviews/mint-io";

export default function Page() {
  return <ReviewDetailTemplate content={reviewMintIo} />;
}
