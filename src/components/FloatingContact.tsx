import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/config";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shadow-lg shadow-[#1a1a1a]/20 hover:-translate-y-1 hover:bg-[#1a1a1a]/80 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Piga simu"
        title="Piga simu"
        className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shadow-lg shadow-[#1a1a1a]/20 hover:-translate-y-1 hover:bg-[#1a1a1a]/80 transition-all duration-300"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
