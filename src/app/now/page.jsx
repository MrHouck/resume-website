"use client";

import PageWrapper from "@/components/PageWrapper";
import { JETBRAINS_MONO, SOURCE_SERIF } from "@/utils/constants";
import { motion } from "motion/react";
import { staggerParent, slideUp } from "@/utils/animations";

const UPDATED = "May 2026";

const SECTIONS = [
  {
    label: "RESEARCHING",
    heading: "AI tools in engineering workflows",
    paragraphs: [
      "This summer I'm at EPI-USE America as an AI Exploration Intern, evaluating AI tools across their practice areas. The work is hands-on: testing tools, building lightweight prototypes, and writing recommendation briefs for practice leaders. It's an unusual internship role — less \"ship the feature\" and more \"figure out what's actually useful here\" — which requires a more skeptical eye than most software work.",
      "I'm particularly interested in how AI fits inside engineering workflows specifically, not productivity software in general. The design-analyze-test loop in aerospace has different constraints than text-based knowledge work, and most existing AI tooling doesn't reflect that yet. I don't have a clean answer, which is the point of the summer.",
    ],
  },
  {
    label: "GRADING",
    heading: "AE319 Aerodynamics, Embry-Riddle",
    paragraphs: [
      "Grading and providing written feedback on homework for AE319 Aerodynamics. It's my second semester doing this. Grading something forces a cleaner kind of understanding than studying does. You notice quickly which concepts you actually know versus which ones you just pattern-matched through enough problem sets to pass the exam. Helpful in reinforcing the concepts I learned over a year ago.",
    ],
  },
  {
    label: "READING",
    heading: "Schaub & Junkins — Analytical Mechanics of Space Systems",
    paragraphs: [
      "Working through this for my Spacecraft Attitude Dynamics coursework. It is so interesting; spacecraft rotation is a richer problem than it first appears. I find that the concepts from this book have led to a much broader understanding of physics, even with how specific this book gets. There are a lot of things I previously struggled with that now make a lot more sense.",
    ],
  },
];

export default function NowPage() {
  return (
    <PageWrapper>
      <div className="px-5 pt-10 pb-20 lg:pb-8 w-full max-w-160">
        <motion.div className="flex flex-col gap-8" variants={staggerParent(0.08)}>

          {/* Eyebrow */}
          <motion.p
            variants={slideUp}
            className={`${JETBRAINS_MONO.className} text-[11px] tracking-[0.12em] uppercase text-(--accent)`}
          >
            NOW — UPDATED {UPDATED.toUpperCase()}
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={slideUp}
            className={`${SOURCE_SERIF.className} text-[42px] leading-tight font-normal tracking-[-0.02em] text-(--primary-text)`}
          >
            What I'm up to.
          </motion.h1>

          {/* Sections */}
          <motion.div
            variants={slideUp}
            className="flex flex-col gap-12 border-t border-(--border) pt-8"
          >
            {SECTIONS.map((section) => (
              <div key={section.label} className="flex flex-col gap-3">
                <p className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--accent)`}>
                  {section.label}
                </p>
                <h2 className={`${SOURCE_SERIF.className} text-[22px] font-normal tracking-[-0.015em] text-(--primary-text)`}>
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className={`${SOURCE_SERIF.className} text-[17px] leading-[1.65] text-(--secondary-text)`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Footer timestamp */}
          <motion.p
            variants={slideUp}
            className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--tertiary-text) border-t border-(--border) pt-4`}
          >
            Updated monthly — last updated {UPDATED}.
          </motion.p>

        </motion.div>
      </div>
    </PageWrapper>
  );
}
