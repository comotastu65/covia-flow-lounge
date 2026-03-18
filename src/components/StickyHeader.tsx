import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          className="fixed inset-x-0 top-4 z-50 px-4"
        >
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between rounded-full border border-border/70 bg-card/90 px-4 shadow-card backdrop-blur-md md:px-6">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-foreground md:text-base">
              COVIA
            </span>
            <a
              href="https://wa.me/244955397803?text=Ol%C3%A1%2C%20estou%20interessada%20no%20Massageador%20Pistola%20da%20Covia%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20antes%20de%20poder%20comprar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              Comprar agora
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
