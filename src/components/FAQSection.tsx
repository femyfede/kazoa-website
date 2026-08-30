import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function FAQSection() {
  const { t } = useLang();
  const items = t("faq.items") as unknown as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="maswali" className="py-12 lg:py-20 bg-[#e8e8e8] relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("faq.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
            {t("faq.title1")} <span className="text-gradient">{t("faq.title2")}</span>
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto">{t("faq.sub")}</p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white border border-[#dcdcdc] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#cfcfcf] hover:-translate-y-0.5 hover:shadow-md"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#1a1a1a]">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[#555555] leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
