import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects", value: "5+" },
  { icon: Cpu, label: "Technologies", value: "10+" },
  { icon: Rocket, label: "Learning Journey", value: "Ongoing" },
];

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">
            About Me
          </p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-zinc-400 leading-relaxed"
          >
            <p>
              Saya adalah seorang web developer yang passionate dalam
              membangun website modern dan fungsional. Dengan fokus pada
              clean code dan user experience, saya senang mengeksplorasi
              teknologi terbaru untuk menghadirkan solusi digital yang
              berkualitas.
            </p>
            <p>
              Perjalanan saya dimulai dari ketertarikan terhadap web
              development, dan terus berkembang hingga mempelajari
              berbagai framework dan tools seperti React, Laravel,
              Node.js, dan masih banyak lagi. Setiap project adalah
              kesempatan untuk belajar dan berkembang.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-blue-500/50"
              >
                <stat.icon className="mb-3 text-blue-500" size={24} />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
