import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
      {/* Decorative Image: Top Left */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute left-[1%] top-[4%] z-0 w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon icon"
          className="w-full object-contain"
        />
      </FadeIn>

      {/* Decorative Image: Top Right */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute right-[1%] top-[4%] z-0 w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego icon"
          className="w-full object-contain"
        />
      </FadeIn>

      {/* Decorative Image: Bottom Left */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] z-0 w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-full object-contain"
        />
      </FadeIn>

      {/* Decorative Image: Bottom Right */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] z-0 w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-full object-contain"
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About me
          </h2>
        </FadeIn>

        <div className="mt-10 flex flex-col items-center gap-16 sm:mt-14 sm:gap-20 md:mt-16 md:gap-24">
          <AnimatedText
            text="Focused on software development, logical problem solving, and clean user experiences, I am driven by the process of building functional and reliable digital products."
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            // we apply inline font size to AnimatedText container
          />
          {/* Apply clamp via style directly on the AnimatedText root might need a wrapper if AnimatedText doesn't accept style. 
              But AnimatedText accepts className, we can use Tailwind arbitrary values or just use a style tag on a wrapper */}
        </div>
      </div>
      
      {/* { Contact button below the text block. Note: I added it here to keep layout clear } 
      <div className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div> */}
      
      {/* Fix animated text styling via inline style on a wrapper */}
      <style>{`
        #about p {
          font-size: clamp(1rem, 2vw, 1.35rem);
        }
      `}</style>
    </section>
  );
};
