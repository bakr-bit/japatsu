import NewsTemplate, { NewsPageData } from "@/components/templates/NewsTemplate";

const data: NewsPageData = {
  title: "ニュース",
  banner: {
    title: "業界ニュース",
    subheading: "News & Insights",
    description: "規制・技術・市場動向をピックアップ。",
  },
};

export default function Page() {
  return <NewsTemplate data={data} />;
}
