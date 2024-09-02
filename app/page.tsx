import Blog from '@/components/blog';
import CareerMilestones from '@/components/career-milestones';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import RecentProjects from '@/components/recent-projects';

const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Blog', link: '#blog' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export default function Home() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <CareerMilestones />
      <Blog />
      <RecentProjects />
      <Footer />
    </>
  );
}
