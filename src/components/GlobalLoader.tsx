import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlobalLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user has visited in this session
        const hasVisited = sessionStorage.getItem('hasVisited');

        if (hasVisited) {
            setIsLoading(false);
            return;
        }

        // Simulating resource loading for first visit
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('hasVisited', 'true');
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                >
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-32 h-32"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[40px] opacity-40 animate-pulse" />
                            <img
                                src="/logo.png"
                                alt="Luma"
                                className="relative z-10 w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            />
                        </motion.div>

                        {/* Text Reveal */}
                        <div className="flex flex-col items-center gap-2">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                            >
                                Luma
                            </motion.h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent w-full"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="text-sm text-gray-500 uppercase tracking-[0.2em]"
                            >
                                Reimagining Travel
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
