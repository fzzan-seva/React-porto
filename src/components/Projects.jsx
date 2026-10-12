import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCover from "./ProjectCover";

function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Proyek"
            title="Proyek pilihan"
            description="Beberapa proyek yang saya kerjakan, lengkap dengan teknologi, fitur, dan tautan kode sumbernya."
          />
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface/40 transition-colors duration-300 hover:border-primary/50"
            >
              <ProjectCover
                monogram={project.monogram}
                category={project.category}
                className="aspect-[16/10] border-b border-border"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-text">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted text-pretty">
                  {project.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-card/60 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-primary"
                  >
                    Studi kasus
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-primary"
                        aria-label={`${project.title} — ${link.label}`}
                      >
                        {link.short}
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
