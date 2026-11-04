import React from 'react';

const Contact = () => {
  // Konfigurasi tujuan dan draf pesan untuk Web Gmail
  const recipient = "hisyammubarak90@gmail.com";
  const subject = encodeURIComponent("Peluang Karir");
  const body = encodeURIComponent("Halo Hisyam, saya tertarik dengan portofolio anda.");

  // Mengarahkan langsung ke web Gmail composer di tab baru
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

  const contactInfo = [
    {
      title: 'Email',
      value: 'hisyammubarak90@gmail.com',
      icon: '✉️',
      link: gmailWebUrl,
    },
    // {
    //   title: 'Telepon / WhatsApp',
    //   value: '+62 812-3456-7890',
    //   icon: '📞',
    //   link: 'tel:+6281234567890',
    // },
    {
      title: 'Lokasi',
      value: 'Kabupaten Bogor, Jawa Barat',
      icon: '📍',
      link: '#',
    },
  ];

  // Data Social Media (Silakan sesuaikan URL username masing-masing)
  const socialLinks = [
    {
      title: 'GitHub',
      username: '@Sam0042',
      link: 'https://github.com/Sam0042',
      color: 'hover:border-slate-500/50 dark:hover:border-slate-400/50 hover:text-white',
      icon: (
        <svg className="w-6 h-6 fill-current text-slate-700 dark:text-slate-200" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      title: 'LinkedIn',
      username: 'Muhammad Hisyam Mubarak',
      link: 'https://linkedin.com/in/muhammad-hisyam-mubarak-311445186',
      color: 'hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:text-blue-500',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      title: 'Instagram',
      username: '@mhysam_',
      link: 'https://instagram.com/mhysam_',
      color: 'hover:border-pink-500/50 dark:hover:border-pink-400/50 hover:text-pink-500',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#E4405F]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      title: 'Facebook',
      username: 'hisyammubarak09',
      link: 'https://facebook.com/hisyammubarak09',
      color: 'hover:border-blue-600/50 dark:hover:border-blue-500/50 hover:text-blue-600',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#1877F2]" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Kontak
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Hubungi Saya
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Tertarik untuk berdiskusi tentang peluang karir, proyek, atau kolaborasi? Silakan hubungi saya melalui saluran di bawah ini.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Contact Cards Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
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
        </div> */}

        {/* Social Media Cards Grid (4 Kolom dengan Icon SVG) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.title}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color} group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {social.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {social.username}
              </p>
            </a>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Ingin Mengundang Berdiskusi / Interview?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">
            Klik tombol di bawah untuk langsung membuka tab Gmail dengan draf pesan penawaran karir yang siap dikirim.
          </p>
          <a
            href={gmailWebUrl}
            target="_blank"
            rel="noopener noreferrer"
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