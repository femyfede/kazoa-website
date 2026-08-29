import { Shield, Eye, AlertTriangle, Wrench, Package } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useLang } from "../i18n/LanguageContext";
import { getImage } from "../data/images";

const qualityItems = [
  {
    icon: <Eye className="w-6 h-6" />,
    sw: {
      title: "Udhibiti wa Ubora",
      points: [
        "Kagua level, plumb, vipimo na alignment mara kwa mara",
        "Hakikisha materials ni za kiwango kinachotakiwa",
        "Curing inafanyika ipasavyo",
        "Kazi haifunikwi kabla ya kukaguliwa",
      ],
    },
    en: {
      title: "Quality Control",
      points: [
        "Check level, plumb, measurements and alignment regularly",
        "Ensure materials are of the required standard",
        "Curing is done properly",
        "Work is not covered before being inspected",
      ],
    },
  },
  {
    icon: <Shield className="w-6 h-6" />,
    sw: {
      title: "Usalama Kazini",
      points: [
        "Tumia vifaa vya kujikinga: helmet, viatu, gloves",
        "Scaffolding na kazi za juu zipangwe kwa usalama",
        "Kazi za umeme na structural zifanywe na watu wenye uwezo",
      ],
    },
    en: {
      title: "Safety at Work",
      points: [
        "Use protective gear: helmet, boots, gloves",
        "Scaffolding and work at height arranged safely",
        "Electrical and structural works done by capable people",
      ],
    },
  },
];

const managementItems = [
  {
    icon: <Package className="w-6 h-6" />,
    sw: {
      title: "Usimamizi wa Vifaa",
      points: [
        "Weka kumbukumbu ya vifaa vilivyoingia, vilivyotumika na vilivyobaki",
        "Punguza upotevu, wizi na matumizi yasiyo ya lazima",
        "Panga ununuzi kwa awamu",
      ],
    },
    en: {
      title: "Materials Management",
      points: [
        "Keep records of materials in, used and remaining",
        "Reduce waste, theft and unnecessary use",
        "Plan purchases in stages",
      ],
    },
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    sw: {
      title: "Usimamizi wa Mafundi",
      points: [
        "Gawa majukumu kwa uwazi",
        "Eleza kiwango cha kazi kinachotakiwa",
        "Kagua kazi kabla ya kuendelea na hatua inayofuata",
        "Rekodi malipo na kazi waliyokamilisha",
      ],
    },
    en: {
      title: "Workers Management",
      points: [
        "Assign tasks clearly",
        "Explain the required work standard",
        "Inspect work before the next step",
        "Record payments and completed work",
      ],
    },
  },
];

function Card({
  items,
  isInView,
  delay,
  lang,
}: {
  items: typeof qualityItems;
  isInView: boolean;
  delay: number;
  lang: "sw" | "en";
}) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className={`bg-white border border-[#dcdcdc] rounded-2xl p-6 hover:border-[#cfcfcf] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: `${delay + i * 100}ms` }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#f2f2f2] rounded-xl flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#eaeaea] transition-colors shrink-0">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a]">
              {lang === "en" ? item.en.title : item.sw.title}
            </h3>
          </div>
          <ul className="space-y-2 ml-16">
            {(lang === "en" ? item.en.points : item.sw.points).map((point, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-[#555555]">
                <span className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full mt-1.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function QualitySafety() {
  const { ref, isInView } = useInView(0.1);
  const { t, lang } = useLang();

  return (
    <section id="ubora" className="py-12 lg:py-20 bg-[#e8e8e8] relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("quality.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            {t("quality.title1")}{" "}
            <span className="text-gradient">{t("quality.title2")}</span>
          </h2>
          <p className="text-[#777777] max-w-2xl mx-auto text-lg">
            {t("quality.sub")}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#e4e4e4] mb-12">
          <img
            src={getImage(17)}
            alt={t("quality.eyebrow")}
            loading="lazy"
            className="w-full h-56 sm:h-72 object-cover "
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card items={qualityItems} isInView={isInView} delay={0} lang={lang} />
          <Card items={managementItems} isInView={isInView} delay={200} lang={lang} />
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="bg-[#f2f2f2] border border-[#cfcfcf] rounded-2xl p-6 lg:p-8 text-center">
            <AlertTriangle className="w-8 h-8 text-[#1a1a1a] mx-auto mb-4" />
            <p className="text-[#1a1a1a] font-bold text-lg lg:text-xl">
              {t("quality.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}





