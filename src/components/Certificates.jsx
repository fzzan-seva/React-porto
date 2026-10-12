import { motion } from "framer-motion";

import certificates from "../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 uppercase tracking-[0.25em] text-primary text-sm">
            Certificates
          </p>
          <h2 className="mb-14 font-serif text-4xl font-medium text-text md:text-5xl">
            My Certificates
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2">
          {certificates.map((certificate, i) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col border border-border p-6 transition-colors hover:border-primary/60"
            >
              <div className="mb-6 flex aspect-[4/3] items-center justify-center bg-card/40">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-4xl font-medium text-muted">
                    {certificate.title[0]}
                  </span>
                )}
              </div>

              <h3 className="mb-2 font-serif text-2xl font-medium text-text transition-colors group-hover:text-primary">
                {certificate.title}
              </h3>

              <p className="mb-5 text-xs uppercase tracking-wider text-primary/80">
                {certificate.issuer}
                {certificate.issuer && certificate.date && " \u2022 "}
                {certificate.date}
              </p>

              <p className="flex-1 text-sm leading-relaxed text-muted">
                {certificate.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
