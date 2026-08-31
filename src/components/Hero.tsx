import { ArrowRight, ChevronDown } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import constructionImg from "../assets/images/construction-02.jpeg";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <img
          src={constructionImg}
          alt="Ujenzi wa kitaalamu"
          className="w-full h-full object-cover grayscale"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#e8e8e8]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8e8e8]/90 via-[#e8e8e8]/45 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#cfcfcf] rounded-full mb-8">
            <span className="w-2 h-2 bg-[#1a1a1a] rounded-full" />
            <span className="text-[#444444] text-sm font-medium tracking-wide">
              {t("hero.tagline")}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1a1a1a] leading-tight mb-6">
            {t("hero.headline")}
          </h1>

          <p className="text-lg sm:text-xl text-[#555555] mb-10 max-w-2xl leading-relaxed">
            {t("hero.subheadline")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#wasiliana"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#1a1a1a]/80 transition-all duration-300 hover:-translate-y-0.5"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#mchakato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1a1a1a]/30 text-[#1a1a1a] font-semibold rounded-xl hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#777777] hover:text-[#1a1a1a] transition-colors"
        aria-label={t("hero.scroll")}
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

