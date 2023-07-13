import Avatar from "@/components/avatar"
import DownloadButton from "@/components/download_button"
import Roles from "@/components/roles"
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const jobRoles = [
  {
    title: 'Technical Software Manager',
    company: 'Oxford Nanopore Technologies',
    duration: 'Apr 2023 - Present',
    url: "https://nanoporetech.com/"
  },
  {
    title: 'Software Engineer & Section Leader',
    company: 'UK Atomic Energy Authority',
    duration: 'Mar 2022 - Apr 2023',
    url: "https://www.gov.uk/government/organisations/uk-atomic-energy-authority"
  },
  {
    title: 'Control Systems Software Engineer',
    company: 'UK Atomic Energy Authority',
    duration: 'Dec 2017 - Mar 2022',
    url: "https://www.gov.uk/government/organisations/uk-atomic-energy-authority"
  },
  {
    title: 'Web Developer (Contract)',
    company: 'BubbleAd Ltd',
    duration: 'Mar 2017 - Jun 2017',
    url: "https://www.facebook.com/bubbleadlondon/"
  },
  {
    title: 'Robotics Engineer (Internship)',
    company: 'Conferience Ltd',
    duration: 'Oct 2016 - Mar 2017',
    url: "https://conferience.com/"
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-10">
      <div className="flex flex-col lg:flex-row lg:w-1/2">
        <div className="grid flex-grow h-fit card rounded-box place-items-center">
          <div className="mb-4">
            <Avatar/>
          </div>
          <div className="mb-4">
            <DownloadButton/>
          </div>
        </div> 
        <div className="divider lg:divider-horizontal"/>
        <div className="flex items-center justify-center">
          <div className="grid flex-grow h-fit card rounded-box text-justify">
            <p className="leading-relaxed mb-4 tracking-tight">
            Welcome! My name is <strong>Michael Xymitoulias</strong> <em className={inter.className}>(/ksɪˌmiː&apos;tuːliəs/)</em>,
            a <strong>Software Engineer</strong> residing in the vibrant <strong>Oxfordshire</strong>.
            </p>
            <p className="leading-relaxed mb-4 tracking-tight">
              When I&apos;m not <strong>leading teams</strong> and <strong>driving technical innovation</strong>,
              you&apos;ll find me exploring the art of culinary delights or embracing the tranquility of the Aegean Islands
              alongside my beautiful wife and daughter.
            </p>
            <p className="leading-relaxed mb-4 tracking-tight">
              With a <strong>passion for technology</strong> and a knack for <strong>problem-solving</strong>,
              I&apos;m committed to delivering <strong>innovative</strong> solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center pt-10 pb-10">
        <Roles jobRoles={jobRoles} />
      </div>
    </div>
  )
}
