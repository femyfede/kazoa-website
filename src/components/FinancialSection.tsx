import { Package, Truck, Users, Settings, TrendingUp } from "lucide-react";
import { financialItems, financialNote, financialNoteEn } from "../data/financial";
import { useInView } from "../hooks/useInView";
import { getImage } from "../data/images";
import { useLang } from "../i18n/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  package: <Package className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  settings: <Settings className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
};

export default function FinancialSection() {
  const { ref, isInView } = useInView(0.1);
  const { t, lang } = useLang();

  return (
    <section id="fedha" className="py-12 lg:py-20 bg-[#e8e8e8] relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("finance.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            {t("finance.title1")}{" "}
            <span className="text-gradient">{t("finance.title2")}</span>{" "}
            {t("finance.title3")}
          </h2>
          <p className="text-[#777777] max-w-2xl mx-auto text-lg">
            {t("finance.sub")}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#e4e4e4] mb-12">
          <img
            src={getImage(18)}
            alt={t("finance.eyebrow")}
            loading="lazy"
            className="w-full h-56 sm:h-72 object-cover "
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {financialItems.map((item, i) => (
            <div
              key={i}
              className={`bg-white border border-[#dcdcdc] rounded-2xl p-6 text-center hover:border-[#cfcfcf] hover:bg-[#dcdcdc] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#f2f2f2] rounded-xl flex items-center justify-center text-[#1a1a1a] mx-auto mb-4 group-hover:bg-[#eaeaea] transition-colors">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                {lang === "en" ? item.titleEn : item.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {lang === "en" ? item.descriptionEn : item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="bg-[#f2f2f2] border border-[#cfcfcf] rounded-2xl p-6 lg:p-8 text-center">
            <p className="text-[#333333] text-lg leading-relaxed max-w-3xl mx-auto">
              {lang === "en" ? financialNoteEn : financialNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}






