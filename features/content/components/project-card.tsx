import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/svgs/github-icon";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "../schemas/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="group block" href={project.url}>
      <Card className="h-full py-4 transition-colors hover:bg-muted/30">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="font-display text-lg transition-colors group-hover:text-primary">
              {project.frontmatter.title}
            </CardTitle>
            {project.frontmatter.featured && (
              <Badge className="shrink-0" variant="secondary">
                Featured
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-2">
            {project.frontmatter.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex flex-wrap gap-1">
            {project.frontmatter.technologies.slice(0, 4).map((tech) => (
              <Badge className="font-mono text-xs" key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.frontmatter.technologies.length > 4 && (
              <span className="px-1 text-muted-foreground text-xs">
                +{project.frontmatter.technologies.length - 4}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <div className="flex w-full items-center gap-3 text-muted-foreground text-xs">
            <Badge
              className={(() => {
                if (project.frontmatter.status === "completed") {
                  return "border-green-500/30 bg-green-500/10 text-green-500";
                }
                if (project.frontmatter.status === "active") {
                  return "border-blue-500/30 bg-blue-500/10 text-blue-500";
                }
                if (project.frontmatter.status === "in-progress") {
                  return "border-yellow-500/30 bg-yellow-500/10 text-yellow-500";
                }
                return "";
              })()}
              variant="outline"
            >
              {project.frontmatter.status}
            </Badge>
            {(project.frontmatter.liveUrl || project.frontmatter.repoUrl) && (
              <div className="ml-auto flex items-center gap-2">
                {project.frontmatter.repoUrl && (
                  <GithubIcon className="h-3.5 w-3.5" />
                )}
                {project.frontmatter.liveUrl && (
                  <ExternalLink className="h-3.5 w-3.5" />
                )}
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
