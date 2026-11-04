import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Keahlian</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Proyek</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;