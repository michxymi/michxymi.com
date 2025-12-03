import type { Metadata } from "next";
import { Prose } from "@/modules/content/components/prose";
import { SkillsGrid } from "@/modules/content/components/skills-grid";
import {
  type ExperienceItemType,
  WorkExperience,
} from "@/modules/content/components/work-experience";
import { PageHeader } from "@/modules/design-system/components/navigation/page-header";
import { Separator } from "@/modules/design-system/components/ui/separator";
import { BreadcrumbSchema } from "@/modules/seo/components/breadcrumb-schema";
import { PersonSchema } from "@/modules/seo/components/person-schema";

const description =
  "Technical Software Manager at Oxford Nanopore Technologies. Background in robotics, control systems, and web development.";

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
    canonical: "/about",
  },
};

const experiences: ExperienceItemType[] = [
  {
    id: "ont",
    companyName: "Oxford Nanopore Technologies",
    companyLogo: "/ont-logo.svg",
    isCurrentEmployer: true,
    positions: [
      {
        id: "technical-software-manager",
        title: "Technical Software Manager",
        employmentPeriod: "April 2023 – ∞",
        employmentType: "Full-time",
        description: `I manage a team of four software engineers. This involves the usual suspects: mentoring, objectives, performance reviews, and convincing people that their work matters — because it does.

Most of my time goes into building internal developer tools: log aggregation platforms, deployment management apps, and dashboards that make platform operations slightly less painful. The stack is React, NextJS, Electron, Typescript and Python, depending on what needs hitting.

A significant portion of my sanity has gone into making C++ builds behave like civilized software. Conan, CMake, Docker, Artifactory. Some engineers are converts. Others look at me like I&apos;ve suggested we rewrite everything in Rust.`,
        icon: "code",
        isExpanded: true,
      },
    ],
  },
  {
    id: "ukaea",
    companyName: "UK Atomic Energy Authority (RACE)",
    companyLogo: "/ukaea.svg",
    positions: [
      {
        id: "section-leader",
        title: "Software Engineer & Section Leader",
        employmentPeriod: "November 2021 - April 2023",
        employmentType: "Full-time",
        description: `Led a software development team. Mentored engineers, allocated work, ran reviews, hired people. The leadership trifecta.

I was a key contributor to CorteX – RACE's robotic middleware for distributed systems. This meant integrating with ROS2, Qt, OPC-UA, and EtherCAT, plus building interfaces for industrial manipulators using whatever proprietary API the hardware vendor decided to inflict on us.

Helped put CI/CD pipelines and Git workflows in place. Infrastructure work - the sort that only gets mentioned when its missing.`,
        icon: "code",
        isExpanded: true,
      },
      {
        id: "control-systems-engineer",
        title: "Control Systems Software Engineer",
        employmentPeriod: "December 2017 - November 2021",
        employmentType: "Full-time",
        description: `Core team member on CorteX from the early days. Wrote cross-platform code in modern C++ and Python. Built monitoring and control interfaces in Qt. Wrote tests. Ran Valgrind until the memory leaks stopped haunting me.

I was the primary technical contact for external partners and supervised year-in-industry students who were somehow even more confused than I was when I started.`,
        icon: "code",
      },
    ],
  },
  {
    id: "bubblead",
    companyName: "BubbleAD Ltd",
    positions: [
      {
        id: "web-developer-intern",
        title: "Web Developer Intern",
        employmentPeriod: "March 2017 - June 2017",
        employmentType: "Internship",
        description:
          "Built the company website. WordPress, HTML, CSS, JavaScript, PHP. Added SEO and security. Worked with marketing on content. Standard internship fare.",
        icon: "code",
      },
    ],
  },
  {
    id: "conferience",
    companyName: "Conferience Ltd",
    positions: [
      {
        id: "robotics-engineer-intern",
        title: "Robotics Engineer Intern",
        employmentPeriod: "October 2016 - March 2017",
        employmentType: "Internship",
        description:
          "Led redesign of 'Smiley Bin' smart recycling system. Managed full product lifecycle from requirements to system design. Developed embedded software in C for Arduino with real-time data processing.",
        icon: "code",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PersonSchema enhanced />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      <div>
        <PageHeader
          description="Who I Am - Or at least who I claim to be on the internet."
          title="About"
        />

        <section className="mb-12">
          <h2 className="mb-4 font-display text-lg">Bio</h2>
          <Prose>
            <p>
              I&apos;m a Technical Software Manager at Oxford Nanopore
              Technologies. I lead a team of software engineers and make
              internal developer tools that - ideally - prevent other engineers
              from wanting to throw their laptops into the sea.
            </p>
            <p>
              My background is a strange cocktail of robotics, control systems,
              and modern web development. I&apos;ve worked in biotech, nuclear
              energy, and embedded systems. Yes, nuclear. No, nothing exploded.
              That I&apos;m aware of.
            </p>
            <p>
              Eight years of doing this has taken me across the entire stack. C
              systems programming. React web apps. Robotics middleware. Python
              CLI tools. If it involves making software work - or more often,
              figuring out why it doesn&apos;t - I&apos;ve probably touched it.
            </p>
            <p>
              I care about developer experience, observability tooling, and
              building systems that make engineers productive instead of
              miserable. These are related goals.
            </p>
            <p>
              When I&apos;m not writing code or pretending to know what I&apos;m
              doing in meetings, I&apos;m exploring AI-assisted development and
              tinkering with whatever technology seems interesting enough to
              justify the time investment.
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
