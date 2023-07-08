import Avatar from "@/components/avatar"
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div className="min-h-screen p-10 bg-base-200">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-auto card rounded-box place-items-center"><Avatar/></div> 
        <div className="divider lg:divider-horizontal"/> 
        <div className="grid flex-grow h-auto card rounded-box place-items-center">
          <p>Welcome! I'm <strong>Michael Xymitoulias</strong> <em className={inter.className}>(/ksɪˌmiːˈtuːliəs/)</em>, a <strong>Software Engineer</strong> residing in the vibrant <strong>Oxfordshire</strong>.
          <br/><br/>When I'm not <strong>leading teams</strong> and <strong>driving technical innovation</strong>,  you'll find me exploring the art of culinary delights or embracing the tranquility of the Aegean Islands alongside my cherished wife and daughter.
          <br/><br/>With a <strong>passion for technology</strong> and a knack for <strong>problem-solving</strong>, I'm committed to delivering innovative solutions.
          </p> 
        </div>
      </div>
    </div>
  )
}
