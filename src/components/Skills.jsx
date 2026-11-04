import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keahlian</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Frontend Development</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7l7 9z"></path></svg>
                React.js
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7l7 9z"></path></svg>
                HTML/CSS
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7l7 9z"></path></svg>
                JavaScript
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7l7 9z"></path></svg>
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Backend Development</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7l7 9z"></path></svg>
                Node.js
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7l7 9z"></path></svg>
                Express.js
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7l7 9z"></path></svg>
                MongoDB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;