import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Bath & Body Works',
      role: 'AEM Developer',
      period: '2024 - Present',
      description: 'Working on Adobe Experience Manager to build, maintain, and optimize content-driven applications, with a strong focus on automation, scalability, and performance.',
      achievements: [
        'Integrated Workfront API with AEM for asset ingestion and automated metadata tagging.',
        'Migrated asset folders and metadata in bulk using JMX API and Java services.',
        'Implemented GraphQL queries in AEM for efficient content retrieval and frontend performance.',
        'Developed custom servlet and scheduled job to automate metadata updates from PIM using service accounts.',
        'Worked with Brand Portal for asset publishing workflows and environment configuration.'
      ],
    },
    {
      company: 'Infosys',
      role: 'AEM Developer',
      period: '2021',
      description: 'Developed reusable AEM components and customized templates to meet marketing and content management goals.',
      achievements: [
        'Upgraded project from AEM 6.3 to 6.5 using Maven Archetype 24 and updated custom dispatcher rules.',
        'Integrated Workfront DAM API to post metadata via JMX endpoints and update metadata with scheduled jobs.',
        'Created OSGi configurations and services for multi-channel asset publishing and content replication.',
        'Built backend workflows for asset metadata enrichment and migration via Talend jobs.',
      ],
    },
    {
      company: 'Vunathi Technologies',
      role: 'AEM Developer',
      period: '2019 - 2021',
      description: 'Developed and maintained scalable AEM solutions, improving internal workflows and external customer experiences.',
      achievements: [
        'Developed customizable templates and backend components using Sling Models and HTL.',
        'Worked on metadata workflows to ensure consistent tagging across DAM assets.',
        'Developed secure admin and author access workflows using custom servlets and AEM permissions.',
        'Integrated third-party systems with AEM using REST APIs and asset event handlers.'
      ],
    },
  
    // {
    //   company: 'Datapoint',
    //   role: 'Full Stack Developer',
    //   period: '2021 - 2021',
    //   description: 'Designed and developed robust applications using Python, C++, JavaScript, React, Flask, Django and Node.',
    //   achievements: [
    //     'Built interactive and real-time dashboards reducing manual reporting by 80%.',
    //     'Implemented unit, integration, and automated functional tests using Pytest, Selenium, Postman and Swagger.',
    //     'Optimized database queries improving performance by 50%',
    //   ],
    // },

  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-12 border-l-2 border-indigo-200 ${
                index === experiences.length - 1 ? '' : 'mb-8'
              }`}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600" />
              <div className="bg-gray-50 rounded-lg p-6 ml-4">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <div className="flex items-center text-gray-600 mt-1 mb-4">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;