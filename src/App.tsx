import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import StagesPage from "./pages/StagesPage";
import QualityPage from "./pages/QualityPage";
import FinancePage from "./pages/FinancePage";
import JourneyPage from "./pages/JourneyPage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="stages" element={<StagesPage />} />
            <Route path="quality" element={<QualityPage />} />
            <Route path="finance" element={<FinancePage />} />
            <Route path="journey" element={<JourneyPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
