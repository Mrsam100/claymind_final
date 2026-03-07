import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { getDefaultRouteForRole } from "../../../lib/utils/rbac";
import Navbar from "../components/sections/navbar";
import HeroSection from "../components/sections/hero";
import FeaturesGrid from "../components/sections/features-grid";
import Problem from "../components/sections/problem";
import Solution from "../components/sections/solution";
import Modules from "../components/sections/modules";
import AgeGroup from "../components/sections/age-group";
import CTA from "../components/sections/cta";
import Footer from "../components/sections/footer";

export default function LandingPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading } = useAuth();

  // Redirect authenticated users to their dashboard
  useEffect(() => {
    if (!loading && isAuthenticated && user) {
      const dashboardPath = getDefaultRouteForRole(user);
      navigate(dashboardPath, { replace: true });
    }
  }, [loading, isAuthenticated, user, navigate]);

  // Load Fredoka font for the landing page
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <Problem />
        <Solution />
        <Modules />
        <AgeGroup />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
