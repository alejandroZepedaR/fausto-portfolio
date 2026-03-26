import { LandingSection } from "@/components/ui/landing-section";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectType } from "@/lib/projects";
export const LandingProjects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <section className="mb-10">
      <SectionHeader title="PROJECTS" />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </main>
    </section>
  );
};
