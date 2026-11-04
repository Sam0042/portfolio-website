import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Saya adalah seorang Web Developer dengan pengalaman membangun aplikasi web
              modern menggunakan React, Node.js, dan teknologi terkini. Memiliki kepekatan
              pada pengembangan frontend dengan fokus pada performa, aksesibilitas, dan
              pengalaman pengguna yang optimal.
            </p>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Selalu antusias mempelajari teknologi baru dan menerapkan best practices dalam
              pengembangan software. Berkomitmen untuk menulis kode yang bersih, maintainable,
              dan scalable.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-600">3+</h3>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-600">20+</h3>
                <p className="text-sm text-gray-600">Proyek Selesai</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-600">10+</h3>
                <p className="text-sm text-gray-600">Teknologi Dikuasai</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-600">5+</h3>
                <p className="text-sm text-gray-600">Klien Puas</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                Foto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;