import { motion } from "framer-motion";
import { Activity, Timer, Wind, Briefcase, PiggyBank } from "lucide-react";

const benefits = [
  { icon: Activity, title: "Alívio rápido", desc: "Sinta os músculos responderem em poucos minutos." },
  { icon: Timer, title: "Recuperação fluida", desc: "Volte ao treino ou ao trabalho com mais leveza." },
  { icon: Wind, title: "Menos tensão", desc: "Ajuda a aliviar rigidez acumulada no corpo." },
  { icon: Briefcase, title: "Vai com você", desc: "Compacta para usar em casa, no trabalho ou em viagens." },
  { icon: PiggyBank, title: "Mais economia", desc: "Reduza a dependência de sessões recorrentes." },
];

const BenefitsSection = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Benefícios</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
          Resultados claros, com visual leve.
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-[1.8rem] border border-border/70 bg-card/80 p-6 shadow-card backdrop-blur-sm ${i === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-2"}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-secondary shadow-card">
              <b.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{b.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
