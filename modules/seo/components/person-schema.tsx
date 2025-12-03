import { SEO_CONFIG } from "../lib/constants";
import { JsonLd } from "./json-ld";

type PersonSchemaProps = {
  enhanced?: boolean;
};

export function PersonSchema({ enhanced = false }: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SEO_CONFIG.url}/#person`,
    name: SEO_CONFIG.author.name,
    alternateName: "michxymi",
    jobTitle: SEO_CONFIG.author.jobTitle,
    url: SEO_CONFIG.url,
    sameAs: SEO_CONFIG.socialProfileUrls,
    ...(enhanced && {
      worksFor: {
        "@type": "Organization",
        name: SEO_CONFIG.author.worksFor,
      },
      knowsAbout: [
        "Software Engineering",
        "Technical Leadership",
        "Developer Tools",
        "React",
        "Typescript",
        "Python",
        "C++",
        "NextJS",
      ],
      description:
        "Technical Software Manager with expertise in developer tools, software engineering, and technical leadership.",
    }),
  };

  return <JsonLd data={schema} />;
}
