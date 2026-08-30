import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProcessTimeline from "./components/ProcessTimeline";
import ConstructionStages from "./components/ConstructionStages";
import QualitySafety from "./components/QualitySafety";
import FinancialSection from "./components/FinancialSection";
import ProjectJourney from "./components/ProjectJourney";
import Gallery from "./components/Gallery";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import FloatingContact from "./components/FloatingContact";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#e8e8e8]">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <ProcessTimeline />
          <ConstructionStages />
          <QualitySafety />
          <FinancialSection />
          <ProjectJourney />
          <Gallery />
          <FAQSection />
          <CTASection />
          <ContactForm />
        </main>
        <Footer />
        <BackToTop />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}
