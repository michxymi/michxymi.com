import type { Metadata } from "next";
import { Prose } from "@/modules/content/components/prose";
import { SkillsGrid } from "@/modules/content/components/skills-grid";
import {
  type ExperienceItemType,
  WorkExperience,
} from "@/modules/content/components/work-experience";
import { PageHeader } from "@/modules/design-system/components/navigation/page-header";
import { Separator } from "@/modules/design-system/components/ui/separator";

export const metadata: Metadata = {
  title: "About | Michael Xymitoulias",
  description:
    "Learn more about Michael Xymitoulias - Technical Software Manager, Software Engineer, and Technical Lead.",
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
        description:
          "Managing a team of 4 build engineers. Built observability and developer tools using React, TypeScript, Electron, and Next.js. Technical lead for C++ library integration using Conan, CMake, Docker, and GitLab CI. Developed CLI tools in Python and cross-platform FPGA tools in GoLang.",
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
        description:
          "Led software development team with mentoring, recruitment, and performance reviews. Key contributor to CorteX robotic middleware, integrating C++ with ROS2, Qt, OPC-UA, and EtherCAT. Established DevOps processes including CI/CD, Git workflows, and Agile practices.",
        icon: "code",
        isExpanded: true,
      },
      {
        id: "control-systems-engineer",
        title: "Control Systems Software Engineer",
        employmentPeriod: "December 2017 - November 2021",
        employmentType: "Full-time",
        description:
          "Core team member developing CorteX robotic middleware in modern C++17 and Python. Built GUIs using Qt (QML & Widgets). Implemented unit testing with gTest, QtTest, and Valgrind. Primary technical interface with external partners. Mentored year-in-industry students.",
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
          "Designed and developed company website using WordPress, HTML, CSS, JavaScript, and PHP. Implemented SEO and security enhancements.",
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
    <div>
      <PageHeader
        description="A bit about me, my skills, and my journey."
        title="About"
      />

      <section className="mb-12">
        <h2 className="mb-4 font-display text-lg">Bio</h2>
        <Prose>
          <p>
            I&apos;m a Technical Software Manager at Oxford Nanopore
            Technologies, where I lead a team of build engineers and develop
            internal developer tools. My background spans robotics, control
            systems, and modern web development across industries including
            biotech, nuclear energy, and embedded systems.
          </p>
          <p>
            With over 8 years of experience, I&apos;ve worked across the full
            stack—from C systems programming to React web apps, from writing
            robotics middleware to Python CLI tools. I&apos;m passionate about
            developer experience, observability tooling, and building systems
            that make engineers more productive.
          </p>
          <p>
            I hold a BSc in Automation Engineering and have co-authored a
            publication on CorteX, a distributed robotic systems framework. When
            I&apos;m not coding or leading teams, I&apos;m exploring AI assisted
            development and tinker with new technologies.
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
