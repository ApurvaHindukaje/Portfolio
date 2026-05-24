import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <FadeIn delay={0} y={-20} as="nav" className="w-full">
      <div className="flex w-full items-center justify-between px-4 py-6 sm:px-6 md:px-10 md:py-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="text-2xl font-black uppercase tracking-tighter text-[#D7E2EA] sm:text-3xl md:text-4xl">
            Apurva
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 sm:gap-8 md:flex lg:gap-12">
          {links.map((link) => (
            <li key={link.label}>
              <motion.a
                href={link.href}
                whileHover={{ scale: 1.1, color: '#B0B8C4' }}
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors md:text-base lg:text-lg"
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden rounded-full border border-[#D7E2EA] px-6 py-2 font-medium uppercase tracking-wider text-[#D7E2EA] transition-all hover:bg-[#D7E2EA] hover:text-[#0C0C0C] md:block"
        >
          Get in Touch
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-full border border-[#2a3a4a] p-2 md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-[#D7E2EA]" />
          ) : (
            <Menu className="h-6 w-6 text-[#D7E2EA]" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-[#2a3a4a] bg-[#0C0C0C] px-4 py-4 sm:px-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors hover:text-[#B0B8C4]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block rounded-full border border-[#D7E2EA] py-2 text-center font-medium uppercase tracking-wider text-[#D7E2EA] transition-all hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
              >
                Get in Touch
              </motion.a>
            </li>
          </ul>
        </motion.div>
      )}
    </FadeIn>
  );
};
