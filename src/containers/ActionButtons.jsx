"use client";

import { motion } from "motion/react"

import { Mail } from "lucide-react";
import { useState } from "react";
import { slideLeft, slideRight, slideUp } from "@/utils/animations";


const ActionButtons = () => {
    const [slide, setSlide] = useState(false);
    return (
        <motion.div
            className="flex flex-col items-center justify-center w-full gap-2 md:flex-row md:gap-4"
            variants={slideUp}
            onUpdate={(latest) => {
                if (latest.opacity === 1) {
                    setSlide(true);
                } else if (latest.opacity !== 0 && slide) {
                    setSlide(false);
                }
            }}
        >
            <motion.a
                variants={slideLeft}
                initial="hidden"
                animate={slide ? "visible" : "hidden"}
                className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-[var(--active)] text-[var(--button-text)] rounded-lg justify-center items-center gap-2.5 flex border border-border "
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.95, translateY: -2 }}

                href="mailto:nathan.c.houck@gmail.com"
            >
                <p className="text-base font-light text-bg ">Contact me</p>
                <Mail className="w-5 h-5 text-gray " />
            </motion.a>
            <div className="hidden font-light text-[#8a8a8a] md:block">or</div>
            <motion.a
            variants={slideRight}
            initial="hidden"
            animate={slide ? "visible" : "hidden"}
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95, translateY: -2 }}
            href="/NathanHouck-Resume (nathanhouck.com).pdf"
            expandclassname="bg-fg rounded-lg"
            className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-[var(--secondary-button)] rounded-lg border-border justify-center items-center gap-2.5 flex"
        >
            <p className="text-base font-light text-pg " variants={slideUp}>
            Get full resume
            </p>
        </motion.a>
        </motion.div>
    )
}

export default ActionButtons;