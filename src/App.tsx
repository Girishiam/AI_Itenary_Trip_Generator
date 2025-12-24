import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/ui/PageTransition';
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
import { ChatWidget } from './components/ChatWidget';
import { GlobalLoader } from './components/GlobalLoader';

// Pages
import { GenerateItinerary } from './pages/GenerateItinerary';
import { Destinations } from './pages/Destinations';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { PrivacyPolicy, TermsOfService, CookiePolicy } from './pages/Legal';
import { TripDetails } from './pages/TripDetails';
import { WatchDemo } from './pages/WatchDemo';
import { DestinationDetails } from './pages/DestinationDetails';
import { ForgotPassword } from './pages/ForgotPassword';
import { OTPVerification } from './pages/OTPVerification';
import { ResetPassword } from './pages/ResetPassword';
import { SavedTrips } from './pages/SavedTrips';

// Define custom event for Lenis
declare global {
  interface Window {
    lenis: Lenis;
  }
}

const AnimatedRoutes = () => {
  const location = useLocation();

  // Scroll to top when exit animation is complete
  const onExitComplete = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Wrapper for Landing Page components
  const LandingPage = () => (
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
  );

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <LandingPage />
          </PageTransition>
        } />
        <Route path="/generate" element={<PageTransition><GenerateItinerary /></PageTransition>} />
        <Route path="/trip-plan" element={<PageTransition><TripDetails /></PageTransition>} />
        <Route path="/destinations" element={<PageTransition><Destinations /></PageTransition>} />
        <Route path="/destination/:id" element={<PageTransition><DestinationDetails /></PageTransition>} />
        <Route path="/suggestions" element={<PageTransition><Destinations /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/signin" element={<PageTransition><SignIn /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        <Route path="/forgot-password" element={<PageTransition><ForgotPassword /></PageTransition>} />
        <Route path="/verify-otp" element={<PageTransition><OTPVerification /></PageTransition>} />
        <Route path="/reset-password" element={<PageTransition><ResetPassword /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><CookiePolicy /></PageTransition>} />
        <Route path="/demo" element={<PageTransition><WatchDemo /></PageTransition>} />
        <Route path="/saved-trips" element={<PageTransition><SavedTrips /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { theme } = useStore();

  // Initialize Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    window.lenis = lenis; // Expose to window for global access

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // @ts-ignore
      window.lenis = null;
    };
  }, []);

  // Sync theme with document class
  // Sync theme with document class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Use ChatWidget and GlobalLoader
  return (
    <Router>
      <div className="relative min-h-screen w-full">
        <GlobalLoader />

        {/* Navbar Overlay */}
        <Navbar />
        <GlobalFlightPaths />

        {/* Main Content Area */}
        <main>
          <AnimatedRoutes />
        </main>

        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;


