"use client";

import { motion } from "motion/react";
import { slideUp } from "@/utils/animations";

const SectionPointer = ({ children, showWhenSmall = true }) => {
    return (
        <motion.div
            variants={slideUp}
            className={`sticky border-b border-border -top-px z-10 mb-3 py-4 lg:block lg:p-0
                lg:top-auto lg:border-b-0 transition-colors ${showWhenSmall ? "" : "hidden"}`}
        >
            <h2 className="font-light tracking-widest uppercase text-[var(--nav-button)] lg:tracking-normal lg:normal-case lg:text-left lg:absolute lg:right-150">
                {children}
            </h2>


        </motion.div>
    )
}

export default SectionPointer;