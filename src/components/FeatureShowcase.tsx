import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export function FeatureShowcase() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500" id="fitur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Showcase 1 */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-24">
          <AnimateIn direction="right" className="mb-12 lg:mb-0">
            <figure className="relative rounded-3xl bg-slate-900 aspect-square overflow-hidden border border-slate-800 shadow-2xl group p-4 lg:p-8 transition-colors duration-500">
               <div className="w-full h-full relative rounded-2xl overflow-hidden ring-1 ring-white/10">
                 <img src="/dashboard-mockup.png" alt="Fitur Rapor Digital ProductSchool - Cetak rapor otomatis sesuai Kurikulum Merdeka dan K13" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent"></div>
               </div>
               <figcaption className="sr-only">Tampilan fitur Rapor Digital ProductSchool yang mendukung Kurikulum Merdeka, cetak massal PDF, dan distribusi via WhatsApp.</figcaption>
            </figure>
          </AnimateIn>
          <AnimateIn direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-500/20 border border-green-100 dark:border-green-500/30 rounded-full text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
              Otomatisasi Laporan
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Rapor Digital Sesuai Standar Nasional</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Tinggalkan cara manual menyalin nilai. Input nilai sekali, sistem kami akan mencetak ratusan rapor dalam hitungan menit. Telah disesuaikan dengan format Kurikulum Merdeka dan K13.
            </p>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
               <strong>Contoh untuk pemula:</strong> Bu Guru tinggal masukkan nilai ulangan harian. Sistem langsung hitung nilai akhir, predikat (A/B/C/D), dan deskripsi rapor. Di akhir semester, cukup klik "Cetak Semua", 500 rapor langsung jadi PDF dan bisa dikirim ke WhatsApp orang tua.
            </p>
            <ul className="space-y-4">
              {['Kalkulasi nilai akhir & predikat otomatis tanpa Excel', 'Ekspor massal ke berkas PDF print-ready dalam hitungan menit', 'Distribusi langsung ke WhatsApp orang tua masing-masing', 'Tanda tangan digital Kepala Sekolah terintegrasi'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>

        {/* Showcase 2 */}
        <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 lg:gap-16 items-center">
          <AnimateIn direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-blue-500/20 border border-primary/20 dark:border-blue-500/30 rounded-full text-primary dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              Keuangan Terpadu
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Tagihan & SPP Otomatis via Virtual Account</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Monitoring tunggakan secara real-time. Sistem akan mengirim invoice SPP bulanan ke WhatsApp orang tua secara presisi pada tanggal yang ditentukan, langsung dengan link pembayaran.
            </p>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
               <strong>Contoh untuk pemula:</strong> Setiap tanggal 1, tagihan SPP otomatis terkirim ke WhatsApp orang tua. Orang tua cukup klik "Bayar Sekarang" — bisa pakai GoPay, QRIS, atau transfer. Begitu bayar, status langsung berubah jadi "LUNAS". Tidak perlu lagi orang tua datang ke sekolah atau Bendahara mereka-reka pembukuan.
            </p>
            <ul className="space-y-4">
              {['Auto-reminder via pesan WhatsApp H-7, H-3, dan jatuh tempo', 'Integrasi Midtrans (Virtual Account, GoPay, QRIS)', 'Rekonsiliasi transaksi otomatis 24/7 tanpa admin', 'Laporan arus kas & analitik keuangan sekolah real-time'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn direction="left" className="mb-12 lg:mb-0 w-full">
            <figure className="relative rounded-3xl bg-slate-900 aspect-square overflow-hidden border border-slate-800 shadow-2xl group p-4 lg:p-8 transition-colors duration-500">
               <div className="w-full h-full relative rounded-2xl overflow-hidden ring-1 ring-white/10">
                 <img src="/dashboard-mockup.png" alt="Fitur Pembayaran SPP Online ProductSchool - Midtrans QRIS dan Virtual Account" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 filter hue-rotate-180" />
                 <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/60 to-transparent"></div>
               </div>
               <figcaption className="sr-only">Tampilan fitur pembayaran SPP online ProductSchool yang terintegrasi dengan Midtrans, QRIS, GoPay, dan Virtual Account.</figcaption>
            </figure>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
