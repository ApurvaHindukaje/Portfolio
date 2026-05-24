import React from 'react';
import { FadeIn } from './FadeIn';

export const Navbar: React.FC = () => {
  const links = ['About', 'Projects'];

  return (
    <FadeIn delay={0} y={-20} as="nav" className="w-full">
      <ul className="flex w-full items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
};
