import { motion } from "framer-motion";
import { Shield, Truck, Clock } from "lucide-react";

const OfferSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Diga adeus à dor hoje.
          </h2>

          <div className="mt-8 p-8 rounded-3xl shadow-elevated bg-card">
            <p className="text-muted-foreground text-sm font-body line-through">De R$ 897,00</p>
            <p className="font-display text-5xl font-extrabold text-foreground mt-1">
              R$ 497<span className="text-2xl">,00</span>
            </p>
            <p className="text-muted-foreground text-sm mt-2 font-body">
              ou <span className="font-semibold text-foreground">12x de R$ 49,90</span> sem juros
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary font-display font-bold">
              <Clock className="w-4 h-4" />
              Apenas 14 unidades restantes com frete grátis
            </div>

            <a
              href="https://wa.me/5511999999999?text=Quero%20garantir%20minha%20COVIA%20com%20desconto!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform duration-200 animate-pulse-gold"
            >
              GARANTIR DESCONTO AGORA
            </a>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Garantia de 30 dias</span>
              <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Frete grátis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default OfferSection;
