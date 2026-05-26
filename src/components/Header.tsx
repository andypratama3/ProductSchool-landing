import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onOpenDemo: () => void;
}

export function Header({ onOpenDemo }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const currentPathHash = location.pathname + location.hash;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/#fitur', label: t('nav.features') },
    { path: '/#harga', label: t('nav.pricing') },
    { path: '/#tentang', label: t('nav.about') },
    { path: '/docs', label: 'Dokumentasi' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'py-4 px-4' : 'py-0'}`}>
      <div className={`mx-auto transition-all duration-500 ease-out ${scrolled ? 'max-w-6xl' : 'max-w-7xl'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 dark:border-slate-800/60 rounded-2xl px-6' : 'h-20 bg-transparent border-b border-transparent px-4 sm:px-6 lg:px-8'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-300">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl tracking-tight text-primary-dark dark:text-primary">{t('header.logo')}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentPathHash === link.path || (link.path === '/docs' && location.pathname.startsWith('/docs'));
              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="border-r border-slate-200 dark:border-slate-700 pr-3 mr-1">
              <button
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="text-[10px] font-bold px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors uppercase tracking-widest hover:text-primary dark:hover:text-primary"
                title="Toggle Language"
              >
                {language === 'id' ? 'EN' : 'ID'}
              </button>
            </div>
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-primary transition-colors"
            >
              {t('btn.try_free')}
            </button>
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-full shadow-md hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95"
            >
              {t('btn.req_demo')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[400px] mt-2 bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 rounded-2xl' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-4 pb-6 space-y-2 font-medium">
            <div className="mb-4">
              <button
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="text-xs font-bold px-3 py-1.5 bg-slate-100 text-slate-600 rounded-md hover:bg-slate-200 transition-colors uppercase tracking-widest inline-flex"
              >
                Switch to {language === 'id' ? 'English' : 'Bahasa Indonesia'}
              </button>
            </div>
            {navLinks.map((link) => {
              const isActive = currentPathHash === link.path || (link.path === '/docs' && location.pathname.startsWith('/docs'));
              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`block px-4 py-3 text-base rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-bold' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full justify-center px-4 py-3 text-sm font-bold border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {t('btn.try_free')}
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full justify-center px-4 py-3 text-sm font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-md"
              >
                {t('btn.req_demo')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
