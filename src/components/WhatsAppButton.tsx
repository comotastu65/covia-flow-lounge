import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20COVIA"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-200"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-background fill-background" />
    {/* Notification badge */}
    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
      1
    </span>
  </a>
);

export default WhatsAppButton;
