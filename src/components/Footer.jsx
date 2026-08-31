function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <a href="/" className="font-serif text-2xl font-medium tracking-wide">
          <span className="text-text">Seva</span>
          <span className="text-primary">.</span>
        </a>

        <p className="mt-3 text-sm text-muted">
          Crafting modern web experiences.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted/70">
          <span>&copy; 2026 Seva.</span>
          <span>&middot;</span>
          <span>Fauzan Seva Nugraha</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
