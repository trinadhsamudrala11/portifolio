//import React from 'react';
import { Code2, Globe, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code2 className="w-8 h-8" />}
              title="Frontend Development"
              description="Building responsive and intuitive UI using HTML, CSS, React, and AEM Components. Focused on performance and usability."
            />
            <FeatureCard
              icon={<Server className="w-8 h-8" />}
              title="Backend Development"
              description="Creating scalable server-side apps using Java, Python, and Groovy. Integrated REST APIs and GraphQL for content delivery.."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Full Stack Solutions"
              description="Delivering end-to-end cloud-integrated systems using AEM, CI/CD, Workfront, Docker, and AWS with high performance in mind."
            />
          </div>
          <div className="mt-12 text-gray-600 leading-relaxed">
            <p className="mb-4">
            With hands-on experience across Bath & Body Works, Infosys, and Vunathi Technologies, I specialize in developing scalable digital experiences using Adobe Experience Manager (AEM), Java, and modern cloud-based architectures. 
  I’ve contributed to improving metadata workflows, optimizing deployment pipelines, and integrating content delivery systems with GraphQL, Workfront, and inRiver PIM.

  My expertise bridges frontend and backend development — from building reusable AEM components to delivering REST/GraphQL APIs and automating marketing workflows.
            </p>
            <p>
              I'm passionate about clean code, performance optimization, and creating
              solutions that make a real impact. When I'm not coding, I contribute to
              open-source projects and share my knowledge through technical writing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;