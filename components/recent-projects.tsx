import { allProjects } from "content-collections";
import { AnimatedCard } from "./ui/animated-card";

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {allProjects.map(({ title, subtitle, description, url, icons }, index) => (
            <AnimatedCard key={index} title={`${title} - ${subtitle}`} description={description} icons={icons} url={url}/>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
