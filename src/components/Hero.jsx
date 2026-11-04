import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-medium mb-8 transition-transform duration-300 hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Open for Full-time & Internship Opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Halo, Saya Hisyam <span className="inline-block animate-wave">👋</span>
          <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Full-Stack Web Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Lulusan Teknik Informatika (S.Kom) yang berfokus pada pengembangan aplikasi web modern. Menguasai Laravel, React, dan Tailwind CSS untuk membangun antarmuka yang intuitif serta arsitektur backend yang andal.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 text-center"
          >
            Lihat Proyek Saya
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 active:scale-95 text-center"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Tech stack highlights */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
          <span className="text-slate-400 dark:text-slate-500">Tech Stack:</span>
          <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Laravel</span>
          <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Vite</span>
          <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tailwind CSS</span>
          <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">React</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
