import { motion } from "framer-motion";
import { Clock, Shield, Truck } from "lucide-react";

const OfferSection = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl rounded-[2.4rem] border border-border/70 bg-card/85 p-6 shadow-elevated backdrop-blur-sm md:p-8 lg:p-10"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Oferta limitada</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Um cuidado premium para o seu corpo, com condição especial hoje.
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground">
              <Clock className="h-4 w-4 text-primary" />
              Apenas 14 unidades restantes com frete grátis
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-secondary/60 p-6 md:p-8">
            <p className="text-sm text-muted-foreground line-through">De R$ 897,00</p>
            <p className="mt-2 font-display text-5xl font-semibold text-foreground md:text-6xl">
              R$ 497<span className="text-2xl md:text-3xl">,00</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              ou <span className="font-semibold text-foreground">12x de R$ 49,90</span> sem juros
            </p>

            <a
              href="https://wa.me/5511999999999?text=Quero%20garantir%20minha%20COVIA%20com%20desconto!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-base font-semibold text-primary-foreground animate-pulse-gold transition-transform duration-200 hover:scale-[1.02]"
            >
              Garantir desconto agora
            </a>

            <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Garantia de 30 dias</span>
              <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Frete grátis</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
