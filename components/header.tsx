import NavBar, { NavItem } from "@/components/navbar";
import ThemeToogle from "@/components/theme-toggle";

const headerItems: NavItem[] = [
  {
    title: "About",
    url: "/about",
    icon: undefined,
  },
  {
    title: "Articles",
    url: "/articles",
    icon: undefined,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: undefined,
  },
];

export default function Header() {
  return (
    <header className="flex justify-between">
      <button>Click</button>
      <NavBar items={headerItems} />
      <ThemeToogle />
    </header>
  );
}
