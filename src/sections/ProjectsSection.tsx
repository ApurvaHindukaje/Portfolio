import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import Dashboardimg from '../assets/Dashboard.png'
import Forecastimg from '../assets/Forecast.png'
import Stacksimulationimg from '../assets/StackSimulation.png'

const PROJECTS = [
  {
    num: '01',
    category: 'Client',
    name: 'Solaris Digital',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Client',
    name: 'Aura Brand Identity',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'Personal',
    name: 'SkillQuant',
    url: 'https://skillquant.apurvahindukaje.dev/',
    col1Img1: Dashboardimg,
    col1Img2: Forecastimg,
    col2Img: Stacksimulationimg,
  },
];

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, progress, range, targetScale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-24 flex h-auto min-h-[85vh] items-center justify-center md:top-32" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div
        style={{ scale }}
        className="flex w-full origin-top flex-col gap-6 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:gap-10 md:p-8"
      >
        {/* Top Row */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <div className="font-black leading-none text-[#D7E2EA]" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.num}
            </div>
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-widest opacity-60 md:text-base">{project.category}</span>
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton url={project.url}/>
        </div>

        {/* Bottom Row: Image Grid */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-8">
          {/* Left Column */}
          <div className="flex w-full flex-col gap-4 sm:w-[40%] sm:gap-6 md:gap-8">
            <img
              src={project.col1Img1}
              alt="Project detail 1"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Img2}
              alt="Project detail 2"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-[60%]">
            <img
              src={project.col2Img}
              alt="Project main"
              className="h-full min-h-[300px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a] px-4 py-20 sm:px-8 md:px-10"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 bg-gradient-to-br from-[#3a6fa8] to-transparent opacity-5 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 bg-gradient-to-tl from-[#2a4a7a] to-transparent opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        <FadeIn delay={0} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Featured Projects
          </h2>
        </FadeIn>

        <div className="relative mx-auto mt-16 max-w-7xl space-y-8 sm:mt-20 md:mt-24">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
            return (
              <ProjectCard
                key={project.num}
                project={project}
                index={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
