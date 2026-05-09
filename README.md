# GitHub Card Generator (Neobrutalism Edition)

Sebuah aplikasi web sederhana (Single Page Application) yang digunakan untuk menghasilkan Kartu Profil GitHub dengan gaya desain **Neobrutalism**. Aplikasi ini menggunakan data asli dari GitHub REST API dan dapat diunduh sebagai gambar PNG.

## Fitur Utama

- **Pencarian Cepat:** Cari profil user menggunakan *username* GitHub.
- **Data Real-time:** Mengambil data profil, statistik repository, dan *followers* langsung dari GitHub API.
- **Desain Neobrutalism:** 
- **Unduh Kartu (Export PNG):** Modul `html-to-image` memungkinkan kartu diekspor menjadi gambar.
- **SPA Navigation:** Navigasi mulus tanpa proses muat ulang halaman (reload).
- **Responsif:** Tampilan fleksibel berkat Tailwind CSS Flexbox & Grid.

## Teknologi yang Digunakan

- **HTML5** & **CSS3**
- **Vanilla JavaScript:** 
- **Tailwind CSS (CDN):** 
- **html-to-image (CDN):** Library eksternal untuk konversi DOM HTML menjadi gambar PNG.

## Struktur Folder

\`\`\`text
devcard/
├── index.html            # Entry point HTML utama
├── README.md             # Dokumentasi proyek
└── src/
    ├── app.js            # Entry point JS, menangani navigasi SPA
    ├── api/
    │   └── github.js     # Logika Fetch API ke GitHub URL
    ├── components/
    │   └── card.js       # Template renderer untuk kartu profil
    └── pages/
        ├── landing.js    # Tampilan dan event untuk Landing Page
        └── main.js       # Tampilan, form, dan logika export untuk Halaman Utama
\`\`\`

