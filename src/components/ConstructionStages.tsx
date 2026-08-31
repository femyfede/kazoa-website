import { constructionStages } from "../data/constructionProcess";
import { useInView } from "../hooks/useInView";
import { getImage } from "../data/images";
import { useLang } from "../i18n/LanguageContext";

export default function ConstructionStages() {
  const { ref, isInView } = useInView(0.1);
  const { t, lang } = useLang();

  return (
    <section className="py-12 lg:py-20 bg-[#e8e8e8] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("stages.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("stages.title")} <span className="text-gradient">{t("stages.title2")}</span>
          </h2>
          <p className="text-[#777777] max-w-xl mx-auto">
            {t("stages.sub")}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#e4e4e4] mb-10">
          <img
            src={getImage(16)}
            alt="Hatua za ujenzi"
            loading="lazy"
            className="w-full h-56 sm:h-72 object-cover "
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {constructionStages[lang].map((stage, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-4 bg-[#2a2a2a] border border-[#e4e4e4] rounded-xl hover:border-[#cfcfcf] hover:bg-[#dcdcdc] hover:-translate-y-1 hover:shadow-md transition-all duration-300 group ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#eaeaea] transition-colors">
                <span className="text-white font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-white font-medium text-sm flex-1">
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







