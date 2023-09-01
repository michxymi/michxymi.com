import Link from "next/link";

const jobRoles = [
  {
    title: "Technical Software Manager",
    company: "Oxford Nanopore Technologies",
    duration: "Apr 2023 - Present",
    url: "https://nanoporetech.com/",
  },
  {
    title: "Software Engineer & Section Leader",
    company: "UK Atomic Energy Authority",
    duration: "Mar 2022 - Apr 2023",
    url: "https://www.gov.uk/government/organisations/uk-atomic-energy-authority",
  },
  {
    title: "Control Systems Software Engineer",
    company: "UK Atomic Energy Authority",
    duration: "Dec 2017 - Mar 2022",
    url: "https://www.gov.uk/government/organisations/uk-atomic-energy-authority",
  },
  {
    title: "Web Developer (Contract)",
    company: "BubbleAd Ltd",
    duration: "Mar 2017 - Jun 2017",
    url: "https://www.facebook.com/bubbleadlondon/",
  },
  {
    title: "Robotics Engineer (Internship)",
    company: "Conferience Ltd",
    duration: "Oct 2016 - Mar 2017",
    url: "https://conferience.com/",
  },
];

const Roles = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
    {jobRoles.map((role) => (
      <div key={role.title} className="card bg-base-300 mb-4">
        <div className="card-body">
          <h3 className="text-lg font-medium mb-2">{role.title}</h3>
          <Link
            key={role.title}
            href={role.url}
            className="mb-2 underline underline-offset-4 hover:no-underline"
          >
            {role.company}
          </Link>
          <p className="mb-4">{role.duration}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Roles;
