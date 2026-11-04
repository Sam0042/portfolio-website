import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
      image: '🛒',
      tech: ['React', 'Node.js', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas kolaboratif dengan fitur real-time dan tim.',
      image: '📋',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard cuaca dengan data real-time dan prediksi cuaca 7 hari ke depan.',
      image: '🌤️',
      tech: ['React', 'API', 'Chart.js'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio pribadi yang dibuat menggunakan React, Vite, dan Tailwind CSS.',
      image: '💼',
      tech: ['React', 'Vite', 'Tailwind'],
      link: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyek Terkini</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-4xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 font-medium hover:underline">
                  Lihat Detail →
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