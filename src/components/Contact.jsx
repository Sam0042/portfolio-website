import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@developer.com',
      icon: '✉️',
      link: 'mailto:hello@developer.com',
    },
    {
      title: 'Telepon / WhatsApp',
      value: '+62 812-3456-7890',
      icon: '📞',
      link: 'tel:+6281234567890',
    },
    {
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
      icon: '📍',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Kontak
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Hubungi Saya
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk mengirim pesan kepada saya.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/40 dark:hover:border-blue-500/40 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">
                {info.title}
              </h3>
              <p className="text-base font-bold text-slate-900 dark:text-white">
                {info.value}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">
            Klik tombol di bawah untuk langsung mengirimkan email penawaran atau pertanyaan.
          </p>
          <a
            href="mailto:hello@developer.com"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            Kirim Email Sekarang →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
