import React from 'react';

const About = () => {
  const stats = [
    { value: '3+', label: 'Tahun Pengalaman', desc: 'Dalam web development' },
    { value: '25+', label: 'Proyek Selesai', desc: 'Aplikasi web & landing page' },
    { value: '15+', label: 'Teknologi Modern', desc: 'Framework & tools dikuasai' },
    { value: '99%', label: 'Kepuasan Klien', desc: 'Kualitas kode teruji' },
  ];

  // Daftar teknologi sesuai dengan stack kamu beserta SVG icon resminya
  const techStack = [
    {
      name: 'HTML',
      icon: 'https://www.svgrepo.com/show/452228/html-5.svg',
    },
    {
      name: 'CSS',
      icon: 'https://www.svgrepo.com/show/452185/css-3.svg',
    },
    {
      name: 'Javascript',
      icon: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
    },
    {
      name: 'PHP',
      icon: 'https://www.svgrepo.com/show/452088/php.svg',
    },
    {
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Vite',
      icon: 'https://www.svgrepo.com/show/354521/vitejs.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Tentang Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Mengenal Lebih Dekat
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
              Saya merupakan lulusan Sarjana Teknik Informatika dengan IPK 3,69/4,00. Memiliki fondasi pengetahuan di bidang teknologi informasi, khususnya rekayasa perangkat lunak, analisis sistem, pengelolaan basis data, serta pengujian perangkat lunak. Memiliki ketertarikan untuk terus mengembangkan keterampilan dan memperluas wawasan di berbagai bidang IT. Saya senang mempelajari teknologi baru, menganalisis permasalahan, serta menerapkan kemampuan teknis untuk menghasilkan solusi yang efektif dan bermanfaat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
