import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from '@/components/ui/buttons';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Hero = () => {
  return (
    <section className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black-100/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"
        />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[40vw]">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Dynamic Engineering Leadership for Transformative Solutions."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            index={4}
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider">
            I leverage a broad engineering background and a strategic mindset to lead teams,
            optimize processes, and deliver high-impact results for businesses.
          </p>
          <Link href="#projects">
            <MagicButton>
              Personal Projects
              <FaLocationArrow />
            </MagicButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
