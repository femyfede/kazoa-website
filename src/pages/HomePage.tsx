import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, Eye, ShieldCheck } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function HomePage() {
  const { t } = useLang();
  const benefits = [
    { icon: ClipboardCheck, title: t("home.planTitle"), text: t("home.planText") },
    { icon: Eye, title: t("home.clearTitle"), text: t("home.clearText") },
    { icon: ShieldCheck, title: t("home.qualityTitle"), text: t("home.qualityText") },
  ];

  return (
    <div className="home-page">
      <Hero />
      <section className="benefits-section">
        <div className="section-heading">
          <span className="section-kicker">{t("home.sectionEyebrow")}</span>
          <h2>{t("home.sectionTitle")}</h2>
          <p>{t("home.sectionText")}</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-card-top">
                <span className="benefit-icon"><Icon size={22} strokeWidth={1.7} /></span>
                <span className="benefit-number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="home-cta">
        <div>
          <span className="section-kicker">{t("home.ctaEyebrow")}</span>
          <h2>{t("home.ctaTitle")}</h2>
          <p>{t("home.ctaText")}</p>
        </div>
        <Link to="/contact" className="button button-light">
          {t("cta.button")}
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
