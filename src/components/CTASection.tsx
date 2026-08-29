import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/config";
import { useInView } from "../hooks/useInView";
import { getImage } from "../data/images";
import { useLang } from "../i18n/LanguageContext";

export default function CTASection() {
  const { ref, isInView } = useInView(0.2);
  const { t } = useLang();

  const contacts = [
    { icon: <Phone className="w-5 h-5" />, label: t("cta.phone"), value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: <MessageCircle className="w-5 h-5" />, label: t("cta.whatsapp"), value: siteConfig.phone, href: `https://wa.me/${siteConfig.whatsapp}` },
    { icon: <Mail className="w-5 h-5" />, label: t("cta.email"), value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: <MapPin className="w-5 h-5" />, label: t("cta.location"), value: siteConfig.location, href: "#" },
  ];

  return (
    <section className="py-12 lg:py-20 bg-[#e8e8e8] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            {t("cta.title1")} <span className="text-gradient">{t("cta.title2")}</span>
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("cta.sub")}
          </p>

          <a
            href="#wasiliana"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#1a1a1a]/80 transition-all duration-300 hover:-translate-y-0.5 text-lg"
          >
            {t("cta.button")}
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="rounded-2xl overflow-hidden border border-[#e4e4e4] mt-12 max-w-4xl mx-auto">
            <img
              src={getImage(20)}
              alt={t("cta.button")}
              loading="lazy"
              className="w-full h-56 object-cover "
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {contacts.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex flex-col items-center gap-3 p-6 bg-white border border-[#dcdcdc] rounded-xl hover:border-[#cfcfcf] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#f2f2f2] rounded-full flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#eaeaea] transition-colors">
                  {item.icon}
                </div>
                <div className="text-center">
                  <span className="text-[#777777] text-xs uppercase tracking-wider">
                    {item.label}
                  </span>
                  <p className="text-[#1a1a1a] font-medium text-sm mt-1">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





