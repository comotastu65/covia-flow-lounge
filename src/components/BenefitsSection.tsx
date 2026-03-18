import { motion } from "framer-motion";
import { Activity, Timer, Wind, Briefcase, PiggyBank } from "lucide-react";

const benefits = [
  { icon: Activity, title: "Alívio Rápido", desc: "Sinta a diferença em minutos" },
  { icon: Timer, title: "Recuperação Acelerada", desc: "Reduza 40% do tempo de recuperação" },
  { icon: Wind, title: "Relaxamento Profundo", desc: "Liberação miofascial profissional" },
  { icon: Briefcase, title: "Portátil", desc: "Leve para qualquer lugar" },
  { icon: PiggyBank, title: "Economia Real", desc: "Menos gastos com fisioterapia" },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Por que escolher a COVIA?
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card shadow-card hover:-translate-y-1 hover:shadow-elevated transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-sm">{b.title}</h3>
            <p className="text-xs text-muted-foreground font-body mt-1">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
