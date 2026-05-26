import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  id: {
    'nav.features': 'Fitur',
    'nav.pricing': 'Harga',
    'nav.about': 'Tentang',
    'nav.contact': 'Kontak',
    'btn.try_free': 'Coba Gratis',
    'btn.req_demo': 'Minta Demo',
    'header.logo': 'ProductSchool',

    'hero.badge': 'SaaS Manajemen Sekolah No. 1',
    'hero.title1': 'Potong 80% Waktu Administrasi Sekolah ',
    'hero.title2': 'Secara Otomatis',
    'hero.desc': 'Tinggalkan input manual yang memusingkan. Automasi pendaftaran (PPDB), Rapor Digital, SPP, hingga Penggajian Guru dalam satu ekosistem sistem kelas Enterprise.',
    'hero.bullet1': 'Generate rapor otomatis sesuai format nasional',
    'hero.bullet2': 'Absensi & rekap otomatis via WhatsApp',
    'hero.bullet3': 'Integrasi pembayaran (Midtrans, Xendit)',
    'hero.bullet4': 'Dashboard analitik untuk kepala sekolah & guru',
    'hero.trial': 'Trial 14 Hari Sekarang',
    'hero.schools_joined': '+200 Sekolah Bergabung',

    'modal.title': 'Minta Demo Gratis',
    'modal.desc': 'Tim sales ProductSchool akan segera menghubungi Anda.',
    'modal.name': 'Nama Lengkap',
    'modal.school': 'Nama Sekolah',
    'modal.email': 'Email Aktif',
    'modal.phone': 'Nomor WhatsApp',
    'modal.submit': 'Kirim Permintaan Demo',
    'modal.disclaimer': 'Dengan mengirim form, Anda menyetujui kebijakan privasi kami.',
    'modal.success_title': 'Terima Kasih!',
    'modal.success_desc': 'Permintaan demo Anda telah kami terima. Tim sales ProductSchool akan segera menghubungi Anda.',
    'modal.email_error': 'Format email tidak valid (contoh: nama@domain.com)',
  },
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'btn.try_free': 'Try Free',
    'btn.req_demo': 'Request Demo',
    'header.logo': 'ProductSchool',

    'hero.badge': '#1 School Management SaaS',
    'hero.title1': 'Cut 80% of School Administration Time ',
    'hero.title2': 'Automatically',
    'hero.desc': 'Leave manual data entry behind. Automate admissions, Digital Report Cards, Tuition, and Payroll in a single Enterprise-grade ecosystem.',
    'hero.bullet1': 'Generate automated report cards to national standards',
    'hero.bullet2': 'Automated attendance & recaps via WhatsApp',
    'hero.bullet3': 'Payment gateway integration (Midtrans, Stripe)',
    'hero.bullet4': 'Analytics dashboard for principals & teachers',
    'hero.trial': 'Start 14-Day Free Trial',
    'hero.schools_joined': '200+ Schools Joined',

    'modal.title': 'Request a Free Demo',
    'modal.desc': 'The ProductSchool sales team will contact you shortly.',
    'modal.name': 'Full Name',
    'modal.school': 'School Name',
    'modal.email': 'Active Email',
    'modal.phone': 'WhatsApp Number',
    'modal.submit': 'Send Demo Request',
    'modal.disclaimer': 'By submitting this form, you agree to our privacy policy.',
    'modal.success_title': 'Thank You!',
    'modal.success_desc': 'We have received your demo request. Our sales team will be in touch shortly.',
    'modal.email_error': 'Invalid email format (e.g., name@domain.com)',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');
  const t = (key: string) => translations[language]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
