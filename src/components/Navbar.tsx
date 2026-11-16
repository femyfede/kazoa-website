import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, HardHat, Menu, X } from "lucide-react";
import { siteConfig } from "../data/config";
import { useLang } from "../i18n/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useLang();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleLang = () => setLang(lang === "sw" ? "en" : "sw");

  return (
    <header className="site-nav">
      <nav className="nav-inner" aria-label={t("nav.aria")}>
        <Link to="/" className="brand" aria-label={siteConfig.name}>
          <span className="brand-mark"><HardHat size={20} strokeWidth={1.8} /></span>
          <span>{siteConfig.name}<i>.</i></span>
        </Link>

        <div className="nav-links">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={location.pathname === item.href ? "nav-link active" : "nav-link"}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button type="button" className="language-toggle" onClick={toggleLang}>
            {lang === "sw" ? "EN" : "SW"}
          </button>
          <Link to="/contact" className="nav-cta">
            {t("nav.cta")} <ArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? t("nav.close") : t("nav.menu")}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={location.pathname === item.href ? "mobile-nav-link active" : "mobile-nav-link"}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <Link to="/contact" className="mobile-nav-cta">{t("nav.cta")}</Link>
        </div>
      )}
    </header>
  );
}
