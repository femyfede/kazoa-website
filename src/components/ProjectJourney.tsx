import {
  User, MapPin, Ruler, Calculator, FileText, Shovel,
  HardHat, CheckCircle, Paintbrush, Search, KeyRound, ArrowDown
} from "lucide-react";
import { projectJourney } from "../data/journey";
import { useInView } from "../hooks/useInView";
import { getImage } from "../data/images";
import { useLang } from "../i18n/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  user: <User className="w-5 h-5" />,
  "map-pin": <MapPin className="w-5 h-5" />,
  ruler: <Ruler className="w-5 h-5" />,
  calculator: <Calculator className="w-5 h-5" />,
  "file-text": <FileText className="w-5 h-5" />,
  shovel: <Shovel className="w-5 h-5" />,
  "hard-hat": <HardHat className="w-5 h-5" />,
  "check-circle": <CheckCircle className="w-5 h-5" />,
  paintbrush: <Paintbrush className="w-5 h-5" />,
  search: <Search className="w-5 h-5" />,
  key: <KeyRound className="w-5 h-5" />,
};

export default function ProjectJourney() {
  const { ref, isInView } = useInView(0.1);
  const { t, lang } = useLang();

  return (
    <section className="py-12 lg:py-20 bg-[#e8e8e8] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("journey.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            {t("journey.title1")} <span className="text-gradient">{t("journey.title2")}</span>{" "}
            {t("journey.title3")} <span className="text-gradient">{t("journey.title4")}</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#e4e4e4] mb-12">
          <img
            src={getImage(19)}
            alt={t("journey.eyebrow")}
            loading="lazy"
            className="w-full h-56 sm:h-72 object-cover "
          />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white via-white/50 to-transparent" />

          <div className="space-y-2">
            {projectJourney.map((step, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-6 transition-all duration-500 ${
                  isInView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative z-10 w-16 h-16 bg-[#1a1a1a] border-2 border-[#1a1a1a] rounded-full flex items-center justify-center shrink-0">
                  <div className="text-white">{iconMap[step.icon]}</div>
                </div>

                <div className="flex-1 bg-white border border-[#dcdcdc] rounded-xl px-6 py-4 hover:border-[#cfcfcf] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <span className="text-[#555555] font-bold text-xs">
                    HATUA {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#1a1a1a] font-semibold text-lg">
                    {lang === "en" ? step.labelEn : step.label}
                  </p>
                </div>

                {i < projectJourney.length - 1 && (
                  <ArrowDown className="absolute left-8 top-16 -translate-x-1/2 w-4 h-4 text-[#777777]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






