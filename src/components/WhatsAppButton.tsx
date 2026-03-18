import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20COVIA"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-whatsapp shadow-elevated transition-transform duration-200 hover:scale-105"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="h-7 w-7 fill-background text-background" />
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
      1
    </span>
  </a>
);

export default WhatsAppButton;
