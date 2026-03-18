import { motion } from "framer-motion";
import { Volume2, Disc3, BatteryFull, PlayCircle } from "lucide-react";
import productImg from "@/assets/covia-product.jpg";
import demoVideo from "@/assets/covia-demo.mp4";

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

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center rounded-[2rem] bg-card shadow-card p-6"
          >
            <img
              src={productImg}
              alt="Pistola de massagem COVIA com acessórios"
              className="w-full max-w-sm drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] bg-card shadow-card p-4 md:p-5"
          >
            <div className="flex items-center gap-2 text-sm font-display font-bold text-foreground mb-3">
              <PlayCircle className="w-4 h-4 text-primary" />
              <span>Veja a COVIA em ação</span>
            </div>
            <video
              className="w-full rounded-[1.5rem] bg-muted"
              controls
              playsInline
              preload="metadata"
            >
              <source src={demoVideo} type="video/mp4" />
              O seu navegador não suporta vídeo em HTML5.
            </video>
          </motion.div>
        </div>

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
