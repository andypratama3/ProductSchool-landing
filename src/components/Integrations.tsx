import React from 'react';
import { motion } from 'motion/react';

const integrations = [
  { name: 'WhatsApp', role: 'Official API', logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Midtrans', role: 'Payment Gateway', logo: 'https://avatars.githubusercontent.com/u/10103746?v=4' },
  { name: 'Konva', role: 'Editor Template', logo: 'https://avatars.githubusercontent.com/u/13884839?v=4' },
  { name: 'Laravel', role: 'Core Engine', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'Redis', role: 'Queue & Cache', logo: 'https://cdn.simpleicons.org/redis/DC382D' },
  { name: 'AWS S3', role: 'Cloud Storage', logo: 'https://cdn.simpleicons.org/amazons3/569A31' },
];

export function Integrations() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl tracking-tight">Infrastruktur & Integrasi Kelas Enterprise</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            ProductSchool menggunakan arsitektur modern (WebSocket Real-Time, Redis, AWS S3) dan terhubung mulus dengan layanan eksternal yang Anda butuhkan.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((app) => (
            <motion.div 
              key={app.name}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-6 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 hover:shadow-md dark:hover:shadow-blue-500/5 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform overflow-hidden p-3">
                <img src={app.logo} alt={`${app.name} - Integrasi ProductSchool`} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-slate-200 text-center mb-1">{app.name}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 text-center font-medium leading-tight">{app.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
