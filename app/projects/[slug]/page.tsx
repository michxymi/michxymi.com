import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GithubIcon } from "@/components/svgs/github-icon";
import { Button } from "@/components/ui/button";
import { mdxComponents } from "@/features/content/components/mdx/code-block";
import { Prose } from "@/features/content/components/prose";
import {
  generateProjectStaticParams,
  getProject,
} from "@/features/content/lib/projects";
import { PageHeader } from "@/features/navigation/components/page-header";
import { BreadcrumbSchema } from "@/features/seo/components/breadcrumb-schema";
import { SoftwareSchema } from "@/features/seo/components/software-schema";

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

  const { title, description, coverImage } = project.frontmatter;

  return {
    title: `${title} | Projects`,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/projects/${slug}`,
      ...(coverImage && {
        images: [
          {
            url: coverImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(coverImage && {
        images: [coverImage],
      }),
    },
    alternates: {
      canonical: `/projects/${slug}`,
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
    <>
      <SoftwareSchema project={project} />
      <BreadcrumbSchema
        items={[
          { name: "Projects", url: "/projects" },
          { name: project.frontmatter.title, url: project.url },
        ]}
      />
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
                  <GithubIcon className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
        </header>

        <Prose>
          <MDXRemote components={mdxComponents} source={project.content} />
        </Prose>
      </article>
    </>
  );
}
