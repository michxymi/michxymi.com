import { ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose } from "@/modules/content/components/prose";
import {
  generateProjectStaticParams,
  getProject,
} from "@/modules/content/lib/projects";
import { PageHeader } from "@/modules/design-system/components/navigation/page-header";
import { Button } from "@/modules/design-system/components/ui/button";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return generateProjectStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.frontmatter.title} | Projects | Michael Xymitoulias`,
    description: project.frontmatter.description,
    openGraph: {
      type: "website",
      title: project.frontmatter.title,
      description: project.frontmatter.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <Link
        className="mb-6 inline-flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-primary"
        href="/projects"
      >
        &larr; Back to projects
      </Link>

      <header className="mb-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <PageHeader title={project.frontmatter.title} />
          <span
            className={`shrink-0 rounded px-2 py-1 text-xs ${(() => {
              if (project.frontmatter.status === "completed") {
                return "bg-green-500/10 text-green-500";
              }
              if (project.frontmatter.status === "active") {
                return "bg-blue-500/10 text-blue-500";
              }
              if (project.frontmatter.status === "in-progress") {
                return "bg-yellow-500/10 text-yellow-500";
              }
              return "bg-muted text-muted-foreground";
            })()}`}
          >
            {project.frontmatter.status}
          </span>
        </div>

        <p className="mb-4 text-muted-foreground">
          {project.frontmatter.description}
        </p>

        {project.frontmatter.technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.frontmatter.technologies.map((tech) => (
              <span
                className="rounded bg-muted px-2 py-0.5 font-mono text-xs"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.frontmatter.liveUrl && (
            <Button
              asChild
              className="font-display"
              size="sm"
              variant="default"
            >
              <Link
                href={project.frontmatter.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.frontmatter.repoUrl && (
            <Button
              asChild
              className="font-display"
              size="sm"
              variant="outline"
            >
              <Link
                href={project.frontmatter.repoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
        </div>
      </header>

      <Prose>
        <MDXRemote source={project.content} />
      </Prose>
    </article>
  );
}
