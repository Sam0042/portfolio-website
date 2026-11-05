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
          {/* Avatar / Visual Card */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative accent behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl rotate-3 scale-95 opacity-70 blur-sm -z-10"></div>

              <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-8 shadow-xl text-center flex flex-col items-center">

                <img src="https://avatars.githubusercontent.com/u/72549813?v=4" className='w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl shadow-lg shadow-blue-500/30 mb-6' alt="" />

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Muhammad Hisyam Mubarak</h3>
                {/* Container Logo & Nama Framework */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-3 mb-4 text-slate-400">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg shadow">
                      {/* Menggunakan tag img untuk menampilkan logo asli */}
                      <img src={tech.icon} alt={`${tech.name} logo`} className="w-7 md:w-8 h-7 md:h-8 object-contain" />

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Description*/}
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-justify">
              Saya adalah lulusan sarjana komputer (S.Kom) jurusan teknik informatika dengan IPK 3.69/4.00 dan predikat sangat memuaskan di Sekolah Tinggi Teknologi Terpadu Nurul Fikri, saya memiliki fondasi rekayasa perangkat lunak yang kuat serta pemahaman mendalam terkait pengembangan web modern. Saat ini, saya aktif mengasah keterampilan dalam membangun ekosistem aplikasi web yang efisien, mulai dari pengembangan sisi frontend hingga perancangan sistem backend yang andal. Saya selalu bersemangat untuk mengubah kompleksitas logika pemrograman menjadi solusi digital yang solutif dan memberikan pengalaman pengguna terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
