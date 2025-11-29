"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { BookOpenIcon } from "@/modules/design-system/components/icons/book-open";
import { FolderIcon } from "@/modules/design-system/components/icons/folder";
import { HouseIcon } from "@/modules/design-system/components/icons/house";
import { MailIcon } from "@/modules/design-system/components/icons/mail";
import { UserIcon } from "@/modules/design-system/components/icons/user";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/modules/design-system/components/ui/sidebar";

type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

export const navMainData = [
  {
    title: "Home",
    url: "/",
    icon: HouseIcon,
  },
  {
    title: "About",
    url: "/about",
    icon: UserIcon,
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

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={pathname === item.url}
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
        tooltip={item.title}
      >
        <Link href={item.url}>
          {item.icon && <item.icon ref={iconRef} size={16} />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
