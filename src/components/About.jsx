import React from 'react';

const About = () => {

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Get to Know Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Avatar */}
          <div className="md:col-span-5 flex justify-center items-center">
            <img
              src="https://avatars.githubusercontent.com/u/72549813?v=4"
              className="w-64 h-64 rounded-full object-cover shadow-xl shadow-blue-500/20"
              alt="Profile"
            />
          </div>

          {/* Description*/}
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-justify">
              I am a fresh graduate with a Bachelor’s degree in Computer Science and a GPA of 3.69/4.00. I have a solid foundation of knowledge in information technology, particularly in software engineering, systems analysis, database management, and software testing. I am passionate about continuing to develop my skills and expand my knowledge in various areas of IT. I enjoy learning about new technologies, analyzing problems, and applying my technical skills to develop effective and useful solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
