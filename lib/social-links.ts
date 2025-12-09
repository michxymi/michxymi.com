import { GithubIcon } from "@/components/svgs/github-icon";
import { LinkedinIcon } from "@/components/svgs/linkedin-icon";
import { XIcon } from "@/components/svgs/x-icon";

export type SocialLink = {
  name: string;
  url: string;
  icon: typeof GithubIcon | typeof LinkedinIcon | typeof XIcon;
  description?: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/michxymi",
    icon: GithubIcon,
    description: "@michxymi",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/michxymi",
    icon: XIcon,
    description: "@michxymi",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mxymitoulias/",
    icon: LinkedinIcon,
    description: "/in/mxymitoulias",
  },
] as const;
