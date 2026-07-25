import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <a href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-white">Seva</span>
          <span className="text-blue-500">.</span>
        </a>

        <p className="mt-3 text-sm text-zinc-400">
          Crafting modern web experiences.
        </p>

        <div className="mt-6 flex items-center justify-center gap-1 text-sm text-zinc-500">
          <span>&copy; 2026 Seva.</span>
          <span>Made with Fauzan Seva Nugraha</span>
          <Heart size={14} className="text-red-500" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
