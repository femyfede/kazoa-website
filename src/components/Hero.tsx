import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import projectImage from "../assets/images/construction-04.jpeg";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {t("hero.tagline")}
          </span>
          <h1>{t("hero.headline")}</h1>
          <p className="hero-description">{t("hero.subheadline")}</p>
          <div className="hero-actions">
            <Link to="/contact" className="button button-primary">
              {t("hero.ctaPrimary")}
              <ArrowRight size={18} />
            </Link>
            <Link to="/process" className="button button-text">
              {t("hero.ctaSecondary")}
              <ArrowDown size={16} />
            </Link>
          </div>
          <div className="hero-promise">
            <Check size={17} />
            <span>{t("home.promise")}</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={projectImage}
            alt={t("home.projectImageAlt")}
            className="hero-image"
            loading="eager"
          />
          <div className="hero-image-shade" />
          <div className="project-note">
            <span className="project-note-label">{t("home.projectLabel")}</span>
            <strong>{t("home.projectTitle")}</strong>
            <span>{t("home.projectLocation")}</span>
          </div>
          <div className="hero-image-mark" aria-hidden="true">K.</div>
        </div>
      </div>
    </section>
  );
}
