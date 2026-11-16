import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import FloatingContact from "../components/FloatingContact";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
}
