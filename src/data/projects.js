/**
 * Project data — the single source of truth for the Projects section and the
 * project case-study pages.
 *
 * Accuracy notes (verified against the public repositories):
 * - "POS System" is a collaborative/school team project. Its frontend and
 *   backend repositories are owned by a teammate (@farhanline), so it is
 *   presented as a team project, not as sole work.
 * - "FQueensha E-Commerce" and "Web Perpustakaan Digital" are personal repos.
 * - No project currently has a verified live demo URL, so `demo` is omitted
 *   unless a real deployment exists.
 *
 * To add a project, append a new object with the same shape. `cover` is a
 * decorative monogram cover; replace `monogram`/`category` when real
 * screenshots are available.
 */
const projects = [
  {
    id: 1,
    title: "POS System",
    category: "Point of Sale",
    monogram: "POS",
    summary:
      "Aplikasi kasir (point of sale) untuk memproses transaksi penjualan dan mengelola data operasional toko, dikerjakan sebagai proyek tim.",
    overview:
      "POS System adalah aplikasi point-of-sale yang memisahkan frontend dan backend. Frontend dibangun dengan Vue 3 dan Vite, sedangkan backend menyediakan REST API menggunakan Node.js/Express dengan database MySQL melalui Knex. Aplikasi mencakup alur autentikasi, halaman kasir, riwayat transaksi, manajemen shift, dan dashboard.",
    problem:
      "Membantu proses transaksi penjualan agar lebih cepat dan tercatat rapi dibandingkan pencatatan manual.",
    role: "Proyek kolaborasi tim sekolah. Saya berkontribusi sebagai bagian dari tim pengembang; repositori frontend dan backend dikelola oleh rekan tim (@farhanline).",
    tech: ["Vue 3", "Vite", "Node.js", "Express", "MySQL"],
    features: [
      "Autentikasi (login & lupa password) dengan route guard",
      "Halaman kasir untuk memproses transaksi",
      "Riwayat transaksi",
      "Manajemen shift kasir",
      "Dashboard",
      "REST API dengan migrasi & seeder database (Knex)",
    ],
    decisions: [
      "Memisahkan frontend (Vue) dan backend (Express) menjadi dua repositori.",
      "Menggunakan Knex untuk migrasi dan seeder agar struktur database dapat direproduksi.",
    ],
    links: [
      {
        label: "Frontend (GitHub)",
        short: "Frontend",
        href: "https://github.com/farhanline/Point-of-sale-FE",
      },
      {
        label: "Backend (GitHub)",
        short: "Backend",
        href: "https://github.com/farhanline/Point-of-sale-BE",
      },
    ],
  },
  {
    id: 2,
    title: "FQueensha E-Commerce",
    category: "E-Commerce",
    monogram: "FQ",
    summary:
      "Toko online untuk brand fashion gamis FQueensha, dibangun dengan Laravel dan Blade lengkap dengan panel admin.",
    overview:
      "FQueensha E-Commerce adalah aplikasi toko online berbasis Laravel. Aplikasi ini mencakup katalog produk beserta kategori dan pencarian, varian ukuran/warna dengan stok per varian, keranjang belanja, checkout dengan buku alamat, alur pembayaran manual (verifikasi bukti transfer oleh admin), riwayat pesanan, serta panel admin untuk mengelola produk, kategori, pesanan, pengguna, dan pengaturan toko.",
    problem:
      "Menyediakan kanal penjualan online untuk brand gamis, lengkap dengan pengelolaan pesanan dan verifikasi pembayaran manual.",
    role: "Proyek pribadi. Berfokus pada kustomisasi storefront dan panel admin untuk kebutuhan brand FQueensha.",
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    features: [
      "Katalog produk dengan kategori, pencarian, dan filter",
      "Varian ukuran/warna dengan stok per varian",
      "Keranjang belanja, buku alamat, dan checkout",
      "Pembayaran manual: unggah bukti transfer & verifikasi admin",
      "Riwayat pesanan dengan pelacakan status",
      "Panel admin: produk, kategori, pesanan, pengguna, dan pengaturan toko",
    ],
    decisions: [
      "Menggunakan alur pembayaran manual (transfer + unggah bukti) agar cocok untuk operasional skala kecil tanpa payment gateway.",
      "Identitas toko (nama, kontak, rekening) dapat diatur dari panel admin sehingga mudah disesuaikan.",
    ],
    links: [
      {
        label: "Source Code (GitHub)",
        short: "Source",
        href: "https://github.com/fzzan-seva/ecommerce",
      },
    ],
  },
  {
    id: 3,
    title: "Web Perpustakaan Digital",
    category: "Library System",
    monogram: "PD",
    summary:
      "Aplikasi manajemen perpustakaan untuk mengelola buku, anggota, dan sirkulasi peminjaman.",
    overview:
      "Web Perpustakaan Digital adalah aplikasi manajemen perpustakaan berbasis Laravel. Aplikasi ini mengelola data buku beserta penulis, penerbit, kategori, dan rak; data anggota; proses peminjaman dan pengembalian; katalog untuk pengguna; laporan; serta kontrol akses berbasis peran (role & permission) dan log aktivitas.",
    problem:
      "Menggantikan pencatatan peminjaman buku secara manual agar stok dan sirkulasi lebih mudah dipantau.",
    role: "Proyek pribadi.",
    tech: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind CSS"],
    features: [
      "Katalog buku untuk pengguna",
      "Manajemen buku, penulis, penerbit, kategori, dan rak",
      "Manajemen anggota",
      "Peminjaman & pengembalian buku",
      "Laporan",
      "Autentikasi dengan role & permission (Spatie)",
      "Log aktivitas",
    ],
    decisions: [
      "Menggunakan role & permission untuk memisahkan hak akses admin dan pengguna.",
      "Menambahkan log aktivitas untuk melacak perubahan data.",
    ],
    links: [
      {
        label: "Source Code (GitHub)",
        short: "Source",
        href: "https://github.com/fzzan-seva/perpustakaan",
      },
    ],
  },
];

export default projects;
