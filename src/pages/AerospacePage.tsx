
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Rocket, Satellite, Send, Plane } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AerospacePage = () => {
  const aerospaceSolutions = [
    {
      icon: <Rocket size={32} />,
      title: "Jet Engines for Micro Activities",
      description: "Compact jet engines designed for micro UAVs, research drones, and experimental propulsion systems.",
    },
    {
      icon: <Satellite size={32} />,
      title: "CubeSat Development",
      description: "Modular, cost-effective CubeSats aimed at low-earth orbit missions for research, communication, and environmental monitoring.",
    },
    {
      icon: <Plane size={32} />,
      title: "Custom-Built Drones",
      description: "Modular UAVs tailored to customer-specific use-cases with autonomous navigation and environmental adaptability.",
    },
    {
      icon: <Send size={32} />,
      title: "Propulsion Systems",
      description: "High-efficiency propulsion technologies for aerospace applications, focusing on performance and sustainability.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20">
          <SectionHeading
            title="Aerospace Division"
            subtitle="Innovation takes flight at Gonagoor."
            centered={true}
          />

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700">
              Our Aerospace Division is dedicated to designing compact, high-performance aerospace 
              systems tailored for modern-day challenges and future possibilities. Our team thrives on 
              precision, performance, and pushing the limits of what's possible in the skies and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {aerospaceSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-blue-500 mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Current Aerospace Projects"
              subtitle="We're committed to advancing the frontiers of aerospace technology through innovative research and development programs."
              centered={true}
            />

            <div className="mt-12 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">NanoJet X1</h3>
                <p className="text-gray-600 mb-4">
                  A compact jet propulsion unit optimized for lightweight aerial systems. It's designed for micro-drones 
                  and research vehicles that require speed and stability in tight form factors.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">SkyCube Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Our CubeSat program aims to develop a fleet of small, agile satellites for LEO missions. 
                  These satellites support research, IoT integration, and earth monitoring.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">VayuDroid</h3>
                <p className="text-gray-600 mb-4">
                  A smart drone platform that incorporates machine learning-based navigation and mission control. 
                  Ideal for autonomous surveillance, terrain mapping, and delivery systems.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-6">Partner with us on your next aerospace mission</h2>
              <p className="text-gray-600 mb-6">
                GonagoorTech offers comprehensive aerospace engineering services from initial 
                concept to launch and beyond. Our team of aerospace engineers, physicists, and 
                computer scientists are ready to support your most ambitious projects.
              </p>
              <Button size="lg">Schedule a consultation</Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-blue-50 rounded-full flex items-center justify-center">
                <Rocket size={120} className="text-blue-500" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AerospacePage;
