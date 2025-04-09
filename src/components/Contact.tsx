import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              value="phani.kumar855@gmail.com"
              href="mailto:phani.kumar855@gmail.com"
            />
            <ContactCard
              icon={<Linkedin className="w-6 h-6" />}
              title="LinkedIn"
              value="linkedin.com/in/phani-kanuri"
              href="https://www.linkedin.com/in/phani-kanuri/"
            />
            <ContactCard
              icon={<Github className="w-6 h-6" />}
              title="GitHub"
              value="github.com/phanikum4r"
              href="https://github.com/phanikum4r"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{value}</p>
  </a>
);

export default Contact;