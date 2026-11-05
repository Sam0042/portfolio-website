import React from 'react';

const SkillCard = ({ title, icon, skills }) => (
  <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40">
    <div className="flex items-center gap-3.5 mb-5">
      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h3>

      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/50 dark:hover:text-blue-400"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML5 & CSS3', 'Responsive Design'],
    },
    {
      title: 'Backend & Database',
      icon: '⚡',
      skills: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'Express.js', 'RESTful APIs', 'Authentication / JWT'],
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: ['Figma', 'Git & GitHub', 'VS Code', 'Postman', 'npm / yarn', 'Vercel'],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Keahlian & Kemampuan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Teknologi & Framework yang Dikuasai
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <SkillCard key={cat.title} title={cat.title} icon={cat.icon} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
