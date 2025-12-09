import { GithubIcon, type GithubIconHandle } from "@/components/icons/github";
import {
  LinkedInIcon,
  type LinkedInIconHandle,
} from "@/components/icons/linkedin";
import {
  TwitterIcon,
  type TwitterIconHandle,
} from "@/components/icons/twitter";

export type SocialIconHandle =
  | GithubIconHandle
  | LinkedInIconHandle
  | TwitterIconHandle;

export type SocialLink = {
  name: string;
  url: string;
  icon: typeof GithubIcon | typeof LinkedInIcon | typeof TwitterIcon;
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
    icon: TwitterIcon,
    description: "@michxymi",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mxymitoulias/",
    icon: LinkedInIcon,
    description: "/in/mxymitoulias",
  },
] as const;
