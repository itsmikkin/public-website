
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code, Monitor, Smartphone, Layout } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const SoftwarePage = () => {
  const softwareSolutions = [
    {
      icon: <Smartphone size={32} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications built for performance, usability, and scale.",
    },
    {
      icon: <Monitor size={32} />,
      title: "Web Development",
      description: "Clean, modern websites and portals that perform across devices and browsers.",
    },
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "Intuitive user interfaces and engaging user experiences, balancing aesthetics and functionality.",
    },
    {
      icon: <Code size={32} />,
      title: "Custom Software Solutions",
      description: "Software tailored precisely to business processes—whether it's an internal tool, automation suite, or cloud-based platform.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20">
          <SectionHeading
            title="Software Division"
            subtitle="Technology that adapts to your vision."
            centered={true}
          />

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700">
              Our Software Division focuses on developing scalable, responsive, and reliable digital platforms. 
              Whether it's a mobile app or a full-scale enterprise system, we bring together design thinking 
              and development expertise to deliver user-centric solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {softwareSolutions.map((solution, index) => (
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
              title="Current Software Projects"
              subtitle="With a deep understanding of frontend and backend architectures, and a commitment to continuous innovation, our software team crafts digital experiences that work seamlessly and look stunning."
              centered={true}
            />

            <div className="mt-12 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">OmniApps</h3>
                <p className="text-gray-600 mb-4">
                  A multi-industry app framework designed for quick deployment of mobile and web solutions — 
                  currently used in healthcare, education, and e-commerce.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">UXHive</h3>
                <p className="text-gray-600 mb-4">
                  A toolkit of UX patterns and design templates that helps developers build highly consistent 
                  and user-friendly interfaces across platforms and devices.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Custom CRM Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Built from the ground up for each client, integrating automation, reporting, 
                  and third-party tools to match specific sales and service needs.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-6">Partner with us on your next software project</h2>
              <p className="text-gray-600 mb-6">
                GonagoorTech delivers end-to-end software development services from initial concept to deployment and support. 
                Our team of expert developers, designers, and project managers are ready to transform your ideas into reality.
              </p>
              <Button size="lg">Schedule a consultation</Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-blue-50 rounded-full flex items-center justify-center">
                <Code size={120} className="text-blue-500" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SoftwarePage;
