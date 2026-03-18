import { motion } from "framer-motion";

const pains = [
  { number: "01", title: "Pós-treino pesado", desc: "Quando a dor muscular atrasa o próximo treino e rouba sua constância." },
  { number: "02", title: "Rotina intensa", desc: "Pescoço rígido, costas cansadas e ombros pesados depois de horas de trabalho." },
  { number: "03", title: "Alívio caro e curto", desc: "Sessões pontuais ajudam, mas a tensão volta e o custo acumula." },
];

const ProblemSection = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4">
      <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-card backdrop-blur-sm md:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Onde a dor aparece</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground text-balance md:text-4xl">
            Se o corpo trava, a rotina perde ritmo.
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted-foreground text-pretty">
            A referência visual pediu mais leveza, respiro e clareza — então esta seção agora apresenta a dor do cliente em blocos limpos, com leitura rápida e sensação premium.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-[1.8rem] border border-border/70 bg-card/80 p-6 shadow-card backdrop-blur-sm ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-foreground">{pain.title}</h3>
                <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {pain.number}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
