import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import projects from "../data/projects";
import ProjectCover from "../components/ProjectCover";

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!project) return undefined;
    document.title = `${project.title} — Seva | Portofolio`;
    return () => {
      document.title = "Seva — Junior Web Developer | Portofolio Fauzan Seva Nugraha";
    };
  }, [project]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
        <h1 className="font-display text-3xl font-semibold text-text">
          Proyek tidak ditemukan
        </h1>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Kembali ke beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 pt-24 md:pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Kembali ke proyek
          </Link>

          <ProjectCover
            monogram={project.monogram}
            category={project.category}
            className="mt-8 aspect-[16/9] rounded-2xl border border-border"
          />

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {project.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text text-balance md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted text-pretty">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary/60 hover:text-primary"
              >
                {link.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          className="mt-14 border-t border-border/60 pt-8"
        >
          <Section title="Ringkasan">
            <p className="leading-relaxed text-muted text-pretty">
              {project.overview}
            </p>
          </Section>

          <Section title="Masalah yang diselesaikan">
            <p className="leading-relaxed text-muted text-pretty">
              {project.problem}
            </p>
          </Section>

          <Section title="Peran & kontribusi">
            <p className="leading-relaxed text-muted text-pretty">
              {project.role}
            </p>
          </Section>

          <Section title="Fitur utama">
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-px w-4 flex-none bg-primary"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>

          {project.decisions?.length > 0 && (
            <Section title="Catatan teknis">
              <ul className="space-y-3">
                {project.decisions.map((decision) => (
                  <li key={decision} className="flex items-start gap-3 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-4 flex-none bg-primary"
                    />
                    {decision}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetail;