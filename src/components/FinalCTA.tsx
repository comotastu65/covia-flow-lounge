import { motion } from "framer-motion";

const FinalCTA = () => (
  <section className="py-20 md:py-28 bg-dark text-dark-foreground">
    <div className="container px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
          Sua melhor performance começa na recuperação.
        </h2>
        <p className="mt-4 text-dark-foreground/70 font-body max-w-lg mx-auto">
          Não espere mais para viver sem dor. Garanta sua COVIA agora e transforme sua rotina.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Quero%20eliminar%20minhas%20dores%20com%20a%20COVIA!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform duration-200 animate-pulse-gold"
        >
          QUERO ELIMINAR MINHAS DORES AGORA
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
