import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    skills: ["JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    name: "Frontend Frameworks",
    skills: ["React", "Vue"],
  },
  {
    name: "Backend Frameworks",
    skills: ["Node.js", "Express", "Laravel"],
  },
  {
    name: "CSS Frameworks",
    skills: ["Tailwind"],
  },
  {
    name: "Database",
    skills: ["MySQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "AI Prompting"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 uppercase tracking-[0.25em] text-primary text-sm">
            Skills
          </p>
          <h2 className="mb-14 font-serif text-4xl font-medium text-text md:text-5xl">
            My Skills
          </h2>
        </motion.div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h3 className="mb-5 border-b border-border pb-3 text-sm font-medium uppercase tracking-wider text-text">
                {cat.name}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted transition-colors hover:text-primary"
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
