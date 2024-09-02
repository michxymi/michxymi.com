import Blog from '@/components/blog';
import CareerMilestones from '@/components/career-milestones';
import Hero from '@/components/hero';
import RecentProjects from '@/components/recent-projects';

export default function Home() {
  return (
    <>
      <Hero />
      <CareerMilestones />
      <Blog />
      <RecentProjects />
    </>
  );
}
