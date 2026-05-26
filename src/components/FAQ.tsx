import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Apakah ada trial / coba gratis?",
    answer: "Ya, kami memberikan 14 hari free trial untuk mengakses semua fitur ProductSchool secara penuh tanpa memerlukan kartu kredit. Anda bebas eksplorasi sebelum berlangganan.",
    forBeginners: "Coba dulu gratis 14 hari, semua fitur bisa dicoba. Kalau cocok, baru bayar. Tidak perlu khawatir salah pilih."
  },
  {
    question: "Gateway pembayaran apa saja yang didukung?",
    answer: "Saat ini sistem kami terintegrasi secara native dengan Midtrans dan Xendit yang mendukung Virtual Account, e-Wallet (Gopay, OVO), dan QRIS. Kami juga mendukung pencatatan transfer bank manual.",
    forBeginners: "Orang tua bisa bayar SPP pakai GoPay, QRIS (scan di Indomaret/Alfamart), atau transfer ke Virtual Account. Semua otomatis tercatat lunas."
  },
  {
    question: "Apakah format rapor sesuai dengan Diknas?",
    answer: "Tentu! Kami menyediakan template baku yang sudah disesuaikan dengan Kurikulum Merdeka dan Kurikulum 2013 (K13). Kami juga bisa membantu kustomisasi format spesifik sekolah Anda.",
    forBeginners: "Rapor sudah sesuai standar pemerintah. Tinggal pakai, tidak perlu bikin format dari nol. Kalau ada format khusus sekolah, kami bisa bantu sesuaikan."
  },
  {
    question: "Apakah data dan server aman?",
    answer: "Keamanan adalah prioritas kami. Seluruh lalu lintas data dienkripsi (HTTPS). Kami juga melakukan pencadangan (backup) data harian ke server cloud terpisah secara otomatis.",
    forBeginners: "Data sekolah aman. Semua dikunci (dienkripsi) dan dicadangkan (backup) setiap hari ke server berbeda. Aman meski server utama bermasalah."
  },
  {
    question: "Bagaimana cara kirim notifikasi SPP via WhatsApp?",
    answer: "Sistem telah terintegrasi dengan Meta Cloud API (WhatsApp Official). Notifikasi dikirim otomatis beserta rincian dan tautan bayar sesuai jadwal jatuh tempo tagihan.",
    forBeginners: "Orang tua dapat WhatsApp otomatis setiap ada tagihan. Tinggal klik link, bayar, selesai. Tidak perlu datang ke sekolah hanya untuk bayar SPP."
  },
  {
    question: "Berapa lama proses implementasi aplikasi ini?",
    answer: "Rata-rata aktivasi dan proses migrasi memakan waktu 1 minggu. Kami menyediakan tim onboarding dedikasi untuk mengimpor data master (siswa, guru) ke sistem.",
    forBeginners: "Cuma butuh 1 minggu dari daftar sampai siap pakai. Tim kami bantu pindahkan data dari Excel ke sistem. Gak perlu repot urus teknis."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl tracking-tight mb-4">Pertanyaan Sering Diajukan</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">Pelajari lebih lanjut mengenai fitur, implementasi, dan keamanan dari ekosistem ProductSchool.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary shadow-lg shadow-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="pr-8">
                    <h3 className={`text-lg font-bold ${isOpen ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{faq.question}</h3>
                    {!isOpen && faq.forBeginners && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{faq.forBeginners}</p>
                    )}
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </div>
                      {faq.forBeginners && (
                        <div className="px-6 pb-6">
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                            <strong className="text-slate-700 dark:text-slate-200">Intinya:</strong> {faq.forBeginners}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
