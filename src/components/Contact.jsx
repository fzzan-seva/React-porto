import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import SectionHeading from "./SectionHeading";
import { GitHubIcon, InstagramIcon } from "./Icons";

const WHATSAPP_NUMBER = "6289526772479";

const channels = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    display: "+62 895-2677-2479",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    Icon: GitHubIcon,
    label: "GitHub",
    display: "github.com/fzzan-seva",
    href: "https://github.com/fzzan-seva",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    display: "@sevachronicle",
    href: "https://instagram.com/sevachronicle",
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Mohon isi nama Anda.";
    if (formData.message.trim().length < 10)
      next.message = "Mohon isi pesan minimal 10 karakter.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("");
      if (nextErrors.name) nameRef.current?.focus();
      else messageRef.current?.focus();
      return;
    }

    const text = encodeURIComponent(
      `Halo, saya ${formData.name.trim()}.\n\n${formData.message.trim()}`
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");

    setStatus(
      opened
        ? "WhatsApp dibuka di tab baru. Tekan tombol kirim di WhatsApp untuk mengirim pesan Anda."
        : "Popup diblokir browser. Izinkan popup atau hubungi langsung lewat WhatsApp."
    );
    if (opened) setFormData({ name: "", message: "" });
  };

  const inputError = (field) =>
    errors[field]
      ? { "aria-invalid": true, "aria-describedby": `${field}-error` }
      : {};

  return (
    <section id="contact" className="border-t border-border/60 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Kontak"
            title="Mari bekerja sama"
            description="Saya terbuka untuk PKL (magang), kolaborasi, maupun proyek freelance. Kirim pesan melalui formulir di samping — pesan akan diteruskan ke WhatsApp saya."
          />
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.form
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Nama
              </label>
              <input
                ref={nameRef}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="w-full rounded-lg border border-border bg-surface/60 px-3.5 py-3 text-text placeholder:text-muted/60 transition-colors focus:border-primary/70"
                {...inputError("name")}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm text-muted"
              >
                Pesan
              </label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Ceritakan kebutuhan atau proyek Anda…"
                className="w-full resize-none rounded-lg border border-border bg-surface/60 px-3.5 py-3 text-text placeholder:text-muted/60 transition-colors focus:border-primary/70"
                {...inputError("message")}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Kirim lewat WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>

            <p aria-live="polite" className="min-h-5 text-xs text-muted">
              {status}
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/40 px-5 py-4 transition-colors hover:border-primary/50"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors group-hover:text-primary">
                  <channel.Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-text">
                    {channel.label}
                  </span>
                  <span className="block truncate text-sm text-muted">
                    {channel.display}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="ml-auto flex-none text-muted transition-colors group-hover:text-primary"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
