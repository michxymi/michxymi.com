import type * as React from "react";
import { NavMain } from "@/features/design-system/components/navigation/nav-main";
import { NavSecondary } from "@/features/design-system/components/navigation/nav-secondary";
import { NavSocial } from "@/features/design-system/components/navigation/nav-social";
import { NavUser } from "@/features/design-system/components/navigation/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/features/design-system/components/ui/sidebar";

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
