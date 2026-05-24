import React from 'react';
import { Navbar } from '../components/Navbar';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-x-clip bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C] to-[#1a1a1a] px-4 py-8 sm:px-6 sm:py-12 md:px-8">
      <div className="z-20 w-full">
        <Navbar />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Hero Portrait */}
        <FadeIn
          delay={0.6}
          y={30}
          className="pointer-events-none relative z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
        >
          <div className="pointer-events-auto">
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-40 rounded-full blur-3xl"></div>
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Apurva Hindukaje"
                  className="relative z-10 w-full object-contain drop-shadow-2xl"
                />
              </div>
            </Magnet>
          </div>
        </FadeIn>

        {/* Hero Heading */}
        <FadeIn
          delay={0.15}
          y={40}
          className="pointer-events-none relative z-20 w-full px-4 text-center"
        >
          <h1 className="hero-heading w-full text-[10vw] font-black uppercase leading-none tracking-tighter sm:whitespace-nowrap sm:text-[11vw] md:text-[12vw] lg:text-[10vw]">
            Hi, I&apos;m Apurva
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-20 flex w-full flex-col gap-8 pb-8">
        {/* Subtitle */}
        <FadeIn delay={0.35} y={20} className="w-full">
          <p className="mx-auto max-w-[600px] text-center font-light uppercase leading-relaxed tracking-wide text-[#B0B8C4]" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)' }}>
            Full-Stack Developer | Building Premium Digital Experiences
          </p>
        </FadeIn>

        {/* CTA and Scroll Indicator */}
        <FadeIn delay={0.5} y={20} className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full border-2 border-[#D7E2EA] bg-transparent px-8 py-3 font-medium uppercase tracking-wider text-[#D7E2EA] transition-all hover:bg-[#D7E2EA] hover:text-[#0C0C0C] sm:px-10 sm:py-4"
          >
            Explore My Work
          </motion.button>
        </FadeIn>

        {/* Scroll Indicator */}
        <FadeIn delay={0.7} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#B0B8C4]"
          >
            <ArrowDown size={24} />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};
