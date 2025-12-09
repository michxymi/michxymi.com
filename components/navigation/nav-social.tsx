"use client";

import { useRef } from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SOCIAL_LINKS, type SocialIconHandle } from "@/lib/social-links";
import Link from "next/link";

export function NavSocial() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Social</SidebarGroupLabel>
      <SidebarMenu>
        {SOCIAL_LINKS.map((item) => (
          <NavSocialItem item={item} key={item.name} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavSocialItem({ item }: { item: (typeof SOCIAL_LINKS)[number] }) {
  const iconRef = useRef<SocialIconHandle>(null);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
        tooltip={item.name}
      >
        <Link href={item.url} target="_blank" rel="noopener noreferrer">
          <item.icon
            ref={iconRef}
            size={14}
            className="text-sidebar-foreground/70"
          />
          <span>{item.name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
