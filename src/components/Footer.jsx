import { Link } from "react-router-dom";

import { GitHubIcon, InstagramIcon } from "./Icons";

const navLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Keahlian", href: "#skills" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

const externalLinks = [
  { name: "GitHub", href: "https://github.com/fzzan-seva" },
  { name: "Instagram", href: "https://instagram.com/sevachronicle" },
  { name: "WhatsApp", href: "https://wa.me/6289526772479" },
  {
    name: "Source code portofolio",
    href: "https://github.com/fzzan-seva/React-porto",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-tight text-text"
            >
              Seva<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Fauzan Seva Nugraha — siswa PPLG yang membangun aplikasi web
              dengan React, Laravel, dan Node.js.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/fzzan-seva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub — fzzan-seva"
                className="text-muted transition-colors hover:text-primary"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://instagram.com/sevachronicle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @sevachronicle"
                className="text-muted transition-colors hover:text-primary"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Tautan
            </h2>
            <ul className="mt-4 space-y-2.5">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Fauzan Seva Nugraha (Seva).</p>
          <p>Dibangun dengan React, Vite, dan Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
