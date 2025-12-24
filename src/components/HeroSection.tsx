import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
    {
        id: 1,
        image: '/CardsandBanner/1.jpg',
        title: "Discover Your Next Adventure",
        subtitle: "AI-curated trips tailored to your style, budget, and dreams."
    },
    {
        id: 2,
        image: '/CardsandBanner/2.jpg',
        title: "Experience the Extraordinary",
        subtitle: "From hidden gems to iconic landmarks, see the world differently."
    },
    {
        id: 3,
        image: '/CardsandBanner/3.jpg',
        title: "Plan Less, Explore More",
        subtitle: "Let our intelligent algorithms handle the logistics for you."
    }
];

export const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Increased duration to 8000ms for a more relaxed pace
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Slideshow */}
            <AnimatePresence>
                <motion.div
                    key={SLIDES[currentSlide].id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} // smooth cubic-bezier
                    className="absolute inset-0 z-0 h-full w-full"
                >
                    <img
                        src={SLIDES[currentSlide].image}
                        alt="Hero Background"
                        className="h-full w-full object-cover"
                    />
                    {/* Enhanced Overlay Blends */}
                    <div className="absolute inset-0 bg-black/30 w-full h-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center md:text-left mt-10">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        {/* Tagline Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span>The Future of Travel Planning</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
                            {SLIDES[currentSlide].title}
                        </h1>

                        <p className="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed font-light max-w-2xl drop-shadow-lg">
                            {SLIDES[currentSlide].subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link
                                to="/generate"
                                className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Planning Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <Link
                                to="/demo"
                                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
                            >
                                Watch Demo
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 right-10 z-20 flex gap-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};
