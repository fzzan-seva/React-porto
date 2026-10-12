# Seva — Portofolio Web Developer

Portofolio pribadi **Fauzan Seva Nugraha (Seva)** — siswa kelas 12 PPLG,
SMK Yadika Soreang. Dibangun untuk menampilkan proyek nyata, teknologi yang
digunakan, dan jalur kontak untuk peluang **PKL (magang)**, kolaborasi, dan
proyek freelance.

## Gambaran

- Tema gelap minimalis (charcoal) dengan satu aksen warna violet.
- Konten utama dalam bahasa Indonesia.
- Halaman beranda satu halaman: Hero, Tentang, Keahlian, Proyek, Kontak.
- Halaman studi kasus per proyek di `/project/:id`.
- Alur kontak via WhatsApp (tanpa backend palsu — formulir hanya menyusun
  pesan lalu membuka WhatsApp).

## Teknologi

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (routing)
- [Tailwind CSS v4](https://tailwindcss.com/) (styling, via `@tailwindcss/vite`)
- [Framer Motion](https://motion.dev/) (animasi, menghormati `prefers-reduced-motion`)
- [lucide-react](https://lucide.dev/) (ikon)
- [oxlint](https://oxc.rs/) (linting)

## Fitur

- Navigasi responsif dengan menu mobile dan status bagian aktif.
- Kartu proyek dengan data terstruktur (teknologi, fitur, tautan kode).
- Studi kasus per proyek yang faktual — tidak mengklaim fitur tanpa bukti.
- Formulir kontak dengan validasi dan encoding aman untuk WhatsApp.
- Dukungan aksesibilitas: heading semantik, label form, fokus yang terlihat,
  `prefers-reduced-motion`.
- Meta SEO: deskripsi, Open Graph, Twitter Card, `lang="id"`.

## Menjalankan secara lokal

Persyaratan: Node.js 20+ dan npm.

```bash
# 1. Install dependensi
npm install

# 2. Jalankan server pengembangan (http://localhost:5173)
npm run dev

# 3. (Opsional) Pratinjau hasil build
npm run build
npm run preview
```

## Verifikasi

```bash
npm run lint   # menjalankan oxlint
npm run build  # membangun produksi ke folder dist/
```

## Struktur proyek

```
├── index.html                     # metadata, font, meta SEO
├── src/
│   ├── main.jsx                   # entry React + BrowserRouter
│   ├── App.jsx                    # routing
│   ├── index.css                  # tema (Tailwind v4 @theme) + style dasar
│   ├── data/
│   │   ├── projects.js            # data proyek (sumber tunggal)
│   │   └── certificates.js        # data sertifikat (kosong sementara)
│   ├── components/                # Navbar, Hero, About, Skills, Projects,
│   │                              # Certificates, Contact, Footer, dll.
│   └── pages/
│       ├── Home.jsx               # beranda satu halaman
│       └── ProjectDetail.jsx      # studi kasus proyek
└── public/
    ├── favicon.svg
    └── icons.svg                  # (tidak terpakai, artefak template)
```

## Mengelola data proyek & sertifikat

### Proyek

Semua proyek dikelola di `src/data/projects.js`. Setiap entri berisi `title`,
`summary`, `overview`, `problem`, `role`, `tech`, `features`, `decisions`,
`monogram`, `category`, dan `links`. Jangan menambahkan klaim yang tidak bisa
dibuktikan dari kode:

- Tautan kode harus mengarah ke repositori yang benar dan hidup.
- `links` hanya menampilkan tautan yang benar-benar ada.
- Sertakan `demo` (live URL) hanya jika deployment sungguhan tersedia.

### Sertifikat

Saat ini `certificates` kosong karena data lama yang tersedia hanyalah
placeholder ("Nama Sertifikat 1", gambar "Certificate Preview"). Section
Sertifikat dan tautan navigasinya otomatis disembunyikan selama data kosong.

Untuk menambahkan sertifikat sungguhan: isi `src/data/certificates.js` sesuai
contoh di dalam file (nama, penerbit, tanggal, deskripsi, dan gambar asli
sertifikat). Section akan muncul kembali secara otomatis.

## Deployment (Vercel)

Proyek ini terhubung ke Vercel dengan framework preset otomatis (Vite).
Setiap push ke branch `main` akan memicu build `npm run build` dan deploy.

- Situs produksi: <https://seva-porto.vercel.app>
- Repositori: <https://github.com/fzzan-seva/React-porto>

Tidak ada variabel lingkungan yang dibutuhkan untuk build.