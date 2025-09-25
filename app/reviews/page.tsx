import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewCard from "@/components/ui/ReviewCard";
import { REVIEW_SUMMARIES } from "@/content/reviews";

export default function Page() {
  return (
    <SectionScaffold title="オンラインカジノのレビュー">
      <HeaderBanner
        title="オンラインカジノ徹底レビュー"
        subheading="CasinoTsuが厳選してチェック"
        description="最新カジノの安全性、ボーナス、入出金、サポート体制まで一つひとつ検証したレビューをお届けします。"
        color="violet"
      />
      <div className="mt-10 space-y-8">
        <SectionTitle title="最新レビュー" as="h2" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {REVIEW_SUMMARIES.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </div>
    </SectionScaffold>
  );
}
