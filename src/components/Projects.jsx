import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Website portofolio pribadi modern responsif penuh, dan animasi halus.',
      image: '💼',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: 'https://github.com/Sam0042/portfolio-website.git',
      domain: 'Front-end',
      category: 'Personal Project'
    },
    {
      title: 'Management Information System: Roudhotul Jannah Mosque',
      description: 'Website portofolio pribadi modern responsif penuh, dan animasi halus.',
      image: '🕌',
      tech: ['Laravel', 'MySQL', 'MariaDB', 'Bootstrap', 'Figma'],
      demoLink: '#',
      codeLink: 'https://github.com/Sam0042/portfolio-website.git',
      domain: 'Full Stack',
      category: 'Proyek Skripsi'
    },
    {
      title: 'RestfulAPI: Covid Patients Data (ExpressJS)',
      description: 'Website portofolio pribadi modern responsif penuh, dan animasi halus.',
      image: '📊',
      tech: ['Express.js', 'MySQL', 'JWT', 'Restful API'],
      demoLink: '#',
      codeLink: 'https://github.com/Sam0042/covid-rest-api.git',
      domain: 'Back-end',
      category: 'Tugas Kuliah'
    },
    {
      title: 'RestfulAPI: Covid Patients Data (Laravel)',
      description: 'Website portofolio pribadi modern responsif penuh, dan animasi halus.',
      image: '📊',
      tech: ['Express.js', 'MySQL', 'Restful API'],
      demoLink: '#',
      codeLink: 'https://github.com/Sam0042/be-mid-project.git',
      domain: 'Back-end',
      category: 'Tugas Kuliah'
    },
    {
      title: 'Covid Monitoring Website: Covidout',
      description: 'Aplikasi eksplorasi film modern berbasis React. Memungkinkan pengguna menambah film dan menjelajah film populer dengan antarmuka yang responsif dan interaktif yang diambil dari API IMDB.',
      image: '🏥',
      tech: ['React', 'Fetching API'],
      demoLink: 'https://covidout-app-sam0042.vercel.app//',
      codeLink: 'https://github.com/Sam0042/frontend-programming-uas.git',
      domain: 'Front-end',
      category: 'Tugas Kuliah'
    },
    {
      title: 'Movie Website: Moviequ',
      description: 'Aplikasi eksplorasi film modern berbasis React. Memungkinkan pengguna menambah film dan menjelajah film populer dengan antarmuka yang responsif dan interaktif yang diambil dari API IMDB.',
      image: '🎬',
      tech: ['React', 'Fetching API'],
      demoLink: 'https://movie-database-sam0042.vercel.app/',
      codeLink: 'https://github.com/Sam0042/frontend-programming-Sam0042.git',
      domain: 'Front-end',
      category: 'Tugas Kuliah'
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Portofolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Proyek Pilihan
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 border-b border-slate-200/60 dark:border-slate-800">
                  {project.image}
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    <span
                      key={project.domain}
                      className="px-3 py-1.5 text-sm font-semibold rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60"
                    >
                      {project.domain}
                    </span>
                    <span
                      key={project.category}
                      className="px-3 py-1.5 text-sm font-semibold rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60"
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center gap-4">
                <a
                  href={project.demoLink} target='blank'
                  className="flex-1 text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200 shadow-sm shadow-blue-500/20"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink} target='blank'
                  className="flex-1 text-center py-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
