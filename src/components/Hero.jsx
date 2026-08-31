import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import profile from "../assets/images/profile.jpeg";
import { GitHubIcon, InstagramIcon } from "./Icons";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 uppercase tracking-[0.25em] text-primary text-sm">
            Hi, I&apos;m
          </p>

          <h1 className="mb-5 font-serif text-6xl font-medium leading-tight text-text md:text-7xl">
            Seva<span className="text-primary">.</span>
          </h1>

          <h2 className="mb-6 text-xl font-light text-muted">
            Crafting modern web experiences.
          </h2>

          <p className="max-w-lg leading-relaxed text-muted">
            Saya membangun website modern menggunakan React, Laravel, dan
            Node.js dengan fokus pada performa dan pengalaman pengguna.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded border border-primary px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-background"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="rounded border border-border px-6 py-2.5 text-sm font-medium text-text transition-colors hover:border-text"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-6">
            <a
              href="https://github.com/fzzan-seva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-primary"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href="https://instagram.com/sevachronicle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted transition-colors hover:text-primary"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-border" />
            <img
              src={profile}
              alt="Seva"
              loading="lazy"
              className="relative h-72 w-72 rounded-full object-cover md:h-80 md:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
