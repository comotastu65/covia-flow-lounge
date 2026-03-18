import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, Truck } from "lucide-react";
import heroImg from "@/assets/covia-product.jpg";

const highlights = [
  { label: "Recuperação", value: "rápida" },
  { label: "Uso", value: "em casa" },
  { label: "Sensação", value: "imediata" },
];

const pains = [
  "Pós-treino pesado",
  "Rotina intensa",
  "Alívio caro e curto",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-8">
      <div className="container px-4 pb-14 md:pb-20">
        <div className="overflow-hidden rounded-[2.5rem] border border-border/70 bg-card/80 shadow-elevated backdrop-blur-sm">
          <div className="grid gap-8 p-5 md:p-7 xl:grid-cols-[0.92fr_1.08fr] xl:items-center xl:gap-10 xl:p-8">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="px-1 py-3 md:px-2 lg:py-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-card">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Entrega rápida em Luanda e Icolo e Bengo
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1">COVIA</span>
                <span className="rounded-full bg-secondary px-3 py-1">Recuperação portátil</span>
                <span className="rounded-full bg-secondary px-3 py-1">Premium care</span>
              </div>

              <h1 className="mt-8 max-w-2xl font-display text-4xl font-semibold leading-[0.98] text-foreground text-balance sm:text-5xl lg:text-[4.2rem]">
                Alívio muscular em minutos, <span className="text-muted-foreground">com design que cabe na sua rotina.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                A COVIA ajuda a soltar a tensão do treino, do trabalho e do dia corrido com uma experiência simples, silenciosa e elegante.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/5511999999999?text=Quero%20a%20minha%20COVIA!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-semibold text-primary-foreground shadow-card transition-transform duration-200 hover:scale-[1.02]"
                >
                  Quero a minha
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-display text-base font-semibold text-foreground transition-colors duration-200 hover:bg-secondary"
                >
                  <PlayCircle className="h-4 w-4 text-primary" />
                  Ver demonstração
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border/70 pt-6">
                <div className="flex -space-x-3">
                  {['A', 'C', 'V'].map((item) => (
                    <span
                      key={item}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-card bg-secondary font-display text-sm font-semibold text-foreground shadow-card"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-foreground">Preço promocional: de 15.000 Kz por 10.000 Kz</p>
                  <p className="text-sm text-muted-foreground">Ideal para recovery em casa, no trabalho ou depois do treino.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="relative min-h-[460px] overflow-hidden rounded-[2.2rem] border border-border/70 bg-secondary shadow-elevated md:min-h-[560px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--card))_0%,transparent_52%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--accent))_0%,transparent_38%,hsl(var(--background))_100%)] opacity-70" />

              <div className="absolute left-5 right-5 top-5 z-10 flex items-start justify-between gap-4 md:left-6 md:right-6 md:top-6">
                <span className="rounded-full bg-card px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-card">
                  sensorial care
                </span>
                <div className="max-w-[180px] rounded-[1.25rem] border border-card/70 bg-card/95 px-4 py-3 shadow-card backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Sensação</p>
                  <p className="mt-1 font-display text-sm font-semibold text-foreground">Alívio já na primeira aplicação</p>
                </div>
              </div>

              <img
                src={heroImg}
                alt="Pistola de massagem COVIA preta com acessórios dourados"
                className="absolute bottom-0 right-0 z-[1] h-full w-full object-cover"
                loading="eager"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--foreground)/0.08)_100%)] p-5 md:p-6">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div className="max-w-[240px] rounded-[1.3rem] border border-card/70 bg-card/95 px-4 py-3 shadow-card backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Uso recomendado</p>
                    <p className="mt-1 font-display text-sm font-semibold text-foreground">Pós-treino · trabalho · recovery</p>
                  </div>

                  <div className="grid gap-2 rounded-[1.5rem] border border-card/70 bg-card/95 p-4 shadow-card backdrop-blur-sm sm:min-w-[250px]">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Benefícios centrais</p>
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid gap-2">
                      {pains.map((pain) => (
                        <div key={pain} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-3 border-t border-border/70 bg-secondary/45 p-5 md:grid-cols-3 md:p-6">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-border/70 bg-card/85 px-4 py-4 shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                <p className="mt-2 font-display text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-border/70 px-5 py-5 text-sm text-muted-foreground md:px-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-card">
              <Truck className="h-4 w-4 text-primary" />
              Entrega rápida em Luanda e Icolo e Bengo
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-card">
              <Sparkles className="h-4 w-4 text-primary" />
              Fácil de usar desde a primeira sessão
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;