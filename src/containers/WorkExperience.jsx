"use client";

import {motion} from "motion/react"
import Image from "next/image";
import { slideUp } from "@/utils/animations";
import { DM_MONO_FAMILY, LOCATION_TEXT, TITLE_TEXT } from "@/utils/constants";
import ActionButtons from "@/containers/ActionButtons";
import { WORK_EXPERIENCES } from "@/utils/constants";
import SectionPointer from "@/components/SectionPointer";

export default function WorkExperience(){
    return (
        <main className="relative flex flex-col items-center self-stretch gap-4 pt-10">
            {WORK_EXPERIENCES.map((experience, i) => (
                <div key={i}>
                    <motion.div 
                        initial={{opacity: 0, translateX: 50}}
                        animate={{opacity: 1, translateX: 0}}
                        transition={{duration: 0.3, delay: i*0.5}}
                    >
                        <section className="flex flex-col items-center">
                            <div className="flex flex-row justify-between items-center w-full border-b border-[var(--border)] pb-4 mb-4 lg:p-0 lg:mb-0 lg:top-auto lg:border-b-0">
                                <motion.h2 
                                    className="text-lg font-light tracking-widest uppercase text-[var(--primary-text)] lg:tracking-normal lg:normal-case lg:text-left"
                                    initial={{opacity:0, translateX: -25}}
                                    animate={{opacity:1, translateX: 0}}
                                    transition={{duration: 0.3, delay: i*0.5+WORK_EXPERIENCES.length*0.5}}
                                >
                                    {experience.company}
                                </motion.h2>
                                <div className="flex flex-col text-right">
                                    <p className="text-[var(--nav-button)]">{experience.title}</p>
                                    <p className="text-[var(--background-text)] text-sm">{experience.time}</p>
                                </div>
                            </div>

                            <ul className="pt-0 text-[var(--secondary-text)] mt-2 list-disc list-inside space-y-2">
                                {experience.responsibilities.map((responsibility, i) => (
                                    <li key={i}>{responsibility}</li>
                                ))}

                            </ul>
                        </section>
                    </motion.div>
                </div>
            ))}
        </main>
    )
}
