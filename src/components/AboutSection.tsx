import { CheckCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { aboutPoints } from "../data/journey";
import { useLang } from "../i18n/LanguageContext";
import constructionImg from "../assets/images/construction-02.jpeg";

export default function AboutSection() {
  const { ref, isInView } = useInView(0.2);
  const { t, lang } = useLang();

  return (
    <section id="about" className="py-12 lg:py-20 bg-[#e8e8e8] relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`transition-all duration-700 ${
              isInView ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
              {t("about.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              {t("about.title1")}{" "}
              <span className="text-gradient">{t("about.title2")}</span>
            </h2>
            <p className="text-lg text-[#555555] mb-8 leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-[#777777] mb-8 leading-relaxed">
              {t("about.p2")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutPoints[lang].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#e4e4e4] hover:border-[#cfcfcf] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#1a1a1a] shrink-0" />
                  <span className="text-sm text-[#333333]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-200 ${
              isInView ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={constructionImg}
                alt="Mfumo wa kitaalamu wa ujenzi"
                className="w-full h-[400px] lg:h-[500px] object-cover "
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#f2f2f2] rounded-2xl border border-[#dcdcdc] blur-sm" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f2f2f2] rounded-2xl border border-[#dcdcdc] blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}





