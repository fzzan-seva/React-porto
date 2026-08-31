import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects", value: "5+" },
  { icon: Cpu, label: "Technologies", value: "10+" },
  { icon: Rocket, label: "Learning", value: "Ongoing" },
];

function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 uppercase tracking-[0.25em] text-primary text-sm">
            About Me
          </p>
          <h2 className="mb-12 font-serif text-4xl font-medium text-text md:text-5xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 leading-relaxed text-muted"
          >
            <p>
              Saya Seorang Siswa kelas 12 SMK Yadika Soreang Jurusan PPLG.
              Saya mempelajari membuat Website menggunakan Vue, React, dan Laravel.
            </p>
            <p>
              Perjalanan saya dimulai dari ketertarikan terhadap web
              development, dan terus berkembang hingga mempelajari
              berbagai framework dan tools seperti React, Laravel,
              Node.js, dan masih banyak lagi. Setiap project adalah
              kesempatan untuk belajar dan berkembang.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex flex-col items-center gap-2 border-t border-border py-6 text-center"
              >
                <stat.icon className="text-primary" size={20} strokeWidth={1.5} />
                <p className="font-serif text-3xl font-medium text-text">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
