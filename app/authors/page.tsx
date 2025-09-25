import AuthorsTemplate, { AuthorsPageData } from "@/components/templates/AuthorsTemplate";

const data: AuthorsPageData = {
  title: "著者・編集チーム",
  banner: {
    title: "Team",
    subheading: "編集部と執筆陣",
    description: "オンラインカジノの専門知識を持つチームが制作・校閲を担当。",
  },
  authors: [],
};

export default function Page() {
  return <AuthorsTemplate data={data} />;
}
