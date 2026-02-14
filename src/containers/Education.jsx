"use client";

import {motion} from "motion/react"
import Image from "next/image";
import { slideUp } from "@/utils/animations";
import { DM_MONO_FAMILY, EDUCATION } from "@/utils/constants";
import ActionButtons from "@/containers/ActionButtons";
import SectionPointer from "@/components/SectionPointer";

export default function Education(){
    return (
        <main className="relative flex flex-col items-center self-stretch gap-4 pt-10">
            {EDUCATION.map((education, i) => (
                <div key={i}>
                    <motion.div 
                        initial={{opacity: 0, translateX: 50}}
                        animate={{opacity: 1, translateX: 0}}
                        transition={{duration: 0.3, delay: i*0.5}}
                    >
                        <section className="flex flex-col items-center">
                            <div className="flex flex-row justify-between items-center w-full border-b border-[var(--border)] pb-4 mb-4 lg:p-0 lg:mb-0 lg:top-auto">
                                <motion.h2 
                                    className="text-lg font-light tracking-widest uppercase text-[var(--primary-text)] lg:tracking-normal lg:normal-case lg:text-left mr-4"
                                    initial={{opacity:0, translateX: -25}}
                                    animate={{opacity:1, translateX: 0}}
                                    transition={{duration: 1, delay: i/2}}
                                >
                                    <a href={education.url}>{education.school}</a>
                                </motion.h2>
                                <div className="flex flex-col text-right">
                                    <p className="text-[var(--nav-button)]">{education.gpa}</p>
                                    <p className="text-[var(--background-text)] text-sm">{education.time}</p>
                                </div>
                            </div>

                            <ul className="pt-0 text-[var(--secondary-text)] mt-2 list-disc list-inside space-y-2 self-start">
                                {education.activities.map((activity, i) => (
                                    <li key={i}>{activity}</li>
                                ))}

                            </ul>
                        </section>
                    </motion.div>
                </div>
            ))}
        </main>
    )
}
