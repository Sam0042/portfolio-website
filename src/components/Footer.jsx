import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            hisyammubarak<span className="text-slate-400">.</span>
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
          Dibuat dengan <span className="text-blue-600 dark:text-blue-400 font-medium">React</span>,{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">Vite</span>, &{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">Tailwind CSS</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
