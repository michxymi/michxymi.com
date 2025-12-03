import type { Project } from "@/modules/content/schemas/project";
import { SEO_CONFIG } from "../lib/constants";
import { JsonLd } from "./json-ld";

type SoftwareSchemaProps = {
  project: Project;
};

export function SoftwareSchema({ project }: SoftwareSchemaProps) {
  const { frontmatter, url } = project;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${SEO_CONFIG.url}${url}`,
    name: frontmatter.title,
    description: frontmatter.description,
    author: {
      "@type": "Person",
      "@id": `${SEO_CONFIG.url}/#person`,
      name: SEO_CONFIG.author.name,
    },
    programmingLanguage: frontmatter.technologies,
    ...(frontmatter.repoUrl && {
      codeRepository: frontmatter.repoUrl,
    }),
    ...(frontmatter.liveUrl && {
      url: frontmatter.liveUrl,
    }),
    applicationCategory: "DeveloperApplication",
  };

  return <JsonLd data={schema} />;
}
