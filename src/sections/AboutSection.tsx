import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { Code2, Palette, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { icon: Code2, label: 'Full-Stack Development', desc: 'React, TypeScript, Node.js, Python' },
  { icon: Palette, label: 'UI/UX Design', desc: 'Tailwind CSS, Framer Motion, Figma' },
  { icon: Zap, label: 'Performance', desc: 'Optimization, Scalability, Best Practices' },
  { icon: Users, label: 'Collaboration', desc: 'Team Leadership, Communication, Agile' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a] px-4 py-20 sm:px-8 md:px-10">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 bg-gradient-to-br from-[#3a6fa8] to-transparent opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-gradient-to-tl from-[#2a4a7a] to-transparent opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        {/* Section Title */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About Me
          </h2>
        </FadeIn>

        {/* Main Description */}
        <FadeIn delay={0.2} y={30} className="mt-10 w-full sm:mt-14 md:mt-16">
          <div className="mx-auto max-w-2xl">
            <AnimatedText
              text="I'm a full-stack developer passionate about creating premium digital experiences. With expertise in modern technologies and a keen eye for design, I build applications that are not just functional but truly delightful. My focus is on clean code, intuitive interfaces, and delivering real value."
              className="text-center font-light leading-relaxed text-[#B0B8C4]"
            />
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <FadeIn delay={0.4} y={30} className="mt-16 w-full sm:mt-20 md:mt-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '50px' }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group rounded-2xl border border-[#2a3a4a] bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] p-6 transition-all duration-300 hover:border-[#4a6a8a] hover:bg-gradient-to-br hover:from-[#1a2a3a] hover:to-[#1a1a1a] sm:p-8"
                >
                  <Icon className="mb-4 h-8 w-8 text-[#D7E2EA] transition-transform group-hover:scale-110 sm:h-10 sm:w-10" />
                  <h3 className="font-semibold uppercase tracking-wide text-[#D7E2EA]" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }}>
                    {skill.label}
                  </h3>
                  <p className="mt-2 text-sm text-[#9aa3af] sm:text-base">{skill.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.6} y={30} className="mt-16 w-full sm:mt-20 md:mt-24">
          <div className="grid grid-cols-3 gap-4 text-center sm:gap-8 md:gap-12">
            {[
              { number: '1', label: 'Project' },
              { number: '100%', label: 'Optimization' },
              { number: 'Tech Stack', label: 'Next.js · FastAPI · PostgreSQL' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '50px' }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-xl border border-[#2a3a4a] bg-[#1a1a1a] p-4 sm:p-6"
              >
                <div className="font-black text-[#D7E2EA]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  {stat.number}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-[#9aa3af] sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        #about p {
          font-size: clamp(0.95rem, 2vw, 1.3rem);
        }
      `}</style>
    </section>
  );
};
