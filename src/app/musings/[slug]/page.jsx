import PageWrapper from "@/components/PageWrapper";
import { getPostData, getAllPostSlugs, getSortedPostsData } from "@/utils/lib";
import { JETBRAINS_MONO, SOURCE_SERIF } from "@/utils/constants";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/mdx-components";
import Panel from "./containers/Panel";

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  const post = await getPostData(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description || "",
    keywords: post.keywords || [],
    alternates: {
      canonical: `https://nathanhouck.com/musings/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description || "",
      url: `https://nathanhouck.com/musings/${post.slug}`,
      type: "article",
      images: [{ url: "/headshot.jpg", width: 800, alt: "Nathan Houck" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || "",
    },
  };
}

function readingTime(content) {
  const words = content.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} MIN READ`;
}

export default async function PostPage({ params: paramsPromise }) {
  const params = await paramsPromise;
  if (!params || !params.slug) return <p>Error: missing slug</p>;

  const post = await getPostData(params.slug);
  const posts = getSortedPostsData();

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = posts[currentIndex + 1] || null;

  return (
    <PageWrapper>
      <Panel currentPost={post} posts={posts} />

      <div className="min-h-screen w-screen lg:ml-85 flex items-center justify-center py-16 lg:py-0 lg:mb-16">
        <article className="w-full max-w-160">
          <div className="flex flex-col pt-10 px-5">
            {/* Title */}
            <h1 className={`${SOURCE_SERIF.className} text-(--primary-text) text-[26px] tracking-[-0.01em] font-normal mb-2`}>
              {post.title}
            </h1>

            {/* Date + reading time */}
            <div className={`${JETBRAINS_MONO.className} text-[11px] tracking-wide text-(--tertiary-text) flex gap-4 mb-6`}>
              <span>{post.date}</span>
              <span>{readingTime(post.content)}</span>
            </div>

            {/* MDX content */}
            <div className={`${SOURCE_SERIF.className} leading-[1.7] text-[17px] text-(--primary-text)`}>
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Author bio */}
            <div className="mt-16 pt-8 border-t border-(--border) flex flex-col gap-2">
              <p className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--tertiary-text) mb-1`}>
                About the author
              </p>
              <p className={`${SOURCE_SERIF.className} text-[15px] leading-[1.65] text-(--secondary-text)`}>
                Nathan Houck is an aerospace engineering student at Embry-Riddle (Daytona Beach) studying astronautics, aerodynamics, and experimental methods.{" "}
                <a href="/" className="text-(--accent) hover:opacity-80 transition-opacity">
                  More about Nathan →
                </a>
              </p>
            </div>

            {/* Next article */}
            {nextPost && (
              <div className="mt-16 pt-8 border-t border-(--border)">
                <p className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--tertiary-text) mb-2`}>
                  Next
                </p>
                <a
                  href={`/musings/${nextPost.slug}`}
                  className={`${SOURCE_SERIF.className} text-[20px] text-(--primary-text) hover:text-(--accent) transition-colors`}
                >
                  {nextPost.title} →
                </a>
              </div>
            )}
          </div>
        </article>
      </div>
    </PageWrapper>
  );
}
