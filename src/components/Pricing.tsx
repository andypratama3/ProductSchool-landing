import React from 'react';
import { Check, Info } from 'lucide-react';

const tiers = [
  {
    name: 'Small School',
    price: 'Rp 250.000',
    frequency: '/bulan',
    description: 'Cocok untuk TK/SD atau sekolah dengan jumlah murid terbatas (≤200 siswa).',
    forBeginners: 'Cocok untuk sekolah kecil yang baru mulai digitalisasi. Hanya Rp 250rb/bulan — lebih murah dari gaji admin satu orang, tapi bisa menggantikan kerja 3 orang.',
    features: [
      'Sistem Pendaftaran (PPDB)',
      'Manajemen Siswa & Kelas',
      'Input Nilai & Rapor Digital',
      'Absensi Siswa Manual',
      'Billing & Pembayaran Manual',
      'Support via Email (2x24 jam)',
    ],
    cta: 'Pilih Paket',
    mostPopular: false,
  },
  {
    name: 'Medium School',
    price: 'Rp 1.250.000',
    frequency: '/bulan',
    description: 'Pilihan paling populer untuk operasional SMP/SMA (201-800 siswa).',
    forBeginners: 'Paket favorit! Dengan 1,25 juta/bulan, sekolah bisa otomatiskan hampir semua operasional. SPP, rapor, absensi — semuanya jalan sendiri. Paling hemat dibanding gaji admin tambahan.',
    features: [
      'Semua fitur Small School',
      'Gateway Midtrans & Xendit',
      'Notifikasi WhatsApp Otomatis',
      'Absensi GPS & Selfie Pegawai',
      'Distribusi Rapor Massal via WA',
      'Dashboard Analytics Siswa',
    ],
    cta: 'Pilih Paket',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Mulai Rp 5 Jt',
    frequency: '/bulan',
    description: 'Solusi lengkap untuk Yayasan atau Jaringan Sekolah Pribadi (800+ siswa).',
    forBeginners: 'Untuk yayasan dengan banyak cabang atau sekolah besar. Semua fitur paling canggih: payroll otomatis, deteksi dini siswa bermasalah (EWS), kustom template, dan manajer khusus yang siap bantu kapan saja.',
    features: [
      'Semua fitur Medium School',
      'Kalkulasi Payroll & Penggajian Guru',
      'Early Warning System (EWS Siswa)',
      'Custom Template Rapor Engine',
      'Audit Log & Role-Based Access (RBAC)',
      'Dedicated Account Manager',
    ],
    cta: 'Hubungi Kami',
    mostPopular: false,
  },
];

interface PricingProps {
  onOpenDemo: () => void;
}

export function Pricing({ onOpenDemo }: PricingProps) {
  return (
    <section id="harga" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl tracking-tight">Pilihan Paket Harga Transparan</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Solusi transparan tanpa biaya tersembunyi. Pilih paket yang sesuai dengan kebutuhan sekolah Anda. Semua paket termasuk 14 hari trial gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-xl border-2 ${
                tier.mostPopular ? 'border-primary ring-4 ring-primary/10 shadow-lg relative' : 'border-slate-100 dark:border-slate-800 shadow-sm'
              } p-6 bg-white dark:bg-slate-900 flex flex-col`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Paling Populer
                  </span>
                </div>
              )}
              <h3 className={`text-[12px] font-bold uppercase tracking-wider ${tier.mostPopular ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                <span className="text-sm font-normal text-slate-500">{tier.frequency}</span>
              </div>
              <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-4 mb-6"></div>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                <Info className="w-3 h-3 inline-block mr-1 -mt-0.5" />
                {tier.forBeginners}
              </p>

              <ul className="mb-8 space-y-3 flex-1 px-1">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300 leading-snug">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={onOpenDemo}
                className={`w-full py-2.5 px-4 rounded font-bold text-sm transition-colors ${
                  tier.mostPopular 
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-sm' 
                    : 'bg-slate-900 hover:bg-slate-800 dark:bg-primary dark:hover:bg-primary-dark text-white'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
