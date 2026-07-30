import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollProgress from "./components/layout/ScrollProgress.jsx";
import BackToTop from "./components/layout/BackToTop.jsx";
import LoadingScreen from "./components/layout/LoadingScreen.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Skills = lazy(() => import("./pages/Skills.jsx"));
const Certifications = lazy(() => import("./pages/Certifications.jsx"));
const Resume = lazy(() => import("./pages/Resume.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  if (booting) return <LoadingScreen />;

  return (
    <div className="relative min-h-screen bg-base-950 text-ink-100 selection:bg-cyan-glow/20">
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  );
}
