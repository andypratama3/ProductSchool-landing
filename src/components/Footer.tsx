import React from 'react';
import { BookOpen, Send, Mail, Phone, MapPin as MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">ProductSchool</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Solusi SaaS manajemen dan administrasi untuk lembaga sekolah di seluruh Indonesia. Rapor digital Kurikulum Merdeka, absensi GPS, SPP online via Midtrans, PPDB online, dan penggajian guru — semua dalam satu ekosistem terintegrasi.
            </p>
            <div className="pt-4">
              <h4 className="text-[10px] font-bold text-white mb-2 uppercase tracking-wider">Berlangganan Buletin</h4>
              <p className="text-[10px] text-slate-500 mb-3">Dapatkan tips dan info terbaru seputar digitalisasi sekolah.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Fitur newsletter akan segera hadir.'); }} className="flex w-full max-w-sm items-center space-x-2">
                <input 
                  type="email" 
                  placeholder="Email sekolah Anda" 
                  className="flex-1 px-3 py-2 text-xs bg-slate-800 text-white rounded-lg border border-slate-700 outline-none focus:border-primary placeholder:text-slate-500 transition-colors"
                  aria-label="Email untuk newsletter"
                  required
                />
                <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg flex items-center justify-center text-xs font-bold transition-colors" aria-label="Langganan newsletter">
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Produk & Fitur</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/#fitur" className="hover:text-white transition-colors">Fitur Produk</Link></li>
              <li><Link to="/#harga" className="hover:text-white transition-colors">Harga Paket</Link></li>
              <li><Link to="/#tentang" className="hover:text-white transition-colors">Testimoni</Link></li>
              <li><Link to="/docs" className="hover:text-white transition-colors">Dokumentasi & Panduan</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Fitur Unggulan</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/#fitur" className="hover:text-white transition-colors">Rapor Digital Kurikulum Merdeka</Link></li>
              <li><Link to="/#fitur" className="hover:text-white transition-colors">PPDB Online</Link></li>
              <li><Link to="/#fitur" className="hover:text-white transition-colors">SPP Otomatis Midtrans</Link></li>
              <li><Link to="/#fitur" className="hover:text-white transition-colors">Absensi GPS Guru</Link></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Early Warning System</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Perusahaan</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/#tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir (We're Hiring)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog & Edukasi</a></li>
              <li><Link to="/#kontak" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          
          <div id="kontak">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Hubungi Kami</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                <a href="mailto:sales@productschool.id" className="hover:text-white font-mono break-all transition-colors">sales@productschool.id</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                <span className="font-mono text-white">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                <span>Jl. Sudirman No 42,<br />Jakarta Pusat, Indonesia</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} ProductSchool.id | Solusi Digital Pendidikan Indonesia. Sistem Informasi Manajemen Sekolah Online.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
