import React from 'react';

const About = () => {
  const stats = [
    { value: '3+', label: 'Tahun Pengalaman', desc: 'Dalam web development' },
    { value: '25+', label: 'Proyek Selesai', desc: 'Aplikasi web & landing page' },
    { value: '15+', label: 'Teknologi Modern', desc: 'Framework & tools dikuasai' },
    { value: '99%', label: 'Kepuasan Klien', desc: 'Kualitas kode teruji' },
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
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">Laravel • React • Vite • Tailwind</p>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                    Clean Code
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                    Responsive
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Stats */}
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Saya adalah seorang Web Developer enthusiasm dengan ketertarikan kuat dalam membangun
              antarmuka modern yang cepat, intuitif, dan ramah pengguna. Menggabungkan estetika
              desain bersih dengan arsitektur kode yang skalabel dan mudah dipelihara.
            </p>

            {/* Stat Cards */}
            {/* <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
