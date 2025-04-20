"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { slideUp } from "@/utils/animations";
import { DM_MONO_FAMILY, LOCATION_TEXT, TITLE_TEXT } from "@/utils/constants";
import ActionButtons from "@/containers/ActionButtons";
export default function Main(){
    return (
        <main className="relative flex flex-col items-center self-stretch gap-4">
            <motion.div className="flex flex-col items-center self-stretch gap-4" variants={slideUp}>
                <img src="/headshot.jpg" alt="avatar" className="w-[200px] h-[200px] rounded-full" width="200" height="200"/>
            </motion.div>
            <div className="flex flex-col items-center self-stretch justify-start gap-5">
                <motion.div
                    className="flex flex-col items-center self-stretch justify-start gap-1"
                    variants={slideUp}
                >
                    <h1 className="text-xl font-light text-(--primary-text)">Nathan Houck</h1>
                    <h2 className="text-md font-light text-(--secondary-text)">{TITLE_TEXT}</h2>
                    <h3 className="text-xs font-light text-(--tertiary-text)">{LOCATION_TEXT}</h3>
                </motion.div>
            </div>
            <ActionButtons/>
        </main>
    )
}
