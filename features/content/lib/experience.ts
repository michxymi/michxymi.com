import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  type ExperienceGroup,
  type ExperiencePosition,
  experienceFrontmatterSchema,
} from "../schemas/experience";
import { getContentDir, getMdxFiles, parseMdxFile } from "./mdx";

const EXPERIENCE_DIR = getContentDir("experience");

/**
 * Formats a date range into a human-readable employment period string.
 * @example formatEmploymentPeriod(new Date("2023-04-01")) => "April 2023 – ∞"
 * @example formatEmploymentPeriod(new Date("2021-11-01"), new Date("2023-04-01")) => "November 2021 – April 2023"
 */
function formatEmploymentPeriod(startDate: Date, endDate?: Date): string {
  const formatDate = (date: Date): string =>
    date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "∞";

  return `${start} – ${end}`;
}

/**
 * Loads and parses all experience MDX files.
 * Returns positions sorted by startDate descending (newest first).
 * Content is compiled to React elements for server-side rendering.
 */
export async function getAllExperiences(): Promise<ExperiencePosition[]> {
  const files = await getMdxFiles(EXPERIENCE_DIR);

  const positionPromises = files.map(async (filePath) => {
    const slug = path.basename(filePath, ".mdx");

    try {
      const { content: rawContent, frontmatter } = await parseMdxFile(
        filePath,
        experienceFrontmatterSchema
      );

      // Compile markdown to React elements
      const { content } = await compileMDX({
        source: rawContent,
        options: { parseFrontmatter: false },
      });

      return {
        slug,
        content,
        frontmatter,
        employmentPeriod: formatEmploymentPeriod(
          frontmatter.startDate,
          frontmatter.endDate
        ),
      } satisfies ExperiencePosition;
    } catch (error) {
      console.error(`Failed to parse experience ${filePath}:`, error);
      return null;
    }
  });

  const results = await Promise.all(positionPromises);
  const positions = results.filter(
    (pos): pos is NonNullable<typeof pos> => pos !== null
  );

  // Sort by startDate descending (newest first)
  positions.sort(
    (a, b) =>
      b.frontmatter.startDate.getTime() - a.frontmatter.startDate.getTime()
  );

  return positions;
}

/**
 * Groups experience positions by company for UI rendering.
 * Companies are ordered by their most recent position's start date.
 * Positions within each company are sorted by startDate descending.
 */
export async function getExperiencesGroupedByCompany(): Promise<
  ExperienceGroup[]
> {
  const positions = await getAllExperiences();

  // Group positions by companyId
  const companyMap = new Map<string, ExperienceGroup>();

  for (const position of positions) {
    const { companyId, companyName, companyLogo, isCurrentEmployer } =
      position.frontmatter;

    let group = companyMap.get(companyId);

    if (!group) {
      group = {
        companyId,
        companyName,
        companyLogo,
        isCurrentEmployer,
        positions: [],
      };
      companyMap.set(companyId, group);
    }

    group.positions.push(position);

    // Update company-level isCurrentEmployer if any position indicates it
    if (isCurrentEmployer) {
      group.isCurrentEmployer = true;
    }
  }

  // Convert to array and sort companies by their most recent position
  const groups = Array.from(companyMap.values());

  groups.sort((a, b) => {
    const aLatest = a.positions[0]?.frontmatter.startDate.getTime() ?? 0;
    const bLatest = b.positions[0]?.frontmatter.startDate.getTime() ?? 0;
    return bLatest - aLatest;
  });

  return groups;
}
