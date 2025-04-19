import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import RegularLayout from "@/components/RegularLayout";
import Main from "@/containers/Main";

import { slideLeft, slideUp } from "@/utils/animations";
import { ABOUT_ME } from "@/utils/constants";
import SectionPointer from "@/components/SectionPointer";
import { motion } from "motion/react";
import NavButton from "@/components/NavButton";
import WorkExperience from "@/containers/WorkExperience";


export default function Work() {
  return (
    <PageWrapper>
      <RegularLayout>
        <div className="flex flex-col items-center first:mb-5 last:mb-0">
          <NavButton pageName="About Me" direction="up" href="/"/>
          <WorkExperience/>
          <NavButton pageName="Education" direction="down" href="/edu"/>
        </div>
      </RegularLayout>
    </PageWrapper>
  );
}
