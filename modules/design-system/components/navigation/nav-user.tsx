import { FlipSentences } from "@/modules/content/components/flip-sentences";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/modules/design-system/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/modules/design-system/components/ui/sidebar";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2 px-2 py-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <Avatar className="size-12 shrink-0 rounded-full group-data-[collapsible=icon]:size-8">
            <AvatarImage alt="Michael Xymitoulias" src="/avatar.webp" />
            <AvatarFallback className="rounded-full">MX</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 gap-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate font-bold">Michael Xymitoulias</span>
            <FlipSentences className="truncate font-semibold text-muted-foreground text-xs">
              <>Software Engineer</>
              <>Engineering Manager</>
              <>Developer Experience Enthusiast</>
            </FlipSentences>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
