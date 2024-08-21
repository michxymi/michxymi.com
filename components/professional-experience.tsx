import { TracingBeam } from "@/components/ui/tracing-beam";
import { IoIosCheckmark } from "react-icons/io";
import { allCurricula } from "content-collections"

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };

const ProfessionalExperience = () => {

  const curriculaSortedByDate = allCurricula.toSorted(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  )
  return (
    <section id="about" className="py-20 relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="heading">Professional Experience</h1>
        <p className="subheading">Key roles and achievements</p>
      </div>
      <TracingBeam className="p-8">
      <div className="max-w-3xl mx-auto antialiased pt-4 relative">
        {curriculaSortedByDate.map(({company, role, location, startDate, endDate, highlights}, index) => (
          <div key={`content-${index}`} className="mb-20 flex flex-col gap-4">
            <h1 className="text-xl font-bold text-zinc-100">{role}{" "}<span className="text-purple">@ {company}</span></h1>
            <p className="text-zinc-400 text-sm tracking-widest">{startDate.toLocaleDateString('en-US', options)}{" - "}{endDate ? endDate.toLocaleDateString('en-US', options) : 'Present'}</p>
            <p className="text-zinc-400 text-sm tracking-widest">{location}</p>
            {highlights.map((ach) => (
              <div key={ach} className="flex items-center justify-start gap-2">
                <IoIosCheckmark className="h-6 w-6" color="#CBACF9"/>
                <p className="text-zinc-400 text-sm">{ach}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </TracingBeam>
    </section>
  );
};

export default ProfessionalExperience;
