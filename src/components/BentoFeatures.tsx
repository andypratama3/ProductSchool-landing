import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Bot, Calculator, LayoutTemplate, ShieldCheck, MapPin, Heart } from 'lucide-react';

export function BentoFeatures() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold uppercase tracking-wider text-xs mb-6" id="fitur">
            Modul Premium Terintegrasi
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl tracking-tight leading-tight">
            Lebih dari sekadar aplikasi Rapor. Ini adalah ekosistem OS Sekolah.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Sistem kami dirancang untuk memangkas ribuan jam kerja manual. Mulai dari pendaftaran siswa baru, penggajian guru, hingga kecerdasan buatan untuk deteksi dini masalah siswa.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          
          {/* Bento Item 1 - EWS (SPAN 2) */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 group shadow-lg"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
              <AlertTriangle className="w-48 h-48 text-red-500" />
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mb-6 ring-1 ring-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Early Warning System (Sistem Peringatan Dini)</h3>
              <p className="text-slate-300 leading-relaxed font-medium mb-4">
                Algoritma kami secara otomatis menganalisis pola absensi (alfa &gt; 3 hari), nilai anjlok (rata-rata &lt; 60), perilaku, dan tunggakan SPP. Guru BK langsung menerima notifikasi sebelum masalah membesar.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                <strong className="text-white">Penjelasan untuk pemula:</strong> Ini seperti "detektor masalah" untuk siswa. Sistem akan memberi tahu guru jika ada anak yang mulai sering bolos, nilainya turun drastis, atau orang tuanya telat bayar SPP. Jadi masalah bisa diantisipasi sebelum menjadi besar. Mirip seperti lampu peringatan di dashboard mobil.
              </p>
              <div className="flex gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-widest mt-4">
                <span className="px-2 py-1 bg-red-950/50 border border-red-500/30 rounded">Risk Deteksi Otomatis</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2 - WA Bot */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark border border-blue-400/30 p-8 sm:p-10 text-white group shadow-[0_20px_40px_rgba(14,165,233,0.3)]"
          >
             <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-20 group-hover:scale-110 transition-transform duration-700">
               <Bot className="w-48 h-48 text-blue-300" />
             </div>
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-xl bg-blue-800 text-blue-200 flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">WhatsApp / AI Bot 24/7</h3>
               <p className="text-blue-100 leading-relaxed font-medium text-sm mb-4">
                 Wali murid cukup ketik "info bayar" atau "rapor" ke nomor ofisial sekolah. Bot otomatis mengambil data dari sistem dan merespons dalam hitungan detik. Menghemat waktu admin melayani chat.
               </p>
               <p className="text-blue-200/70 text-xs leading-relaxed bg-blue-950/30 p-3 rounded-xl border border-blue-400/20">
                 <strong>Penjelasan untuk pemula:</strong> Bayangkan asisten yang tidak pernah tidur, bisa menjawab chat orang tua kapan saja — bahkan tengah malam. Orang tua tinggal kirim pesan "cek nilai" atau "tagihan", jawaban langsung muncul tanpa harus menunggu admin sekolah.
               </p>
             </div>
          </motion.div>

          {/* Bento Item 3 - Payroll */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all"
          >
             <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
               <Calculator className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Payroll & Penggajian</h3>
             <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm mb-4">
               Hitung gaji pokok, tunjangan sertifikasi, potongan PPh 21, BPJS, hingga denda telat presensi secara otomatis. Generate slip gaji PDF dalam 1 klik.
             </p>
             <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed bg-slate-100 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
               <strong>Penjelasan untuk pemula:</strong> Tidak perlu lagi hitung manual di Excel setiap bulan. Sistem otomatis menghitung gaji guru berdasarkan kehadiran, tunjangan, dan potongan. Slip gaji langsung jadi PDF dan bisa dikirim ke WhatsApp guru. Semua urusan gaji jadi 5 menit beres.
             </p>
          </motion.div>

          {/* Bento Item 4 - Templates */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 group hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all"
          >
             <div className="w-12 h-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center mb-6">
               <LayoutTemplate className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Template Engine Kustom</h3>
             <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm mb-4">
               Desain rapor, sertifikat, atau surat resmi sekolah menggunakan editor visual. Sisipkan variabel seperti {'{{student.name}}'} dan cetak ratusan dokumen sekaligus tanpa mail merge.
             </p>
             <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed bg-slate-100 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
               <strong>Penjelasan untuk pemula:</strong> Seperti Canva atau Microsoft Publisher, tapi khusus untuk dokumen sekolah. Anda tinggal buat desain satu kali (rapor, sertifikat, surat), lalu cetak ratusan langsung dengan data setiap siswa terisi otomatis. Tidak perlu kopas satu per satu.
             </p>
          </motion.div>

          {/* Bento Item 5 - Attendance & Security */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 group hover:shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between"
          >
             <div>
               <div className="flex gap-4 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
                   <ShieldCheck className="w-5 h-5" />
                 </div>
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Presensi GPS & Audit Log</h3>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm mb-4">
                 Guru Absen via Selfie + GPS Radius Sekolah. Sistem dilengkapi Role-Based Access Control detail dan Log Audit mencatat siapa mengubah data apa dan kapan.
               </p>
               <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed bg-white dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                 <strong>Penjelasan untuk pemula:</strong> Guru "check in" masuk sekolah pakai HP: foto selfie + lokasi GPS. Sistem otomatis tahu apakah guru benar-benar ada di lokasi sekolah. Semua aktivitas di sistem tercatat, jadi jika ada kesalahan data, bisa diketahui siapa yang mengubah dan kapan. Aman dan transparan.
               </p>
             </div>
             <button className="text-sm font-bold text-primary dark:text-blue-400 uppercase tracking-wider group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors flex items-center gap-2 mt-4">
               Eksplorasi Keamanan <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
             </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
