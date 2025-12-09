import type { Metadata } from "next";
import { ProjectCard } from "@/features/content/components/project-card";
import { getAllProjects } from "@/features/content/lib/projects";
import { PageHeader } from "@/components/navigation/page-header";

const description = "Things I built that didn't immediately catch fire.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  openGraph: {
    title: "Projects",
    description,
  },
  twitter: {
    title: "Projects",
    description,
  },
  alternates: {
    canonical: "/projects",
  },
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
