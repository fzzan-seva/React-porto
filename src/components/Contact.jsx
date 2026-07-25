import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle } from "lucide-react";

import { GitHubIcon, InstagramIcon } from "./Icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const waNumber = "6289526772479";
    const text = encodeURIComponent(
      `Halo, saya ${name} (${email}).\n\n${message}`
    );
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      icon: GitHubIcon,
      label: "GitHub",
      href: "https://github.com/fzzan-seva",
      display: "github.com/fzzan-seva",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://instagram.com/sevachronicle",
      display: "@sevachronicle",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:fauzanseva1@gmail.com",
      display: "fauzanseva1@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/6289526772479",
      display: "+62 895-2677-2479",
    },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">
            Contact
          </p>
          <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-blue-500/50"
              >
                <s.icon size={20} className="text-blue-500" />
                <div>
                  <p className="font-medium text-white">{s.label}</p>
                  <p className="text-sm text-zinc-400">{s.display}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
