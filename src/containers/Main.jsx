"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { slideUp, staggerParent } from "@/utils/animations";
import { JETBRAINS_MONO, LEDE_TEXT, LOCATION_TEXT, NOW_ITEMS, SOURCE_SERIF } from "@/utils/constants";

export default function Main() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const parts = ["nathan", "nathanhouck", "com"];
    setEmail(`${parts[0]}@${parts[1]}.${parts[2]}`);
  }, []);

  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 lg:gap-16 items-start">
      {/* Left column: text content */}
      <motion.div className="flex flex-col gap-6" variants={staggerParent(0.08)}>
        {/* Headline */}
        <motion.h1
          variants={slideUp}
          className={`${SOURCE_SERIF.className} text-[42px] lg:text-[58px] leading-[1.1] font-normal tracking-[-0.02em] text-(--primary-text)`}
        >
          Aerospace student exploring{" "}
          <span className="italic text-(--accent)">AI tools</span>{" "}
          and running wind tunnel experiments.
        </motion.h1>

        {/* Location row */}
        <motion.p
          variants={slideUp}
          className={`${JETBRAINS_MONO.className} text-[11px] tracking-wide text-(--secondary-text)`}
        >
          {LOCATION_TEXT}
        </motion.p>

        {/* Lede */}
        <motion.p
          variants={slideUp}
          className={`${SOURCE_SERIF.className} text-[18px] leading-[1.6] text-(--secondary-text) max-w-130`}
        >
          {LEDE_TEXT}
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={slideUp}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1"
        >
          <a
            href="/NathanHouck-Resume (nathanhouck.com).pdf"
            className="px-6 py-2 bg-(--active) text-(--button-text) text-sm rounded hover:opacity-90 transition-opacity"
          >
            Download résumé →
          </a>
          {email && (
            <a
              href={`mailto:${email}`}
              className={`${JETBRAINS_MONO.className} text-[12px] text-(--accent) underline underline-offset-2 hover:opacity-80 transition-opacity`}
            >
              {email}
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* Right column: portrait + now block */}
      <motion.div className="flex flex-col gap-5 w-full" variants={slideUp}>
        {/* Editorial portrait */}
        <div className="flex flex-col gap-2">
          <div className="w-full aspect-4/5 overflow-hidden">
            <img
              src="/headshot.jpg"
              alt="Nathan Houck, Daytona Beach, 2026"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Now block */}
        <div className="flex flex-col gap-3 border-t border-(--border) pt-4">
          {NOW_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col gap-0.5">
              <span className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--accent)`}>
                {item.label}
              </span>
              <span className="text-[13px] text-(--secondary-text) leading-snug">
                {item.value}
              </span>
            </div>
          ))}
          <a
            href="/now"
            className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--tertiary-text) hover:text-(--secondary-text) transition-colors pt-1`}
          >
            full now →
          </a>
        </div>
      </motion.div>
    </main>
  );
}
