import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import RegularLayout from "@/components/RegularLayout";
import Main from "@/containers/Main";

import { slideLeft, slideUp } from "@/utils/animations";
import { ABOUT_ME } from "@/utils/constants";
import SectionPointer from "@/components/SectionPointer";
import { motion } from "motion/react";
import NavButton from "@/components/NavButton";
import Education from "@/containers/Education";


export default function Work() {
  return (
    <PageWrapper>
      <RegularLayout>
        <div className="flex flex-col items-center justify-center lg:min-h-[85vh] first:mb-5 last:mb-0">
          <NavButton pageName="Work Experience" direction="up" href="/work"/>
          <Education/>
        </div>
      </RegularLayout>
    </PageWrapper>
  );
}
