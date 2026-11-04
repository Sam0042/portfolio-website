import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6 animate-bounce">
          Web Developer & Designer
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Halo, Saya{' '}
          <span className="text-blue-600">Web Developer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Membangun pengalaman digital yang modern, responsif, dan berdampak positif
          untuk pengguna dengan teknologi terbaru.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Lihat Proyek
          </a>
          <a href="#contact" className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;