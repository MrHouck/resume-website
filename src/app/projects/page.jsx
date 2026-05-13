import PageWrapper from "@/components/PageWrapper";
import ProjectsContainer from "@/containers/Projects";

export const metadata = {
  title: "Projects",
  description: "Aerospace engineering projects by Nathan Houck — aerodynamics research, submarine cooling systems, and jet engine propulsion.",
  alternates: { canonical: "https://nathanhouck.com/projects" },
  openGraph: {
    title: "Projects — Nathan Houck",
    description: "Aerodynamics research, submarine cooling systems, and jet engine propulsion.",
    url: "https://nathanhouck.com/projects",
  },
};

export default function Projects() {
  return (
    <PageWrapper>
      <div className="px-5 pt-10 pb-20 lg:pb-8 w-full max-w-240">
        <ProjectsContainer />
      </div>
    </PageWrapper>
  );
}
