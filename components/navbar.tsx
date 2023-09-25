"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export type NavItem = {
  title: string;
  url: string;
  icon: React.ReactNode | undefined;
};

export default function NavBar(props: { items: NavItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {props.items.map((item: NavItem) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.url} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.icon || item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
