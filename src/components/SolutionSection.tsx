import { motion } from "framer-motion";
import { Volume2, Disc3, BatteryFull } from "lucide-react";
import heroImg from "@/assets/covia-hero.png";

const features = [
  { icon: Volume2, title: "Motor Ultra-Quiet", desc: "Potência sem o ruído. Treine e recupere em qualquer lugar." },
  { icon: Disc3, title: "6 Cabeças Intercambiáveis", desc: "Uma ponteira especializada para cada grupo muscular." },
  { icon: BatteryFull, title: "Bateria de 4 Horas", desc: "Uso contínuo sem se preocupar com recarga." },
];

const SolutionSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Engenharia de precisão para o seu corpo.
        </h2>
        <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
          A COVIA combina tecnologia de ponta com design ergonômico para oferecer alívio profundo e imediato.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img src={heroImg} alt="COVIA Massage Gun" className="w-64 md:w-80 drop-shadow-2xl" loading="lazy" />
        </motion.div>

        <div className="space-y-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex gap-4 p-5 rounded-2xl shadow-card bg-card hover:-translate-y-1 hover:shadow-elevated transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">{feat.title}</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
