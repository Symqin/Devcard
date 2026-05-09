# GitHub Card Generator (Neobrutalism)

Deskripsi singkat
- Aplikasi web kecil untuk membuat kartu profil GitHub bergaya Neobrutalism.
- Dibangun dengan HTML5, Vanilla JavaScript (ES modules), dan Tailwind via CDN.
- Fitur utama: cari username GitHub, tampilkan kartu profil, dan unduh kartu sebagai PNG.

Status terhadap kriteria penilaian
- Responsiveness (20%): layout menggunakan Flexbox dan CSS Grid; telah diuji responsif untuk mobile dan desktop.
- Content / Design (25%): konten terstruktur (Landing + Main Feature); desain neobrutalism konsisten (border tebal, shadow solid, warna kontras).
- Idea (25%): memakai Fetch API untuk mengambil data dari `https://api.github.com/users/{username}` dan menampilkan data dinamis.
- Functionality (30%): SPA navigation, loading & error handling, export kartu PNG (menggunakan `html-to-image`).

Folder / file penting
- `index.html` — entry point; memuat Tailwind CDN, `html-to-image` CDN, dan `app.js` (module).
- `src/app.js` — inisialisasi SPA dan routing sederhana.
- `src/api/github.js` — fungsi `fetchGitHubUser(username)`.
- `src/pages/landing.js` — markup & event halaman landing.
- `src/pages/main.js` — main feature: form, fetch, render, dan fitur unduh.
- `src/components/card.js` — template kartu profil (inline SVG untuk ikon, wrapper export dengan padding).

Cara menjalankan (rekomendasi)
- Rekomendasi: gunakan Live Server (VS Code) untuk pengalaman paling mudah.

Opsi A — Live Server (VS Code)
1. Buka folder project di VS Code: `c:\Users\mutaq\Documents\code\web\devcard`
2. Klik kanan `index.html` → "Open with Live Server" atau klik "Go Live".

Opsi B — Python simple server (jika tidak ingin instal ekstensi)
```bash
# dari folder project
python -m http.server 5500
# buka http://localhost:5500
```

Opsi C — npm http-server
```bash
npm install -g http-server
http-server -c-1 . -p 5500
# buka http://localhost:5500
```

Langkah cepat tes fitur
1. Buka aplikasi (Live Server atau server lokal).
2. Klik "Mulai Sekarang" → masuk ke Main Feature.
3. Masukkan username (mis. `octocat`) lalu tekan `Cari`.
4. Saat kartu muncul, klik `Unduh Kartu PNG`.

Catatan teknis & troubleshooting
- Export: library `html-to-image` dipakai untuk mempertahankan box-shadow; element export adalah wrapper `#github-card-export` yang memiliki padding untuk menghindari terpotongnya shadow.
- Pastikan font selesai dimuat jika hasil PNG masih memotong teks: lakukan hard-refresh (Ctrl+F5) lalu ulangi ekspor.
- Jika avatar tidak muncul di PNG: browser mungkin memblokir CORS; coba jalankan via Live Server atau server lokal (file:// sering bermasalah).
- Jika ikon masih bermasalah: semua ikon penting sudah diganti dengan inline SVG di `src/components/card.js`.

Keterbatasan & rekomendasi peningkatan
- Saat ini Tailwind dipakai via CDN; untuk produksi sebaiknya gunakan build Tailwind agar file CSS kecil.
- Tambahkan unit test ringan untuk fungsi `fetchGitHubUser` jika diperlukan.

Lisensi & credit
- Project contoh untuk keperluan pembelajaran (Final Project).
- Menggunakan: Tailwind (CDN), html-to-image (CDN), Google Fonts.

---
Jika Anda mau, saya bisa:
- Menambahkan skrip `package.json` dan server dev minimal.
- Menulis checklist bukti pemenuhan rubric dalam satu halaman untuk keperluan penilaian.
