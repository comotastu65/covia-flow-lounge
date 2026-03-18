import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marcos S.", role: "Maratonista", text: "Como maratonista, a COVIA virou meu fisioterapeuta de bolso. Não viajo sem." },
  { name: "Carolina M.", role: "Personal Trainer", text: "Recomendo para todos os meus alunos. A recuperação pós-treino ficou muito mais rápida." },
  { name: "Rafael T.", role: "Empresário", text: "Depois de um dia inteiro de reuniões, 10 minutos com a COVIA e a tensão desaparece." },
  { name: "Juliana P.", role: "Crossfiteira", text: "A melhor compra que fiz para minha rotina de treinos. Silenciosa e potente." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Quem usa, aprova.
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-6 rounded-2xl shadow-card hover:-translate-y-1 hover:shadow-elevated transition-all duration-200"
          >
            <Stars />
            <p className="mt-4 text-sm text-foreground font-body leading-relaxed">"{t.text}"</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
