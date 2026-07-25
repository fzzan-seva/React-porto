import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    name: "Backend",
    skills: [
      "PHP",
      "Node.js",
      "Express",
    ],
  },
  {
    name: "Database",
    skills: [
      "MySQL",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "AI Prompting",
    ],
  },
  {
    name: "Framework",
    skills: [
      "Vue",
      "React",
      "Laravel",
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">
            Skills
          </p>
          <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
            My Skills
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-blue-500/50 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
