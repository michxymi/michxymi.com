import { TracingBeam } from '@/components/ui/tracing-beam';
import { LinkPreview } from '@/components/ui/link-preview';

import { IoIosCheckmark } from 'react-icons/io';
import { allMilestones } from 'content-collections';

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };

const CareerMilestones = () => {
  const curriculaSortedByDate = allMilestones.sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );
  return (
    <section id="about" className="relative py-20">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="heading">Career Milestones</h1>
        <p className="subheading">Key successes and recognitions</p>
      </div>
      <TracingBeam className="mt-12 p-8">
        <div className="relative mx-auto max-w-3xl pt-4 antialiased">
          {curriculaSortedByDate.map(
            ({ company, role, location, startDate, endDate, url, highlights }, index) => (
              <div key={`content-${index}`} className="mb-10 flex flex-col gap-4">
                <h1 className="text-xl font-bold text-zinc-100">
                  {role}{' '}
                  <span>
                    <LinkPreview url={url} className="text-purple">
                      @ {company}
                    </LinkPreview>
                  </span>
                </h1>
                <p className="text-sm tracking-widest text-zinc-400">
                  {startDate.toLocaleDateString('en-US', options)}
                  {' - '}
                  {endDate ? endDate.toLocaleDateString('en-US', options) : 'Present'}
                </p>
                <p className="text-sm tracking-widest text-zinc-400">{location}</p>
                {highlights.map((ach) => (
                  <div key={ach} className="flex items-center justify-start gap-2">
                    <IoIosCheckmark className="min-h-6 min-w-6" color="#CBACF9" />
                    <p className="text-sm text-zinc-400">{ach}</p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </TracingBeam>
    </section>
  );
};

export default CareerMilestones;
