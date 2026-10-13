/**
 * Project data — the single source of truth for the Projects section and the
 * project case-study pages.
 *
 * Accuracy notes (verified against the public repositories):
 * - "POS System" is a collaborative/school team project. Its frontend and
 *   backend repositories are owned by a teammate (@farhanline), so it is
 *   presented as a team project, not as sole work.
 * - "Template E-Commerce – Elegant Black & Gold" and "Web Perpustakaan Digital" are personal repos.
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
    title: "Template E-Commerce – Elegant Black & Gold",
    category: "E-Commerce",
    monogram: "EG",
    summary:
      "Template e-commerce premium bertema hitam dan emas, siap pakai dan bisa langsung dijual sebagai produk digital.",
    overview:
      "Template E-Commerce – Elegant Black & Gold adalah template toko online berbasis Laravel dengan desain elegan, premium, dan bertema hitam & emas. Cocok buat berbagai brand fashion, gamis, hijab, aksesoris, atau produk premium lainnya. Sudah lengkap dengan katalog produk, varian ukuran/warna, keranjang belanja, checkout, pembayaran manual, riwayat pesanan, dan panel admin siap pakai.",
    problem:
      "Menyediakan template e-commerce siap pakai bertema hitam dan emas untuk mempercepat bikin toko online, atau bisa dijadikan produk digital siap jual.",
    role: "Proyek pribadi. Fokus pada desain UI/UX bertema hitam & emas, struktur kode yang rapi, dan kemudahan rebranding biar template ini makin gampang dipakai.",
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    features: [
      "Desain premium dan elegan dengan tema hitam & emas",
      "Siap pakai dan mudah di-rebrand",
      "Katalog produk dengan kategori, pencarian, dan filter",
      "Varian ukuran/warna dengan stok per varian",
      "Keranjang belanja, buku alamat, dan checkout",
      "Pembayaran manual: bisa unggah bukti transfer dan diverifikasi oleh admin",
      "Riwayat pesanan dengan pelacakan status",
      "Panel admin: produk, kategori, pesanan, pengguna, dan pengaturan toko",
      "Kode terstruktur rapi dan mudah dikustomisasi",
    ],
    decisions: [
      "Menggunakan konsep hitam dan emas untuk menciptakan kesan premium dan eksklusif.",
      "Dirancang sebagai template siap pakai, bisa langsung dipakai atau dijual kembali sebagai produk digital.",
      "Menggunakan alur pembayaran manual (transfer + unggah bukti) biar bisa dipakai tanpa bergantung pada payment gateway.",
      "Semua data toko (nama, logo, kontak, rekening) bisa diatur lewat panel admin untuk mempermudah rebranding.",
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