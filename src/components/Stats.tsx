import React from 'react';

export function Stats() {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div>
            <div className="text-4xl font-extrabold text-white">200+</div>
            <div className="mt-2 text-[10px] font-bold text-blue-200 uppercase tracking-widest">Sekolah Aktif</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white">1M+</div>
            <div className="mt-2 text-[10px] font-bold text-blue-200 uppercase tracking-widest">Rapor Dicetak</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white">10M+</div>
            <div className="mt-2 text-[10px] font-bold text-blue-200 uppercase tracking-widest">Transaksi (IDR)</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white">99.9%</div>
            <div className="mt-2 text-[10px] font-bold text-blue-200 uppercase tracking-widest">Uptime Server</div>
          </div>
        </div>
      </div>
    </section>
  );
}
