import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

import profile from "../assets/images/profile.jpeg";
import { GitHubIcon, InstagramIcon } from "./Icons";

const socials = [
  {
    label: "GitHub — fzzan-seva",
    href: "https://github.com/fzzan-seva",
    Icon: GitHubIcon,
  },
  {
    label: "Instagram — @sevachronicle",
    href: "https://instagram.com/sevachronicle",
    Icon: InstagramIcon,
  },
];

function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-28 md:pb-28 md:pt-32 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Junior Web Developer
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-text text-balance sm:text-5xl lg:text-6xl">
            Halo, saya Seva.
            <span className="mt-2 block text-muted">
              Saya membangun aplikasi web.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
            Saya Fauzan Seva Nugraha, siswa kelas 12 PPLG di SMK Yadika
            Soreang. Saya mengerjakan aplikasi web dari sisi frontend maupun
            backend — mulai dari antarmuka dengan React, hingga API dan basis
            data menggunakan Node.js, Express, Laravel, dan MySQL.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Lihat proyek
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary/60 hover:text-primary"
            >
              Hubungi saya
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted transition-colors hover:text-primary"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[1.75rem] bg-primary/10 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={profile}
              alt="Foto Fauzan Seva Nugraha"
              width={960}
              height={1280}
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/90 px-4 py-2 text-xs text-muted backdrop-blur">
            <MapPin size={14} aria-hidden="true" />
            SMK Yadika Soreang — PPLG
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
