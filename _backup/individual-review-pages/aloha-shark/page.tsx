import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { reviewAlohaShark } from "@/content/reviews/aloha-shark";

export default function Page() {
  return <ReviewDetailTemplate content={reviewAlohaShark} />;
}
