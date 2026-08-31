import { useInView } from "../hooks/useInView";
import type { ProcessStep } from "../data/constructionProcess";
import { getImage } from "../data/images";
import { useLang } from "../i18n/LanguageContext";
import {
  Users, Compass, Calculator, FileText, Wrench,
  Layers, ShieldCheck, HardHat, Package, UserCheck,
  MessageCircle, Paintbrush, KeyRound
} from "lucide-react";

const iconMap: Record<number, React.ReactNode> = {
  1: <Users className="w-6 h-6" />,
  2: <Compass className="w-6 h-6" />,
  3: <Calculator className="w-6 h-6" />,
  4: <FileText className="w-6 h-6" />,
  5: <Wrench className="w-6 h-6" />,
  6: <Layers className="w-6 h-6" />,
  7: <ShieldCheck className="w-6 h-6" />,
  8: <HardHat className="w-6 h-6" />,
  9: <Package className="w-6 h-6" />,
  10: <UserCheck className="w-6 h-6" />,
  11: <MessageCircle className="w-6 h-6" />,
  12: <Paintbrush className="w-6 h-6" />,
  13: <KeyRound className="w-6 h-6" />,
};

export default function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const { ref, isInView } = useInView(0.1);
  const { lang } = useLang();

  const title = lang === "en" ? step.titleEn : step.title;
  const description = lang === "en" ? step.descriptionEn : step.description;
  const details = lang === "en" ? step.detailsEn : step.details;
  const highlight = lang === "en" ? step.highlightEn : step.highlight;

  return (
    <div
      ref={ref}
      className={`group bg-[#2d5a27] border border-[#2d5a27]/80 rounded-2xl overflow-hidden hover:border-[#cfcfcf] transition-all duration-300 hover:shadow-lg hover:shadow-[#1a1a1a]/5 hover:-translate-y-1 flex flex-col ${
        isInView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="relative">
        <img
          src={getImage(step.imageIndex + 2)}
          alt={title}
          loading="lazy"
          className="w-full h-40 object-cover  group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 w-10 h-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center font-bold text-sm">
          {String(step.id).padStart(2, "0")}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-[#f2f2f2] rounded-xl flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#eaeaea] transition-colors shrink-0">
            {iconMap[step.id]}
          </div>
          <h3 className="text-base font-bold text-white leading-tight">{title}</h3>
        </div>

        <p className="text-[#d4d4d4] text-sm leading-relaxed mb-4">{description}</p>

        {details && (
          <ul className="space-y-1.5 mb-4">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#8a8a8a]">
                <span className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full mt-1.5 shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        )}

        {highlight && (
<div className="mt-auto px-4 py-3 bg-[#2d5a27] border border-[#2d5a27]/80 rounded-lg">
            <p className="text-white font-semibold text-xs">{highlight}</p>
          </div>
        )}
      </div>
    </div>
  );
}



