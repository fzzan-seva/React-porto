import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

const facts = [
  { label: "Pendidikan", value: "Kelas 12 PPLG — SMK Yadika Soreang" },
  { label: "Fokus", value: "Frontend & backend web" },
  { label: "Stack utama", value: "React · Node.js · Laravel" },
  { label: "Status", value: "Terbuka untuk PKL / magang" },
];

function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Tentang"
            title="Belajar dengan membangun aplikasi nyata"
          />
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="space-y-5 leading-relaxed text-muted text-pretty"
          >
            <p>
              Saya Fauzan Seva Nugraha, siswa kelas 12 jurusan PPLG
              (Pengembangan Perangkat Lunak dan Gim) di SMK Yadika Soreang.
              Saya tertarik pada pengembangan web, baik di sisi frontend
              maupun backend.
            </p>
            <p>
              Saya belajar dengan membangun aplikasi, bukan hanya dari teori.
              Beberapa proyek yang saya kerjakan mencakup sistem kasir,
              toko online, dan manajemen perpustakaan — menggunakan React,
              Vue, Laravel, Node.js, Express, dan MySQL. Dari proyek-proyek
              tersebut saya berlatih menyusun antarmuka, membangun API,
              merancang basis data, serta membaca dan memperbaiki kode yang
              sudah ada.
            </p>
            <p>
              Saya terbuka pada masukan, senang memecahkan masalah, dan
              berusaha menulis kode yang rapi serta mudah dirawat. Tujuan saya
              berikutnya adalah tumbuh melalui program PKL (magang) dan
              proyek nyata bersama tim.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="grid gap-px overflow-hidden rounded-xl border border-border bg-border"
          >
            {facts.map((fact) => (
              <div key={fact.label} className="bg-surface px-5 py-5">
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm text-text">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

export default About;
