import { useState } from "react";
import { images } from "../data/images";
import { useInView } from "../hooks/useInView";
import { useLang } from "../i18n/LanguageContext";
import { X } from "lucide-react";

export default function Gallery() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-20 bg-[#e8e8e8] relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("gallery.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
            {t("gallery.title1")} <span className="text-gradient">{t("gallery.title2")}</span>
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto">
            {t("gallery.sub")}
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {images.map((src, i) => (
            <figure
              key={i}
              onClick={() => setOpen(i)}
              className={`mb-4 break-inside-avoid overflow-hidden rounded-xl border border-[#dcdcdc] group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <img
                src={src}
                alt={`Mfano wa ujenzi ${i + 1}`}
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </figure>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] bg-[#1a1a1a]/90 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-[#1a1a1a] flex items-center justify-center hover:bg-[#f2f2f2] transition-colors"
            aria-label="Funga"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(null);
            }}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={images[open]}
            alt={`Mfano wa ujenzi ${open + 1}`}
            className="max-w-full max-h-[85vh] rounded-xl border border-[#dcdcdc]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
