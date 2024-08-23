import { allProjects } from 'content-collections';
import { AnimatedCard } from './ui/animated-card';

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {allProjects.map(({ title, description, url, icons }, index) => (
          <AnimatedCard
            key={index}
            title={title}
            description={description}
            icons={icons}
            url={url}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
