import type { ReactElement } from "react";
import { z } from "zod";

export const experienceFrontmatterSchema = z.object({
  // Company info (repeated per position for simplicity)
  companyId: z.string(),
  companyName: z.string(),
  companyLogo: z.string().optional(),
  isCurrentEmployer: z.boolean().default(false),

  // Position info
  title: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  employmentType: z.string().optional(),
  icon: z.enum(["code", "design", "business", "education"]).default("code"),
  isExpanded: z.boolean().default(false),
});

export type ExperienceFrontmatter = z.infer<typeof experienceFrontmatterSchema>;

export type ExperiencePosition = {
  slug: string;
  /** Pre-compiled MDX content as React element */
  content: ReactElement;
  frontmatter: ExperienceFrontmatter;
  /** Pre-formatted employment period string (e.g., "April 2023 – ∞") */
  employmentPeriod: string;
};

/** Positions grouped by company for UI rendering */
export type ExperienceGroup = {
  companyId: string;
  companyName: string;
  companyLogo?: string;
  isCurrentEmployer: boolean;
  positions: ExperiencePosition[];
};
