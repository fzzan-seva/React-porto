import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import { GitHubIcon } from "./Icons";

function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">
            Projects
          </p>
          <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
            My Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-blue-500/50"
            >
              <div className="aspect-video bg-zinc-800/50">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-zinc-600">
                    <span className="text-4xl font-bold">{project.title[0]}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-blue-500 hover:text-white"
                  >
                    Detail
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
                    >
                      <GitHubIcon size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
