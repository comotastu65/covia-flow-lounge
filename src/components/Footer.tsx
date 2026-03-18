const Footer = () => (
  <footer className="py-8 bg-dark text-dark-foreground/50 border-t border-foreground/5">
    <div className="container px-4 text-center">
      <p className="font-display font-bold text-dark-foreground text-lg tracking-tighter">COVIA</p>
      <p className="text-xs mt-2 font-body">© {new Date().getFullYear()} COVIA. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
