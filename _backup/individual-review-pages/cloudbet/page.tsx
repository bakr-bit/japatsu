import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewCloudbet } from "@/content/reviews/cloudbet";

export default function Page() {
  return <ReviewDetailTemplate content={reviewCloudbet} />;
}
