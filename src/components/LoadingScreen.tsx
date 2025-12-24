import { motion } from 'framer-motion';
import { Plane, Map, Wallet, Sparkles, Coffee, Camera, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const loadingSteps = [
    { icon: Map, text: "Scanning the globe for hidden gems..." },
    { icon: Coffee, text: "Tasting local cuisines virtually..." },
    { icon: Sun, text: "Calculating perfect sunset angles..." },
    { icon: Camera, text: "Curating Instagrammable spots..." },
    { icon: Plane, text: "Finding the smoothest flights..." },
    { icon: Wallet, text: "Negotiating with hotels (kidding, optimizing budget)..." },
    { icon: Sparkles, text: "Polishing your dream itinerary..." }
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Progress bar timer
        const timer = setInterval(() => {
            setProgress(old => {
                if (old >= 100) return 100;
                // Non-linear progress for realism
                const increment = Math.random() * 1.5;
                return Math.min(100, old + increment);
            });
        }, 50);

        // Step switcher
        const stepTimer = setInterval(() => {
            setCurrentStep(prev => {
                if (prev >= loadingSteps.length - 1) return prev;
                return prev + 1;
            });
        }, 1200);

        // Completion
        const completionTimer = setTimeout(() => {
            onComplete();
        }, 8500); // Slightly longer for more steps

        return () => {
            clearInterval(timer);
            clearInterval(stepTimer);
            clearTimeout(completionTimer);
        };
    }, [onComplete]);

    const CurrentIcon = loadingSteps[currentStep].icon;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="relative z-10 w-full max-w-lg px-8 text-center">
                {/* Icon Animation Container */}
                <div className="mb-16 relative flex justify-center h-32 items-center">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: -20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-white shadow-2xl shadow-purple-500/30 ring-4 ring-white/10 backdrop-blur-3xl"
                    >
                        <CurrentIcon className="w-10 h-10" />
                    </motion.div>

                    {/* Floating Orbs */}
                    <motion.div
                        className="absolute w-32 h-32 rounded-full border border-blue-500/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-40 h-40 rounded-full border border-purple-500/10"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 mb-10 relative">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span>Generating</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                            style={{ width: `${progress}%` }}
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </div>

                {/* Status Text */}
                <div className="h-20 flex items-center justify-center">
                    <motion.h3
                        key={loadingSteps[currentStep].text}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight"
                    >
                        {loadingSteps[currentStep].text}
                    </motion.h3>
                </div>
            </div>
        </div>
    );
};
