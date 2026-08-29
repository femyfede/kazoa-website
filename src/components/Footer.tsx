import { HardHat, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../data/config";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#e8e8e8] border-t border-[#dcdcdc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#1a1a1a]">{siteConfig.name}</span>
            </div>
            <p className="text-[#777777] max-w-sm leading-relaxed mb-6">{t("footer.desc")}</p>
            <div className="space-y-2">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">
                <Phone className="w-4 h-4" />{siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">
                <Mail className="w-4 h-4" />{siteConfig.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <MapPin className="w-4 h-4" />{siteConfig.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#1a1a1a] font-semibold mb-4">{t("footer.quick")}</h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#1a1a1a] font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li><a href="#mchakato" className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">{t("footer.sProcess")}</a></li>
              <li><a href="#fedha" className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">{t("footer.sFinance")}</a></li>
              <li><a href="#ubora" className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">{t("footer.sQuality")}</a></li>
              <li><a href="#wasiliana" className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">{t("footer.sContact")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#dcdcdc] text-center">
          <p className="text-sm text-[#777777]">&copy; {year} {siteConfig.name}. {t("footer.copy")}</p>
        </div>
      </div>
    </footer>
  );
}



