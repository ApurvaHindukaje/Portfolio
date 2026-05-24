import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';

function App() {
  return (
    <div className="w-full bg-[#0C0C0C] text-[#D7E2EA]">
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
    </div>
  );
}

export default App;
