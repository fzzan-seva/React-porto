import { motion } from "framer-motion";
import { Braces, Database, LayoutDashboard, Server, Wrench } from "lucide-react";

import SectionHeading from "./SectionHeading";

const categories = [
  {
    name: "Bahasa",
    Icon: Braces,
    skills: ["JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    Icon: LayoutDashboard,
    skills: ["React", "Vue", "Tailwind CSS", "Blade"],
  },
  {
    name: "Backend",
    Icon: Server,
    skills: ["Node.js", "Express", "Laravel", "REST API"],
  },
  {
    name: "Database",
    Icon: Database,
    skills: ["MySQL"],
  },
  {
    name: "Tools & Workflow",
    Icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vite"],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Keahlian"
            title="Teknologi yang saya gunakan"
            description="Teknologi berikut saya pakai dalam proyek nyata yang ada di halaman ini maupun proyek latihan lainnya. Tanpa angka persentase — yang penting bisa ditunjukkan lewat kode."
          />
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              className="rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  <category.Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-text">
                  {category.name}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-card/60 px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
