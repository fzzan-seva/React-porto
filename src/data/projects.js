import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

const projects = [
  {
    id: 1,
    title: "POS System",
    description:
      "Sistem kasir modern yang dibangun dengan Vue dan Node.js. Mendukung manajemen produk, transaksi real-time, dan laporan penjualan.",
    image: project1,
    github: "https://github.com/farhanline/Point-of-sale-BE",
    demo: "",
    tech: ["Vue", "Vite", "Node.js", "Express", "MySQL"],
    features: [
      "CRUD Produk",
      "Middleware Admin/Kasir",
      "Transaksi real-time",
      "Laporan penjualan harian",
      "Cetak struk otomatis",
    ],
  },
  {
    id: 2,
    title: "Ecommerce",
    description:
      "Website Jual & Beli Baju gamis modern dengan brand FQueensha",
    image: project2,
    github: "https://github.com/fzzan-seva/ecommerce",
    demo: "",
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    features: [
      "Desain responsif",
      "Animasi smooth",
      "Elegant theme",
      "Form kontak",
    ],
  },
  {
    id: 3,
    title: "Web Perpustakaan Digital",
    description:
      "Platform blog sederhana dengan Laravel dan MySQL. Fitur Login, Peminjaman buku, dan Manajemen buku",
    image: project3,
    github: "https://github.com/fzzan-seva/perpustakaan-Laravel",
    demo: "",
    tech: ["Laravel", "PHP", "MySQL", "Blade"],
    features: [
      "Login Feature",
      "CRUD Books(Admin)",
      "Books Management",
      "Responsive design",
    ],
  },
];

export default projects;
