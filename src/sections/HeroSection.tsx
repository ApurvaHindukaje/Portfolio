import React from 'react';
import { Navbar } from '../components/Navbar';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full flex-col justify-between overflow-x-clip px-4 sm:px-6 md:px-8">
      <div className="z-20 w-full">
        <Navbar />
      </div>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute left-1/2 bottom-0 z-10 w-[280px] -translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <div className="pointer-events-auto">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack Portrait"
              className="w-full object-contain"
            />
          </Magnet>
        </div>
      </FadeIn>

      <div className="relative z-20 flex w-full flex-col">
        {/* Hero Heading */}
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[10vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[11vw] md:-mt-5 md:text-[12vw] lg:text-[10vw]">
            
              Hi, i&apos;m apurva
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex w-full items-end justify-between pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              A software developer driven by building clean, efficient, and high-impact applications.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
