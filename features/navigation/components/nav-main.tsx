"use client";

import { Activity, BookOpen, FolderOpen, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export const navMainData = [
  {
    title: "About",
    url: "/",
    icon: User,
  },
  {
    title: "Now",
    url: "/now",
    icon: Activity,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: BookOpen,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
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
        tooltip={item.title}
      >
        <Link href={item.url} onClick={handleClick}>
          {item.icon && (
            <item.icon className="text-sidebar-foreground/70" size={14} />
          )}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
