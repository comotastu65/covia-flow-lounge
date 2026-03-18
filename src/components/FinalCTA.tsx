import { motion } from "framer-motion";

const FinalCTA = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-[2.4rem] border border-border/70 bg-dark p-8 text-center text-dark-foreground shadow-elevated md:p-12"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dark-foreground/60">Último passo</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-balance md:text-5xl">
          Quiero mais leveza no corpo e mais constância na rotina.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-dark-foreground/70 md:text-base">
          Garanta sua COVIA agora e transforme dor, tensão e cansaço em uma recuperação simples e prática todos os dias.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Quero%20eliminar%20minhas%20dores%20com%20a%20COVIA!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 font-display text-base font-semibold text-primary-foreground animate-pulse-gold transition-transform duration-200 hover:scale-[1.02]"
        >
          Quero eliminar minhas dores agora
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
