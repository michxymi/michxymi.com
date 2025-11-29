import type * as React from "react";
import { NavMain } from "@/modules/design-system/components/navigation/nav-main";
import { NavSecondary } from "@/modules/design-system/components/navigation/nav-secondary";
import { NavSocial } from "@/modules/design-system/components/navigation/nav-social";
import { NavUser } from "@/modules/design-system/components/navigation/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/modules/design-system/components/ui/sidebar";

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
