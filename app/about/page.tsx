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
    responsibilities: [
      'Manage a team of four integration engineers, overseeing tasks, objectives, and training.',
      'Lead the management and integration of third-party packages into the C++ codebase.',
      'Drive improvements in the CI/CD infrastructure while ensuring the adherence to best practices.',
    ],
  },
  {
    title: 'Software Engineer & Section Leader',
    company: 'UK Atomic Energy Authority',
    duration: 'Mar 2022 - Apr 2023',
    responsibilities: [
      'Line manage a group of four multi-disciplinary engineers.',
      'Core developer of the multi-award robotic middleware, CorteX.',
      'Integration of robotic hardware and HMI development.',
    ],
  },
  {
    title: 'Control Systems Software Engineer',
    company: 'UK Atomic Energy Authority',
    duration: 'Dec 2017 - Mar 2022',
    responsibilities: [
      'Control system design for remote handling systems.',
      'Performance analysis of control systems.',
      'Key interface to external stakeholders ranging from small business to academic institutions.'
    ],
  },
  {
    title: 'Web Developer (Contract)',
    company: 'BubbleAd Ltd',
    duration: 'Mar 2017 - Jun 2017',
    responsibilities: [
      'Website development using the Wordpress platform.',
      'Search Engine Optimization.',
      'Support with various IT issues.'
    ],
  },
  {
    title: 'Robotics Engineer (Internship)',
    company: 'Conferience Ltd',
    duration: 'Oct 2016 - Mar 2017',
    responsibilities: [
      'Embedded programming.',
      'Electronic board design.',
      'Web app development.'
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-10">
      <div className="flex flex-col w-1/2 lg:flex-row">
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
          <p className="leading-relaxed mb-4">
            Welcome! I&apos;m <strong>Michael Xymitoulias</strong> <em className={inter.className}>(/ksɪˌmiː&apos;tuːliəs/)</em>,
            a <strong>Software Engineer</strong> residing in the vibrant <strong>Oxfordshire</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            When I&apos;m not <strong>leading teams</strong> and <strong>driving technical innovation</strong>,
            you&apos;ll find me exploring the art of culinary delights or embracing the tranquility of the Aegean Islands
            alongside my beautiful wife and daughter.
          </p>
          <p className="leading-relaxed mb-4">
            With a <strong>passion for technology</strong> and a knack for <strong>problem-solving</strong>,
            I&apos;m committed to delivering innovative solutions.
          </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center p-10">
        <Roles jobRoles={jobRoles} />
      </div>
    </div>
  )
}
