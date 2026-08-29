import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { getImage } from "../data/images";
import { useLang } from "../i18n/LanguageContext";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const projectTypesSw = ["Nyumba ya Kukaa", "Jengo la Biashara", "Ukarabati", "Nyingine"];
const projectTypesEn = ["Residential House", "Commercial Building", "Renovation", "Other"];

export default function ContactForm() {
  const { ref, isInView } = useInView(0.1);
  const { t, lang } = useLang();
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", email: "", projectType: "", location: "", budget: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = t("contact.errName");
    if (!formData.phone.trim()) e.phone = t("contact.errPhoneReq");
    else if (!/^[\d\s+\-()]{8,15}$/.test(formData.phone.trim())) e.phone = t("contact.errPhone");
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) e.email = t("contact.errEmail");
    if (!formData.projectType) e.projectType = t("contact.errType");
    if (!formData.message.trim()) e.message = t("contact.errMsg");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = ev.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  if (submitted) {
    return (
      <section id="wasiliana" className="py-12 lg:py-20 bg-[#e8e8e8] relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white border border-[#cfcfcf] rounded-2xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-[#1a1a1a] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{t("contact.successTitle")}</h3>
            <p className="text-[#555555] text-lg">{t("contact.successMsg")}</p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", projectType: "", location: "", budget: "", message: "" }); }}
              className="mt-8 px-6 py-3 bg-[#f2f2f2] text-[#1a1a1a] font-medium rounded-lg hover:bg-[#eaeaea] transition-colors"
            >
              {t("contact.reset")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const types = lang === "en" ? projectTypesEn : projectTypesSw;

  return (
    <section id="wasiliana" className="py-12 lg:py-20 bg-[#e8e8e8] relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block text-[#555555] font-semibold text-sm uppercase tracking-widest mb-4">
            {t("contact.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold text-[#1a1a1a]">
            {t("contact.title1")} <span className="text-gradient">{t("contact.title2")}</span> {t("contact.title3")}
          </h2>
          <p className="text-[#777777] max-w-xl mx-auto">{t("contact.sub")}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#e4e4e4] mb-10">
          <img
            src={getImage(21)}
            alt={t("contact.eyebrow")}
            loading="lazy"
            className="w-full h-48 sm:h-64 object-cover "
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className={`bg-white border border-[#dcdcdc] rounded-2xl p-6 lg:p-10 transition-all duration-700 delay-200 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">{t("contact.name")}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-[#1a1a1a] placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-colors ${errors.name ? "border-[#cccccc]" : "border-[#dcdcdc]"}`}
                placeholder={t("contact.namePh")} />
              {errors.name && <p className="mt-1 text-sm text-[#1a1a1a] font-semibold">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#333333] mb-2">{t("contact.phone")}</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-[#1a1a1a] placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-colors ${errors.phone ? "border-[#cccccc]" : "border-[#dcdcdc]"}`}
                placeholder={t("contact.phonePh")} />
              {errors.phone && <p className="mt-1 text-sm text-[#1a1a1a] font-semibold">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">{t("contact.email")}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-[#1a1a1a] placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-colors ${errors.email ? "border-[#cccccc]" : "border-[#dcdcdc]"}`}
                placeholder={t("contact.emailPh")} />
              {errors.email && <p className="mt-1 text-sm text-[#1a1a1a] font-semibold">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-[#333333] mb-2">{t("contact.projectType")}</label>
              <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-colors ${!formData.projectType ? "text-[#777777]" : ""} ${errors.projectType ? "border-[#cccccc]" : "border-[#dcdcdc]"}`}>
                <option value="">{t("contact.projectTypePlaceholder")}</option>
                {types.map((type) => (<option key={type} value={type} className="bg-[#e8e8e8]">{type}</option>))}
              </select>
              {errors.projectType && <p className="mt-1 text-sm text-[#1a1a1a] font-semibold">{errors.projectType}</p>}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-[#333333] mb-2">{t("contact.location")}</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#dcdcdc] rounded-xl text-[#1a1a1a] placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-colors"
                placeholder={t("contact.locationPh")} />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-[#333333] mb-2">{t("contact.budget")}</label>
              <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#dcdcdc] rounded-xl text-[#1a1a1a] placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-colors"
                placeholder={t("contact.budgetPh")} />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">{t("contact.message")}</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
              className={`w-full px-4 py-3 bg-white border rounded-xl text-[#1a1a1a] placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-colors resize-none ${errors.message ? "border-[#cccccc]" : "border-[#dcdcdc]"}`}
              placeholder={t("contact.messagePh")} />
            {errors.message && <p className="mt-1 text-sm text-[#1a1a1a] font-semibold">{errors.message}</p>}
          </div>

          <button type="submit"
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#1a1a1a]/80 transition-all duration-300">
            <Send className="w-5 h-5" />
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}







