import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import heroImg from "@/assets/covia-product.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="container px-4 py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="order-2 md:order-1"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.08] text-balance">
              Recuperação profissional.{" "}
              <span className="text-primary">No seu tempo, no seu ritmo.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-body text-pretty max-w-lg">
              A pistola de massagem COVIA elimina a tensão muscular em segundos. Portátil, silenciosa e implacável contra a dor.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511999999999?text=Quero%20a%20minha%20COVIA!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-base hover:scale-105 transition-transform duration-200 shadow-elevated"
              >
                QUERO MINHA COVIA
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-muted-foreground text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span>Entrega expressa em todo o Brasil</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src={heroImg}
              alt="Pistola de massagem COVIA preta com detalhes dourados"
              className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
