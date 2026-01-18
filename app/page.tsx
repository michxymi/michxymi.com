import type { Metadata } from "next";
import Link from "next/link";
import { WorkExperience } from "@/components/ncdai/work-experience";
import { Separator } from "@/components/ui/separator";
import { Prose } from "@/features/content/components/prose";
import { SkillsGrid } from "@/features/content/components/skills-grid";
import { getExperiencesGroupedByCompany } from "@/features/content/lib/experience";
import { PageHeader } from "@/features/navigation/components/page-header";
import { BreadcrumbSchema } from "@/features/seo/components/breadcrumb-schema";
import { PersonSchema } from "@/features/seo/components/person-schema";

const description =
  "Full Stack Software Engineer and Engineering Manager at Oxford Nanopore Technologies. Background in robotics, control systems, and web development.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: "About",
    description,
  },
  twitter: {
    title: "About",
    description,
  },
  alternates: {
    canonical: "/",
  },
};

export default async function AboutPage() {
  const experiences = await getExperiencesGroupedByCompany();

  return (
    <>
      <PersonSchema enhanced />
      <BreadcrumbSchema items={[]} />
      <div>
        <PageHeader
          description="Who I am—the version polished just enough for the front page."
          title="About"
        />

        <section className="mb-12">
          <h2 className="mb-4 font-display text-lg">Bio</h2>
          <Prose>
            <p>
              I'm a Technical Software Manager at{" "}
              <Link
                href="https://nanoporetech.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Oxford Nanopore Technologies
              </Link>
              . I lead a team of software engineers and make internal developer
              tools that - ideally - prevent other engineers from wanting to
              throw their laptops into the sea.
            </p>
            <p>
              Eight years of doing this has taken me across the entire stack. C
              systems programming. React web apps. Robotics middleware. Python
              CLI tools. If it involves making software work - or more often,
              figuring out why it doesn't - I've probably touched it.
            </p>
            <p>
              I care about developer experience, observability tooling, and
              building systems that make engineers productive instead of
              miserable. These are related goals.
            </p>
            <p>
              When I'm not writing code or pretending to know what I'm doing in
              meetings, I'm exploring AI-assisted development and tinkering with
              whatever technology seems interesting enough to justify the time
              investment.
            </p>
          </Prose>
        </section>

        <Separator className="my-8" />

        <section className="mb-12">
          <h2 className="mb-6 font-display text-lg">Skills & Technologies</h2>
          <SkillsGrid />
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="mb-6 font-display text-lg">Experience</h2>
          <WorkExperience experiences={experiences} />
        </section>
      </div>
    </>
  );
}
