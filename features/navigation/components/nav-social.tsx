"use client";

import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SOCIAL_LINKS } from "@/lib/social-links";

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
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild tooltip={item.name}>
        <Link href={item.url} rel="noopener noreferrer" target="_blank">
          <item.icon className="h-3.5 w-3.5 text-sidebar-foreground/70" />
          <span>{item.name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
