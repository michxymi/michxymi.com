import type { Metadata } from "next";
import { ProjectCard } from "@/modules/content/components/project-card";
import { getAllProjects } from "@/modules/content/lib/projects";
import { PageHeader } from "@/modules/design-system/components/navigation/page-header";

export const metadata: Metadata = {
  title: "Projects | Michael Xymitoulias",
  description: "Things I built that didn't immediately catch fire.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div>
      <PageHeader
        description="Things I built that didn't immediately catch fire."
        title="Projects"
      />

      {projects.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No projects yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
