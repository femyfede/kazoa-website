import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/config";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className="w-12 h-12 rounded-full bg-[#23483c] text-white flex items-center justify-center shadow-lg hover:-translate-y-1 hover:bg-[#19392f] transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
