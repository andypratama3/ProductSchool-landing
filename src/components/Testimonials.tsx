import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimateIn } from './AnimateIn';

const testimonials = [
  {
    content: "Sejak menggunakan ProductSchool, proses pembagian rapor yang dulunya memakan waktu berminggu-minggu kini selesai dalam hitungan jam. Sistem ini sangat membantu beban administrasi guru-guru kami.",
    author: "Budi Santoso",
    role: "Kepala Sekolah SMPN Merdeka",
    image: "https://placehold.co/100x100/e2e8f0/475569?text=BS"
  },
  {
    content: "Integrasi tagihan dengan API yang mulus membuat pengumpulan SPP menjadi jauh lebih lancar. Orang tua murid juga merasa lebih nyaman dengan kemudahan pembayaran secara online.",
    author: "Siti Rahma",
    role: "Bendahara Yayasan Pendidikan Bina Insani",
    image: "https://placehold.co/100x100/e2e8f0/475569?text=SR"
  },
  {
    content: "Pengalaman belajar siswa jadi lebih terpantau. Kami sangat menyukai fitur notifikasi absensi real-time yang menjembatani komunikasi pihak sekolah langsung dengan gawai orang tua.",
    author: "Arif Hidayat",
    role: "Guru Wali Kelas SMA Terpadu",
    image: "https://placehold.co/100x100/e2e8f0/475569?text=AH"
  },
  {
    content: "Migrasi data dari sistem lama ke ProductSchool berjalan sangat cepat dan tanpa ada data yang hilang. Support team dari mereka sangat kooperatif.",
    author: "Rina Wijaya",
    role: "Admin IT SMK Nusantara",
    image: "https://placehold.co/100x100/e2e8f0/475569?text=RW"
  },
  {
    content: "Sistem keuangan yang dulu ruwet kini terekap otomatis dengan fitur rekonsiliasi bank yang sangat canggih. Tidak ada lagi human-error saat pembukuan.",
    author: "Deni Pratama",
    role: "Kepala Yayasan Global Mandiri",
    image: "https://placehold.co/100x100/e2e8f0/475569?text=DP"
  }
];

// Duplicate for smooth infinite scrolling
const marqueeItems = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <AnimateIn>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl tracking-tight mb-4">Dipercaya Ratusan Sekolah</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Dengar apa kata mereka tentang pengalaman menggunakan ProductSchool dalam digitalisasi sistem mereka.</p>
          </AnimateIn>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-slate-50 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-slate-50 after:to-transparent after:z-10">
        <div className="flex w-max items-stretch space-x-6 px-4 animate-marquee">
          {marqueeItems.map((testimonial, index) => (
            <div key={index} className="w-[380px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow whitespace-normal">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed flex-grow text-sm">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 bg-slate-100"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{testimonial.author}</h4>
                  <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mt-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
