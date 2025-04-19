import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import RegularLayout from "@/components/RegularLayout";
import Main from "@/components/Main";

import { slideUp } from "@/utils/animations";
import { TITLE_TEXT } from "@/utils/constants";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/app/provider";

export default function Home() {
  return (
    <PageWrapper>
      <RegularLayout>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <Main/>
        </div>
      </RegularLayout>
    </PageWrapper>
  );
}
