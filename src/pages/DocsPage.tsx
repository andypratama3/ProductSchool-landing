import React, { useEffect } from 'react';
import { BookOpen, ChevronRight, CheckCircle2, LayoutTemplate, MapPin, Calculator, CalendarDays, BarChart4, Bot, ShieldCheck, CreditCard, Users, Layout } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function DocsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    {
      title: "Admissions & Student Management",
      icon: Users,
      desc: "Manajemen siklus hidup siswa dari pendaftaran hingga kelulusan.",
      features: ["Pendaftaran PPDB terintegrasi (review, approve, reject)", "Direktori siswa & pembagian kelas otomatis", "Impor massal data siswa via Excel dengan background progress"]
    },
    {
      title: "Academic & Curriculum",
      icon: CalendarDays,
      desc: "Pengelolaan kalender sekolah dan struktur kurikulum.",
      features: ["Kalender Akademik dengan iCal ekspor", "Manajemen mata pelajaran & penjadwalan roster", "Penilaian Ekstrakurikuler secara massal"]
    },
    {
      title: "Grading, Assessment & Reporting",
      icon: BarChart4,
      desc: "Kalkulasi nilai berbobot dan Rapor Kurikulum Merdeka.",
      features: ["Penilaian P5 (Profil Pelajar Pancasila)", "Rapor Digital Engine dengan ekspor PDF & distribusi WhatsApp", "Early Warning System (EWS) untuk deteksi siswa berisiko tinggi", "Student Analytics: Tren nilai, presensi, & perbandingan kelas"]
    },
    {
      title: "HR, Payroll & Employee Management",
      icon: Calculator,
      desc: "Pengelolaan SDM, absensi, hingga penggajian otomatis.",
      features: ["Presensi GPS/Radius + Selfie untuk pegawai", "Pengajuan Cuti & Timesheets", "Payroll otomatis (Gaji pokok, tunjangan sertifikasi, potongan PPh 21)"]
    },
    {
      title: "Finance & Payment Systems",
      icon: CreditCard,
      desc: "Pembayaran tagihan SPP dan rekonsiliasi keuangan.",
      features: ["Kategori tagihan kustom (SPP, DSP, Uang Gedung)", "Integrasi Midtrans (Virtual Account, QRIS, E-Wallet)", "Webhook callback untuk status pembayaran real-time"]
    },
    {
      title: "Document & Template Engine",
      icon: LayoutTemplate,
      desc: "Editor dokumen canggih untuk surat dan sertifikat.",
      features: ["Editor Canvas visual (drag-and-drop)", "Generasi dokumen massal berbasis variabel {{student.name}}", "AI-Assisted Templates untuk layout otomatis"]
    },
    {
      title: "Communication & Collaboration",
      icon: Bot,
      desc: "Interaksi 24/7 dengan orang tua dan guru.",
      features: ["WhatsApp Bot untuk cek nilai, SPP, dan absen otomatis", "AI Narasi untuk pembuatan catatan rapor otomatis oleh AI", "Manajemen tugas internal & Sistem notifikasi"]
    },
    {
      title: "Web Portal & CMS",
      icon: Layout,
      desc: "Sistem manajemen konten website sekolah.",
      features: ["Manajemen Artikel, Berita, & Kategori", "Galeri Prestasi & Kegiatan Sekolah", "Pengaturan Banner Homepage dinamis"]
    },
    {
      title: "Infrastructure & Security",
      icon: ShieldCheck,
      desc: "Pengamanan sistem tingkat enterprise.",
      features: ["Integrasi Manajemen Kamera CCTV Sekolah", "KML Geofencing untuk peta area sekolah", "Audit Log mendetail & Role-Based Access Control (RBAC)"]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8 mt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary dark:text-blue-400 font-bold uppercase tracking-wider text-xs mb-6">
            Documentation Center
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Eksplorasi 9 Pilar Fitur ProductSchool</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Sistem informasi sekolah paling komprehensif yang di-audit dan dioptimalkan secara mendalam. 
            Mencakup segala kebutuhan dari Penerimaan Siswa Baru hingga Slip Gaji Guru dan Rapor Kurikulum Merdeka.
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-8">
          {modules.map((mod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-primary dark:text-blue-400 flex items-center justify-center shrink-0">
                  <mod.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{mod.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">{mod.desc}</p>
                  
                  <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-100 dark:border-slate-800/50">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-300 uppercase tracking-widest mb-4">Kapabilitas Inti:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mod.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-white text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 relative z-10">Siap untuk Mentransformasi Sekolah Anda?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Jadwalkan demo eksklusif hari ini untuk melihat langsung bagaimana 9 pilar fitur kami dapat menghemat ribuan jam kerja sekolah Anda.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-slate-50 transition-colors shadow-lg relative z-10"
          >
            Kembali ke Beranda
          </button>
        </div>

      </div>
    </div>
  );
}
