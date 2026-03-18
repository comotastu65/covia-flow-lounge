import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/244955397803?text=Ol%C3%A1%2C%20estou%20interessada%20no%20Massageador%20Pistola%20da%20Covia%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20antes%20de%20poder%20comprar."
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
