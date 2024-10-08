import Link from 'next/link';
import MagicButton from '@/components/ui/buttons';
import { FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full py-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s get in <span className="text-purple">touch.</span>
        </h1>
        <p className="my-4 text-center text-white-200 md:mt-10">
          Whether you have questions, feedback, or a new project in mind, I&apos;d love hearing from
          you.
        </p>
        <Link href="mailto:1d76ivw3v@mozmail.com">
          <MagicButton>
            E-mail Me
            <FaPaperPlane className="min-h-4 min-w-4" />
          </MagicButton>
        </Link>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-base md:font-normal">
          © 2024 Michael Xymitoulias, Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="https://www.linkedin.com/in/mxymitoulias/">
            <FaLinkedinIn className="min-h-6 min-w-6" />
          </Link>
          <Link href="https://github.com/michxymi">
            <FaGithub className="min-h-6 min-w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
