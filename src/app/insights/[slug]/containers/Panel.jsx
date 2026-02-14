"use client";

import { useState } from "react";
import InsightsSidebar from "@/components/InsightsSidebar";
import { useAppContext } from "@/app/provider";
import { slideUp, slideSpring } from "@/utils/animations";
import { motion } from "motion/react";

function sortPostsAroundCurrent(posts, currentPost) {
    const currentIdx = posts.findIndex(post => post.slug === currentPost.slug);
    if (currentIdx === -1) {
        return posts;
    }
    const before = posts.slice(0, currentIdx);
    const after = posts.slice(currentIdx + 1);
    return [...after, ...before]; //conveniently remove the current post as well here

}

const Panel = ({ currentPost, posts }) => {
    const { handlePageChange } = useAppContext();
    const [isPanelOpen, setIsPanelOpen] = useState(false);


    posts = sortPostsAroundCurrent(posts, currentPost);

    return (
        <InsightsSidebar title="Insights" isOpen={isPanelOpen} setIsOpen={setIsPanelOpen}>
            <nav aria-label="Blog posts navigation">
                <motion.h2
                    variants={slideUp}
                    className="pl-3 mb-1 text-base font-light text-white"
                >
                    Insights
                </motion.h2>
                <section aria-label="Current post" className="border-b border-[var(--border)]">
                    <motion.h3
                        variants={slideUp}
                        className="pl-3 mb-4 text-base font-light text-[var(--secondary-text)]"
                    >
                        You're reading:
                    </motion.h3>
                    <motion.article
                        variants={slideSpring["left"]}
                        className="inline-flex items-start justify-start w-full gap-4 p-3 mb-4 rounded-lg bg-[var(--fg)]"

                    >
                        <div className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
                            <h4 className="text-[var(--primary-text)]">{currentPost.title}</h4>
                            <div className="mt-1 text-[var(--secondary-text)] flex flex-row gap-2">
                                <h4>{currentPost["date-stylized"]}</h4>
                                {" ⋅ "}
                                <span>{currentPost.category}</span>
                            </div>
                        </div>

                    </motion.article>

                </section>
                <section aria-label="Suggested Posts" className="mt-3">
                    <motion.h3
                        variants={slideUp}
                        className="pl-3 text-base font-light text-white"
                    >
                        Up next
                    </motion.h3>
                    <ul className="flex flex-col gap-2 p-0 list-none">
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <motion.a
                                    href={`/insights/${post.slug}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(`/insights/${post.slug}`)
                                    }}
                                    variants={slideSpring["left"]}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="block w-full gap-4 p-3 rounded-lg hover:bg-[var(--fg)]"
                                >
                                    <article className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
                                        <h4 className="text-[var(--secondary-text)]">{post.title}</h4>
                                        <div className="mt-1 text-[var(--tertiary-text)] flex flex-row gap-2">
                                            <h4>{post["date-stylized"]}</h4>
                                            {" ⋅ "}
                                            <span>{post.category}</span>
                                        </div>

                                    </article>
                                </motion.a>
                            </li>


                        ))}
                    </ul>
                </section>
            </nav>

        </InsightsSidebar>

    )

}
export default Panel;