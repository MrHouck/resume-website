"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { slideSpring, slideUp } from "@/utils/animations";

const InsightsSidebar = ({ title, isOpen, setIsOpen, children }) => {
    return (
        <>
            <div className="fixed top-0 z-40 flex items-center justify-between w-screen h-16 px-4 border-[var(--border)] lg:hidden border-border bg-[var(--bg)] lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col">
                <h1 className="text-base font-light text-[var(--primary-text)]">{title}</h1>
                <Menu size="20" className="cursor-pointer text-gray"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div className="hidden fixed top-0 left-[64px] lg:block px-3 pt-10 pb-20 w-[340px] border-[var(--border)] border-r border-r-border h-screen overflow-auto">
                {children}
            </div>
            {isOpen && (
                <>
                <motion.div
                variants={slideSpring["left"]}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed top-0 left-0 px-5 pt-10 pb-20 w-[340px] z-40 h-screen overflow-auto bg-[var(--bg)]"
                >
                    {children}
                </motion.div>
                <motion.div
                    variants={slideUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="fixed top-0 left-0 z-30 w-screen h-screen bg-black bg-opacity-40"
                    onClick={()=>setIsOpen(!isOpen)}
                />
                </>
            )}
        </>
    )
}
export default InsightsSidebar;
