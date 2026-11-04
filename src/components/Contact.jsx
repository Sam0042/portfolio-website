import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-2 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Kontak Saya</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Siap untuk membuat proyek terbaik bersama? Kirim pesan atau hubungi saya melalui
          media sosial berikut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:contact@example.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Email Saya
          </a>
          <a href="tel:+6281234567890" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Call: +62 812-3456-7890
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;