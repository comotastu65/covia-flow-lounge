import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "A pistola de massagem realmente funciona?", a: "Sim. A terapia percussiva ajuda a aliviar tensão muscular, melhorar a sensação de relaxamento e apoiar a recuperação após esforço físico." },
  { q: "É seguro usar em casa?", a: "Sim. A COVIA foi pensada para uso doméstico, com ajuste de intensidade para você adaptar a aplicação ao seu conforto." },
  { q: "Quanto tempo devo usar por sessão?", a: "Em geral, 1 a 2 minutos por grupo muscular já são suficientes para sentir alívio e relaxamento." },
  { q: "Tem garantia?", a: "Sim, oferecemos garantia de 30 dias para você testar com mais tranquilidade." },
  { q: "A bateria dura quanto tempo?", a: "A bateria oferece autonomia para várias sessões ao longo da rotina, sem precisar recarregar o tempo todo." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
          Dúvidas frequentes
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-card/85 px-6 shadow-card backdrop-blur-sm">
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-body text-sm leading-relaxed text-muted-foreground">
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
