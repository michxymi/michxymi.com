import type * as React from "react";
import { NavMain } from "@/features/navigation/components/nav-main";
import { NavSecondary } from "@/features/navigation/components/nav-secondary";
import { NavSocial } from "@/features/navigation/components/nav-social";
import { NavUser } from "@/features/navigation/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavSocial />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
