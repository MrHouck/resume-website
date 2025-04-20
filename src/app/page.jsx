"use client";

import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import RegularLayout from "@/components/RegularLayout";
import Main from "@/containers/Main";

import { slideRight, slideUp } from "@/utils/animations";
import { ABOUT_ME } from "@/utils/constants";
import SectionPointer from "@/components/SectionPointer";
import { motion } from "motion/react";
import NavButton from "@/components/NavButton";


export default function Home() {
  return (
    <PageWrapper>
      <RegularLayout>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <Main/>
          <section className="">
            <div>
              <SectionPointer>About</SectionPointer>
              <motion.p 
                className="text-base font-light leading-relaxed mb-5 whitespace-pre-wrap"
                variants={slideUp}
              >
                  {ABOUT_ME}

              </motion.p>
              {/* <motion.p 
                variants={slideLeft}
                initial="hidden"
                animate="visible"
                className="mb-5"
              >
                {ABOUT_ME}
              </motion.p> */}
            </div>
          </section>
          <NavButton pageName="Work Experience" direction="down" href="/work"/>
        </div>
      </RegularLayout>
    </PageWrapper>
  );
}
