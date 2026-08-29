import { constructionProcess } from "../data/constructionProcess";
import ProcessCard from "./ProcessCard";
import { useInView } from "../hooks/useInView";
import { useLang } from "../i18n/LanguageContext";

export default function ProcessTimeline() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useLang();

  return (
    <section id="mchakato" className="py-20 lg:py-32 bg-[#e8e8e8] relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("process.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            {t("process.title1")}
            <span className="text-gradient">{" "}{t("process.title2")}</span>
          </h2>
          <p className="text-[#777777] max-w-2xl mx-auto text-lg">
            {t("process.sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {constructionProcess.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


