"use client";

import { motion } from "motion/react";
import { slideUp, staggerParent } from "@/utils/animations";
import { JETBRAINS_MONO, SOURCE_SERIF, EDUCATION } from "@/utils/constants";

export default function Education() {
  return (
    <section className="flex flex-col w-full pt-10">
      <h2 className={`${SOURCE_SERIF.className} text-[28px] font-normal text-(--primary-text) border-b border-(--border) pb-4 mb-2`}>
        Education
      </h2>
      <motion.div className="flex flex-col gap-6 pt-4" variants={staggerParent(0.08)}>
        {EDUCATION.map((edu) => (
          <motion.div key={edu.id} variants={slideUp} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <a
                href={edu.url}
                className={`${SOURCE_SERIF.className} text-[18px] font-normal text-(--primary-text) hover:text-(--accent) transition-colors`}
              >
                {edu.school}
              </a>
              <p className={`${JETBRAINS_MONO.className} text-[10px] tracking-wide text-(--tertiary-text) sm:text-right`}>
                GPA {edu.gpa} · {edu.time}
              </p>
            </div>

            {edu.honors.length > 0 && (
              <ul className="flex flex-col gap-0.5">
                {edu.honors.map((h, i) => (
                  <li key={i} className={`${JETBRAINS_MONO.className} text-[10px] tracking-wide uppercase text-(--accent)`}>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <ul className="list-disc list-inside flex flex-col gap-1 pt-1">
              {edu.activities.map((activity, i) => (
                <li key={i} className="text-[13px] text-(--secondary-text)">
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
