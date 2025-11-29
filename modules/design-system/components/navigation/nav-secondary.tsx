"use client";

import Link from "next/link";
import type * as React from "react";
import { useRef } from "react";
import {
  type DownloadHandle,
  DownloadIcon,
} from "@/modules/design-system/components/icons/download";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/modules/design-system/components/ui/sidebar";

export function NavSecondary({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const downloadRef = useRef<DownloadHandle>(null);

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              onMouseEnter={() => downloadRef.current?.startAnimation()}
              onMouseLeave={() => downloadRef.current?.stopAnimation()}
              size="lg"
              tooltip="Download CV"
            >
              <Link download href="/resume.pdf">
                <DownloadIcon ref={downloadRef} size={22} />
                <span className="group-data-[collapsible=icon]:hidden">
                  Download CV
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
