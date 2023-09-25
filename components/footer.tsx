import NavBar, { NavItem } from "@/components/navbar";
import { Mail, Github, Linkedin } from "lucide-react";

const footerItems: NavItem[] = [
  {
    title: "e-mail",
    url: "mailto:michxymi@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    title: "github",
    url: "https://github.com/michxymi",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "linkedIn",
    url: "https://www.linkedin.com/in/mxymitoulias/",
    icon: <Linkedin className="w-5 h-5" />,
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <NavBar items={footerItems} />
    </footer>
  );
}
