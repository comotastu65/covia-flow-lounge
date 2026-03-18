import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marcos S.", role: "Maratonista", text: "Uso depois dos treinos longos e sinto a musculatura muito mais solta no mesmo dia." },
  { name: "Carolina M.", role: "Personal trainer", text: "Ficou fácil indicar uma solução prática para quem precisa recuperar rápido em casa." },
  { name: "Rafael T.", role: "Empresário", text: "Depois de horas sentado, a COVIA ajuda a aliviar tensão no pescoço e nos ombros." },
  { name: "Juliana P.", role: "Crossfiteira", text: "Gostei da força, do silêncio e da sensação de produto premium logo no primeiro uso." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Prova social</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
          Quem experimenta, percebe.
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-[1.8rem] border border-border/70 bg-card/85 p-6 shadow-card backdrop-blur-sm"
          >
            <Stars />
            <p className="mt-5 text-sm leading-relaxed text-foreground">“{t.text}”</p>
            <div className="mt-6 border-t border-border/70 pt-4">
              <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
