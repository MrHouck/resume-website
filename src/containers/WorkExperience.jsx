"use client";

import { motion } from "motion/react";
import { slideUp, staggerParent } from "@/utils/animations";
import { JETBRAINS_MONO, SOURCE_SERIF, WORK_EXPERIENCES } from "@/utils/constants";

export default function WorkExperience() {
  return (
    <section className="flex flex-col w-full pt-6">
      <h2 className={`${SOURCE_SERIF.className} text-[28px] font-normal text-(--primary-text) border-b border-(--border) pb-4 mb-2`}>
        Work
      </h2>
      <motion.div className="flex flex-col" variants={staggerParent(0.08)}>
        {WORK_EXPERIENCES.map((exp) => (
          <motion.div
            key={exp.id}
            variants={slideUp}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 border-b border-(--border) last:border-b-0"
          >
            <div className="flex flex-col gap-0.5 flex-1">
              <p className="text-[14px] text-(--primary-text)">
                {exp.title}
                <span className="text-(--tertiary-text)"> · </span>
                <a href={exp.url} className="text-(--secondary-text) hover:text-(--accent) transition-colors">
                  {exp.company}
                </a>
              </p>
              <p className={`${SOURCE_SERIF.className} text-[14px] leading-relaxed text-(--secondary-text)`}>
                {exp.summary}
              </p>
            </div>
            <p className={`${JETBRAINS_MONO.className} text-[10px] tracking-wide text-(--tertiary-text) sm:text-right sm:pl-8 shrink-0`}>
              {exp.time}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
