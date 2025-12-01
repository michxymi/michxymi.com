import { Badge } from "@/modules/design-system/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/modules/design-system/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
  },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillCategories.map((category) => (
        <Card className="py-4" key={category.title}>
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-muted-foreground text-sm">
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge className="font-mono" key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
