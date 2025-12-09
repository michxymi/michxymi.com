"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { BookOpenIcon } from "@/components/icons/book-open";
import { FolderIcon } from "@/components/icons/folder";
import { UserIcon } from "@/components/icons/user";
import { MailIcon } from "@/components/icons/mail";
import { StatsIcon } from "@/components/icons/stats";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

export const navMainData = [
  {
    title: "About",
    url: "/",
    icon: UserIcon,
  },
  {
    title: "Now",
    url: "/now",
    icon: StatsIcon,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderIcon,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: BookOpenIcon,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: MailIcon,
  },
];

export function NavMain() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMainData.map((item) => (
          <NavMainItem item={item} key={item.title} pathname={pathname} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavMainItem({
  item,
  pathname,
}: {
  item: (typeof navMainData)[number];
  pathname: string;
}) {
  const iconRef = useRef<IconHandle>(null);
  const { isMobile, setOpenMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={pathname === item.url}
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
        tooltip={item.title}
      >
        <Link href={item.url} onClick={handleClick}>
          {item.icon && (
            <item.icon
              ref={iconRef}
              size={14}
              className="text-sidebar-foreground/70"
            />
          )}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
