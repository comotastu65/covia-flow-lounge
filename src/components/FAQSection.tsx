import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "A pistola de massagem realmente funciona?", a: "Sim! A COVIA utiliza terapia percussiva, clinicamente comprovada para aliviar dores musculares, melhorar a circulação e acelerar a recuperação. Milhares de atletas e profissionais já comprovaram os resultados." },
  { q: "É seguro usar em casa?", a: "Totalmente seguro. A COVIA possui 30 níveis de intensidade ajustáveis, permitindo que você controle a pressão. É projetada para uso doméstico com proteção contra superaquecimento." },
  { q: "Quanto tempo devo usar por sessão?", a: "Recomendamos de 1 a 2 minutos por grupo muscular, totalizando 10 a 15 minutos por sessão. É suficiente para sentir alívio profundo." },
  { q: "Tem garantia?", a: "Sim, oferecemos garantia incondicional de 30 dias. Se não ficar satisfeito, devolvemos seu dinheiro sem burocracia." },
  { q: "A bateria dura quanto tempo?", a: "A bateria de íon-lítio da COVIA dura até 4 horas de uso contínuo em uma única carga. Ideal para levar em viagens." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Dúvidas Frequentes
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl shadow-card border-0 px-6 overflow-hidden">
              <AccordionTrigger className="font-display font-bold text-foreground text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
