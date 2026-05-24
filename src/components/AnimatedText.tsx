import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center gap-[0.25em]`}>
      {words.map((word, wordIndex) => {
        const characters = word.split('');
        return (
          <span key={wordIndex} className="relative inline-block whitespace-nowrap">
            {characters.map((char, charIndex) => {
              // Calculate a relative position for each character
              // To make it exact, we'd need total characters. We'll approximate.
              const totalChars = text.length;
              const charPosition = text.indexOf(word) + charIndex;
              const start = charPosition / totalChars;
              const end = start + 1 / totalChars;

              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <span key={charIndex} className="relative inline-block">
                  <span className="invisible">{char}</span>
                  <motion.span className="absolute left-0 top-0 text-[#D7E2EA]" style={{ opacity }}>
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
