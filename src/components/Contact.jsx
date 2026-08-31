import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { GitHubIcon, InstagramIcon } from "./Icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData;
    const waNumber = "6289526772479";
    const text = encodeURIComponent(`Halo, saya ${name}.\n\n${message}`);
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    setFormData({ name: "", message: "" });
  };

  const socials = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/6289526772479",
      display: "+62 895-2677-2479",
    },
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
  ];

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 uppercase tracking-[0.25em] text-primary text-sm">
            Contact
          </p>
          <h2 className="mb-14 font-serif text-4xl font-medium text-text md:text-5xl">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-border bg-transparent px-2 py-3 text-text placeholder-muted/60 outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none border-b border-border bg-transparent px-2 py-3 text-text placeholder-muted/60 outline-none transition-colors focus:border-primary"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 rounded border border-primary px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-background"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-6"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-border pb-4 transition-colors hover:border-primary/60"
              >
                <s.icon
                  size={20}
                  className="text-muted transition-colors group-hover:text-primary"
                />
                <div>
                  <p className="text-sm font-medium text-text">{s.label}</p>
                  <p className="text-sm text-muted">{s.display}</p>
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
