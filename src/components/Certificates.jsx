import { motion } from "framer-motion";

import certificates from "../data/certificates";
import SectionHeading from "./SectionHeading";

/**
 * Renders nothing when there is no verified certificate data, so placeholder
 * credentials are never shown to visitors. See src/data/certificates.js.
 */
function Certificates() {
  if (!certificates.length) return null;

  return (
    <section id="certificates" className="border-t border-border/60 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="Sertifikat" title="Sertifikat & pelatihan" />
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface/40"
            >
              <div className="aspect-[4/3] bg-card/60">
                <img
                  src={certificate.image}
                  alt={`Sertifikat ${certificate.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-text">
                  {certificate.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-primary">
                  {[certificate.issuer, certificate.date]
                    .filter(Boolean)
                    .join(" \u2022 ")}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {certificate.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
