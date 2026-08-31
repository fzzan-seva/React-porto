import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import projects from "../data/projects";
import { GitHubIcon } from "../components/Icons";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
        <h1 className="font-serif text-4xl font-medium text-text">
          Project Not Found
        </h1>
        <Link
          to="/"
          className="flex items-center gap-2 text-primary transition hover:text-accent"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition hover:text-text"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mb-8 flex aspect-video items-center justify-center border border-border bg-card/40">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="font-serif text-6xl font-medium text-muted">
                {project.title[0]}
              </span>
            )}
          </div>

          <h1 className="mb-5 font-serif text-4xl font-medium text-text md:text-5xl">
            {project.title}
          </h1>

          <p className="mb-10 max-w-2xl leading-relaxed text-muted">
            {project.description}
          </p>

          {project.tech && (
            <div className="mb-10">
              <h2 className="mb-4 font-serif text-xl font-medium text-text">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm uppercase tracking-wider text-primary/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features && (
            <div className="mb-10">
              <h2 className="mb-4 font-serif text-xl font-medium text-text">
                Features
              </h2>
              <ul className="space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 h-px w-4 flex-shrink-0 bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-text"
              >
                <GitHubIcon size={18} />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-background"
              >
                <ArrowUpRight size={18} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetail;
