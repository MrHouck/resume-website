"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { slideUp, staggerParent } from "@/utils/animations";
import { JETBRAINS_MONO, PROJECTS_INFO, SOURCE_SERIF } from "@/utils/constants";

const CATEGORIES = ["All", "Research", "Team", "Patent"];

function renderBold(text) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="font-semibold text-(--primary-text)">{part.slice(2, -2)}</strong>
      : part
  );
}

function ImagePlaceholder() {
  return (
    <div
      className="w-full aspect-video flex items-center justify-center"
      style={{
        background: "repeating-linear-gradient(-45deg, #1c1c1c, #1c1c1c 3px, #202020 3px, #202020 7px)",
      }}
    >
      <span className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--tertiary-text)`}>
        [ img — coming ]
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article variants={slideUp} className="flex flex-col gap-3 pb-8 border-b border-(--border)">
      {project.image
        ? <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
        : <ImagePlaceholder />}

      <div className="flex flex-col gap-2 pt-1">
        <p className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--secondary-text)`}>
          <span className="text-(--accent)">{project.category}</span>
          {" · "}
          {project.time}
        </p>

        <h2 className={`${SOURCE_SERIF.className} text-[22px] leading-tight font-normal tracking-[-0.01em] text-(--primary-text)`}>
          <a href={project.url} className="hover:text-(--accent) transition-colors">
            {project.title}
          </a>
        </h2>

        <p className="text-[13px] text-(--secondary-text)">
          {project.org} · {project.role}
        </p>

        <p className={`${SOURCE_SERIF.className} text-[15px] leading-relaxed text-(--secondary-text)`}>
          {renderBold(project.summary)}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`${JETBRAINS_MONO.className} text-[10px] tracking-wide uppercase px-2 py-0.5 border border-(--border) text-(--secondary-text)`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PROJECTS_INFO
    : PROJECTS_INFO.filter((p) => p.category === active);

  return (
    <main className="flex flex-col gap-6 pt-6 w-full">
      {/* Filter row */}
      <div className={`${JETBRAINS_MONO.className} flex gap-5 text-[11px] tracking-widest uppercase border-b border-(--border) pb-4`}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`transition-colors cursor-pointer ${
              active === cat
                ? "text-(--accent) border border-(--accent) px-2 py-0.5"
                : "text-(--secondary-text) hover:text-(--primary-text)"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2-column card grid */}
      <motion.div
        key={active}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0"
        variants={staggerParent(0.1)}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </main>
  );
}
