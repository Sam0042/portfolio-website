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
    {
      title: 'Lokasi',
      value: 'Kabupaten Bogor, Jawa Barat',
      icon: '📍',
      link: '#',
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
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4"></div>
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