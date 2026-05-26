import React from 'react';
import { PlayCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 overflow-hidden relative transition-colors duration-500">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center flex flex-col-reverse gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                {t('hero.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                {t('hero.title1')}<span className="text-primary dark:text-blue-400">{t('hero.title2')}</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                {t('hero.desc')}
              </p>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-500 leading-relaxed max-w-lg bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong>Mudahnya:</strong> Bayangkan semua data sekolah Anda — rapor, tagihan SPP, absensi guru — bekerja secara otomatis. Anda tinggal duduk dan memantau dari dashboard. Tidak perlu lagi repot urus berkas dan Excel manual.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium text-slate-700">
              {[
                t('hero.bullet1'),
                t('hero.bullet2'),
                t('hero.bullet3'),
                t('hero.bullet4')
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={onOpenDemo}
                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg shadow-lg shadow-accent/30 transition-all text-sm sm:text-base cursor-pointer"
              >
                {t('hero.trial')}
              </button>
              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                </div>
                <span className="text-xs font-medium italic">{t('hero.schools_joined')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            className="lg:col-span-6 relative w-full perspective-[1000px]"
          >
            <figure className="relative bg-slate-900/5 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-white/20 overflow-hidden flex flex-col transform-gpu transition-all duration-500 hover:shadow-[0_30px_60px_rgba(16,_185,_129,_0.15)] hover:-translate-y-2">
              <div className="h-8 bg-slate-800/80 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="ml-4 h-4 w-32 bg-slate-700 rounded"></div>
              </div>
              <div className="w-full aspect-[4/3] relative group flex items-center justify-center bg-slate-900 overflow-hidden">
                 <img 
                   src="/dashboard-mockup.png" 
                   alt="Dashboard ProductSchool - Sistem Informasi Manajemen Sekolah Online" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   loading="eager"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
              </div>
              <figcaption className="sr-only">Dashboard utama ProductSchool yang menampilkan ringkasan data sekolah: jumlah siswa, tagihan SPP, dan statistik rapor digital.</figcaption>
            </figure>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">+124%</div>
                <div className="text-xs text-slate-500">Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
