import Link from "next/link";
import MagicButton from "@/components/ui/buttons";
import { FaGithub, FaLocationArrow, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your </span>digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-4 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your
          goals
        </p>
        <Link href="mailto:contact@jsmastery.pro">
          <MagicButton>
            Let&apos;s get in touch
            <FaLocationArrow className="min-w-4 min-h-4" />
          </MagicButton>
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          © 2024 Michael Xymitoulias, Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="https://www.linkedin.com/in/mxymitoulias/"><FaLinkedinIn className="min-h-6 min-w-6" /></Link>
          <Link href="https://github.com/michxymi"><FaGithub className="min-h-6 min-w-6" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
