import { getSortedPostsData } from "@/utils/lib";
import PageWrapper from "@/components/PageWrapper";
import MusingsIndex from "./containers/MusingsIndex";

export const metadata = {
  title: "Musings",
  description: "Essays, short stories, and poems by Nathan Houck.",
  alternates: { canonical: "https://nathanhouck.com/musings" },
  openGraph: {
    title: "Musings — Nathan Houck",
    description: "Essays, short stories, and poems by Nathan Houck.",
    url: "https://nathanhouck.com/musings",
  },
};

export default function MusingsLanding() {
  const posts = getSortedPostsData();
  return (
    <PageWrapper>
      <MusingsIndex posts={posts} />
    </PageWrapper>
  );
}
