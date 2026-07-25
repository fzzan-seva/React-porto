import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

import profile from "../assets/images/profile.jpeg";
import { GitHubIcon, InstagramIcon } from "./Icons";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-blue-400">Hi, I&apos;m</p>

          <h1 className="mb-4 text-6xl font-black text-white md:text-7xl">
            Seva<span className="text-blue-500">.</span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-zinc-300">
            Crafting modern web experiences.
          </h2>

          <p className="max-w-lg leading-relaxed text-zinc-400">
            Saya membangun website modern menggunakan React, Laravel, dan
            Node.js dengan fokus pada performa dan pengalaman pengguna.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition hover:border-blue-500 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/fzzan-seva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 transition hover:text-blue-500"
            >
              <GitHubIcon size={22} />
            </a>
            <a
              href="https://instagram.com/sevachronicle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 transition hover:text-blue-500"
            >
              <InstagramIcon size={22} />
            </a>
            <a
              href="mailto:fauzanseva1@gmail.com"
              aria-label="Email"
              className="text-zinc-400 transition hover:text-blue-500"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -inset-3 rounded-full border border-blue-500/20" />
            <div className="absolute -inset-6 rounded-full border border-blue-500/10" />

            <img
              src={profile}
              alt="Seva"
              loading="lazy"
              className="relative h-80 w-80 rounded-full border-4 border-zinc-700 object-cover shadow-2xl md:h-96 md:w-96"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
