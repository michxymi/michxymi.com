import { TracingBeam } from "@/components/ui/tracing-beam";
import { IoIosCheckmark } from "react-icons/io";

const ProfessionalExperience = () => {
  return (
    <div className="py-20 relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="heading">Professional Experience</h1>
        <p className="subheading">Key roles and achievements</p>
      </div>
      <TracingBeam className="p-8">
      <div className="max-w-3xl mx-auto antialiased pt-4 relative">
        {experiences.map((item, index) => (
          <div key={`content-${index}`} className="mb-20 flex flex-col gap-4">
            <h1 className="text-xl font-bold text-zinc-100">{item.role}{" "}<span className="text-purple">@ {item.company}</span></h1>
            <p className="text-zinc-400 text-sm tracking-widest">{item.startDate}{" - "}{item.endDate}</p>
            <p className="text-zinc-400 text-sm tracking-widest">{item.location}</p>
            {item.achievements.map((ach) => (
              <div key={ach} className="flex items-center justify-start gap-2">
                <IoIosCheckmark className="h-6 w-6" color="#CBACF9"/>
                <p className="text-zinc-400 text-sm">{ach}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
  );
};

const experiences = [{
  company: 'Oxford Nanopore Technologies',
  role: 'Technical Software Manager',
  location: 'Oxford, GB',
  startDate: 'Apr 2023',
  endDate: 'Present',
  achievements: [
    "Great Stuff",
    "Fantastic",
    "Excelent"
  ]
  },
  {
    company: 'UK Atomic Energy Authority',
    role: 'Software Engineer & Section Leader',
    location: 'Culham, GB',
    startDate: 'Mar 2022',
    endDate: 'Apr 2023',
    achievements: [
      "Great Stuff",
      "Fantastic",
      "Excelent"
    ]
  },
  {
    company: 'UK Atomic Energy Authority',
    role: 'Control Systems Software Engineer',
    location: 'Oxford, GB',
    startDate: 'Dec 2017',
    endDate: 'Apr 2023',
    achievements: [
      "Managing 4 engineers under the platform team.",
      "Fantastic",
      "Excelent"
    ]
  },
]


export default ProfessionalExperience;
