import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  InfinityIcon,
} from "lucide-react";
import Image from "next/image";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Prose } from "@/features/content/components/prose";
import type { ExperienceGroup, ExperiencePosition } from "@/features/content/schemas/experience";
import { cn } from "@/lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: ExperienceGroup[];
}) {
  return (
    <div className={cn("bg-background px-4", className)}>
      {experiences.map((experience) => (
        <ExperienceItem experience={experience} key={experience.companyId} />
      ))}
    </div>
  );
}

function ExperienceItem({
  experience,
}: {
  experience: ExperienceGroup;
}) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex items-center gap-3">
        <div
          aria-hidden
          className="flex size-6 shrink-0 items-center justify-center"
        >
          {experience.companyLogo ? (
            <Image
              alt={`${experience.companyName} logo`}
              className="size-6 object-contain dark:invert"
              height={24}
              quality={100}
              sizes="24px"
              src={experience.companyLogo}
              width={24}
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="font-medium text-foreground text-lg leading-snug">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.slug} position={position} />
        ))}
      </div>
    </div>
  );
}

function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const ExperienceIcon = iconMap[position.frontmatter.icon];

  return (
    <Collapsible asChild defaultOpen={position.frontmatter.isExpanded}>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "group/experience not-prose block w-full select-none text-left",
            "before:-top-1 before:-right-1 before:-bottom-1.5 relative before:absolute before:left-7 before:rounded-lg hover:before:bg-muted/50"
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              aria-hidden
              className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
            >
              <ExperienceIcon className="size-4" />
            </div>

            <h4 className="flex-1 text-balance font-medium text-base text-foreground">
              {position.frontmatter.title}
            </h4>

            <div
              aria-hidden
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
            >
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
            </div>
          </div>

          <div className="relative z-1 flex items-center gap-2 pl-9 text-muted-foreground text-sm">
            {position.frontmatter.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.frontmatter.employmentType}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-1">
                {position.employmentPeriod.includes("∞") ? (
                  <>
                    {position.employmentPeriod.replace("∞", "").trim()}
                    <InfinityIcon className="size-4" />
                  </>
                ) : (
                  position.employmentPeriod
                )}
              </dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <Prose className="pt-2 pl-9 font-mono">
            {position.content}
          </Prose>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
