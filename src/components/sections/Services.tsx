
import React, { useEffect } from 'react';
import { Code, Brain, Lightbulb, Settings, GraduationCap, Building } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation & R&D",
    description: "Research based products in multiple domains such as Enterprise Software, Space, Machine Learning, Aviation, Electronics and other core areas."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Software Product Development",
    description: "Develop your idea to reality with high quality architecture and enterprise grade quality, backed by learnings from industry acclaimed published works."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Startup Consulting",
    description: "We work with startups at all stages of their lifecycle, assisting with development, growth as well as marketing strategies."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Process Management",
    description: "Fix company workflows to enable high efficiency. We help organizations smoothly manage workflows and align organizational and individual aspirations."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "SKILL Training",
    description: "Enhance workplace skill with industry recognized tailormade upskilling programs with industry experts with authorized works on open source technologies."
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Academic Relations",
    description: "We work with colleges and schools alike on both innovation as well as training management to achieve excellence."
  }
];

const Services: React.FC = () => {
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
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="We provide a wide range of technology solutions tailored to your needs"
          className="scroll-trigger"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
