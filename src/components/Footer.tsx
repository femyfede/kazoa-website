import { Link } from "react-router-dom";
import { HardHat } from "lucide-react";
import { siteConfig } from "../data/config";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark"><HardHat size={20} strokeWidth={1.8} /></span>
            <span>{siteConfig.name}<i>.</i></span>
          </Link>
          <p>{t("footer.desc")}</p>
          <div className="footer-contact">
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>{t("footer.quick")}</h3>
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{t(`nav.${item.key}`)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t("footer.services")}</h3>
          <ul>
            <li><Link to="/process">{t("footer.sProcess")}</Link></li>
            <li><Link to="/finance">{t("footer.sFinance")}</Link></li>
            <li><Link to="/quality">{t("footer.sQuality")}</Link></li>
            <li><Link to="/contact">{t("footer.sContact")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {year} {siteConfig.name}. {t("footer.copy")}
      </div>
    </footer>
  );
}
