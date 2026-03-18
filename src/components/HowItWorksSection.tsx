import { motion } from "framer-motion";
import { Target, SlidersHorizontal, Sparkles } from "lucide-react";

const steps = [
  { icon: Target, step: "01", title: "Escolha a ponteira", desc: "Selecione entre 6 cabeças a ideal para sua dor." },
  { icon: SlidersHorizontal, step: "02", title: "Ajuste a intensidade", desc: "30 níveis de potência para controle total." },
  { icon: Sparkles, step: "03", title: "Sinta o alívio", desc: "Deslize sobre o músculo e sinta a liberação imediata." },
];

const HowItWorksSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
      >
        Simples assim.
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Dotted line connector */}
        <div className="hidden md:block absolute top-24 left-[16.6%] right-[16.6%] border-t-2 border-dashed border-primary/20" />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-5 z-10">
                <s.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-2 max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
