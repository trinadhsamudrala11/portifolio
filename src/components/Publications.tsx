import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Blockchain based Decentralized Vehicle Booking Service',
      publisher: 'IEEE',
      date: 'Nov 2021',
      link: 'https://ieeexplore.ieee.org/document/9591711',
      type: 'Conference',
    },
    // {
    //   title: 'Optimizing React Performance: Advanced Techniques',
    //   publisher: 'Dev.to',
    //   date: 'Dec 2023',
    //   link: 'https://dev.to',
    //   type: 'Tutorial',
    // },
    // {
    //   title: 'Machine Learning in Production: Best Practices',
    //   publisher: 'Towards Data Science',
    //   date: 'Nov 2023',
    //   link: 'https://towardsdatascience.com',
    //   type: 'Research',
    // },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Publications</h2>
        <div className="max-w-2xl mx-auto">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 last:mb-0"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium">{pub.publisher}</span>
                      {/* <span className="mx-2">•</span> */}
                      {/* <span>{pub.type}</span> */}
                      <span className="mx-2">•</span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;