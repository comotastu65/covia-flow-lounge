import { motion } from "framer-motion";
import { Target, SlidersHorizontal, Sparkles } from "lucide-react";

const steps = [
  { icon: Target, step: "01", title: "Escolha a ponteira", desc: "Use a cabeça ideal para cada região e tipo de tensão." },
  { icon: SlidersHorizontal, step: "02", title: "Ajuste a intensidade", desc: "Controle a força com facilidade, sem complicação." },
  { icon: Sparkles, step: "03", title: "Aplique e alivie", desc: "Passe sobre a área dolorida por alguns minutos e sinta a diferença." },
];

const HowItWorksSection = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Como funciona</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
          Três passos, sem esforço.
        </h2>
      </motion.div>

      <div className="relative mx-auto grid max-w-5xl gap-4 lg:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="rounded-[2rem] border border-border/70 bg-card/80 p-6 text-left shadow-card backdrop-blur-sm md:p-7"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-secondary shadow-card">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.step}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
