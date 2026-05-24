import React from 'react';

interface LiveProjectButtonProps {
  url?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ url }) => {
  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base">
      Live Project
    </a>
  );
};

