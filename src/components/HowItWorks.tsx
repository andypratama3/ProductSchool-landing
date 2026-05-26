import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Daftar & jadwalkan demo',
    description: 'Mulai dengan membuat akun atau menjadwalkan sesi demo gratis dengan tim kami untuk melihat langsung kecocokan platform.',
    beginnerTip: 'Klik tombol "Trial 14 Hari", isi data sekolah Anda. Tim kami akan hubungi untuk panduan selanjutnya. Gampang, tidak perlu install apa-apa.'
  },
  {
    number: '02',
    title: 'Upload data & konfigurasi',
    description: 'Import data siswa, guru, dan kelas dengan mudah menggunakan Excel. Konfigurasikan template rapor sesuai dengan standar sekolah Anda.',
    beginnerTip: 'Tinggal upload file Excel data siswa dan guru yang sudah ada. Sistem akan otomatis membaca. Selesai dalam hitungan jam, bukan hari.'
  },
  {
    number: '03',
    title: 'Jalankan & onboarding',
    description: 'Mulai jalankan sistem bersama tim onboarding kami. Kami siap mendampingi adopsi teknologi di sekolah Anda hingga lancar.',
    beginnerTip: 'Tim kami akan dampingi selama 1 minggu penuh. Ada masalah? Tinggal chat. Sekolah Anda akan lancar pakai sistem dalam waktu singkat.'
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl tracking-tight">Bagaimana Cara Mulai?</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Hanya 3 langkah mudah — dari nol hingga sekolah digital tanpa ribet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 dark:bg-slate-800" aria-hidden="true"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="mx-auto w-24 h-24 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-800 shadow-sm relative z-10 text-primary dark:text-blue-400 font-bold text-3xl font-mono">
                {step.number}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto text-sm">
                {step.description}
              </p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-500 leading-relaxed bg-white dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800 max-w-sm mx-auto">
                💡 {step.beginnerTip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
