import { motion } from "framer-motion";
import { Volume2, Disc3, BatteryFull, PlayCircle } from "lucide-react";
import productImg from "@/assets/covia-product.jpg";
import demoVideo from "@/assets/covia-demo.mp4";

const features = [
  { icon: Volume2, title: "Silenciosa", desc: "Uso confortável em casa, no pós-treino ou no fim de um dia intenso." },
  { icon: Disc3, title: "Cabeças intercambiáveis", desc: "Adapte a massagem para diferentes áreas com aplicação simples." },
  { icon: BatteryFull, title: "Bateria durável", desc: "Autonomia para várias sessões sem depender de recargas constantes." },
];

const SolutionSection = () => (
  <section id="demo" className="py-16 md:py-24">
    <div className="container px-4">
      <div className="rounded-[2.4rem] border border-border/70 bg-card/80 p-6 shadow-elevated backdrop-blur-sm md:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Solução COVIA</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground text-balance md:text-4xl">
              Uma experiência de recuperação mais bonita, prática e eficiente.
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground text-pretty">
              Em vez de uma estética pesada e técnica, a COVIA agora ganha uma apresentação mais sofisticada: superfícies claras, blocos bem definidos e vídeo demonstrativo integrado.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[1.6rem] border border-border/70 bg-secondary/70 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-card shadow-card">
                    <feat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-secondary p-4 shadow-card">
              <img
                src={productImg}
                alt="Pistola de massagem COVIA com acessórios em visual premium"
                className="w-full rounded-[1.5rem] object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card p-4 shadow-card">
              <div className="mb-3 flex items-center gap-2 text-sm font-display font-semibold text-foreground">
                <PlayCircle className="h-4 w-4 text-primary" />
                <span>Demonstração do produto</span>
              </div>
              <video className="w-full rounded-[1.5rem] bg-muted" controls playsInline preload="metadata">
                <source src={demoVideo} type="video/mp4" />
                O seu navegador não suporta vídeo em HTML5.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
