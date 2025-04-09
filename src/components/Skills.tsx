import React from 'react';
import { Section } from './shared/Section';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'HTML', 'CSS', 'React', 'jQuery', 'AEM Components', 'OSGi', 'Apache Sling'],
    },
    {
      title: 'Backend',
      skills: ['Java', 'Python', 'Groovy', 'Node.js', 'Spring Boot', 'Flask', 'GraphQL', 'REST APIs' ],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch'],
    },
    {
      title: 'DevOps',
      skills: ['Jenkins', 'Docker', 'Bitbucket', 'Git', 'Jira', 'Workfront', 'Linux', 'AWS', 'Azure', 'GCP'],
    },
  ];

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
      className="py-20 bg-gray-50" // Changed to maintain alternating pattern
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default Skills;