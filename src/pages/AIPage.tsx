
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Brain, Cpu, Computer, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AIPage = () => {
  const aiSolutions = [
    {
      icon: <Brain size={32} />,
      title: "AI Processor Design",
      description: "Next-generation AI chip focused on accelerating machine learning workloads while maintaining power efficiency.",
    },
    {
      icon: <Computer size={32} />,
      title: "Sudarshan.AI",
      description: "A groundbreaking LLM-based multimodal system that converts sound into video, exploring the synergy between auditory input and visual imagination.",
    },
    {
      icon: <Cpu size={32} />,
      title: "Custom AI Development",
      description: "Specialized AI solutions tailored to industry-specific challenges, from NLP chatbots to machine vision for quality inspection.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Semantic Vision Engine",
      description: "A context-aware computer vision system that understands environments and objects dynamically—useful in robotics, security, and AR.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20">
          <SectionHeading
            title="Artificial Intelligence Division"
            subtitle="Bringing intelligence to machines — and meaning to data."
            centered={true}
          />

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700">
              The AI Division at Gonagoor Technologies is where science fiction meets real-world functionality. 
              We are building cutting-edge AI systems that can perceive, understand, and create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {aiSolutions.map((solution, index) => (
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
              title="Current AI Projects"
              subtitle="We don't just train models — we engineer intelligence."
              centered={true}
            />

            <div className="mt-12 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Sudarshan.AI</h3>
                <p className="text-gray-600 mb-4">
                  Multimodal AI capable of generating video content from audio input — a true step forward in generative and creative AI.
                  This project explores the deep synergy between auditory input and visual imagination, with applications in accessibility, 
                  entertainment, and creative media.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">NeuronX Processor</h3>
                <p className="text-gray-600 mb-4">
                  A specialized AI chip under development for real-time inference on edge devices — focused on smart mobility, 
                  drones, and consumer AI devices. It's designed to accelerate machine learning workloads while maintaining power efficiency.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Semantic Vision Engine</h3>
                <p className="text-gray-600 mb-4">
                  A context-aware computer vision system that understands environments and objects dynamically — useful in robotics, 
                  security, and AR. Our models are designed with transparency, accuracy, and robustness in mind.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-6">Partner with us on your next AI project</h2>
              <p className="text-gray-600 mb-6">
                GonagoorTech offers comprehensive AI development services from initial concept to deployment and beyond. 
                Our team of AI engineers, data scientists, and researchers are ready to support your most ambitious projects.
              </p>
              <Button size="lg">Schedule a consultation</Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-blue-50 rounded-full flex items-center justify-center">
                <Brain size={120} className="text-blue-500" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AIPage;
