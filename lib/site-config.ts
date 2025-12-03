import { SOCIAL_LINKS } from "@/modules/design-system/lib/social-links";

export const siteConfig = {
  name: "Michael Xymitoulias",
  description:
    "Technical Software Manager, Software Engineer, and Technical Lead",
  url: "https://michxymi.com",
  author: {
    name: "Michael Xymitoulias",
    twitter: "@michxymi",
    jobTitle: "Technical Software Manager",
    worksFor: "Oxford Nanopore Technologies",
  },
  locale: "en_GB",
  ogImage: "/opengraph-image",
  links: {
    github: "https://github.com/michxymi",
    twitter: "https://x.com/michxymi",
    linkedin: "https://www.linkedin.com/in/mxymitoulias/",
  },
} as const;

// Extract social profile URLs for JSON-LD sameAs property
export const socialProfileUrls = SOCIAL_LINKS.map((link) => link.url);

export type SiteConfig = typeof siteConfig;
