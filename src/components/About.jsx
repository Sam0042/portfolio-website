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
      name: 'Laravel',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#FF2D20" d="M11.93 2.016a.44.44 0 00-.223.064L3.486 7.032a.443.443 0 00-.223.382v9.572c0 .16.086.308.223.382l8.221 4.952a.442.442 0 00.446 0l8.22-4.952a.443.443 0 00.223-.382V7.414a.443.443 0 00-.223-.382L12.153 2.08a.44.44 0 00-.223-.064zm-.972 2.37l6.55 3.948-3.084 1.861-3.466-2.09v-3.72zm-2.017 1.216v3.719L5.475 9.41l3.066-1.85v-.062zm-4.329 3.01l3.522 2.124-3.522 2.124V9.612zm10.511.001l3.522 2.123-3.522 2.125V9.613zm-7.009 3.864l3.468 2.092v3.719l-6.55-3.948 3.082-1.863zm4.512 0l3.466 2.091-3.083 1.862-6.551-3.947 3.084-1.863.084.004 3.001 1.853z" />
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#61DAFB" d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-9C6.48 1.5 2 5.98 2 11.5S6.48 21.5 12 21.5 22 17.02 22 11.5 17.52 1.5 12 1.5zm0 18c-3.59 0-6.5-2.91-6.5-6.5S8.41 6.5 12 6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" />
        </svg>
      ),
    },
    {
      name: 'Vite',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#646CFF" d="M3.059 4.672L12 20.316l8.941-15.644L17.765 3.5 12 13.562 6.235 3.5 3.059 4.672z" /><path fill="#BD34FE" d="M12 2.112l10.535 18.418H1.465L12 2.112z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#38BDF8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C14.037 10.49 15.3 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.748-1.786-3.011-3.276-5.712-3.276zm-6 9.6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.748 1.786 3.011 3.276 5.712 3.276 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.748-1.786-3.011-3.276-5.712-3.276z" />
        </svg>
      ),
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
                    <div
                      key={index}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs font-medium transition-colors duration-200 ${tech.color}`}
                      title={tech.name}
                    >
                      {tech.icon}
                      <span className="text-slate-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Description & Stats */}
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Saya adalah lulusan sarjana komputer (S.Kom) jurusan teknik informatika dengan IPK 3.69/4.00 dan predikat sangat memuaskan di Sekolah Tinggi Teknologi Terpadu Nurul Fikri, saya memiliki fondasi rekayasa perangkat lunak yang kuat serta pemahaman mendalam terkait pengembangan web modern. Saat ini, saya aktif mengasah keterampilan dalam membangun ekosistem aplikasi web yang efisien, mulai dari pengembangan sisi frontend hingga perancangan sistem backend yang andal. Saya selalu bersemangat untuk mengubah kompleksitas logika pemrograman menjadi solusi digital yang solutif dan memberikan pengalaman pengguna terbaik.
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
