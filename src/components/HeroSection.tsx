import { motion } from "framer-motion";
import { PlayCircle, Sparkles, Truck } from "lucide-react";
import heroImg from "@/assets/covia-product.jpg";
import ProblemSection from "@/components/ProblemSection";

const highlights = [
  { label: "Recuperação", value: "rápida" },
  { label: "Uso", value: "em casa" },
  { label: "Sensação", value: "imediata" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-8">
      <div className="container px-4 pb-14 md:pb-20">
        <div className="grid items-start gap-6 xl:grid-cols-[1.35fr_0.8fr]">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-card backdrop-blur-sm md:p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1">COVIA</span>
                <span className="rounded-full bg-secondary px-3 py-1">Recuperação portátil</span>
                <span className="rounded-full bg-secondary px-3 py-1">Premium care</span>
              </div>

              <h1 className="mt-10 font-display text-4xl font-semibold leading-[1.02] text-foreground text-balance sm:text-5xl lg:text-[4.25rem]">
                Alívio muscular em minutos, <span className="text-muted-foreground">com design que cabe na sua rotina.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
                A COVIA ajuda a soltar a tensão do treino, do trabalho e do dia corrido com uma experiência simples, silenciosa e elegante.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-border/70 bg-secondary/70 px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                    <p className="mt-2 font-display text-lg font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/5511999999999?text=Quero%20a%20minha%20COVIA!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-base font-semibold text-primary-foreground shadow-card transition-transform duration-200 hover:scale-[1.02]"
                >
                  Quero a minha
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-display text-base font-semibold text-foreground transition-colors duration-200 hover:bg-secondary"
                >
                  <PlayCircle className="h-4 w-4 text-primary" />
                  Ver demonstração
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                  <Truck className="h-4 w-4 text-primary" />
                  Entrega rápida em Luanda e Icolo e Bengo
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Fácil de usar desde a primeira sessão
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="relative min-h-[430px] overflow-hidden rounded-[2.25rem] border border-border/70 bg-secondary shadow-elevated"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--card))_0%,transparent_58%)]" />

              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full border border-card/80 bg-card/80" />
                  <span className="h-8 w-8 rounded-full border border-card/80 bg-card/80" />
                </div>
                <span className="rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  sensorial care
                </span>
              </div>

              <img
                src={heroImg}
                alt="Pistola de massagem COVIA preta com acessórios dourados"
                className="absolute bottom-0 left-1/2 w-full max-w-xl -translate-x-1/2 object-contain px-6"
                loading="eager"
              />

              <div className="absolute bottom-5 left-5 rounded-[1.5rem] border border-card/70 bg-card/90 px-4 py-3 shadow-card backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Uso recomendado</p>
                <p className="mt-1 font-display text-sm font-semibold text-foreground">Pós-treino · trabalho · recovery</p>
              </div>

              <div className="absolute bottom-5 right-5 rounded-[1.5rem] border border-card/70 bg-card/90 px-4 py-3 text-right shadow-card backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Sensação</p>
                <p className="mt-1 font-display text-sm font-semibold text-foreground">Alívio já na primeira aplicação</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="xl:sticky xl:top-24"
          >
            <ProblemSection embedded />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
