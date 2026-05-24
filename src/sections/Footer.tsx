import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] px-4 py-12 sm:px-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} className="w-full">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-4">
            {/* Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#D7E2EA] sm:text-3xl">
                Apurva
              </h3>
            </motion.div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wider text-[#B0B8C4] sm:gap-8 sm:text-base">
              <motion.a
                href="#about"
                whileHover={{ color: '#D7E2EA' }}
                className="transition-colors"
              >
                About
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ color: '#D7E2EA' }}
                className="transition-colors"
              >
                Services
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ color: '#D7E2EA' }}
                className="transition-colors"
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ color: '#D7E2EA' }}
                className="transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#2a3a4a] to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#9aa3af] sm:flex-row">
            <p>
              &copy; {currentYear} Apurva Hindukaje. All rights reserved.
            </p>
            <p>
              Crafted with care • Built with React & Tailwind CSS
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
