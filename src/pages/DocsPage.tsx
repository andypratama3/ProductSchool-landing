import { useEffect, useMemo, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, ChevronRight, CheckCircle2, LayoutTemplate,
  Calculator, CalendarDays, BarChart4, Bot, ShieldCheck, CreditCard, 
  Users, Layout, Sparkles, ArrowLeft, Search, Menu, X, Database,
  Smartphone, Globe, Bell, BellRing, Monitor, MapPin,
  ChevronUp, ArrowUp, Command, FileCheck, Workflow, Sliders
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureItem {
  name: string;
  desc: string;
}

interface ModuleContent {
  overview: string;
  features?: FeatureItem[];
  highlights?: string[];
}

interface DocModule {
  id: string;
  title: string;
  icon: any;
  desc: string;
  section: string;
  content: ModuleContent;
}

interface FlatSearchEntry {
  moduleId: string;
  moduleTitle: string;
  moduleSection: string;
  type: 'Fitur' | 'Gambaran' | 'Keunggulan';
  matchText: string;
  contextText: string;
  score: number;
}

const modules: DocModule[] = [
  {
    id: 'overview',
    title: 'Sekilas ProductSchool',
    icon: BookOpen,
    desc: 'Satu aplikasi untuk semua urusan administrasi sekolah — dari PPDB sampai rapor, dari gaji guru sampai website sekolah.',
    section: 'Memulai',
    content: {
      overview: 'ProductSchool adalah aplikasi manajemen sekolah all-in-one. Bayangkan semua catatan dan pekerjaan administrasi sekolah dikerjakan dalam satu sistem, semuanya otomatis dan saling terhubung.\n\nPPDB online, data siswa, jadwal pelajaran, nilai, rapor Kurikulum Merdeka, absensi GPS guru, slip gaji, pembayaran SPP online, template surat, website sekolah, WhatsApp Bot, manajemen tugas, dan integrasi Dapodik — semua ada di sini. Bisa diakses dari HP, laptop, atau komputer.\n\nDibangun untuk sekolah Indonesia. Mendukung Kurikulum Merdeka dan K13. Multi-sekolah — satu instalasi bisa dipakai banyak yayasan. Setiap sekolah punya data sendiri yang terisolasi aman.',
      highlights: [
        'Satu aplikasi untuk semua modul — data siswa tidak perlu diinput ulang',
        'Bisa akses dari HP, cocok untuk guru dan staf yang mobile',
        'Terintegrasi WhatsApp — orang tua bisa cek nilai, tagihan, dan rapor dari chat',
        'Pembayaran SPP online via Midtrans: VA semua bank, QRIS, GoPay, OVO, DANA, Indomaret, Alfamart',
        'Rapor digital Kurikulum Merdeka + K13, cetak ratusan PDF sekali klik',
        'Absensi GPS + selfie — guru cuma bisa absen kalau di sekolah',
        'Gaji otomatis — hitung berdasarkan absensi, tunjangan, PPh 21, BPJS',
        'Template editor visual — desain rapor & surat pakai drag-drop, mirip Canva',
        '6 level akses pengguna, 2FA Google Authenticator, audit log, CCTV, dan 25+ kebijakan akses',
        'AI Anthropic Claude & DeepSeek untuk catatan rapor otomatis',
        'Integrasi Dapodik — import data siswa dari database Kemendikbud',
        'Real-time update via WebSocket — notifikasi muncul tanpa refresh'
      ]
    }
  },
  {
    id: 'admissions',
    title: 'PPDB & Data Siswa',
    icon: Users,
    desc: 'Terima siswa baru online, import dari Dapodik, kelola seluruh data kependudukan dan siklus hidup siswa.',
    section: 'Modul Inti',
    content: {
      overview: 'PPDB online: calon siswa daftar dari rumah, upload dokumen persyaratan, admin tinggal review dan setujui. Data langsung masuk ke database tanpa diketik ulang. Bisa juga import massal dari Excel atau Dapodik.\n\nSepanjang sekolah beroperasi, semua data siswa — NISN, alamat, orang tua, prestasi, mutasi, kenaikan kelas, retention, kelulusan — tersimpan rapi dan bisa dicari kapan saja. Sistem lacak seluruh siklus hidup siswa dari pendaftaran sampai lulus.',
      features: [
        { name: 'PPDB Online', desc: 'Buat formulir pendaftaran online sesuai kebutuhan sekolah. Calon siswa isi data, upload foto & dokumen dari rumah. Admin review, approve atau tolak. Kalau lolos, data langsung jadi data siswa. Ada juga jalur prestasi dan afirmasi.' },
        { name: 'Data Siswa Lengkap', desc: 'Semua data siswa: NISN, NIK, tempat/tanggal lahir, alamat, agama, nama orang tua, pekerjaan orang tua, penghasilan, no HP, foto. Cari, filter, export Excel kapan saja.' },
        { name: 'Import Excel & Dapodik', desc: 'Awal tahun atau migrasi dari sekolah lain? Import ribuan siswa dari file Excel atau langsung dari database Dapodik Kemendikbud. Proses jalan di background, aplikasi tetap lancar. Ada progress bar real-time.' },
        { name: 'Import Progress Real-time', desc: 'Saat import ribuan siswa, progress muncul langsung di dashboard — berapa persen selesai, berapa error, siswa mana yang gagal. Tidak perlu tebak-tebak.' },
        { name: 'Pembagian & Mutasi Kelas', desc: 'Bagi siswa ke kelas otomatis berdasarkan jurusan dan tingkat. Kalau ada siswa pindah kelas, riwayat mutasi tercatat semua — siapa yang pindah, dari kelas mana, kapan.' },
        { name: 'Kenaikan Kelas (Promotion)', desc: 'Naikkan kelas siswa otomatis per tahun ajaran. Approve dulu baru dieksekusi. Ada riwayat kenaikan kelas per siswa.' },
        { name: 'Mutasi Sekolah (Transfer)', desc: 'Catat siswa pindah masuk atau keluar sekolah. Lengkap dengan alasan, asal/tujuan sekolah, tanggal. Data tetap tersimpan sebagai arsip.' },
        { name: 'Retensi Siswa', desc: 'Catat siswa yang tinggal kelas atau tidak naik. Lengkap dengan alasan akademik atau非 akademik. Data untuk laporan ke dinas.' },
        { name: 'Kelulusan & Ijazah', desc: 'Proses kelulusan dengan parameter nilai dan kriteria. Cetak ijazah digital. Lulusan tetap terdata sebagai alumni.' },
        { name: 'Prestasi Siswa', desc: 'Catat prestasi akademik dan non-akademik siswa. Bisa ditampilkan di website sekolah. Lengkap dengan foto sertifikat.' },
      ]
    }
  },
  {
    id: 'academic',
    title: 'Akademik & Kurikulum',
    icon: CalendarDays,
    desc: 'Atur tahun ajaran, kalender akademik, jadwal pelajaran, mata pelajaran, guru, dan ekstrakurikuler.',
    section: 'Modul Inti',
    content: {
      overview: 'Dari kalender tahun ajaran, jadwal pelajaran, data guru, assignment guru ke mata pelajaran, sampai penilaian ekstrakurikuler — semua diatur dari satu tempat. Guru lihat jadwal ngajar mereka langsung di dashboard. Orang tua bisa lihat jadwal anaknya.\n\nEvent akademik seperti UTS, UAS, libur, dan acara sekolah bisa ditandai di kalender dan di-export ke iCal — muncul otomatis di kalender HP guru dan orang tua.',
      features: [
        { name: 'Tahun Ajaran', desc: 'Tentukan tahun ajaran aktif. Buka dan tutup periode. Sistem otomatis sesuaikan data berdasarkan tahun ajaran yang aktif.' },
        { name: 'Kalender Akademik', desc: 'Tandai hari pertama sekolah, UTS, UAS, libur semester, acara sekolah, hari besar. Bisa export iCal supaya muncul di Google Calendar / Apple Calendar.' },
        { name: 'Event Akademik', desc: 'Buat event seperti seminar, workshop, class meeting, perpisahan. Atur tanggal, jam, tempat, penanggung jawab. Tampil di kalender.' },
        { name: 'Mata Pelajaran', desc: 'Daftar mata pelajaran lengkap dengan kode, nama, jurusan, kelas, alokasi jam per minggu, dan guru pengajar. Bisa untuk Kurikulum Merdeka dan K13.' },
        { name: 'Guru & Assignment', desc: 'Data guru lengkap: NUPTK, bidang studi, status kepegawaian (PNS/GTY/Honor). Assignment guru ke mata pelajaran dan kelas.' },
        { name: 'Jadwal Pelajaran', desc: 'Buat jadwal dengan tampilan grid yang mudah diatur. Atur guru, ruang, jam ke kelas. Cek jadwal per guru, per kelas, atau per hari. Cegah jadwal bentrok.' },
        { name: 'Ekstrakurikuler', desc: 'Catat kegiatan ekskul siswa: pramuka, paskibra, olahraga, seni, PMR, rohis. Nilai ekskul masuk ke rapor sebagai bagian dari penilaian.' },
        { name: 'Student Learning Path', desc: 'Atur jalur belajar siswa — jurusan IPA/IPS/Bahasa, peminatan, kurikulum yang diikuti. Fleksibel untuk Kurikulum Merdeka.' },
      ]
    }
  },
  {
    id: 'grading',
    title: 'Nilai & Rapor Digital',
    icon: BarChart4,
    desc: 'Input nilai, bobot komponen, P5, AI bikin catatan rapor via Claude/DeepSeek, cetak PDF massal, distribusi ke WA, dan deteksi siswa bermasalah.',
    section: 'Modul Inti',
    content: {
      overview: 'Guru input nilai satu kali. Sistem otomatis hitung nilai akhir berdasarkan bobot (harian, UTS, UAS) yang sudah diatur sekolah. Predikat dan deskripsi rapor langsung jadi sesuai Kurikulum Merdeka dan K13.\n\nCetak ratusan rapor PDF dalam hitungan menit. Kirim langsung ke WhatsApp orang tua. AI (Anthropic Claude atau DeepSeek) bantu buat catatan rapor yang personal per siswa. Ada juga sistem deteksi dini siswa berisiko berdasarkan nilai, absensi, dan tunggakan.',
      features: [
        { name: 'Bobot Komponen Nilai', desc: 'Atur bobot nilai harian, UTS, UAS per mata pelajaran. Bobot bisa berbeda per jenjang kelas. Sistem hitung otomatis nilai akhir.' },
        { name: 'Input Nilai', desc: 'Guru input nilai harian, UTS, UAS per siswa. Bisa input sekaligus satu kelas. Nilai langsung tersimpan.' },
        { name: 'Posting Nilai', desc: 'Setelah nilai final, guru posting. Nilai yang sudah diposting tidak bisa diubah tanpa izin admin. Mencegah manipulasi nilai.' },
        { name: 'Penilaian P5 (Profil Pelajar Pancasila)', desc: 'Nilai Proyek P5 dengan rubrik lengkap: 6 dimensi (Beriman, Berkebinekaan, Gotong Royong, Mandiri, Bernalar Kritis, Kreatif) dan indikator per dimensi. Nilai per proyek.' },
        { name: 'Catatan Rapor oleh AI', desc: 'AI (Anthropic Claude atau DeepSeek) bikin catatan rapor otomatis per siswa. Guru tinggal review, edit kalau perlu, lalu approve. Hemat waktu berjam-jam.' },
        { name: 'Template Prompt Narasi', desc: 'Sekolah bisa atur template prompt untuk AI — tentukan gaya bahasa, panjang kalimat, fokus penilaian. Hasil narasi sesuai karakter sekolah.' },
        { name: 'Cetak Rapor Massal PDF', desc: 'Cetak PDF untuk seluruh kelas dalam satu klik. Link PDF expired dalam 7 hari untuk keamanan. Bisa cetak ulang kapan saja.' },
        { name: 'Distribusi Rapor via WhatsApp', desc: 'Rapor PDF terkirim otomatis ke WhatsApp orang tua masing-masing. Status terkirim, terbaca, gagal terpantau. Riwayat distribusi tercatat. Retry otomatis kalau gagal.' },
        { name: 'Tracking Distribusi', desc: 'Pantau status rapor per siswa: pending, processing, sent, delivered, read, failed. Admin tahu persis rapor siapa yang sudah sampai.' },
        { name: 'Early Warning System', desc: 'Sistem deteksi dini siswa berisiko — sering absen, nilai turun drastis, tunggakan SPP menumpuk. Notifikasi langsung ke wali kelas dan kepala sekolah. Bisa tindak lanjut sebelum terlambat.' },
        { name: 'Analisis Grafik Nilai', desc: 'Lihat tren nilai per kelas, per mata pelajaran, perbandingan antar semester. Bandingkan siswa dengan rata-rata kelas (peer benchmark). Semua dalam grafik.' },
        { name: 'Export Excel', desc: 'Export nilai ke Excel untuk diserahkan ke dinas pendidikan, akreditasi, atau rapat orang tua.' },
      ]
    }
  },
  {
    id: 'hr-payroll',
    title: 'Absensi & Penggajian',
    icon: Calculator,
    desc: 'Absen GPS + selfie, jam kerja & shift, pengajuan cuti, hitung gaji otomatis, slip gaji ke WhatsApp.',
    section: 'Modul Inti',
    content: {
      overview: 'Guru dan staf absen dari HP — selfie + GPS memastikan mereka benar-benar di sekolah. Atur jam kerja dan shift piket. Ajukan cuti dari aplikasi.\n\nSistem otomatis hitung gaji berdasarkan kehadiran, tunjangan sertifikasi, tunjangan fungsional/struktural, potongan PPh 21, BPJS Kesehatan & Ketenagakerjaan, dan pinjaman. Slip gaji PDF langsung terkirim ke WhatsApp masing-masing. Setiap perubahan gaji tercatat dalam audit log.',
      features: [
        { name: 'Absensi GPS + Selfie', desc: 'Check-in dan check-out dari HP. Selfie untuk verifikasi, GPS memastikan di radius sekolah yang sudah ditentukan dengan peta KML. Guru tidak bisa titip absen.' },
        { name: 'Rekap Absensi', desc: 'Rekap bulanan otomatis — hadir, sakit, izin, alpha, terlambat. Lihat per guru atau per bulan. Export Excel.' },
        { name: 'Geofencing (Peta KML)', desc: 'Admin upload peta area sekolah dalam format KML. Guru cuma bisa absen kalau HP mereka di dalam area yang sudah ditentukan. Presensi jadi akurat.' },
        { name: 'Cuti & Izin Online', desc: 'Ajukan cuti tahunan, sakit, atau izin dari aplikasi. Atasan approve langsung. Kuota cuti tahunan otomatis terhitung. Riwayat cuti tercatat.' },
        { name: 'Jam Kerja & Shift', desc: 'Atur jam kerja sekolah, jam masuk/pulang guru. Shift piket (pagi/siang/malam). Sistem hitung keterlambatan dan lembur otomatis.' },
        { name: 'Komponen Gaji', desc: 'Gaji pokok, tunjangan sertifikasi, tunjangan fungsional/struktural, tunjangan pendidikan, BPJS Kesehatan & Ketenagakerjaan, PPh 21. Semua bisa diatur per guru.' },
        { name: 'Grade Gaji', desc: 'Atur grade gaji berdasarkan golongan, masa kerja, dan kualifikasi. Kenaikan grade otomatis setelah masa kerja tertentu.' },
        { name: 'Hitung Gaji Otomatis', desc: 'Setiap bulan, sistem hitung gaji berdasarkan absensi, komponen gaji, grade. Potong otomatis kalau ada kehadiran kurang atau pinjaman.' },
        { name: 'Penyesuaian Gaji', desc: 'Tambah atau kurangi gaji untuk bulan tertentu — bonus, denda, lembur, pinjaman. Semua tercatat.' },
        { name: 'Slip Gaji ke WhatsApp', desc: 'Slip gaji PDF langsung terkirim ke WhatsApp masing-masing guru tiap bulan. Tidak perlu print dan amplop.' },
        { name: 'Audit Penggajian', desc: 'Setiap perubahan data gaji tercatat: siapa yang mengubah, dari mana jadi berapa, kapan, dari perangkat apa. Full riwayat.' },
        { name: 'BPJS & PPh 21', desc: 'Hitung iuran BPJS Kesehatan (4% perusahaan, 1% karyawan) dan BPJS Ketenagakerjaan otomatis. Hitung PPh 21 berdasarkan PTKP dan penghasilan.' },
      ]
    }
  },
  {
    id: 'finance',
    title: 'Keuangan & Pembayaran SPP',
    icon: CreditCard,
    desc: 'Tagihan SPP otomatis, bayar via VA/QRIS/GoPay/Indomaret, laporan keuangan real-time, pengingat WhatsApp.',
    section: 'Modul Inti',
    content: {
      overview: 'Tagihan SPP dan biaya lainnya terbit otomatis setiap bulan. Orang tua bayar lewat Virtual Account (BCA, Mandiri, BNI, BRI, BTN, CIMB), QRIS (semua aplikasi bank), GoPay, OVO, DANA, LinkAja, Indomaret, Alfamart, Kredivo, Akulaku, atau kartu kredit — langsung lunas terkonfirmasi. Admin tidak perlu rekonsiliasi manual.\n\nKalau telat bayar, WhatsApp otomatis ingatkan H-7, H-3, dan H-0. Tunggakan per siswa terpantau real-time. Ada juga fitur refund pembayaran.',
      features: [
        { name: 'Tagihan Otomatis', desc: 'Tagihan SPP, DSP, Uang Gedung, LKS, PKL, daftar ulang — semua terbit otomatis tiap bulan atau sesuai jadwal. Nominal bisa beda tiap siswa. Bisa bikin tagihan ad-hoc untuk study tour, perpisahan, dll.' },
        { name: 'Pembayaran Online via Midtrans', desc: 'Transfer via ATM/Mobile Banking (BCA, Mandiri, BNI, BRI, BTN, CIMB), QRIS (semua aplikasi bank & e-wallet), E-Wallet (GoPay, OVO, DANA, LinkAja), PayLater (Kredivo, Akulaku), Kartu Kredit (Visa, Mastercard, JCB), Retail (Indomaret, Alfamart, Pegadaian). Status bayar langsung terupdate real-time via webhook.' },
        { name: 'Pengingat WhatsApp Otomatis', desc: 'WhatsApp kirim pengingat H-7, H-3, dan H-0 jatuh tempo. Orang tua tidak bisa bilang lupa. Riwayat pengingat tercatat semua.' },
        { name: 'Tunggakan per Siswa', desc: 'Lihat tunggakan per siswa, per kelas, per angkatan. Filter berdasarkan status lunas/belum. Cocok untuk sweeping pembayaran.' },
        { name: 'Laporan Keuangan', desc: 'Arus kas masuk per hari/bulan/tahun, rekap per jenis tagihan, grafik perbandingan antar bulan, export Excel. Untuk bendahara dan kepala sekolah.' },
        { name: 'Refund Pembayaran', desc: 'Kalau ada pembayaran yang perlu dikembalikan (siswa keluar, kelebihan bayar), proses refund via Midtrans. Tercatat semua.' },
        { name: 'History Pembayaran', desc: 'Riwayat pembayaran per siswa dari awal masuk sampai sekarang. Cetak kwitansi ulang kapan saja.' },
        { name: 'Tagihan Bebas', desc: 'Bikin kategori tagihan sesuai kebutuhan: SPP reguler, sumbangan pembangunan, wisuda, study tour, kegiatan, dll.' },
      ]
    }
  },
  {
    id: 'template-engine',
    title: 'Editor Dokumen & Template',
    icon: LayoutTemplate,
    desc: 'Desain rapor, sertifikat, surat, kartu pelajar — editor drag-drop, 13 elemen, AI bantu layout, cetak massal.',
    section: 'Modul Inti',
    content: {
      overview: 'Bikin template dokumen sekali, cetak ratusan dengan data siswa otomatis terisi. Ada 10 template siap pakai. Edit dengan drag-drop, 13 jenis elemen, 17 shortcut keyboard, 8 panel properti. Sistem auto-save dan version conflict detection.\n\nBisa dipakai untuk surat, sertifikat, rapor, kartu pelajar, undangan, piagam, dan banyak lagi. Ada juga alur approval — desain diajukan, disetujui kepala sekolah, baru bisa dipakai cetak.',
      features: [
        { name: 'Visual Canvas Editor', desc: 'Desain dokumen dengan drag-drop di kanvas. Zoom in/out, pan, select, transform. Tersedia grid dan snap untuk align rapi. Mirip Canva khusus dokumen sekolah.' },
        { name: '13 Jenis Elemen', desc: 'Teks, Rectangle, Ellipse, Line, Arrow, Table, Image, QR Code, Barcode, Icon, Signature, Shape, Group — semua tinggal klik dan taruh di kanvas.' },
        { name: '8 Panel Properti', desc: 'General (nama & ID), Transform (posisi, ukuran, rotasi, opacity), Appearance (warna fill & stroke), Text (font, ukuran, bold, align), Table Structure (baris/kolom, merge cell), Table Cell Editor (format per sel), Merge Tool (gabung sel), QR Code (isi konten).' },
        { name: 'Keyboard Shortcuts', desc: '17 shortcut: Ctrl+Z undo, Ctrl+Shift+Z redo, Ctrl+S save, Ctrl+D duplikat, Ctrl+C/X/V copy/cut/paste, Ctrl+A select all, Ctrl+G group, Ctrl+L lock, Ctrl+H hide, Ctrl+= zoom in, Ctrl+- zoom out, panah nudge.' },
        { name: 'Variabel dari Database', desc: 'Pakai {{student.name}}, {{student.nisn}}, {{student.class}}, {{date}}, {{teacher.name}}, {{principal.name}} di template. Begitu dicetak, data terisi otomatis dari database sekolah.' },
        { name: 'AI Bantu Layout', desc: 'Pilih jenis dokumen (surat, sertifikat, rapor, kartu pelajar), AI bantu saranin layout yang pas. Tinggal pilih dan edit.' },
        { name: 'AI Bantu Variabel', desc: 'Bingung variabel apa yang tersedia? Tanya AI, dia kasih tahu variabel yang bisa dipakai sesuai jenis dokumen.' },
        { name: '10 Template Siap Pakai', desc: 'Langsung bisa pakai: surat keterangan kelakuan baik, surat aktif siswa, surat izin, surat rekomendasi, piagam penghargaan, surat lulus, rapor akademik, rekap kehadiran, kartu pelajar, sertifikat ekskul.' },
        { name: 'Template Approval', desc: 'Buat template → ajukan ke kepala sekolah → review → approve atau tolak. Hanya template yang sudah diapprove yang bisa dipakai cetak. Ada notifikasi di setiap tahap.' },
        { name: 'Cetak Massal 500+', desc: 'Pilih ratusan siswa, klik cetak, semua PDF jadi dalam beberapa menit. Proses di background — bisa sambil kerja lain. Ada progress bar.' },
        { name: 'Batch Export System', desc: 'Export ribuan dokumen dengan tracking per item. Status: pending, processing, completed, failed. Lihat detail yang gagal dan penyebabnya.' },
        { name: 'Auto-Save & Versioning', desc: 'Template otomatis tersimpan saat diedit. Kalau ada konflik versi, sistem kasih tahu. Tidak ada pekerjaan yang hilang.' },
      ]
    }
  },
  {
    id: 'tasks',
    title: 'Tugas & Proyek',
    icon: FileCheck,
    desc: 'Manajemen tugas sekolah, proyek, timesheet, komentar, dan prioritas — dari perencanaan sampai selesai.',
    section: 'Modul Inti',
    content: {
      overview: 'Kelola semua tugas dan proyek sekolah dalam satu tempat. Dari surat tugas guru, proyek P5, kegiatan akreditasi, sampai pekerjaan harian TU — semuanya terpantau.\n\nSetiap tugas punya: judul, deskripsi, kategori, prioritas, penanggung jawab, tenggat, status. Bisa tambah komentar, lampiran, timesheet (berapa lama dikerjakan), dan relasi antar tugas. Cocok untuk sekolah yang ingin kerja tim lebih rapi dan terukur.',
      features: [
        { name: 'Kategori Tugas', desc: 'Kelompokkan tugas per kategori: Akademik, Akreditasi, Kesiswaan, Sarpras, Humas, Keuangan, P5, dll. Filter dan lihat per kategori.' },
        { name: 'Prioritas & Status', desc: 'Tugas punya prioritas (tinggi/normal/rendah) dan status (pending, in_progress, completed, blocked, archived). Pantau progres real-time.' },
        { name: 'Penanggung Jawab', desc: 'Tunjuk penanggung jawab dan anggota tim. Bagi tugas ke beberapa orang. Filter tugas saya vs tugas tim.' },
        { name: 'Tugas Saya & Tugas Tim', desc: 'Setiap user lihat daftar tugas mereka sendiri. Atasan lihat semua tugas tim. Tidak ada yang terlewat.' },
        { name: 'Timesheet', desc: 'Catat berapa lama waktu yang dihabiskan untuk tiap tugas. Start/stop timer. Lihat total jam per tugas, per orang, per proyek.' },
        { name: 'Komentar & Diskusi', desc: 'Diskusi dalam setiap tugas. Tag rekan, upload file, bahas progress. Semua riwayat komentar tercatat.' },
        { name: 'Ketergantungan Tugas', desc: 'Tugas A harus selesai dulu sebelum tugas B bisa dimulai. Sistem otomatis kasih tahu kalau ada ketergantungan.' },
        { name: 'Tugas Terlambat', desc: 'Sistem tandai tugas yang melewati tenggat. Notifikasi ke penanggung jawab dan atasan.' },
        { name: 'Filter & Pencarian', desc: 'Cari tugas berdasarkan judul, kategori, status, prioritas, penanggung jawab. Export daftar tugas.' },
        { name: 'Aktif & Arsip', desc: 'Tugas aktif tampil di dashboard. Tugas selesai otomatis pindah ke arsip. Riwayat tetap tersimpan.' },
      ]
    }
  },
  {
    id: 'communication',
    title: 'WhatsApp & Komunikasi',
    icon: Bot,
    desc: 'Bot WhatsApp 24 jam buat orang tua, notifikasi otomatis via WA & email, chat internal guru & staf.',
    section: 'Modul Inti',
    content: {
      overview: 'WhatsApp Bot terintegrasi penuh dengan sistem — orang tua chat ke nomor sekolah, bot langsung jawab. Cek nilai: jawab. Cek tagihan: jawab. Cek absen: jawab. Cek jadwal: jawab. Admin tidak perlu jaga chat manual.\n\nSetiap event penting — tagihan jatuh tempo, rapor terbit, pembayaran masuk, nilai diposting, jadwal berubah — otomatis terkirim via WhatsApp dan email. Ada juga chat internal antar guru yang terpisah dari WhatsApp pribadi.',
      features: [
        { name: 'WhatsApp Bot 24 Jam', desc: 'Orang tua kirim chat ke nomor sekolah, bot jawab otomatis. Cek nilai, tagihan, absen, jadwal — semua dari chat. Bot paham bahasa Indonesia sehari-hari.' },
        { name: 'Admin Router', desc: 'Kalau bot tidak bisa jawab, chat otomatis dialihkan ke admin yang sedang bertugas. Orang tua tidak perlu nunggu lama.' },
        { name: 'Template Pesan WhatsApp', desc: 'Pesan dikirim pakai template resmi WhatsApp Business API (Meta v24.0). Profesional. Template bisa diatur sendiri: pengumuman, tagihan, rapor, undangan.' },
        { name: 'Notifikasi Massal Otomatis', desc: 'Pengumuman sekolah, tagihan SPP, jadwal ujian, pembagian rapor — semua terkirim otomatis. Tidak ada orang tua yang ketinggalan info. Log pengiriman tercatat.' },
        { name: 'Notifikasi Email', desc: 'Selain WA, notifikasi juga dikirim via email. Untuk: pemberitahuan pembayaran, penerimaan PPDB, keputusan cuti, rapor, jadwal, absensi, dan selamat datang siswa baru.' },
        { name: 'Riwayat Percakapan', desc: 'Semua chat dengan orang tua tersimpan rapi. Admin bisa lihat riwayat kapan saja. Cocok untuk dokumentasi komunikasi.' },
        { name: 'Chat Internal Guru', desc: 'Chat antar guru dan staf sekolah. Terintegrasi dengan tugas dan pengumuman. Alternatif WhatsApp grup yang lebih rapi dan terarsip.' },
        { name: 'Preferensi Notifikasi', desc: 'Setiap pengguna bisa atur notifikasi apa yang mau diterima dan lewat mana (WA, email, atau in-app). Tidak diganggu yang tidak penting.' },
      ]
    }
  },
  {
    id: 'cms',
    title: 'Website Sekolah & CMS',
    icon: Globe,
    desc: 'Kelola semua konten website sekolah — artikel, galeri prestasi, banner, hero, halaman profil — tanpa perlu programmer.',
    section: 'Modul Inti',
    content: {
      overview: 'Semua konten website sekolah bisa diatur dari dashboard. Mau nambah berita? Tinggal tulis dan publish. Mau pajang prestasi siswa? Upload foto dan deskripsi. Mau ganti banner homepage? Atur dari settings. Mau ganti hero section? Klik dan edit.\n\nSemua selesai dalam hitungan menit, tanpa perlu panggil programmer atau desainer web. Website sekolah selalu up-to-date.',
      features: [
        { name: 'Artikel & Berita', desc: 'Tulis dan publish artikel atau berita sekolah. Bisa pakai kategori, tags, foto sampul, dan penulis. Jadwalkan publish di tanggal tertentu. Draft dulu sebelum publish.' },
        { name: 'Kategori', desc: 'Atur kategori konten: Prestasi, Kegiatan, Pengumuman, Artikel Edukasi. Setiap artikel bisa masuk satu atau lebih kategori.' },
        { name: 'Galeri Prestasi', desc: 'Pajang prestasi siswa dan guru di website. Lengkap dengan foto, deskripsi, tahun, kategori. Bisa difilter. Otomatis jadi portofolio sekolah.' },
        { name: 'Banner Homepage', desc: 'Atur banner slider di halaman depan website. Bisa tambah tombol CTA — "Daftar PPDB", "Info Beasiswa", "Hubungi Kami". Atur jadwal tayang.' },
        { name: 'Hero Section', desc: 'Atur section hero di homepage dengan gambar latar, judul besar, dan deskripsi. Kesan pertama website sekolah yang profesional.' },
        { name: 'Halaman Profil', desc: 'Kelola halaman profil sekolah: visi misi, kontak, sambutan kepala sekolah, sejarah, fasilitas. Semua bisa diedit dari dashboard.' },
        { name: 'Mitra & Kerjasama', desc: 'Tampilkan mitra dan kerjasama sekolah — institusi, perusahaan, universitas. Logo dan deskripsi. Untuk website dan keperluan akreditasi.' },
      ]
    }
  },
  {
    id: 'admin-dashboard',
    title: 'Dashboard Admin & Manajemen Pengguna',
    icon: Monitor,
    desc: 'Antarmuka admin lengkap — data tabel interaktif, peta absensi, grafik, pencarian global, dark mode, manajemen roles & permissions.',
    section: 'Modul Inti',
    content: {
      overview: 'Setelah login, admin, kepala sekolah, guru, dan staf masuk ke dashboard yang berbeda sesuai perannya. Admin bisa atur semua data. Ada tabel interaktif dengan pencarian dan filter, peta untuk lihat lokasi absensi, grafik perkembangan siswa, dan tampilan yang nyaman di mata (dark mode).\n\nSemua informasi penting muncul di halaman depan. Pencarian global — ketik apa saja, sistem cari di seluruh database. Atur pengguna, roles, dan permissions dengan 6 level akses.',
      features: [
        { name: 'Sidebar Navigasi', desc: 'Menu di samping kiri: Dashboard, Artikel, Data Siswa, Absensi, Nilai, Pembayaran, Cuti, Jadwal, Tugas. Masing-masing peran lihat menu yang sesuai dengan wewenangnya.' },
        { name: 'DataTable Interaktif', desc: 'Tabel data bisa diurutkan, dicari, difilter berdasarkan kolom. Centang untuk aksi massal. Export Excel. Pencarian pintar cocok dengan beberapa kata kunci.' },
        { name: 'Pencarian Global', desc: 'Ketik apa saja — nama siswa, NISN, judul artikel, nama guru — sistem cari di seluruh database. Hasil muncul langsung tanpa load.' },
        { name: 'Peta Absensi Langsung', desc: 'Lihat peta sekolah dengan polygon radius GPS. Titik lokasi absensi guru muncul langsung. Verifikasi bahwa guru benar-benar di sekolah.' },
        { name: 'Grafik & Analitik', desc: 'Grafik perkembangan nilai, tren pembayaran SPP, statistik absensi, peer benchmark. Visual dan mudah dibaca. Untuk rapat dan laporan.' },
        { name: 'Manajemen Pengguna', desc: 'Tambah, edit, nonaktifkan pengguna. Atur role masing-masing. Reset password. Lihat kapan terakhir login.' },
        { name: 'Role & Permission', desc: '6 level akses: Super Admin, Kepala Sekolah, Guru, Staff TU, Bendahara, Wali Murid. Masing-masing punya hak akses berbeda yang bisa diatur.' },
        { name: 'Filter & Aksi Massal', desc: 'Filter data berdasarkan berbagai kriteria. Centang banyak item, lakukan aksi massal: export, hapus, ubah status. Hemat waktu.' },
        { name: 'Notifikasi Real-time', desc: 'Notifikasi muncul langsung tanpa refresh — pembayaran masuk, pengajuan cuti baru, siswa berisiko terdeteksi. Via WebSocket.' },
        { name: 'Dark Mode', desc: 'Tampilan terang dan gelap. Nyaman untuk yang kerja malam atau lebih suka tema gelap. Bisa ganti kapan saja.' },
        { name: 'Mobile-responsive', desc: 'Dashboard bisa diakses dari HP. Guru lihat jadwal, input nilai, absen dari mana saja. Layout menyesuaikan layar.' },
      ]
    }
  },
  {
    id: 'security',
    title: 'Keamanan & Infrastruktur',
    icon: ShieldCheck,
    desc: 'Multi-sekolah, 6 level RBAC, 2FA, audit log, CCTV, geofencing, background jobs, Sentry, dan 25+ kebijakan akses.',
    section: 'Sistem & Keamanan',
    content: {
      overview: 'ProductSchool dibangun untuk dipakai banyak sekolah sekaligus — data masing-masing sekolah terisolasi. Akses diatur dengan 6 level RBAC (Spatie Permission). Setiap perubahan data tercatat dalam audit log. Ada login dua langkah via Google Authenticator.\n\nProses berat — cetak rapor 500 siswa, kirim WA ke 1000 orang tua, hitung gaji 50 guru — semua jalan di background dengan prioritas berbeda. Error terpantau 24/7 via Sentry. CCTV terintegrasi langsung di dashboard.',
      features: [
        { name: 'Multi-Sekolah', desc: 'Satu instalasi bisa dipakai banyak sekolah. Masing-masing punya data yang terisolasi. Ada paket langganan: Free, Basic, Pro, Enterprise — beda batas siswa & pengguna.' },
        { name: '6 Level RBAC (Spatie)', desc: 'Super Admin (atur semua sekolah), Kepala Sekolah (lihat semua data), Guru (nilai & absen), Staff TU (data siswa & surat), Bendahara (pembayaran), Wali Murid (lihat nilai). 25+ kebijakan akses spesifik per fitur.' },
        { name: '2FA Google Authenticator', desc: 'Lapisan keamanan ekstra. Selain password, butuh kode dari Google Authenticator. Data sekolah tetap aman.' },
        { name: 'Audit Log', desc: 'Setiap perubahan data tercatat: siapa, apa yang diubah, dari mana jadi berapa, jam berapa, dari IP dan perangkat apa. Tidak ada yang bisa mengelak.' },
        { name: 'Sensitive Request Log', desc: 'Akses ke data sensitif (nilai, gaji, data pribadi) dicatat khusus. Untuk audit keamanan.' },
        { name: 'CCTV Live View', desc: 'Integrasi kamera CCTV sekolah — lihat langsung dari dashboard. Monitoring keamanan dan pengawasan tanpa aplikasi terpisah.' },
        { name: 'Geofencing KML', desc: 'Upload peta area sekolah format KML. Guru cuma bisa absen di dalam area. Presensi akurat, tidak bisa manipulasi.' },
        { name: 'Background Jobs', desc: 'Cetak rapor, kirim WA, hitung gaji, analitik — semua di background. Prioritas: rapor & AI narasi (tinggi), payroll & analitik (normal), distribusi & kalender (rendah). Aplikasi tetap cepat.' },
        { name: 'Sentry Error Monitoring', desc: 'Aplikasi terpantau 24/7 via Sentry. Error langsung ketahuan tim developer. Performa query SQL, Redis, queue juga terpantau.' },
        { name: 'User Status', desc: 'Akun pengguna bisa aktif atau dinonaktifkan. Guru pindah atau keluar? Tinggal nonaktifkan akun. Data tetap aman.' },
        { name: 'Cache Management', desc: 'Sistem caching untuk akses data cepat. Admin bisa bersihkan cache per modul kalau ada data yang tidak sinkron.' },
        { name: 'Paket & Masa Aktif', desc: 'Free untuk coba-coba, Basic untuk sekolah kecil, Pro untuk menengah, Enterprise untuk full fitur. Upgrade kapan saja.' },
      ]
    }
  },
  {
    id: 'integration',
    title: 'Integrasi & API',
    icon: Workflow,
    desc: 'Integrasi Dapodik, API publik untuk developer, WebSocket real-time, export Excel, kalender iCal.',
    section: 'Sistem & Keamanan',
    content: {
      overview: 'ProductSchool bisa terhubung dengan sistem lain. Import data dari Dapodik Kemendikbud. Export data ke Excel untuk dinas pendidikan. Kalender akademik bisa di-export ke iCal dan muncul di HP.\n\nAda API untuk developer yang ingin integrasi dengan sistem lain. WebSocket untuk update real-time. Webhook Midtrans untuk konfirmasi pembayaran otomatis. Dan webhook WhatsApp untuk menerima pesan orang tua.',
      features: [
        { name: 'Integrasi Dapodik', desc: 'Import data siswa langsung dari database Dapodik Kemendikbud. Data NISN, alamat, orang tua — semua terisi otomatis. Tidak perlu input manual.' },
        { name: 'Export Excel', desc: 'Export data siswa, guru, nilai, absensi, pembayaran, mata pelajaran, kelas, dan tahun ajaran ke Excel. 10+ jenis export siap pakai.' },
        { name: 'Kalender iCal', desc: 'Kalender akademik bisa di-subscribe via iCal. Muncul otomatis di Google Calendar / Apple Calendar / Outlook. Guru dan orang tua tidak perlu input manual.' },
        { name: 'API untuk Developer', desc: 'API RESTful untuk integrasi dengan sistem lain. Menggunakan token Sanctum untuk autentikasi. Tersedia endpoint untuk data siswa, guru, nilai, absensi, pembayaran.' },
        { name: 'WebSocket Real-time', desc: 'Update muncul langsung tanpa refresh. Ada 17+ channel: update absensi, nilai, pembayaran, jadwal, cuti, notifikasi, tugas, data siswa. Penting untuk dashboard yang selalu up-to-date.' },
        { name: 'Webhook Midtrans', desc: 'Konfirmasi pembayaran otomatis via webhook. Status bayar langsung terupdate tanpa admin cek manual.' },
        { name: 'Webhook WhatsApp', desc: 'Menerima pesan dari orang tua via webhook WhatsApp Business API. Chat langsung masuk ke dashboard.' },
      ]
    }
  },
  {
    id: 'configuration',
    title: 'Konfigurasi Sistem',
    icon: Sliders,
    desc: 'Atur fitur sekolah, konfigurasi sistem, pengaturan academy, profile sekolah — semua bisa disesuaikan.',
    section: 'Sistem & Keamanan',
    content: {
      overview: 'Setiap sekolah punya kebutuhan berbeda. ProductSchool bisa disesuaikan: aktif/nonaktifkan fitur sesuai kebutuhan, atur profile sekolah, konfigurasi sistem pembayaran, dan atur pengaturan akademik.\n\nFitur-fitur bisa diatur prioritasnya. Misalnya: rapor generator dan AI narasi prioritas tinggi, payroll prioritas normal, kalender prioritas rendah. Sekolah bisa fokus ke fitur yang paling penting dulu.',
      features: [
        { name: 'Feature Toggles', desc: 'Aktifkan atau nonaktifkan fitur sesuai kebutuhan sekolah. Misalnya: P5 assessment, early warning, payroll, rapor generator, AI narasi. Tidak perlu fitur yang tidak dipakai.' },
        { name: 'Prioritas Fitur', desc: 'Atur prioritas tiap fitur: Tinggi (rapor, AI narasi, early warning), Normal (payroll, analitik, P5), Rendah (distribusi, kalender). Proses prioritas tinggi jalan lebih dulu.' },
        { name: 'Profile Sekolah', desc: 'Atur nama sekolah, alamat, no telepon, email, nama kepala sekolah. Muncul di rapor, surat, dan website.' },
        { name: 'Konfigurasi Sistem', desc: 'Atur berbagai pengaturan sistem dari dashboard. Tanpa perlu edit kode atau database langsung.' },
        { name: 'Akademik Config', desc: 'Atur tahun ajaran aktif, kurikulum yang dipakai (Merdeka/K13), parameter kenaikan kelas, dan kelulusan.' },
        { name: 'Manajemen CCTV', desc: 'Tambah dan atur kamera CCTV dari dashboard. Link streaming, nama kamera, lokasi. Lihat langsung tanpa aplikasi terpisah.' },
      ]
    }
  },
];

const sectionBadgeColors: Record<string, string> = {
  'Memulai': 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/30',
  'Modul Inti': 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30',
  'Sistem & Keamanan': 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30',
};

function buildSearchIndex(mods: DocModule[]): FlatSearchEntry[] {
  const entries: FlatSearchEntry[] = [];
  for (const mod of mods) {
    if (mod.content.overview) {
      const paragraphs = mod.content.overview.split('\n\n');
      for (const p of paragraphs) {
        if (p.trim()) {
          entries.push({
            moduleId: mod.id,
            moduleTitle: mod.title,
            moduleSection: mod.section,
            type: 'Gambaran',
            matchText: p.trim().slice(0, 120),
            contextText: mod.desc,
            score: 0,
          });
        }
      }
    }
    if (mod.content.features) {
      for (const f of mod.content.features) {
        entries.push({
          moduleId: mod.id,
          moduleTitle: mod.title,
          moduleSection: mod.section,
          type: 'Fitur',
          matchText: `${f.name}: ${f.desc}`,
          contextText: f.name,
          score: 0,
        });
      }
    }
    if (mod.content.highlights) {
      for (const h of mod.content.highlights) {
        entries.push({
          moduleId: mod.id,
          moduleTitle: mod.title,
          moduleSection: mod.section,
          type: 'Keunggulan',
          matchText: h,
          contextText: '',
          score: 0,
        });
      }
    }
  }
  return entries;
}

function scoreEntry(entry: FlatSearchEntry, query: string): number {
  const q = query.toLowerCase();
  const text = entry.matchText.toLowerCase();
  const ctx = entry.contextText.toLowerCase();
  let score = 0;
  if (text.includes(q)) {
    score += 100;
    if (text.startsWith(q)) score += 30;
    if (text.indexOf(q) < 20) score += 15;
  }
  if (ctx.includes(q)) score += 40;
  const words = q.split(/\s+/);
  const matchWords = words.filter(w => text.includes(w)).length;
  score += (matchWords / words.length) * 50;
  return score;
}

function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? `<mark class="bg-yellow-200 dark:bg-yellow-500/30 text-inherit rounded px-0.5">${part}</mark>`
      : part
  ).join('');
}

export function DocsPage() {
  const [activeModule, setActiveModule] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const searchIndex = useMemo(() => buildSearchIndex(modules), []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim();
    const scored = searchIndex
      .map(entry => ({ ...entry, score: scoreEntry(entry, q) }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);
    return scored;
  }, [searchQuery, searchIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeModule]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    function handleScroll() {
      setShowScrollTop(window.scrollY > 400);
    }
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mod = modules.find(m => m.id === activeModule) || modules[0];

  const filteredSidebarModules = modules.filter(m =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sections = [...new Set(modules.map(m => m.section))];

  const currentIndex = modules.findIndex(m => m.id === activeModule);
  const prevMod = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextMod = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  function navigateTo(id: string) {
    setActiveModule(id);
    setSidebarOpen(false);
    setShowSearchResults(false);
    setSearchQuery('');
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <Link to="/" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Home</span>
            </Link>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
            <BookOpen className="w-4 h-4 text-primary dark:text-blue-400 shrink-0" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Dokumentasi</span>
            <div className="flex-1" />
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          <aside className={`w-64 shrink-0 ${sidebarOpen ? 'fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-16 px-4 overflow-y-auto' : 'hidden'} lg:block lg:relative lg:inset-auto lg:z-auto lg:pt-0 lg:px-0`}>
            <div className="lg:sticky lg:top-24 space-y-6">
              <div ref={searchRef} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Cari fitur... (Cmd+K)"
                    value={searchQuery}
                    onChange={e => { setSearchQuery(e.target.value); setShowSearchResults(true); }}
                    onFocus={() => setShowSearchResults(true)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                {showSearchResults && searchQuery.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl max-h-80 overflow-y-auto z-50">
                    {searchResults.length === 0 ? (
                      <div className="p-4 text-sm text-slate-500 dark:text-slate-400 text-center">
                        Tidak ada hasil untuk "{searchQuery}"
                      </div>
                    ) : (
                      <div className="py-2">
                        {searchResults.map((result, i) => (
                          <button
                            key={i}
                            onClick={() => navigateTo(result.moduleId)}
                            className="w-full text-left px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${sectionBadgeColors[result.moduleSection] || ''}`}>
                                {result.type}
                              </span>
                              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{result.moduleTitle}</span>
                            </div>
                            <p
                              className="text-sm text-slate-700 dark:text-slate-300 line-clamp-1"
                              dangerouslySetInnerHTML={{ __html: highlightText(result.matchText.slice(0, 100), searchQuery) }}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <nav className="overflow-y-auto max-h-[calc(100vh-16rem)] -mx-3 px-3">
                {sections.map(section => {
                  const sectionMods = filteredSidebarModules.filter(m => m.section === section);
                  if (sectionMods.length === 0) return null;
                  return (
                    <div key={section} className="mb-6">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-2 px-3">
                        {section}
                      </p>
                      <div className="space-y-0.5">
                        {sectionMods.map(mod => (
                          <button
                            key={mod.id}
                            onClick={() => { setActiveModule(mod.id); setSidebarOpen(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                              activeModule === mod.id
                                ? 'bg-primary/10 text-primary dark:text-blue-400 shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                            }`}
                          >
                            <mod.icon className={`w-4 h-4 shrink-0 ${activeModule === mod.id ? 'text-primary dark:text-blue-400' : ''}`} />
                            <span className="truncate">{mod.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {sidebarOpen && (
            <div className="fixed inset-0 z-30 bg-black/20 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          )}

          <main ref={mainRef} className="flex-1 min-w-0 pb-16">
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-10 pb-8 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${sectionBadgeColors[mod.section] || ''}`}>
                    {mod.section}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center shrink-0">
                    <mod.icon className="w-6 h-6" />
                  </div>
                  <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{mod.title}</h1>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">{mod.desc}</p>
              </div>

              <div className="mb-10">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary dark:text-blue-400" />
                  Tentang Modul Ini
                </h2>
                {mod.content.overview.split('\n\n').map((p, i) => (
                  <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3 last:mb-0">{p}</p>
                ))}
              </div>

              {mod.content.features && mod.content.features.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary dark:text-blue-400" />
                    Fitur Unggulan
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mod.content.features.map((feat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.03 }}
                        className="group bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-primary/20 dark:hover:border-blue-500/20 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                          </div>
                          <h3 className="font-bold text-slate-900 dark:text-white">{feat.name}</h3>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {mod.content.highlights && mod.content.highlights.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary dark:text-blue-400" />
                    Kenapa Fitur Ini Penting
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mod.content.highlights.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                        className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-accent/20 dark:hover:border-accent/20 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between gap-4">
                  {prevMod ? (
                    <button
                      onClick={() => setActiveModule(prevMod.id)}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium group"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                      <div className="text-left">
                        <div className="text-xs text-slate-400 dark:text-slate-500">Sebelumnya</div>
                        <div className="text-sm font-semibold">{prevMod.title}</div>
                      </div>
                    </button>
                  ) : <div />}
                  {nextMod ? (
                    <button
                      onClick={() => setActiveModule(nextMod.id)}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium group"
                    >
                      <div className="text-right">
                        <div className="text-xs text-slate-400 dark:text-slate-500">Selanjutnya</div>
                        <div className="text-sm font-semibold">{nextMod.title}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ) : <div />}
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 ${
          showScrollTop ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
