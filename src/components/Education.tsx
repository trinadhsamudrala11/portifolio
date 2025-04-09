import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Section } from './shared/Section';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer and Information Sciences",
      school: "George Mason University",
      location: "Fairfax, VA",
      period: "2022 - 2024",
      description: "Core focus on Algorithms, Software Design and Software Testing. Research focus on Machine Learning and Data Science.",
      achievements: [
        "GPA: 3.7/4.0",        
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Velagapudi Ramakrishna Siddhartha Engineering College",
      location: "Vijayawada, India",
      period: "2017 - 2021",
      description: "Core focus on Data Structures, Algorithms, Object Oriented Design, Database Management, Computer Networks, Operating Systems, Software Engineering and Software Testing.",
      achievements: [
        "Led University Coding Club",
        "First Place in Annual Hackathon",
        
      ]
    }
  ];

  return (
    <Section
      id="education"
      title="Education"
    //   subtitle="Academic Background and Achievements"
      className="bg-white"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{edu.school}, {edu.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{edu.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {/* {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;