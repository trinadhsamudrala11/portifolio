import React from 'react';
import { Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { SocialLink } from './shared/SocialLink';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                <img
                  src="profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center justify-center p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <Terminal className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-gray-600">Available for hire</span>
                </div>
              </div> */}
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Trinadh Samudrala
                <span className="block text-3xl md:text-4xl mt-2">Java Developer</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Crafting exceptional digital experiences with modern technologies.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </a>
                {/* <a
                  href="#projects"
                  className="px-8 py-4 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  View Projects
                </a> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-6">
            <SocialLink href="https://github.com/trinadhsamudrala11" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/trinadh-samudrala" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://leetcode.com/u/trinadh11/" icon={<Code />} label="Leetcode" />
            <SocialLink href="mailto:trinadhsamudrala11@gmail.com" icon={<Mail />} label="Email" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;