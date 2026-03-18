import { motion } from "framer-motion";
import problemImg from "@/assets/covia-problem.jpg";

const pains = [
  { title: "Nódulos de tensão pós-treino?", desc: "Aquela dor que não passa e atrapalha seu próximo treino." },
  { title: "Rigidez após 8h de escritório?", desc: "Pescoço travado, ombros pesados, a produtividade despenca." },
  { title: "Gastos infinitos com massagem?", desc: "Sessões caras que aliviam por horas — e a dor volta." },
];

const ProblemSection = () => (
  <section className="relative py-20 md:py-28 bg-dark text-dark-foreground overflow-hidden">
    {/* Background image overlay */}
    <div
      className="absolute inset-0 opacity-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${problemImg})` }}
    />
    <div className="absolute inset-0 bg-dark/80" />

    <div className="container px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
          A dor não deveria ser parte da sua rotina.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="font-display text-lg font-bold text-primary mb-2">{pain.title}</h3>
            <p className="text-sm text-dark-foreground/70 font-body">{pain.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
