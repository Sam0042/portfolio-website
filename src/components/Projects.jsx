
import React, { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Sistem Informasi Manajemen Masjid Jami Roudhotul Jannah',
      description: 'Sistem Informasi Manajemen yang dikembangkan dengan tujuan membantu pencatatan keuangan dan kegiatan masjid.',
      image: '🕌',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'Figma', 'UML', 'Black Box Testing', 'UAT'],
      demoLink: '',
      codeLink: 'https://github.com/Sam0042/sim-masjid-dummy.git',
      domain: 'Full-stack',
      category: 'Proyek Skripsi'
    },
    {
      title: 'Nontons: Movies Website',
      description: 'Website yang berisi kumpulan film yang diambil dari API TMDB',
      image: '▶',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      demoLink: 'https://nontons.vercel.app/',
      codeLink: 'https://github.com/Sam0042/youtube-clone',
      domain: 'Front-end',
      category: 'Personal Project'
    },
    {
      title: 'Youtube Homepage Clone',
      description: 'Cloning Youtube dengan implementasi Rest API',
      image: '▶',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Express JS', 'RestAPI'],
      demoLink: 'https://youtube-clone-frontend-mocha-iota.vercel.app/',
      codeLink: 'https://github.com/Sam0042/youtube-clone',
      domain: 'Full-stack',
      category: 'Personal Project'
    },
    {
      title: 'Portfolio Website',
      description: 'Website portofolio pribadi yang berisi kumpulan portofolio, keahlian, pengenalan diri, dan kontak.',
      image: '💼',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      demoLink: '/',
      codeLink: 'https://github.com/Sam0042/portfolio-website.git',
      domain: 'Front-end',
      category: 'Personal Project'
    },
    {
      title: 'Website Sekolah: SMK Nasional Depok',
      description: 'Project website sekolah yang dibangun saat uji sertifikasi BNSP bidang Junior Web Developer.',
      image: '🏫',
      tech: ['Laravel', 'MySQL'],
      demoLink: '',
      codeLink: 'https://github.com/Sam0042/web-sekolah.git',
      domain: 'Full-stack',
      category: 'Proyek Tes BNSP'
    },
    {
      title: 'RestfulAPI: Covid Patients Data (ExpressJS)',
      description: 'RestfulAPI yang berisi data pasien yang dibangun menggunakan ExpressJS.',
      image: '📊',
      tech: ['Express.js', 'MySQL', 'JWT', 'Restful API'],
      demoLink: '',
      codeLink: 'https://github.com/Sam0042/covid-rest-api.git',
      domain: 'Back-end',
      category: 'Tugas Kuliah'
    },
    {
      title: 'RestfulAPI: Covid Patients Data (Laravel)',
      description: 'RestfulAPI yang berisi data pasien yang dibangun menggunakan Laravel.',
      image: '📊',
      tech: ['Laravel', 'MySQL', 'Restful API'],
      demoLink: '',
      codeLink: 'https://github.com/Sam0042/be-mid-project.git',
      domain: 'Back-end',
      category: 'Tugas Kuliah'
    },
    {
      title: 'Covid Monitoring Website: Covidout',
      description: 'Aplikasi eksplorasi monitoring total penebaran covid di Indonesia, menggunakan data yang difetch melalui API public.',
      image: '🏥',
      tech: ['React', 'Fetching API'],
      demoLink: 'https://covidout-app-sam0042.vercel.app/',
      codeLink: 'https://github.com/Sam0042/frontend-programming-uas.git',
      domain: 'Front-end',
      category: 'Tugas Kuliah'
    },
    {
      title: 'Movie Website: Moviequ',
      description: 'Aplikasi eksplorasi film modern berbasis React. Memungkinkan pengguna menambah film dan menjelajah film populer dengan antarmuka yang responsif dan interaktif yang diambil dari API TMDB.',
      image: '🎬',
      tech: ['React', 'Fetching API'],
      demoLink: 'https://movie-database-sam0042.vercel.app/',
      codeLink: 'https://github.com/Sam0042/frontend-programming-Sam0042.git',
      domain: 'Front-end',
      category: 'Tugas Kuliah'
    },
  ];

  const uniqueCategories = [
    ...new Set(projects.map((project) => project.domain))
  ];

  const [datas, setDatas] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('All');

  function handleClick(data) {
    setActiveCategory(data);

    const result = data === 'All'
      ? projects
      : projects.filter((item) => item.domain === data);

    setDatas(result);
  }

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-200 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Portofolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Project Saya
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-3">
          {['All', ...uniqueCategories].map((data) => (
            <button
              key={data}
              onClick={() => handleClick(data)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 active:scale-95 mb-5
                ${activeCategory === data
                  ? 'border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500'
                  : 'border-gray-300 bg-white text-gray-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white'
                }`}
            >
              {data}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-500/40 flex flex-col justify-between"
            >
              <div>
                {/* Banner */}
                <div className="h-44 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 flex flex-col justify-between relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  <div className="z-10 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                      {project.domain}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="z-10">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Konten Card */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="px-6 pb-6 pt-0 flex items-center gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200 shadow-sm shadow-blue-500/20"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
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
