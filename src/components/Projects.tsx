import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from './shared/Card';
import { Section } from './shared/Section';

const Projects = () => {
  const projects = [
    {
      title: 'Decentralized-Blockchain-App',
      description: 'Implemented a Blockchain-based application using Ethereum, Solidity, IPFS, Node.js, React and web development tools.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      tech: ['Hyperledger', 'Etherium', 'Solidity', 'RemixIDE', 'Metamask', 'React', 'Node.js', 'JSON'],
      github: 'https://github.com/phanikum4r/Decentralized-Blockchain-App',
      demo: 'https://example.com',
    },
    {
      title: 'Fraud Detection System',
      description: 'A Fraud Detection System to detect fraudulent transactions using both traditional features and graph-based network features extracted from a graph database',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Neo4j', 'Cypher', 'Logistic Regression', 'Random Forest', 'Support Vector Machine'],
      github: 'https://github.com/phanikum4r/Fraud-Detection-With-Graph-Databases-and-Machine-Learning',
      demo: 'https://example.com',
    },
    {
      title: 'Online Course Portal',
      description: 'Online course portal for users to enroll courses and take quizzes online.',
      image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Django', 'React', 'Javascript', 'SQL'],
      github: 'https://github.com/phanikum4r/Online_Course_Portal',
      demo: 'https://example.com',
    },
    // {
    //   title: 'E-commerce Platform',
    //   description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    //   image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    //   tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    // },
    // {
    //   title: 'Project Management Tool',
    //   description: 'Collaborative project management application with real-time updates and task tracking.',
    //   image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    //   tech: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    // },
    // {
    //   title: 'AI Content Generator',
    //   description: 'ML-powered content generation tool with advanced NLP capabilities.',
    //   image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&w=800&q=80',
    //   tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    // },
  ];

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Some of my recent work that showcases my skills and experience"
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="group">
            {/* <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div> */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <ProjectLink href={project.github} icon={<Github />} label="Code" />
                {/* <ProjectLink href={project.demo} icon={<ExternalLink />} label="Demo" /> */}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
  >
    {React.cloneElement(icon, { className: 'w-5 h-5 mr-1' })}
    {label}
  </a>
);

export default Projects;