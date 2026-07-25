import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

import projects from "../data/projects";
import { GitHubIcon } from "../components/Icons";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mb-8 aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-zinc-600">
                <span className="text-6xl font-bold">{project.title[0]}</span>
              </div>
            )}
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white">
            {project.title}
          </h1>

          <p className="mb-8 max-w-2xl leading-relaxed text-zinc-400">
            {project.description}
          </p>

          {project.tech && (
            <div className="mb-8">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features && (
            <div className="mb-8">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Features
              </h2>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-blue-500 hover:text-white"
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
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                <ExternalLink size={18} />
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
