"use client";

import PageWrapper from "@/components/PageWrapper";
import Main from "@/containers/Main";

export default function Home() {
  return (
    <PageWrapper>
      <div className="px-5 w-full max-w-240 min-h-screen flex items-center py-12">
        <Main />
      </div>
    </PageWrapper>
  );
}
