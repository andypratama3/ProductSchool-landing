import React from 'react';
import { UserPlus, BookOpen, Receipt, LineChart, FileCheck2 } from 'lucide-react';

const workflows = [
  {
    title: '1. Pendaftaran & Onboarding (PPDB) Otomatis',
    description: 'Calon siswa mengisi form online. Admin me-review berkas. Sekali klik "Approve", sistem langsung membuatkan akun siswa, plotting kelas, dan menerbitkan tagihan registrasi.',
    beginnerTip: 'Orang tua daftar dari HP di rumah — isi data, upload foto, pilih jurusan. Admin tinggal klik "Terima". Semua data siswa langsung jadi, gak perlu diketik ulang.',
    icon: UserPlus,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700'
  },
  {
    title: '2. KBM & Input Nilai Cerdas',
    description: 'Guru melakukan absensi. Hasil absensi langsung terekam. Guru menginput nilai ulangan harian secara massal via Excel atau web. Sistem mengkalkulasi bobot (Pengetahuan, Keterampilan) berdasarkan rumus sekolah.',
    beginnerTip: 'Guru tinggal centang siapa yang hadir — data otomatis tersimpan. Input nilai bisa copas dari Excel. Nilai akhir, predikat, dan deskripsi rapor dihitung otomatis.',
    icon: BookOpen,
    color: 'bg-indigo-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700'
  },
  {
    title: '3. Penagihan Terpadu Terjadwal',
    description: 'Awal bulan, tagihan SPP terbentuk otomatis untuk tiap siswa. Invoice dan link Midtrans dikirim via WA. Jika sudah dibayar, otomatis rekonsiliasi dan wali kelas mendapat notifikasi.',
    beginnerTip: 'Tagihan SPP tiap siswa terbit otomatis setiap tanggal 1. Orang tua dapat WhatsApp link bayar. Begitu bayar, status berubah "LUNAS" tanpa perlu admin cek manual.',
    icon: Receipt,
    color: 'bg-emerald-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700'
  },
  {
    title: '4. Satu Klik: Rapor ke WhatsApp Orang Tua',
    description: 'Akhir semester, Kepala Sekolah menekan tombol "Finalisasi". Sistem mengenerate ratusan PDF Rapor dalam background dan me-loop pengiriman file rapor langsung ke WA masing-masing wali murid.',
    beginnerTip: 'Kepala Sekolah tinggal klik tombol "Finalisasi". Rapor semua siswa langsung jadi PDF dan otomatis terkirim ke WhatsApp masing-masing orang tua. Tidak perlu bagi-bagi rapor satu-satu.',
    icon: FileCheck2,
    color: 'bg-primary',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary'
  },
  {
    title: '5. Evaluasi & Analitik Prediktif',
    description: 'Kepala Sekolah membuka dashboard analitik: Membandingkan progres antar kelas, melihat tren penurunan nilai siswa (Peer Benchmarking), dan mengevaluasi kinerja dan absensi guru secara real-time.',
    beginnerTip: 'Dashboard langsung tunjukkan: kelas mana yang paling baik nilainya, siswa mana yang nilainya turun, guru mana yang sering absen. Semua dalam grafik yang mudah dipahami.',
    icon: LineChart,
    color: 'bg-amber-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700'
  }
];

export function WorkflowVisual() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl tracking-tight leading-tight">
            Semua mengalir lancar dari awal hingga lulus.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Kami mengeliminasi proses copy-paste antar departemen. Data yang dimasukkan saat pendaftaran PPDB akan langsung mengalir ke ruang administrasi, akademik, dan keuangan tanpa perlu dientri ulang.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {workflows.map((flow, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start group">
                
                {/* Node */}
                <div className="md:w-16 flex-shrink-0 flex justify-center z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${flow.color} group-hover:scale-110 transition-transform duration-300`}>
                    <flow.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 ${flow.bgColor} dark:bg-slate-800/30 hover:shadow-lg transition-shadow duration-300`}>
                  <div className={`inline-flex px-3 py-1 bg-white/60 dark:bg-slate-800/60 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 ${flow.textColor}`}>
                    Phase {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{flow.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                    {flow.description}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong className="text-slate-700 dark:text-slate-200">Gambaran sederhana:</strong> {flow.beginnerTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
