import type { Metadata } from "next";
import { PageHeader } from "@/modules/design-system/components/page-header";
import { Prose } from "@/modules/design-system/components/prose";
import { SkillsGrid } from "@/modules/design-system/components/skills-grid";
import { Separator } from "@/modules/design-system/components/ui/separator";
import {
  type ExperienceItemType,
  WorkExperience,
} from "@/modules/design-system/components/work-experience";

export const metadata: Metadata = {
  title: "About | Michael Xymitoulias",
  description:
    "Learn more about Michael Xymitoulias - Technical Software Manager, Software Engineer, and Technical Lead.",
};

const experiences: ExperienceItemType[] = [
  {
    id: "company-name",
    companyName: "Company Name",
    isCurrentEmployer: true,
    positions: [
      {
        id: "technical-software-manager",
        title: "Technical Software Manager",
        employmentPeriod: "2023 - Present",
        employmentType: "Full-time",
        description:
          "Leading engineering teams to deliver high-impact products. Focus on technical strategy and team development.",
        icon: "business",
        isExpanded: true,
      },
    ],
  },
  {
    id: "previous-company",
    companyName: "Previous Company",
    positions: [
      {
        id: "technical-lead",
        title: "Technical Lead",
        employmentPeriod: "2021 - 2023",
        employmentType: "Full-time",
        description:
          "Led architecture decisions and mentored engineers. Shipped multiple major features.",
        icon: "code",
      },
    ],
  },
  {
    id: "earlier-company",
    companyName: "Earlier Company",
    positions: [
      {
        id: "senior-software-engineer",
        title: "Senior Software Engineer",
        employmentPeriod: "2019 - 2021",
        employmentType: "Full-time",
        description:
          "Full-stack development with focus on performance and scalability.",
        icon: "code",
      },
    ],
  },
  {
    id: "first-company",
    companyName: "First Company",
    positions: [
      {
        id: "software-engineer",
        title: "Software Engineer",
        employmentPeriod: "2017 - 2019",
        employmentType: "Full-time",
        description:
          "Started career building web applications and learning best practices.",
        icon: "code",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <PageHeader
        description="A bit about me, my skills, and my journey."
        title="About"
      />

      <section className="mb-12">
        <h2 className="mb-4 font-display text-lg">Bio</h2>
        <Prose>
          <p>
            I&apos;m a Technical Software Manager with a passion for building
            great products and leading high-performing teams. With years of
            experience spanning software engineering and technical leadership, I
            bring a unique perspective to every project.
          </p>
          <p>
            My approach combines hands-on technical expertise with a focus on
            people and processes. I believe in clean architecture, developer
            experience, and building systems that scale both technically and
            organizationally.
          </p>
          <p>
            When I&apos;m not coding or managing teams, you can find me
            exploring new technologies, contributing to open source, or sharing
            knowledge through writing and mentoring.
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
  );
}
