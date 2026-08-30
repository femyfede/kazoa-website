import { useState, useEffect } from "react";
import { Menu, X, HardHat, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/config";
import { useLang } from "../i18n/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { t, lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = siteConfig.nav.map((n) => n.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const toggleLang = () => setLang(lang === "sw" ? "en" : "sw");

  const linkClass = (href: string) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
      active === href.replace("#", "")
        ? "text-[#1a1a1a] font-semibold after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:bg-[#1a1a1a]"
        : "text-[#444444] hover:text-[#1a1a1a]"
    }`;

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
              <a key={item.href} href={item.href} className={linkClass(item.href)}>
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
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  active === item.href.replace("#", "")
                    ? "text-[#1a1a1a] font-semibold bg-[#f2f2f2]"
                    : "text-[#444444] hover:text-[#1a1a1a] hover:bg-[#f2f2f2]"
                }`}
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
