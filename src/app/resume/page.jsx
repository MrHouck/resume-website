import PageWrapper from "@/components/PageWrapper";
import WorkExperience from "@/containers/WorkExperience";
import Education from "@/containers/Education";
import { JETBRAINS_MONO } from "@/utils/constants";

export const metadata = {
  title: "Résumé",
  description: "Work experience and education for Nathan Houck — AI intern at EPI-USE America, aerodynamics grader at Embry-Riddle, B.S. Aerospace Engineering.",
  alternates: { canonical: "https://nathanhouck.com/resume" },
  openGraph: {
    title: "Résumé — Nathan Houck",
    description: "Work experience and education for Nathan Houck.",
    url: "https://nathanhouck.com/resume",
  },
};

export default function Resume() {
  return (
    <PageWrapper>
      <div className="px-5 pt-10 pb-20 lg:pb-8 w-full max-w-200">
        <div className="w-full flex justify-end pt-2 pb-4">
          <a
            href="/NathanHouck-Resume (nathanhouck.com).pdf"
            download
            className={`${JETBRAINS_MONO.className} text-[11px] tracking-widest uppercase px-4 py-2 bg-(--active) text-(--button-text) hover:opacity-90 transition-opacity`}
          >
            Download PDF →
          </a>
        </div>
        <WorkExperience />
        <Education />
      </div>
    </PageWrapper>
  );
}
