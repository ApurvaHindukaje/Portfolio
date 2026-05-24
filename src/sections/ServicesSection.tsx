import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Code2, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using Next,js, React, TypeScript, FastAPI, Python and modern frameworks. Building scalable and maintainable solutions.',
    features: ['React & Next.js', 'TypeScript', 'FastAPI & Pyton', 'Database Design'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description: 'Creating beautiful, responsive websites that work flawlessly across all devices and screen sizes.',
    features: ['Mobile-First', 'Tailwind CSS', 'Cross-browser', 'Performance'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a] px-4 py-20 sm:px-8 md:px-10">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-bl from-[#3a6fa8] to-transparent opacity-5 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 bg-gradient-to-tr from-[#2a4a7a] to-transparent opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Section Title */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Services
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={30} className="mt-6 w-full text-center sm:mt-8">
          <p className="mx-auto max-w-2xl font-light text-[#B0B8C4]" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }}>
            Comprehensive solutions for your digital needs, from concept to deployment
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:mt-24 md:grid-cols-2 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn
                key={index}
                delay={0.1 * (index + 1)}
                y={30}
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group rounded-2xl border border-[#2a3a4a] bg-gradient-to-br from-[#1a2a3a] to-[#0C0C0C] p-8 transition-all duration-300 hover:border-[#4a6a8a] hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  <div className="mb-6 inline-block rounded-lg bg-gradient-to-br from-[#3a5a7a] to-[#2a3a4a] p-3 transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8 text-[#D7E2EA]" />
                  </div>

                  <h3 className="mb-3 font-bold uppercase tracking-wide text-[#D7E2EA]" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-[#9aa3af]">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#4a7a9a]"></div>
                        <span className="text-sm text-[#B0B8C4]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA Section */}
        <FadeIn delay={0.8} y={30} className="mt-16 flex flex-col items-center gap-6 sm:mt-20 md:mt-24">
          <p className="text-center text-[#B0B8C4]">Ready to bring your project to life?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-[#D7E2EA] bg-gradient-to-r from-[#3a5a7a] to-[#2a3a4a] px-10 py-4 font-medium uppercase tracking-wider text-[#D7E2EA] transition-all hover:border-[#D7E2EA] hover:shadow-xl hover:shadow-blue-900/30"
          >
            Get in Touch
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};
