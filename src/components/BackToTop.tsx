import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={toTop}
      aria-label={t("back")}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-[#1a1a1a]/30 bg-[#1a1a1a] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#333333] ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}


