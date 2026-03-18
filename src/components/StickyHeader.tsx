import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
        >
          <div className="container flex items-center justify-between h-16 px-4">
            <span className="font-display text-xl font-bold tracking-tighter text-foreground">
              COVIA
            </span>
            <a
              href="https://wa.me/5511999999999?text=Quero%20a%20minha%20COVIA!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-display font-bold text-sm hover:bg-gold-hover transition-colors duration-200"
            >
              Comprar Agora
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
