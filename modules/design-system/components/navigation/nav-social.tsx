"use client";

import { useRef } from "react";
import {
  GithubIcon,
  type GithubIconHandle,
} from "@/modules/design-system/components/icons/github";
import {
  LinkedInIcon,
  type LinkedInIconHandle,
} from "@/modules/design-system/components/icons/linkedin";
import {
  TwitterIcon,
  type TwitterIconHandle,
} from "@/modules/design-system/components/icons/twitter";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/modules/design-system/components/ui/sidebar";
import Link from "next/link";

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/michxymi",
    icon: GithubIcon,
  },
  {
    name: "X",
    url: "https://x.com/michxymi",
    icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mxymitoulias/",
    icon: LinkedInIcon,
  },
] as const;

export function NavSocial() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Social</SidebarGroupLabel>
      <SidebarMenu>
        {socialLinks.map((item) => (
          <NavSocialItem item={item} key={item.name} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavSocialItem({ item }: { item: (typeof socialLinks)[number] }) {
  const iconRef = useRef<
    GithubIconHandle | LinkedInIconHandle | TwitterIconHandle
  >(null);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
        tooltip={item.name}
      >
        <Link href={item.url} target="_blank" rel="noopener noreferrer">
          <item.icon ref={iconRef} size={16} />
          <span>{item.name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
