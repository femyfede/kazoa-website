import { useState, useEffect } from "react";
import { Menu, X, HardHat, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/config";
import { useLang } from "../i18n/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "sw" ? "en" : "sw");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#e8e8e8] border-b border-[#dcdcdc]" : "bg-[#e8e8e8]/90 border-b border-[#e4e4e4]"
      }`}
      role="navigation"
      aria-label={t("nav.aria")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group" aria-label="Nyumbani">
            <div className="w-9 h-9 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-[#1a1a1a]/80 transition-colors">
              <HardHat className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">
              {siteConfig.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-[#444444] hover:text-[#1a1a1a] transition-all duration-200"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              aria-label="Badilisha lugha"
              className="px-3 py-2 border border-[#cfcfcf] rounded-lg text-sm font-semibold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              {lang === "sw" ? "EN" : "SW"}
            </button>

            <div className="hidden lg:block">
              <a
                href="#wasiliana"
                className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-semibold rounded-lg hover:bg-[#1a1a1a]/80 transition-colors"
              >
                {t("nav.cta")}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-[#1a1a1a] hover:bg-[#f2f2f2] rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? t("nav.close") : t("nav.menu")}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#e8e8e8] border-t border-[#dcdcdc]">
          <div className="px-4 py-4 space-y-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-[#444444] hover:text-[#1a1a1a] hover:bg-[#f2f2f2] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <a
              href="#wasiliana"
              className="block mt-3 px-4 py-3 bg-[#1a1a1a] text-white text-center font-semibold rounded-lg hover:bg-[#1a1a1a]/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}


