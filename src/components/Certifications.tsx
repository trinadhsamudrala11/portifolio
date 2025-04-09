import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Section } from './shared/Section';
import { Card } from './shared/Card';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Feb 2024',
      credentialId: 'N/A',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      icon: 'amalogo.png',
    },
    {
      title: 'Python for Data Science and AI',
      issuer: 'IBM via Coursera',
      date: '2023',
      credentialId: 'N/A',
      link: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
      icon: 'ibm.png',
    },
    {
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL',
      date: '2021',
      credentialId: 'N/A',
      link: 'https://nptel.ac.in/courses/106/106/106106182/',
      icon: 'nptel.png',
    },
    {
      title: 'Product Design and Development',
      issuer: 'NPTEL',
      date: '2021',
      credentialId: 'N/A',
      link: 'https://nptel.ac.in/courses/112/105/112105245/',
      icon: 'nptel.png',
    },
    
    // {
    //   title: 'Developing Front-End Apps with React',
    //   issuer: 'IBM',
    //   date: 'Mar 2024',
    //   credentialId: 'XF2BZ2N4D4XU',
    //   link: 'https://www.coursera.org/account/accomplishments/verify/XF2BZ2N4D4XU',
    //   icon: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=100&q=80',
    // },
    // {
    //   title: 'Developing Back-End Apps with Node.js and Express',
    //   issuer: 'IBM',
    //   date: 'Mar 2024',
    //   credentialId: 'USSSHFHK8JRR',
    //   link: 'https://www.coursera.org/account/accomplishments/verify/USSSHFHK8JRR',
    //   icon: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=100&q=80',
    // },
    // {
    //   title: 'Python for Data Science, AI & Development',
    //   issuer: 'IBM',
    //   date: 'Apr 2024',
    //   credentialId: 'AU65XGFMWU5U',
    //   link: 'https://www.coursera.org/account/accomplishments/verify/AU65XGFMWU5U',
    //   icon: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=100&q=80',
    // },
    // {
    //   title: 'Application Development using Microservices and Serverless',
    //   issuer: 'IBM',
    //   date: 'Jun 2024',
    //   credentialId: 'PX2GUSU8LJGU',
    //   link: 'https://coursera.org/verify/PX2GUSU8LJGU',
    //   icon: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=100&q=80',
    // },
  ];

  return (
    <Section
      id="certifications"
      title="Professional Certifications"
      subtitle="Validated expertise and continuous learning"
      className="bg-white"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="group">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={cert.icon}
                      alt={cert.issuer}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
                  </div>
                  <p className="text-gray-600 mt-1">{cert.issuer}</p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-1" />
                    <span>Issued {cert.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">ID: {cert.credentialId}</p>
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;