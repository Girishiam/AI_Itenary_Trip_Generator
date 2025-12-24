import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyUseLuma } from './components/WhyUseLuma';
import { HowItWorks } from './components/HowItWorks';
import { TravelForm } from './components/TravelForm';
import { SuggestionCarousel } from './components/SuggestionCarousel';
import { GlobalFlightPaths } from './components/GlobalFlightPaths';
import { FeaturedGallery } from './components/FeaturedGallery';
import { AboutUs } from './components/AboutUs';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  const { theme } = useStore();

  // Initialize Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Sync theme with document class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="relative min-h-screen w-full">
        {/* Navbar Overlay */}
        <Navbar />
        <GlobalFlightPaths />

        {/* Main Content Area - Full Screen for Hero */}
        <main className="flex flex-col items-center justify-center min-h-screen w-full pt-0">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <div className="relative z-20 -mt-24 w-full px-4 mb-24">
                  <TravelForm />
                </div>
                <SuggestionCarousel />
                <WhyUseLuma />
                <HowItWorks />
                <FeaturedGallery />
                <AboutUs />
                <FAQ />
                <Footer />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
