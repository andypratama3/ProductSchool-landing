import React from 'react';
import { FileText, Users, CreditCard, MessageCircle, CalendarDays, BarChart4, ShieldCheck, LayoutTemplate, Calculator, BookOpen, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    name: 'PPDB Online Otomatis',
    description: 'Calon siswa daftar online dari rumah. Admin tinggal review & approve. Data langsung masuk ke master sekolah tanpa input ulang.',
    icon: Users,
    forBeginners: 'Orang tua daftarin anak lewat HP dari rumah. Sekolah tinggal setujui, data siswa langsung jadi. Gak perlu antre dan isi formulir kertas lagi.',
  },
  {
    name: 'Rapor Digital & Cetak Massal',
    description: 'Input nilai sekali. Sistem hitung nilai akhir, predikat, lalu cetak ratusan PDF rapor sesuai Kurikulum Merdeka dan K13.',
    icon: FileText,
    forBeginners: 'Guru cukup masukkan nilai ulangan. Rapornya langsung jadi otomatis, tinggal cetak atau kirim ke WhatsApp orang tua. Gak perlu hitung manual satu-satu.',
  },
  {
    name: 'Pembayaran SPP & Midtrans',
    description: 'Tagihan SPP terbit otomatis tiap bulan. Orang tua bayar lewat VA, GoPay, QRIS — langsung lunas, admin tidak perlu rekonsiliasi.',
    icon: CreditCard,
    forBeginners: 'Setiap bulan, tagihan SPP langsung terkirim ke WA orang tua tinggal klik bayar. Pakai GoPay, QRIS, atau transfer. Gak perlu ke bank atau bayar ke sekolah.',
  },
  {
    name: 'Absensi Guru GPS + Selfie',
    description: 'Guru absen masuk/pulang pakai HP, foto selfie, dan terdeteksi GPS-nya. Rekap kehadiran otomatis untuk payroll.',
    icon: MapPin,
    forBeginners: 'Guru "check in" pagi hari pakai HP — foto selfie dan lokasi otomatis terdeteksi. Data hadir langsung masuk ke sistem tanpa absen manual.',
  },
  {
    name: 'Kalender Akademik & Jadwal',
    description: 'Atur kalender sekolah, jadwal pelajaran, dan kegiatan. Ekspor ke iCal. Otomatis tampil di dashboard guru dan siswa.',
    icon: CalendarDays,
    forBeginners: 'Buat jadwal sekolah sekali di awal tahun. Semua guru dan siswa lihat jadwal masing-masing di dashboard. Ada perubahan? Tinggal edit, semua langsung tahu.',
  },
  {
    name: 'Student Analytics & EWS',
    description: 'Pantau tren nilai, kehadiran, dan tunggakan per siswa. Dapat peringatan dini jika ada siswa berisiko tinggi.',
    icon: BarChart4,
    forBeginners: 'Lihat grafik perkembangan setiap siswa. Sistem kirim alarm jika ada anak yang nilainya turun terus atau sering bolos. Guru BK bisa langsung turun tangan.',
  },
  {
    name: 'Template Engine + AI',
    description: 'Buat template rapor, sertifikat, surat via editor drag-and-drop. Cetak massal dengan data siswa terisi otomatis.',
    icon: LayoutTemplate,
    forBeginners: 'Desain rapor atau sertifikat satu kali pakai editor (mirip Canva). Kalau mau cetak 500 siswa, tinggal klik — data setiap siswa terisi otomatis.',
  },
  {
    name: 'WhatsApp Bot 24 Jam',
    description: 'Orang tua kirim pesan "cek nilai" ke nomor sekolah, bot langsung jawab otomatis. Tidak perlu admin jaga chat.',
    icon: MessageCircle,
    forBeginners: 'Orang tua tinggal chat WhatsApp: "nilai anak saya" atau "tagihan SPP". Jawaban langsung muncul, bahkan jam 12 malam. Seperti punya resepsionis otomatis.',
  },
  {
    name: 'Keamanan & CCTV Integration',
    description: 'RBAC (Role-Based Access) + Audit Log + Integrasi CCTV sekolah. Semua akses tercatat siapa, kapan, dan apa.',
    icon: ShieldCheck,
    forBeginners: 'Setiap orang punya akses berbeda — guru lihat nilai saja, Kepsek lihat semua. CCTV sekolah bisa dipantau dari sistem. Ada yang utak-atik data? Semua tercatat.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl tracking-tight">9 Fitur Unggulan ProductSchool</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Dari PPDB hingga penggajian guru — semua dalam satu sistem yang terintegrasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-blue-100/50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 mb-4">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-2">{feature.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed italic">
                  <span className="not-italic font-semibold">Tips:</span> {feature.forBeginners}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
