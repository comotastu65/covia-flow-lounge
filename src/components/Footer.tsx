const Footer = () => (
  <footer className="pb-10 pt-6">
    <div className="container px-4">
      <div className="rounded-[2rem] border border-border/70 bg-card/80 px-6 py-8 text-center shadow-card backdrop-blur-sm">
        <p className="font-display text-lg font-semibold uppercase tracking-[0.24em] text-foreground">COVIA</p>
        <p className="mt-2 text-sm text-muted-foreground">© {new Date().getFullYear()} COVIA. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
