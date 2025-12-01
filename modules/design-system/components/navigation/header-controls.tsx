"use client";

import { PanelLeftIcon } from "lucide-react";
import { ThemeSwitcher } from "@/modules/design-system/components/theme-switcher";
import { useSidebar } from "@/modules/design-system/components/ui/sidebar";

function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      aria-label="Toggle Sidebar"
      className="flex size-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50 [&_svg]:size-4"
      onClick={toggleSidebar}
      type="button"
    >
      <PanelLeftIcon />
    </button>
  );
}

export function HeaderControls() {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex size-8 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200 ring-inset dark:bg-zinc-950 dark:ring-zinc-700">
        <SidebarToggle />
      </div>
      <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700" />
      <ThemeSwitcher />
    </div>
  );
}
