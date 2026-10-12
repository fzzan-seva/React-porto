/**
 * Decorative, non-representational cover for project cards.
 *
 * The repository only contains placeholder graphics ("Project Preview"),
 * so we deliberately avoid presenting them as application screenshots.
 * Instead each project gets a distinct, obviously-graphic cover built from
 * its monogram and category label. Replace this with a real screenshot when
 * one is available.
 */
function ProjectCover({ monogram = "", category = "", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden bg-surface ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-primary">
          {category}
        </span>
        <span className="font-display text-5xl font-semibold tracking-tight text-text/25 sm:text-6xl">
          {monogram}
        </span>
      </div>
    </div>
  );
}

export default ProjectCover;
