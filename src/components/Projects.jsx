import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 uppercase tracking-[0.25em] text-primary text-sm">
            Projects
          </p>
          <h2 className="mb-14 font-serif text-4xl font-medium text-text md:text-5xl">
            My Projects
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col border border-border p-6 transition-colors hover:border-primary/60"
            >
              <div className="mb-6 flex aspect-video items-center justify-center bg-card/40">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-4xl font-medium text-muted">
                    {project.title[0]}
                  </span>
                )}
              </div>

              <h3 className="mb-3 font-serif text-2xl font-medium text-text transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-x-3 gap-y-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs uppercase tracking-wider text-primary/80">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm text-text transition-colors hover:text-primary"
              >
                View Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
