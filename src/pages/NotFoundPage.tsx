import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Halaman Tidak Ditemukan</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia. Mungkin halaman telah dipindahkan atau URL yang Anda masukkan salah.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
