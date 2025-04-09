import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Arizona State University',
      role: 'Software Engineer',
      period: '2024 - Present',
      description: 'Led development of microservices architecture, improving system scalability by 200%. Mentored junior developers and implemented best practices.',
      achievements: [
        
        'Led team of 5 developers for major platform upgrade',
        'Engineered a high-performance backend system with Javascript, Express.js and Node.js, enabling real-time data processing and efficient data retrieval from MongoDB and Redis databases.',
        'Designed & developed front-end using Figma, HTML, CSS, Javascript, and React for web & mobile applications.',
        'Conducted unit tests and code reviews using Mocha and Chai leading to the resolution of over 50 bugs.',
        'Deployed applications on AWS, leveraging cloud services to enhance scalability by 50%.'
      ],
    },
    {
      company: 'Accenture',
      role: 'Application Development Associate',
      period: '2021 - 2022',
      description: 'Developed and maintained multiple client projects. Collaborated with design team for optimal UX.',
      achievements: [
        'Developed front-end components using Angular, HTML, CSS, Javascript, and Typescript, enhancing the UI/UX.',
        'Reduced API response time by 40% through optimization',
        'Implemented database solutions for web applications using SQL Server and MySQL', 
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Implemented automated testing increasing code coverage to 90%',
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