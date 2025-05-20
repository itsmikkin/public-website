
import React, { useEffect } from 'react';
import { Brain, Watch, Zap, Code, Globe, Activity, Monitor, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ResearchCard from '@/components/ui/ResearchCard';

const researchProjects = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Sudarshana - Machine Learning",
    description: "Model development on numerous applications, using language principles from Bharat (Indian) languages."
  },
  {
    icon: <Watch className="w-6 h-6" />,
    title: "HastaMudrika - Smartwatch",
    description: "Indigenous smartwatch and motherboard designs, for research and development as well as productisation."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Vimana - The JetEngine",
    description: "Research and Design of a custom JetEngine and detailed testing to work on multiple opportunities to help jets."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Vishwakarma - Processor Design",
    description: "Design of a custom processor based on the Risc-V architecture with floating point and vector operation support."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Aakasha Mitra - Drones",
    description: "Development of indigenous drones and custom cube sat component with an app store for users to create applications."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Vidyu Vaahan - The EV",
    description: "A hybrid EV capable of operating in multiple environments and multiple battery types."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Precision Sensor Design",
    description: "Design of precision sensors for usage in medical and multiple fields."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Drusti Shrusti - Display Design",
    description: "Design of a low eye-impact display for usage over sustained periods without impact using research on color schemes."
  }
];

const Research: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="research" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Ongoing Research Work" 
          subtitle="Being an R&D organization at the core, we work on the fundamentals of technologies enabling the creation of technology which are a blend of tradition and modern technology (Sanathana + Sanoothana)"
          className="scroll-trigger"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {researchProjects.map((project, index) => (
            <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
              <ResearchCard 
                title={project.title}
                description={project.description}
                icon={project.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
