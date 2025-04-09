import React from 'react';
import { Section } from './shared/Section';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js', 'Figma'],
    },
    {
      title: 'Backend',
      skills: ['Python', 'Java', 'C#', 'Node.js', 'Express', 'Django', 'Flask', 'Spring Boot', '.NET'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch'],
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'CI/CD', 'Linux', 'Git', 'Splunk', 'Prometheus', 'Terraform'],
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