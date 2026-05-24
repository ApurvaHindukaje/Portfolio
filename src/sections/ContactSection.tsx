import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'apurvahindukaje@gmail.com',
      link: 'mailto:apurvahindukaje@gmail.com',
    },
    {
      icon: Mail,
      label: 'GitHub',
      value: '@apurvahindukaje',
      link: 'https://github.com/apurvahindukaje',
    },
    {
      icon: Mail,
      label: 'LinkedIn',
      value: '/in/apurvahindukaje',
      link: 'https://linkedin.com/in/apurvahindukaje',
    },
    {
      icon: Mail,
      label: 'Twitter',
      value: '@apurvahindukaje',
      link: 'https://twitter.com/apurvahindukaje',
    },
  ];

  return (
    <section id="contact" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a] px-4 py-20 sm:px-8 md:px-10">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-bl from-[#3a6fa8] to-transparent opacity-5 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 bg-gradient-to-tr from-[#2a4a7a] to-transparent opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Section Title */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Let&apos;s Connect
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={30} className="mt-6 w-full text-center sm:mt-8">
          <p className="mx-auto max-w-2xl font-light text-[#B0B8C4]" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }}>
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </FadeIn>

        {/* Contact Methods Grid */}
        <FadeIn delay={0.4} y={30} className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:mt-24 sm:grid-cols-2">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-[#2a3a4a] bg-gradient-to-br from-[#1a2a3a] to-[#0C0C0C] p-6 transition-all duration-300 hover:border-[#4a6a8a] hover:shadow-2xl hover:shadow-blue-900/20 sm:p-8"
              >
                <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-[#3a5a7a] to-[#2a3a4a] p-3 transition-transform group-hover:scale-110">
                  <Icon className="h-8 w-8 text-[#D7E2EA]" />
                </div>

                <div>
                  <h3 className="font-semibold uppercase tracking-wide text-[#D7E2EA]" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
                    {method.label}
                  </h3>
                  <p className="mt-2 text-sm text-[#9aa3af] transition-colors group-hover:text-[#D7E2EA] sm:text-base">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.7} y={30} className="mt-16 flex flex-col items-center gap-4 sm:mt-20 md:mt-24">
          <motion.a
            href="mailto:apurva@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-[#D7E2EA] bg-gradient-to-r from-[#3a5a7a] to-[#2a3a4a] px-12 py-4 font-medium uppercase tracking-wider text-[#D7E2EA] transition-all hover:border-[#D7E2EA] hover:shadow-xl hover:shadow-blue-900/30"
          >
            Start a Project
          </motion.a>
          <p className="text-center text-[#9aa3af]">
            Or reach out to discuss your next big idea
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
