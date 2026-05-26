import React from 'react';

interface CTAProps {
  onOpenDemo: () => void;
}

export function CTA({ onOpenDemo }: CTAProps) {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 11px)'}}></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight mb-6">
          Siap Bertransformasi ke Sekolah Digital?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tinggalkan administrasi manual. Bergabung dengan ratusan sekolah lain yang telah beralih ke masa depan digital. Jadwalkan demo gratis sekarang.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onOpenDemo}
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg shadow-xl shadow-black/20 transition-all text-sm sm:text-base w-full sm:w-auto uppercase tracking-wider border border-transparent"
          >
            Mulai Trial 14 Hari
          </button>
          <button 
            onClick={onOpenDemo}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold rounded-lg transition-all text-sm sm:text-base w-full sm:w-auto uppercase tracking-wider backdrop-blur-sm"
          >
            Jadwalkan Demo
          </button>
        </div>
      </div>
    </section>
  );
}
