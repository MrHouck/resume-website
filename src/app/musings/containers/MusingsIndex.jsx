"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { JETBRAINS_MONO, SOURCE_SERIF } from "@/utils/constants";
import { slideUp, staggerParent } from "@/utils/animations";

const KINDS = ["All", "Essay", "Short Story", "Poem"];

export default function MusingsIndex({ posts }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? posts
    : posts.filter((p) => p.category === active);

  const countFor = (kind) =>
    kind === "All" ? posts.length : posts.filter((p) => p.category === kind).length;

  return (
    <div className="px-5 pt-10 pb-20 lg:pb-8 w-full max-w-200">
      <motion.div className="flex flex-col gap-6" variants={staggerParent(0.08)}>
        {/* Eyebrow */}
        <motion.p
          variants={slideUp}
          className={`${JETBRAINS_MONO.className} text-[11px] tracking-[0.12em] uppercase text-(--accent)`}
        >
          MUSINGS
        </motion.p>

        {/* H1 */}
        <motion.h1
          variants={slideUp}
          className={`${SOURCE_SERIF.className} text-[42px] leading-tight font-normal tracking-[-0.02em] text-(--primary-text)`}
        >
          The inside of my brain.
        </motion.h1>

        {/* Filter row */}
        <motion.div
          variants={slideUp}
          className={`${JETBRAINS_MONO.className} flex flex-wrap gap-5 text-[11px] tracking-widest uppercase border-b border-(--border) pb-4`}
        >
          {KINDS.map((kind) => (
            <button
              key={kind}
              onClick={() => setActive(kind)}
              className={`transition-colors cursor-pointer ${
                active === kind
                  ? "text-(--accent) border border-(--accent) px-2 py-0.5"
                  : "text-(--secondary-text) hover:text-(--primary-text)"
              }`}
            >
              {kind} ({countFor(kind)})
            </button>
          ))}
        </motion.div>

        {/* Post rows */}
        <motion.div
          key={active}
          className="flex flex-col"
          variants={staggerParent(0.06)}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((post) => (
            <motion.a
              key={post.slug}
              href={`/musings/${post.slug}`}
              variants={slideUp}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 px-2 -mx-2 border-b border-(--border) hover:bg-(--button-highlight) transition-colors"
            >
              <span className={`${JETBRAINS_MONO.className} text-[11px] text-(--tertiary-text) shrink-0 w-28`}>
                {post.date}
              </span>

              <div className="flex flex-col gap-0.5 flex-1">
                <span className={`${SOURCE_SERIF.className} text-[20px] text-(--primary-text) leading-snug`}>
                  {post.title}
                </span>
                {post.description && (
                  <span className={`${SOURCE_SERIF.className} text-[13px] italic text-(--secondary-text)`}>
                    — {post.description}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--secondary-text)`}>
                  {post.category}
                </span>
                <ArrowRight
                  size={13}
                  className="text-(--tertiary-text) group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
