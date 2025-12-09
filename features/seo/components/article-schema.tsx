import type { BlogPost } from "@/features/content/schemas/blog";
import { SEO_CONFIG } from "../lib/constants";
import { JsonLd } from "./json-ld";

const WHITESPACE_REGEX = /\s+/;

type ArticleSchemaProps = {
  post: BlogPost;
};

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const { frontmatter, readingTime, url, content } = post;
  const wordCount = content.split(WHITESPACE_REGEX).length;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SEO_CONFIG.url}${url}`,
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishedAt.toISOString(),
    ...(frontmatter.updatedAt && {
      dateModified: frontmatter.updatedAt.toISOString(),
    }),
    author: {
      "@type": "Person",
      "@id": `${SEO_CONFIG.url}/#person`,
      name: SEO_CONFIG.author.name,
      url: SEO_CONFIG.url,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SEO_CONFIG.url}/#person`,
      name: SEO_CONFIG.author.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SEO_CONFIG.url}${url}`,
    },
    keywords: frontmatter.tags.join(", "),
    wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: "en",
    isPartOf: {
      "@type": "Blog",
      "@id": `${SEO_CONFIG.url}/blog`,
      name: `${SEO_CONFIG.author.name} Blog`,
    },
    ...(frontmatter.coverImage && {
      image: `${SEO_CONFIG.url}${frontmatter.coverImage}`,
    }),
  };

  return <JsonLd data={schema} />;
}
