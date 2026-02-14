import PageWrapper from "@/components/PageWrapper";
import { getPostData, getAllPostSlugs, getSortedPostsData } from "@/utils/lib";
import { MERRIWEATHER_FAMILY, DM_MONO_FAMILY } from "@/utils/constants";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/mdx-components";
import Panel from "./containers/Panel";

export function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({params: paramsPromise}) {
    const params = await paramsPromise;
    const post = await getPostData(params.slug);
    if(!post) return {};

    return {
        title: post.title,
        description: post.description || "",
        keywords: post.keywords || [],
        alternates: {
            canonical: `https://nathanhouck.com/insights/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description || "",
            url: `https://nathanhouck.com/insights/${post.slug}`,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description || "",
        }
    }
}

export default async function PostPage({ params: paramsPromise }) {
    const params = await paramsPromise;
    if (!params || !params.slug) return <p>Error: missing slug</p>;

    const post = await getPostData(params.slug);

    const posts = getSortedPostsData();

    return (
        <PageWrapper>
            <Panel currentPost={post} posts={posts} />

            {/* Outer container fills screen and centers content */}
            <div className="min-h-screen w-screen lg:ml-[340px] flex items-center justify-center py-16 lg:py-0 lg:mb-16">
                
                {/* Article constrained in width */}
                <article className="w-full max-w-[580px] text-base font-light line">
                    <div className={`${MERRIWEATHER_FAMILY.className} flex flex-col pt-10 px-5`}>
                        {/* Title */}
                        <h1 className={`${DM_MONO_FAMILY.className} text-[var(--primary-text)] text-2xl`}>
                            {post.title}
                        </h1>

                        {/* Date */}
                        <h4 className={`${DM_MONO_FAMILY.className} text-[var(--tertiary-text)] font-light leading-relaxed mb-5`}>
                            {post.date}
                        </h4>

                        {/* MDX content */}
                        <div className="prose leading-loose font-normal text-[var(--primary-text)]">
                            <MDXRemote source={post.content} components={mdxComponents} />
                        </div>
                    </div>
                </article>
            </div>
        </PageWrapper>
    );
}
